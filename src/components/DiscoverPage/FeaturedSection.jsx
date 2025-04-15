import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
const FeaturedSection = () => (
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
);

export default FeaturedSection;
