import { Schema } from 'effect';

export const TransactionId = Schema.UUID.pipe(
  Schema.brand('TransactionId'),
  Schema.annotations({
    title: 'Transaction ID',
    description: 'An unique transaction identifier in UUID format',
  })
);

export type TransactionId = typeof TransactionId.Type;

export type EncodedTransactionId = typeof TransactionId.Encoded;

/**
 *
 * Converts a raw value to a valid domain value
 *
 * @param encoded
 * @returns
 */
export const fromTransactionId = (
  encoded: EncodedTransactionId
): TransactionId => Schema.decodeSync(TransactionId)(encoded);

/**
 *
 * Converts a domain value to raw value
 *
 * @param decoded
 * @returns
 */
export const toTransactionId = (decoded: TransactionId): EncodedTransactionId =>
  Schema.encodeSync(TransactionId)(decoded);

/**
 * Function to assert whether a value conforms to a given type
 */
export const assertsTransactionId: Schema.Schema.ToAsserts<
  typeof TransactionId
> = Schema.asserts(TransactionId);
