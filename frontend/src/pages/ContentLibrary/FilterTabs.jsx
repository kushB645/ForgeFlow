import { FiFilter } from "react-icons/fi";

const FilterTabs = ({
  activeFilter,
  onFilterChange,
}) => {
  const filters = [
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

  return (
    <div className="flex items-center gap-4">
      <div className="flex rounded-xl border border-slate-700 bg-[#101827] p-1">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() =>
                onFilterChange(filter.value)
              }
              className={`rounded-lg px-5 py-2 transition ${
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

      <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2 text-white transition hover:border-cyan-500">
        <FiFilter />
        Filters
      </button>
    </div>
  );
};

export default FilterTabs;