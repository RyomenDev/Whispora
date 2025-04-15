import { HomePageData } from "../../Data";
import HeroSection from "../../components/HomePage/HeroSection/index.jsx";
import OrganizationSection from "../../components/HomePage/OrganizationSection.jsx";
import Testimonials from "../../components/HomePage/Testimonials.jsx";
import TeamSection from "../../components/HomePage/TeamSection.jsx";
import Features from "../../components/HomePage/Features.jsx";
// import GreenLinesBackground from "../../assets/svgJSX/GreenLines.jsx";

const HomePage = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0 z-0">
        <GreenLinesBackground />
      </div> */}

      {/* Content Wrapper with Green Glassmorphism */}
      {/* <div className="relative z-10 bg-green-300/10 backdrop-blur-md rounded-xl shadow-lg p-2 md:p-4 lg:p-8"> */}
      <HeroSection data={HomePageData.hero} />
      {/* <OrganizationSection data={HomePageData.organization} />
      <Features featuresData={HomePageData.featuresData} />
      <Testimonials testimonials={HomePageData.testimonials} />
      <TeamSection teamMembers={HomePageData.teamMembers} /> */}
      {/* </div> */}
    </main>
  );
};

export default HomePage;
