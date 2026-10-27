import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiCheck,
  FiX,
  FiArrowRight,
  FiZap,
  FiSliders,
} from "react-icons/fi";
import PublicNavbar from "../../components/Navigation/PublicNavbar";
import PublicFooter from "../../components/Navigation/PublicFooter";

const comparisonData = [
  {
    feature: "Gemini AI Post Generation with custom audience, tone & instructions",
    forgeflow: true,
    chatgpt: "Generic without LinkedIn focus",
    traditional: false,
    manual: false,
  },
  {
    feature: "True-to-feed desktop & mobile LinkedIn preview",
    forgeflow: true,
    chatgpt: false,
    traditional: false,
    manual: false,
  },
  {
    feature: "Distraction-free Custom Post editor with bold, italic, and lists",
    forgeflow: true,
    chatgpt: false,
    traditional: false,
    manual: "Requires external formatter",
  },
  {
    feature: "Automated background scheduling directly to LinkedIn",
    forgeflow: true,
    chatgpt: false,
    traditional: true,
    manual: false,
  },
  {
    feature: "Centralized Content Library for drafts, scheduled & published posts",
    forgeflow: true,
    chatgpt: false,
    traditional: "Partial",
    manual: false,
  },
  {
    feature: "Image & media attachment upload via Cloudinary",
    forgeflow: true,
    chatgpt: false,
    traditional: true,
    manual: true,
  },
  {
    feature: "Official 1-click LinkedIn OAuth account integration",
    forgeflow: true,
    chatgpt: false,
    traditional: true,
    manual: "Manual copy & paste",
  },
];

const WhyForgeFlowPage = () => {
  const [postsPerWeek, setPostsPerWeek] = useState(4);

  // Time saved estimation based on manual formatting + scheduling vs ForgeFlow
  const hoursSavedPerMonth = (postsPerWeek * 1.5 * 4).toFixed(0);

  return (
    <div className="min-h-screen bg-[#080D18] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <PublicNavbar />

      <main className="relative pt-28 sm:pt-36 overflow-hidden">
        {/* Glow ambient background */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[130px]" />

        {/* Hero Section */}
        <section className="px-5 pb-16 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
              <FiZap /> Why ForgeFlow?
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              A unified LinkedIn workspace that replaces{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                tab juggling.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
              Posting consistently on LinkedIn shouldn't require jumping between Notion, ChatGPT, third-party formatters, and manual posting alarms.
              ForgeFlow consolidates everything into one simple tool.
            </p>
          </div>
        </section>

        {/* The 3 Real Problems Solved */}
        <section className="border-t border-slate-800/80 bg-[#0B1220]/60 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Problems Solved
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                How ForgeFlow fixes your LinkedIn workflow.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold text-lg">
                  01
                </div>
                <h3 className="text-xl font-bold text-white">
                  No More Multi-Tab Chaos
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Instead of drafting in notes, rephrasing in ChatGPT, formatting bold text on external sites, and pasting manually, you do all of it inside ForgeFlow with persistent auto-saving.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 font-bold text-lg">
                  02
                </div>
                <h3 className="text-xl font-bold text-white">
                  Zero Mobile Formatting Surprises
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Most people read LinkedIn on phones where long blocks of text look overwhelming. ForgeFlow's built-in live preview lets you check mobile and desktop views before your post ever publishes.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold text-lg">
                  03
                </div>
                <h3 className="text-xl font-bold text-white">
                  Automated Scheduling Queue
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Write whenever you have inspiration. Pick the date and time you want it to appear, and ForgeFlow's backend automated worker delivers it straight to your personal LinkedIn profile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison Matrix */}
        <section id="comparison" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Direct Comparison
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                How ForgeFlow compares with other methods.
              </h2>
            </div>

            <div className="mt-14 overflow-x-auto rounded-2xl border border-slate-800 bg-[#0E1526]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80">
                    <th className="py-4 px-6 font-semibold text-slate-300">
                      Capability
                    </th>
                    <th className="py-4 px-6 font-bold text-cyan-400 bg-cyan-950/30 border-x border-cyan-500/20">
                      ForgeFlow
                    </th>
                    <th className="py-4 px-6 font-semibold text-slate-400">
                      ChatGPT Direct
                    </th>
                    <th className="py-4 px-6 font-semibold text-slate-400">
                      Traditional Schedulers
                    </th>
                    <th className="py-4 px-6 font-semibold text-slate-400">
                      Manual Posting
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {comparisonData.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-900/40 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-slate-200">
                        {row.feature}
                      </td>

                      {/* ForgeFlow */}
                      <td className="py-4 px-6 font-bold text-cyan-300 bg-cyan-950/20 border-x border-cyan-500/20">
                        <span className="flex items-center gap-1.5">
                          <FiCheck className="text-cyan-400" size={18} />
                          <span>Built-in</span>
                        </span>
                      </td>

                      {/* ChatGPT */}
                      <td className="py-4 px-6 text-slate-400">
                        {typeof row.chatgpt === "boolean" ? (
                          row.chatgpt ? (
                            <FiCheck className="text-emerald-400" />
                          ) : (
                            <FiX className="text-rose-400" />
                          )
                        ) : (
                          row.chatgpt
                        )}
                      </td>

                      {/* Traditional */}
                      <td className="py-4 px-6 text-slate-400">
                        {typeof row.traditional === "boolean" ? (
                          row.traditional ? (
                            <FiCheck className="text-emerald-400" />
                          ) : (
                            <FiX className="text-rose-400" />
                          )
                        ) : (
                          row.traditional
                        )}
                      </td>

                      {/* Manual */}
                      <td className="py-4 px-6 text-slate-400">
                        {typeof row.manual === "boolean" ? (
                          row.manual ? (
                            <FiCheck className="text-emerald-400" />
                          ) : (
                            <FiX className="text-rose-400" />
                          )
                        ) : (
                          row.manual
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Interactive Time Leverage Calculator */}
        <section className="border-t border-slate-800/80 bg-[#0B1220]/70 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Time Leverage
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                How much time could you save?
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                See estimated hours saved each month compared to manual multi-tab drafting and posting.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-slate-800 bg-[#0E1526] p-6 sm:p-10 shadow-xl">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold text-slate-300">
                    <span className="flex items-center gap-2">
                      <FiSliders className="text-cyan-400" /> Posts Per Week:
                    </span>
                    <span className="text-2xl font-black text-cyan-400">
                      {postsPerWeek}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="14"
                    value={postsPerWeek}
                    onChange={(e) => setPostsPerWeek(Number(e.target.value))}
                    className="mt-4 w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                    <span>1 post/wk</span>
                    <span>7 posts/wk</span>
                    <span>14 posts/wk</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Estimated Time Saved Per Month
                  </p>
                  <p className="mt-2 text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text">
                    ~{hoursSavedPerMonth} Hours
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Calculated from eliminating tab-switching, manual text formatters, and setting reminder alarms.
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
              Ready to streamline your LinkedIn posting?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
              Sign up today and start creating and scheduling posts for free.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300 transition"
              >
                <span>Get Started Free</span>
                <FiArrowRight />
              </Link>
              <Link
                to="/how-it-works"
                className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400 transition"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default WhyForgeFlowPage;
