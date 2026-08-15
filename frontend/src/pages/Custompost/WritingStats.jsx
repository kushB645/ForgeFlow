import { FiType, FiFileText, FiClock, FiCheckCircle } from "react-icons/fi";

const WritingStats = ({ content = "" }) => {
  const trimmedContent = content.trim();

  const words = trimmedContent ? trimmedContent.split(/\s+/).length : 0;

  const characters = content.length;

  const readingTime = words === 0 ? 0 : Math.max(1, Math.ceil(words / 200));

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {/* Words */}
      <div className="min-w-0 rounded-2xl border border-slate-800 bg-[#101827] p-4 sm:p-5">
        <p className="flex items-center gap-1.5 text-xs text-slate-400 sm:gap-2 sm:text-sm">
          <FiType className="shrink-0" />
          <span>Words</span>
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          {words}
        </h3>
      </div>

      {/* Characters */}
      <div className="min-w-0 rounded-2xl border border-slate-800 bg-[#101827] p-4 sm:p-5">
        <p className="flex items-center gap-1.5 text-xs text-slate-400 sm:gap-2 sm:text-sm">
          <FiFileText className="shrink-0" />
          <span>Characters</span>
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          {characters}
        </h3>
      </div>

      {/* Reading Time */}
      <div className="min-w-0 rounded-2xl border border-slate-800 bg-[#101827] p-4 sm:p-5">
        <p className="flex items-center gap-1.5 text-xs text-slate-400 sm:gap-2 sm:text-sm">
          <FiClock className="shrink-0" />
          <span>Reading Time</span>
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          {readingTime} min
        </h3>
      </div>

      {/* Status */}
      <div className="min-w-0 rounded-2xl border border-slate-800 bg-[#101827] p-4 sm:p-5">
        <p className="flex items-center gap-1.5 text-xs text-slate-400 sm:gap-2 sm:text-sm">
          <FiCheckCircle className="shrink-0" />
          <span>Status</span>
        </p>

        <h3
          className={`mt-2 text-base font-semibold sm:text-lg ${
            words > 0 ? "text-emerald-400" : "text-slate-400"
          }`}
        >
          {words > 0 ? "Ready to Publish" : "Start Writing"}
        </h3>
      </div>
    </div>
  );
};

export default WritingStats;
