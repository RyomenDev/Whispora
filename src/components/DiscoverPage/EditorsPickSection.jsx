import SectionHeader from "./SectionHeader";
import { BlogDiscoverData as blogDiscover } from "../../Data";
import { EditorsPickCard } from "./Cards";

const editorsPick = blogDiscover.filter((blog) => blog.isEditorPick);

const EditorsPickSection = () => (
  <div>
    <SectionHeader title="Editor’s Picks" />
    <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-400 scrollbar-track-green-100">
      {editorsPick?.map((item, index) => (
        <EditorsPickCard key={index} item={item} />
      ))}
    </div>
  </div>
);

export default EditorsPickSection;
