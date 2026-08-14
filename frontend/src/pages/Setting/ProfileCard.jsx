import { useState } from "react";
import { FiEdit2, FiMail, FiMapPin, FiCalendar, FiX } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { updateProfile } from "../../services/settings.service";
import toast from "react-hot-toast";

const ProfileCard = () => {
  const { user, setUser } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    fullName: user?.fullName || "",
    username: user?.username || "",
  });

  const handleOpen = () => {
    setFormData({
      fullName: user?.fullName || "",
      username: user?.username || "",
    });

    setIsOpen(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.username.trim()) {
      return toast.error("Full name and username are required");
    }

    try {
      setSaving(true);

      const updatedUser = await updateProfile({
        fullName: formData.fullName.trim(),
        username: formData.username.trim(),
      });

      setUser(updatedUser);

      toast.success("Profile updated successfully");

      setIsOpen(false);
    } catch (error) {
      console.log("Update profile error:", error);

      toast.error(
        error?.response?.data?.message || "Failed to update profile"
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* Profile Card */}
      <div className="rounded-2xl border border-slate-800 bg-[#101827] p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div className="flex items-center gap-6">

            {/* Avatar */}
            <img
              src={
                user?.avatar ||
                "https://res.cloudinary.com/dbszrqojn/image/upload/v1785848370/download_yelfn0.jpg"
              }
              alt="avatar"
              className="h-24 w-24 rounded-full object-cover"
            />

            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-white">
                {user?.fullName}
              </h2>

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

          {/* Edit Button */}
          <button
            onClick={handleOpen}
            className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            <FiEdit2 />
            Edit Profile
          </button>

        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-[#101827] p-6 shadow-2xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Edit Profile
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Update your profile information.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <FiX size={20} />
              </button>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Username */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                  placeholder="Enter your username"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-slate-800 bg-slate-800/50 px-4 py-3 text-slate-500"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Email cannot be changed here.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 rounded-xl border border-slate-700 px-4 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>

              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;