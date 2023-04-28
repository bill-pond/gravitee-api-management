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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import {
  GioBannerModule,
  GioFormTagsInputModule,
  GioIconsModule,
  GioFormSlideToggleModule,
  GioFormJsonSchemaModule,
} from '@gravitee/ui-particles-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { FormlyModule } from '@ngx-formly/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { PlanEditGeneralStepComponent } from './1-general-step/plan-edit-general-step.component';
import { PlanEditSecureStepComponent } from './2-secure-step/plan-edit-secure-step.component';
import { PlanEditRestrictionStepComponent } from './3-restriction-step/plan-edit-restriction-step.component';
import { ApiPlanFormComponent } from './api-plan-form.component';
import { PlanResourceTypeComponent } from './2-secure-step/plan-resource-type/plan-resource-type.component';
import { PlanResourceTypeService } from './2-secure-step/plan-resource-type/plan-resource-type.service';

import { GioSafePipeModule } from '../../../../shared/utils/gio.pipe.module';

@NgModule({
  declarations: [
    ApiPlanFormComponent,
    PlanEditGeneralStepComponent,
    PlanEditSecureStepComponent,
    PlanEditRestrictionStepComponent,
    PlanResourceTypeComponent,
  ],
  exports: [ApiPlanFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCardModule,
    MatIconModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatDividerModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'plan-oauth2-resource',
          component: PlanResourceTypeComponent,
          defaultOptions: {
            props: {
              resourceType: 'oauth2',
            },
          },
        },

        {
          name: 'plan-cache-resource',
          component: PlanResourceTypeComponent,
          defaultOptions: {
            props: {
              resourceType: 'cache',
            },
          },
        },
      ],
    }),

    GioFormSlideToggleModule,
    GioFormTagsInputModule,
    GioIconsModule,
    GioBannerModule,
    GioFormJsonSchemaModule,
    GioSafePipeModule,
  ],
  providers: [PlanResourceTypeService],
})
export class ApiPlanFormModule {}