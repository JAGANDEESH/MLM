import React from 'react';
import { motion } from 'framer-motion';

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Profile</h1>

      {/* Profile Card - Centered */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-md">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600"
        />

        {/* Profile Details */}
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">John Doe</h2>
          {/* <p className="text-gray-600 dark:text-gray-400">Frontend Developer</p> */}
          <p className="text-gray-500 dark:text-gray-300 mt-2">john.doe@example.com</p>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Balance & Withdraw Section - Centered */}
      <div className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center w-full max-w-md">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Current Balance</h3>
        <p className="text-3xl font-bold text-green-600 dark:text-green-400">₹5,320</p>

        <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition">
          Withdraw Now
        </button>
      </div>
    </motion.div>
  );
}

export default Profile;
