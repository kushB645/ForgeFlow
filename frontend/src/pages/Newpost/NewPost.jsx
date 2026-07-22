import PostStudio from "./PostStudio";
import LinkedInPreview from "./LinkedInPreview";
import EditorToolbar from "./EditorToolbar";

const NewPost = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
          AI Powered
        </span>

        <h1 className="mt-5 text-5xl font-bold text-white">
          Create with{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
          Generate engaging LinkedIn posts in seconds.
        </p>
      </div>

      <div className="space-y-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-12 items-stretch gap-8">
          <div className="col-span-6">
            <PostStudio />
          </div>

          <div className="col-span-6">
            <LinkedInPreview />
          </div>
        </div>

        {/* Bottom Toolbar */}
        <div>
          <EditorToolbar />
        </div>
      </div>
    </section>
  );
};

export default NewPost;
