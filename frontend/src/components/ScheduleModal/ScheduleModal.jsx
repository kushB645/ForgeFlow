import { useEffect, useState } from "react";
import { FiCalendar, FiClock, FiX } from "react-icons/fi";

const ScheduleModal = ({
  isOpen,
  onClose,
  onSchedule,
  initialDate = "",
  initialTime = "",
  mode = "schedule",
}) => {
  const [date, setDate] = useState(initialDate);
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (isOpen) {
      setDate(initialDate || "");
      setTime(initialTime || "");
    }
  }, [isOpen, initialDate, initialTime]);

  if (!isOpen) return null;

  const handleSchedule = () => {
    if (!date || !time) {
      return;
    }

    const scheduledAt = new Date(`${date}T${time}`);

    if (scheduledAt <= new Date()) {
      return;
    }

    onSchedule(scheduledAt);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#101827] p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {mode === "reschedule"
                ? "Reschedule Post"
                : "Schedule Post"}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {mode === "reschedule"
                ? "Choose a new publishing time."
                : "Choose when you want this post to be published."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <FiX />
          </button>
        </div>

        {/* Date */}
        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-300">
            <FiCalendar />
            Date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
          />
        </div>

        {/* Time */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-slate-300">
            <FiClock />
            Time
          </label>

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-red-500 hover:text-red-400"
          >
            Cancel
          </button>

          <button
            onClick={handleSchedule}
            disabled={!date || !time}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {mode === "reschedule"
              ? "Reschedule"
              : "Schedule"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;