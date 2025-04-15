import React from "react";
import { useNavigate } from "react-router-dom";
// import { BlogDiscoverData as blogDiscover } from "../../Data";
const blogDiscover = {
  left: [
    {
      title: "5 Ways to Boost Productivity",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      title: "The Rise of Remote Work",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ],

  middle: [
    {
      title: "Why Web Development is Still a Hot Career in 2025",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      description:
        "Web development continues to be a highly sought-after skill in 2025 due to the ever-growing digital landscape, offering opportunities in full-stack, front-end, and back-end roles across industries.",
    },
  ],

  right: [
    {
      title: "UI/UX Trends of This Year",
      views: "1.2k",
    },
    {
      title: "10 Tools Every Developer Should Know",
      views: "900",
    },
    {
      title: "Scaling Apps with Microservices",
      views: "720",
    },
    {
      title: "The Power of JavaScript in 2025",
      views: "1.5k",
    },
  ],

  grid: [
    {
      title: "Exploring the MERN Stack",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      title: "React Hooks Deep Dive",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      title: "Mastering Tailwind CSS",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      title: "Building Scalable APIs with Node.js",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ],

  row: [
    {
      title: "Inside a Developer’s Workflow – How to Stay Efficient",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      description:
        "A look into the daily habits and toolkits that help developers manage tasks, write better code, and remain productive even in high-pressure environments.",
    },
  ],
};

const SectionHeader = ({ title }) => {
  const navigate = useNavigate();

  const handleSeeAllClick = () => {
    navigate(`/blogs/${title.toLowerCase()}`);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-4 border-purple-600 inline-block pb-1">
        {title}
      </h2>
      <span
        className="text-sm text-purple-600 cursor-pointer hover:underline"
        onClick={handleSeeAllClick}
      >
        See All
      </span>
    </div>
  );
};

const LeftCard = ({ item }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-32 object-cover"
    />
    <div className="p-3">
      <h3 className="text-md font-semibold text-gray-800 line-clamp-1">
        {item.title}
      </h3>
    </div>
  </div>
);

const MidCard = ({ item }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-4">{item.description}</p>
    </div>
  </div>
);

const RightCard = ({ item }) => (
  <div className="flex justify-between items-center border-b py-2">
    <h4 className="text-sm text-gray-800 line-clamp-1">{item.title}</h4>
    <span className="text-xs text-purple-600">{item.views} views</span>
  </div>
);

const GridCard = ({ item }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-32 object-cover"
    />
    <div className="p-3">
      <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">
        {item.title}
      </h4>
    </div>
  </div>
);

const RowBlog = ({ item }) => (
  <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
    <img src={item.image} alt={item.title} className="w-40 object-cover" />
    <div className="p-4 flex flex-col justify-between">
      <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
    </div>
  </div>
);

const Discover = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* First Section: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left - 2 blogs */}
        <div className="md:col-span-1">
          {blogDiscover.left.slice(0, 2).map((item, index) => (
            <LeftCard key={index} item={item} />
          ))}
        </div>

        {/* Middle - Main Blog */}
        <div className="md:col-span-3">
          <MidCard item={blogDiscover.middle[0]} />
        </div>

        {/* Right - List of blogs */}
        <div className="md:col-span-1">
          {blogDiscover.right.map((item, index) => (
            <RightCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Second Section: 4 columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {blogDiscover.grid.map((item, index) => (
          <GridCard key={index} item={item} />
        ))}
      </div>

      {/* Third Section: Row style */}
      <div>
        <RowBlog item={blogDiscover.row[0]} />
      </div>
    </div>
  );
};

export default Discover;
