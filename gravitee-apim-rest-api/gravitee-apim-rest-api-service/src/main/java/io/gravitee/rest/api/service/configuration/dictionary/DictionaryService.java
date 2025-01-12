/*
 * Copyright © 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.rest.api.service.configuration.dictionary;

import io.gravitee.rest.api.model.configuration.dictionary.DictionaryEntity;
import io.gravitee.rest.api.model.configuration.dictionary.NewDictionaryEntity;
import io.gravitee.rest.api.model.configuration.dictionary.UpdateDictionaryEntity;
import io.gravitee.rest.api.service.common.ExecutionContext;
import java.util.Map;
import java.util.Set;

/**
 * @author David BRASSELY (david.brassely at graviteesource.com)
 * @author GraviteeSource Team
 */
public interface DictionaryService {
    DictionaryEntity create(ExecutionContext executionContext, NewDictionaryEntity dictionary);

    DictionaryEntity update(ExecutionContext executionContext, String id, UpdateDictionaryEntity dictionary);
    DictionaryEntity updateProperties(ExecutionContext executionContext, String id, Map<String, String> properties);

    DictionaryEntity findById(String id);

    void delete(ExecutionContext executionContext, String id);

    Set<DictionaryEntity> findAll(ExecutionContext executionContext);

    DictionaryEntity deploy(ExecutionContext executionContext, String id);

    DictionaryEntity undeploy(ExecutionContext executionContext, String id);

    DictionaryEntity start(ExecutionContext executionContext, String id);

    DictionaryEntity stop(ExecutionContext executionContext, String id);
}
