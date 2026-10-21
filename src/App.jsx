import { useDispatch, useSelector } from "react-redux";
import { setDateRange } from "./features/dashboard/dashboardSlice";
import { Bell, DollarSign, ShoppingCart, TrendingUp, Users } from "lucide";
import Sidebar from "./components/Sidebar";

const stats = [
  {
    title: "Total revenue",
    value: "$24,680",
    change: "+12.8%",
    icon: DollarSign,
  },
  {
    title: "Total orders",
    value: "1,248",
    change: "+8.2%",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "856",
    change: "+5.4%",
    icon: Users,
  },
];

function StatCard({ title, value, change, icon: Icon }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>
        <span className="rounded-lg bg-indigo-50 p-2 text-indigo-600">
          <Icon size={18} />
        </span>
      </div>
      <p className="mt-4 text-2xl font-bold text-slate-900">{value}</p>

      <p className="mt-2 flex items-center gap-1 text-sm text-emerald-600">
        <TrendingUp size={15} />
        {change}
        <span className="text-slate-400">vs. previous period</span>
      </p>
    </article>
  );
}

export default function App() {
  const dispatch = useDispatch();
  const { activePage, dateRange } = useSelector((state) => state.dashboard);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* <Sidebar /> */}

      <main className="min-w-0 flex-1 p-6 md:p-8">
        {/* <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Pages / {activePage}</p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              {activePage}
            </h1>
          </div>

          <button
            aria-label="Notifications"
            className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600 hover:bg-slate-100"
          >
            <Bell size={19} />
          </button>
        </header> */}

        {/* <section className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-semibold text-slate-900">Overview</h2>
            <p className="text-sm text-slate-500">
              Here’s what’s happening with your store.
            </p>
          </div> */}

          {/* <select
            value={dateRange}
            onChange={(event) => dispatch(setDateRange(event.target.value))}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-500"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </section> */}

        {/* <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </section> */}

        {/* <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-900">Sales performance</h2>
          <p className="mt-2 text-sm text-slate-500">
            Selected period: {dateRange}. Chart ta porer dhape add korbo.
          </p>
        </section> */}
      </main>
    </div>
  );
}

