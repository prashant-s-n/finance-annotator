/**
 * @fileoverview contains effectful domain logic for the transaction aggregate
 */

import { Effect } from "effect";
import { CreateTransactionArg } from "../cmd/index.js";
import { makeTransaction, Transaction } from "../type/transaction.js";
import { TransactionError } from "../error/transaction.js";
import { generateTransactionId } from "../type/transaction-id.js";

type EE<A, I> = Effect.Effect<A, I>;

export const withTransaction = (arg : CreateTransactionArg) : EE<Transaction, TransactionError> => Effect.gen(function* () {
    const {
        description,
        amount,
        type,
        effectiveAt,
        runningBalance,
    } = arg;

    return yield* Effect.succeed(makeTransaction({
        id: generateTransactionId(),
        description,
        amount,
        type,
        effectiveAt,
        runningBalance,
    }));

})
