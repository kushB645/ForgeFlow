import {
  FiSave,
  FiEye,
  FiCalendar,
  FiSend,
  FiTrash2,
} from "react-icons/fi";

const EditorToolbar = () => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#101827] px-6 py-4 shadow-lg">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-400">
          <span className="flex items-center gap-2">
            <FiTrash2 />
            Clear
          </span>
        </button>

        <span className="text-sm text-emerald-400">
          ● Ready to Save
        </span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400">
          <span className="flex items-center gap-2">
            <FiSave />
            Save Draft
          </span>
        </button>

        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-400">
          <span className="flex items-center gap-2">
            <FiEye />
            Preview
          </span>
        </button>

        <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400">
          <span className="flex items-center gap-2">
            <FiCalendar />
            Schedule
          </span>
        </button>

        <button className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
          <span className="flex items-center gap-2">
            <FiSend />
            Publish
          </span>
        </button>
      </div>
    </div>
  );
};

export default EditorToolbar;