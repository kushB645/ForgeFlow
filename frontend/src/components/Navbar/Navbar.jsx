import { FiBell, FiHelpCircle, FiPlus, FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-[#0B1220] px-8">

      {/* Search */}
      <div className="relative w-[600px]">
        <FiSearch
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search workspace..."
          className="w-full rounded-full border border-slate-800 bg-slate-900 py-2 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-6">
        <FiBell size={20} className="text-slate-400 hover:text-white" />
        <FiHelpCircle size={20} className="text-slate-400 hover:text-white" />  

        <button className="flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
          <FiPlus size={16} />
          New Post
        </button>
      </div>
    </header>
  );
};

export default Navbar;
