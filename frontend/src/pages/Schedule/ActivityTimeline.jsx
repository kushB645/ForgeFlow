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
      <div className="border-b border-slate-800 px-8 py-6">
        <h2 className="text-2xl font-bold text-white">Recent Activity</h2>

        <p className="mt-2 text-sm text-slate-400">
          Track everything happening in your publishing workflow.
        </p>
      </div>

      {/* Timeline */}
      <div className="px-8 py-8">
        {activities.length === 0 ? (
          <div className="py-10 text-center text-slate-500">
            No recent activity yet.
          </div>
        ) : (
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 h-full w-px bg-slate-800" />

            <div className="space-y-8">
              {activities.map((activity) => (
                <div key={activity.id} className="relative flex gap-5">
                  {/* Icon */}
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${activity.bg} ${activity.color}`}
                  >
                    {activity.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-500/30">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-white">
                          {activity.title}
                        </h3>

                        <p className="mt-2 text-slate-300">{activity.action}</p>
                      </div>

                      <span className="shrink-0 text-sm text-slate-500">
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
