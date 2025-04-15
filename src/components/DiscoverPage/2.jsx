import React from "react";
// import { BlogDiscoverData as blogDiscover } from "../../Data";
const blogDiscover = {
  left: [
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "How AI Is Changing Web Development",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "Top 10 JavaScript Tricks for Developers",
    },
  ],
  spotlight: [
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "The Future of Tech Startups in 2025",
      description:
        "Explore how startups are leveraging cutting-edge technologies to disrupt industries and create innovative solutions in an ever-evolving digital landscape.",
    },
  ],
  right: [
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "Minimalist Design Trends",
      views: "12.5K",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "React vs Vue: Which One to Choose?",
      views: "9.8K",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "Understanding the CSS Grid",
      views: "8.3K",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "Understanding the CSS Grid",
      views: "8.3K",
    },
  ],
  trending: [
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "The Daily Life of a Full Stack Developer",
      description:
        "Peek into the dynamic workday of a full-stack engineer and discover how they juggle backend logic with frontend elegance.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "Deploying Apps with AWS",
      description:
        "A practical guide on how to deploy and manage applications on Amazon Web Services.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "Staying Safe in the Digital Age",
      description:
        "Cyber threats are real. Here's how to protect your data and maintain your digital hygiene.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "Mobile-First Approach Explained",
      description:
        "Learn why designing for mobile first is crucial in today's web development world.",
    },
  ],
  featured: {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    title: "Content Creation Strategies for Developers",
    description:
      "Master the art of technical blogging and build a personal brand by sharing your knowledge with the dev community.",
  },
};

const SectionHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-4 border-purple-600 inline-block pb-1">
      {title}
    </h2>
    <span className="text-sm text-purple-600 cursor-pointer hover:underline">
      See All
    </span>
  </div>
);

const Card = ({ item }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
    </div>
  </div>
);

const CompactCard = ({ item }) => (
  <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow hover:shadow-md">
    <img
      src={item.image}
      alt={item.title}
      className="w-16 h-16 object-cover rounded"
    />
    <div>
      <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">
        {item.title}
      </h4>
      <p className="text-xs text-gray-500">{item.views} Views</p>
    </div>
  </div>
);

const SideCard = ({ item }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 mb-4">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-32 object-cover"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
        {item.title}
      </h3>
    </div>
  </div>
);

const SpotlightCard = ({ item }) => (
  //   <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
  //     <img
  //       src={item.image}
  //       alt={item.title}
  //       className="md:w-1/2 h-64 object-cover w-full"
  //       loading="lazy"
  //     />
  //     <div className="p-6 flex flex-col justify-center md:w-1/2">
  //       <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
  //         {item.title}
  //       </h3>
  //       <p className="text-gray-700 mb-4 line-clamp-4">{item.description}</p>
  //       <button className="mt-auto bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition self-start">
  //         Explore
  //       </button>
  //     </div>
  //   </div>
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

const Discover = () => {
  return (
    // <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
    //   {/* Hero Section */}
    //   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    //     <div className="md:col-span-1 space-y-4">
    //       {blogDiscover?.left?.map((item, index) => (
    //         <SideCard key={index} item={item} />
    //       ))}
    //     </div>
    //     <div className="md:col-span-2">
    //       <SpotlightCard item={blogDiscover.spotlight[0]} />
    //     </div>
    //     <div className="md:col-span-1 space-y-3">
    //       {blogDiscover.right.map((item, index) => (
    //         <CompactCard key={index} item={item} />
    //       ))}
    //     </div>
    //   </div>
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* First Section: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left - 2 blogs */}
        <div className="md:col-span-1">
          {blogDiscover.left.slice(0, 2).map((item, index) => (
            <SideCard key={index} item={item} />
          ))}
        </div>

        {/* Middle - Main Blog */}
        <div className="md:col-span-3">
          <SpotlightCard item={blogDiscover.spotlight[0]} />
        </div>

        {/* Right - List of blogs */}
        <div className="md:col-span-1">
          {blogDiscover.right.map((item, index) => (
            <CompactCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div>
        <SectionHeader title="Trending" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogDiscover?.trending?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Featured Blog Row Style */}
      <div>
        <SectionHeader title="Featured" />
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <img
            src={blogDiscover.featured.image}
            alt={blogDiscover.featured.title}
            className="md:w-1/3 h-64 object-cover w-full"
            loading="lazy"
          />
          <div className="p-6 flex flex-col justify-center md:w-2/3">
            <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
              {blogDiscover.featured.title}
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-4">
              {blogDiscover.featured.description}
            </p>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div>
        <SectionHeader title="Trending" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogDiscover?.trending?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
