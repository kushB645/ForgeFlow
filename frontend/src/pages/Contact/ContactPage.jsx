import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiClock,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiHelpCircle,
  FiLinkedin,
  FiTwitter,
  FiGithub,
} from "react-icons/fi";
import toast from "react-hot-toast";
import PublicNavbar from "../../components/Navigation/PublicNavbar";
import PublicFooter from "../../components/Navigation/PublicFooter";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General Feedback",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message received! I'll get back to you shortly.");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#080D18] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <PublicNavbar />

      <main className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
        {/* Glow ambient background */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Hero Section */}
        <section className="px-5 pb-12 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
              <FiMessageSquare /> Direct Contact
            </span>

            <h1 className="mt-8 text-4xl sm:text-6xl font-black tracking-tight leading-[1.1]">
              Get in touch with the{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                creator of ForgeFlow.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
              Have a question about using ForgeFlow, found a bug, or have an idea to make the tool better?
              Send a message directly and I will personally get back to you.
            </p>
          </div>
        </section>

        {/* Contact Content Grid */}
        <section className="px-5 py-6 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-8">
                <div className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7 space-y-6">
                  <h3 className="text-xl font-bold text-white">
                    Direct Contact
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        <FiMail size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Support & Feedback Email
                        </p>
                        <a
                          href="mailto:support@forgeflow.app"
                          className="text-sm font-medium text-white hover:text-cyan-400 transition"
                        >
                          support@forgeflow.app
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        <FiClock size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Direct Response
                        </p>
                        <p className="text-sm font-medium text-white">
                          I review all feedback personally and reply as quickly as possible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Help Card */}
                <div className="rounded-2xl border border-slate-800 bg-[#0E1526] p-7 space-y-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <FiHelpCircle className="text-cyan-400" />
                    Helpful Links
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Check out these pages to learn more about how ForgeFlow works:
                  </p>
                  <div className="space-y-2 pt-1 text-xs">
                    <Link
                      to="/how-it-works"
                      className="block text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      &rarr; Step-by-step How It Works guide
                    </Link>
                    <Link
                      to="/why"
                      className="block text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      &rarr; Why ForgeFlow is built for LinkedIn
                    </Link>
                    <Link
                      to="/about"
                      className="block text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      &rarr; The story behind ForgeFlow
                    </Link>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="flex items-center gap-4 text-slate-400">
                  <span className="text-xs font-medium">Connect:</span>
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/company/getforgeflow"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 hover:text-cyan-400 transition"
                      aria-label="ForgeFlow on LinkedIn"
                    >
                      <FiLinkedin size={16} />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 hover:text-cyan-400 transition"
                      aria-label="Twitter"
                    >
                      <FiTwitter size={16} />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 hover:text-cyan-400 transition"
                      aria-label="GitHub"
                    >
                      <FiGithub size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-800 bg-[#0E1526] p-7 sm:p-10 shadow-xl">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4 animate-fade">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <FiCheckCircle size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Message Sent!
                      </h3>
                      <p className="mx-auto max-w-md text-sm text-slate-400 leading-relaxed">
                        Thank you for reaching out, {form.name}. I've received your message regarding "{form.topic}" and will reply to {form.email} soon.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            email: "",
                            topic: "General Feedback",
                            message: "",
                          });
                        }}
                        className="mt-4 rounded-xl border border-slate-700 bg-slate-900 px-6 py-2.5 text-xs font-semibold text-slate-300 hover:text-white"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Send a Direct Message
                        </h3>
                        <p className="mt-1 text-xs text-slate-400">
                          Fill out the form below and I'll receive it immediately.
                        </p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                            Your Name <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                            Your Email <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                          Topic
                        </label>
                        <select
                          name="topic"
                          value={form.topic}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                        >
                          <option>General Feedback</option>
                          <option>Feature Request</option>
                          <option>Bug Report</option>
                          <option>Help with LinkedIn Connection</option>
                          <option>Other Question</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                          Your Message <span className="text-cyan-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="What's on your mind? Share your thoughts, issues, or suggestions..."
                          className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 leading-relaxed resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50 active:scale-95"
                      >
                        {loading ? (
                          <span>Sending message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FiSend size={15} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default ContactPage;
