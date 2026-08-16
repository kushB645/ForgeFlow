import { FiCheckCircle, FiClock, FiEdit3, FiXCircle } from "react-icons/fi";

const ActivityTimeline = ({ posts = [] }) => {
  const activities = [...posts]
    .sort(
      (a, b) =>
        new Date(b.updatedAt || b.createdAt) -
        new Date(a.updatedAt || a.createdAt)
    )
    .slice(0, 5)
    .map((post) => {
      const status = post.status?.toLowerCase();

      if (status === "published") {
        return {
          id: post._id,
          title: post.content?.slice(0, 45) || "Untitled Post",
          action: "Published Successfully",
          time: new Date(post.updatedAt || post.createdAt).toLocaleString(
            "en-IN",
            {
              day: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            }
          ),
          icon: <FiCheckCircle />,
          color: "text-emerald-400",
          bg: "bg-emerald-500/10",
        };
      }

      if (status === "scheduled") {
        return {
          id: post._id,
          title: post.content?.slice(0, 45) || "Untitled Post",
          action: "Scheduled for publishing",
          time: new Date(post.scheduledAt).toLocaleString("en-IN", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          }),
          icon: <FiClock />,
          color: "text-cyan-400",
          bg: "bg-cyan-500/10",
        };
      }

      if (status === "draft") {
        return {
          id: post._id,
          title: post.content?.slice(0, 45) || "Untitled Post",
          action: "Draft Updated",
          time: new Date(post.updatedAt || post.createdAt).toLocaleString(
            "en-IN",
            {
              day: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            }
          ),
          icon: <FiEdit3 />,
          color: "text-amber-400",
          bg: "bg-amber-500/10",
        };
      }

      return {
        id: post._id,
        title: post.content?.slice(0, 45) || "Untitled Post",
        action: status || "Post Updated",
        time: new Date(post.updatedAt || post.createdAt).toLocaleString(
          "en-IN",
          {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          }
        ),
        icon: <FiXCircle />,
        color: "text-red-400",
        bg: "bg-red-500/10",
      };
    });

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827]">
      {/* Header */}
      <div className="border-b border-slate-800 px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Recent Activity
        </h2>

        <p className="mt-2 text-xs text-slate-400 sm:text-sm">
          Track everything happening in your publishing workflow.
        </p>
      </div>

      {/* Timeline */}
      <div className="px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        {activities.length === 0 ? (
          <div className="py-8 text-center text-sm text-slate-500 sm:py-10">
            No recent activity yet.
          </div>
        ) : (
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 h-full w-px bg-slate-800 sm:left-6" />

            <div className="space-y-5 sm:space-y-6 lg:space-y-8">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="relative flex gap-3 sm:gap-4 lg:gap-5"
                >
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${activity.bg} ${activity.color}`}
                  >
                    {activity.icon}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 rounded-xl border border-slate-800 bg-slate-900/50 p-3 transition hover:border-cyan-500/30 sm:p-4 lg:p-5">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                          {activity.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-300 sm:mt-2 sm:text-sm">
                          {activity.action}
                        </p>
                      </div>

                      <span className="shrink-0 text-[10px] text-slate-500 sm:text-xs lg:text-sm">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityTimeline;
