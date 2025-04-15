
import SpotlightSection from "../../components/DiscoverPage/SpotlightSection";
import TrendingSection from "../../components/DiscoverPage/TrendingSection";
import FeaturedSection from "../../components/DiscoverPage/FeaturedSection";
import EditorsPickSection from "../../components/DiscoverPage/EditorsPickSection";
import MostViewedSection from "../../components/DiscoverPage/MostViewedSection";
import LatestPostsSection from "../../components/DiscoverPage/LatestPostsSection";
import RecommendedSection from "../../components/DiscoverPage/RecommendedSection";

const Discover = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 bg-gradient-to-b from-green-50 to-white">
      <SpotlightSection />
      <TrendingSection />
      <FeaturedSection />
      <EditorsPickSection />
      <MostViewedSection />
      <LatestPostsSection />
      <RecommendedSection />
    </div>
  );
};

export default Discover;
