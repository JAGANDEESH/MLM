import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet2, ArrowDownCircle, Clock, AlertCircle, CreditCard } from 'lucide-react';

function Wallet() {
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  const [selectedTab, setSelectedTab] = useState('balance');

  const transactions = [
    { id: 1, type: 'credit', amount: 500, date: '2024-03-10', status: 'completed' },
    { id: 2, type: 'debit', amount: 200, date: '2024-03-09', status: 'completed' },
    { id: 3, type: 'credit', amount: 1000, date: '2024-03-08', status: 'pending' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-48 lg:w-48 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 h-24 w-24 sm:h-32 sm:w-32 lg:h-56 lg:w-56 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-3 mt-12 mb-10"
      >
        <Wallet2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <h1 className="text-3xl md:text-4xl font-bold  bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text dark:text-white">
          My Wallet
        </h1>
      </motion.div>
     
      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
        <button
          onClick={() => setSelectedTab('balance')}
          className={`px-4 py-2 rounded-md transition-all ${
            selectedTab === 'balance'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          Balance
        </button>
        <button
          onClick={() => setSelectedTab('transactions')}
          className={`px-4 py-2 rounded-md transition-all ${
            selectedTab === 'transactions'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          Transactions
        </button>
      </div>

      <AnimatePresence mode="wait">
        {selectedTab === 'balance' ? (
          <motion.div
            key="balance"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full max-w-md"
          >
            {/* Balance Card */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl mb-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Available Balance
                </h2>
                <p className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">
                  ₹1,230.00
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  {/* <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <ArrowDownCircle className="w-5 h-5" />
                    Withdraw
                  </button> */}
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                    <CreditCard className="w-5 h-5" />
                    Add Money
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            {/* <div className="grid grid-cols-1 gap-4"> */}
              {/* <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Last Withdrawal
                </h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  ₹500.00
                </p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div> */}
              {/* <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Pending
                </h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  ₹200.00
                </p>
                <p className="text-xs text-gray-500">Processing</p>
              </div>
            </div> */}
          </motion.div>
        ) : (
          <motion.div
            key="transactions"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Recent Transactions
            </h2>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {transaction.type === 'credit' ? (
                      <ArrowDownCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <ArrowDownCircle className="w-5 h-5 text-red-500 transform rotate-180" />
                    )}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        ₹{transaction.amount}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-gray-600 dark:text-gray-400"
      >
        <p className="text-sm">Powered by MLM Company</p>
        <p className="text-xs mt-1">© 2024 All rights reserved</p>
      </motion.div>
    </motion.div>
  );
}

export default Wallet;