import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiZap,
  FiEye,
  FiCalendar,
  FiCheckCircle,
  FiShield,
  FiLayers,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import PublicNavbar from "../../components/Navigation/PublicNavbar";
import PublicFooter from "../../components/Navigation/PublicFooter";

const appWorkflowSteps = [
  {
    step: "01",
    title: "Connect Your LinkedIn Profile",
    subtitle: "Official 1-click OAuth integration",
    icon: FiShield,
    color: "from-cyan-500/20 to-cyan-500/5 text-cyan-400 border-cyan-500/30",
    description:
      "Head to your Settings page and connect your LinkedIn profile securely. ForgeFlow uses LinkedIn's official OAuth authorization—your password is never stored or requested.",
    details: [
      "1-click secure authentication with LinkedIn",
      "Easily view your connected profile name and status",
      "Disconnect or reconnect whenever you choose",
    ],
  },
  {
    step: "02",
    title: "Create via AI Post or Custom Post",
    subtitle: "Two flexible ways to craft your content",
    icon: HiSparkles,
    color: "from-violet-500/20 to-violet-500/5 text-violet-400 border-violet-500/30",
    description:
      "Choose your preferred creation mode depending on whether you want instant AI generation or full manual control:",
    details: [
      "AI Post: Choose your topic, audience, tone (Professional, Thought Leader, Casual, etc.), and custom instructions using Gemini AI",
      "Custom Post: Write by hand in our rich text editor with bold, italics, bullet lists, and numbered lists",
      "Upload image media and auto-generate or customize hashtags",
      "Persistent auto-saving prevents draft loss",
    ],
  },
  {
    step: "03",
    title: "Inspect the Live LinkedIn Preview",
    subtitle: "See the exact post before it goes live",
    icon: FiEye,
    color: "from-emerald-500/20 to-emerald-500/5 text-emerald-400 border-emerald-500/30",
    description:
      "A real-time simulator renders your draft exactly as it will appear in LinkedIn's feed on both desktop and mobile devices.",
    details: [
      "Live word and character count tracking",
      "Verify paragraph spacing and bullet formatting",
      "Preview image attachment and hashtag styling",
    ],
  },
  {
    step: "04",
    title: "Publish Now or Schedule for Later",
    subtitle: "Automated Redis-backed queue dispatch",
    icon: FiCalendar,
    color: "from-amber-500/20 to-amber-500/5 text-amber-400 border-amber-500/30",
    description:
      "Ready to publish? Send it straight to LinkedIn with one click, or select your preferred date and time to queue it.",
    details: [
      "Publish instantly directly to your LinkedIn feed",
      "Schedule posts for any future date and time",
      "Automated backend queue publishes your post precisely on time",
    ],
  },
  {
    step: "05",
    title: "Track in Content Library & Workspace",
    subtitle: "Your unified content management hub",
    icon: FiLayers,
    color: "from-rose-500/20 to-rose-500/5 text-rose-400 border-rose-500/30",
    description:
      "Organize and manage your full content lifecycle across the Workspace dashboard and Content Library.",
    details: [
      "Workspace stats: total posts, drafts, scheduled, and published counts",
      "Filter library by All, Drafts, Scheduled, or Published",
      "Edit saved drafts, reschedule queued posts, or delete old content",
    ],
  },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-[#080D18] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <PublicNavbar />

      <main className="relative pt-28 sm:pt-36 overflow-hidden">
        {/* Glow ambient background */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Hero Section */}
        <section className="px-5 pb-16 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
              <FiZap /> The Complete Walkthrough
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              How ForgeFlow works from{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                idea to published post.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
              Here is the exact step-by-step workflow of how you create, preview, schedule, and publish LinkedIn content inside the ForgeFlow workspace.
            </p>
          </div>
        </section>

        {/* Real App Workflow Steps */}
        <section className="border-t border-slate-800/80 bg-[#0B1220]/60 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-5xl space-y-12">
            {appWorkflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7 sm:p-10 transition hover:border-slate-700"
                >
                  <div className="grid gap-8 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-lg">
                          STEP {step.step}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          {step.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {step.title}
                      </h3>

                      <p className="text-sm sm:text-base leading-relaxed text-slate-400">
                        {step.description}
                      </p>

                      <ul className="pt-2 space-y-2.5">
                        {step.details.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                          >
                            <FiCheckCircle className="text-cyan-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-5 flex justify-center">
                      <div className={`flex h-40 w-40 sm:h-48 sm:w-48 items-center justify-center rounded-3xl bg-gradient-to-br ${step.color} border shadow-2xl transition-transform hover:scale-105 duration-300`}>
                        <Icon size={56} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Visual Pipeline Topology */}
        <section id="architecture" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Data Flow
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                How the ForgeFlow Engine operates
              </h2>
            </div>

            <div className="mt-14 rounded-2xl border border-slate-800 bg-[#0E1526] p-6 sm:p-10">
              <div className="grid gap-4 md:grid-cols-5 text-center items-center">
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-2">
                  <span className="text-xs font-bold text-cyan-400">1. CREATION</span>
                  <h4 className="font-bold text-white text-sm">AI or Manual Post</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Gemini AI or Rich Editor with images
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center text-slate-600 font-bold text-xl">
                  &rarr;
                </div>

                <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-5 space-y-2">
                  <span className="text-xs font-bold text-violet-400">2. PREVIEW</span>
                  <h4 className="font-bold text-white text-sm">LinkedIn Feed Simulation</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Desktop & mobile verification
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center text-slate-600 font-bold text-xl">
                  &rarr;
                </div>

                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 space-y-2">
                  <span className="text-xs font-bold text-emerald-400">3. PUBLISHING</span>
                  <h4 className="font-bold text-white text-sm">Direct or Scheduled</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Automated Redis queue to LinkedIn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-slate-900 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to write and schedule your next post?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
              Create your account now and see how much faster managing LinkedIn content can be.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300 transition"
              >
                <span>Get Started</span>
                <FiArrowRight />
              </Link>
              <Link
                to="/why"
                className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400 transition"
              >
                Why ForgeFlow
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default HowItWorksPage;
