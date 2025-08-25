import { HttpApiEndpoint, HttpApiGroup } from "@effect/platform"
import { Schema } from "effect"

// Health check response schema
export const HealthResponse = Schema.Struct({
  status: Schema.Literal("ok"),
  timestamp: Schema.DateTimeUtc,
  uptime: Schema.Number
})

// Health API group with endpoint
export const HealthGroup = HttpApiGroup.make("Health").add(
  HttpApiEndpoint.get("health-check")`/health`.addSuccess(HealthResponse)
)