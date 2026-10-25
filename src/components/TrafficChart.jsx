import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { trafficSourceData } from '../data/mockData';

const TrafficChart = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/85 dark:border-slate-800 shadow-sm transition-colors flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Traffic Sources</h3>
        <p className="text-xs text-slate-400 dark:text-slate-500">Visitors by source channels</p>
      </div>

      {/* Chart Container */}
      <div className="w-full h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficSourceData}
              cx="50%"
              cy="50%"
              innerRadius={60} // এটি দেওয়ার ফলে পাই চার্টটি সুন্দর Doughnut চার্টে রূপ নেবে
              outerRadius={85}
              paddingAngle={5}
              dataKey="value"
            >
              {trafficSourceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle"
              formatter={(value) => <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficChart;