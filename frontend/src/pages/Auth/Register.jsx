import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/auth.service";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("fullName", form.fullName);
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("password", form.password);

    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      setLoading(true);

      await registerUser(formData);

      toast.success("Registration successful");

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1220] px-4 py-8 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-slate-800 bg-[#101827] p-5 shadow-2xl sm:p-7 md:p-8"
      >
        {/* Header */}
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Start creating better LinkedIn content with ForgeFlow
          </p>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 sm:text-base"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Username
          </label>

          <input
            id="username"
            name="username"
            placeholder="Choose a username"
            value={form.username}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 sm:text-base"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 sm:text-base"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 sm:text-base"
          />
        </div>

        {/* Avatar */}
        <div className="mb-6">
          <label
            htmlFor="avatar"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Profile Picture
            <span className="ml-1 text-slate-600">(optional)</span>
          </label>

          <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 p-3">
            <input
              id="avatar"
              type="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files?.[0] || null)}
              className="w-full text-xs text-slate-400 file:mr-3 file:rounded-lg file:border-0 file:bg-cyan-400/10 file:px-3 file:py-2 file:text-xs file:font-medium file:text-cyan-400 hover:file:bg-cyan-400/20 sm:text-sm"
            />
          </div>

          {avatar && (
            <p className="mt-2 truncate text-xs text-slate-500">
              Selected: {avatar.name}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:py-3.5 sm:text-base"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-slate-400 sm:text-base">
          Already have an account?{" "}
          <Link
            className="font-medium text-cyan-400 transition hover:text-cyan-300"
            to="/login"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
