import {
  FiGlobe,
  FiThumbsUp,
  FiMessageCircle,
  FiRepeat,
  FiSend,
} from "react-icons/fi";

const LinkedInPreview = ({ title, content, hashtags, media }) => {
  const hashtagList = hashtags
    ? hashtags
        .split(",")
        .map((tag) => tag.trim().replace(/^#/, ""))
        .filter(Boolean)
    : [];

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#101827] shadow-lg">
      {/* Header */}
      <div className="shrink-0 border-b border-slate-800 p-5">
        <h2 className="text-xl font-semibold text-white">LinkedIn Preview</h2>

        <p className="mt-1 text-sm text-slate-400">
          Live preview of your post.
        </p>
      </div>

      {/* Preview */}
      <div className="min-h-0 flex-1 overflow-y-auto p-5">
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-lg font-bold text-white">
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
          <div className="mt-5">
            {title && (
              <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
            )}

            <p className="whitespace-pre-wrap leading-7 text-slate-300">
              {content || "Start writing your LinkedIn post..."}
            </p>

            {/* Hashtags */}
            {hashtagList.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {hashtagList.map((tag, index) => (
                  <span
                    key={`${tag}-${index}`}
                    className="text-sm text-cyan-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          {media ? (
            <img
              src={URL.createObjectURL(media)}
              alt="Post"
              className="mt-5 h-48 w-full rounded-xl object-cover"
            />
          ) : (
            <div className="mt-5 flex h-48 items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-800 text-slate-500">
              Featured Image Preview
            </div>
          )}

          {/* Stats */}
          <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4 text-sm text-slate-500">
            <span>👍 142 Likes</span>

            <span>18 Comments • 7 Reposts</span>
          </div>

          {/* Actions */}
          <div className="mt-3 grid grid-cols-3 border-t border-slate-800 pt-3">
            {/* Like */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              <FiThumbsUp size={15} className="shrink-0" />
              <span>Like</span>
            </button>

            {/* Comment */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              <FiMessageCircle size={15} className="shrink-0" />
              <span>Comment</span>
            </button>

            {/* Send */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-cyan-400"
            >
              <FiSend size={15} className="shrink-0" />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPreview;
