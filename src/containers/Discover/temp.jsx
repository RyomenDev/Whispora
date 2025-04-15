import React from "react";
import { BlogDiscoverData as blogDiscover } from "../../Data";

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
  <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img
      src={item.image}
      alt={item.title}
      className="md:w-1/2 h-64 object-cover w-full"
      loading="lazy"
    />
    <div className="p-6 flex flex-col justify-center md:w-1/2">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-gray-700 mb-4 line-clamp-4">{item.description}</p>
      <button className="mt-auto bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition self-start">
        Explore
      </button>
    </div>
  </div>
);

const Discover = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          {blogDiscover?.left?.map((item, index) => (
            <SideCard key={index} item={item} />
          ))}
        </div>
        <div className="md:col-span-2">
          <SpotlightCard item={blogDiscover.spotlight[0]} />
        </div>
        <div className="md:col-span-1 space-y-3">
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
    </div>
  );
};

export default Discover;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { BlogDiscoverData as blogDiscover } from "../../Data";

// const SectionHeader = ({ title }) => {
//   const navigate = useNavigate();

//   const handleSeeAllClick = () => {
//     navigate(`/blogs/${title.toLowerCase()}`);
//   };

//   return (
//     <div className="flex items-center justify-between mb-6">
//       <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-4 border-purple-600 inline-block pb-1">
//         {title}
//       </h2>
//       <span
//         className="text-sm text-purple-600 cursor-pointer hover:underline"
//         onClick={handleSeeAllClick}
//       >
//         See All
//       </span>
//     </div>
//   );
// };

// const LeftCard = ({ item }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-full h-32 object-cover"
//     />
//     <div className="p-3">
//       <h3 className="text-md font-semibold text-gray-800 line-clamp-1">
//         {item.title}
//       </h3>
//     </div>
//   </div>
// );

// const MidCard = ({ item }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-full h-48 object-cover"
//     />
//     <div className="p-4">
//       <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
//         {item.title}
//       </h3>
//       <p className="text-gray-600 text-sm line-clamp-4">{item.description}</p>
//     </div>
//   </div>
// );

// const RightCard = ({ item }) => (
//   <div className="flex justify-between items-center border-b py-2">
//     <h4 className="text-sm text-gray-800 line-clamp-1">{item.title}</h4>
//     <span className="text-xs text-purple-600">{item.views} views</span>
//   </div>
// );

// const GridCard = ({ item }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-full h-32 object-cover"
//     />
//     <div className="p-3">
//       <h4 className="text-sm font-semibold text-gray-800 line-clamp-1">
//         {item.title}
//       </h4>
//     </div>
//   </div>
// );

// const RowBlog = ({ item }) => (
//   <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
//     <img src={item.image} alt={item.title} className="w-40 object-cover" />
//     <div className="p-4 flex flex-col justify-between">
//       <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
//         {item.title}
//       </h3>
//       <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
//     </div>
//   </div>
// );

// const Discover = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
//       {/* First Section: 3 Columns */}
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//         {/* Left - 2 blogs */}
//         <div className="md:col-span-1">
//           {blogDiscover.left.slice(0, 2).map((item, index) => (
//             <LeftCard key={index} item={item} />
//           ))}
//         </div>

//         {/* Middle - Main Blog */}
//         <div className="md:col-span-3">
//           <MidCard item={blogDiscover.middle[0]} />
//         </div>

//         {/* Right - List of blogs */}
//         <div className="md:col-span-1">
//           {blogDiscover.right.map((item, index) => (
//             <RightCard key={index} item={item} />
//           ))}
//         </div>
//       </div>

//       {/* Second Section: 4 columns */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {blogDiscover.grid.map((item, index) => (
//           <GridCard key={index} item={item} />
//         ))}
//       </div>

//       {/* Third Section: Row style */}
//       <div>
//         <RowBlog item={blogDiscover.row[0]} />
//       </div>
//     </div>
//   );
// };

// export default Discover;
