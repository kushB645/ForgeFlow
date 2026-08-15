import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/auth.service";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

    try {
      setLoading(true);

      await loginUser(form);

      toast.success("Login successful");

      navigate("/workspace");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B1220]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <button
          className="w-full rounded-lg bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-5 text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            className="text-purple-400"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;