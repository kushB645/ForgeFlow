import { useAuth } from "../../context/AuthContext";
import { logoutUser } from "../../services/auth.service";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

import {
  FiGrid,
  FiPlusSquare,
  FiFolder,
  FiCalendar,
  FiSettings,
  FiEdit3,
  FiLogOut,
  FiX,
} from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();

      setUser(null);
      onClose();
      navigate("/login");
    } catch (error) {
      // Keep the error silent for now.
      // The logout failure doesn't need to be shown in the console.
    }
  };

  const handleNavigation = () => {
    // Close sidebar only on mobile.
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
      isActive
        ? "bg-violet-600 text-white shadow-lg shadow-violet-600/20"
        : "text-slate-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-slate-800 bg-[#0F172A] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        {/* Logo */}
        <div className="flex items-center justify-between gap-3 px-3 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={logo}
              alt="ForgeFlow"
              className="h-14 w-14 shrink-0 object-contain"
            />

            <div className="min-w-0">
              <h1 className="text-2xl font-bold leading-none text-white">
                ForgeFlow
              </h1>

              <p className="mt-1 text-sm text-slate-400">Elite Workspace</p>
            </div>
          </div>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 px-3">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/workspace"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiGrid size={22} />
                Workspace
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/new-post"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiPlusSquare size={22} />
                New Post
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/custom-post"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiEdit3 size={22} />
                Custom Post
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/content-library"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiFolder size={22} />
                Content Library
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/schedule"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiCalendar size={22} />
                Schedule
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Settings */}
        <div className="mt-auto border-slate-800 p-4">
          <ul>
            <li>
              <NavLink
                to="/settings"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiSettings size={22} />
                Settings
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Profile */}
        <div className="m-4 rounded-2xl border border-slate-700 bg-slate-800/50 p-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <img
              src={
                user?.avatar ||
                "https://res.cloudinary.com/dbszrqojn/image/upload/v1785848370/download_yelfn0.jpg"
              }
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold text-white">
                {user?.fullName}
              </h3>

              <p className="truncate text-sm text-slate-400">
                @{user?.username}
              </p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="px-4 pb-4">
          <button
            type="button"
            onClick={handleLogout}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-slate-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
