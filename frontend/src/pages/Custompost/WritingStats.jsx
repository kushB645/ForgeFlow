import {
  FiType,
  FiFileText,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const WritingStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-5">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <FiType />
          Words
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">245</h3>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-5">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <FiFileText />
          Characters
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">1,487</h3>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-5">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <FiClock />
          Reading Time
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">2 min</h3>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-5">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <FiCheckCircle />
          Status
        </p>

        <h3 className="mt-2 text-lg font-semibold text-emerald-400">
          Ready to Publish
        </h3>
      </div>
    </div>
  );
};

export default WritingStats;