import { FiFilter } from "react-icons/fi";

const FilterTabs = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex rounded-xl border border-slate-700 bg-[#101827] p-1">
        <button className="rounded-lg bg-slate-700 px-5 py-2 text-white">
          All
        </button>

        <button className="px-5 py-2 text-slate-400 hover:text-white">
          Drafts
        </button>

        <button className="px-5 py-2 text-slate-400 hover:text-white">
          Scheduled
        </button>

        <button className="px-5 py-2 text-slate-400 hover:text-white">
          Published
        </button>
      </div>

      <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2 text-white">
        <FiFilter />
        Filters
      </button>
    </div>
  );
};

export default FilterTabs;