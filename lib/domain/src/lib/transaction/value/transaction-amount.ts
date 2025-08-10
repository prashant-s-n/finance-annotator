import { Schema } from 'effect';
import { Currency } from '../../shared/value/currency.js';

/**
 * @since 1.0.0
 *
 * @var TransactionAmount
 *
 * Value object for a transaction amount. A transaction amount contains an amount and a supported currency.
 *
 */

export const TransactionAmount = Schema.Struct({
  amount: Schema.BigDecimalFromNumber,
  currency: Currency,
}).pipe(
  Schema.brand('TransactionAmount'),
  Schema.annotations({
    title: 'Transaction amount',
    description: 'A value object for a transaction amount',
  })
);

/**
 * Amount in decoded form or parsed form
 */
export type TransactionAmount = typeof TransactionAmount.Type;

/**
 * Amount in plain object form / encoded form
 */
export type EncodedTransactionAmount = typeof TransactionAmount.Encoded;

/**
 *
 * Converts a raw value to a valid domain compliant transaction amount
 *
 * @param encoded
 * @returns
 */
export const fromTransactionAmount = (
  encoded: EncodedTransactionAmount
): TransactionAmount => Schema.decodeSync(TransactionAmount)(encoded);

/**
 *
 * Converts a domain value to raw transaction amount
 *
 * @param decoded
 * @returns
 */
export const toTransactionAmount = (
  decoded: TransactionAmount
): EncodedTransactionAmount => Schema.encodeSync(TransactionAmount)(decoded);
