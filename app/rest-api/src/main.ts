import { Effect, Layer } from 'effect';
import { createServer } from 'node:http';
import { HttpApiBuilder, HttpMiddleware, HttpServer } from '@effect/platform';
import { NodeHttpServer, NodeRuntime } from '@effect/platform-node';
import { HealthLive } from './health';
import { RestApi } from './api-group.js';

// Provide the implementation for the API
const MyApiLive = HttpApiBuilder.api(RestApi).pipe(Layer.provide(HealthLive));

// Set up the server using NodeHttpServer on port 5001
const ServerLive = HttpApiBuilder.serve(HttpMiddleware.logger)
  .pipe(
    Layer.provide(MyApiLive),
    HttpServer.withLogAddress,
    Layer.provide(NodeHttpServer.layer(createServer, { port: 5001 }))
  )
  .pipe(Layer.tap(() => Effect.log('Server started')));

// Launch the server
Layer.launch(ServerLive).pipe(NodeRuntime.runMain);
