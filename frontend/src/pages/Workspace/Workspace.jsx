import React, { useEffect, useState } from "react";

import {
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiMoreVertical,
} from "react-icons/fi";

import {
  getDashboardStats,
  getUpcomingPosts,
  getRecentPosts,
} from "../../services/dashboard.service.js";

import StatCard from "../../components/Card/StatCard";
import { useNavigate } from "react-router-dom";
import { HiSparkles, HiOutlinePencilSquare } from "react-icons/hi2";

const Workspace = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalPosts: 0,
    draft: 0,
    scheduled: 0,
    published: 0,
    failed: 0,
  });

  const [upcomingPosts, setUpcomingPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [statsData, upcomingData, recentData] = await Promise.all([
          getDashboardStats(),
          getUpcomingPosts(),
          getRecentPosts(),
        ]);

        setStats(statsData);
        setUpcomingPosts(upcomingData);
        setRecentPosts(recentData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section>
        <h1 className="py-4 text-center text-5xl font-bold text-white">
          Turn your ideas into{" "}
          <span className="bg-gradient-to-r from-purple-200 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            content
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl text-slate-400">
          The high-performance command center for elite creators. Harness AI
          precision or craft every pixel manually.
        </p>
      </section>
      <div className="grid grid-cols-5 gap-5">
        <StatCard title="Total Posts" value={stats.totalPosts} />
        <StatCard title="Drafts" value={stats.draft} />
        <StatCard title="Scheduled" value={stats.scheduled} />
        <StatCard title="Published" value={stats.published} />
        <StatCard title="Failed" value={stats.failed} />
      </div>
      ;{/* Quick Actions */}
      <section className="mt-16 grid grid-cols-2 gap-8">
        <div className="flex flex-col border border-slate-600 rounded-2xl bg-slate-900 backdrop-blur-2xl p-8">
          <div className="h-16 w-16 mt-4 mb-2 rounded-lg bg-slate-800 flex items-center justify-center">
            <HiSparkles size={32} className=" text-indigo-500" />
          </div>

          <h2 className="my-2 text-xl font-semibold text-white">
            Generate with AI
          </h2>

          <p className="mb-4 mt-4 text-slate-400 text-lg">
            Transform your ideas into professional LinkedIn posts, articles, and
            content using ForgeFlow AI.
          </p>

          <button
            onClick={() => navigate("/new-post")}
            className="flex items-center mt-3 gap-2 font-medium font-bold text-purple-200 hover:text-blue-400 cursor-pointer"
          >
            Launch Engine <FiArrowRight size={20} />
          </button>
        </div>

        <div className="flex flex-col border border-slate-600 rounded-2xl bg-slate-900 backdrop-blur-2xl p-8">
          <div className="h-16 w-16 mt-4 mb-2 rounded-lg bg-slate-800 flex items-center justify-center">
            <HiOutlinePencilSquare size={32} className=" text-indigo-500" />
          </div>
          <h2 className="my-2 text-xl font-semibold text-white">
            Write Manually
          </h2>
          <p className="mb-4 mt-4 text-slate-400 text-lg">
            A distraction-free editor built for creators who want complete
            control over every word.
          </p>
          <button
            onClick={() => navigate("/custom-post")}
            className="flex items-center mt-3 gap-2 font-medium font-bold text-cyan-200 hover:text-blue-400 cursor-pointer"
          >
            Open Editor <FiArrowRight size={20} />
          </button>
        </div>
      </section>
      {/* Drafts + Schedule */}
      <section className="mt-16 grid grid-cols-3 gap-8">
        {/* Recent Drafts */}

        <div className="col-span-2">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Recent Posts</h2>

              <p className="text-slate-400">
                Continuity of your current workflows.
              </p>
            </div>

            <button
              onClick={() => navigate("/content-library")}
              className="text-indigo-300 hover:text-indigo-200 transition"
            >
              View All
            </button>
          </div>

          <div className="mt-6 space-y-5">
            {recentPosts.length === 0 ? (
              <div className="rounded-2xl border border-slate-700/70 bg-[#101A2C] px-6 py-10 text-center">
                <p className="text-slate-400">No published posts yet.</p>
              </div>
            ) : (
              recentPosts.map((post) => (
                <div
                  key={post._id}
                  className="group flex items-center rounded-2xl border border-slate-700/70 bg-[#101A2C] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-[#131F34] hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  {/* Image */}
                  {post.media?.[0]?.url ? (
                    <img
                      src={post.media[0].url}
                      alt="Post media"
                      className="h-20 w-20 rounded-2xl object-cover"
                    />
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-800 text-xs text-slate-500">
                      No Image
                    </div>
                  )}

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-white">
                      {post.content?.slice(0, 50)}
                      {post.content?.length > 50 ? "..." : ""}
                    </h3>

                    <div className="mt-2 flex items-center text-sm text-slate-400">
                      <span>
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleString("en-IN")
                          : "Recently published"}
                      </span>

                      <span className="mx-3 h-1 w-1 rounded-full bg-slate-500"></span>

                      <span>
                        {post.content?.split(/\s+/).filter(Boolean).length || 0}{" "}
                        words
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <span className="rounded-lg bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-400">
                    Published
                  </span>

                  {/* More */}
                  <button
                    onClick={() => navigate(`/new-post/${post._id}`)}
                    className="ml-5 rounded-lg p-2 text-slate-500 transition hover:bg-slate-700 hover:text-white"
                  >
                    <FiMoreVertical size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ================= Schedule ================= */}

        <div>
          {/* Header */}

          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Schedule
              </h2>

              <p className="mt-1 text-sm text-slate-400">Queue status</p>
            </div>

            <button
              onClick={() => navigate("/schedule")}
              className="group text-indigo-300 transition hover:text-indigo-200"
            >
              <FiCalendar
                size={20}
                className="text-slate-500 transition group-hover:text-indigo-200"
              />
            </button>
          </div>

          <div className="space-y-4">
            {upcomingPosts.length === 0 ? (
              <div className="rounded-2xl border border-slate-700/60 bg-[#101A2C] p-5 text-center">
                <p className="text-sm text-slate-400">No posts scheduled.</p>
              </div>
            ) : (
              upcomingPosts.map((post, index) => {
                const scheduledDate = post.scheduledAt
                  ? new Date(post.scheduledAt)
                  : null;

                return (
                  <div
                    key={post._id}
                    className={`group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 ${
                      index === 0
                        ? "border border-slate-700/60 bg-[#1E293B] hover:border-violet-500/40"
                        : index === 1
                          ? "border border-cyan-400/40 bg-[#101A2C] hover:border-cyan-400"
                          : "border border-slate-700/60 bg-[#101A2C] hover:border-slate-500"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-semibold uppercase tracking-widest ${
                          index === 0
                            ? "text-violet-300"
                            : index === 1
                              ? "text-cyan-300"
                              : "text-slate-400"
                        }`}
                      >
                        {scheduledDate
                          ? scheduledDate.toLocaleString("en-IN", {
                              day: "numeric",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })
                          : "Scheduled"}
                      </span>

                      {index === 0 ? (
                        <span className="text-violet-300">⚡</span>
                      ) : (
                        <FiClock size={18} className="text-slate-500" />
                      )}
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white leading-snug">
                      {post.content?.slice(0, 60)}
                      {post.content?.length > 60 ? "..." : ""}
                    </h3>

                    <div className="mt-3 flex items-center text-sm text-slate-400">
                      <span>LinkedIn</span>

                      <span className="mx-3 h-1 w-1 rounded-full bg-slate-500"></span>

                      <span>Ready</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Cards will come here */}
      </section>
      {/* Analytics */}
      <section className="mt-14">
        <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#101827] px-8 py-6 transition-all duration-300 hover:border-slate-600 hover:bg-[#121C2D]">
          <div className="flex items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10">
              <FiArrowRight className="text-violet-300" size={24} />
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">
                Content Overview
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                You currently have {stats.totalPosts} total posts in ForgeFlow.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="rounded-xl bg-slate-800 px-4 py-3 text-center">
              <p className="text-xs text-slate-500">Published</p>

              <p className="text-xl font-semibold text-emerald-400">
                {stats.published}
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 px-4 py-3 text-center">
              <p className="text-xs text-slate-500">Scheduled</p>

              <p className="text-xl font-semibold text-cyan-400">
                {stats.scheduled}
              </p>
            </div>

            <div className="rounded-xl bg-slate-800 px-4 py-3 text-center">
              <p className="text-xs text-slate-500">Drafts</p>

              <p className="text-xl font-semibold text-amber-400">
                {stats.draft}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workspace;
