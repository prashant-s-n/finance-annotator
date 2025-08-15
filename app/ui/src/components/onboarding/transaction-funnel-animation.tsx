import React, { useState, useEffect } from 'react';
import { FiHome, FiCoffee, FiBriefcase, FiTruck, FiGift, FiArrowUpRight, FiArrowDownLeft, FiTag } from 'react-icons/fi';

export const TransactionFunnelAnimation: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTagged, setIsTagged] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const transactions = [
        { 
            amount: '$2,450.00',
            type: 'income' as const,
            name: 'Sarah Johnson',
            date: 'Dec 15, 2023',
            categoryIcon: FiHome,
            categoryName: 'Housing & Real Estate Expenses',
            color: '#10b981' // emerald-500
        },
        { 
            amount: '$89.50',
            type: 'expense' as const,
            name: 'Coffee Shop',
            date: 'Dec 14, 2023',
            categoryIcon: FiCoffee,
            categoryName: 'Food & Dining Entertainment',
            color: '#f43f5e' // rose-500
        },
        { 
            amount: '$1,200.00',
            type: 'income' as const,
            name: 'Emma Rodriguez',
            date: 'Dec 13, 2023',
            categoryIcon: FiBriefcase,
            categoryName: 'Professional Salary & Benefits',
            color: '#3b82f6' // blue-500
        },
        { 
            amount: '$350.75',
            type: 'expense' as const,
            name: 'Uber Ride',
            date: 'Dec 12, 2023',
            categoryIcon: FiTruck,
            categoryName: 'Transportation & Travel Costs',
            color: '#f97316' // orange-500
        },
        { 
            amount: '$125.00',
            type: 'income' as const,
            name: 'Lisa Anderson',
            date: 'Dec 11, 2023',
            categoryIcon: FiGift,
            categoryName: 'Gifts & Personal Contributions',
            color: '#8b5cf6' // violet-500
        }
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsTagged(false);
            setIsTransitioning(true);
            
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % transactions.length);
                setIsTransitioning(false);
            }, 400); // Smooth transition duration
        }, 3000);
        
        return () => clearInterval(interval);
    }, [transactions.length]);
    
    useEffect(() => {
        if (!isTransitioning) {
            const tagTimer = setTimeout(() => {
                setIsTagged(true);
            }, 800); // Delay before showing tag
            
            return () => clearTimeout(tagTimer);
        }
    }, [currentIndex, isTransitioning]);
    
    const currentTransaction = transactions[currentIndex];
    
    
    // Skeleton Card Component
    const SkeletonCard = ({ className = '' }: { className?: string }) => (
        <div className={`w-64 h-36 rounded-xl shadow-lg border bg-white border-gray-200 p-4 ${className}`}>
            <div className="h-full flex flex-col justify-center space-y-3 pb-8">
                {/* Amount skeleton */}
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full animate-pulse"></div>
                    <div className="w-24 h-6 bg-blue-100 rounded animate-pulse"></div>
                    <div className="w-12 h-4 bg-blue-100 rounded animate-pulse"></div>
                </div>
                
                {/* Name skeleton */}
                <div className="w-32 h-4 bg-blue-100 rounded animate-pulse"></div>
                
                {/* Date skeleton */}
                <div className="w-20 h-3 bg-blue-100 rounded animate-pulse"></div>
            </div>
            
            {/* Bottom skeleton */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-blue-50 rounded-b-xl px-4 py-2 flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-blue-100 rounded animate-pulse"></div>
                    <div className="w-24 h-3 bg-blue-100 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
    
    return (
        <div className="relative w-full h-[600px] p-6 overflow-hidden flex flex-col items-center justify-center space-y-6">
            {/* Top Skeleton Card */}
            <SkeletonCard className="opacity-60 scale-95" />
            
            {/* Main Animated Card */}
            <div 
                className={`w-64 h-36 rounded-xl shadow-lg border bg-white border-gray-200 p-4 transition-all duration-400 ease-in-out z-10 ${
                    isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
            >
                {/* Card Content */}
                <div className="h-full flex flex-col justify-center space-y-1 pb-8">
                    {/* Amount with Type Icon */}
                    <div className="flex items-center">
                        <div className={`flex items-center justify-center w-6 h-6 rounded-full mr-2 transition-all duration-500 ease-out ${
                            isTagged 
                                ? (currentTransaction.type === 'income' 
                                    ? 'bg-green-100 text-green-600 scale-100 opacity-100' 
                                    : 'bg-red-100 text-red-600 scale-100 opacity-100')
                                : 'bg-gray-100 text-gray-400 scale-90 opacity-60'
                        }`}>
                            {currentTransaction.type === 'income' ? (
                                <FiArrowUpRight className="w-3 h-3" />
                            ) : (
                                <FiArrowDownLeft className="w-3 h-3" />
                            )}
                        </div>
                        <div className={`text-xl font-bold transition-all duration-500 ease-out ${
                            isTagged 
                                ? (currentTransaction.type === 'income' 
                                    ? 'text-green-700 scale-100 opacity-100' 
                                    : 'text-red-700 scale-100 opacity-100')
                                : 'text-gray-400 scale-95 opacity-60'
                        }`}>
                            {currentTransaction.amount}
                        </div>
                        <div className={`text-xs font-medium uppercase tracking-wide ml-2 transition-all duration-500 ease-out delay-100 ${
                            isTagged 
                                ? (currentTransaction.type === 'income' 
                                    ? 'text-green-600 translate-y-0 opacity-100' 
                                    : 'text-red-600 translate-y-0 opacity-100')
                                : 'text-gray-400 translate-y-1 opacity-60'
                        }`}>
                            {currentTransaction.type}
                        </div>
                    </div>
                    
                    {/* Name */}
                    <div className={`text-base font-medium transition-all duration-500 ease-out delay-150 ${
                        isTagged ? 'text-gray-800 translate-y-0 opacity-100' : 'text-gray-400 translate-y-1 opacity-60'
                    }`}>
                        {currentTransaction.name}
                    </div>
                    
                    {/* Date */}
                    <div className={`text-xs transition-all duration-500 ease-out delay-200 ${
                        isTagged ? 'text-gray-600 translate-y-0 opacity-100' : 'text-gray-400 translate-y-1 opacity-60'
                    }`}>
                        {currentTransaction.date}
                    </div>
                </div>
                
                {/* Bottom area */}
                <div className="absolute bottom-0 left-0 right-0">
                    {!isTagged ? (
                        /* Processing State */
                        <div className="bg-gray-100 rounded-b-xl px-4 py-2 flex items-center justify-center space-x-2 transition-all duration-300 ease-in">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <span className="text-xs text-gray-500 font-medium">Processing...</span>
                        </div>
                    ) : (
                        /* Category Tag with Tag Icon Only */
                        <div 
                            className={`rounded-b-xl px-4 py-2 flex items-center justify-center space-x-2 transition-all duration-700 ease-out transform scale-100 opacity-100 translate-y-0 ${
                                currentTransaction.type === 'income' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                            }`}
                            style={{ 
                                backgroundColor: currentTransaction.type === 'income' ? '#dcfce7' : '#fecaca',
                                animation: isTagged ? 'slideUpFade 0.7s ease-out' : 'none'
                            }}
                        >
                            <FiTag className="w-4 h-4" />
                            <span className="text-xs font-medium">{currentTransaction.categoryName}</span>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Bottom Skeleton Card */}
            <SkeletonCard className="opacity-60 scale-95" />
        </div>
    );
};

export default TransactionFunnelAnimation;