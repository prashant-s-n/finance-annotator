import React from 'react';
import { FiDollarSign, FiTrendingUp, FiEye, FiMoreHorizontal, FiPlus } from 'react-icons/fi';

export const BankAccounts: React.FC = () => {
  return (
    <div className="flex-1 p-6 ml-20 bg-background">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Bank Accounts</h1>
          <p className="text-muted-foreground">Manage your bank accounts and view balances.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <FiPlus className="h-4 w-4" />
          <span>Add Account</span>
        </button>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Checking Account */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <FiDollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <button className="p-2 hover:bg-secondary rounded-md">
              <FiMoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground">Chase Bank</p>
            <p className="text-lg font-semibold text-foreground">Checking Account</p>
            <p className="text-xs text-muted-foreground">•••• •••• •••• 4532</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-foreground">$8,245.32</p>
              <p className="text-xs text-green-600 dark:text-green-400 flex items-center">
                <FiTrendingUp className="h-3 w-3 mr-1" />
                +2.1% this month
              </p>
            </div>
            <button className="p-2 hover:bg-secondary rounded-md">
              <FiEye className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Savings Account */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <FiTrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <button className="p-2 hover:bg-secondary rounded-md">
              <FiMoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground">Chase Bank</p>
            <p className="text-lg font-semibold text-foreground">High Yield Savings</p>
            <p className="text-xs text-muted-foreground">•••• •••• •••• 7891</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-foreground">$15,678.90</p>
              <p className="text-xs text-green-600 dark:text-green-400 flex items-center">
                <FiTrendingUp className="h-3 w-3 mr-1" />
                +4.2% APY
              </p>
            </div>
            <button className="p-2 hover:bg-secondary rounded-md">
              <FiEye className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Investment Account */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <FiTrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <button className="p-2 hover:bg-secondary rounded-md">
              <FiMoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-sm font-medium text-muted-foreground">Fidelity</p>
            <p className="text-lg font-semibold text-foreground">Brokerage Account</p>
            <p className="text-xs text-muted-foreground">•••• •••• •••• 1234</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-foreground">$42,156.78</p>
              <p className="text-xs text-green-600 dark:text-green-400 flex items-center">
                <FiTrendingUp className="h-3 w-3 mr-1" />
                +12.8% YTD
              </p>
            </div>
            <button className="p-2 hover:bg-secondary rounded-md">
              <FiEye className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankAccounts;