import { randAmount } from '@ngneat/falso';
import {
  TransactionAmount,
  fromTransactionAmount,
  toTransactionAmount,
  EncodedTransactionAmount,
} from './transaction-amount.js';
import { BigDecimal } from 'effect';

describe('TransactionAmount', () => {
  test('decodes a raw transaction amount', () => {
    // Raw transaction amount
    const trxAmount = {
      amount: BigDecimal.unsafeFromNumber(randAmount()),
      currency: 'usd',
    };

    expectTypeOf(
      fromTransactionAmount(trxAmount)
    ).toEqualTypeOf<TransactionAmount>();
  });

  test('decodes a raw transaction amount', () => {
    const trxAmount = fromTransactionAmount({
      amount: BigDecimal.unsafeFromNumber(randAmount()),
      currency: 'usd',
    });

    expectTypeOf(
      toTransactionAmount(trxAmount)
    ).toEqualTypeOf<EncodedTransactionAmount>();
  });

  test('fails to decode an invalid value', () => {
    const trxAmount = {
      amount: BigDecimal.unsafeFromNumber(randAmount()),
      currency: 'eyen', // Earth yen, a fictional currency :)
    };

    expect(() => fromTransactionAmount(trxAmount)).toThrowError();
  });
});
