import {
  FiLinkedin,
  FiCheckCircle,
  FiRefreshCw,
  FiExternalLink,
} from "react-icons/fi";

const IntegrationCard = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827] p-6 transition-all duration-300 hover:border-cyan-500/30">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0077B5]/15 text-[#0077B5]">
            <FiLinkedin size={28} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              LinkedIn Integration
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Connect your LinkedIn account for automated publishing.
            </p>
          </div>
        </div>

        <span className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          <FiCheckCircle />
          Connected
        </span>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-sm text-slate-400">
            Connected Account
          </p>

          <h3 className="mt-2 font-semibold text-white">
            kush.bhardwaj
          </h3>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-sm text-slate-400">
            Last Sync
          </p>

          <h3 className="mt-2 font-semibold text-white">
            2 hours ago
          </h3>
        </div>
      </div>

      {/* Information */}
      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
        <h4 className="font-semibold text-cyan-400">
          Connected Features
        </h4>

        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li>• Publish posts directly to LinkedIn</li>
          <li>• Schedule future posts</li>
          <li>• Sync published content</li>
          <li>• Manage publishing queue</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-wrap gap-3">
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-semibold text-white transition hover:opacity-90">
          <FiRefreshCw />
          Reconnect
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400">
          <FiExternalLink />
          View Profile
        </button>
      </div>
    </div>
  );
};

export default IntegrationCard;