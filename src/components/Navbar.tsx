import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Admin', path: '/admin' },
    { name: 'Tree View', path: '/tree' },
    { name: 'Wallet', path: '/wallet' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-md 
      ${isDark ? 'bg-gradient-to-r from-[#0d0224] to-[#0e0427] text-gray-200' : 'bg-gradient-to-r from-[#100629] to-[#0c0123] text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold">
            Saravana SuperMarket
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all 
                  ${location.pathname === item.path ? 'text-[#facc15] font-semibold' : 'hover:text-[#facc15]'}`}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#facc15] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-300" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
              {isOpen ? <X className="w-6 h-6 text-gray-300" /> : <Menu className="w-6 h-6 text-gray-300" />}
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
            className="absolute top-16 left-0 w-full bg-gradient-to-r from-[#0e0427] to-[#0d0224] shadow-lg rounded-b-lg overflow-hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-2 text-lg font-medium rounded-lg transition-all 
                    ${location.pathname === item.path ? 'text-[#facc15] font-semibold' : 'hover:text-[#facc15]'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Dark Mode Toggle in Mobile */}
              <button
                onClick={toggleDarkMode}
                className="p-2 mt-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                {isDark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-gray-300" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
