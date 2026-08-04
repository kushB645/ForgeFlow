import { FiEdit2, FiMail, FiMapPin, FiCalendar } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

const ProfileCard = () => {
  const { user } = useAuth();

  return (
    <div className="rounded-2xl border border-slate-800 bg-[#101827] p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <img
            src={user?.avatar || "https://res.cloudinary.com/dbszrqojn/image/upload/v1785848370/download_yelfn0.jpg"}
            alt="avatar"
            className="h-24 w-24 rounded-full object-cover"
          />

          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-white">{user?.fullName}</h2>

            <p className="mt-2 text-slate-400">
              @{user?.username}
            </p>

            <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <FiMail className="text-cyan-400" />
                {user?.email}
              </div>

              <div className="flex items-center gap-2">
                <FiMapPin className="text-cyan-400" />
                {user?.location || "Member"}
              </div>

              <div className="flex items-center gap-2">
                <FiCalendar className="text-cyan-400" />
                {user?.memberSince || "ForgeFlow User"}
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <button className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/20">
          <FiEdit2 />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
