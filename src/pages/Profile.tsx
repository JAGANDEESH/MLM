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
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-md transform transition-all duration-300 hover:scale-105">
        {/* Profile Image */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/662/797/non_2x/attractive-prosperous-male-in-formal-clothes-poses-in-office-building-works-on-new-businnes-project-successful-man-manager-being-at-work-place-entrepreneur-develops-new-idea-for-success-free-photo.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow-md mb-4"
        />

        {/* Profile Details */}
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">mahesh</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Frontend Developer</p>
          <p className="text-gray-500 dark:text-gray-300 mt-2">mahesh.doe@example.com</p>

          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none transition-all duration-300 transform hover:scale-105">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Balance & Withdraw Section - Centered */}
      <div className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Current Balance</h3>
        <p className="text-3xl font-bold text-green-600 dark:text-green-400">₹5,320</p>

        {/* <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none transition-all duration-300 transform hover:scale-105">
          Withdraw Now
        </button> */}
      </div>
    </motion.div>
  );
}

export default Profile;
