import { Link } from "react-router-dom";
import { Calendar, Eye, Clock, User, Tag, Sparkles } from "lucide-react";
import { MarkdownRenderer } from "../../utility";

export const Card = ({ item }) => (
  <Link to={`/blog/${item.id}`} className="block">
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
        <div className="text-sm text-gray-600 line-clamp-3">
          <MarkdownRenderer>{item.description}</MarkdownRenderer>
        </div>
      </div>
    </div>
  </Link>
);

export const CompactCard = ({ item }) => (
  <Link to={`/blog/${item.id}`} className="block w-full h-full">
    <div className="bg-white rounded-xl border p-3 flex flex-col justify-between shadow hover:shadow-xl border-emerald-100 w-full h-full">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-24 object-cover rounded-md"
      />
      <div className="flex flex-col justify-between flex-grow mt-2">
        <h4 className="text-sm font-semibold text-emerald-800 line-clamp-2">
          {item.title}
        </h4>
        <p className="text-xs text-gray-500 mt-auto">{item.views} Views</p>
      </div>
    </div>
  </Link>
);

export const LatestPostCard = ({ item }) => (
  <Link to={`/blog/${item.id}`} className="block">
    <div className="flex gap-4 items-start bg-white rounded-xl shadow border border-gray-100 p-4 hover:shadow-md transition">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div>
        <h4 className="text-md font-semibold text-emerald-900">{item.title}</h4>
        <p className="text-xs text-gray-500">{item.date}</p>
        <div className="text-sm text-gray-600 line-clamp-2">
          <MarkdownRenderer>{item.description}</MarkdownRenderer>
        </div>
      </div>
    </div>
  </Link>
);

export const EditorsPickCard = ({ item }) => (
  <Link to={`/blog/${item.id}`} className="block w-full h-full">
    <div className="w-full h-full bg-white rounded-xl shadow-lg border border-emerald-100 transition hover:scale-[1.02] flex flex-col">
      <div className="w-full h-1/2 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold text-emerald-900 mb-2 line-clamp-2">
          {item.title}
        </h3>
        <div className="text-sm text-gray-600 line-clamp-3">
          <MarkdownRenderer>{item.description}</MarkdownRenderer>
        </div>
      </div>
    </div>
  </Link>
);

export const SideCard = ({ item }) => (
  <Link to={`/blog/${item.id}`} className="block">
    <div className="bg-white rounded-xl shadow-md flex flex-col justify-between h-full border border-emerald-100">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h4 className="text-md font-semibold text-emerald-900 mb-2">
        {item.title}
      </h4>
      <div className="text-xs text-gray-600 line-clamp-3">
        <MarkdownRenderer>{item.description}</MarkdownRenderer>
      </div>
    </div>
  </Link>
);

export const SpotlightCard = ({ item }) => (
  <Link to={`/blog/${item.id}`} className="block">
    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full border border-green-100">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-emerald-800 mb-1 line-clamp-2">
          {item.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <User size={14} /> {item.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} /> {item.date}
          </div>
          <div className="flex items-center gap-1">
            <Eye size={14} /> {item.views}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} /> {item.readingTime}
          </div>
        </div>

        <div className="text-gray-600 text-sm ">
          <MarkdownRenderer>{item.description}</MarkdownRenderer>
        </div>

        {item.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </Link>
);

export const FeatureCard = ({ item }) => (
  <Link to={`/blog/${item.id}`} className="block">
    <div className="flex flex-col md:flex-row bg-gradient-to-br from-emerald-50 to-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 border border-emerald-100">
      <div className="relative md:w-1/3 w-full">
        <img
          src={item?.image}
          alt={item?.title}
          className="h-64 md:h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-emerald-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Sparkles size={14} /> Featured
        </div>
      </div>

      <div className="p-6 flex flex-col justify-center md:w-2/3 space-y-3">
        <h3 className="text-2xl font-bold text-emerald-900 line-clamp-2">
          {item?.title}
        </h3>

        <div className="flex flex-wrap text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <User size={14} /> {item?.author}
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} /> {item?.readingTime}
          </div>
          <div>{item?.date}</div>
          <div className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-medium">
            {item?.category}
          </div>
        </div>

        <div className="text-gray-600 line-clamp-4">
          <MarkdownRenderer>{item.description}</MarkdownRenderer>
        </div>

        <div className="flex flex-wrap gap-2">
          {item?.tags?.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>

        <button className="self-start px-4 py-2 mt-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition">
          Read More
        </button>
      </div>
    </div>
  </Link>
);
