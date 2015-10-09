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
package io.gravitee.definition.jackson.datatype.deser;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdScalarDeserializer;
import io.gravitee.definition.model.HttpClient;
import io.gravitee.definition.model.HttpProxy;

import java.io.IOException;

/**
 * @author David BRASSELY (brasseld at gmail.com)
 * @author Gravitee.io Team
 */
public class HttpClientDeserializer extends StdScalarDeserializer<HttpClient> {

    public HttpClientDeserializer(Class<HttpClient> vc) {
        super(vc);
    }

    @Override
    public HttpClient deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException {
        JsonNode node = jp.getCodec().readTree(jp);

        HttpClient httpClient = new HttpClient();

        JsonNode useProxyNode = node.get("use_proxy");
        if (useProxyNode != null) {
            boolean useProxy = useProxyNode.asBoolean(false);
            httpClient.setUseProxy(useProxy);
        }

        JsonNode httpProxyNode = node.get("http_proxy");
        if (httpProxyNode != null) {
            HttpProxy httpProxy = httpProxyNode.traverse(jp.getCodec()).readValueAs(HttpProxy.class);
            httpClient.setHttpProxy(httpProxy);
        }

        return httpClient;
    }
}