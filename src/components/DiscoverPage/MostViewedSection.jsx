import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { Card } from "./Cards";

const parseViews = (views) => {
  if (typeof views === "string") {
    const value = parseFloat(views);
    if (views.toLowerCase().includes("k")) return value * 1000;
    if (views.toLowerCase().includes("m")) return value * 1000000;
    return value;
  }
  return views || 0;
};

const mostViewed = [...blogDiscover]
  .sort((a, b) => parseViews(b.views) - parseViews(a.views))
  .slice(0, 3);

console.log({ mostViewed });

const MostViewedSection = () => (
  <div>
    <SectionHeader title="Most Viewed" />
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
      {" "}
      {/*grid gap-6 grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
      {mostViewed?.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  </div>
);

export default MostViewedSection;
