import {
  FiLinkedin,
  FiCheckCircle,
  FiRefreshCw,
  FiExternalLink,
  FiLogOut,
} from "react-icons/fi";

const IntegrationCard = ({
  connected = false,
  account = null,
  loading = false,
  onConnect,
  onDisconnect,
}) => {
  const profileUrl = account?.profileUrl || "";

  const profileName = account?.linkedinId
    ? "LinkedIn Account"
    : "No account connected";

  const expiresAt = account?.expiresAt
    ? new Date(account.expiresAt).toLocaleDateString()
    : "Unknown";

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827] p-6 transition-all duration-300 hover:border-cyan-500/30">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
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

        {/* Status */}
        <span
          className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            connected
              ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
              : "border border-red-500/20 bg-red-500/10 text-red-400"
          }`}
        >
          <FiCheckCircle />

          {loading
            ? "Checking..."
            : connected
            ? "Connected"
            : "Not Connected"}
        </span>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="h-4 w-40 animate-pulse rounded bg-slate-800" />

          <div className="mt-3 h-3 w-56 animate-pulse rounded bg-slate-800" />

          <div className="mt-6 h-3 w-32 animate-pulse rounded bg-slate-800" />
        </div>
      ) : connected ? (
        <>
          {/* Account */}
          <div className="mt-8 flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            {account?.profilePicture ? (
              <img
                src={account.profilePicture}
                alt="LinkedIn profile"
                className="h-14 w-14 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0077B5]/20 text-[#0077B5]">
                <FiLinkedin size={24} />
              </div>
            )}

            <div>
              <p className="text-sm text-slate-400">
                Connected Account
              </p>

              <h3 className="mt-1 font-semibold text-white">
                {profileName}
              </h3>
            </div>
          </div>

          {/* Token information */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">
                Connection Status
              </p>

              <h3 className="mt-2 font-semibold text-emerald-400">
                Active
              </h3>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <p className="text-sm text-slate-400">
                Token Expires
              </p>

              <h3 className="mt-2 font-semibold text-white">
                {expiresAt}
              </h3>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
            <h4 className="font-semibold text-cyan-400">
              Connected Features
            </h4>

            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Publish posts directly to LinkedIn</li>
              <li>• Schedule future posts</li>
              <li>• Manage publishing queue</li>
              <li>• Track publishing status</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onConnect}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              <FiRefreshCw />
              Reconnect
            </button>

            {profileUrl && (
              <a
                href={profileUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                <FiExternalLink />
                View Profile
              </a>
            )}

            <button
              type="button"
              onClick={onDisconnect}
              className="flex items-center gap-2 rounded-xl border border-red-500/30 px-5 py-3 text-red-400 transition hover:bg-red-500/10"
            >
              <FiLogOut />
              Disconnect
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Not Connected */}
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center">
            <FiLinkedin className="mx-auto text-4xl text-slate-600" />

            <h3 className="mt-4 text-lg font-semibold text-white">
              Connect your LinkedIn account
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
              Connect LinkedIn to publish and schedule your
              ForgeFlow posts automatically.
            </p>
          </div>

          <button
            type="button"
            onClick={onConnect}
            className="mt-6 w-full rounded-xl bg-[#0077B5] py-3 font-semibold text-white transition hover:bg-[#006399]"
          >
            Connect LinkedIn
          </button>
        </>
      )}
    </div>
  );
};

export default IntegrationCard;