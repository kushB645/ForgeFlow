import { FiGlobe } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const LinkedInPreview = ({ formData }) => {
  const { user } = useAuth();

  console.log(user);

  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (!formData.media) {
      setPreviewUrl("");
      return;
    }

    const url = URL.createObjectURL(formData.media);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [formData.media]);

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
                src={user?.avatar}
                alt={user?.fullName || "Profile"}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div className="min-w-0">
                <h3 className="truncate font-semibold text-white">
                  {user?.fullName || "Your Name"}
                </h3>

                <p className="text-sm text-slate-400">
                  @{user?.username || "username"}
                </p>

                <p className="text-xs text-slate-500">Just now • 🌍</p>
              </div>
            </div>
          </div>

          {/* Scrollable Post */}
          <div className="relative">
            <div className="h-[330px] overflow-y-auto scrollbar-hide px-5 py-5">
              <div className="space-y-6">
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mt-5 w-full rounded-xl object-cover"
                  />
                )}

                <p className="whitespace-pre-wrap leading-7 text-slate-200">
                  {formData.content ||
                    "Your generated LinkedIn post will appear here..."}
                </p>

                {formData.hashtags?.length > 0 && (
                  <p className="text-[#0A66C2]">
                    {formData.hashtags
                      .map((tag) => (tag.startsWith("#") ? tag : `#${tag}`))
                      .join(" ")}
                  </p>
                )}
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
