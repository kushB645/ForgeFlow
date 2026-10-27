import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiTarget,
  FiHeart,
  FiZap,
  FiShield,
  FiCheckCircle,
  FiCpu,
  FiEdit3,
  FiCalendar,
  FiEye,
  FiLayers,
  FiLinkedin,
} from "react-icons/fi";
import PublicNavbar from "../../components/Navigation/PublicNavbar";
import PublicFooter from "../../components/Navigation/PublicFooter";

const builtFeatures = [
  {
    icon: FiCpu,
    title: "AI Post Generator (Gemini AI)",
    description:
      "Generate structured LinkedIn posts customized with your preferred tone (Professional, Thought Leader, Casual, etc.), target audience, and specific custom instructions. Automatically suggests relevant hashtags.",
  },
  {
    icon: FiEdit3,
    title: "Custom Post Editor & Media",
    description:
      "A distraction-free rich text editor with manual writing control, bold and italic formatting, bulleted and numbered lists, real-time word/character counts, and image attachment support via Cloudinary.",
  },
  {
    icon: FiEye,
    title: "Real-Time LinkedIn Preview",
    description:
      "A pixel-accurate simulation of the LinkedIn feed for both desktop and mobile, ensuring your formatting, hashtags, and media display exactly as expected before posting.",
  },
  {
    icon: FiCalendar,
    title: "Automated Scheduling Queue",
    description:
      "Pick your desired date and time. ForgeFlow's backend scheduling queue automatically publishes your post directly to your connected LinkedIn profile on schedule.",
  },
  {
    icon: FiLayers,
    title: "Unified Content Library",
    description:
      "Keep all your content organized in one command center. Easily search, filter, edit drafts, view scheduled items, and inspect published post history.",
  },
  {
    icon: FiShield,
    title: "1-Click Secure LinkedIn OAuth",
    description:
      "Seamless and safe account connection using LinkedIn's official OAuth authentication. Your credentials are never stored, and you remain in complete control.",
  },
];

const values = [
  {
    icon: FiHeart,
    title: "Authenticity First",
    description:
      "AI should assist your creativity and save you time, not turn your profile into generic robotic spam. You always maintain 100% editorial control over every word.",
  },
  {
    icon: FiZap,
    title: "Zero Bloat, Pure Focus",
    description:
      "No unnecessary complex menus or corporate clutter. Every screen in ForgeFlow is designed to help you write, format, preview, and schedule quickly.",
  },
  {
    icon: FiTarget,
    title: "What You See Is What You Post",
    description:
      "Say goodbye to formatting surprises. The built-in LinkedIn simulator shows you exactly how the post will appear to your readers on mobile and desktop.",
  },
  {
    icon: FiShield,
    title: "Direct Accountability",
    description:
      "As an independent project, there are no support tickets lost in tiers. Every bug report, suggestion, and feedback goes directly to the developer who builds ForgeFlow.",
  },
];

const AboutPage = () => {
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
              <FiTarget /> Independent Project
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              Built by an independent creator,{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                for creators & developers.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
              ForgeFlow is an all-in-one LinkedIn workspace created to eliminate the friction
              of writing, formatting, previewing, and scheduling your content.
            </p>
          </div>
        </section>

        {/* The True Story */}
        <section id="story" className="border-t border-slate-800/80 bg-[#0B1220]/60 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  The Story Behind ForgeFlow
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Why I built this tool.
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-400 leading-relaxed">
                  <p>
                    I am building ForgeFlow independently because I was frustrated by how fragmented posting to LinkedIn was in practice.
                  </p>
                  <p>
                    Every time I wanted to publish:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                    <li>I drafted ideas in Notion or notes.</li>
                    <li>I used ChatGPT for suggestions, only to get generic robotic fluff that needed heavy editing.</li>
                    <li>I had to open third-party text formatters just to get clean bold or bullet styling.</li>
                    <li>I had no accurate way to preview how the post would look on the mobile feed before it went live.</li>
                    <li>I had to manually set alarms or remember to post during peak hours.</li>
                  </ul>
                  <p className="text-slate-200 font-medium pt-2">
                    ForgeFlow brings all of this together in one single app: write with Gemini AI or by hand, format with real-time preview, and schedule automatic publishing directly to your LinkedIn profile.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-[#0E1526] p-6 sm:p-8 space-y-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FiCheckCircle className="text-cyan-400" />
                  What You Get in ForgeFlow
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5">
                    <span className="font-semibold text-white block">AI Post Studio (Gemini)</span>
                    <span className="text-slate-400 text-xs">Generate structured posts with custom tone, audience, instructions, and hashtags.</span>
                  </div>
                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5">
                    <span className="font-semibold text-white block">Custom Rich Text Editor</span>
                    <span className="text-slate-400 text-xs">Write by hand with bold, italics, lists, media upload, and live word counts.</span>
                  </div>
                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5">
                    <span className="font-semibold text-white block">Live LinkedIn Feed Simulator</span>
                    <span className="text-slate-400 text-xs">Preview posts accurately before publishing to avoid broken formatting.</span>
                  </div>
                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5">
                    <span className="font-semibold text-white block">Automated Scheduler & Library</span>
                    <span className="text-slate-400 text-xs">Set time and date for direct publishing to LinkedIn. Organize drafts and published posts.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Features As Per The Website */}
        <section className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Real Capabilities
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                Everything built into the ForgeFlow workspace.
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                These are the actual working features available right now inside your ForgeFlow dashboard.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {builtFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7 transition hover:border-cyan-500/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">
                      {feat.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solo Builder Principles */}
        <section id="values" className="border-t border-slate-800/80 bg-[#0B1220]/60 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Builder Principles
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                Built with honesty, focus, and transparency.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-white">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solo Creator Message Card */}
        <section className="px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-slate-900 p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-xs text-cyan-300 font-semibold mb-4">
              Direct & Independent
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Try ForgeFlow for your LinkedIn content today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
              Sign up, connect your LinkedIn account, and start writing or scheduling posts in seconds.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300 transition"
              >
                <span>Get Started</span>
                <FiArrowRight />
              </Link>
              <a
                href="https://www.linkedin.com/company/getforgeflow"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                <FiLinkedin size={16} className="text-cyan-400" />
                <span>Follow ForgeFlow</span>
              </a>
              <Link
                to="/contact"
                className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400 transition"
              >
                Send Feedback
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default AboutPage;
