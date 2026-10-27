import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import logo from "../../assets/logo.png";

const PublicNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Features", path: "/#features", isHash: true },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Why ForgeFlow", path: "/why" },
    { label: "Pricing", path: "/pricing" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (link.isHash) {
      if (location.pathname !== "/") {
        navigate(link.path);
      } else {
        const el = document.getElementById("features");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const isActive = (path, isHash) => {
    if (isHash) return false;
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/80 bg-[#080D18]/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
        >
          <img
            src={logo}
            alt="ForgeFlow Logo"
            className="h-10 w-10 sm:h-11 sm:w-11 object-contain drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)] transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-2xl font-bold tracking-tight text-white">
            Forge<span className="text-cyan-400">Flow</span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.path, link.isHash);
            if (link.isHash) {
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-slate-800/60 hover:text-cyan-300"
                >
                  {link.label}
                </button>
              );
            }
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-slate-800/80 text-cyan-400 shadow-sm"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:text-white hover:bg-slate-800/50"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:from-cyan-300 hover:to-cyan-200 active:scale-[0.98]"
          >
            <HiSparkles className="text-slate-900" />
            <span>Get Started Free</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/register"
            className="rounded-lg bg-cyan-400 px-3.5 py-1.5 text-xs font-semibold text-slate-950 sm:hidden"
          >
            Join
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#0B1220]/95 px-6 py-6 backdrop-blur-2xl lg:hidden animate-fade">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              if (link.isHash) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-300 hover:bg-slate-800/80 hover:text-cyan-300"
                  >
                    <span>{link.label}</span>
                    <FiArrowRight size={14} className="text-slate-500" />
                  </button>
                );
              }
              const active = isActive(link.path, link.isHash);
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <FiArrowRight
                    size={14}
                    className={active ? "text-cyan-400" : "text-slate-500"}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-800/80 pt-6">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/60 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800 hover:border-slate-600"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              <HiSparkles />
              <span>Get Started Free</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default PublicNavbar;
