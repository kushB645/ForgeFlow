import {
  FiCheckCircle,
  FiClock,
  FiEdit3,
  FiRefreshCw,
  FiXCircle,
} from "react-icons/fi";

const activities = [
  {
    id: 1,
    title: "React Performance Tips",
    action: "Published Successfully",
    time: "Today • 10:00 AM",
    icon: <FiCheckCircle />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    id: 2,
    title: "AI Productivity Hacks",
    action: "Scheduled for Tomorrow",
    time: "Yesterday • 6:30 PM",
    icon: <FiClock />,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 3,
    title: "Tailwind CSS Tricks",
    action: "Draft Updated",
    time: "Yesterday • 3:15 PM",
    icon: <FiEdit3 />,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    id: 4,
    title: "Node.js Scaling Guide",
    action: "Rescheduled",
    time: "21 July • 09:00 AM",
    icon: <FiRefreshCw />,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    id: 5,
    title: "Understanding GraphQL",
    action: "Publishing Failed",
    time: "20 July • 04:30 PM",
    icon: <FiXCircle />,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

const ActivityTimeline = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827]">
      {/* Header */}
      <div className="border-b border-slate-800 px-8 py-6">
        <h2 className="text-2xl font-bold text-white">
          Recent Activity
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Track everything happening in your publishing workflow.
        </p>
      </div>

      {/* Timeline */}
      <div className="px-8 py-8">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-slate-800"></div>

          <div className="space-y-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="relative flex gap-5"
              >
                {/* Icon */}
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${activity.bg} ${activity.color}`}
                >
                  {activity.icon}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-500/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">
                        {activity.title}
                      </h3>

                      <p className="mt-2 text-slate-300">
                        {activity.action}
                      </p>
                    </div>

                    <span className="text-sm text-slate-500">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTimeline;