import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPieChart, FiLayers, FiFileText, FiChevronUp, FiChevronDown } from 'react-icons/fi';

export const AppShell: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    
    const navigationItems = [
        { icon: FiHome, path: '/', label: 'Dashboard' },
        { icon: FiPieChart, path: '/transactions', label: 'Transactions' },
        { icon: FiFileText, path: '/reports', label: 'Reports' },
        { icon: FiLayers, path: '/categories', label: 'Categories' }
    ];
    
    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <div className="fixed left-4 top-4 w-16 bg-slate-900 text-slate-50 flex flex-col border border-slate-700 shadow-sm rounded-xl z-10 transition-all duration-500 ease-out h-fit">
                {/* Logo section */}
                <div className="flex items-center justify-center py-3 transition-all duration-300 ease-out">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain transition-transform duration-300 ease-out hover:scale-110" />
                </div>
                
                {/* Navigation section - collapsible */}
                <nav className={`flex flex-col items-center space-y-4 overflow-hidden transition-all duration-700 ease-out ${
                    isMinimized 
                        ? 'max-h-0 opacity-0 -translate-y-4' 
                        : 'max-h-96 opacity-100 translate-y-0'
                }`}>
                    {navigationItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div 
                                key={item.path}
                                className={`group relative transition-all duration-500 ease-out ${
                                    isMinimized 
                                        ? 'opacity-0 -translate-y-2 scale-95' 
                                        : 'opacity-100 translate-y-0 scale-100'
                                }`}
                                style={{
                                    transitionDelay: isMinimized 
                                        ? `${(navigationItems.length - index - 1) * 75}ms` 
                                        : `${index * 75}ms`
                                }}
                            >
                                <Link 
                                    to={item.path} 
                                    className="flex items-center justify-center h-10 w-10 rounded-md hover:bg-slate-800 transition-all duration-200 ease-out hover:scale-105 active:scale-95 shadow-sm"
                                >
                                    <Icon className="h-5 w-5 transition-transform duration-200 ease-out" />
                                </Link>
                                <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-slate-900 text-slate-50 shadow-lg px-3 py-2 rounded-md text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out border border-slate-700 group-hover:translate-x-1">
                                    {item.label}
                                </div>
                            </div>
                        );
                    })}
                </nav>
                
                {/* Minimizer button - at bottom with padding */}
                <div className="flex items-center justify-center py-2 transition-all duration-300 ease-out">
                    <button
                        onClick={() => setIsMinimized(!isMinimized)}
                        className="p-2 hover:bg-slate-800 rounded-md transition-all duration-200 ease-out hover:scale-110 active:scale-95 flex items-center justify-center group"
                    >
                        {isMinimized ? 
                            <FiChevronUp className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-y-[-1px]" /> : 
                            <FiChevronDown className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-y-[1px]" />
                        }
                    </button>
                </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1 overflow-auto p-6 bg-background ml-24 transition-all duration-300 ease-out">
                {children || <div className="text-center text-foreground mt-10 p-6 bg-card rounded-xl shadow-sm border animate-in fade-in-50 duration-500">Welcome to the Big Apple! Select an option from the sidebar.</div>}
            </div>
        </div>
    );
}