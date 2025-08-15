import { Routes, Route } from 'react-router-dom';
import { AppShell } from '../components/navigation/app-shell';

// Page components
const Dashboard = () => <div className="p-4">Dashboard Content</div>;
const Transactions = () => <div className="p-4">Transactions and Reports Content</div>;
const Categories = () => <div className="p-4">Categories Content</div>;

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </AppShell>
  );
}

export default App;
