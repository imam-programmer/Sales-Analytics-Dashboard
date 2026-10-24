import React, { useState } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

import { LuLayoutDashboard } from "react-icons/lu";
import { IoBarChart } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LuLayoutDashboard },
    { name: 'Analytics', icon: IoBarChart },
    { name: 'Customers', icon: FaUsers },
    { name: 'Orders', icon: MdOutlineShoppingBag },
    { name: 'Settings', icon: CiSettings },
  ];

  return (
    <aside className={`${isOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white min-h-screen transition-all duration-300 p-4 relative`}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-3 top-9 bg-slate-800 text-slate-200 p-1 rounded-full border border-slate-700 hover:bg-slate-700"
      >
        <FaCircleChevronLeft className={`w-4 h-4 transition-transform duration-300 ${!isOpen && 'rotate-180'}`} />
      </button>

      {/* Brand Logo */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg">
          A
        </div>
        {isOpen && <h1 className="font-bold text-xl tracking-wide">Analytix</h1>}
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-3 py-3 rounded-xl font-medium transition-colors ${
                isActive 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className="w-5 h-5 min-w-[20px]" />
              {isOpen && <span>{item.name}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;