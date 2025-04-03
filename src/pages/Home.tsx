import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, TrendingUp, Wallet, ArrowRight, Star, ShoppingCart } from "lucide-react";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";
import bannerAnimation from "../assets/bannerAnimation.json";
import bannerAnimation1 from "../assets/supermarket.json";
import herob from "../assets/herob.png";
import CountUp from "react-countup";
function Home() {
  const navigate = useNavigate();
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      Icon: Users,
      title: "Community Growth",
      description: "Build your network by inviting others and earn through referrals.",
      bg: "bg-indigo-100 dark:bg-gray-700",
    },
    {
      Icon: TrendingUp,
      title: "Earning Potential",
      description: "Earn ₹15 for each new member you bring to the community.",
      bg: "bg-purple-100 dark:bg-gray-700",
    },
    {
      Icon: Wallet,
      title: "Easy Withdrawals",
      description: "Withdraw your earnings directly to your bank account or UPI.",
      bg: "bg-blue-100 dark:bg-gray-700",
    },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "10,000+", label: "Active Members" },
    { icon: <ShoppingCart className="w-6 h-6" />, value: "50,000+", label: "Products" },
    { icon: <Star className="w-6 h-6" />, value: "4.8/5", label: "User Rating" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-10 h-16 w-16 sm:h-24 sm:w-24 lg:h-48 lg:w-48 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 h-24 w-24 sm:h-32 sm:w-32 lg:h-56 lg:w-56 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl w-full mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="relative rounded-2xl overflow-hidden mb-16"
        >
          <div 
            className="relative h-[300px] sm:h-[300px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${herob})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-purple-900/40 backdrop-blur-sm" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
              >
                Welcome to{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
                  Saravana Stores
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8"
              >
                Join our thriving community and unlock endless earning possibilities through our referral program.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/register")}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Connect to money & Join Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ y: 50, opacity: 0 }}
          animate={statsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={statsInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-yellow-100 to-purple-100 dark:from-yellow-900 dark:to-purple-900 p-3 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                <CountUp 
                  start={0} 
                  end={parseInt(stat.value.replace(/[^0-9]/g, ""), 10)} 
                  duration={1.5} 
                  separator=","
                />
                {stat.value.includes("+") && "+"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animations Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-16">
          <Lottie animationData={bannerAnimation} className="w-64 sm:w-80 md:w-96" />
          <Lottie animationData={bannerAnimation1} className="w-64 sm:w-80 md:w-96" />
        </div>

        {/* Features Section */}
        <motion.div
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map(({ Icon, title, description, bg }, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={featuresInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 * (i + 1) }}
              className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${bg}`}
            >
              <div className="flex flex-col items-center text-center">
                <Icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;