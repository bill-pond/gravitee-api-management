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
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiV2Service } from './api-v2.service';

import { CONSTANTS_TESTING, GioHttpTestingModule } from '../shared/testing';
import { fakeApiV4, fakeCreateApiV4 } from '../entities/management-api-v2';

describe('ApiV2Service', () => {
  let httpTestingController: HttpTestingController;
  let apiV2Service: ApiV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GioHttpTestingModule],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    apiV2Service = TestBed.inject<ApiV2Service>(ApiV2Service);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('create', () => {
    it('should call the API', (done) => {
      const newApi = fakeCreateApiV4();

      apiV2Service.create(newApi).subscribe((api) => {
        expect(api.name).toEqual(newApi.name);
        done();
      });

      const req = httpTestingController.expectOne({
        url: `${CONSTANTS_TESTING.env.v2BaseURL}/apis`,
        method: 'POST',
      });

      req.flush(fakeCreateApiV4());
    });
  });

  describe('get', () => {
    it('should call the API', (done) => {
      const fakeApi = fakeApiV4();

      apiV2Service.get(fakeApi.id).subscribe((api) => {
        expect(api.name).toEqual(fakeApi.name);
        done();
      });

      const req = httpTestingController.expectOne({
        url: `${CONSTANTS_TESTING.env.v2BaseURL}/apis/${fakeApi.id}`,
        method: 'GET',
      });

      req.flush(fakeApiV4());
    });
  });

  describe('start', () => {
    it('should call the API', (done) => {
      const fakeApi = fakeApiV4();

      apiV2Service.start(fakeApi.id).subscribe(() => {
        done();
      });

      const req = httpTestingController.expectOne({
        url: `${CONSTANTS_TESTING.env.v2BaseURL}/apis/${fakeApi.id}/_start`,
        method: 'POST',
      });

      expect(req.request.body).toEqual({});
      req.flush(fakeApi);
    });
  });

  describe('search', () => {
    it('should call the API', (done) => {
      const fakeApi = fakeApiV4();

      apiV2Service.search({ ids: [fakeApi.id] }).subscribe(() => {
        done();
      });

      const req = httpTestingController.expectOne({
        url: `${CONSTANTS_TESTING.env.v2BaseURL}/apis/_search?page=1&perPage=10`,
        method: 'POST',
      });

      expect(req.request.body).toEqual({
        ids: [fakeApi.id],
      });
      req.flush({
        data: [fakeApi],
      });
    });
  });
});