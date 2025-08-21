import React, { useState } from 'react';
import { 
  FiShoppingCart, FiCoffee, FiHome, FiHeart, FiBook, FiDollarSign, FiTrendingUp, FiGift, FiMoreHorizontal,
  FiPlus, FiEdit2, FiTrash2, FiTag
} from 'react-icons/fi';

export const Categories: React.FC = () => {
  const [categories] = useState([
    {
      id: 1,
      name: 'Food & Dining',
      icon: FiCoffee,
      color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      iconColor: 'text-orange-600',
      transactionCount: 45,
      totalAmount: 1250.50,
      type: 'expense'
    },
    {
      id: 2,
      name: 'Shopping',
      icon: FiShoppingCart,
      color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      iconColor: 'text-blue-600',
      transactionCount: 32,
      totalAmount: 2100.75,
      type: 'expense'
    },
    
    {
      id: 4,
      name: 'Housing',
      icon: FiHome,
      color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      iconColor: 'text-purple-600',
      transactionCount: 12,
      totalAmount: 3500.00,
      type: 'expense'
    },
    {
      id: 5,
      name: 'Healthcare',
      icon: FiHeart,
      color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      iconColor: 'text-red-600',
      transactionCount: 8,
      totalAmount: 450.00,
      type: 'expense'
    },
    {
      id: 6,
      name: 'Education',
      icon: FiBook,
      color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      iconColor: 'text-indigo-600',
      transactionCount: 15,
      totalAmount: 1200.00,
      type: 'expense'
    },
    
    {
      id: 8,
      name: 'Salary', 
      icon: FiDollarSign,
      color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
      iconColor: 'text-emerald-600',
      transactionCount: 2,
      totalAmount: 8500.00,
      type: 'income'
    },
    {
      id: 9,
      name: 'Investments',
      icon: FiTrendingUp,
      color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
      iconColor: 'text-cyan-600',
      transactionCount: 10,
      totalAmount: 1500.00,
      type: 'income'
    },
    {
      id: 10,
      name: 'Gifts',
      icon: FiGift,
      color: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      iconColor: 'text-pink-600',
      transactionCount: 5,
      totalAmount: 300.00,
      type: 'expense'
    },
    {
      id: 11,
      name: 'Other',
      icon: FiMoreHorizontal,
      color: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
      iconColor: 'text-gray-600',
      transactionCount: 18,
      totalAmount: 750.50,
      type: 'expense'
    }
  ]);

  const expenseCategories = categories.filter(cat => cat.type === 'expense');
  const incomeCategories = categories.filter(cat => cat.type === 'income');

  const CategoryCard = ({ category }: { category: typeof categories[0] }) => {
    const IconComponent = category.icon;
    
    return (
      <div className="bg-card p-4 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${category.color.replace('text-', 'bg-').replace('dark:text-', 'dark:bg-').split(' ')[0]} ${category.color.split(' ')[0].replace('bg-', 'bg-opacity-20')}`}>
              <IconComponent className={`w-5 h-5 ${category.iconColor}`} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{category.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                {category.type === 'income' ? 'Income' : 'Expense'}
              </span>
            </div>
          </div>
          <div className="flex gap-1">
            <button className="p-1 hover:bg-muted rounded transition-colors">
              <FiEdit2 className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </button>
            <button className="p-1 hover:bg-muted rounded transition-colors">
              <FiTrash2 className="w-4 h-4 text-muted-foreground hover:text-red-500" />
            </button>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Transactions</span>
            <span className="text-sm font-medium text-foreground">{category.transactionCount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total Amount</span>
            <span className={`text-sm font-medium ${
              category.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              {category.type === 'income' ? '+' : '-'}${category.totalAmount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 p-6 ml-20 bg-background">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Categories</h1>
            <p className="text-muted-foreground">Organize your transactions with custom categories.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            <FiPlus className="w-4 h-4" />
            Add Category
          </button>
        </div>
      </div>
      
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <FiTag className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-foreground">Total Categories</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">{categories.length}</p>
          <p className="text-sm text-muted-foreground">{expenseCategories.length} expense, {incomeCategories.length} income</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <FiTrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-foreground">Most Active</h3>
          </div>
          <p className="text-lg font-bold text-foreground">Food & Dining</p>
          <p className="text-sm text-muted-foreground">45 transactions</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <FiDollarSign className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-foreground">Highest Spending</h3>
          </div>
          <p className="text-lg font-bold text-foreground">Housing</p>
          <p className="text-sm text-muted-foreground">$3,500.00</p>
        </div>
      </div>

      {/* Expense Categories */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Expense Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expenseCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Income Categories */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Income Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {incomeCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;