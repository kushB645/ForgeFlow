import { FiClock, FiEdit2, FiSend, FiTrash2, FiCalendar } from "react-icons/fi";

const statusStyles = {
  Scheduled: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",

  Published: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",

  Draft: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

const ScheduleCard = ({
  postId,
  title,
  description,
  time,
  date,
  status = "Scheduled",
  onEdit,
  onDelete,
  onPublish,
  onCancelSchedule,
}) => {
  return (
    <div className="group min-w-0 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 sm:p-5">
      {/* Header */}
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-white sm:text-lg">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-xs text-slate-400 sm:text-sm">
            {description}
          </p>
        </div>

        <span
          className={`w-fit shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium sm:px-3 sm:text-xs ${
            statusStyles[status] || statusStyles.Scheduled
          }`}
        >
          {status}
        </span>
      </div>

      {/* Schedule */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 sm:mt-5 sm:gap-6 sm:text-sm">
        <div className="flex items-center gap-2">
          <FiCalendar className="shrink-0 text-cyan-400" />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiClock className="shrink-0 text-cyan-400" />
          <span>{time}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex flex-col gap-3 border-t border-slate-800 pt-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-5">
        <div className="flex gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => onEdit?.(postId)}
            className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400"
            title="Edit"
          >
            <FiEdit2 />
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(postId)}
            className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-red-500 hover:text-red-400"
            title="Delete"
          >
            <FiTrash2 />
          </button>
        </div>

        <button
          type="button"
          onClick={() => onPublish?.(postId)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 sm:w-auto sm:text-sm"
        >
          <FiSend />
          Publish Now
        </button>
      </div>
    </div>
  );
};

export default ScheduleCard;
