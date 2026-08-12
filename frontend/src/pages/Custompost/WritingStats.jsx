import {
  FiType,
  FiFileText,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const WritingStats = ({ content = "" }) => {
  const trimmedContent = content.trim();

  const words = trimmedContent
    ? trimmedContent.split(/\s+/).length
    : 0;

  const characters = content.length;

  const readingTime =
    words === 0
      ? 0
      : Math.max(1, Math.ceil(words / 200));

  return (
    <div className="grid grid-cols-4 gap-4">

      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-5">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <FiType />
          Words
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          {words}
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-5">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <FiFileText />
          Characters
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          {characters}
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-5">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <FiClock />
          Reading Time
        </p>

        <h3 className="mt-2 text-3xl font-bold text-white">
          {readingTime} min
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-5">
        <p className="flex items-center gap-2 text-sm text-slate-400">
          <FiCheckCircle />
          Status
        </p>

        <h3 className="mt-2 text-lg font-semibold text-emerald-400">
          {words > 0 ? "Ready to Publish" : "Start Writing"}
        </h3>
      </div>

    </div>
  );
};

export default WritingStats;