import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import ScheduleCard from "./ScheduleCard";
import { getScheduledPosts } from "../../services/post.service";

const UpcomingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchScheduledPosts();
  }, []);

  const fetchScheduledPosts = async () => {
    try {
      const data = await getScheduledPosts();
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-[700px] flex-col rounded-2xl border border-slate-800 bg-[#101827]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
        <div>
          <h2 className="text-2xl font-bold text-white">Upcoming Posts</h2>

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
        {posts.map((post) => (
          <ScheduleCard
            key={post._id}
            title={post.content.slice(0, 40) + "..."}
            description={post.content}
            date={new Date(post.scheduledAt).toLocaleDateString("en-IN")}
            time={new Date(post.scheduledAt).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
            status={post.status.charAt(0).toUpperCase() + post.status.slice(1)}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingPosts;
