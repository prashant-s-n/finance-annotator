import React from 'react';
import { FiCreditCard, FiLock, FiEye, FiMoreHorizontal, FiPlus, FiShield } from 'react-icons/fi';

export const DebitCards: React.FC = () => {
  return (
    <div className="flex-1 p-6 ml-20 bg-background">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Debit Cards</h1>
          <p className="text-muted-foreground">Manage your debit cards and spending limits.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <FiPlus className="h-4 w-4" />
          <span>Request Card</span>
        </button>
      </div>

      {/* Debit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Primary Debit Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-12 bg-white/20 rounded flex items-center justify-center">
              <FiCreditCard className="h-5 w-5" />
            </div>
            <div className="flex items-center space-x-2">
              <FiShield className="h-4 w-4 text-green-400" />
              <span className="text-xs text-green-400">Active</span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm opacity-80">Chase Bank</p>
            <p className="text-lg font-semibold">Primary Checking</p>
            <p className="text-xl font-mono tracking-wider mt-2">•••• •••• •••• 4532</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Available Balance</p>
              <p className="text-2xl font-bold">$8,245.32</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiEye className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiLock className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiMoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Savings Debit Card */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-12 bg-white/20 rounded flex items-center justify-center">
              <FiCreditCard className="h-5 w-5" />
            </div>
            <div className="flex items-center space-x-2">
              <FiShield className="h-4 w-4 text-green-300" />
              <span className="text-xs text-green-300">Active</span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm opacity-80">Chase Bank</p>
            <p className="text-lg font-semibold">Savings Account</p>
            <p className="text-xl font-mono tracking-wider mt-2">•••• •••• •••• 7891</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Available Balance</p>
              <p className="text-2xl font-bold">$15,678.90</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiEye className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiLock className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiMoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Business Debit Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-12 bg-white/20 rounded flex items-center justify-center">
              <FiCreditCard className="h-5 w-5" />
            </div>
            <div className="flex items-center space-x-2">
              <FiLock className="h-4 w-4 text-red-400" />
              <span className="text-xs text-red-400">Locked</span>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm opacity-80">Chase Business</p>
            <p className="text-lg font-semibold">Business Checking</p>
            <p className="text-xl font-mono tracking-wider mt-2">•••• •••• •••• 9876</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Available Balance</p>
              <p className="text-2xl font-bold">$3,456.78</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiEye className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiLock className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiMoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCards;