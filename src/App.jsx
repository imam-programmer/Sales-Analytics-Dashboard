import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import RevenueChart from './components/RevenueChart';
import TrafficChart from './components/TrafficChart'; 
import RecentOrders from './components/RecentOrders';
import { statsData } from './data/mockData';

function App() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        {/* Dashboard Main View */}
        <main className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Dashboard Overview</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Welcome back! Here is what's happening today.</p>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {statsData.map((item) => (
              <StatCard key={item.id} item={item} />
            ))}
          </div>

          {/* Charts Section (Revenue Chart & Traffic Chart Side-by-Side on Large Screens) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div className="lg:col-span-1">
              <TrafficChart />
            </div>
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