import { useEffect, useState } from "react";

import FilterTabs from "./FilterTabs";
import CreateNewCard from "./CreateNewCard";
import PostCard from "../../components/PostCard/PostCard";

import { getPosts, deletePost } from "../../services/post.service";

const ContentLibrary = () => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();

      console.log("Posts response:", data);

      setPosts(data.posts);
      setPagination(data.pagination);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);

      setPosts((prev) => prev.filter((post) => post._id !== postId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (post) => {
    console.log(post);
  };

  const handleDuplicate = (post) => {
    console.log(post);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-white">Loading...</div>
    );
  }

  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Content Library</h1>

          <p className="mt-3 text-slate-400">
            Manage and organize your elite content drafts and assets.
          </p>
        </div>

        <FilterTabs />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <div className="col-span-3 rounded-2xl border border-dashed border-slate-700 p-12 text-center">
            <h2 className="text-2xl font-semibold text-white">No posts yet</h2>

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
            />
          ))
        )}

        <CreateNewCard />
      </div>
    </section>
  );
};

export default ContentLibrary;
