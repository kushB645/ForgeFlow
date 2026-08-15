import { FiRefreshCw, FiCopy, FiEye, FiClock, FiSave } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const EditorToolbar = ({
  handleSaveDraft,
  handleSchedule,
  handlePublish,
  publishing,
}) => {
  return (
    <section className="sticky bottom-4 z-50 mx-auto w-full max-w-7xl px-2 sm:bottom-6 sm:px-0">
      <div className="rounded-2xl border border-slate-800 bg-[#101827]/95 p-3 shadow-2xl backdrop-blur-xl sm:p-4 lg:px-6 lg:py-4">
        {/* Top / Left Section */}
        <div className="flex items-center justify-between gap-3 lg:flex-1">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-slate-700 sm:h-11 sm:w-11"
              aria-label="Refresh"
            >
              <FiRefreshCw size={18} />
            </button>

            <button
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-slate-700 sm:h-11 sm:w-11"
              aria-label="Copy"
            >
              <FiCopy size={18} />
            </button>

            <div className="ml-1 min-w-0 sm:ml-3">
              <p className="truncate text-xs font-medium text-slate-300 sm:text-sm">
                Auto Saved
              </p>

              <p className="truncate text-[10px] text-slate-500 sm:text-xs">
                Last saved 2 min ago
              </p>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={handleSaveDraft}
              className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-indigo-500 hover:text-white"
            >
              <FiSave />
              Save Draft
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-indigo-500 hover:text-white">
              <FiEye />
              Preview
            </button>

            <button
              onClick={handleSchedule}
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
            >
              <FiClock />
              Schedule
            </button>

            <button
              onClick={handlePublish}
              disabled={publishing}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 px-6 py-3 font-semibold text-white transition hover:from-indigo-500 hover:to-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <HiSparkles />
              {publishing ? "Publishing..." : "Publish"}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Actions */}
        <div className="mt-3 grid grid-cols-2 gap-2 lg:hidden sm:grid-cols-4 sm:gap-3">
          <button
            onClick={handleSaveDraft}
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 px-3 py-2.5 text-xs font-medium text-slate-300 transition hover:border-indigo-500 hover:text-white sm:px-4 sm:text-sm"
          >
            <FiSave />
            <span>Save Draft</span>
          </button>

          <button className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 px-3 py-2.5 text-xs font-medium text-slate-300 transition hover:border-indigo-500 hover:text-white sm:px-4 sm:text-sm">
            <FiEye />
            <span>Preview</span>
          </button>

          <button
            onClick={handleSchedule}
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-3 py-2.5 text-xs font-semibold text-slate-900 transition hover:bg-cyan-400 sm:px-4 sm:text-sm"
          >
            <FiClock />
            <span>Schedule</span>
          </button>

          <button
            onClick={handlePublish}
            disabled={publishing}
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 px-3 py-2.5 text-xs font-semibold text-white transition hover:from-indigo-500 hover:to-violet-400 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-sm"
          >
            <HiSparkles />
            <span>{publishing ? "Publishing..." : "Publish"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditorToolbar;
