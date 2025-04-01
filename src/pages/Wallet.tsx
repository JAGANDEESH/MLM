import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Wallet() {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      {/* Wallet Header */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Wallet</h1>

      {/* Wallet Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Current Balance</h2>
        <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">₹1,230.00</p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Withdraw Amount</h2>
        <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">₹2,143.00</p>

        {/* Withdraw Section */}
        <div className="mt-6">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Withdraw Amount</label>
          <input
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none dark:bg-gray-700 dark:text-white"
          />

          <button
            className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
            disabled={!withdrawAmount}
          >
            Withdraw Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Wallet;
