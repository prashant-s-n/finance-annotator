import { Schema } from "effect";
import { Transaction } from "../type/index.js";

/**
 * Arguments required to create a transaction
 */
export const CreateTransactionArg = Transaction.pipe(
    Schema.pick("description", "amount", "type", "effectiveAt", "runningBalance")
);

export type CreateTransactionArg = typeof CreateTransactionArg.Type;

export type EncodedTransactionArg = typeof CreateTransactionArg.Encoded;

