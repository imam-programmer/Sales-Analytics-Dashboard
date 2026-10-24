import React from 'react';
import { FaDollarSign } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
// আইকন ম্যাপ করার জন্য হেল্পার
const iconMap = {
  'Total Revenue': FaDollarSign ,
  'Subscriptions': FaUserSecret,
  'Sales': FaCreditCard,
  'Active Now': FiActivity,
};

const StatCard = ({ item }) => {
  const Icon = iconMap[item.title] || FiActivity;

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-slate-500">{item.title}</span>
        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-slate-800">{item.value}</h3>
        
        {/* Growth Indicator */}
        <div
          className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            item.isPositive 
              ? 'bg-emerald-50 text-emerald-600' 
              : 'bg-rose-50 text-rose-600'
          }`}
        >
          {item.isPositive ? (
            <GoArrowUpRight className="w-3.5 h-3.5" />
          ) : (
            <GoArrowDownRight className="w-3.5 h-3.5" />
          )}
          <span>{item.change}</span>
        </div>
      </div>

      <p className="text-xs text-slate-400 mt-2">{item.timeframe}</p>
    </div>
  );
};

export default StatCard;