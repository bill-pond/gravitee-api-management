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
package io.gravitee.rest.api.service;

import io.gravitee.apim.core.access_point.model.RestrictedDomainEntity;
import io.gravitee.repository.management.model.AccessPoint;
import io.gravitee.repository.management.model.AccessPointReferenceType;
import io.gravitee.rest.api.service.common.ReferenceContext;
import java.util.List;
import java.util.Optional;

/**
 * @author Guillaume LAMIRAND (guillaume.lamirand at graviteesource.com)
 * @author GraviteeSource Team
 */
public interface AccessPointService {
    void updateAccessPoints(final AccessPointReferenceType referenceType, final String referenceId, final List<AccessPoint> accessPoints);

    Optional<ReferenceContext> getReferenceContext(final String host);

    String getConsoleUrl(final String organizationId);

    String getConsoleApiUrl(String organizationId);

    String getPortalUrl(final String environmentId);

    String getPortalApiUrl(String environmentId);

    List<RestrictedDomainEntity> getGatewayRestrictedDomains(final String environmentId);
}
