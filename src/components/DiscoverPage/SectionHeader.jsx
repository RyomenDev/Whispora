

const SectionHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 border-b-4 border-green-400 inline-block pb-1">
      {title}
    </h2>
    <span className="text-sm text-teal-600 cursor-pointer hover:underline">
      See All
    </span>
  </div>
);

export default SectionHeader;
