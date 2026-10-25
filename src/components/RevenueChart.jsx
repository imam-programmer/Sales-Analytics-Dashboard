import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { revenueChartData } from '../data/mockData';

const RevenueChart = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/85 dark:border-slate-800 shadow-sm transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Revenue Overview</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500">Comparing monthly revenue and expenses</p>
        </div>
        <select className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-lg border-none focus:outline-none cursor-pointer">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="55%" stopColor="#4f46e5" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;