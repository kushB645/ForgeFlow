import {
  FiBell,
  FiHelpCircle,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

const NewPostNavbar = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-[#0B1220] px-8">

        
      <div className="flex left-0">
        <h1 className="text-2xl font-semibold text-white">New Post</h1>
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4">
        <FiHelpCircle size={22} className="text-white hover:text-white mr-3" />
        <FiBell size={22} className="text-white hover:text-white" />

        {/* Divider */}
        <div className="mx-1 h-10 w-px bg-slate-600/80" />

        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Profile"
          className="h-9 w-9 rounded-full border border-slate-700"
        />

        <button className="rounded-xl bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600 transition">
          New Post
        </button>
      </div>
    </header>
  );
};

export default NewPostNavbar;
