import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { Sparkles, Clock, Tag, User } from "lucide-react";
import { FeatureCard } from "./Cards.jsx";

const featuredBlog = blogDiscover.find((blog) => blog.isFeatured);

const FeaturedSection = () => (
  <div>
    <SectionHeader title="Featured" />
    <FeatureCard item={featuredBlog} />
  </div>
);

export default FeaturedSection;
