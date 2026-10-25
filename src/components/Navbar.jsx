import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ডার্ক মোড টগল ফাংশন
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  // পেজ লোডের সময় লোকাল স্টোরেজ থেকে স্টেট আনা
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between transition-colors">
      {/* Search Bar */}
      <div className="relative w-72">
        <IoSearchOutline className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search stats, analytics..." 
          className="w-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle Button */}
        <button 
          onClick={toggleDarkMode}
          className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
        >
          {isDarkMode ? <GoSun className="w-5 h-5 text-amber-400" /> : <FaRegMoon className="w-5 h-5" />}
        </button>

        {/* Notification Button */}
        <button className="relative p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <CiBellOn className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
          <div className="w-9 h-9 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 font-semibold">
            JD
          </div>
          <div className="hidden sm:block text-left">
            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-none">John Doe</h4>
            <span className="text-xs text-slate-500 dark:text-slate-400">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;