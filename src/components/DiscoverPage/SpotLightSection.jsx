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

    <div className="md:hidden grid grid-cols-2 gap-4 mb-6">
      {leftCardsData?.map((item, index) => (
        <SideCard key={index} item={item} />
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div className="hidden md:flex md:flex-col justify-between md:col-span-1 space-y-4">
        {leftCardsData?.map((item, index) => (
          <SideCard key={index} item={item} />
        ))}
      </div>

      <div className="md:col-span-3">
        <SpotlightCard item={spotlightCardData} />
      </div>

      <div className="md:col-span-1">
        <div className="grid grid-cols-2 md:flex md:flex-col gap-4 md:space-y-4 overflow-y-auto h-[320px] md:h-[580px] pr-1">
          {rightCardsData?.map((item, index) => (
            <CompactCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpotLightSection;
