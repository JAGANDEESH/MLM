import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MapPin, Briefcase, Edit, Camera, Settings, ChevronDown } from 'lucide-react';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');
  const [showMore, setShowMore] = useState(false);

  const profileData = {
    name: 'Mahesh Kumar',
    role: 'Senior Frontend Developer',
    email: 'mahesh.kumar@example.com',
    phone: '+91 98765 43210',
    location: 'Bangalore, India',
    experience: '5+ years',
    skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'GraphQL'],
    bio: 'Passionate frontend developer with expertise in building scalable web applications. Focused on creating beautiful and user-friendly interfaces.',
    achievements: [
      'Led a team of 5 developers',
      'Reduced app loading time by 40%',
      'Implemented CI/CD pipeline'
    ]
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Effects */}
      <div className="fixed top-20 left-20 h-32 w-32 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="fixed bottom-20 right-20 h-32 w-32 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-4xl mx-auto mt-20">
        {/* Profile Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Profile
          </h1>
        </motion.div>

        {/* Main Profile Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Profile Card */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <div className="relative">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                  />
                  <button 
                    className="absolute bottom-0 right-0 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors"
                    onClick={() => setIsEditing(true)}
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {profileData.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {profileData.role}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Mail className="w-5 h-5 mr-3" />
                  <span className="text-sm">{profileData.email}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="text-sm">{profileData.phone}</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span className="text-sm">{profileData.location}</span>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-2 space-y-6"
          >
            {/* Tabs */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-1">
              <div className="flex space-x-1">
                {['personal', 'professional', 'settings'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === section
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
              >
                {activeSection === 'personal' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      About Me
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {profileData.bio}
                    </p>
                    
                    <div className="pt-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeSection === 'professional' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Achievements
                      </h3>
                      <ul className="space-y-3">
                        {profileData.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-center text-gray-600 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeSection === 'settings' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Account Settings
                    </h3>
                    <div className="space-y-4">
                      <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <div className="flex items-center">
                          <Settings className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-300" />
                          <span className="text-gray-700 dark:text-gray-200">Privacy Settings</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </button>
                      <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 mr-3 text-gray-600 dark:text-gray-300" />
                          <span className="text-gray-700 dark:text-gray-200">Email Preferences</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;