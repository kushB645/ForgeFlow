import { FiPlus } from "react-icons/fi";

const CreateNewCard = () => {
  return (
    <button className="group flex h-full min-h-[470px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-[#101827] transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 transition group-hover:bg-cyan-500/20">
        <FiPlus className="text-3xl text-cyan-400" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">
        Create New Entry
      </h3>

      <p className="mt-2 text-center text-slate-400">
        Start a new draft or post
      </p>
    </button>
  );
};

export default CreateNewCard;