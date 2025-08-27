import { Effect, Config, Data } from 'effect';

export class ApplicationConfigError extends Data.TaggedError(
  'ApplicationConfigError'
) {}

export class AppConfiguration extends Effect.Service<AppConfiguration>()(
  'app/Config',
  {
    effect: Config.all({
      port: Config.string('PORT').pipe(Config.withDefault('5000')),
    }).pipe(Effect.mapError(() => new ApplicationConfigError())),
  }
) {}

export const AppConfigurationLive = AppConfiguration.Default;
