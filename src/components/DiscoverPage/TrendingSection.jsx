import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { Card } from "./Cards";

const trendingBlogs = blogDiscover
  .filter((blog) => blog.isTrending)
  .slice(0, 3);

const TrendingSection = () => (
  <div className="">
    <SectionHeader title="Trending" />

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
      {trendingBlogs?.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  </div>
);

export default TrendingSection;

