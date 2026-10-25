import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import RevenueChart from './components/RevenueChart';
import RecentOrders from './components/RecentOrders';
import { statsData } from './data/mockData';

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        {/* Dashboard Main View */}
        <main className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
            <p className="text-slate-500 text-sm">Welcome back! Here is what's happening today.</p>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {statsData.map((item) => (
              <StatCard key={item.id} item={item} />
            ))}
          </div>

          {/* Revenue Chart Section */}
          <div className="grid grid-cols-1 gap-6">
            <RevenueChart />
          </div>

          {/* Recent Orders Table Section */}
          <div className="grid grid-cols-1 gap-6">
            <RecentOrders />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;