import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, LineChart, Users, DollarSign, BarChart, TrendingUp } from 'lucide-react';
import handshake from '../assets/HankShake.png';
import group from '../assets/Group.png';
import enroll from '../assets/Enroll.png'
import money from '../assets/Money.png'
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

const cards = [
  { id: 1, title: "Revenue Growth", description: "Track business revenue and trends.", icon: <TrendingUp className="w-12 h-12 text-purple-600 mb-4" /> },
  { id: 2, title: "Customer Engagement", description: "Analyze customer behavior trends.", icon: <Users className="w-12 h-12 text-blue-600 mb-4" /> },
  { id: 3, title: "Sales Performance", description: "Monitor sales and optimize marketing.", icon: <DollarSign className="w-12 h-12 text-green-600 mb-4" /> },
  { id: 4, title: "Market Analysis", description: "Understand industry and competitors.", icon: <BarChart className="w-12 h-12 text-yellow-600 mb-4" /> },
  { id: 5, title: "Business Insights", description: "Gain key performance insights.", icon: <LineChart className="w-12 h-12 text-red-600 mb-4" /> },
  { id: 6, title: "Marketing Strategy", description: "Optimize campaigns with data.", icon: <Briefcase className="w-12 h-12 text-indigo-600 mb-4" /> },
];

const StepCard = ({ image, label, className }: { image: string; label: string; className: string }) => (
  <motion.div 
    className={`relative flex flex-col items-center ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.img 
      src={image} 
      alt={label} 
      className="w-48 h-48 rounded-2xl shadow-lg object-cover"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.div 
      className="mt-4 bg-white px-4 py-2 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <p className="text-gray-800 font-medium text-center">{label}</p>
    </motion.div>
  </motion.div>
);

function Dashboard() {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      >
        {/* Process Flow Section */}
        <motion.div 
          className="relative pt-20 pb-32 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-12 mt-12">How It Works</h1>
          
          <div className="relative flex justify-center items-center">
            <div className="absolute w-full max-w-5xl">
              <motion.svg 
                className="w-full h-[500px]" 
                viewBox="0 0 1000 500" 
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 100 250 Q 350 100, 600 250 T 900 250"
                  stroke="#8884d8"
                  strokeWidth="4"
                  fill="none"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M 100 250 Q 350 400, 600 250 T 900 250"
                  stroke="#4caf50"
                  strokeWidth="4"
                  fill="none"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </motion.svg>
            </div>

            <div className="relative z-10 flex justify-between w-full max-w-6xl">
              <StepCard
                image={handshake}
                label="Get the Link From Existing Member"
                className="mt-20"
              />
              <StepCard
                image={enroll}
                label="Enroll into Application"
                className="mb-20"
              />
              <StepCard
                image={group}
                label="Send the Link to Three Users"
                className="mt-20"
              />
              <StepCard
                image={money}
                label="Start Earning and Manage Your Group"
                className="mb-20"
              />
            </div>
          </div>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto pb-20">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
              className="bg-white backdrop-blur-lg bg-opacity-90 p-8 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-2xl border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {card.icon}
              </motion.div>
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-12">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 h-32 w-32 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-10 right-10 h-40 w-40 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-1/2 left-1/3 h-24 w-24 bg-green-400 rounded-full blur-2xl opacity-20 animate-pulse" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Dashboard;