import { useState, useEffect } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from "recharts";
import { Bell, Settings, Sun, Moon, TrendingUp, Users, DollarSign, CreditCard } from "lucide-react";
import { Card, CardContent } from "../components/Card";


const yearlyStats = [
  { month: "Jan", value: 600 },
  { month: "Feb", value: 750 },
  { month: "Mar", value: 850 },
  { month: "Apr", value: 700 },
  { month: "May", value: 900 },
  { month: "Jun", value: 750 },
  { month: "Jul", value: 800 },
  { month: "Aug", value: 850 },
  { month: "Sep", value: 900 },
  { month: "Oct", value: 1000 },
  { month: "Nov", value: 1100 },
  { month: "Dec", value: 1200 },
];

const statsCards = [
  {
    title: "New Comers",
    value: "34,567",
    change: "+2.00%",
    period: "30 days",
    trend: "up",
    icon: Users,
    delay: "0"
  },
  {
    title: "Total Income",
    value: "₹74,567",
    change: "+5.45%",
    period: "Increased",
    trend: "up",
    icon: DollarSign,
    delay: "100"
  },
  {
    title: "Total Expense",
    value: "₹24,567",
    change: "-2.00%",
    period: "Expense",
    trend: "down",
    icon: CreditCard,
    delay: "200"
  },
  {
    title: "New Users",
    value: "34,567",
    change: "-25.00%",
    period: "Earning",
    trend: "down",
    icon: TrendingUp,
    delay: "300"
  }
];

function Admin() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen p-4 md:p-6 transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <header className="flex flex-col sm:flex-row justify-between items-center mt-20 mb-10 gap-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Admin Dashboard
        </h1>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md transition-all duration-300 hover:scale-105"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </button>
          <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md transition-all duration-300 hover:scale-105">
            <Bell className="text-gray-600 dark:text-gray-200" />
          </button>
          <button className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md transition-all duration-300 hover:scale-105">
            <Settings className="text-gray-600 dark:text-gray-200" />
          </button>
          <div className="flex items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Admin"
              className="w-10 h-10 rounded-full shadow-md border-2 border-white dark:border-gray-700"
            />
            <span className="font-semibold dark:text-white">Admin</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {statsCards.map((card, index) => (
          <Card 
            key={card.title}
            className="bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-102 animate-fade-up"
            style={{ animationDelay: `${card.delay}ms` }}
          >
            <CardContent>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-lg text-gray-600 dark:text-gray-300">{card.title}</h2>
                  <p className="text-2xl font-bold dark:text-white">{card.value}</p>
                </div>
                <card.icon className={`w-8 h-8 ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
              </div>
              <p className={`text-sm ${card.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {card.change} ({card.period})
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-800">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Yearly Stats</h2>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={yearlyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: darkMode ? '#1F2937' : 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8B5CF6" 
                    strokeWidth={3}
                    dot={{ fill: '#8B5CF6' }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4 dark:text-white">Sales/Revenue</h2>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: darkMode ? '#1F2937' : 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#8B5CF6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Admin;