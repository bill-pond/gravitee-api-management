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

import { isFunction } from 'lodash';

import { ConnectionLog } from './connectionLog';

import { fakePlanV4 } from '../plan';
import { fakeBaseApplication } from '../application';

export function fakeConnectionLog(modifier?: Partial<ConnectionLog> | ((base: ConnectionLog) => ConnectionLog)): ConnectionLog {
  const base: ConnectionLog = {
    requestId: 'aee23b1e-34b1-4551-a23b-1e34b165516a',
    apiId: '117e79a3-6023-4b72-be79-a36023ab72f9',
    timestamp: '2020-02-02T20:22:02.000Z',
    clientIdentifier: '34f97df9-4945-4f2f-bf5a-3b16d9334728',
    transactionId: 'transaction-id',
    method: 'GET',
    status: 200,
    requestEnded: true,
    plan: fakePlanV4(),
    application: fakeBaseApplication(),
  };

  if (isFunction(modifier)) {
    return modifier(base);
  }

  return {
    ...base,
    ...modifier,
  };
}
