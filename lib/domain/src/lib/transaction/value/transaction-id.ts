import { Schema } from "effect";
import { randomUUID } from "node:crypto";

export const TransactionId = Schema.UUID.pipe(
    Schema.brand("TransactionId"),
    Schema.annotations({
        identifier: "TransactionId",
    })
)

export type TransactionId = typeof TransactionId.Type;

export type EncodedTransactionId = typeof TransactionId.Encoded;

export const makeTransactionId = (id: string) => TransactionId.make(id);

export const generateTransactionId = () => TransactionId.make(randomUUID());