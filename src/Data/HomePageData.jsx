import HERO_BG from "../assets/images/EmeraldBg.png";
import Stairs from "../assets/images/Stairs.png";
import Elevation from "../assets/images/Elevation.png";
import Curtain from "../assets/images/Curtain.jpg";
import waterDrop from "../assets/images/waterDrop.png";
import { BlogDiscoverData as AllCards } from "./BlogDiscover.jsx";

import { FaRobot, FaUserTie, FaBookOpen, FaChartLine } from "react-icons/fa";
import {
  Lightbulb,
  DollarSign,
  Users,
  BookOpen,
  Archive,
  Globe,
} from "lucide-react";

const HomePageData = {
  hero: {
    hero_bg: HERO_BG,
    title_1: "Unlock Your Potential with Expert Mentorship",
    title_2: "Learn. Grow. Succeed.",
    subtitle:
      "Join our community and get access to tailored mentorship, structured courses, and a supportive network to accelerate your career.",
    ctaText: "Get Started",
    ctaLink: "#",
    cards: AllCards.slice(9, 13),
  },

  featuresData: [
    {
      icon: <FaRobot size={40} className="text-blue-600" />,
      img: Stairs,
      title: "AI-Powered Recommendations",
      description:
        "Discover personalized blog content based on your interests using our intelligent recommendation system.",
    },
    {
      icon: <FaUserTie size={40} className="text-purple-600" />,
      img: Elevation,
      title: "Expert Contributors",
      description:
        "Read insightful articles written by experienced developers, designers, and industry professionals.",
    },
    {
      icon: <FaBookOpen size={40} className="text-green-600" />,
      img: Curtain,
      title: "In-Depth Tutorials",
      description:
        "Explore comprehensive how-to guides and tutorials across various tech topics, frameworks, and tools.",
    },
    {
      icon: <FaChartLine size={40} className="text-yellow-500" />,
      img: waterDrop,
      title: "Trending Insights",
      description:
        "Stay updated with the latest trends, top tools, and community picks through real-time analytics.",
    },
  ],

  featuredData: [
    {
      title: "Publish Your Passions",
      desc: "Start a blog about what you love — from photography to poetry. You're in control.",
      icon: <Lightbulb size={32} />,
    },
    {
      title: "Earn Money",
      desc: "Monetize your blog through ads, subscriptions, or sponsored content easily.",
      icon: <DollarSign size={32} />,
    },
    {
      title: "Know Your Audience",
      desc: "Get real-time insights about who reads your blog and what they love most.",
      icon: <Users size={32} />,
    },
    {
      title: "Hang Onto Your Memories",
      desc: "Safely store your ideas, stories, and experiences — forever.",
      icon: <Archive size={32} />,
    },
    {
      title: "Learn and Grow",
      desc: "Access premium content, creator tips, and AI-powered writing suggestions.",
      icon: <BookOpen size={32} />,
    },
    {
      title: "Explore Global Stories",
      desc: "Dive into blogs from around the world and connect with diverse perspectives and cultures.",
      icon: <Globe size={32} />,
    },
  ],
};

export default HomePageData;
