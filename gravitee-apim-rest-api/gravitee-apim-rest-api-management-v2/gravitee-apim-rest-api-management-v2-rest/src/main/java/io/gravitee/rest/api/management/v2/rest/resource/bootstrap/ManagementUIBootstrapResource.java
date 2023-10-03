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
package io.gravitee.rest.api.management.v2.rest.resource.bootstrap;

import io.gravitee.apim.core.access_point.query_service.AccessPointQueryService;
import io.gravitee.common.http.MediaType;
import io.gravitee.rest.api.model.bootstrap.ManagementUIBootstrapEntity;
import io.gravitee.rest.api.service.common.GraviteeContext;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author Guillaume LAMIRAND (guillaume.lamirand at graviteesource.com)
 * @author GraviteeSource Team
 */
@Tag(name = "Bootstrap Management UI")
@Path("/ui/bootstrap")
@Slf4j
public class ManagementUIBootstrapResource {

    @Autowired
    protected AccessPointQueryService accessPointService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Operation(summary = "Get the console bootstrap", description = "Every users can use this service")
    @ApiResponse(
        responseCode = "200",
        description = "Management UI bootstrap information",
        content = @Content(mediaType = MediaType.APPLICATION_JSON, schema = @Schema(implementation = ManagementUIBootstrapEntity.class))
    )
    @ApiResponse(responseCode = "500", description = "Internal server error")
    public Response bootstrap(@Context final HttpServletRequest httpServletRequest) {
        URI contextPath = sanitizeContextPath(httpServletRequest);

        String consoleApiUrl = accessPointService.getConsoleApiUrl(GraviteeContext.getCurrentOrganization());
        if (consoleApiUrl != null) {
            URI fullManagementURL = URI.create(consoleApiUrl).resolve(contextPath);
            return Response
                .ok(
                    ManagementUIBootstrapEntity
                        .builder()
                        .organizationId(GraviteeContext.getCurrentOrganization())
                        .baseURL(fullManagementURL.toString())
                        .build()
                )
                .build();
        }
        try {
            URL defaultBaseUrl = new URL(
                httpServletRequest.getScheme(),
                httpServletRequest.getServerName(),
                httpServletRequest.getServerPort(),
                contextPath.toString()
            );
            return Response
                .ok(
                    ManagementUIBootstrapEntity
                        .builder()
                        .organizationId(GraviteeContext.getDefaultOrganization())
                        .baseURL(defaultBaseUrl.toExternalForm())
                        .build()
                )
                .build();
        } catch (MalformedURLException e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }

    private static URI sanitizeContextPath(final HttpServletRequest httpServletRequest) {
        return URI.create(httpServletRequest.getContextPath().replace("/v2", "")).normalize();
    }
}