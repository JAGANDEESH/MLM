import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, LineChart, Users, DollarSign, BarChart, TrendingUp } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cards = [
  {
    id: 1,
    title: "Revenue Growth",
    description: "Track your business revenue and growth trends over time.",
    icon: <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />,
  },
  {
    id: 2,
    title: "Customer Engagement",
    description: "Increase engagement by analyzing customer behavior and trends.",
    icon: <Users className="w-12 h-12 text-blue-600 mb-4" />,
  },
  {
    id: 3,
    title: "Sales Performance",
    description: "Monitor your sales metrics and optimize marketing strategies.",
    icon: <DollarSign className="w-12 h-12 text-green-600 mb-4" />,
  },
  {
    id: 4,
    title: "Market Analysis",
    description: "Stay ahead by understanding industry trends and competitor insights.",
    icon: <BarChart className="w-12 h-12 text-yellow-600 mb-4" />,
  },
  {
    id: 5,
    title: "Business Insights",
    description: "Gain key insights into your company's performance with analytics.",
    icon: <LineChart className="w-12 h-12 text-red-600 mb-4" />,
  },
  {
    id: 6,
    title: "Marketing Strategy",
    description: "Optimize campaigns and maximize conversions with data-driven decisions.",
    icon: <Briefcase className="w-12 h-12 text-indigo-600 mb-4" />,
  },
];

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      {/* Dashboard Header */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Business Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl text-center transition hover:shadow-2xl"
          >
            {card.icon}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Dashboard;
