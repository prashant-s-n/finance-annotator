import NxWelcome from './nx-welcome';
import { Route, Routes, Link } from 'react-router-dom';

import CommuteIcon from '/commute.png';
import CreditCardIcon from '/credit_card.png';
import EntertainmentIcon from '/entertainment.png';
import FoodIcon from '/food.png';
import GroceryIcon from '/grocery.png';
import HousingIcon from '/housing.png';
import LeisureIcon from '/leisure.png';

const icons = [
  { src: CommuteIcon, alt: 'Commute', title: 'Commute', price: '120.50' },
  {
    src: CreditCardIcon,
    alt: 'Credit Card',
    title: 'Credit Card',
    price: '4500.00',
  },
  {
    src: EntertainmentIcon,
    alt: 'Entertainment',
    title: 'Entertainment',
    price: '799.99',
  },
  { src: FoodIcon, alt: 'Food', title: 'Food', price: '250.75' },
  { src: GroceryIcon, alt: 'Grocery', title: 'Grocery', price: '1345.20' },
  { src: HousingIcon, alt: 'Housing', title: 'Housing', price: '15000.00' },
  { src: LeisureIcon, alt: 'Leisure', title: 'Leisure', price: '999.00' },
];

const transactions = [
  { date: '2025-08-01', desc: 'Bus Ticket', amount: '₹ 40.00' },
  { date: '2025-08-02', desc: 'Movie Night', amount: '₹ 350.00' },
  { date: '2025-08-03', desc: 'Grocery Store', amount: '₹ 1,200.00' },
  { date: '2025-08-04', desc: 'Restaurant', amount: '₹ 650.00' },
  { date: '2025-08-05', desc: 'Credit Card Bill', amount: '₹ 4,500.00' },
];

export function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className=" rounded-xl p-8 flex gap-8 w-[800px]">
        {/* Left Column - Horizontal Icon + Text */}
        <div className="flex flex-col gap-4 w-1/2">
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 rounded-lg p-4 bg-white cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="text-base font-semibold text-gray-700">
                  {icon.title}
                </h3>
                <p className="text-sm text-gray-600">₹ {icon.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Transactions */}
        <div className="flex flex-col w-1/2 bg-gray-50 rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Transactions
          </h2>
          <ul className="divide-y divide-gray-200">
            {transactions.map((tx, idx) => (
              <li key={idx} className="py-3 flex justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">{tx.desc}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  {tx.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
