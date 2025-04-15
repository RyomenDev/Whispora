import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";

const EditorsPickSection = () => (
  <div>
    <SectionHeader title="Editor’s Picks" />
    <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-green-100">
      {blogDiscover?.editorsPick?.map((item, index) => (
        <div
          key={index}
          className="min-w-[300px] max-w-sm flex-shrink-0 bg-white rounded-xl shadow-lg border border-emerald-100 transition hover:scale-[1.02]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-44 object-cover rounded-t-xl"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-emerald-900 mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EditorsPickSection;
