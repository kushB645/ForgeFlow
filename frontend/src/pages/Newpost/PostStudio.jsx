import { HiSparkles } from "react-icons/hi2";
import { FiTag, FiPlus } from "react-icons/fi";

const PostStudio = () => {
  return (
    <section className="flex h-[calc(116vh-170px)] flex-col rounded-2xl border border-slate-800 bg-[#101827] shadow-lg">
      {/* Header */}
      <div className="border-b border-slate-800 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15">
            <HiSparkles className="text-2xl text-indigo-400" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">Post Studio</h2>

            <p className="mt-1 text-sm text-slate-400">
              Generate high-performing LinkedIn content.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-10 scrollbar-hide">
        {/* Topic */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Post Topic
          </label>

          <input
            type="text"
            placeholder="e.g. Mastering React Context API"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        {/* Dropdowns */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Tone</label>

            <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none">
              <option>Professional</option>
              <option>Educational</option>
              <option>Storytelling</option>
              <option>Friendly</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Audience
            </label>

            <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none">
              <option>Developers</option>
              <option>Recruiters</option>
              <option>Students</option>
              <option>Founders</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Length</label>

            <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none">
              <option>Short</option>
              <option>Medium</option>
              <option>Long</option>
            </select>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-slate-300">
            Tags
          </label>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
              #react
            </span>

            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
              #frontend
            </span>

            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
              #javascript
            </span>

            <button className="flex items-center gap-1 rounded-full border border-dashed border-slate-600 px-3 py-1 text-xs text-slate-400 hover:border-indigo-500 hover:text-indigo-400">
              <FiPlus size={12} />
              Add Tag
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Additional Instructions
          </label>

          <textarea
            rows={5}
            placeholder="Mention Context API, keep it beginner friendly and end with a question..."
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <label className="mb-3 block text-sm font-medium text-slate-300">
            Featured Image
          </label>

          <label
            htmlFor="image"
            className="flex h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900 hover:border-indigo-500 transition"
          >
            <span className="text-5xl">🖼️</span>

            <p className="mt-4 text-white font-medium">Upload Image</p>

            <p className="text-sm text-slate-400">
              Drag & Drop or Click to Browse
            </p>

            <input id="image" type="file" accept="image/*" className="hidden" />
          </label>
        </div>

        {/* Quick Options */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-indigo-500 hover:text-indigo-400">
            😊 Emojis
          </button>

          <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-indigo-500 hover:text-indigo-400">
            #️⃣ Hashtags
          </button>

          <button className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-indigo-500 hover:text-indigo-400">
            📢 CTA
          </button>
        </div>
      </div>

      {/* Generate */}
      <div className="border-t border-slate-800 p-6">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 py-3.5 font-semibold text-white transition hover:scale-[1.01]">
          <HiSparkles className="text-lg" />
          Generate LinkedIn Post
        </button>
      </div>
    </section>
  );
};

export default PostStudio;
