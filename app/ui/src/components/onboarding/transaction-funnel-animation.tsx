import React, { useState, useEffect } from 'react';
import { 
    FiCoffee, FiShoppingCart, 
    FiTruck, 
    FiArrowUpRight,
    FiArrowUpLeft,
    FiUser,
    FiCalendar
} from 'react-icons/fi';
import { 
    randFloat, 
    rand,
    randFood,
    randProduct,
    randFullName
} from '@ngneat/falso';

interface Transaction {
    id: number;
    description: string;
    amount: string;
    currencySymbol: string;
    type: 'income' | 'expense';
    category: string;
    tag: string;
    tagIcon: React.ComponentType<any>;
    icon: React.ComponentType<any>;
    isVisible: boolean;
    isTagged: boolean;
    timestamp: number;
    date: string;
    recipient: string;
}

export const TransactionFunnelAnimation: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [nextId, setNextId] = useState(1);

    const transactionCategories = [
        { 
            type: 'expense' as const, 
            category: 'Food', 
            tag: 'Food', 
            tagIcon: FiCoffee,
            getDescription: () => randFood()
        },
        { 
            type: 'expense' as const, 
            category: 'Grocery', 
            tag: 'Grocery', 
            tagIcon: FiShoppingCart,
            getDescription: () => `${randProduct().title} Shopping`
        },
        { 
            type: 'expense' as const, 
            category: 'Travel', 
            tag: 'Travel', 
            tagIcon: FiTruck,
            getDescription: () => 'Transportation'
        },
        { 
            type: 'income' as const, 
            category: 'Salary', 
            tag: 'Salary', 
            tagIcon: FiCoffee,
            getDescription: () => 'Monthly Salary'
        },
        { 
            type: 'income' as const, 
            category: 'Freelance', 
            tag: 'Freelance', 
            tagIcon: FiShoppingCart,
            getDescription: () => 'Freelance Work'
        }
    ];

    const createNewTransaction = (id: number): Transaction => {
        const category = rand(transactionCategories);
        const now = new Date();
        const randomDaysAgo = Math.floor(Math.random() * 30); // Random date within last 30 days
        const transactionDate = new Date(now.getTime() - (randomDaysAgo * 24 * 60 * 60 * 1000));
        
        return {
            id,
            description: category.getDescription(),
            amount: randFloat({ min: 5, max: 5000, precision: 2 }).toFixed(2),
            currencySymbol: rand(['$', '€', '£', '¥']),
            type: category.type,
            category: category.category,
            tag: category.tag,
            tagIcon: category.tagIcon,
            icon: category.type === 'income' ? FiArrowUpRight : FiArrowUpLeft,
            isVisible: false,
            isTagged: false,
            timestamp: Date.now(),
            date: transactionDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
            }),
            recipient: randFullName()
        };
    };

    useEffect(() => {
        // Initialize with first transaction
        if (transactions.length === 0) {
            const initialTransaction = createNewTransaction(nextId);
            setNextId(prev => prev + 1);
            setTransactions([initialTransaction]);
            
            setTimeout(() => {
                setTransactions(prev => 
                    prev.map(t => ({ ...t, isVisible: true }))
                );
                setTimeout(() => {
                    setTransactions(prev => 
                        prev.map(t => ({ ...t, isTagged: true }))
                    );
                }, 800);
            }, 100);
        }

        // Replace current transaction with a new one every 3 seconds
        const replaceTransactionInterval = setInterval(() => {
            const newTransaction = createNewTransaction(nextId);
            setNextId(prev => prev + 1);
            
            // Replace the current transaction
            setTransactions([newTransaction]);

            // Make the transaction visible after a short delay
            setTimeout(() => {
                setTransactions(prev => 
                    prev.map(t => 
                        t.id === newTransaction.id 
                            ? { ...t, isVisible: true }
                            : t
                    )
                );

                // Tag the transaction after another delay
                setTimeout(() => {
                    setTransactions(prev => 
                        prev.map(t => 
                            t.id === newTransaction.id 
                                ? { ...t, isTagged: true }
                                : t
                        )
                    );
                }, 800);
            }, 100);
        }, 3000);

        return () => {
            clearInterval(replaceTransactionInterval);
        };
    }, [nextId]);

    const getTagColor = (category: string) => {
        return 'bg-black text-white border-black dark:bg-black dark:text-white dark:border-black';
    };

    const getIconColor = (type: 'income' | 'expense', isVisible: boolean) => {
        if (!isVisible) return 'text-gray-400 dark:text-gray-600';
        return type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400';
    };

    const getIconBgColor = (type: 'income' | 'expense', isVisible: boolean) => {
        if (!isVisible) return 'bg-gray-200 dark:bg-gray-700';
        return type === 'income' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30';
    };

    return (
        <div className="w-full h-full flex items-left justify-left p-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 w-full max-w-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="mb-6 text-left">
                    <div className="flex items-center justify-center gap-4 mb-2">
                        <img 
                            src="/logo.png" 
                            alt="Finnotate Logo" 
                            className="w-20 object-contain"
                        />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        Finnotate
                        <span className="text-sm text-gray-600 block dark:text-gray-400 font-medium"> Self hosted finance annotator</span>
                    </div>    
                    </div>
                    
                </div>
                
                <div className="h-[350px] flex items-center justify-center overflow-hidden">
                    {(() => {
                        if (transactions.length === 0) {
                            return <div className="text-gray-500 dark:text-gray-400">Loading...</div>;
                        }
                        
                        const IconComponent = transactions[0].icon;
                        const TagIconComponent = transactions[0].tagIcon;
                        
                        return (
                            <div 
                                key={transactions[0].id}
                                className={`w-full h-full p-4 rounded-lg border transition-all duration-1000 ease-out transform flex flex-col justify-center ${
                                    transactions[0].isVisible 
                                        ? 'opacity-100 translate-y-0 scale-100 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700' 
                                        : 'opacity-0 -translate-y-12 scale-95 bg-transparent border-transparent'
                                }`}
                            >
                                {/* Main content container - left aligned */}
                                <div className="flex items-start gap-4 mb-4">
                                    {/* Income/Expense Icon */}
                                    <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-700 ${
                                        getIconBgColor(transactions[0].type, transactions[0].isVisible)
                                    }`}>
                                        <IconComponent
                                            className={`w-7 h-7 transition-all duration-700 ${
                                                getIconColor(transactions[0].type, transactions[0].isVisible)
                                            }`}
                                        />
                                    </div>
                                    
                                    {/* Transaction Details - left aligned */}
                                    <div className="flex flex-col items-start flex-1">
                                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                            {transactions[0].currencySymbol}{transactions[0].amount}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                            {transactions[0].description}
                                        </div>
                                        
                                        {/* Date and Recipient with icons */}
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                                <FiCalendar className="w-3 h-3" />
                                                <span>{transactions[0].date}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                                                <FiUser className="w-3 h-3" />
                                                <span>{transactions[0].recipient}</span>
                                            </div>
                                        </div>
                                        
                                        {/* Skeleton for additional details - left aligned with more lines */}
                                        <div className="flex flex-col gap-2">
                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-20"></div>
                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-20"></div>
                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-30"></div>
                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-60"></div>
                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-60"></div>
                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-60"></div>
                                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-60"></div>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom section with tag */}
                                <div className={`w-full flex justify-center transition-all duration-1000 ease-out transform ${
                                    transactions[0].isTagged 
                                        ? 'opacity-100 scale-100 translate-y-0' 
                                        : 'opacity-0 scale-95 translate-y-4'
                                }`}>
                                    <div className="relative inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 overflow-hidden">
                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className="p-1">
                                                <TagIconComponent className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-sm font-semibold">{transactions[0].tag}</span>
                                            <div className="h-4 w-px bg-blue-400 mx-1"></div>
                                            <span className="text-sm font-bold">{transactions[0].currencySymbol}{transactions[0].amount}</span>
                                        </div>
                                        
                                        {/* Shimmer effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 animate-shimmer"></div>
                                    </div>
                                </div>
                                
                                {/* Minimal analytics */}
                                <div className={`mt-4 text-center transition-all duration-1200 ease-out transform ${
                                    transactions[0].isTagged 
                                        ? 'opacity-100 scale-100 translate-y-0' 
                                        : 'opacity-0 scale-95 translate-y-8'
                                }`}>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {Math.floor(Math.random() * 15) + 5} transactions this week • Top category: {rand(['Food', 'Shopping', 'Travel', 'Bills'])}
                                    </div>
                                </div>
                            </div>
                        );
                    })()
                }
                </div>
                
                
            </div>
        </div>
    );
};

export default TransactionFunnelAnimation;