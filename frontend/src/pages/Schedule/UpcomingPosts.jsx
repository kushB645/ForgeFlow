import { FiArrowRight } from "react-icons/fi";
import ScheduleCard from "./ScheduleCard";

const upcomingPosts = [
  {
    id: 1,
    title: "React Performance Tips",
    description:
      "Learn how memoization, lazy loading, and React DevTools can dramatically improve your application's performance.",
    date: "22 July",
    time: "10:00 AM",
    status: "Scheduled",
  },
  {
    id: 2,
    title: "Why Every Developer Should Learn TypeScript",
    description:
      "TypeScript isn't just about types. Discover how it improves scalability, collaboration, and developer confidence.",
    date: "22 July",
    time: "04:00 PM",
    status: "Scheduled",
  },
  {
    id: 3,
    title: "Building Better UI with Tailwind CSS",
    description:
      "Practical techniques for creating responsive, reusable, and visually appealing interfaces.",
    date: "23 July",
    time: "09:30 AM",
    status: "Scheduled",
  },
  {
    id: 4,
    title: "My Journey Learning React",
    description:
      "Sharing lessons, mistakes, and insights from transitioning into frontend development.",
    date: "24 July",
    time: "07:00 PM",
    status: "Draft",
  },
];

const UpcomingPosts = () => {
  return (
    <div className="flex h-[700px] flex-col rounded-2xl border border-slate-800 bg-[#101827]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Upcoming Posts
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Your scheduled publishing queue
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
          View All

          <FiArrowRight />
        </button>
      </div>

      {/* Cards */}
      <div className="flex-1 space-y-5 overflow-y-auto p-6 scrollbar-hide">
        {upcomingPosts.map((post) => (
          <ScheduleCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
            time={post.time}
            status={post.status}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingPosts;