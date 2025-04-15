import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { CompactCard } from "./Cards";

const recommendedBlogs = blogDiscover.filter((blog) => blog.isRecommended);

const RecommendedSection = () => (
  <div>
    <SectionHeader title="Recommended for You" />
    <div className="flex space-x-5 overflow-x-auto scrollbar-hide pb-3">
      {recommendedBlogs?.map((item, index) => (
        <CompactCard key={index} item={item} />
      ))}
    </div>
  </div>
);

export default RecommendedSection;
