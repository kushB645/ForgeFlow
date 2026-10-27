import { Link } from "react-router-dom";
import {
  FiCheck,
  FiArrowRight,
  FiZap,
  FiShield,
  FiHelpCircle,
  FiCpu,
  FiEdit3,
  FiCalendar,
  FiEye,
  FiLayers,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import PublicNavbar from "../../components/Navigation/PublicNavbar";
import PublicFooter from "../../components/Navigation/PublicFooter";

const includedFeatures = [
  {
    icon: FiCpu,
    name: "AI Post Generator (Gemini AI)",
    desc: "Generate LinkedIn posts with customizable tone, audience target, custom instructions, and auto-generated hashtags.",
  },
  {
    icon: FiEdit3,
    name: "Custom Rich Text Editor",
    desc: "Distraction-free manual writing with bold, italic, bullet lists, numbered lists, and image uploads via Cloudinary.",
  },
  {
    icon: FiEye,
    name: "Live LinkedIn Feed Simulator",
    desc: "Accurate desktop and mobile feed preview with word counts and character limits before you publish.",
  },
  {
    icon: FiCalendar,
    name: "Automated Scheduling Queue",
    desc: "Schedule posts for any date and time with automated background publishing directly to LinkedIn.",
  },
  {
    icon: FiLayers,
    name: "Full Content Library",
    desc: "Organize drafts, view scheduled items, and inspect your published post history in one central place.",
  },
  {
    icon: FiShield,
    name: "Secure LinkedIn OAuth Connection",
    desc: "Official LinkedIn authentication. Your password is never stored or requested.",
  },
];

const faqs = [
  {
    q: "Is ForgeFlow really free to use?",
    a: "Yes! ForgeFlow is currently 100% free for creators and developers. You can create an account, connect your LinkedIn profile, generate AI drafts, and schedule posts without paying anything.",
  },
  {
    q: "Do I need to enter a credit card?",
    a: "No credit card is required. You can register with just your name, email, and password.",
  },
  {
    q: "Is there a limit on how many posts I can draft?",
    a: "No! You can draft, edit, and store your posts in the Content Library without restriction.",
  },
  {
    q: "How does ForgeFlow publish to my LinkedIn profile?",
    a: "ForgeFlow uses official LinkedIn OAuth integration. When you click Publish or when your scheduled date and time arrives, our automated queue worker publishes the post directly to your personal LinkedIn feed.",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-[#080D18] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <PublicNavbar />

      <main className="relative pt-28 sm:pt-36 overflow-hidden">
        {/* Glow ambient background */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Hero Section */}
        <section className="px-5 pb-12 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
              <FiZap /> 100% Free Creator Access
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              Everything you need.{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                Completely free to use.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
              ForgeFlow is built independently to make LinkedIn publishing clean and simple.
              No hidden paywalls, no trial expirations, and no credit card required.
            </p>
          </div>
        </section>

        {/* Pricing Plan Card */}
        <section className="px-5 py-8 sm:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative rounded-3xl border border-cyan-500/40 bg-[#0E162B] p-8 sm:p-12 shadow-2xl shadow-cyan-500/10 ring-1 ring-cyan-500/30">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-4 py-1 text-xs font-bold text-slate-950 mb-6">
                <HiSparkles /> FULL ACCESS PLAN
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-black text-white">Creator Account</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    All features unlocked for individual creators and developers.
                  </p>
                </div>
                <div className="flex items-baseline gap-1 mt-2 sm:mt-0">
                  <span className="text-5xl font-black text-cyan-400">$0</span>
                  <span className="text-sm font-semibold text-slate-400">/ forever</span>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800/80 pt-8 space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  What's Included Right Now:
                </p>

                <ul className="grid gap-3.5 sm:grid-cols-2 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-center gap-2.5">
                    <FiCheck className="text-cyan-400 shrink-0" />
                    <span>Gemini AI Post Generator</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FiCheck className="text-cyan-400 shrink-0" />
                    <span>Custom Rich Text Editor</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FiCheck className="text-cyan-400 shrink-0" />
                    <span>Image / Media Attachments</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FiCheck className="text-cyan-400 shrink-0" />
                    <span>Desktop & Mobile Feed Preview</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FiCheck className="text-cyan-400 shrink-0" />
                    <span>Automated Scheduled Queue</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FiCheck className="text-cyan-400 shrink-0" />
                    <span>Content Library & Drafts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FiCheck className="text-cyan-400 shrink-0" />
                    <span>1-Click LinkedIn OAuth</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <FiCheck className="text-cyan-400 shrink-0" />
                    <span>Workspace Stats Dashboard</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <Link
                  to="/register"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 text-sm font-bold text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition active:scale-95"
                >
                  <HiSparkles />
                  <span>Create Free Account</span>
                  <FiArrowRight />
                </Link>
                <p className="mt-3 text-center text-xs text-slate-500">
                  Instant access • No credit card needed • Set up in 30 seconds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Feature Grid */}
        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Full Feature Breakdown
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
                Everything available in your dashboard
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {includedFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.name}
                    className="rounded-2xl border border-slate-800 bg-[#0E1526] p-6 space-y-2.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {feat.name}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-slate-800/80 bg-[#0B1220]/60 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Questions & Answers
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-[#0E1526] p-6 space-y-2"
                >
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <FiHelpCircle className="text-cyan-400 shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-slate-400">
              Have another question?{" "}
              <Link to="/contact" className="text-cyan-400 font-semibold hover:underline">
                Contact the developer &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default PricingPage;
