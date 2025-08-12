import { Schema } from 'effect';
import { TransactionAmount } from '../value/transaction-amount.js';
import { Amount } from '../../shared/value/amount.js';

const TransactionType = Schema.Enums({
  Debit: 'debit',
  Credit: 'credit',
});

export const Transaction = Schema.Struct({
  /**
   * Unique identifier for a transaction
   */
  id: Schema.UUID,
  /**
   * Short description of a transaction
   */
  description: Schema.String.pipe(Schema.maxLength(100), Schema.optional),
  /**
   * Amount of the transaction, contains the financial value with a currency
   */
  amount: TransactionAmount,
  /**
   * Type of the transaction, whether debit or credit
   */
  type: TransactionType,
  /**
   * The date and time when the transaction took place
   * (in UTC)
   */
  effectiveAt: Schema.DateTimeZonedFromSelf,
  /**
   * Running balance of the account after this transaction took place
   */
  runningBalance: Amount,
});

/**
 * @type Transaction
 *
 * Transaction type in typed or decoded form.
 * To perform domain-level operations, we need to transform the raw data into this form
 */
export type Transaction = typeof Transaction.Type;

/**
 * @type EncodedTransaction
 *
 * Transaction type in raw or untyped form.
 * This form can exist in a database, flat file or legacy systems.
 */
export type EncodedTransaction = typeof Transaction.Encoded;

/**
 *
 * Converts a raw value to a valid domain compliant transaction
 *
 * @param encoded
 * @returns
 */
export const fromTransaction = (encoded: EncodedTransaction): Transaction =>
  Schema.decodeSync(Transaction)(encoded);

export const fromTransactionUnknown = (encoded: unknown): Transaction =>
  Schema.decodeUnknownSync(Transaction)(encoded);

/**
 *
 * Converts a domain value to raw transaction
 *
 * @param decoded
 * @returns
 */
export const toTransaction = (decoded: Transaction): EncodedTransaction =>
  Schema.encodeSync(Transaction)(decoded);
