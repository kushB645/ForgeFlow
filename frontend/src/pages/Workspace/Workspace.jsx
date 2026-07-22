import React from "react";
import {
  FiCalendar,
  FiClock,
  FiFileText,
  FiTrendingUp,
  FiArrowRight,
  FiMoreVertical,
  FiTag,
  FiPlus,
} from "react-icons/fi";
import { HiMiniChartBar } from "react-icons/hi2";

import { HiSparkles, HiOutlinePencilSquare } from "react-icons/hi2";
import future_of_generative_ui from "../../assets/future_of_generative_ui.jpg";
import mastering_the_fluid_grid from "../../assets/mastering_the_fluid_grid.jpg";

const Workspace = () => {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section>
        <h1 className="py-4 text-center text-5xl font-bold text-white">
          Turn your ideas into{" "}
          <span className="bg-gradient-to-r from-purple-200 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            content
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-slate-400">
          The high-performance command center for elite creators. Harness AI
          precision or craft every pixel manually.
        </p>
      </section>

      {/* Quick Actions */}

      <section className="mt-16 grid grid-cols-2 gap-8">
        <div className="flex flex-col border border-slate-600 rounded-2xl bg-slate-900 backdrop-blur-2xl p-8">
          <div className="h-16 w-16 mt-4 mb-2 rounded-lg bg-slate-800 flex items-center justify-center">
            <HiSparkles size={32} className=" text-indigo-500" />
          </div>

          <h2 className="my-2 text-xl font-semibold text-white">
            Generate with AI
          </h2>

          <p className="mb-4 mt-4 text-slate-400 text-lg">
            Transform your ideas into professional LinkedIn posts, articles, and
            content using ForgeFlow AI.
          </p>

          <h1 className="flex items-center mt-3 gap-2 font-medium font-bold text-purple-200 hover:text-blue-400 cursor-pointer">
            Launch Engine <FiArrowRight size={20} />
          </h1>
        </div>

        <div className="flex flex-col border border-slate-600 rounded-2xl bg-slate-900 backdrop-blur-2xl p-8">
          <div className="h-16 w-16 mt-4 mb-2 rounded-lg bg-slate-800 flex items-center justify-center">
            <HiOutlinePencilSquare size={32} className=" text-indigo-500" />
          </div>
          <h2 className="my-2 text-xl font-semibold text-white">
            Write Manually
          </h2>
          <p className="mb-4 mt-4 text-slate-400 text-lg">
            A distraction-free editor built for creators who want complete
            control over every word.
          </p>
          <h1 className="flex items-center mt-3 gap-2 font-medium font-bold text-cyan-200 hover:text-blue-400 cursor-pointer">
            Open Editor <FiArrowRight size={20} />
          </h1>
        </div>
      </section>

      {/* Drafts + Schedule */}

      <section className="mt-16 grid grid-cols-3 gap-8">
        {/* ================= Recent Drafts ================= */}

        <div className="col-span-2">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Recent Drafts</h2>

              <p className="text-slate-400">
                Continuity of your current workflows.
              </p>
            </div>

            <button className="text-indigo-300 hover:text-indigo-200 transition">
              View All
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {/* Draft 1 */}

            <div className="group flex items-center rounded-2xl border border-slate-700/70 bg-[#101A2C] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-[#131F34] hover:shadow-lg hover:shadow-indigo-500/10">
              <img
                src={future_of_generative_ui}
                alt="Future of Generative UI"
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div className="ml-6 flex-1">
                <h3 className="text-xl font-semibold text-white">
                  The Future of Generative UI
                </h3>

                <div className="mt-2 flex items-center text-sm text-slate-400">
                  <span>Edited 2h ago</span>
                  <span className="mx-3 h-1 w-1 rounded-full bg-slate-500"></span>
                  <span>1,240 words</span>
                </div>
              </div>

              <span className="rounded-lg bg-slate-700/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-300">
                Technical
              </span>

              <button className="ml-5 rounded-lg p-2 text-slate-500 transition hover:bg-slate-700 hover:text-white">
                <FiMoreVertical size={18} />
              </button>
            </div>

            {/* Draft 2 */}

            <div className="group flex items-center rounded-2xl border border-slate-700/70 bg-[#101A2C] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-[#131F34] hover:shadow-lg hover:shadow-indigo-500/10">
              <img
                src={mastering_the_fluid_grid}
                alt="Mastering the Fluid Grid"
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div className="ml-6 flex-1">
                <h3 className="text-xl font-semibold text-white">
                  Mastering the Fluid Grid
                </h3>

                <div className="mt-2 flex items-center text-sm text-slate-400">
                  <span>Edited 5h ago</span>
                  <span className="mx-3 h-1 w-1 rounded-full bg-slate-500"></span>
                  <span>850 words</span>
                </div>
              </div>

              <span className="rounded-lg bg-slate-700/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-300">
                Design
              </span>

              <button className="ml-5 rounded-lg p-2 text-slate-500 transition hover:bg-slate-700 hover:text-white">
                <FiMoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= Schedule ================= */}

        <div>
          {/* Header */}

          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Schedule
              </h2>

              <p className="mt-1 text-sm text-slate-400">Queue status</p>
            </div>

            <FiCalendar size={20} className="text-slate-500" />
          </div>

          <div className="space-y-4">
            {/* Card 1 */}

            <div className="group rounded-2xl border border-slate-700/60 bg-[#1E293B] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                  Today · 14:00
                </span>

                <span className="text-violet-300">⚡</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white leading-snug">
                State of ForgeFlow v2
              </h3>

              <div className="mt-3 flex items-center text-sm text-slate-400">
                <span>LinkedIn</span>
                <span className="mx-3 h-1 w-1 rounded-full bg-slate-500"></span>
                <span>Ready</span>
              </div>
            </div>

            {/* Card 2 */}

            <div className="group rounded-2xl border border-cyan-400/40 bg-[#101A2C] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  Tomorrow · 09:00
                </span>

                <FiClock size={18} className="text-slate-500" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white leading-snug">
                UI Engineering Patterns
              </h3>

              <div className="mt-3 flex items-center text-sm text-slate-400">
                <span>Twitter/X</span>
                <span className="mx-3 h-1 w-1 rounded-full bg-slate-500"></span>
                <span>Final Review</span>
              </div>
            </div>

            {/* Card 3 */}

            <div className="group rounded-2xl border border-slate-700/60 bg-[#101A2C] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-500">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Oct 14 · 18:30
              </span>

              <h3 className="mt-4 text-lg font-semibold text-white leading-snug">
                Minimalist Workspace Tour
              </h3>

              <div className="mt-3 flex items-center text-sm text-slate-400">
                <span>Newsletter</span>
                <span className="mx-3 h-1 w-1 rounded-full bg-slate-500"></span>
                <span>Draft</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cards will come here */}
      </section>

      {/* Analytics */}
      <section className="mt-14">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#101827] px-8 py-6 transition-all duration-300 hover:border-slate-600 hover:bg-[#121C2D]">
          {/* Left */}

          <div className="flex items-center gap-6">
            {/* Avatars */}

            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/100?img=15"
                alt=""
                className="h-11 w-11 rounded-full border-2 border-[#101827]"
              />

              <img
                src="https://i.pravatar.cc/100?img=32"
                alt=""
                className="h-11 w-11 rounded-full border-2 border-[#101827]"
              />

              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#101827] bg-slate-700 text-sm font-medium text-white">
                +5
              </div>
            </div>

            {/* Text */}

            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Weekly Content Velocity
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                You've produced 12% more than last week.
              </p>
            </div>
          </div>

          {/* Right */}

          <div className="flex items-center gap-5">
            {/* Mini Chart */}

            <div className="flex items-end gap-1.5 rounded-xl bg-slate-800 px-4 py-3">
              <div className="h-2 w-2 rounded-sm bg-violet-300"></div>
              <div className="h-5 w-2 rounded-sm bg-violet-300"></div>
              <div className="h-8 w-2 rounded-sm bg-violet-300"></div>
              <div className="h-4 w-2 rounded-sm bg-violet-300"></div>
              <div className="h-7 w-2 rounded-sm bg-violet-300"></div>
            </div>

            {/* Percentage */}

            <span className="text-xl font-semibold text-emerald-400">
              +12.4%
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workspace;
