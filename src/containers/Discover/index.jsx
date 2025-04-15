// import A1 from "../../components/DiscoverPage/1.jsx";
// import A2 from "../../components/DiscoverPage/2.jsx";

// const DiscoverPage = () => {
//   return (
//     <>
//       {/* <A1 /> */}
//       <A2 />
//     </>
//   );
// };

// export default DiscoverPage;

import React from "react";
import { BlogDiscoverData as blogDiscover } from "../../Data";

const SectionHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 border-b-4 border-green-400 inline-block pb-1">
      {title}
    </h2>
    <span className="text-sm text-teal-600 cursor-pointer hover:underline">
      See All
    </span>
  </div>
);

const Card = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-green-100">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover rounded-t-2xl"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-emerald-800 mb-2 line-clamp-1">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
    </div>
  </div>
);

const CompactCard = ({ item }) => (
  <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow hover:shadow-md border border-emerald-100">
    <img
      src={item.image}
      alt={item.title}
      className="w-16 h-16 object-cover rounded"
    />
    <div>
      <h4 className="text-sm font-semibold text-emerald-800 line-clamp-1">
        {item.title}
      </h4>
      <p className="text-xs text-gray-500">{item.views} Views</p>
    </div>
  </div>
);

const SideCard = ({ item }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 mb-4 border border-teal-100">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-32 object-cover"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-md font-semibold text-emerald-900 line-clamp-2">
        {item.title}
      </h3>
    </div>
  </div>
);

const SpotlightCard = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full border border-green-100">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-emerald-800 mb-2 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-4">{item.description}</p>
    </div>
  </div>
);

const Discover = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 bg-gradient-to-b from-green-50 to-white">
      {/* First Section: 3 Columns */}
      <SectionHeader title="SpotLight" />
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

      {/* Trending Section */}
      <div>
        <SectionHeader title="Trending" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogDiscover?.trending?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div>
        <SectionHeader title="Featured" />
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-green-100">
          <img
            src={blogDiscover.featured.image}
            alt={blogDiscover.featured.title}
            className="md:w-1/3 h-64 object-cover w-full"
            loading="lazy"
          />
          <div className="p-6 flex flex-col justify-center md:w-2/3">
            <h3 className="text-xl font-bold text-emerald-800 mb-4 line-clamp-2">
              {blogDiscover.featured.title}
            </h3>
            <p className="text-gray-700 mb-4 line-clamp-4">
              {blogDiscover.featured.description}
            </p>
          </div>
        </div>
      </div>

      {/* Trending Again */}
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
