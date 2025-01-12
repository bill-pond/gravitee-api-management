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
export interface MessageLog {
  requestId: string;
  timestamp: string;
  clientIdentifier: string;
  correlationId: string;
  parentCorrelationId: string;
  operation: MessageOperation;
  connectorType: ConnectorType;
  connectorId: string;
  message: Message;
}

export interface Message {
  id: string;
  payload: string;
  headers: Record<string, string[]>;
  metadata: Record<string, string>;
}

export type ConnectorType = 'ENDPOINT' | 'ENTRYPOINT';
export type MessageOperation = 'SUBSCRIBE' | 'PUBLISH';
