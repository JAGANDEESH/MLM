import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";
import { Bell, Settings, Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";
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

const Admin = () => {
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
    <div className={`min-h-screen p-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">eCommerce Dashboard</h1>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300 hover:scale-105"
          >
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </button>
          <Bell className="cursor-pointer hover:text-blue-500 transition duration-300" />
          <Settings className="cursor-pointer hover:text-blue-500 transition duration-300" />
          <div className="flex items-center gap-2">
            <img
              src="/user-avatar.png"
              alt="User"
              className="w-10 h-10 rounded-full shadow-md border-2 border-gray-400"
            />
            <span className="font-semibold">Admin</span>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent>
            <h2 className="text-lg">New Comers</h2>
            <p className="text-2xl font-bold">34,567</p>
            <p className="text-green-400">+2.00% (30 days)</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent>
            <h2 className="text-lg">Total Income</h2>
            <p className="text-2xl font-bold">$74,567</p>
            <p className="text-green-400">+5.45% Increased</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent>
            <h2 className="text-lg">Total Expense</h2>
            <p className="text-2xl font-bold">$24,567</p>
            <p className="text-red-400">-2.00% Expense</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent>
            <h2 className="text-lg">New Users</h2>
            <p className="text-2xl font-bold">34,567</p>
            <p className="text-red-400">-25.00% Earning</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent>
            <h2 className="text-lg font-semibold">Yearly Stats</h2>
            <LineChart width={400} height={250} data={yearlyStats} className="w-full">
              <XAxis dataKey="month" stroke={darkMode ? "#ffffff" : "#000000"} />
              <YAxis stroke={darkMode ? "#ffffff" : "#000000"} />
              <Tooltip wrapperStyle={{ backgroundColor: darkMode ? "#222" : "#fff", borderRadius: "8px", padding: "5px" }} />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <CardContent>
            <h2 className="text-lg font-semibold">Sales/Revenue</h2>
            <BarChart width={400} height={250} data={yearlyStats} className="w-full">
              <XAxis dataKey="month" stroke={darkMode ? "#ffffff" : "#000000"} />
              <YAxis stroke={darkMode ? "#ffffff" : "#000000"} />
              <Tooltip wrapperStyle={{ backgroundColor: darkMode ? "#222" : "#fff", borderRadius: "8px", padding: "5px" }} />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
