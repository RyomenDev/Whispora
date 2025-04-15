import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";

const LatestPostsSection = () => (
  <div>
    <SectionHeader title="Latest Posts" />
    <div className="space-y-6">
      {blogDiscover?.latest?.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 items-start bg-white rounded-xl shadow border border-gray-100 p-4"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <h4 className="text-md font-semibold text-emerald-900">
              {item.title}
            </h4>
            <p className="text-xs text-gray-500">{item.date}</p>
            <p className="text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LatestPostsSection;
