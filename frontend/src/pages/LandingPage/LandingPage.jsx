import { useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiCalendar,
  FiEdit3,
  FiSend,
  FiStar,
} from "react-icons/fi";
import logo from "../../assets/logo.png";

const features = [
  {
    icon: FiStar,
    title: "AI Content Generation",
    description:
      "Generate compelling LinkedIn posts, refine your tone, and format content with AI.",
  },
  {
    icon: FiEdit3,
    title: "Write Your Way",
    description:
      "Take full manual control with your editor. Add images, format text, and craft your unique voice.",
  },
  {
    icon: FiCalendar,
    title: "Smart Scheduling",
    description:
      "Plan your content calendar effortlessly and schedule posts for the right publishing time.",
  },
  {
    icon: FiSend,
    title: "Automatic Publishing",
    description:
      "Set it and forget it. ForgeFlow automatically publishes your scheduled content to LinkedIn.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen overflow-hidden bg-[#080D18] text-white">
      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/70 bg-[#080D18]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="ForgeFlow Logo"
                className="h-8 w-8 object-contain"
              />

              <span className="text-xl font-bold tracking-tight">
                Forge<span className="text-cyan-400">Flow</span>
              </span>
            </div>
          </button>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="absolute left-1/2 top-24 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-medium text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            AI-Powered LinkedIn Content Workspace
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Turn your ideas into{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              content that gets noticed.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Create, refine, schedule, and publish LinkedIn content from one
            powerful workspace. Use AI when you need speed, or write manually
            when you want complete control.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get Started
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-xl border border-slate-700 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400/60 hover:bg-slate-900"
            >
              Sign In
            </button>
          </div>

          {/* Workflow */}
          <div className="mt-9 flex flex-wrap justify-center gap-3 text-xs font-medium tracking-wide text-slate-500 sm:gap-5">
            <span>Create</span>
            <span>•</span>
            <span>Refine</span>
            <span>•</span>
            <span>Schedule</span>
            <span>•</span>
            <span>Publish</span>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-[#101827] p-2 shadow-2xl shadow-cyan-500/5 sm:rounded-3xl sm:p-3">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

              <div className="ml-3 rounded-md bg-slate-900 px-4 py-1 text-[10px] text-slate-500">
                workspace.forgeflow.app
              </div>
            </div>

            {/* Fake dashboard preview */}
            <div className="grid min-h-[420px] grid-cols-12 gap-3 bg-[#0B1220] p-4">
              {/* Sidebar */}
              <div className="hidden rounded-xl border border-slate-800 bg-[#101827] p-3 sm:col-span-2 sm:block">
                <div className="mb-6 text-xs font-bold text-white">
                  Forge<span className="text-cyan-400">Flow</span>
                </div>

                <div className="space-y-2 text-[10px] text-slate-500">
                  <div className="rounded-md bg-cyan-400/10 px-2 py-2 text-cyan-400">
                    Workspace
                  </div>
                  <div className="px-2 py-2">New Post</div>
                  <div className="px-2 py-2">Content Library</div>
                  <div className="px-2 py-2">Schedule</div>
                  <div className="px-2 py-2">Settings</div>
                </div>
              </div>

              {/* Content */}
              <div className="col-span-12 space-y-3 sm:col-span-7">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-800 bg-[#101827] p-4">
                    <p className="text-[10px] text-slate-500">Drafts</p>
                    <p className="mt-2 text-xl font-bold text-white">12</p>
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-[#101827] p-4">
                    <p className="text-[10px] text-slate-500">Scheduled</p>
                    <p className="mt-2 text-xl font-bold text-cyan-400">08</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-[#101827] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs font-semibold text-white">
                      Recent Posts
                    </p>

                    <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[9px] text-cyan-400">
                      Active
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-3"
                      >
                        <div>
                          <div className="h-2 w-32 rounded bg-slate-700" />
                          <div className="mt-2 h-1.5 w-20 rounded bg-slate-800" />
                        </div>

                        <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] text-emerald-400">
                          Ready
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI + Preview */}
              <div className="col-span-12 space-y-3 sm:col-span-3">
                <div className="rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-4">
                  <p className="text-xs font-semibold text-white">
                    Create with AI
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-slate-400">
                    Generate a LinkedIn post from your next idea.
                  </p>

                  <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-cyan-400 to-violet-400 py-2 text-[10px] font-bold text-slate-950">
                    Generate
                  </button>
                </div>

                <div className="rounded-xl border border-slate-800 bg-[#101827] p-4">
                  <p className="text-xs font-semibold text-white">
                    Live Preview
                  </p>

                  <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900 p-3">
                    <div className="flex gap-2">
                      <div className="h-7 w-7 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />

                      <div>
                        <div className="h-2 w-20 rounded bg-slate-600" />
                        <div className="mt-2 h-1.5 w-14 rounded bg-slate-800" />
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="h-1.5 w-full rounded bg-slate-700" />
                      <div className="h-1.5 w-4/5 rounded bg-slate-700" />
                      <div className="h-1.5 w-3/5 rounded bg-slate-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Powerful Workspace
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to manage your LinkedIn content.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-800 bg-[#101827] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-cyan-400 transition group-hover:border-cyan-400/40">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workspace Showcase */}
      <section className="bg-[#101827] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your content.{" "}
            <span className="text-cyan-400">One powerful workspace.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Manage drafts, scheduled posts, and AI generations in a single,
            unified command center.
          </p>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-700 bg-[#0B1220] p-2 shadow-2xl">
            <div className="rounded-xl border border-slate-800 bg-[#101827] p-5">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="h-4 w-20 rounded bg-slate-700" />
                  <div className="h-20 rounded-xl border border-slate-800 bg-slate-900" />
                  <div className="h-20 rounded-xl border border-slate-800 bg-slate-900" />
                  <div className="h-20 rounded-xl border border-slate-800 bg-slate-900" />
                </div>

                <div className="space-y-3">
                  <div className="h-4 w-24 rounded bg-slate-700" />
                  <div className="h-20 rounded-xl border border-cyan-500/20 bg-cyan-500/5" />
                  <div className="h-20 rounded-xl border border-slate-800 bg-slate-900" />
                  <div className="h-20 rounded-xl border border-slate-800 bg-slate-900" />
                </div>

                <div className="space-y-3">
                  <div className="h-4 w-28 rounded bg-slate-700" />
                  <div className="h-32 rounded-xl border border-violet-500/20 bg-violet-500/5" />
                  <div className="h-24 rounded-xl border border-slate-800 bg-slate-900" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 py-28 text-center sm:px-8">
        <div className="absolute left-1/2 top-1/2 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-5xl font-bold leading-tight sm:text-6xl">
            Your next LinkedIn post{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              starts here.
            </span>
          </h2>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="rounded-xl bg-cyan-400 px-8 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get Started Now
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-xl border border-slate-700 px-8 py-3.5 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-slate-900"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <div>
            <span className="font-semibold text-slate-300">ForgeFlow</span>
            <span className="ml-2">Content Command Center</span>
          </div>

          <p>© 2026 ForgeFlow. Built for creators and developers.</p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
