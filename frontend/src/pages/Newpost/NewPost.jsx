import { useEffect, useState } from "react";
import usePersistentState from "../../hooks/usePersistentState";
import PostStudio from "./PostStudio";
import LinkedInPreview from "./LinkedInPreview";
import EditorToolbar from "./EditorToolbar";
import { generateLinkedInPost } from "../../services/ai.service";
import { getAIPreferences } from "../../services/settings.service";
import toast from "react-hot-toast";
import {
  createPost,
  updatePost,
  schedulePost,
  publishPost,
} from "../../services/post.service";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../../services/post.service";
import ScheduleModal from "../../components/ScheduleModal/ScheduleModal";

const NewPost = () => {
  const { postId } = useParams();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = usePersistentState("forgeflow_ai_post", {
    topic: "",
    audience: "Developers",
    instructions: "",
    content: "",
    hashtags: [],
  });

  const [hashtagsInput, setHashtagsInput] = usePersistentState(
    "forgeflow_ai_hashtags_input",
    ""
  );

  const [media, setMedia] = useState(null);

  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const [publishing, setPublishing] = useState(false);

  const [aiPreferences, setAIPreferences] = useState({
    model: "Gemini AI",
    tone: "Professional",
    creativity: "Medium",
    length: "Medium",
  });

  const navigate = useNavigate();

  const clearAIDraft = () => {
    localStorage.removeItem("forgeflow_ai_post");
    localStorage.removeItem("forgeflow_ai_hashtags_input");
  };

  const fetchPost = async () => {
    try {
      const post = await getPostById(postId);

      setFormData({
        topic: post.topic || "",
        tone: post.tone || "Professional",
        audience: post.audience || "Developers",
        length: post.length || "Medium",
        instructions: post.instructions || "",
        content: post.content || "",
        hashtags: post.hashtags || [],
      });

      setHashtagsInput((post.hashtags || []).join(", "));
    } catch (error) {
      console.log(error);
      toast.error("Failed to load post");
    }
  };

  useEffect(() => {
    const loadAIPreferences = async () => {
      try {
        const data = await getAIPreferences();

        setAIPreferences(data);

        if (!postId) {
          setFormData((prev) => ({
            ...prev,
            tone: data.tone || "Professional",
            length: data.length || "Medium",
          }));
        }
      } catch (error) {
        console.log("AI preferences error:", error);
      }
    };

    loadAIPreferences();

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const handleGenerate = async () => {
    try {
      if (!formData.topic.trim()) {
        return toast.error("Topic is required");
      }

      setLoading(true);

      const data = await generateLinkedInPost({
        topic: formData.topic,
        tone: aiPreferences.tone,
        audience: formData.audience,
        length: aiPreferences.length,
        difficulty: "Intermediate",
        style: "Educational",
        creativity: aiPreferences.creativity,
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

      toast.error(error?.response?.data?.message || "Failed to generate post");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = async () => {
    try {
      if (!formData.content.trim()) {
        return toast.error("Post content is empty");
      }

      const form = new FormData();

      form.append("content", formData.content);
      form.append("hashtags", formData.hashtags.join(","));

      if (media) {
        form.append("media", media);
      }

      // Updating an existing post
      if (postId) {
        const updatedPost = await updatePost(postId, form);

        console.log("Updated post:", updatedPost);

        toast.success("Draft updated successfully");

        clearAIDraft();

        return updatedPost;
      }

      // Creating a new post
      const createdPost = await createPost(form);

      console.log("Created post:", createdPost);

      toast.success("Draft created successfully");

      clearAIDraft();

      navigate(`/new-post/${createdPost._id}`);

      return createdPost;
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Failed to save draft");
    }
  };

  const handlePublish = async () => {
    try {
      if (!formData.content.trim()) {
        return toast.error("Post content is empty");
      }

      setPublishing(true);

      let currentPostId = postId;

      // If this is a new post, save it first
      if (!currentPostId) {
        const form = new FormData();

        form.append("content", formData.content);
        form.append("hashtags", formData.hashtags.join(","));

        if (media) {
          form.append("media", media);
        }

        const createdPost = await createPost(form);

        currentPostId = createdPost._id;
      } else {
        // Save latest changes before publishing
        const form = new FormData();

        form.append("content", formData.content);
        form.append("hashtags", formData.hashtags.join(","));

        if (media) {
          form.append("media", media);
        }

        await updatePost(currentPostId, form);
      }

      // Send post to BullMQ
      await publishPost(currentPostId);

      toast.success("Post publishing started");

      clearAIDraft();

      navigate("/content-library");
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Failed to publish post");
    } finally {
      setPublishing(false);
    }
  };

  const handleSchedule = async (scheduledAt) => {
    try {
      if (!formData.content.trim()) {
        return toast.error("Post content is empty");
      }

      let currentPostId = postId;

      // Create post if it doesn't exist
      if (!currentPostId) {
        const form = new FormData();

        form.append("content", formData.content);
        form.append("hashtags", formData.hashtags.join(","));

        if (media) {
          form.append("media", media);
        }

        const createdPost = await createPost(form);

        currentPostId = createdPost._id;
      } else {
        // Save latest changes
        const form = new FormData();

        form.append("content", formData.content);
        form.append("hashtags", formData.hashtags.join(","));

        if (media) {
          form.append("media", media);
        }

        await updatePost(currentPostId, form);
      }

      // Schedule the post
      await schedulePost(currentPostId, {
        scheduledAt,
      });

      toast.success("Post scheduled successfully");

      clearAIDraft();

      setIsScheduleOpen(false);

      navigate("/schedule");
    } catch (error) {
      console.log("Schedule error:", error);

      toast.error(error?.response?.data?.message || "Failed to schedule post");
    }
  };
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
              media={media}
              setMedia={setMedia}
              hashtagsInput={hashtagsInput}
              setHashtagsInput={setHashtagsInput}
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
          <EditorToolbar
            handleSaveDraft={handleSaveDraft}
            handleSchedule={() => setIsScheduleOpen(true)}
            handlePublish={handlePublish}
            publishing={publishing}
          />
        </div>
      </div>
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        onSchedule={handleSchedule}
      />
    </section>
  );
};

export default NewPost;
