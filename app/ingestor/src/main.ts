import { Effect } from 'effect';

import { AppConfiguration, AppConfigurationLive } from '@finnotate/config';

const program = Effect.gen(function* () {
  yield* Effect.log('Starting Ingestion engine v 1.0.0');

  const config = yield* AppConfiguration;

  yield* Effect.log('Config port', config.port);

  yield* Effect.never;
});

Effect.runFork(program.pipe(Effect.provide(AppConfigurationLive)));
