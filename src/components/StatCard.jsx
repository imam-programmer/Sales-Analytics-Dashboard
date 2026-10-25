import React from 'react';
import { GoArrowDownRight } from "react-icons/go";
 import { GoArrowUpRight } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
const iconMap = {
  'Total Revenue': FaDollarSign,
  'Subscriptions': FaUsers,
  'Sales': FaCreditCard,
  'Active Now': FiActivity,
};

const StatCard = ({ item }) => {
  const Icon = iconMap[item.title] || FiActivity;

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.title}</span>
        <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{item.value}</h3>
        
        <div
          className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${
            item.isPositive 
              ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400' 
              : 'bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400'
          }`}
        >
          {item.isPositive ? <GoArrowUpRight className="w-3.5 h-3.5" /> : <GoArrowDownRight className="w-3.5 h-3.5" />}
          <span>{item.change}</span>
        </div>
      </div>

      <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">{item.timeframe}</p>
    </div>
  );
};

export default StatCard;