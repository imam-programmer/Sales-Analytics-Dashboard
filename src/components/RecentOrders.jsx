import React from 'react';
import { recentOrdersData } from '../data/mockData';
import { FiMoreHorizontal } from "react-icons/fi";

const RecentOrders = () => {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900';
      case 'Pending':
        return 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900';
      case 'Cancelled':
        return 'bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900';
      default:
        return 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/85 dark:border-slate-800 shadow-sm transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">Recent Orders</h3>
          <p className="text-xs text-slate-400 dark:text-slate-500">Latest transactions from your store</p>
        </div>
        <button className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 cursor-pointer">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <th className="pb-3 px-4">Order ID</th>
              <th className="pb-3 px-4">Customer</th>
              <th className="pb-3 px-4">Product</th>
              <th className="pb-3 px-4">Amount</th>
              <th className="pb-3 px-4">Status</th>
              <th className="pb-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
            {recentOrdersData.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/50 transition-colors">
                <td className="py-4 px-4 font-semibold text-slate-700 dark:text-slate-300">{order.id}</td>
                <td className="py-4 px-4 text-slate-600 dark:text-slate-400 font-medium">{order.customer}</td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">{order.product}</td>
                <td className="py-4 px-4 font-semibold text-slate-800 dark:text-slate-200">{order.amount}</td>
                <td className="py-4 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadge(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
                    <FiMoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;