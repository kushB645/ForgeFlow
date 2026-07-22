import {
  FiGlobe,
  FiThumbsUp,
  FiMessageCircle,
  FiRepeat,
  FiSend,
} from "react-icons/fi";
import { motion } from "framer-motion";

const LinkedInPreview = () => {
  return (
    <section className="sticky top-24 rounded-2xl border border-slate-800 bg-[#101827] shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <div>
          <h2 className="text-lg font-semibold text-white">LinkedIn Preview</h2>

          <p className="mt-1 text-sm text-slate-400">
            Live preview updates while you edit
          </p>
        </div>

        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          ● Live
        </span>
      </div>

      <div className="p-6">
        <div className="overflow-hidden rounded-xl border border-slate-700 bg-[#0F172A]">
          {/* Profile */}
          <div className="border-b border-slate-700 p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt=""
                className="h-12 w-12 rounded-full"
              />

              <div>
                <h3 className="font-semibold text-white">Kush Bhardwaj</h3>

                <p className="text-sm text-slate-400">Frontend Developer</p>

                <p className="text-xs text-slate-500">Just now • 🌍</p>
              </div>
            </div>
          </div>

          {/* Scrollable Post */}
          <div className="relative">
            <div className="h-[330px] overflow-y-auto scrollbar-hide px-5 py-5">
              <div className="space-y-6">
                <p className="leading-7 text-slate-200">
                  🚀 React Context API completely changed the way I manage state
                  in React.
                </p>

                <p className="leading-7 text-slate-300">
                  Instead of passing props through multiple levels, Context lets
                  components access shared data directly.
                </p>

                <p className="leading-7 text-slate-300">
                  While it's powerful, it's also important not to overuse
                  Context. For large applications, combining Context with custom
                  hooks or state management libraries can produce a cleaner
                  architecture.
                </p>

                <p className="leading-7 text-slate-300">
                  Learning when to use Context—and when not to—is what separates
                  beginners from experienced React developers.
                </p>

                <p className="leading-7 text-slate-300">
                  Small improvements in architecture today can save hours of
                  debugging tomorrow.
                </p>

                <p className="text-[#0A66C2]">
                  #react #frontend #javascript #webdevelopment #100DaysOfCode
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-700">
            <div className="grid grid-cols-4">
              <button className="py-3 text-sm text-slate-400 hover:bg-slate-800">
                👍 Like
              </button>

              <button className="py-3 text-sm text-slate-400 hover:bg-slate-800">
                💬 Comment
              </button>

              <button className="py-3 text-sm text-slate-400 hover:bg-slate-800">
                🔄 Repost
              </button>

              <button className="py-3 text-sm text-slate-400 hover:bg-slate-800">
                ✈ Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPreview;
