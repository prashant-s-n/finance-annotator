import { randUuid, randWord } from '@ngneat/falso';
import {
  EncodedTransactionId,
  fromTransactionId,
  toTransactionId,
  TransactionId,
} from './transaction-id.js';

describe('TransactionId', () => {
  test('decodes a raw value', () => {
    // Raw transaction id
    const tid = randUuid();

    expectTypeOf(fromTransactionId(tid)).toEqualTypeOf<TransactionId>();
  });

  test('encodes a typed value', () => {
    const tid = fromTransactionId(randUuid());

    expectTypeOf(toTransactionId(tid)).toEqualTypeOf<EncodedTransactionId>();
  });

  test('fails with invalid value during decoding', () => {
    const tid = randWord();

    expect(() => fromTransactionId(tid)).toThrowError();
  });
});
