import WritingStats from "./WritingStats";
import RichTextEditor from "./RichTextEditor";
import LinkedInPreview from "./LinkedInPreview";
import EditorToolbar from "./EditorToolbar";

const CustomPost = () => {
  return (
    <section className="space-y-8">
      {/* Hero */}
      <div className="text-center">
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
          Manual Writing
        </span>

        <h1 className="mt-5 text-5xl font-bold text-white">
          Custom{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
            Post
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
          Write your LinkedIn post from scratch with a distraction-free editor.
        </p>
      </div>

      {/* Stats */}
      <WritingStats />

      {/* Editor + Preview */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7">
          <RichTextEditor />
        </div>

        <div className="col-span-5">
          <LinkedInPreview />
        </div>
      </div>

      {/* Bottom Toolbar */}
      <EditorToolbar />
    </section>
  );
};

export default CustomPost;