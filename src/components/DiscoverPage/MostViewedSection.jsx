import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { Card } from "./Cards";

const MostViewedSection = () => (
  <div>
    <SectionHeader title="Most Viewed" />
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
      {" "}
      {/*grid gap-6 grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
      {blogDiscover?.mostViewed?.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  </div>
);

export default MostViewedSection;
