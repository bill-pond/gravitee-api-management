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
import java.net.URI;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

/**
 * @author Guillaume LAMIRAND (guillaume.lamirand at graviteesource.com)
 * @author GraviteeSource Team
 */
@Tag(name = "Bootstrap Management UI")
@Path("/ui/bootstrap")
@Slf4j
public class ManagementUIBootstrapResource {

    private static final String PROPERTY_HTTP_API_MANAGEMENT_PROXY_PATH = "http.api.management.proxyPath";
    private static final String PROPERTY_HTTP_API_MANAGEMENT_ENTRYPOINT = "http.api.management.entrypoint";

    @Autowired
    protected AccessPointQueryService accessPointService;

    @Autowired
    private Environment environment;

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
        String consoleApiUrl = accessPointService.getConsoleApiUrl(GraviteeContext.getCurrentOrganization());
        if (consoleApiUrl != null) {
            URI fullManagementURL = URI.create(consoleApiUrl).resolve(getManagementProxyPath());
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

        ServerHttpRequest request = new ServletServerHttpRequest(httpServletRequest);
        UriComponents uriComponents = UriComponentsBuilder.fromHttpRequest(request).replacePath(getManagementProxyPath()).build();

        return Response
            .ok(
                ManagementUIBootstrapEntity
                    .builder()
                    .organizationId(GraviteeContext.getDefaultOrganization())
                    .baseURL(uriComponents.toUriString())
                    .build()
            )
            .build();
    }

    private String getManagementProxyPath() {
        String entrypoint = environment.getProperty(PROPERTY_HTTP_API_MANAGEMENT_ENTRYPOINT, "/management");
        return environment.getProperty(PROPERTY_HTTP_API_MANAGEMENT_PROXY_PATH, entrypoint);
    }
}
