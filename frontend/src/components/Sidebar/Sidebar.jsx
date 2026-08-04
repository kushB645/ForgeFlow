import { useAuth } from "../../context/AuthContext";
import { logoutUser } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FiGrid,
  FiHome,
  FiPlusSquare,
  FiFolder,
  FiCalendar,
  FiSettings,
  FiEdit3,
} from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();

      setUser(null);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
      isActive
        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0F172A] border-r border-slate-800 flex flex-col">
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
          <li>
            <NavLink to="/workspace" className={navLinkClass}>
              <FiGrid size={22} />
              Workspace
            </NavLink>
          </li>

          <li>
            <NavLink to="/new-post" className={navLinkClass}>
              <FiPlusSquare size={22} />
              New Post
            </NavLink>
          </li>

          <li>
            <NavLink to="/custom-post" className={navLinkClass}>
              <FiEdit3 size={22} />
              Custom Post
            </NavLink>
          </li>

          <li>
            <NavLink to="/content-library" className={navLinkClass}>
              <FiFolder size={22} />
              Content Library
            </NavLink>
          </li>

          <li>
            <NavLink to="/schedule" className={navLinkClass}>
              <FiCalendar size={22} />
              Schedule
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* settings */}

      <div className="mt-auto p-4  border-slate-800">
        <ul>
          <li>
            <NavLink to="/settings" className={navLinkClass}>
              <FiSettings size={22} />
              Settings
            </NavLink>
          </li>
        </ul>
      </div>

      {/* profile */}

      <div className="m-4 p-4 border backdrop-blur-xl bg-slate-800/50 border-slate-700 rounded-2xl">
        <div className="flex items-center gap-3">
          <img
            src={user?.avatar || "https://res.cloudinary.com/dbszrqojn/image/upload/v1785848370/download_yelfn0.jpg"}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <h3 className="text-base font-semibold text-white">
              {user?.fullName}
            </h3>

            <p className="text-sm text-slate-400">@{user?.username}</p>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={handleLogout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-slate-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
