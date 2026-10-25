import React from 'react';
import { recentOrdersData } from '../data/mockData';
import { FiMoreHorizontal } from "react-icons/fi";
const RecentOrders = () => {
  // স্ট্যাটাস অনুযায়ী ব্যাজ কালার করার ফাংশন
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'Pending':
        return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'Cancelled':
        return 'bg-rose-50 text-rose-600 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/85 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Recent Orders</h3>
          <p className="text-xs text-slate-400">Latest transactions from your store</p>
        </div>
        <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">
          View All
        </button>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <th className="pb-3 px-4">Order ID</th>
              <th className="pb-3 px-4">Customer</th>
              <th className="pb-3 px-4">Product</th>
              <th className="pb-3 px-4">Amount</th>
              <th className="pb-3 px-4">Status</th>
              <th className="pb-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {recentOrdersData.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-4 px-4 font-semibold text-slate-700">{order.id}</td>
                <td className="py-4 px-4 text-slate-600 font-medium">{order.customer}</td>
                <td className="py-4 px-4 text-slate-500">{order.product}</td>
                <td className="py-4 px-4 font-semibold text-slate-800">{order.amount}</td>
                <td className="py-4 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadge(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600">
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