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
    <div className="flex h-[500px] flex-col rounded-2xl border border-slate-800 bg-[#101827] sm:h-[600px] lg:h-[700px]">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-800 px-4 py-4 sm:px-5 sm:py-5 lg:px-6">
        <div className="min-w-0">
          <h2 className="truncate text-xl font-bold text-white sm:text-2xl">
            Upcoming Posts
          </h2>

          <p className="mt-1 truncate text-xs text-slate-400 sm:text-sm">
            Your scheduled publishing queue
          </p>
        </div>

        <button className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-cyan-400 transition hover:text-cyan-300 sm:gap-2 sm:text-sm">
          <span>View All</span>
          <FiArrowRight />
        </button>
      </div>

      {/* Cards */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4 scrollbar-hide sm:space-y-5 sm:p-5 lg:p-6">
        {posts.length === 0 ? (
          <div className="flex h-full items-center justify-center text-center">
            <div>
              <p className="text-sm text-slate-400">No upcoming posts</p>

              <p className="mt-1 text-xs text-slate-500">
                Your scheduled posts will appear here.
              </p>
            </div>
          </div>
        ) : (
          posts.map((post) => (
            <ScheduleCard
              key={post._id}
              postId={post._id}
              title={post.content.slice(0, 40) + "..."}
              description={post.content}
              date={new Date(post.scheduledAt).toLocaleDateString("en-IN")}
              time={new Date(post.scheduledAt).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              status={
                post.status.charAt(0).toUpperCase() + post.status.slice(1)
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingPosts;
