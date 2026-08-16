import FormattingToolbar from "./FormattingToolbar";
import { FiImage, FiPaperclip, FiSmile } from "react-icons/fi";

const RichTextEditor = ({
  title,
  setTitle,
  content,
  setContent,
  media,
  setMedia,
  attachment,
  setAttachment,
  hashtags,
  setHashtags,
}) => {
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setMedia(file);
  };

  const handleAttachmentChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setAttachment(file);
  };

  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#101827] shadow-lg">
      {/* Header */}
      <div className="shrink-0 border-b border-slate-800 p-5">
        <h2 className="text-2xl font-bold text-white">Custom Post Editor</h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Write, edit, and preview your LinkedIn content before publishing.
        </p>
      </div>

      {/* Formatting Toolbar */}
      <div className="shrink-0">
        <FormattingToolbar content={content} setContent={setContent} />
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
      <div className="flex flex-col gap-2 border-t border-slate-800 px-2 py-3 sm:px-4 lg:flex-row lg:items-center lg:justify-between lg:gap-3">
        {/* Buttons */}
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2 lg:gap-3">
          {/* Image */}
          <label className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border border-slate-700 px-2.5 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 sm:gap-2 sm:px-3 sm:text-sm lg:px-4">
            <FiImage />
            <span>Image</span>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Attachment */}
          <label className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl border border-slate-700 px-2.5 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 sm:gap-2 sm:px-3 sm:text-sm lg:px-4">
            <FiPaperclip />
            <span>Attachment</span>

            <input
              type="file"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleAttachmentChange}
              className="hidden"
            />
          </label>

          {/* Emoji */}
          <button
            type="button"
            onClick={() => setContent((prev) => `${prev} 😊`)}
            className="flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-700 px-2.5 py-2 text-xs font-medium text-slate-300 transition hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 sm:gap-2 sm:px-3 sm:text-sm lg:px-4"
          >
            <FiSmile />
            <span>Emoji</span>
          </button>
        </div>

        {/* File Status */}
        <div className="flex min-w-0 items-center justify-end gap-2 text-right lg:block">
          <p className="max-w-[180px] truncate text-[9px] uppercase tracking-wider text-slate-500 sm:text-[10px] lg:text-xs">
            {attachment
              ? attachment.name
              : media
                ? media.name
                : "No file selected"}
          </p>

          <p className="text-[9px] font-medium text-emerald-400 sm:text-xs lg:mt-1">
            Auto Saved
          </p>
        </div>
      </div>
    </section>
  );
};

export default RichTextEditor;
