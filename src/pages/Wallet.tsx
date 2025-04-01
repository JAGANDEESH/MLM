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
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Wallet
      </h1>

      {/* Wallet Card */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center transition-transform duration-300 hover:scale-105">
        {/* Current Balance */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Current Balance
        </h2>
        <p className="text-4xl font-bold text-green-600 dark:text-green-400">
          ₹1,230.00
        </p>

        {/* Withdrawable Amount */}
        {/* <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-2">
          Withdrawable Amount
        </h2> */}
        {/* <p className="text-3xl font-bold text-red-600 dark:text-red-400">
          ₹2,143.00
        </p> */}

        {/* Divider */}
        <div className="my-6 border-t border-gray-300 dark:border-gray-600"></div>

        {/* Wallet Info */}
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Your account balance is available for viewing.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            For any withdrawal requests, please contact support.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
        <p>Powered by MLM Company</p>
      </div>
    </motion.div>
  );
}

export default Wallet;
