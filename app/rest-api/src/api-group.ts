import { HttpApi } from "@effect/platform";
import { HealthGroup } from "./health";

export const RestApi = HttpApi.make("RestApi")
  .add(HealthGroup)