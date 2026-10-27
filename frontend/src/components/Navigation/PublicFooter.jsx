import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  FiSend,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiCheckCircle,
  FiShield,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";
import toast from "react-hot-toast";
import logo from "../../assets/logo.png";

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.07 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────
   Magnetic social icon
───────────────────────────────────────────── */
const MagneticIcon = ({ href, label, children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.9 }}
      className="
        relative flex h-10 w-10 items-center justify-center
        rounded-xl border border-white/[0.08]
        bg-slate-800/60 backdrop-blur-sm text-slate-400
        transition-colors duration-200
        hover:border-cyan-400/50 hover:text-cyan-400
        hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]
        cursor-pointer
      "
    >
      {children}
    </motion.a>
  );
};

/* ─────────────────────────────────────────────
   Animated nav link with sliding dash
───────────────────────────────────────────── */
const FooterLink = ({ to, label, delay }) => (
  <motion.li variants={fadeIn} custom={delay}>
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
    >
      <motion.span
        className="block h-px bg-slate-600 rounded-full"
        initial={{ width: 10 }}
        whileHover={{ width: 18 }}
        transition={{ duration: 0.2 }}
        style={{ backgroundColor: undefined }}
      />
      <motion.span
        className="block h-px bg-cyan-400 rounded-full absolute"
        initial={{ width: 0 }}
        whileHover={{ width: 18 }}
        transition={{ duration: 0.2 }}
      />
      {label}
    </Link>
  </motion.li>
);

/* ═══════════════════════════════════════════════
   Main Footer Component
═══════════════════════════════════════════════ */
const PublicFooter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const rootRef = useRef(null);
  const isInView = useInView(rootRef, { once: true, margin: "-80px" });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubscribed(true);
    toast.success("You're in! Weekly LinkedIn insights incoming.");
    setEmail("");
  };

  const navLinks = [
    { label: "Features", to: "/#features" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Why ForgeFlow", to: "/why" },
    { label: "Pricing", to: "/pricing" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
  ];

  return (
    <div ref={rootRef} className="relative px-4 pb-8 sm:px-8">

      {/* ── Ambient glow blobs (animated pulse) ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute -bottom-20 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-10 right-1/4 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/6 blur-[80px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      {/* ── Glass card ── */}
      <motion.footer
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative z-10 overflow-hidden rounded-3xl
          border border-white/[0.07]
          bg-slate-900/40 backdrop-blur-2xl
          shadow-[0_8px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)]
          text-slate-400
        "
      >
        {/* Top shimmer line with sweep animation */}
        <motion.div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.6), rgba(139,92,246,0.4), transparent)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />

        {/* Bottom shimmer */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />

        {/* Subtle mesh grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 pb-10 sm:px-10">

          {/* ══ TOP: Brand + Newsletter ══ */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-white/[0.06]">

            {/* Brand */}
            <motion.div
              className="lg:col-span-5 space-y-5"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              custom={0}
            >
              <Link to="/" className="inline-flex items-center gap-3 group">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-md"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <img
                    src={logo}
                    alt="ForgeFlow Logo"
                    className="relative h-11 w-11 object-contain drop-shadow-[0_2px_14px_rgba(34,211,238,0.4)]"
                  />
                </motion.div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Forge<span className="text-cyan-400">Flow</span>
                </span>
              </Link>

              <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                The LinkedIn content workspace built for creators, builders, and
                developers. Draft with Gemini AI, preview your feed in
                real-time, and schedule posts directly.
              </p>

              {/* Status pill */}
              <motion.div
                className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs backdrop-blur-sm"
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-medium text-emerald-400">All Systems Operational</span>
                <span className="text-slate-700">·</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <FiShield className="text-cyan-400" size={11} />
                  Free Forever
                </span>
              </motion.div>
            </motion.div>

            {/* Newsletter card */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center"
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <div
                className="
                  relative overflow-hidden rounded-2xl
                  border border-white/[0.08]
                  bg-gradient-to-br from-slate-800/60 to-slate-900/60
                  backdrop-blur-xl p-6 sm:p-8
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
                "
              >
                {/* Card inner rotating glow */}
                <motion.div
                  className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Sweep shimmer on card */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />

                <div className="relative">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <FiZap size={13} />
                    </motion.span>
                    <span>Stay Updated</span>
                  </div>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-white">
                    Get LinkedIn growth strategies in your inbox
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400">
                    Hooks, formatting tips, and creator insights — straight from
                    building ForgeFlow.
                  </p>

                  <form onSubmit={handleSubscribe} className="mt-5 flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="
                        flex-1 rounded-xl
                        border border-white/10 bg-slate-900/70
                        px-4 py-3 text-sm text-white placeholder-slate-500
                        backdrop-blur-sm
                        focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40
                        transition duration-200
                      "
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.04, boxShadow: "0 0 32px rgba(34,211,238,0.5)" }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300
                        px-6 py-3 text-sm font-bold text-slate-950
                        shadow-[0_0_20px_rgba(34,211,238,0.28)]
                        whitespace-nowrap cursor-pointer
                      "
                    >
                      {subscribed ? (
                        <motion.span
                          className="flex items-center gap-2"
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <FiCheckCircle /> Subscribed!
                        </motion.span>
                      ) : (
                        <><FiSend size={14} /> Subscribe</>
                      )}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ══ MIDDLE: Links Grid ══ */}
          <motion.div
            className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 border-b border-white/[0.06]"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {/* Navigation */}
            <motion.div className="col-span-2 sm:col-span-2" variants={fadeUp} custom={0}>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Navigation
              </h4>
              <motion.ul
                className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              >
                {navLinks.map(({ label, to }, i) => (
                  <motion.li key={label} variants={fadeIn} custom={i}>
                    <Link
                      to={to}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                    >
                      <motion.span
                        className="inline-block h-px rounded-full bg-slate-700 group-hover:bg-cyan-400"
                        initial={{ width: 10 }}
                        whileHover={{ width: 18 }}
                        transition={{ duration: 0.2 }}
                      />
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={fadeUp} custom={1}>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Legal
              </h4>
              <motion.ul
                className="mt-4 space-y-2.5"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              >
                {legalLinks.map(({ label, to }, i) => (
                  <motion.li key={label} variants={fadeIn} custom={i}>
                    <Link
                      to={to}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                    >
                      <motion.span
                        className="inline-block h-px rounded-full bg-slate-700 group-hover:bg-cyan-400"
                        initial={{ width: 10 }}
                        whileHover={{ width: 18 }}
                        transition={{ duration: 0.2 }}
                      />
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={fadeUp} custom={2}>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Connect
              </h4>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Follow the journey of building in public.
              </p>

              <motion.div
                className="mt-4 flex items-center gap-2.5"
                variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
              >
                {[
                  {
                    href: "https://www.linkedin.com/company/getforgeflow",
                    label: "ForgeFlow on LinkedIn",
                    icon: <FiLinkedin size={15} />,
                  },
                  {
                    href: "https://twitter.com",
                    label: "Twitter",
                    icon: <FiTwitter size={15} />,
                  },
                  {
                    href: "https://github.com",
                    label: "GitHub",
                    icon: <FiGithub size={15} />,
                  },
                ].map(({ href, label, icon }) => (
                  <motion.div key={label} variants={scaleIn}>
                    <MagneticIcon href={href} label={label}>
                      {icon}
                    </MagneticIcon>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-5"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <Link
                  to="/register"
                  className="
                    group inline-flex items-center gap-1.5
                    text-xs font-semibold text-cyan-400 hover:text-cyan-300
                    transition-colors underline underline-offset-4 decoration-cyan-400/30
                  "
                >
                  Launch your first post free
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <FiArrowRight size={11} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ══ BOTTOM BAR ══ */}
          <motion.div
            className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row text-xs text-slate-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <p className="flex items-center gap-2">
              <span className="text-slate-600">©</span>
              {new Date().getFullYear()} ForgeFlow. All rights reserved.
              <span className="text-slate-700">·</span>
            </p>

            <div className="flex flex-wrap items-center gap-5">
              {[
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Terms of Service", to: "/terms" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.07, duration: 0.35 }}
                >
                  <Link to={to} className="hover:text-cyan-400 transition-colors duration-200">
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.footer>
    </div>
  );
};

export default PublicFooter;
