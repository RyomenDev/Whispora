import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { LatestPostCard } from "./Cards";

const latestBlogs = blogDiscover.filter((blog) => blog.isLatest);

const LatestPostsSection = () => (
  <div>
    <SectionHeader title="Latest Posts" />
    <div className="space-y-6">
      {latestBlogs?.map((item, index) => (
        <LatestPostCard key={index} item={item} />
      ))}
    </div>
  </div>
);

export default LatestPostsSection;
