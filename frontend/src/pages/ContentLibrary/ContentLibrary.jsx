import FilterTabs from "./FilterTabs";
import ContentCard from "./ContentCard";
import { contentData } from "./contentData";
import CreateNewCard from "./CreateNewCard";

const ContentLibrary = () => {
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

        <FilterTabs />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-8">
        {contentData.map((post) => (
          <ContentCard key={post.id} post={post} />
        ))}

        <CreateNewCard />
      </div>
    </section>
  );
};

export default ContentLibrary;
