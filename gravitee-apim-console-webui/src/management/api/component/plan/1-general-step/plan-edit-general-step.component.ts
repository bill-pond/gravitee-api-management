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
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { includes } from 'lodash';
import { combineLatest, of, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { Api as ApiV3 } from '../../../../../entities/api';
import { ApiEntity as ApiV4 } from '../../../../../entities/api-v4';
import { CurrentUserService } from '../../../../../services-ngx/current-user.service';
import { DocumentationService } from '../../../../../services-ngx/documentation.service';
import { GroupService } from '../../../../../services-ngx/group.service';
import { TagService } from '../../../../../services-ngx/tag.service';

@Component({
  selector: 'plan-edit-general-step',
  template: require('./plan-edit-general-step.component.html'),
  styles: [require('./plan-edit-general-step.component.scss')],
})
export class PlanEditGeneralStepComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<boolean> = new Subject<boolean>();
  public api$ = new ReplaySubject<ApiV3 | ApiV4>();

  public generalForm: FormGroup;

  @Input()
  public set api(api: ApiV3 | ApiV4) {
    if (api) {
      this.api$.next(api);
    }
  }

  @Input()
  mode: 'create' | 'edit' = 'create';

  // Allow to display subscriptions section when plan security is not KEY_LESS
  @Input()
  displaySubscriptionsSection = true;

  conditionPages$ = this.api$.pipe(
    switchMap((api) =>
      this.documentationService.apiSearch(api.id, {
        type: 'MARKDOWN',
        api: api.id,
      }),
    ),
  );
  shardingTags$ = this.api$.pipe(
    // Only load tags if api is defined
    switchMap((api) => combineLatest([this.tagService.list(), of(api), this.currentUserService.getTags()])),
    map(([tags, api, userTags]) => {
      return tags.map((tag) => ({
        ...tag,
        disabled: !includes(userTags, tag.id) || !includes(api.tags, tag.id),
      }));
    }),
  );

  groups$ = this.groupService.list();

  constructor(
    private readonly tagService: TagService,
    private readonly groupService: GroupService,
    private readonly documentationService: DocumentationService,
    private readonly currentUserService: CurrentUserService,
  ) {}

  ngOnInit(): void {
    this.generalForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(''),
      characteristics: new FormControl([]),
      generalConditions: new FormControl(''),
      autoValidation: new FormControl(false),
      commentRequired: new FormControl(false),
      commentMessage: new FormControl(''),
      shardingTags: new FormControl([]),
      excludedGroups: new FormControl([]),
    });

    // Enable comment message only if comment required is checked
    this.generalForm
      .get('commentRequired')
      .valueChanges.pipe(takeUntil(this.unsubscribe$), startWith(this.generalForm.get('commentRequired').value))
      .subscribe((value) => {
        value ? this.generalForm.get('commentMessage').enable() : this.generalForm.get('commentMessage').disable();
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.unsubscribe();
  }
}