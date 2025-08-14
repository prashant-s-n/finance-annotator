import {Effect, Schedule} from "effect";
import { NodeContext, NodeRuntime } from "@effect/platform-node";

const raw = [
    {
        description: "UPI/P2M/135529580272/IRCTC App/Paytm Pay/Oid100",
        amount: {
            currency: "usd",
            amount: "100",
        },
        type: "credit",
        effectiveAt: "2025-01-01T00:00:00Z",
        runningBalance: {
            currency: "usd",
            amount: "100",
        },
        
    },
    {
        description: "UPI/P2M/135529580272/IRCTC App/Paytm Pay/Oid100",
        amount: {
            currency: "usd",
            amount: "100",
        },
        type: "debit",
        effectiveAt: "2025-01-01T00:00:00Z",
        runningBalance: {
            currency: "usd",
            amount: "0",
        },
    },
]

const action = () => Effect.gen(function* () {
    const trx = yield* Effect.forEach(raw, (item) => {
        return Effect.log(item);
    })

    return Effect.succeed(trx);

})

const policy = Schedule.addDelay(Schedule.forever, () => "1 hour");

const program = Effect.repeat(action(), policy);

NodeRuntime.runMain(program.pipe(Effect.provide(NodeContext.layer)))
