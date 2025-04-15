import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { Card } from "./Cards";

const TrendingSection = () => (
  <div className="">
    <SectionHeader title="Trending" />

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
      {blogDiscover?.trending?.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  </div>
);

export default TrendingSection;

// import SectionHeader from "./SectionHeader";
// import { BlogDiscoverData as blogDiscover } from "../../Data";
// import { Card } from "./Cards";

// const TrendingSection = () => (
//   <div>
//     <SectionHeader title="Trending" />
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//       {blogDiscover?.trending?.map((item, index) => (
//         <Card key={index} item={item} />
//       ))}
//     </div>
//   </div>
// );

// export default TrendingSection;
