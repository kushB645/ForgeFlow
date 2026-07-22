import { FiChevronRight } from "react-icons/fi";

const SettingCard = ({
  icon,
  title,
  description,
  items = [],
  buttonText,
}) => {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-[#101827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
          {icon}
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">
            {title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-slate-800"></div>

      {/* Options */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 transition hover:border-cyan-500/30 hover:bg-slate-900"
          >
            <span className="text-sm text-slate-300">
              {item}
            </span>

            <FiChevronRight className="text-slate-500 transition group-hover:text-cyan-400" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 py-3 font-semibold text-white transition hover:opacity-90">
        {buttonText}
      </button>
    </div>
  );
};

export default SettingCard;