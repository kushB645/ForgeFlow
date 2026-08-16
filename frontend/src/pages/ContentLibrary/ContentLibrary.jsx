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

  const [filters, setFilters] = useState({
    date: "all",
    media: "all",
    sort: "newest",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    date: "all",
    media: "all",
    sort: "newest",
  });

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

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
  };

  const handleClearFilters = () => {
    const defaultFilters = {
      date: "all",
      media: "all",
      sort: "newest",
    };

    setFilters(defaultFilters);
    setAppliedFilters(defaultFilters);
  };

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

  const filteredPosts = [...posts]
    .filter((post) => {
      if (appliedFilters.date === "all") {
        return true;
      }

      if (!post.createdAt) {
        return false;
      }

      const postDate = new Date(post.createdAt);
      const now = new Date();

      const days = Number(appliedFilters.date);

      const cutoffDate = new Date();
      cutoffDate.setDate(now.getDate() - days);

      return postDate >= cutoffDate;
    })
    .filter((post) => {
      if (appliedFilters.media === "all") {
        return true;
      }

      const hasMedia = Boolean(post.media);

      if (appliedFilters.media === "with-media") {
        return hasMedia;
      }

      return !hasMedia;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);

      if (appliedFilters.sort === "oldest") {
        return dateA - dateB;
      }

      return dateB - dateA;
    });

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
    <section className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Content Library
          </h1>

          <p className="mt-2 text-sm text-slate-400 sm:mt-3 sm:text-base">
            Manage and organize your elite content drafts and assets.
          </p>
        </div>

        {/* Filters */}
        <div className="w-full min-w-0 lg:w-auto">
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            filters={{
              date: filters.date,
              media: filters.media,
              sort: filters.sort,
              setDate: (value) =>
                setFilters((prev) => ({
                  ...prev,
                  date: value,
                })),
              setMedia: (value) =>
                setFilters((prev) => ({
                  ...prev,
                  media: value,
                })),
              setSort: (value) =>
                setFilters((prev) => ({
                  ...prev,
                  sort: value,
                })),
            }}
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
        </div>
      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {filteredPosts.length === 0 ? (
          <div className="col-span-1 rounded-2xl border border-dashed border-slate-700 p-8 text-center sm:col-span-2 sm:p-10 lg:col-span-3 lg:p-12">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              No {activeFilter === "all" ? "" : activeFilter} posts yet
            </h2>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Create your first post to see it here.
            </p>
          </div>
        ) : (
          filteredPosts.map((post) => (
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

      {/* Schedule Modal */}
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
