import { useState } from "react";
import usePersistentState from "../../hooks/usePersistentState";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import WritingStats from "./WritingStats";
import RichTextEditor from "./RichTextEditor";
import LinkedInPreview from "./LinkedInPreview";
import EditorToolbar from "./EditorToolbar";

import {
  createPost,
  publishPost,
  schedulePost,
} from "../../services/post.service";

import ScheduleModal from "../../components/ScheduleModal/ScheduleModal";

const CustomPost = () => {
  const navigate = useNavigate();

  const [content, setContent] = usePersistentState(
    "forgeflow_custom_content",
    ""
  );

  const [title, setTitle] = usePersistentState("forgeflow_custom_title", "");

  const [media, setMedia] = useState(null);

  const [hashtags, setHashtags] = usePersistentState(
    "forgeflow_custom_hashtags",
    ""
  );

  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [scheduling, setScheduling] = useState(false);

  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  // --------------------------------
  // Build FormData
  // --------------------------------
  const buildFormData = () => {
    const form = new FormData();

    form.append("content", content);

    // Save title if your backend supports it
    if (title.trim()) {
      form.append("title", title);
    }

    if (hashtags.trim()) {
      form.append("hashtags", hashtags);
    }

    if (media) {
      form.append("media", media);
    }

    return form;
  };

  // --------------------------------
  // Save Draft
  // --------------------------------
  const handleSaveDraft = async () => {
    try {
      if (!content.trim()) {
        return toast.error("Post content is empty");
      }

      setSaving(true);

      const form = buildFormData();

      const createdPost = await createPost(form);

      console.log("Custom post created:", createdPost);

      toast.success("Draft saved successfully");

      localStorage.removeItem("forgeflow_custom_content");
      localStorage.removeItem("forgeflow_custom_title");
      localStorage.removeItem("forgeflow_custom_hashtags");

      navigate("/content-library");
    } catch (error) {
      console.log("Save draft error:", error);

      toast.error(error?.response?.data?.message || "Failed to save draft");
    } finally {
      setSaving(false);
    }
  };

  // --------------------------------
  // Publish
  // --------------------------------
  const handlePublish = async () => {
    try {
      if (!content.trim()) {
        return toast.error("Post content is empty");
      }

      setPublishing(true);

      // First create the post
      const form = buildFormData();

      const createdPost = await createPost(form);

      console.log("Post created:", createdPost);

      const postId = createdPost._id;

      // Send it to your existing BullMQ publishing flow
      await publishPost(postId);

      toast.success("Post publishing started");

      navigate("/content-library");
    } catch (error) {
      console.log("Publish error:", error);

      toast.error(error?.response?.data?.message || "Failed to publish post");
    } finally {
      setPublishing(false);
    }
  };

  // --------------------------------
  // Open Schedule Modal
  // --------------------------------
  const handleScheduleClick = () => {
    if (!content.trim()) {
      return toast.error("Post content is empty");
    }

    setIsScheduleOpen(true);
  };

  // --------------------------------
  // Schedule Post
  // --------------------------------
  const handleSchedule = async (scheduledAt) => {
    try {
      if (!content.trim()) {
        return toast.error("Post content is empty");
      }

      setScheduling(true);

      // First create the post
      const form = buildFormData();

      const createdPost = await createPost(form);

      console.log("Post created for scheduling:", createdPost);

      const postId = createdPost._id;

      // Schedule the post
      await schedulePost(postId, {
        scheduledAt,
      });

      toast.success("Post scheduled successfully");

      setIsScheduleOpen(false);

      navigate("/content-library");
    } catch (error) {
      console.log("Schedule error:", error);

      toast.error(error?.response?.data?.message || "Failed to schedule post");
    } finally {
      setScheduling(false);
    }
  };

  // --------------------------------
  // Clear Editor
  // --------------------------------
  const handleClear = () => {
    setTitle("");
    setContent("");
    setHashtags("");
    setMedia(null);

    localStorage.removeItem("forgeflow_custom_content");
    localStorage.removeItem("forgeflow_custom_title");
    localStorage.removeItem("forgeflow_custom_hashtags");

    toast.success("Editor cleared");
  };

  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Hero */}
      <div className="px-2 text-center sm:px-0">
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400 sm:px-4 sm:text-sm">
          Manual Writing
        </span>

        <h1 className="mt-4 text-3xl font-bold text-white sm:mt-5 sm:text-4xl md:text-5xl">
          Custom{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
            Post
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-3xl px-2 text-sm text-slate-400 sm:mt-4 sm:px-0 sm:text-base md:text-lg">
          Write your LinkedIn post from scratch with a distraction-free editor.
        </p>
      </div>

      {/* Writing Stats */}
      <div className="w-full min-w-0">
        <WritingStats content={content} />
      </div>

      {/* Editor + Preview */}
      <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Editor */}
        <div className="min-w-0 lg:col-span-7">
          <div className="h-[550px] sm:h-[600px] lg:h-[650px]">
            <RichTextEditor
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
              media={media}
              setMedia={setMedia}
              hashtags={hashtags}
              setHashtags={setHashtags}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="min-w-0 lg:col-span-5">
          <div className="h-[550px] sm:h-[600px] lg:h-[650px]">
            <LinkedInPreview
              title={title}
              content={content}
              hashtags={hashtags}
              media={media}
            />
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="w-full min-w-0">
        <EditorToolbar
          handleClear={handleClear}
          handleSaveDraft={handleSaveDraft}
          handleSchedule={handleScheduleClick}
          handlePublish={handlePublish}
          saving={saving}
          scheduling={scheduling}
          publishing={publishing}
        />
      </div>

      {/* Schedule Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        onSchedule={handleSchedule}
      />
    </section>
  );
};

export default CustomPost;
