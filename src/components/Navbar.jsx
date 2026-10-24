import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
      {/* Search Bar */}
      <div className="relative w-72">
        <IoSearchOutline className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search stats, analytics..." 
          className="w-full pl-9 pr-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <CiBellOn className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-semibold">
            JD
          </div>
          <div className="hidden sm:block text-left">
            <h4 className="text-sm font-semibold text-slate-800 leading-none">John Doe</h4>
            <span className="text-xs text-slate-500">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;