import {
  FiEdit2,
  FiCopy,
  FiTrash2,
  FiClock,
  FiCalendar,
  FiXCircle,
} from "react-icons/fi";

const statusColor = {
  draft: "bg-yellow-500/10 text-yellow-400",
  scheduled: "bg-cyan-500/10 text-cyan-400",
  published: "bg-green-500/10 text-green-400",
  failed: "bg-red-500/10 text-red-400",
};

const formatDate = (date) => {
  if (!date) return "Not scheduled";

  return new Date(date).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

const PostCard = ({
  post,
  onEdit,
  onDelete,
  onDuplicate,
  onReschedule,
  onCancelSchedule,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827] p-6 transition hover:border-cyan-500/30">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
            statusColor[post.status] ||
            "bg-slate-700 text-slate-300"
          }`}
        >
          {post.status}
        </span>

        <span className="flex items-center gap-2 text-sm text-slate-400">
          <FiClock />

          {new Date(post.createdAt).toLocaleDateString(
            "en-IN",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          )}
        </span>
      </div>

      {/* Scheduled time */}
      {post.status === "scheduled" && (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-400">
          <FiCalendar />

          <span>
            Scheduled for{" "}
            <strong>{formatDate(post.scheduledAt)}</strong>
          </span>
        </div>
      )}

      {/* Content */}
      <p className="mt-5 line-clamp-5 whitespace-pre-wrap text-slate-300">
        {post.content}
      </p>

      {/* Hashtags */}
      {post.hashtags?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {post.hashtags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-cyan-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Image */}
      {post.media?.length > 0 && (
        <img
          src={post.media[0].url}
          alt="Post media"
          className="mt-5 h-52 w-full rounded-xl object-cover"
        />
      )}

      {/* Footer */}
      <div className="mt-6 flex items-center justify-end gap-3">
        {post.status === "scheduled" ? (
          <>
            {/* Reschedule */}
            <button
              onClick={() => onReschedule(post)}
              className="flex items-center gap-2 rounded-lg border border-cyan-500/20 px-3 py-2 text-sm text-cyan-400 transition hover:bg-cyan-500/10"
            >
              <FiCalendar size={16} />
              Reschedule
            </button>

            {/* Cancel Schedule */}
            <button
              onClick={() => onCancelSchedule(post)}
              className="flex items-center gap-2 rounded-lg border border-red-500/20 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
            >
              <FiXCircle size={16} />
              Cancel
            </button>
          </>
        ) : (
          <>
            {/* Edit */}
            <button
              onClick={() => onEdit(post)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-cyan-500/10 hover:text-cyan-400"
              title="Edit"
            >
              <FiEdit2 size={18} />
            </button>

            {/* Duplicate */}
            <button
              onClick={() => onDuplicate(post)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-violet-500/10 hover:text-violet-400"
              title="Duplicate"
            >
              <FiCopy size={18} />
            </button>

            {/* Delete */}
            <button
              onClick={() => onDelete(post._id)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
              title="Delete"
            >
              <FiTrash2 size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;