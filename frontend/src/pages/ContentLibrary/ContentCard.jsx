import {
  FiCalendar,
  FiClock,
  FiCopy,
  FiEdit2,
  FiEye,
  FiTrash2,
  FiRefreshCw,
  FiXCircle,
} from "react-icons/fi";

const statusStyles = {
  published:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

  draft:
    "bg-slate-700/60 text-slate-300 border border-slate-600",

  scheduled:
    "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
};

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const ContentCard = ({
  post,
  onEdit,
  onDelete,
  onDuplicate,
  onReschedule,
  onCancelSchedule,
}) => {
  const status = post.status?.toLowerCase();

  const mediaUrl = post.media?.[0]?.url;

  return (
    <div
      className="
        group
        min-w-0
        rounded-2xl
        border
        border-slate-800
        bg-[#101827]
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500/40
        hover:shadow-2xl
        sm:p-5
      "
    >
      {/* Top */}
      <div className="flex min-w-0 items-center justify-between gap-2">
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium sm:px-3 sm:text-xs ${
            statusStyles[status] || statusStyles.draft
          }`}
        >
          {status || "draft"}
        </span>

        <span className="truncate text-xs text-slate-400 sm:text-sm">
          {formatDate(post.createdAt)}
        </span>
      </div>

      {/* Image */}
      {mediaUrl && (
        <div className="mt-4 overflow-hidden rounded-xl sm:mt-5">
          <img
            src={mediaUrl}
            alt="Post media"
            className="
              h-40
              w-full
              rounded-xl
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
              sm:h-48
            "
          />
        </div>
      )}

      {/* Content */}
      <p
        className={`${
          mediaUrl ? "mt-4 sm:mt-5" : "mt-5 sm:mt-6"
        } line-clamp-6 whitespace-pre-line text-sm leading-6 text-slate-300 sm:text-base sm:leading-7`}
      >
        {post.content}
      </p>

      {/* Hashtags */}
      {post.hashtags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
          {post.hashtags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-[10px] text-cyan-400 sm:text-xs">
              #{tag}
            </span>
          ))}

          {post.hashtags.length > 3 && (
            <span className="text-[10px] text-slate-500 sm:text-xs">
              +{post.hashtags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="my-4 border-t border-slate-800 sm:my-5"></div>

      {/* Footer */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:flex-row">
        {/* Left */}
        <div className="min-w-0">
          {status === "scheduled" ? (
            <div className="flex items-center gap-2 text-xs text-cyan-400 sm:text-sm">
              <FiCalendar className="shrink-0" />

              <span className="truncate">
                {post.scheduledAt
                  ? formatDate(post.scheduledAt)
                  : "Scheduled"}
              </span>
            </div>
          ) : status === "draft" ? (
            <div className="flex items-center gap-2 text-xs text-slate-400 sm:text-sm">
              <FiEye size={15} />
              <span>Not Published</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-xs text-emerald-400 sm:text-sm">
              <FiClock size={15} />
              <span>Published</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-1 sm:gap-2">
          {/* Edit */}
          <button
            type="button"
            onClick={() => onEdit(post)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
            title="Edit"
          >
            <FiEdit2 size={16} />
          </button>

          {/* Duplicate */}
          <button
            type="button"
            onClick={() => onDuplicate(post)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
            title="Duplicate"
          >
            <FiCopy size={16} />
          </button>

          {status === "scheduled" ? (
            <>
              {/* Reschedule */}
              <button
                type="button"
                onClick={() => onReschedule(post)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
                title="Reschedule"
              >
                <FiRefreshCw size={16} />
              </button>

              {/* Cancel Schedule */}
              <button
                type="button"
                onClick={() => onCancelSchedule(post)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-red-400"
                title="Cancel Schedule"
              >
                <FiXCircle size={16} />
              </button>
            </>
          ) : (
            /* Delete */
            <button
              type="button"
              onClick={() => onDelete(post._id)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-red-400"
              title="Delete"
            >
              <FiTrash2 size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;