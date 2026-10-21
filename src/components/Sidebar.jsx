import { useDispatch, useSelector } from "react-redux";

import { setActivePage } from "../features/dashboard/dashboardSlice";
import { LayoutDashboard, Settings, ShoppingBag, Users } from "lucide";

const navigation = [
  { name: "Overview", icon: LayoutDashboard },
  { name: "Orders", icon: ShoppingBag },
  { name: "Customers", icon: Users },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.dashboard.activePage);

  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 bg-white p-5">
      <div className="mb-10 text-xl font-bold text-slate-900">
        Sales<span className="text-indigo-600">Board</span>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Menu
      </p>

      <nav className="space-y-1">
        {navigation.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => dispatch(setActivePage(name))}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              activePage === name
                ? "bg-indigo-50 text-indigo-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Icon size={18} />
            {name}
          </button>
        ))}
      </nav>

      <div className="mt-10 rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-800">Need help?</p>
        <p className="mt-1 text-xs text-slate-500">
          Check the dashboard guide.
        </p>
        <button className="mt-3 text-sm font-semibold text-indigo-600">
          View guide
        </button>
      </div>
    </aside>
  );
}
