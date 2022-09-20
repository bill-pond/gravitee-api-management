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
package io.gravitee.plugin.endpoint.mock;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.lenient;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import io.gravitee.gateway.jupiter.api.ApiType;
import io.gravitee.gateway.jupiter.api.ConnectorMode;
import io.gravitee.gateway.jupiter.api.context.ExecutionContext;
import io.gravitee.gateway.jupiter.api.context.InternalContextAttributes;
import io.gravitee.gateway.jupiter.api.context.Request;
import io.gravitee.gateway.jupiter.api.context.Response;
import io.gravitee.gateway.jupiter.api.message.DefaultMessage;
import io.gravitee.gateway.jupiter.api.message.Message;
import io.gravitee.plugin.endpoint.mock.configuration.MockEndpointConnectorConfiguration;
import io.reactivex.Completable;
import io.reactivex.Flowable;
import io.reactivex.Maybe;
import io.reactivex.schedulers.TestScheduler;
import io.reactivex.subscribers.TestSubscriber;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.slf4j.Logger;

/**
 * @author GraviteeSource Team
 */
@ExtendWith(MockitoExtension.class)
class MockEndpointConnectorTest {

    protected static final String MESSAGE_CONTENT = "test mock endpoint";
    private static final String MESSAGE_TO_LOG = "message to log";
    private final MockEndpointConnectorConfiguration configuration = new MockEndpointConnectorConfiguration();

    @Mock
    Logger logger;

    @InjectMocks
    private MockEndpointConnector mockEndpointConnector;

    @Mock
    private ExecutionContext ctx;

    @Mock
    private Request request;

    @Mock
    private Response response;

    @BeforeEach
    public void setup() {
        configuration.setMessageInterval(100L);
        configuration.setMessageContent(MESSAGE_CONTENT);
        mockEndpointConnector = new MockEndpointConnector(configuration);

        lenient().when(ctx.request()).thenReturn(request);
        lenient().when(ctx.response()).thenReturn(response);
    }

    @Test
    void shouldIdReturnMock() {
        assertThat(mockEndpointConnector.id()).isEqualTo("mock");
    }

    @Test
    void shouldSupportAsyncApi() {
        assertThat(mockEndpointConnector.supportedApi()).isEqualTo(ApiType.ASYNC);
    }

    @Test
    void shouldSupportPublishAndSubscribeModes() {
        assertThat(mockEndpointConnector.supportedModes()).containsOnly(ConnectorMode.PUBLISH, ConnectorMode.SUBSCRIBE);
    }

    @Test
    @DisplayName("Should receive messages")
    void shouldReceiveMessages() {
        final ArgumentCaptor<Function<Message, Maybe<Message>>> onRequestMessagesCaptor = ArgumentCaptor.forClass(Function.class);
        when(request.onMessage(onRequestMessagesCaptor.capture())).thenReturn(Completable.complete());
        mockEndpointConnector.connect(ctx).test().assertComplete();

        final Function<Message, Maybe<Message>> messageHandler = onRequestMessagesCaptor.getValue();

        // Make sure the message handler has been set up by the MockEndpoint Connector by trying it.
        Flowable
            .just(new DefaultMessage(MESSAGE_TO_LOG))
            .compose(upstream -> upstream.concatMapMaybe(messageHandler::apply))
            .test()
            .assertComplete();

        verify(logger).info("Received message: {}", MESSAGE_TO_LOG);
    }

    @Test
    @DisplayName("Should generate messages flow")
    void shouldGenerateMessagesFlow() {
        when(request.onMessage(any())).thenReturn(Completable.complete());
        mockEndpointConnector.connect(ctx).test().assertComplete();

        ArgumentCaptor<Flowable<Message>> messagesCaptor = ArgumentCaptor.forClass(Flowable.class);
        verify(response).messages(messagesCaptor.capture());
        final TestScheduler testScheduler = new TestScheduler();
        final TestSubscriber<Message> obs = messagesCaptor.getValue().test(3);

        testScheduler.triggerActions();
        obs
            .awaitCount(3)
            .assertValueCount(3)
            .assertValueAt(0, message -> message.content().toString().equals(MESSAGE_CONTENT) && message.id().equals("0"))
            .assertValueAt(1, message -> message.content().toString().equals(MESSAGE_CONTENT) && message.id().equals("1"))
            .assertValueAt(2, message -> message.content().toString().equals(MESSAGE_CONTENT) && message.id().equals("2"));
    }

    @Test
    @DisplayName("Should generate messages flow with a limited count of messages from the configuration")
    void shouldGenerateLimitedMessagesFlowFromConfiguration() throws InterruptedException {
        when(request.onMessage(any())).thenReturn(Completable.complete());

        configuration.setMessageCount(5);

        mockEndpointConnector.connect(ctx).test().assertComplete();

        ArgumentCaptor<Flowable<Message>> messagesCaptor = ArgumentCaptor.forClass(Flowable.class);
        verify(response).messages(messagesCaptor.capture());

        messagesCaptor.getValue().test().await().assertValueCount(5);
    }

    @Test
    @DisplayName("Should generate messages flow with a limited count of messages from the client request")
    void shouldGenerateLimitedMessagesFlowFromClientRequest() throws InterruptedException {
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_LIMIT_COUNT)).thenReturn(3);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_LIMIT_DURATION_MS)).thenReturn(null);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_RESUME_LASTID)).thenReturn(null);
        when(request.onMessage(any())).thenReturn(Completable.complete());

        mockEndpointConnector.connect(ctx).test().assertComplete();

        ArgumentCaptor<Flowable<Message>> messagesCaptor = ArgumentCaptor.forClass(Flowable.class);
        verify(response).messages(messagesCaptor.capture());

        messagesCaptor.getValue().test().await().assertValueCount(3);
    }

    @ParameterizedTest
    @CsvSource({ "3,4", "4,2" })
    @DisplayName("Should generate messages flow with a limited count of messages from the client request and the configuration")
    void shouldGenerateLimitedMessagesFlowFromClientRequestAndConfiguration(int configurationLimitCount, int ctxLimitCount)
        throws InterruptedException {
        configuration.setMessageCount(configurationLimitCount);

        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_LIMIT_COUNT)).thenReturn(ctxLimitCount);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_LIMIT_DURATION_MS)).thenReturn(null);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_RESUME_LASTID)).thenReturn(null);
        when(request.onMessage(any())).thenReturn(Completable.complete());

        mockEndpointConnector.connect(ctx).test().assertComplete();

        ArgumentCaptor<Flowable<Message>> messagesCaptor = ArgumentCaptor.forClass(Flowable.class);
        verify(response).messages(messagesCaptor.capture());

        messagesCaptor.getValue().test().await().assertValueCount(Math.min(configurationLimitCount, ctxLimitCount));
    }

    @Test
    @DisplayName("Should generate messages flow during a specific amount of time requested by the client")
    void shouldGenerateLimitedInTimeMessagesFlowFromClientRequest() throws InterruptedException {
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_LIMIT_COUNT)).thenReturn(null);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_LIMIT_DURATION_MS)).thenReturn(1_000L);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_RESUME_LASTID)).thenReturn(null);
        when(request.onMessage(any())).thenReturn(Completable.complete());

        mockEndpointConnector.connect(ctx).test().assertComplete();

        ArgumentCaptor<Flowable<Message>> messagesCaptor = ArgumentCaptor.forClass(Flowable.class);
        verify(response).messages(messagesCaptor.capture());

        messagesCaptor.getValue().test().awaitDone(1_500L, TimeUnit.MILLISECONDS).assertComplete();
    }

    @Test
    @DisplayName("Should generate messages flow from lastId")
    void shouldGenerateMessagesFlowFromLastId() {
        configuration.setMessageCount(2);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_LIMIT_COUNT)).thenReturn(null);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_LIMIT_DURATION_MS)).thenReturn(null);
        when(ctx.getInternalAttribute(InternalContextAttributes.ATTR_INTERNAL_MESSAGES_RESUME_LASTID)).thenReturn("1");
        when(request.onMessage(any())).thenReturn(Completable.complete());

        mockEndpointConnector.connect(ctx).test().assertComplete();

        ArgumentCaptor<Flowable<Message>> messagesCaptor = ArgumentCaptor.forClass(Flowable.class);
        verify(response).messages(messagesCaptor.capture());

        TestSubscriber<Message> messages = messagesCaptor.getValue().test();
        messages.awaitTerminalEvent();
        messages.assertValueCount(2);
        messages.assertValueAt(0, message -> message.id().equals("2"));
        messages.assertValueAt(1, message -> message.id().equals("3"));
    }
}