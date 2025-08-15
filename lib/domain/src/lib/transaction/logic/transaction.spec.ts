import { BigDecimal, DateTime, Effect } from 'effect'
import { CreateTransactionArg } from '../cmd/transaction.js'
import { withTransaction } from '../logic/transaction.js'
import { Transaction, TransactionType } from '../type/transaction.js'

describe("Transaction", () => {
    test("creates a valid transaction", () => {
        const raw: CreateTransactionArg = {
            description: "UPI/P2M/135529580272/IRCTC App/Paytm Pay/Oid100",
            amount: {
                currency: "usd",
                amount: BigDecimal.unsafeFromString("100"),
            },
            type: TransactionType.enums.Credit,
            effectiveAt: DateTime.unsafeMakeZoned("2025-01-01T00:00:00Z"),
            runningBalance: {
                currency: "usd",
                amount: BigDecimal.unsafeFromString("100"),
            },
        }  

        const trx = Effect.runSync(withTransaction(raw));

        expectTypeOf(trx).toEqualTypeOf<Transaction>();
    });

});
