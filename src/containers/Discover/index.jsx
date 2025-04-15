
import SectionHeader from "../../components/DiscoverPage/SectionHeader";
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

// import React from "react";
// import { BlogDiscoverData as blogDiscover } from "../../Data";

// const SectionHeader = ({ title }) => (
//   <div className="flex items-center justify-between mb-6">
//     <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 border-b-4 border-emerald-400 inline-block pb-1">
//       {title}
//     </h2>
//     <span className="text-sm text-emerald-600 hover:text-emerald-800 cursor-pointer hover:underline transition">
//       See All
//     </span>
//   </div>
// );

// const Card = ({ item }) => (
//   <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-green-100">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-full h-48 object-cover rounded-t-xl"
//       loading="lazy"
//     />
//     <div className="p-4">
//       <h3 className="text-lg font-semibold text-emerald-800 mb-1 line-clamp-1">
//         {item.title}
//       </h3>
//       <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
//     </div>
//   </div>
// );

// const CompactCard = ({ item }) => (
//   <div className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm hover:shadow-md border border-emerald-100">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-16 h-16 object-cover rounded-md"
//     />
//     <div>
//       <h4 className="text-sm font-semibold text-emerald-800 line-clamp-1">
//         {item.title}
//       </h4>
//       <p className="text-xs text-gray-500">{item.views} Views</p>
//     </div>
//   </div>
// );

// const SideCard = ({ item }) => (
//   <div className="bg-white rounded-lg shadow hover:shadow-md transition border border-teal-100 mb-4">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-full h-32 object-cover rounded-t-lg"
//       loading="lazy"
//     />
//     <div className="p-3">
//       <h3 className="text-sm font-semibold text-emerald-900 line-clamp-2">
//         {item.title}
//       </h3>
//     </div>
//   </div>
// );

// const SpotlightCard = ({ item }) => (
//   <div className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-full h-56 object-cover"
//     />
//     <div className="p-5">
//       <h3 className="text-xl font-bold text-emerald-800 mb-2 line-clamp-2">
//         {item.title}
//       </h3>
//       <p className="text-gray-600 text-sm line-clamp-4">{item.description}</p>
//     </div>
//   </div>
// );

// const Discover = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-14 space-y-20 bg-gradient-to-b from-green-50 to-white">
//       {/* SpotLight Section */}
//       <div>
//         <SectionHeader title="Spotlight" />
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//           <div className="md:col-span-1 space-y-4">
//             {blogDiscover.left.slice(0, 2).map((item, index) => (
//               <SideCard key={index} item={item} />
//             ))}
//           </div>

//           <div className="md:col-span-3">
//             <SpotlightCard item={blogDiscover.spotlight[0]} />
//           </div>

//           <div className="md:col-span-1 space-y-4">
//             {blogDiscover.right.map((item, index) => (
//               <CompactCard key={index} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Trending Section */}
//       <div>
//         <SectionHeader title="Trending" />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {blogDiscover?.trending?.map((item, index) => (
//             <Card key={index} item={item} />
//           ))}
//         </div>
//       </div>

//       {/* Featured Section */}
//       <div>
//         <SectionHeader title="Featured" />
//         <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md border border-green-100 overflow-hidden">
//           <img
//             src={blogDiscover.featured.image}
//             alt={blogDiscover.featured.title}
//             className="md:w-1/3 h-64 w-full object-cover"
//             loading="lazy"
//           />
//           <div className="p-6 flex flex-col justify-center md:w-2/3">
//             <h3 className="text-xl font-bold text-emerald-800 mb-3 line-clamp-2">
//               {blogDiscover.featured.title}
//             </h3>
//             <p className="text-gray-700 line-clamp-4">
//               {blogDiscover.featured.description}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Editor’s Picks Section */}
//       <div>
//         <SectionHeader title="Editor’s Picks" />
//         <div className="flex space-x-5 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-emerald-100">
//           {blogDiscover?.editorsPick?.map((item, index) => (
//             <div
//               key={index}
//               className="min-w-[280px] max-w-sm flex-shrink-0 bg-white rounded-xl shadow-md border border-emerald-100 hover:scale-[1.02] transition"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-44 object-cover rounded-t-xl"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-emerald-900 mb-1 line-clamp-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 line-clamp-3">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Most Viewed Section */}
//       <div>
//         <SectionHeader title="Most Viewed" />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {blogDiscover?.mostViewed?.map((item, index) => (
//             <Card key={index} item={item} />
//           ))}
//         </div>
//       </div>

//       {/* Latest Posts Section */}
//       <div>
//         <SectionHeader title="Latest Posts" />
//         <div className="space-y-5">
//           {blogDiscover?.latest?.map((item, index) => (
//             <div
//               key={index}
//               className="flex gap-4 items-start bg-white rounded-xl shadow-sm border border-gray-100 p-4"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-20 h-20 object-cover rounded-md"
//               />
//               <div>
//                 <h4 className="text-md font-semibold text-emerald-900">
//                   {item.title}
//                 </h4>
//                 <p className="text-xs text-gray-500 mb-1">{item.date}</p>
//                 <p className="text-sm text-gray-600 line-clamp-2">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recommended Section */}
//       <div>
//         <SectionHeader title="Recommended for You" />
//         <div className="flex space-x-5 overflow-x-auto pb-2 scrollbar-hide">
//           {blogDiscover?.recommended?.map((item, index) => (
//             <CompactCard key={index} item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discover;
