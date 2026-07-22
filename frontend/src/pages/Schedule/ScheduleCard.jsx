import {
  FiClock,
  FiEdit2,
  FiSend,
  FiTrash2,
  FiCalendar,
} from "react-icons/fi";

const statusStyles = {
  Scheduled:
    "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",

  Published:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",

  Draft:
    "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

const ScheduleCard = ({
  title,
  description,
  time,
  date,
  status = "Scheduled",
}) => {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-slate-400">
            {description}
          </p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      {/* Schedule */}
      <div className="mt-5 flex items-center gap-6 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <FiCalendar className="text-cyan-400" />

          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiClock className="text-cyan-400" />

          <span>{time}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-5">
        <div className="flex gap-3">
          <button className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400">
            <FiEdit2 />
          </button>

          <button className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-red-500 hover:text-red-400">
            <FiTrash2 />
          </button>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
          <FiSend />

          Publish Now
        </button>
      </div>
    </div>
  );
};

export default ScheduleCard;