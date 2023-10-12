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

import { Component, Inject, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ApiDocumentationV4AddFolderDialog } from './documentation-add-folder-dialog/api-documentation-v4-add-folder-dialog.component';
import { UIRouterState } from '../../../ajs-upgraded-providers';
import { StateService } from '@uirouter/angularjs';

@Component({
  selector: 'api-documentation-v4',
  template: require('./api-documentation-v4.component.html'),
  styles: [require('./api-documentation-v4.component.scss')],
})
export class ApiDocumentationV4Component implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  dialogResult: Observable<any>;

  constructor(private matDialog: MatDialog, @Inject(UIRouterState) private readonly ajsState: StateService) {}
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.unsubscribe();
  }

  addFolder() {
    this.dialogResult = this.matDialog.open(ApiDocumentationV4AddFolderDialog).afterClosed();
    this.dialogResult.subscribe((res) => console.log('Create folder', res));
  }

  addPage() {
    this.ajsState.go('management.apis.documentationV4-create');
  }
}
