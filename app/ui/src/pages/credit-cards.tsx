import React from 'react';
import { FiCreditCard, FiTrendingUp, FiEye, FiMoreHorizontal, FiPlus, FiAlertCircle } from 'react-icons/fi';

export const CreditCards: React.FC = () => {
  return (
    <div className="flex-1 p-6 ml-20 bg-background">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Credit Cards</h1>
          <p className="text-muted-foreground">Manage your credit cards and track spending.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
          <FiPlus className="h-4 w-4" />
          <span>Apply for Card</span>
        </button>
      </div>

      {/* Credit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chase Sapphire */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-12 bg-white/20 rounded flex items-center justify-center">
              <FiCreditCard className="h-5 w-5" />
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80">Credit Limit</p>
              <p className="text-sm font-semibold">$15,000</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm opacity-80">Chase</p>
            <p className="text-lg font-semibold">Sapphire Preferred</p>
            <p className="text-xl font-mono tracking-wider mt-2">•••• •••• •••• 1234</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Current Balance</p>
              <p className="text-2xl font-bold">$1,245.67</p>
              <div className="flex items-center mt-1">
                <div className="w-16 h-1 bg-white/30 rounded-full mr-2">
                  <div className="w-2 h-1 bg-white rounded-full"></div>
                </div>
                <span className="text-xs opacity-80">8% used</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiEye className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiMoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Amex Gold */}
        <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-12 bg-white/20 rounded flex items-center justify-center">
              <FiCreditCard className="h-5 w-5" />
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80">Credit Limit</p>
              <p className="text-sm font-semibold">$25,000</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm opacity-80">American Express</p>
            <p className="text-lg font-semibold">Gold Card</p>
            <p className="text-xl font-mono tracking-wider mt-2">•••• •••• •••• 5678</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Current Balance</p>
              <p className="text-2xl font-bold">$567.89</p>
              <div className="flex items-center mt-1">
                <div className="w-16 h-1 bg-white/30 rounded-full mr-2">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <span className="text-xs opacity-80">2% used</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiEye className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiMoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Citi Cashback */}
        <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-xl text-white shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-12 bg-white/20 rounded flex items-center justify-center">
              <FiCreditCard className="h-5 w-5" />
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80">Credit Limit</p>
              <p className="text-sm font-semibold">$10,000</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-sm opacity-80">Citibank</p>
            <p className="text-lg font-semibold">Double Cash</p>
            <p className="text-xl font-mono tracking-wider mt-2">•••• •••• •••• 9012</p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Current Balance</p>
              <p className="text-2xl font-bold">$0.00</p>
              <div className="flex items-center mt-1">
                <div className="w-16 h-1 bg-white/30 rounded-full mr-2">
                  <div className="w-0 h-1 bg-white rounded-full"></div>
                </div>
                <span className="text-xs opacity-80">0% used</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiEye className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-md">
                <FiMoreHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Score Section */}
      <div className="mt-8 bg-card p-6 rounded-lg border border-border shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Credit Score Overview</h3>
          <FiTrendingUp className="h-5 w-5 text-green-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-2">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-foreground">785</span>
              </div>
            </div>
            <p className="text-sm font-medium text-foreground">Excellent</p>
            <p className="text-xs text-muted-foreground">FICO Score</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Credit Utilization</p>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-foreground">$1,813.56 / $50,000</span>
              <span className="text-sm text-green-600">3.6%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '3.6%'}}></div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Payment History</p>
            <div className="flex items-center space-x-2">
              <FiAlertCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm text-foreground">100% On-time</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">36 months perfect history</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;