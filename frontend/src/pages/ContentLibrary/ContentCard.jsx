import {
  FiCalendar,
  FiClock,
  FiCopy,
  FiEdit2,
  FiEye,
  FiTrash2,
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
}) => {
  const status = post.status?.toLowerCase();

  const mediaUrl = post.media?.[0]?.url;

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-800
        bg-[#101827]
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500/40
        hover:shadow-2xl
      "
    >
      {/* Top */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusStyles[status] || statusStyles.draft
          }`}
        >
          {status || "draft"}
        </span>

        <span className="text-sm text-slate-400">
          {formatDate(post.createdAt)}
        </span>
      </div>

      {/* Image */}
      {mediaUrl && (
        <div className="mt-5 overflow-hidden rounded-xl">
          <img
            src={mediaUrl}
            alt="Post media"
            className="
              h-48
              w-full
              rounded-xl
              object-cover
              transition-transform
              duration-300
              group-hover:scale-105
            "
          />
        </div>
      )}

      {/* Content */}
      <p
        className={`${
          mediaUrl ? "mt-5" : "mt-6"
        } line-clamp-6 whitespace-pre-line leading-7 text-slate-300`}
      >
        {post.content}
      </p>

      {/* Hashtags */}
      {post.hashtags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.hashtags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-cyan-400"
            >
              #{tag}
            </span>
          ))}

          {post.hashtags.length > 3 && (
            <span className="text-xs text-slate-500">
              +{post.hashtags.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="my-5 border-t border-slate-800"></div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Left */}
        {status === "scheduled" ? (
          <div className="flex items-center gap-2 text-sm text-cyan-400">
            <FiCalendar />

            <span>
              {post.scheduledAt
                ? formatDate(post.scheduledAt)
                : "Scheduled"}
            </span>
          </div>
        ) : status === "draft" ? (
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <FiEye size={15} />
            <span>Not Published</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-emerald-400">
            <FiClock size={15} />
            <span>Published</span>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Edit */}
          <button
            onClick={() => onEdit(post)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
          >
            <FiEdit2 size={17} />
          </button>

          {/* Duplicate */}
          <button
            onClick={() => onDuplicate(post)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
          >
            <FiCopy size={17} />
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(post._id)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-red-400"
          >
            <FiTrash2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;