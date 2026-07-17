import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FiGrid,
  FiHome,
  FiPlusSquare,
  FiFolder,
  FiCalendar,
  FiSettings,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[#0F172A] border-r border-slate-800 flex flex-col">
      {/* logo */}

      <div className="flex items-center gap-3 px-3 py-4">
        <img
          src={logo}
          alt="ForgeFlow"
          className="h-14 w-14 object-contain shrink-0"
        />

        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-white leading-none">
            ForgeFlow
          </h1>

          <p className="mt-1 text-sm text-slate-400">Elite Workspace</p>
        </div>
      </div>

      {/* Navigation */}

      <nav className="mt-8 px-3">
        <ul className="space-y-2 ">
          <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <FiGrid size={22} />
            Workspace
          </li>

          <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <FiHome size={22} />
            Dashboard
          </li>

          <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <FiPlusSquare size={22} />
            New Post
          </li>

          <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <FiFolder size={22} />
            Content Library
          </li>

          <li className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <FiCalendar size={22} />
            Schedule
          </li>
        </ul>
      </nav>

      {/* settings */}

      <div className="mt-auto p-4  border-slate-800">
        <li className="flex items-center w-full gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
          <FiSettings size={22} />
          Settings
        </li>
      </div>

      {/* profile */}

      <div className="m-4 p-4 border backdrop-blur-xl bg-slate-800/50 border-slate-700 rounded-2xl">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="User Avatar"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="">
            <h3 className="text-base font-semibold text-white">Alex Chen</h3>
            <p className="text-sm text-slate-400">Free</p>
          </div>
        </div>
      </div>

      
    </aside>
  );
};

export default Sidebar;
