import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { SideCard, SpotlightCard, CompactCard } from "./Cards";

const leftCardsData = blogDiscover
  .filter((blog) => blog.isTrending)
  .slice(0, 2);
const spotlightCardData = blogDiscover.find((blog) => blog.isFeatured);
const rightCardsData = blogDiscover.filter(
  (blog) => blog.isRecommended && blog.id !== spotlightCardData?.id
);

const SpotLightSection = () => (
  <div className="px-4 sm:px-6 lg:px-8">
    <SectionHeader title="SpotLight" />

    {/* Small devices: SideCards in a row */}
    <div className="md:hidden grid grid-cols-2 gap-4 mb-6">
      {leftCardsData?.map((item, index) => (
        <SideCard key={index} item={item} />
      ))}
    </div>

    {/* Main Grid for md and up */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {/* Left SideCards (hidden on small) */}
      <div className="hidden md:flex md:flex-col justify-between md:col-span-1 space-y-4">
        {leftCardsData?.map((item, index) => (
          <SideCard key={index} item={item} />
        ))}
      </div>

      {/* Spotlight Card */}
      <div className="md:col-span-3">
        <SpotlightCard item={spotlightCardData} />
      </div>

      {/* Right CompactCards */}
      <div className="md:col-span-1">
        <div className="grid grid-cols-2 md:flex md:flex-col gap-4 md:space-y-4 overflow-y-auto h-[320px] md:h-[575px] pr-1">
          {rightCardsData?.map((item, index) => (
            <CompactCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpotLightSection;

// import SectionHeader from "./SectionHeader";
// import { BlogDiscoverData as blogDiscover } from "../../Data";
// import { SideCard, SpotlightCard, CompactCard } from "./Cards";

// const SpotLightSection = () => (
//   <div className="px-4 sm:px-6 lg:px-8">
//     <SectionHeader title="SpotLight" />

//     {/* Small devices layout: SideCards side by side */}
//     <div className="md:hidden grid grid-cols-2 gap-4 mb-6">
//       {blogDiscover.left.slice(0, 2).map((item, index) => (
//         <SideCard key={index} item={item} />
//       ))}
//     </div>

//     {/* Grid layout for md and above */}
//     <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
//       {/* Left side cards */}
//       <div className="hidden md:flex md:flex-col justify-between md:col-span-1 space-y-4">
//         {blogDiscover.left.slice(0, 2).map((item, index) => (
//           <SideCard key={index} item={item} />
//         ))}
//       </div>

//       {/* Spotlight main card */}
//       <div className="md:col-span-3">
//         <SpotlightCard item={blogDiscover.spotlight[0]} />
//       </div>

//       {/* Right side compact cards with scroll */}
//       <div className="md:col-span-1 flex flex-col space-y-4 overflow-y-auto h-[300px] md:h-[500px]">
//         {blogDiscover.right.map((item, index) => (
//           <CompactCard key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default SpotLightSection;
