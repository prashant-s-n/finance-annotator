import React, { useState } from 'react';
import { TransactionFunnelAnimation } from './transaction-funnel-animation';
import { FiArrowRight, FiUser } from 'react-icons/fi';

const Onboarding: React.FC = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
                    {/* Left Column - Transaction Funnel Animation */}
                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-md pb-20">
                            <TransactionFunnelAnimation />
                        </div>
                    </div>
                    
                    {/* Right Column - Welcome Section with Form and Guide */}
                    <div className="flex flex-col justify-start items-start space-y-8 px-8">
                        <div className="text-left">
                            <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
                                Welcome
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Let's get you started with your financial journey
                                
                            </p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Enter your name to begin
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiUser className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                We'll use this to personalize your experience
                            </p>
                            <button
                                type="submit"
                                className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center justify-center gap-2"
                            >
                                Get Started
                                <FiArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;