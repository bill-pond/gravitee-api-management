/**
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
package io.gravitee.gateway.debug.reactor.handler.context;

import io.gravitee.gateway.api.ExecutionContext;
import io.gravitee.gateway.core.component.ComponentProvider;
import io.gravitee.gateway.reactor.handler.context.ExecutionContextFactory;

/**
 * @author Yann TAVERNIER (yann.tavernier at graviteesource.com)
 * @author GraviteeSource Team
 */
public class DebugExecutionContextFactory extends ExecutionContextFactory {

    public DebugExecutionContextFactory(ExecutionContextFactory executionContextFactory) {
        super(executionContextFactory);
    }

    @Override
    public ExecutionContext create(ExecutionContext wrapped) {
        return new DebugExecutionContext(super.create(wrapped));
    }
}