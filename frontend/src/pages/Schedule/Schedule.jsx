import { FiPlus } from "react-icons/fi";

import ScheduleStats from "./ScheduleStats";
import CalendarWidget from "./CalendarWidget";
import UpcomingPosts from "./UpcomingPosts";
import ActivityTimeline from "./ActivityTimeline";

const Schedule = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
            Content Planner
          </span>

          <h1 className="mt-5 text-5xl font-bold text-white">
            Schedule
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-slate-400">
            Plan, organize, and manage your LinkedIn publishing calendar with
            ease.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:opacity-90">
          <FiPlus />
          Schedule New
        </button>
      </div>

      {/* Stats */}
      <ScheduleStats />

      {/* Calendar + Upcoming */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <CalendarWidget />
        </div>

        <div className="col-span-5">
          <UpcomingPosts />
        </div>
      </div>

      {/* Activity */}
      <ActivityTimeline />
    </section>
  );
};

export default Schedule;