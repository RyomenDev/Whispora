export const Card = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-green-100">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover rounded-t-2xl"
      loading="lazy"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-emerald-800 mb-2 line-clamp-1">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
    </div>
  </div>
);

export const CompactCard = ({ item }) => (
  <div className="bg-white rounded-xl p-4 flex flex-col justify-between h-full shadow hover:shadow-xl border border-emerald-100">
    <img
      src={item.image}
      alt={item.title}
      className="w-16 h-16 object-cover rounded"
    />
    <div>
      <h4 className="text-sm font-semibold text-emerald-800 line-clamp-1">
        {item.title}
      </h4>
      <p className="text-xs text-gray-500">{item.views} Views</p>
    </div>
  </div>
);
// export const CompactCard = ({ item }) => (
//   <div className="flex items-center gap-4 bg-white p-3 rounded-xl shadow hover:shadow-md border border-emerald-100">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-16 h-16 object-cover rounded"
//     />
//     <div>
//       <h4 className="text-sm font-semibold text-emerald-800 line-clamp-1">
//         {item.title}
//       </h4>
//       <p className="text-xs text-gray-500">{item.views} Views</p>
//     </div>
//   </div>
// );

export const SideCard = ({ item }) => (
  <div className="bg-white rounded-xl shadow-md flex flex-col justify-between h-full">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h4 className="text-md font-semibold text-emerald-900 mb-2">
      {item.title}
    </h4>
    <p className="text-xs text-gray-600 line-clamp-3">{item.description}</p>
  </div>
);

// export const SideCard = ({ item }) => (
//   <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 mb-4 border border-teal-100">
//     <img
//       src={item.image}
//       alt={item.title}
//       className="w-full h-32 object-cover"
//       loading="lazy"
//     />
//     <div className="p-4">
//       <h3 className="text-md font-semibold text-emerald-900 line-clamp-2">
//         {item.title}
//       </h3>
//     </div>
//   </div>
// );

export const SpotlightCard = ({ item }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full border border-green-100">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-emerald-800 mb-2 line-clamp-2">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-4">{item.description}</p>
    </div>
  </div>
);
