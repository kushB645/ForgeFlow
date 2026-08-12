import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useMemo, useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarWidget = ({ posts }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = useMemo(() => {
    const daysArray = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    while (daysArray.length < 42) {
      daysArray.push(null);
    }

    return daysArray;
  }, [firstDay, daysInMonth]);

  const scheduledDates = useMemo(() => {
    return posts
      .filter((post) => post.status === "scheduled" && post.scheduledAt)
      .map((post) => {
        const d = new Date(post.scheduledAt);
        return {
          day: d.getDate(),
          month: d.getMonth(),
          year: d.getFullYear(),
        };
      });
  }, [posts]);

  const currentSystemDate = new Date();

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  const changeMonth = (offset) => {
    setCurrentDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + offset, 1)
    );
  };

  const isSameDate = (day, month, year) => {
    return (
      day === currentSystemDate.getDate() &&
      month === currentSystemDate.getMonth() &&
      year === currentSystemDate.getFullYear()
    );
  };

  const scheduledCount = (day, month, year) => {
    return scheduledDates.filter(
      (scheduled) =>
        scheduled.day === day &&
        scheduled.month === month &&
        scheduled.year === year
    ).length;
  };

  return (
    <div className="rounded-2xl bg-slate-950 p-6 text-white">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Calendar</p>
          <h2 className="text-xl font-semibold">
            {monthName} {currentYear}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            className="rounded-full p-2 text-slate-300 hover:bg-slate-800"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            className="rounded-full p-2 text-slate-300 hover:bg-slate-800"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-wide text-slate-500">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div
        key={`${currentMonth}-${currentYear}`}
        className="mt-4 grid grid-cols-7 gap-2 animate-fade"
      >
        {calendarDays.map((date, index) => {
          const isToday =
            date !== null && isSameDate(date, currentMonth, currentYear);

          const totalScheduled = date
            ? scheduledCount(date, currentMonth, currentYear)
            : 0;

          return (
            <div
              key={index}
              className={`aspect-square rounded-xl border transition-all duration-300 ${
                date
                  ? "border-slate-800 bg-slate-900 hover:border-cyan-500/50 hover:bg-slate-800"
                  : "border-transparent bg-transparent"
              } ${isToday ? "border-cyan-500 bg-cyan-500/10" : ""}`}
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

                  <div className="mt-2 flex items-center gap-1">
                    {isToday && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    )}

                    {totalScheduled > 0 && (
                      <span className="rounded-full bg-cyan-500 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                        {totalScheduled}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-8 border-t border-slate-800 pt-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-cyan-400"></span>
          <span className="text-slate-400">Scheduled Post</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
          <button
            type="button"
            onClick={() => setCurrentDate(new Date())}
            className="rounded-lg bg-cyan-500 px-3 py-2 text-sm font-medium text-slate-900 transition hover:bg-cyan-400"
          >
            Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
