import { randAmount } from '@ngneat/falso';
import {
  TransactionAmount,
  fromTransactionAmount,
  toTransactionAmount,
  EncodedTransactionAmount,
} from './transaction-amount.js';

describe('TransactionAmount', () => {
  test('decodes a raw transaction amount', () => {
    // Raw transaction amount
    const trxAmount = {
      amount: randAmount(),
      currency: 'usd',
    };

    expectTypeOf(
      fromTransactionAmount(trxAmount)
    ).toEqualTypeOf<TransactionAmount>();
  });

  test('decodes a raw transaction amount', () => {
    const trxAmount = fromTransactionAmount({
      amount: randAmount(),
      currency: 'usd',
    });

    expectTypeOf(
      toTransactionAmount(trxAmount)
    ).toEqualTypeOf<EncodedTransactionAmount>();
  });

  test('fails to decode an invalid value', () => {
    const trxAmount = {
      amount: randAmount(),
      currency: 'eyen', // Earth yen, a fictional currency :)
    };

    expect(() => fromTransactionAmount(trxAmount)).toThrowError();
  });
});
