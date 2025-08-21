import React from 'react';
import { FiShoppingBag, FiPlay, FiCoffee, FiTrendingUp, FiZap, FiHeart, FiBook } from 'react-icons/fi';

export const Transactions: React.FC = () => {
  // Sample transaction data with formatted dates and category badges
  const recentTransactions = [
    { id: 1, transaction: 'Grocery Store Purchase', category: 'Food & Dining', categoryIcon: FiCoffee, categoryColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200', date: '15 Jan 2024' },
    { id: 2, transaction: 'Netflix Subscription', category: 'Entertainment', categoryIcon: FiPlay, categoryColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200', date: '14 Jan 2024' },
    { id: 4, transaction: 'Coffee Shop', category: 'Food & Dining', categoryIcon: FiCoffee, categoryColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200', date: '12 Jan 2024' },
    { id: 5, transaction: 'Online Shopping', category: 'Shopping', categoryIcon: FiShoppingBag, categoryColor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200', date: '11 Jan 2024' },
    { id: 6, transaction: 'Salary Deposit', category: 'Income', categoryIcon: FiTrendingUp, categoryColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200', date: '10 Jan 2024' },
    { id: 7, transaction: 'Electric Bill', category: 'Utilities', categoryIcon: FiZap, categoryColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200', date: '09 Jan 2024' },
    { id: 8, transaction: 'Restaurant Dinner', category: 'Food & Dining', categoryIcon: FiCoffee, categoryColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200', date: '08 Jan 2024' },
    { id: 9, transaction: 'Gym Membership', category: 'Health & Fitness', categoryIcon: FiHeart, categoryColor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200', date: '07 Jan 2024' },
    { id: 10, transaction: 'Book Purchase', category: 'Education', categoryIcon: FiBook, categoryColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200', date: '06 Jan 2024' }
  ];

  return (
    <div className="flex-1 p-6 ml-20 bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Transactions</h1>
        <p className="text-muted-foreground">Manage and view all your transactions.</p>
      </div>
      
      {/* Transactions Table */}
      <div className="bg-card rounded-lg border border-border shadow-sm">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">All Transactions</h2>
          <p className="text-sm text-muted-foreground mt-1">Complete transaction history</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-medium text-muted-foreground">Transaction</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Category</th>
                <th className="text-left p-4 font-medium text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => {
                const IconComponent = transaction.categoryIcon;
                return (
                  <tr key={transaction.id} className="border-b border-border hover:bg-muted/50">
                    <td className="p-4 text-foreground">{transaction.transaction}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.categoryColor}`}>
                        <IconComponent className="w-3 h-3 mr-1" />
                        {transaction.category}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">{transaction.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;