/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StateService } from '@uirouter/angular';
import { EMPTY, Subject } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';

import { UIRouterState, UIRouterStateParams } from '../../../../ajs-upgraded-providers';
import { SnackBarService } from '../../../../services-ngx/snack-bar.service';
import { GioPermissionService } from '../../../../shared/components/gio-permission/gio-permission.service';
import { ApiProxyHealthCheckFormComponent } from '../components/health-check-form/api-proxy-health-check-form.component';
import { ApiV2Service } from '../../../../services-ngx/api-v2.service';
import { onlyApiV1V2Filter, onlyApiV2Filter } from '../../../../util/apiFilter.operator';
import { Proxy } from '../../../../entities/management-api-v2';

@Component({
  selector: 'api-proxy-health-check',
  template: require('./api-proxy-health-check.component.html'),
  styles: [require('./api-proxy-health-check.component.scss')],
})
export class ApiProxyHealthCheckComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();

  public healthCheckForm: FormGroup;

  public isReadOnly = false;

  constructor(
    @Inject(UIRouterStateParams) private readonly ajsStateParams,
    @Inject(UIRouterState) private readonly ajsState: StateService,
    private readonly apiService: ApiV2Service,
    private readonly snackBarService: SnackBarService,
    private readonly permissionService: GioPermissionService,
  ) {}

  ngOnInit(): void {
    this.apiService
      .get(this.ajsStateParams.apiId)
      .pipe(
        onlyApiV1V2Filter(this.snackBarService),
        tap((api) => {
          const isReadOnly =
            !this.permissionService.hasAnyMatching(['api-health-c', 'api-health-u']) || api.definitionContext?.origin === 'KUBERNETES';

          this.healthCheckForm = ApiProxyHealthCheckFormComponent.NewHealthCheckFormGroup(api.services.healthCheck, isReadOnly);
        }),
        takeUntil(this.unsubscribe$),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }

  onSubmit() {
    return this.apiService
      .get(this.ajsStateParams.apiId)
      .pipe(
        onlyApiV2Filter(this.snackBarService),
        switchMap((api) => {
          const apiHealthCheck = ApiProxyHealthCheckFormComponent.HealthCheckFromFormGroup(this.healthCheckForm, false);
          this.updateEndpointsHealthCheckConfig(api.proxy?.groups, apiHealthCheck.enabled);

          return this.apiService.update(api.id, {
            ...api,
            services: {
              ...api.services,
              healthCheck: apiHealthCheck,
            },
          });
        }),
        tap(() => this.snackBarService.success('Configuration successfully saved!')),
        catchError(({ error }) => {
          this.snackBarService.error(error.message);
          return EMPTY;
        }),
        tap(() => this.ngOnInit()),
        takeUntil(this.unsubscribe$),
      )
      .subscribe();
  }

  gotToHealthCheckDashboard() {
    this.ajsState.go('management.apis.detail.proxy.healthCheckDashboard.visualize');
  }

  updateEndpointsHealthCheckConfig(groups: Proxy['groups'], apiHealthCheckEnabled: boolean) {
    if (apiHealthCheckEnabled === true) {
      // If the API healthcheck is enabled, we enable the health-check for all endpoints without `healthcheck` config
      groups.forEach((group) => {
        group.endpoints.forEach((endpoint) => {
          if (!endpoint.healthCheck) {
            endpoint.healthCheck = {
              enabled: true,
              inherit: true,
            };
          }
        });
      });
    } else {
      // If the API healthcheck is disabled, we disable the health-check for all endpoints inheriting the health-check config
      groups.forEach((group) => {
        group.endpoints.forEach((endpoint) => {
          if (endpoint.healthCheck?.enabled === true && endpoint.healthCheck?.inherit === true) {
            endpoint.healthCheck.enabled = false;
          }
        });
      });
    }
  }
}
