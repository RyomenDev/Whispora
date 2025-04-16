import HeroSection from "../../components/DiscoverPage/HeroSection.jsx";
import SpotlightSection from "../../components/DiscoverPage/SpotLightSection.jsx";
import TrendingSection from "../../components/DiscoverPage/TrendingSection.jsx";
import FeaturedSection from "../../components/DiscoverPage/FeaturedSection.jsx";
import EditorsPickSection from "../../components/DiscoverPage/EditorsPickSection.jsx";
import MostViewedSection from "../../components/DiscoverPage/MostViewedSection.jsx";
import LatestPostsSection from "../../components/DiscoverPage/LatestPostsSection.jsx";
import RecommendedSection from "../../components/DiscoverPage/RecommendedSection.jsx";

const Discover = () => {
  return (
    <>
      <div>
        <HeroSection />
        <div className="lg:px-10 mx-auto px-4 py-12 space-y-16 bg-gradient-to-b from-green-50 to-white">
          <SpotlightSection />
          <TrendingSection />
          <FeaturedSection />
          <EditorsPickSection />
          <MostViewedSection />
          <LatestPostsSection />
          <RecommendedSection />
        </div>
      </div>
    </>
  );
};

export default Discover;
