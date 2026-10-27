import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiEdit3,
  FiSend,
  FiZap,
  FiLayers,
  FiShield,
  FiThumbsUp,
  FiMessageSquare,
  FiRepeat,
  FiChevronDown,
  FiChevronUp,
  FiEye,
  FiCode,
  FiCpu,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import PublicNavbar from "../../components/Navigation/PublicNavbar";
import PublicFooter from "../../components/Navigation/PublicFooter";

const interactiveDemos = {
  ai: {
    title: "AI Post Generator (Gemini AI)",
    badge: "Personalized Intelligence",
    description: "Input a topic, target audience, and custom instructions. Gemini AI generates structured LinkedIn posts with ready hashtags.",
    prompt: "Key lessons from building and scaling software as a solo developer with $0 marketing budget",
    result: {
      hook: "Most developers think building products is the hardest part. It isn't.\n\nThe real challenge is distribution and sharing your journey consistently: 🧵",
      bullets: [
        "1. Build in public: document what you learn every week.",
        "2. Solve one painful bug that existing tools ignore.",
        "3. Engage in discussions before asking anyone to check out your work.",
      ],
      takeaway: "Consistency compounds. Share the small wins and the painful bugs.",
      hashtags: "#buildinpublic #webdev #indiehacker #softwareengineering",
    },
  },
  editor: {
    title: "Custom Post & Rich Text Studio",
    badge: "Full Control",
    description: "Manual writing with rich formatting (bold, italic, bullet lists, numbered lists), word count, character stats, and image uploads.",
    stats: {
      words: 86,
      characters: 512,
      readTime: "30 sec",
      cutoffPoint: "Clean mobile line breaks",
    },
    sampleText: "Consistency is not about posting 5 times a day.\n\nIt's about having an unshakeable system:\n\n• Capture raw sparks in your Content Library\n• Refine structure with Gemini AI or write manually\n• Preview exactly how it looks on mobile\n• Schedule for your preferred posting time\n\nWhen you master the system, growth is inevitable.",
  },
  preview: {
    title: "True LinkedIn Feed Simulator",
    badge: "Zero Surprises",
    description: "Inspect how your headline, hook, formatting, and images will look in the mobile and desktop LinkedIn feed before publishing.",
    author: "Creator Profile",
    role: "Full-Stack Developer • Building ForgeFlow in Public",
    time: "Just now • Edited",
    likes: "148",
    comments: "32",
    reposts: "18",
  },
  schedule: {
    title: "Automated Redis Queue & Scheduler",
    badge: "Automated Dispatch",
    description: "Pick any date and time. ForgeFlow's automated background worker delivers your post straight to LinkedIn.",
    slots: [
      { day: "Tomorrow", time: "08:30 AM", status: "Scheduled", target: "Personal Profile" },
      { day: "Thursday", time: "01:15 PM", status: "Scheduled", target: "Personal Profile" },
      { day: "Saturday", time: "10:00 AM", status: "Scheduled", target: "Personal Profile" },
    ],
  },
};

const faqs = [
  {
    q: "How does ForgeFlow publish to my LinkedIn profile?",
    a: "ForgeFlow connects directly with your personal LinkedIn account using official OAuth authentication. When your scheduled time arrives, our automated background queue publishes the post directly to your LinkedIn feed.",
  },
  {
    q: "Can I write my own posts without using AI?",
    a: "Yes, absolutely! The Custom Post section features a full rich text editor with bold, italic, bullet lists, numbered lists, character and word counters, and image upload support via Cloudinary.",
  },
  {
    q: "What AI model powers ForgeFlow?",
    a: "ForgeFlow uses Google Gemini AI. You can customize the tone (Professional, Thought Leader, Casual, etc.), target audience, and specific instructions, and configure preferences in your Settings.",
  },
  {
    q: "Is ForgeFlow safe for my LinkedIn account?",
    a: "Yes. ForgeFlow uses official LinkedIn OAuth authentication. Your password is never asked for or stored on our servers.",
  },
  {
    q: "Is ForgeFlow really free?",
    a: "Yes! ForgeFlow is currently 100% free for creators and developers. You can create an account, connect LinkedIn, and write or schedule posts right away.",
  },
];

const useCases = [
  {
    icon: FiCode,
    title: "Developers & Software Engineers",
    desc: "Share architecture decisions, coding lessons, and project milestones without spending hours agonizing over social media formatting.",
  },
  {
    icon: FiCpu,
    title: "Solo Founders & Builders",
    desc: "Build in public, share real metrics, and announce releases from one simple command center while staying focused on writing code.",
  },
  {
    icon: FiEdit3,
    title: "Writers & Technical Creators",
    desc: "Draft thoughtful posts by hand in a clean editor, refine angles with Gemini AI, and schedule weeks of content in one sitting.",
  },
];

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("ai");
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#080D18] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <PublicNavbar />

      <main className="relative pt-24 sm:pt-28 overflow-hidden">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/15 via-violet-500/10 to-transparent blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 top-96 -z-0 h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-[700px] -z-0 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

        {/* Hero Section */}
        <section className="relative px-5 pt-12 pb-20 sm:px-8 sm:pt-16">
          <div className="mx-auto max-w-5xl text-center">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>ForgeFlow • The Unified LinkedIn Content Workspace</span>
              <HiSparkles className="text-cyan-400 ml-1" />
            </div>

            {/* Main Hero Headline */}
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08]">
              Turn your thoughts into{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                content that gets noticed.
              </span>
            </h1>

            {/* Subhead */}
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
              Create, format, preview, and schedule LinkedIn posts from one clean workspace.
              Use Gemini AI for inspiration or write manually with full rich-text control.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/register"
                className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-8 py-4 text-base font-bold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] hover:from-cyan-300 hover:to-cyan-200 active:scale-95 sm:w-auto"
              >
                <span>Get Started Free</span>
                <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/how-it-works"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-cyan-400/60 hover:bg-slate-800/80 active:scale-95 sm:w-auto"
              >
                <FiZap className="text-cyan-400" />
                <span>See How It Works</span>
              </Link>
            </div>

            {/* Authentic Badge */}
            <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span>Built by an independent developer • Free access • No credit card required</span>
            </div>
          </div>
        </section>

        {/* Interactive Workspace Sandbox Preview */}
        <section className="px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Interactive Tab Switcher */}
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("ai")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "ai"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                <HiSparkles />
                <span>AI Post Studio</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("editor")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "editor"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                <FiEdit3 />
                <span>Custom Rich Editor</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "preview"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                <FiEye />
                <span>Live Feed Simulator</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("schedule")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all ${
                  activeTab === "schedule"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
                }`}
              >
                <FiCalendar />
                <span>Automated Queue</span>
              </button>
            </div>

            {/* The Window Container */}
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-700/80 bg-[#0E1526] shadow-2xl shadow-cyan-500/10">
              {/* Chrome Browser header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0A101D] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 rounded-md bg-slate-900/90 border border-slate-800 px-3 py-1 text-[11px] text-slate-400 font-mono">
                    workspace.forgeflow.app/{activeTab}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                  {interactiveDemos[activeTab].badge}
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 sm:p-8 bg-gradient-to-b from-[#0E1526] to-[#0A0F1D]">
                {/* Tab 1: AI Hook Studio */}
                {activeTab === "ai" && (
                  <div className="grid gap-6 lg:grid-cols-12 animate-fade">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          Prompt & Inputs
                        </label>
                        <p className="mt-2 text-sm text-cyan-300 font-medium bg-slate-950/70 p-3 rounded-lg border border-slate-800/90">
                          "{interactiveDemos.ai.prompt}"
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
                            Tone: Professional
                          </span>
                          <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
                            Audience: Developers
                          </span>
                          <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
                            Length: Medium
                          </span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-xs text-slate-300 space-y-2">
                        <div className="font-semibold text-cyan-300">
                          Gemini AI Post Engine
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                          Generates clear paragraphs and bullet lists with auto-suggested hashtags tailored to your audience.
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-7 rounded-xl border border-slate-800 bg-[#101827] p-5 sm:p-6 shadow-inner">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <HiSparkles className="text-cyan-400" /> Generated LinkedIn Draft
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                          Ready to Edit or Schedule
                        </span>
                      </div>

                      <div className="mt-4 space-y-3 font-sans text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                        <div className="font-semibold text-white bg-slate-900/60 p-3 rounded-lg border-l-2 border-cyan-400">
                          {interactiveDemos.ai.result.hook}
                        </div>
                        <div className="space-y-1.5 pl-2 text-slate-300">
                          {interactiveDemos.ai.result.bullets.map((b, i) => (
                            <p key={i}>{b}</p>
                          ))}
                        </div>
                        <p className="italic text-cyan-200/90 pt-2 border-t border-slate-800/80">
                          {interactiveDemos.ai.result.takeaway}
                        </p>
                        <p className="text-xs text-cyan-400 font-mono">
                          {interactiveDemos.ai.result.hashtags}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                        <button
                          type="button"
                          onClick={() => setActiveTab("editor")}
                          className="rounded-lg border border-slate-700 bg-slate-800/80 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white"
                        >
                          Open in Custom Editor
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab("preview")}
                          className="rounded-lg bg-cyan-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 hover:bg-cyan-300"
                        >
                          Check LinkedIn Preview
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Editor */}
                {activeTab === "editor" && (
                  <div className="grid gap-6 lg:grid-cols-12 animate-fade">
                    <div className="lg:col-span-8 rounded-xl border border-slate-800 bg-[#101827] p-5">
                      {/* Editor Toolbar */}
                      <div className="flex flex-wrap items-center gap-1.5 pb-4 border-b border-slate-800 text-xs text-slate-300">
                        <span className="rounded px-2.5 py-1 font-bold bg-slate-800">B</span>
                        <span className="rounded px-2.5 py-1 italic bg-slate-800">I</span>
                        <span className="rounded px-2.5 py-1 bg-slate-800">• Bullet List</span>
                        <span className="rounded px-2.5 py-1 bg-slate-800">1. Numbered List</span>
                        <span className="h-4 w-px bg-slate-800 mx-1" />
                        <span className="text-[11px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                          Image upload supported
                        </span>
                      </div>

                      <div className="mt-4 min-h-[160px] text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                        {interactiveDemos.editor.sampleText}
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-4">
                      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                          Real-Time Writing Stats
                        </h4>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>Word Count</span>
                          <span className="font-semibold text-white">
                            {interactiveDemos.editor.stats.words} words
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>Characters</span>
                          <span className="font-semibold text-white">
                            {interactiveDemos.editor.stats.characters} / 3,000
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>Estimated Read Time</span>
                          <span className="font-semibold text-white">
                            {interactiveDemos.editor.stats.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Preview */}
                {activeTab === "preview" && (
                  <div className="mx-auto max-w-lg rounded-xl border border-slate-700 bg-white text-slate-900 shadow-2xl animate-fade overflow-hidden">
                    {/* LinkedIn Header */}
                    <div className="flex items-center justify-between p-4 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                          FF
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-slate-900">
                              {interactiveDemos.preview.author}
                            </span>
                            <span className="text-xs text-slate-500">• 1st</span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-tight">
                            {interactiveDemos.preview.role}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {interactiveDemos.preview.time}
                          </p>
                        </div>
                      </div>
                      <span className="text-blue-600 font-semibold text-xs">
                        + Follow
                      </span>
                    </div>

                    {/* Post content preview */}
                    <div className="p-4 text-xs sm:text-sm text-slate-800 space-y-2.5 leading-relaxed font-sans">
                      <p className="font-semibold text-slate-900">
                        Most developers think building products is the hardest part. It isn't.
                      </p>
                      <p>
                        The real challenge is distribution and sharing your journey consistently:
                      </p>
                      <p className="text-slate-500 text-xs">
                        ...see more
                      </p>
                    </div>

                    {/* Reactions footer */}
                    <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <span className="flex -space-x-1">
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">👍</span>
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">❤️</span>
                        </span>
                        <span>{interactiveDemos.preview.likes}</span>
                      </div>
                      <div className="flex gap-2">
                        <span>{interactiveDemos.preview.comments} comments</span>
                        <span>•</span>
                        <span>{interactiveDemos.preview.reposts} reposts</span>
                      </div>
                    </div>

                    {/* LinkedIn Action Bar */}
                    <div className="grid grid-cols-4 border-t border-slate-100 text-center text-xs font-semibold text-slate-600 py-2.5">
                      <span className="flex items-center justify-center gap-1 hover:text-blue-600 cursor-pointer">
                        <FiThumbsUp /> Like
                      </span>
                      <span className="flex items-center justify-center gap-1 hover:text-blue-600 cursor-pointer">
                        <FiMessageSquare /> Comment
                      </span>
                      <span className="flex items-center justify-center gap-1 hover:text-blue-600 cursor-pointer">
                        <FiRepeat /> Repost
                      </span>
                      <span className="flex items-center justify-center gap-1 hover:text-blue-600 cursor-pointer">
                        <FiSend /> Send
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab 4: Schedule */}
                {activeTab === "schedule" && (
                  <div className="space-y-4 animate-fade">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          Automated Scheduling Queue
                        </h4>
                        <p className="text-xs text-slate-400">
                          Automated Redis queue worker handles delivery straight to your personal LinkedIn profile.
                        </p>
                      </div>
                      <span className="rounded-lg bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                        1-Click OAuth Connected
                      </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {interactiveDemos.schedule.slots.map((slot, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-500/40"
                        >
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>{slot.day}</span>
                            <span className="rounded bg-emerald-500/10 text-emerald-400 px-2 py-0.5 text-[10px] font-semibold border border-emerald-500/20">
                              {slot.status}
                            </span>
                          </div>
                          <div className="mt-2 text-xl font-bold text-white">
                            {slot.time}
                          </div>
                          <div className="mt-3 flex items-center gap-1 text-xs text-cyan-400 font-medium">
                            <FiSend size={12} />
                            <span>{slot.target}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Real Capabilities Grid */}
        <section id="features" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Core Workspace Features
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                Everything you need to write and schedule LinkedIn posts.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-400">
                ForgeFlow eliminates the hassle of switching between multiple tabs and tools.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="group rounded-2xl border border-slate-800 bg-[#0E1526]/80 p-7 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <HiSparkles size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Gemini AI Post Generator
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Specify your topic, audience, instructions, and tone. Gemini AI formats structured posts with suggested hashtags.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group rounded-2xl border border-slate-800 bg-[#0E1526]/80 p-7 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <FiEdit3 size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Custom Rich Text Editor
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Write manually with bold, italic, bullet points, numbered lists, image uploads, and live word/character counters.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group rounded-2xl border border-slate-800 bg-[#0E1526]/80 p-7 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <FiEye size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Live LinkedIn Feed Preview
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  View your post exactly as it will appear in the desktop and mobile feed before publishing to catch line-break issues.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group rounded-2xl border border-slate-800 bg-[#0E1526]/80 p-7 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <FiCalendar size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Automated Scheduling Queue
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Select your date and time. Our automated backend queue worker publishes your post directly to LinkedIn on time.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="group rounded-2xl border border-slate-800 bg-[#0E1526]/80 p-7 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <FiLayers size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Content Library & Drafts
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Search and filter all your content by Drafts, Scheduled, or Published. Never lose a draft or idea again.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="group rounded-2xl border border-slate-800 bg-[#0E1526]/80 p-7 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <FiShield size={22} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  Official LinkedIn OAuth
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Connect your personal LinkedIn account safely in 1 click. Your passwords are never handled by ForgeFlow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who is ForgeFlow for? */}
        <section className="border-t border-slate-800/80 bg-[#0B1220]/70 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Audience Focus
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                Who is ForgeFlow designed for?
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {useCases.map((uc, i) => {
                const Icon = uc.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7 space-y-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{uc.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3-Step Process: How It Works */}
        <section className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Simple & Seamless
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                From idea to published post in 3 steps.
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="relative rounded-2xl border border-slate-800 bg-[#0E1526] p-7">
                <div className="text-3xl font-black text-cyan-500/30">01</div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  Write or Generate
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Generate ideas with Gemini AI or write manually in the custom rich text editor with bold, italic, and bullet formatting.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-800 bg-[#0E1526] p-7">
                <div className="text-3xl font-black text-cyan-500/30">02</div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  Verify in Live Preview
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Inspect the desktop and mobile feed simulation to check your post formatting and word counts before anything goes live.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-800 bg-[#0E1526] p-7">
                <div className="text-3xl font-black text-cyan-500/30">03</div>
                <h3 className="mt-4 text-xl font-bold text-white">
                  Publish or Schedule
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Publish immediately or select a future date and time. Our background queue takes care of delivering your post.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-850 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                <span>Read the detailed step-by-step walkthrough</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t border-slate-800/80 bg-[#0B1220]/60 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Frequently Asked Questions
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                Everything you need to know.
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-slate-800 bg-[#0E1526] transition-all overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between p-5 text-left font-semibold text-white hover:text-cyan-400 transition"
                    >
                      <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                      {isOpen ? (
                        <FiChevronUp className="text-cyan-400 shrink-0" size={18} />
                      ) : (
                        <FiChevronDown className="text-slate-400 shrink-0" size={18} />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 animate-fade">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center text-sm text-slate-400">
              Have another question?{" "}
              <Link to="/contact" className="text-cyan-400 font-semibold hover:underline">
                Contact the developer &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 via-[#0E1526] to-violet-950/40 p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(34,211,238,0.15)] relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                <FiZap /> Get Started Today
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-black text-white leading-tight">
                Ready to manage your LinkedIn posts with ease?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Sign up in seconds, connect your LinkedIn account, and start writing or scheduling posts immediately.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/register"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-300 active:scale-95"
                >
                  <HiSparkles />
                  <span>Create Free Account</span>
                </Link>

                <Link
                  to="/how-it-works"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-7 py-4 text-sm font-semibold text-white hover:border-cyan-400 transition"
                >
                  <span>See How It Works</span>
                </Link>
              </div>

              <p className="mt-6 text-xs text-slate-400">
                ✓ 100% Free • No credit card required • Instant setup
              </p>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default LandingPage;
