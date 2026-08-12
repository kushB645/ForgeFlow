import FormattingToolbar from "./FormattingToolbar";
import { FiImage, FiPaperclip, FiSmile } from "react-icons/fi";

const RichTextEditor = ({
  title,
  setTitle,
  content,
  setContent,
  media,
  setMedia,
  hashtags,
  setHashtags,
}) => {
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setMedia(file);
  };

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#101827] shadow-lg">

      {/* Header */}
      <div className="shrink-0 border-b border-slate-800 p-5">
        <h2 className="text-2xl font-bold text-white">
          Custom Post Editor
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Write, edit, and preview your LinkedIn content before publishing.
        </p>
      </div>

      {/* Formatting Toolbar */}
      <div className="shrink-0">
        <FormattingToolbar
          content={content}
          setContent={setContent}
        />
      </div>

      {/* Title */}
      <div className="shrink-0 border-b border-slate-800 px-5 py-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title..."
          className="w-full bg-transparent text-3xl font-bold text-white placeholder:text-slate-500 focus:outline-none"
        />
      </div>

      {/* Hashtags */}
      <div className="shrink-0 border-b border-slate-800 px-5 py-3">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Hashtags
        </label>

        <input
          type="text"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
          placeholder="JavaScript, React, FrontendDevelopment"
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />

        <p className="mt-1 text-xs text-slate-500">
          Separate hashtags with commas. # is optional.
        </p>
      </div>

      {/* Editor */}
      <div className="min-h-0 flex-1 overflow-hidden p-5">
        <textarea
          id="linkedin-editor"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={3000}
          placeholder="Start writing your LinkedIn post..."
          className="h-full w-full resize-none overflow-y-auto bg-transparent text-base leading-7 text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
      </div>

      {/* Bottom Actions */}
      <div className="flex shrink-0 items-center justify-between border-t border-slate-800 px-4 py-3">

        <div className="flex gap-3">

          {/* Image */}
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400">
            <FiImage />

            Image

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Attachment */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <FiPaperclip />
            Attachment
          </button>

          {/* Emoji */}
          <button
            type="button"
            onClick={() => setContent((prev) => `${prev} 😊`)}
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <FiSmile />
            Emoji
          </button>

        </div>

        <div className="text-right">
          <p className="max-w-[180px] truncate text-xs uppercase tracking-wider text-slate-500">
            {media ? media.name : "No image selected"}
          </p>

          <p className="mt-1 text-xs font-medium text-emerald-400">
            Auto Saved
          </p>
        </div>

      </div>
    </section>
  );
};

export default RichTextEditor;