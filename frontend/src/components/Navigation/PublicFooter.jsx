import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSend,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiCheckCircle,
  FiShield,
  FiZap,
} from "react-icons/fi";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";

const PublicFooter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubscribed(true);
    toast.success("Welcome aboard! You'll receive our weekly LinkedIn playbook.");
    setEmail("");
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#060A12] text-slate-400">
      {/* Background glow accent */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-0 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-12 sm:px-8">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 pb-14 border-b border-slate-800/70">
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="ForgeFlow Logo"
                className="h-10 w-10 sm:h-11 sm:w-11 object-contain drop-shadow-[0_2px_10px_rgba(34,211,238,0.25)]"
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                Forge<span className="text-cyan-400">Flow</span>
              </span>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              The LinkedIn command center built for creators, builders, and developers.
              Create with Gemini AI or write manually, preview your feed in real-time,
              and schedule posts directly to your LinkedIn profile.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-300">
                All Systems Operational
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <FiShield className="text-cyan-400" /> Independent & Free for Creators
              </span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center rounded-2xl border border-slate-800 bg-[#0B1220]/80 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <FiZap />
              <span>The Algorithm Insider</span>
            </div>
            <h3 className="mt-2 text-lg sm:text-xl font-bold text-white">
              Get our weekly breakdown of what's ranking on LinkedIn
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Zero spam. Only high-converting hook structures, algorithmic updates, and creator growth experiments.
            </p>

            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 active:scale-95 whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <FiCheckCircle /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe <FiSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 lg:gap-12">
          {/* Column 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Product
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/#features" className="transition hover:text-cyan-400">
                  AI Content Studio
                </Link>
              </li>
              <li>
                <Link to="/#features" className="transition hover:text-cyan-400">
                  Visual LinkedIn Preview
                </Link>
              </li>
              <li>
                <Link to="/#features" className="transition hover:text-cyan-400">
                  Smart Calendar & Queue
                </Link>
              </li>
              <li>
                <Link to="/#features" className="transition hover:text-cyan-400">
                  Carousel & Asset Stager
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="transition hover:text-cyan-400 flex items-center gap-1">
                  Pricing Plans
                  <span className="rounded bg-cyan-500/20 px-1 py-0.2 text-[9px] font-semibold text-cyan-300">
                    Free Tier
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform & Why */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/why" className="transition hover:text-cyan-400">
                  Why ForgeFlow
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="transition hover:text-cyan-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/why#comparison" className="transition hover:text-cyan-400">
                  Comparison vs Others
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#architecture" className="transition hover:text-cyan-400">
                  Pipeline Architecture
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#tips" className="transition hover:text-cyan-400">
                  Viral LinkedIn Blueprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="transition hover:text-cyan-400">
                  About ForgeFlow
                </Link>
              </li>
              <li>
                <Link to="/about#values" className="transition hover:text-cyan-400">
                  Builder Principles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-cyan-400">
                  Contact Developer
                </Link>
              </li>
              <li>
                <Link to="/about#story" className="transition hover:text-cyan-400">
                  Origin Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Community & Social
            </h4>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Built for developers, founders, and creators sharing their knowledge on LinkedIn.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/getforgeflow"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="ForgeFlow on LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="Twitter"
              >
                <FiTwitter size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="GitHub"
              >
                <FiGithub size={16} />
              </a>
            </div>

            <div className="mt-6">
              <Link
                to="/register"
                className="inline-block text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
              >
                Launch your first post free &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 sm:flex-row text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ForgeFlow Inc. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-400 cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-slate-400 cursor-pointer">
              Cookie Settings
            </span>
            <Link to="/contact" className="hover:text-cyan-400">
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;

