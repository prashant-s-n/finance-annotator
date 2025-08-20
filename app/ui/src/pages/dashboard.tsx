import React from 'react';
import { FiTrendingUp, FiDollarSign, FiCreditCard, FiPieChart, FiBarChart2, FiActivity } from 'react-icons/fi';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-6 ml-20 bg-background">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <FiDollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <FiTrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Balance</p>
            <p className="text-2xl font-bold text-foreground">$66,080.00</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">+2.5% from last month</p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <FiTrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <FiActivity className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Monthly Income</p>
            <p className="text-2xl font-bold text-foreground">$4,250.00</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">+8.2% from last month</p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
              <FiCreditCard className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <FiBarChart2 className="h-4 w-4 text-red-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Monthly Expenses</p>
            <p className="text-2xl font-bold text-foreground">$2,890.45</p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">+3.1% from last month</p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <FiPieChart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <FiTrendingUp className="h-4 w-4 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Savings Rate</p>
            <p className="text-2xl font-bold text-foreground">32%</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">+5% from last month</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Chart */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Monthly Spending</h3>
            <FiBarChart2 className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[
              { month: 'Jan', amount: 2890, height: 'h-32' },
              { month: 'Feb', amount: 3200, height: 'h-40' },
              { month: 'Mar', amount: 2750, height: 'h-28' },
              { month: 'Apr', amount: 3100, height: 'h-36' },
              { month: 'May', amount: 2650, height: 'h-24' },
              { month: 'Jun', amount: 2890, height: 'h-32' }
            ].map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className={`w-full bg-blue-500 dark:bg-blue-400 rounded-t ${data.height} mb-2`}></div>
                <span className="text-xs text-muted-foreground">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Income vs Expenses Chart */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Income vs Expenses</h3>
            <FiPieChart className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48">
              {/* Simplified pie chart representation */}
              <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-400 to-red-600 origin-center transform rotate-45"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm font-medium text-foreground">Net Income</p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-400">$1,359.55</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Income</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Expenses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;