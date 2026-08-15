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

      alert(error.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1220]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-slate-900 p-8"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Register
        </h1>

        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="mb-6 w-full text-white"
        />

        <button className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700">
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="mt-5 text-center text-slate-400">
          Already have an account?{" "}
          <Link className="text-purple-400" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
