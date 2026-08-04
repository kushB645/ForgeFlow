import { useState } from "react";
import PostStudio from "./PostStudio";
import LinkedInPreview from "./LinkedInPreview";
import EditorToolbar from "./EditorToolbar";
import { generateLinkedInPost } from "../../services/ai.service";
import toast from "react-hot-toast";

const NewPost = () => {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      if (!formData.topic.trim()) {
        return toast.error("Topic is required");
      }

      setLoading(true);

      const data = await generateLinkedInPost({
        topic: formData.topic,
        tone: formData.tone,
        audience: formData.audience,
        length: formData.length,
        difficulty: "Intermediate",
        style: "Educational",
        instructions: formData.instructions,
      });

      setFormData((prev) => ({
        ...prev,
        content: data.content,
        hashtags: data.hashtags,
      }));

      toast.success("Post generated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to generate post");
    } finally {
      setLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    topic: "",
    tone: "Professional",
    audience: "Developers",
    length: "Medium",
    instructions: "",
    content: "",
    hashtags: [],
    media: null,
  });
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
            <PostStudio
              formData={formData}
              setFormData={setFormData}
              handleGenerate={handleGenerate}
              loading={loading}
            />
          </div>

          <div className="col-span-6">
            <LinkedInPreview formData={formData} />
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
