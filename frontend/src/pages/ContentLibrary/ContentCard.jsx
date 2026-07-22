import {
  FiCalendar,
  FiClock,
  FiCopy,
  FiEdit2,
  FiEye,
  FiTrash2,
} from "react-icons/fi";

const statusStyles = {
  Published:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

  Draft:
    "bg-slate-700/60 text-slate-300 border border-slate-600",

  Scheduled:
    "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
};

const ContentCard = ({ post }) => {
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
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[post.status]}`}
        >
          {post.status}
        </span>

        <span className="text-sm text-slate-400">
          {post.date}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="mt-5 overflow-hidden rounded-xl">
        <img
          src={post.image}
          alt={post.title}
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

      {/* Title */}
      <h2 className="mt-5 line-clamp-2 text-2xl font-semibold text-white">
        {post.title}
      </h2>

      {/* Description */}
      <p className="mt-3 line-clamp-3 leading-7 text-slate-400">
        {post.description}
      </p>

      {/* Divider */}
      <div className="my-5 border-t border-slate-800"></div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        {/* Left */}

        {post.status === "Scheduled" ? (
          <div className="flex items-center gap-2 text-sm text-cyan-400">
            <FiCalendar />
            <span>{post.schedule}</span>
          </div>
        ) : post.status === "Draft" ? (
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <FiEye size={15} />
            <span>Not Shared</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="h-3 w-7 rounded-full bg-cyan-500"></div>

            <div className="h-5 w-5 rounded-full bg-slate-700"></div>
          </div>
        )}

        {/* Right */}
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400">
            <FiEdit2 size={17} />
          </button>

          <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400">
            <FiCopy size={17} />
          </button>

          <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-red-400">
            <FiTrash2 size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;