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
package io.gravitee.apim.core.subscription.usecase;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.tuple;

import fixtures.core.model.SubscriptionFixtures;
import inmemory.ApiKeyCrudServiceInMemory;
import inmemory.ApiKeyQueryServiceInMemory;
import inmemory.ApiQueryServiceInMemory;
import inmemory.ApplicationCrudServiceInMemory;
import inmemory.AuditCrudServiceInMemory;
import inmemory.EnvironmentCrudServiceInMemory;
import inmemory.InMemoryAlternative;
import inmemory.PlanCrudServiceInMemory;
import inmemory.SubscriptionCrudServiceInMemory;
import inmemory.SubscriptionQueryServiceInMemory;
import inmemory.TriggerNotificationDomainServiceInMemory;
import inmemory.UserCrudServiceInMemory;
import io.gravitee.apim.core.api.model.Api;
import io.gravitee.apim.core.api_key.domain_service.RevokeApiKeyDomainService;
import io.gravitee.apim.core.audit.domain_service.AuditDomainService;
import io.gravitee.apim.core.audit.model.AuditActor;
import io.gravitee.apim.core.audit.model.AuditEntity;
import io.gravitee.apim.core.audit.model.AuditEntity.AuditReferenceType;
import io.gravitee.apim.core.environment.model.Environment;
import io.gravitee.apim.core.subscription.domain_service.CloseSubscriptionDomainService;
import io.gravitee.apim.core.subscription.domain_service.RejectSubscriptionDomainService;
import io.gravitee.apim.core.subscription.model.SubscriptionEntity;
import io.gravitee.apim.infra.json.jackson.JacksonJsonDiffProcessor;
import io.gravitee.rest.api.model.BaseApplicationEntity;
import io.gravitee.rest.api.service.common.UuidString;
import java.time.Instant;
import java.time.ZoneId;
import java.util.List;
import java.util.stream.Stream;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CloseExpiredSubscriptionsUsecaseTest {

    private static final String USER_ID = "user-id";
    private static final AuditActor AUDIT_ACTOR = AuditActor.builder().userId(USER_ID).build();

    private final ApiQueryServiceInMemory apiQueryService = new ApiQueryServiceInMemory();
    private final EnvironmentCrudServiceInMemory environmentCrudService = new EnvironmentCrudServiceInMemory();
    private final SubscriptionCrudServiceInMemory subscriptionCrudService = new SubscriptionCrudServiceInMemory();
    private final SubscriptionQueryServiceInMemory subscriptionQueryService = new SubscriptionQueryServiceInMemory(subscriptionCrudService);
    private final AuditCrudServiceInMemory auditCrudServiceInMemory = new AuditCrudServiceInMemory();
    private final ApplicationCrudServiceInMemory applicationCrudService = new ApplicationCrudServiceInMemory();
    private final PlanCrudServiceInMemory planCrudService = new PlanCrudServiceInMemory();

    private CloseExpiredSubscriptionsUsecase usecase;

    @BeforeEach
    void setUp() {
        UuidString.overrideGenerator(() -> "audit-id");

        var triggerNotificationService = new TriggerNotificationDomainServiceInMemory();
        var userCrudService = new UserCrudServiceInMemory();
        var auditDomainService = new AuditDomainService(auditCrudServiceInMemory, userCrudService, new JacksonJsonDiffProcessor());

        var rejectSubscriptionDomainService = new RejectSubscriptionDomainService(
            subscriptionCrudService,
            planCrudService,
            auditDomainService,
            triggerNotificationService,
            userCrudService
        );

        var apiKeyCrudService = new ApiKeyCrudServiceInMemory();
        var revokeApiKeyDomainService = new RevokeApiKeyDomainService(
            apiKeyCrudService,
            new ApiKeyQueryServiceInMemory(apiKeyCrudService),
            auditDomainService
        );

        usecase =
            new CloseExpiredSubscriptionsUsecase(
                subscriptionQueryService,
                apiQueryService,
                environmentCrudService,
                new CloseSubscriptionDomainService(
                    subscriptionCrudService,
                    applicationCrudService,
                    auditDomainService,
                    triggerNotificationService,
                    rejectSubscriptionDomainService,
                    revokeApiKeyDomainService
                )
            );

        givenExistingEnvironments(
            List.of(
                Environment.builder().id("env1").organizationId("org1").build(),
                Environment.builder().id("env2").organizationId("org2").build()
            )
        );
        givenExistingApis(
            List.of(Api.builder().id("api1").environmentId("env1").build(), Api.builder().id("api2").environmentId("env2").build())
        );
        givenExistingApplication(
            List.of(BaseApplicationEntity.builder().id("app1").build(), BaseApplicationEntity.builder().id("app2").build())
        );
    }

    @AfterEach
    void tearDown() {
        Stream
            .of(
                apiQueryService,
                environmentCrudService,
                subscriptionCrudService,
                auditCrudServiceInMemory,
                applicationCrudService,
                planCrudService
            )
            .forEach(InMemoryAlternative::reset);
    }

    @AfterAll
    static void afterAll() {
        UuidString.reset();
    }

    @Test
    void should_close_expired_subscriptions() {
        // Given
        var now = Instant.now();
        givenExistingSubscriptions(
            List.of(
                SubscriptionFixtures
                    .aSubscription()
                    .toBuilder()
                    .id("s1")
                    .apiId("api1")
                    .applicationId("app1")
                    .status(SubscriptionEntity.Status.ACCEPTED)
                    .endingAt(now.minusSeconds(30).atZone(ZoneId.systemDefault()))
                    .build(),
                SubscriptionFixtures
                    .aSubscription()
                    .toBuilder()
                    .id("s2")
                    .apiId("api2")
                    .applicationId("app2")
                    .status(SubscriptionEntity.Status.ACCEPTED)
                    .endingAt(now.minusSeconds(30).atZone(ZoneId.systemDefault()))
                    .build()
            )
        );

        // When
        var result = usecase.execute(new CloseExpiredSubscriptionsUsecase.Input(AUDIT_ACTOR));

        // Then
        assertThat(result.closedSubscriptions())
            .hasSize(2)
            .extracting(SubscriptionEntity::getStatus)
            .containsExactly(SubscriptionEntity.Status.CLOSED, SubscriptionEntity.Status.CLOSED);
    }

    @Test
    void should_create_audit_using_right_context() {
        // Given
        var now = Instant.now();
        givenExistingSubscriptions(
            List.of(
                SubscriptionFixtures
                    .aSubscription()
                    .toBuilder()
                    .id("s1")
                    .apiId("api1")
                    .applicationId("app1")
                    .status(SubscriptionEntity.Status.ACCEPTED)
                    .endingAt(now.minusSeconds(30).atZone(ZoneId.systemDefault()))
                    .build(),
                SubscriptionFixtures
                    .aSubscription()
                    .toBuilder()
                    .id("s2")
                    .apiId("api2")
                    .applicationId("app2")
                    .status(SubscriptionEntity.Status.ACCEPTED)
                    .endingAt(now.minusSeconds(30).atZone(ZoneId.systemDefault()))
                    .build()
            )
        );

        // When
        usecase.execute(new CloseExpiredSubscriptionsUsecase.Input(AUDIT_ACTOR));

        // Then
        assertThat(auditCrudServiceInMemory.storage())
            .hasSize(4)
            .extracting(
                AuditEntity::getOrganizationId,
                AuditEntity::getEnvironmentId,
                AuditEntity::getReferenceType,
                AuditEntity::getReferenceId,
                AuditEntity::getEvent,
                AuditEntity::getUser
            )
            .contains(
                tuple("org1", "env1", AuditReferenceType.API, "api1", "SUBSCRIPTION_CLOSED", USER_ID),
                tuple("org1", "env1", AuditReferenceType.APPLICATION, "app1", "SUBSCRIPTION_CLOSED", USER_ID),
                tuple("org2", "env2", AuditReferenceType.API, "api2", "SUBSCRIPTION_CLOSED", USER_ID),
                tuple("org2", "env2", AuditReferenceType.APPLICATION, "app2", "SUBSCRIPTION_CLOSED", USER_ID)
            );
    }

    @Test
    void should_do_nothing_when_no_subscription_to_close() {
        // Given
        var now = Instant.now();
        givenExistingSubscriptions(
            List.of(
                SubscriptionFixtures
                    .aSubscription()
                    .toBuilder()
                    .id("s1")
                    .apiId("api1")
                    .applicationId("app1")
                    .status(SubscriptionEntity.Status.ACCEPTED)
                    .endingAt(now.plusSeconds(30).atZone(ZoneId.systemDefault()))
                    .build(),
                SubscriptionFixtures
                    .aSubscription()
                    .toBuilder()
                    .id("s2")
                    .apiId("api2")
                    .applicationId("app2")
                    .status(SubscriptionEntity.Status.ACCEPTED)
                    .endingAt(now.plusSeconds(30).atZone(ZoneId.systemDefault()))
                    .build()
            )
        );

        // When
        var result = usecase.execute(new CloseExpiredSubscriptionsUsecase.Input(AUDIT_ACTOR));

        // Then
        assertThat(result.closedSubscriptions()).isEmpty();
        assertThat(auditCrudServiceInMemory.storage()).isEmpty();
    }

    private void givenExistingEnvironments(List<Environment> environments) {
        environmentCrudService.initWith(environments);
    }

    private void givenExistingApis(List<Api> apis) {
        apiQueryService.initWith(apis);
    }

    private void givenExistingApplication(List<BaseApplicationEntity> applications) {
        applicationCrudService.initWith(applications);
    }

    private void givenExistingSubscriptions(List<SubscriptionEntity> subscriptions) {
        subscriptionCrudService.initWith(subscriptions);
    }
}
