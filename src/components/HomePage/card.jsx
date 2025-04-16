import { Button } from "@/components/ui/button";

const HeroCards = ({ card }) => (
  <div className="relative group w-full h-full rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
    <img
      src={card.image}
      alt="illustration"
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 flex flex-col justify-end m-6 p-6 z-10">
      <h3 className="text-xl md:text-2xl font-semibold text-white">
        {card.title}
      </h3>
      <p className="text-sm md:text-lg text-gray-300 mt-2">
        {card.description}
      </p>

      <p className="text-xs md:text-sm text-gray-200 mt-2">By {card.author}</p>

      <div className="flex space-x-2 mt-2">
        {card.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs md:text-sm px-2 py-1 bg-gray-800 text-white rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <Button className="mt-4 w-fit bg-green-600 hover:bg-green-700 text-white">
        Read More
      </Button>
    </div>
  </div>
);

export default HeroCards;

// import { Button } from "@/components/ui/button";

// const HeroCards = ({ card }) => (
//   <div className="grid md:grid-cols-2 h-full">
//     <div className="p-6 flex flex-col justify-center">
//       <h3 className="text-xl md:text-2xl font-bold text-black">{card.title}</h3>
//       <p className="text-gray-700 mt-2">{card.description}</p>
//       <Button className="mt-4 w-fit">Read More</Button>
//     </div>
//     <img
//       src={card.image}
//       alt="illustration"
//       className="w-full h-full object-cover"
//     />
//   </div>
// );

// export default HeroCards;
