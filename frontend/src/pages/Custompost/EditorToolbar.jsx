import { FiSave, FiEye, FiCalendar, FiSend, FiTrash2 } from "react-icons/fi";

const EditorToolbar = ({
  handleClear,
  handleSaveDraft,
  handleSchedule,
  handlePublish,
  saving,
  scheduling,
  publishing,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827] px-3 py-3 shadow-lg sm:px-4 lg:px-6 lg:py-4">
      {/* Left + Right */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center justify-between gap-3 lg:justify-start">
          <div className="flex items-center gap-3">
            <button
              onClick={handleClear}
              disabled={saving || scheduling || publishing}
              className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <FiTrash2 />
                Clear
              </span>
            </button>

            <span className="hidden text-sm text-emerald-400 sm:block">
              ● Ready to Save
            </span>

            <span className="text-xs text-emerald-400 sm:hidden">● Ready</span>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:flex lg:items-center">
          <button
            onClick={handleSaveDraft}
            disabled={saving}
            className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <FiSave />
              {saving ? "Saving..." : "Save Draft"}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              document.getElementById("linkedin-preview")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-400 sm:px-4 sm:text-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <FiEye />
              Preview
            </span>
          </button>

          <button
            onClick={handleSchedule}
            disabled={scheduling || publishing || saving}
            className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <FiCalendar />
              {scheduling ? "Scheduling..." : "Schedule"}
            </span>
          </button>

          <button
            onClick={handlePublish}
            disabled={publishing || scheduling || saving}
            className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4 sm:text-sm lg:px-5"
          >
            <span className="flex items-center justify-center gap-2">
              <FiSend />
              {publishing ? "Publishing..." : "Publish"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorToolbar;
