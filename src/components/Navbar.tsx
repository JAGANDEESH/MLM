import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import logo from '../assets/logo.png'; // Assuming the logo is saved in assets folder

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Admin', path: '/admin' },
    { name: 'Tree View', path: '/tree' },
    { name: 'Wallet', path: '/wallet' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-md bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text ">Saravana SuperMarket</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all 
                  ${location.pathname === item.path ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}`}
              >
                {item.name}
              </Link>
            ))}
            {/* Profile Icon */}
            <Link to="/profile">
              <User className="w-6 h-6 text-gray-700 hover:text-indigo-600" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/profile">
              <User className="w-6 h-6 text-gray-700 hover:text-indigo-600" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
              {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-2 text-lg font-medium rounded-lg transition-all 
                    ${location.pathname === item.path ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-600'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div> 
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
