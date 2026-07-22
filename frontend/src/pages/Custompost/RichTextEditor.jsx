import FormattingToolbar from "./FormattingToolbar";
import { FiImage, FiPaperclip, FiSmile } from "react-icons/fi";

const RichTextEditor = () => {
  return (
    <section className="flex h-[calc(100vh-170px)] flex-col rounded-2xl border border-slate-800 bg-[#101827] shadow-lg">
      {/* Header */}
      <div className="border-b border-slate-800 p-6">
        <h2 className="text-2xl font-bold text-white">Custom Post Editor</h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Write, edit, and preview your LinkedIn content before publishing.
        </p>
      </div>

      {/* Toolbar */}
      <FormattingToolbar />

      {/* Title */}
      <div className="border-b border-slate-800 p-6">
        <input
          type="text"
          placeholder="Post Title..."
          className="w-full bg-transparent text-3xl font-bold text-white placeholder:text-slate-500 focus:outline-none"
        />
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-hidden p-8">
        <textarea
          placeholder="Start writing your LinkedIn post..."
          className="h-full w-full resize-none bg-transparent text-base leading-8 text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
      </div>

      {/* Bottom Actions */}
      <div className="flex items-center justify-between border-t border-slate-800 p-5">
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400">
            <FiImage />
            Image
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400">
            <FiPaperclip />
            Attachment
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400">
            <FiSmile />
            Emoji
          </button>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Markdown Supported
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
