import { Data } from "effect";

export class InvalidTransaction extends Data.TaggedError("InvalidTransaction")<{
  message: string;
}> {
  
}

/**
 * All the possible transaction domain errors
 */
export type TransactionError = InvalidTransaction | unknown | string;