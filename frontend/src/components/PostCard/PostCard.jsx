import { FiEdit2, FiCopy, FiTrash2, FiClock } from "react-icons/fi";

const statusColor = {
  draft: "bg-yellow-500/10 text-yellow-400",
  scheduled: "bg-cyan-500/10 text-cyan-400",
  published: "bg-green-500/10 text-green-400",
  failed: "bg-red-500/10 text-red-400",
};

const PostCard = ({ post, onEdit, onDelete, onDuplicate }) => {
    console.log(post.hashtags);
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827] p-6 transition hover:border-cyan-500/30">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
            statusColor[post.status] || "bg-slate-700 text-slate-300"
          }`}
        >
          {post.status}
        </span>

        <span className="flex items-center gap-2 text-sm text-slate-400">
          <FiClock />
          {new Date(post.createdAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

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
          alt=""
          className="mt-5 h-52 w-full rounded-xl object-cover"
        />
      )}

      {/* Footer */}
      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          onClick={() => onEdit(post)}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          <FiEdit2 size={18} />
        </button>

        <button
          onClick={() => onDuplicate(post)}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-violet-500/10 hover:text-violet-400"
        >
          <FiCopy size={18} />
        </button>

        <button
          onClick={() => onDelete(post._id)}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-400"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
