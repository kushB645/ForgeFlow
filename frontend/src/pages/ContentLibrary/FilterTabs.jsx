import { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";

const FilterTabs = ({
  activeFilter,
  onFilterChange,
  filters,
  onApplyFilters,
  onClearFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const statusFilters = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Drafts",
      value: "draft",
    },
    {
      label: "Scheduled",
      value: "scheduled",
    },
    {
      label: "Published",
      value: "published",
    },
  ];

  const handleApply = () => {
    onApplyFilters();
    setIsOpen(false);
  };

  const handleClear = () => {
    onClearFilters();
    setIsOpen(false);
  };

  return (
    <div className="relative flex w-full flex-wrap items-center gap-2 sm:gap-3 lg:w-auto lg:flex-nowrap lg:gap-4">
      {/* Status Tabs */}
      <div className="flex min-w-0 flex-1 rounded-xl border border-slate-700 bg-[#101827] p-1 sm:flex-none">
        {statusFilters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() => onFilterChange(filter.value)}
              className={`flex-1 rounded-lg px-2.5 py-2 text-xs transition sm:flex-none sm:px-4 sm:text-sm lg:px-5 ${
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Filters Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-xs text-white transition sm:px-4 sm:text-sm lg:px-5 ${
          isOpen
            ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
            : "border-slate-700 hover:border-cyan-500"
        }`}
      >
        <FiFilter />
        Filters
      </button>

      {/* Filter Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-slate-700 bg-[#101827] p-5 shadow-2xl sm:w-80 lg:w-80">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white">Filter Posts</h3>
              <p className="mt-1 text-xs text-slate-500">
                Refine your content library
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <FiX />
            </button>
          </div>

          {/* Date */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Date
            </label>

            <select
              value={filters.date}
              onChange={(e) => filters.setDate(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
            >
              <option value="all">Any time</option>
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </div>

          {/* Media */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Media
            </label>

            <select
              value={filters.media}
              onChange={(e) => filters.setMedia(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
            >
              <option value="all">All posts</option>
              <option value="with-media">With media</option>
              <option value="without-media">Without media</option>
            </select>
          </div>

          {/* Sort */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Sort
            </label>

            <select
              value={filters.sort}
              onChange={(e) => filters.setSort(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-300 outline-none focus:border-cyan-500"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>

          {/* Actions */}
          <div className="mt-5 flex gap-2 border-t border-slate-800 pt-4">
            <button
              onClick={handleClear}
              className="flex-1 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
            >
              Clear
            </button>

            <button
              onClick={handleApply}
              className="flex-1 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-400"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterTabs;
