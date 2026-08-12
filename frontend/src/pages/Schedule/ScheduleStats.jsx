import { FiCalendar, FiClock, FiCheckCircle, FiFileText } from "react-icons/fi";

const ScheduleStats = ({ posts }) => {
  const scheduledPosts = posts.filter((post) => post.status === "scheduled");

  const publishedPosts = posts.filter((post) => post.status === "published");

  const draftPosts = posts.filter((post) => post.status === "draft");

  const today = new Date().toDateString();

  const scheduledToday = scheduledPosts.filter(
    (post) =>
      post.scheduledAt && new Date(post.scheduledAt).toDateString() === today
  );
  const stats = [
    {
      title: "Scheduled Today",
      value: scheduledToday.length,
      subtitle: "Posts queued today",
      icon: <FiCalendar size={22} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Upcoming",
      value: scheduledPosts.length,
      subtitle: "Scheduled posts",
      icon: <FiClock size={22} />,
      color: "text-violet-400",
      bg: "bg-violet-500/10",
    },
    {
      title: "Published",
      value: publishedPosts.length,
      subtitle: "Successfully published",
      icon: <FiCheckCircle size={22} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "Drafts",
      value: draftPosts.length,
      subtitle: "Ready for scheduling",
      icon: <FiFileText size={22} />,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-slate-800 bg-[#101827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">{item.title}</p>

              <h2 className="mt-3 text-4xl font-bold text-white">
                {item.value}
              </h2>

              <p className="mt-2 text-sm text-slate-500">{item.subtitle}</p>
            </div>

            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
            >
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleStats;
