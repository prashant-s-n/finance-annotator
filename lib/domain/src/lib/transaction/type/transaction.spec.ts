import { BigDecimal, DateTime } from 'effect';
import { randomUUID } from 'node:crypto';
import {
  EncodedTransaction,
  fromTransaction,
  fromTransactionUnknown,
  Transaction,
} from './transaction.js';

describe('Transaction', () => {
  test('decodes valid raw transaction', () => {
    const rawTransaction = {
      id: randomUUID(),
      type: 'credit',
      amount: {
        currency: 'usd',
        amount: '100',
      },
      effectiveAt: DateTime.unsafeMakeZoned(new Date()),
      runningBalance: {
        currency: 'usd',
        amount: '100',
      },
    };
    // Act
    const encoded = fromTransaction(rawTransaction);
    // Assert
    expectTypeOf(encoded).toEqualTypeOf<Transaction>();
  });
});
