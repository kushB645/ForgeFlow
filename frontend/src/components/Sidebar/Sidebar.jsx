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
      // Keep logout failure silent
    }
  };

  const handleNavigation = () => {
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
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-64 flex-col overflow-hidden border-r border-slate-800 bg-[#0F172A] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex shrink-0 items-center justify-between gap-3 px-3 py-4">
          <div className="flex min-w-0 items-center gap-3">
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

          {/* Mobile Close */}
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white lg:hidden"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-6 scrollbar-hide">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/workspace"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiGrid size={22} />
                <span>Workspace</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/new-post"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiPlusSquare size={22} />
                <span>New Post</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/custom-post"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiEdit3 size={22} />
                <span>Custom Post</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/content-library"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiFolder size={22} />
                <span>Content Library</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/schedule"
                className={navLinkClass}
                onClick={handleNavigation}
              >
                <FiCalendar size={22} />
                <span>Schedule</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="shrink-0 border-t border-slate-800 p-4">
          {/* Settings */}
          <NavLink
            to="/settings"
            className={navLinkClass}
            onClick={handleNavigation}
          >
            <FiSettings size={22} />
            <span>Settings</span>
          </NavLink>

          {/* Profile */}
          <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-800/50 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <img
                src={
                  user?.avatar ||
                  "https://res.cloudinary.com/dbszrqojn/image/upload/v1785848370/download_yelfn0.jpg"
                }
                alt="Profile"
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />

              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold text-white">
                  {user?.fullName || "User"}
                </h3>

                <p className="truncate text-sm text-slate-400">
                  @{user?.username || "username"}
                </p>
              </div>
            </div>
          </div>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-slate-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-400"
          >
            <FiLogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
