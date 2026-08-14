import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterTabs from "./FilterTabs";
import CreateNewCard from "./CreateNewCard";
import PostCard from "../../components/PostCard/PostCard";
import toast from "react-hot-toast";
import {
  getPosts,
  deletePost,
  duplicatePost,
  cancelScheduledPost,
  reschedulePost,
} from "../../services/post.service";
import ScheduleModal from "../../components/ScheduleModal/ScheduleModal.jsx";

const ContentLibrary = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const [activeFilter, setActiveFilter] = useState("all");

  const fetchPosts = async (status = "all") => {
    try {
      setLoading(true);

      const data = await getPosts({
        status,
      });

      console.log("Posts response:", data);

      setPosts(data.posts);
      setPagination(data.pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleDelete = async (postId) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this post?"
      );

      if (!confirmed) return;

      await deletePost(postId);

      setPosts((prev) => prev.filter((post) => post._id !== postId));

      toast.success("Post deleted successfully");
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Failed to delete post");
    }
  };

  const handleEdit = (post) => {
    navigate(`/new-post/${post._id}`);
  };

  const handleDuplicate = async (post) => {
    try {
      const duplicatedPost = await duplicatePost(post._id);

      toast.success("Post duplicated successfully");

      navigate(`/new-post/${duplicatedPost._id}`);
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Failed to duplicate post");
    }
  };

  const handleCreateNew = () => {
    navigate("/new-post");
  };

  const handleReschedule = (post) => {
    setSelectedPost(post);
    setIsRescheduleOpen(true);
  };

  const handleRescheduleSubmit = async (scheduledAt) => {
    try {
      if (!selectedPost) return;

      const updatedPost = await reschedulePost(selectedPost._id, {
        scheduledAt,
      });

      setPosts((prev) =>
        prev.map((post) => (post._id === updatedPost._id ? updatedPost : post))
      );

      toast.success("Post rescheduled successfully");

      setIsRescheduleOpen(false);
      setSelectedPost(null);
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "Failed to reschedule post"
      );
    }
  };

  const handleCancelSchedule = async (post) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to cancel this scheduled post?"
      );

      if (!confirmed) return;

      const updatedPost = await cancelScheduledPost(post._id);

      setPosts((prev) =>
        prev.map((item) => (item._id === updatedPost._id ? updatedPost : item))
      );

      toast.success("Schedule cancelled");
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "Failed to cancel schedule"
      );
    }
  };

  const getScheduleDate = (date) => {
    if (!date) return "";

    const value = new Date(date);

    return value.toISOString().split("T")[0];
  };

  const getScheduleTime = (date) => {
    if (!date) return "";

    const value = new Date(date);

    return value.toTimeString().slice(0, 5);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-white">Loading...</div>
    );
  }

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Content Library</h1>

          <p className="mt-3 text-slate-400">
            Manage and organize your elite content drafts and assets.
          </p>
        </div>

        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Posts */}
      <div className="grid grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <div className="col-span-3 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
            <h2 className="text-2xl font-semibold text-white">
              No {activeFilter === "all" ? "" : activeFilter} posts yet
            </h2>

            <p className="mt-2 text-slate-400">
              Create your first post to see it here.
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onDuplicate={handleDuplicate}
              onReschedule={handleReschedule}
              onCancelSchedule={handleCancelSchedule}
            />
          ))
        )}

        <CreateNewCard onClick={handleCreateNew} />
      </div>
      <ScheduleModal
        isOpen={isRescheduleOpen}
        onClose={() => {
          setIsRescheduleOpen(false);
          setSelectedPost(null);
        }}
        onSchedule={handleRescheduleSubmit}
        mode="reschedule"
        initialDate={
          selectedPost ? getScheduleDate(selectedPost.scheduledAt) : ""
        }
        initialTime={
          selectedPost ? getScheduleTime(selectedPost.scheduledAt) : ""
        }
      />
    </section>
  );
};

export default ContentLibrary;
