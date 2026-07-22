import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// August 2026
const dates = [
  null, null, null, null, null,
  1, 2,
  3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30,
  31,
];

// Dates having scheduled posts
const scheduledDates = [5, 8, 12, 15, 18, 21, 24, 28];

const CalendarWidget = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Content Calendar
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Manage your publishing schedule
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400">
            <FiChevronLeft size={18} />
          </button>

          <span className="font-semibold text-white">
            August 2026
          </span>

          <button className="rounded-lg border border-slate-700 p-2 text-slate-400 transition hover:border-cyan-500 hover:text-cyan-400">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Week Days */}
      <div className="mb-4 grid grid-cols-7 gap-3">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium uppercase tracking-wide text-slate-500"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-3">
        {dates.map((date, index) => {
          const isScheduled = scheduledDates.includes(date);
          const isToday = date === 22;

          return (
            <div
              key={index}
              className={`
                aspect-square rounded-xl border transition-all duration-300
                ${
                  date
                    ? "border-slate-800 bg-slate-900 hover:border-cyan-500/50 hover:bg-slate-800"
                    : "border-transparent"
                }
                ${isToday ? "border-cyan-500 bg-cyan-500/10" : ""}
              `}
            >
              {date && (
                <div className="flex h-full flex-col items-center justify-center">
                  <span
                    className={`text-sm font-semibold ${
                      isToday ? "text-cyan-400" : "text-white"
                    }`}
                  >
                    {date}
                  </span>

                  {isScheduled && (
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 flex items-center gap-8 border-t border-slate-800 pt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-cyan-400"></span>
          <span className="text-slate-400">Scheduled Post</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border border-cyan-400"></span>
          <span className="text-slate-400">Today</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;