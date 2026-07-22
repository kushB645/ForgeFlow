import {
  FiRefreshCw,
  FiCopy,
  FiEye,
  FiClock,
  FiSave,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const EditorToolbar = () => {
  return (
    <section className="sticky bottom-6 z-50 mx-auto w-full max-w-7xl">

      <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#101827]/95 px-6 py-4 shadow-2xl backdrop-blur-xl">

        {/* Left */}

        <div className="flex items-center gap-3">

          <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-slate-700">
            <FiRefreshCw size={18} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-slate-700">
            <FiCopy size={18} />
          </button>

          <div className="ml-3">

            <p className="text-sm font-medium text-slate-300">
              Auto Saved
            </p>

            <p className="text-xs text-slate-500">
              Last saved 2 min ago
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-indigo-500 hover:text-white">
            <FiSave />
            Save Draft
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-indigo-500 hover:text-white">
            <FiEye />
            Preview
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400">
            <FiClock />
            Schedule
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 px-6 py-3 font-semibold text-white transition hover:from-indigo-500 hover:to-violet-400">
            <HiSparkles />
            Publish
          </button>

        </div>

      </div>

    </section>
  );
};

export default EditorToolbar;