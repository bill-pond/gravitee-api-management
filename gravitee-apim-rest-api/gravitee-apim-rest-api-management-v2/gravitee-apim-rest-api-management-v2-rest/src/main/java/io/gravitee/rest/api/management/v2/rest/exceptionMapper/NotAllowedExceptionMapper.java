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
package io.gravitee.rest.api.management.v2.rest.exceptionMapper;

import jakarta.ws.rs.NotAllowedException;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;

/**
 * @author Nicolas GERAUD (nicolas.geraud at graviteesource.com)
 */
@Provider
public class NotAllowedExceptionMapper extends AbstractExceptionMapper<NotAllowedException> {

    @Override
    public Response toResponse(final NotAllowedException e) {
        final Response.Status error = Response.Status.METHOD_NOT_ALLOWED;
        return Response.status(error).type(MediaType.APPLICATION_JSON_TYPE).entity(convert(e, error.getStatusCode())).build();
    }
}