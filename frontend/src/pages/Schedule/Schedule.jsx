import { useEffect, useState } from "react";
import { getPosts } from "../../services/post.service";
import { FiPlus } from "react-icons/fi";
import ScheduleStats from "./ScheduleStats";
import CalendarWidget from "./CalendarWidget";
import UpcomingPosts from "./UpcomingPosts";
import ActivityTimeline from "./ActivityTimeline";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();

      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 sm:px-4 sm:text-sm">
            Content Planner
          </span>

          <h1 className="mt-4 text-3xl font-bold text-white sm:mt-5 sm:text-4xl lg:text-5xl">
            Schedule
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:mt-3 sm:text-base lg:text-lg">
            Plan, organize, and manage your LinkedIn publishing calendar with
            ease.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate("/new-post")}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:w-fit sm:px-6"
        >
          <FiPlus />
          Schedule New
        </button>
      </div>

      {/* Stats */}
      <ScheduleStats posts={posts} />

      {/* Calendar + Upcoming */}
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-7">
          <CalendarWidget posts={posts} />
        </div>

        <div className="min-w-0 lg:col-span-5">
          <UpcomingPosts posts={posts} />
        </div>
      </div>

      {/* Activity */}
      <ActivityTimeline posts={posts} />
    </section>
  );
};

export default Schedule;
