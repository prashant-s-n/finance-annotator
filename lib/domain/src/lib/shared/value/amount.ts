import { BigDecimal, Schema } from 'effect';
import { Currency } from './currency.js';

/**
 * @since 1.0.0
 *
 * @var Amount
 *
 * A generic value object for amount
 */

export const Amount = Schema.Struct({
  amount: Schema.BigDecimal,
  currency: Currency,
}).pipe(
  Schema.annotations({
    title: 'Transaction amount',
    description: 'A value object for a transaction amount',
  })
);

/**
 * Amount in decoded form or parsed form
 */
export type Amount = typeof Amount.Type;

/**
 * Amount in plain object form / encoded form
 */
export type EncodedAmount = typeof Amount.Encoded;

/**
 *
 * Converts a raw value to a valid domain compliant  amount
 *
 * @param encoded
 * @returns
 */
export const fromTransactionAmount = (encoded: EncodedAmount): Amount =>
  Schema.decodeSync(Amount)(encoded);

/**
 *
 * Converts a domain value to raw amount
 *
 * @param decoded
 * @returns
 */
export const toTransactionAmount = (decoded: Amount): EncodedAmount =>
  Schema.encodeSync(Amount)(decoded);
