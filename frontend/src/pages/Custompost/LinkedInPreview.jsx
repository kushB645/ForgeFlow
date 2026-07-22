import {
  FiGlobe,
  FiThumbsUp,
  FiMessageCircle,
  FiRepeat,
  FiSend,
} from "react-icons/fi";

const LinkedInPreview = () => {
  return (
    <section className="sticky top-24 h-[calc(100vh-170px)] rounded-2xl border border-slate-800 bg-[#101827] shadow-lg">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="border-b border-slate-800 p-6">
          <h2 className="text-xl font-semibold text-white">LinkedIn Preview</h2>

          <p className="mt-1 text-sm text-slate-400">
            Live preview of your post.
          </p>
        </div>

        {/* Preview Card */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-lg font-bold text-white">
                KB
              </div>

              <div>
                <h3 className="font-semibold text-white">Kush Bhardwaj</h3>

                <p className="text-sm text-slate-400">
                  Frontend Developer • 3rd Year CSE Student
                </p>

                <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <span>Now</span>
                  <FiGlobe />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold text-white">
                Your Post Title
              </h2>

              <p className="whitespace-pre-wrap leading-7 text-slate-300">
                Start writing your LinkedIn post... Your content will appear
                here as you type. Use this preview to see how your post will
                look before publishing.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="mt-6 flex h-56 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-800 text-slate-500">
              Featured Image Preview
            </div>

            {/* Stats */}
            <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-sm text-slate-500">
              <span>👍 142 Likes</span>
              <span>18 Comments • 7 Reposts</span>
            </div>

            {/* Actions */}
            <div className="mt-4 grid grid-cols-4 border-t border-slate-800 pt-3">
              <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400">
                <FiThumbsUp />
                Like
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400">
                <FiMessageCircle />
                Comment
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400">
                <FiRepeat />
                Repost
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg py-2 text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400">
                <FiSend />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPreview;
