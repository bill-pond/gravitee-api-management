package io.gravitee.gateway.reactive.standalone.vertx;

import io.gravitee.node.api.server.ServerManager;
import io.gravitee.node.vertx.server.tcp.VertxTcpServer;
import io.reactivex.rxjava3.core.*;
import io.reactivex.rxjava3.disposables.Disposable;
import io.reactivex.rxjava3.schedulers.Schedulers;
import io.reactivex.rxjava3.subjects.PublishSubject;
import io.reactivex.rxjava3.subjects.ReplaySubject;
import io.vertx.core.Handler;
import io.vertx.core.net.NetClientOptions;
import io.vertx.rxjava3.core.AbstractVerticle;
import io.vertx.rxjava3.core.buffer.Buffer;
import io.vertx.rxjava3.core.net.NetClient;
import io.vertx.rxjava3.core.net.NetServer;
import io.vertx.rxjava3.core.net.NetSocket;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import lombok.extern.slf4j.Slf4j;
import org.reactivestreams.Publisher;

/**
 * @author Benoit BORDIGONI (benoit.bordigoni at graviteesource.com)
 * @author GraviteeSource Team
 */
@Slf4j
public class TcpProtocolVerticle extends AbstractVerticle {

    private final ServerManager serverManager;
    private Map<VertxTcpServer, NetServer> tcpServerMap = new ConcurrentHashMap<>();

    public TcpProtocolVerticle(ServerManager serverManager) {
        this.serverManager = serverManager;
    }

    @Override
    public Completable rxStart() {
        final List<VertxTcpServer> servers = this.serverManager.servers(VertxTcpServer.class);
        return Flowable
            .fromIterable(servers)
            .concatMapCompletable(gioServer -> {
                NetServer tcpServer = gioServer.newInstance();
                tcpServerMap.put(gioServer, tcpServer);

                // Listen and dispatch http requests.
                return tcpServer
                    .connectHandler(newTcpHandler())
                    .rxListen()
                    .ignoreElement()
                    .doOnComplete(() ->
                        log.info("TCP server [{}] ready to accept frames on port {}", gioServer.id(), tcpServer.actualPort())
                    )
                    .doOnError(throwable -> log.error("Unable to start TCP server [{}]", gioServer.id(), throwable.getCause()));
            })
            .doOnSubscribe(disposable -> log.info("Starting TCP servers..."));
    }

    private Handler<NetSocket> newTcpHandler() {
        return serverSocket -> {
            var client = vertx.createNetClient(
                new NetClientOptions()
                    .setConnectTimeout(3000)
                    .setReconnectAttempts(5)
                    .setReconnectInterval(1000)
                    .setTrustAll(true)
                    .setMetricsName("tcp-client")
            );
            serverSocket.exceptionHandler(err -> log.error("server err: ", err));
            serverSocket.endHandler(empty -> log.info("server socket ended"));
            serverSocket.closeHandler(empty -> log.info("server socket closed"));
            serverSocket.pause();
            client
                .rxConnect(8082, "localhost")
                .flatMapCompletable(clientSocket -> {
                    clientSocket.exceptionHandler(err -> log.error("client err: ", err));
                    clientSocket.endHandler(empty -> log.info("client socket ended"));
                    clientSocket.closeHandler(empty -> log.info("client socket closed"));
                    clientSocket.pause();
                    return Completable.mergeArray(serverSocket.rxPipeTo(clientSocket), clientSocket.rxPipeTo(serverSocket));
                })
                .doOnComplete(() -> log.info("client completed"))
                .doOnError(throwable -> serverSocket.getDelegate().close())
                .subscribe();
        };
    }
}
