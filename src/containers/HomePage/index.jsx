import { HomePageData } from "../../Data";
import HeroSection from "../../components/HomePage/HeroSection.jsx";
import Featured from "../../components/HomePage/featured.jsx";
import Features from "../../components/HomePage/Features.jsx";

const HomePage = () => {
  return (
    <main className="relative overflow-hidden">
      <HeroSection data={HomePageData.hero} />
      <Features featuresData={HomePageData.featuresData} />
      <Featured features={HomePageData.featuredData} />
    </main>
  );
};

export default HomePage;
