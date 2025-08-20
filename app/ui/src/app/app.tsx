import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppShell } from '../components/navigation/app-shell';
import { Dashboard } from '../pages/dashboard';
import { Transactions } from '../pages/transactions';
import { Reports } from '../pages/reports';
import { Categories } from '../pages/categories';
import BankAccounts from '../pages/bank-accounts';
import DebitCards from '../pages/debit-cards';
import CreditCards from '../pages/credit-cards';
import { ThemeProvider } from '../contexts/theme-context';
import { ThemeToggle } from '../components/ui/theme-toggle';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <ThemeToggle />
        <AppShell>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/bank-accounts" element={<BankAccounts />} />
            <Route path="/debit-cards" element={<DebitCards />} />
            <Route path="/credit-cards" element={<CreditCards />} />
          </Routes>
        </AppShell>
      </div>
    </ThemeProvider>
  );
}

export default App;
