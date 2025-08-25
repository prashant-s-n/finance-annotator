import { HttpApiBuilder } from "@effect/platform"
import { DateTime, Effect } from "effect"
import { RestApi } from "../api-group"


// Health handler implementation
export const HealthLive = HttpApiBuilder.group(
    RestApi,
    "Health",
    (handlers) =>
        handlers.handle("health-check", () =>
            Effect.succeed({
                status: "ok" as const,
                timestamp: DateTime.unsafeMake(new Date()),
                uptime: process.uptime()
            })
        )
    
)