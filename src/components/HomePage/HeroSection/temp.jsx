import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useSwipeable } from "react-swipeable";
import cards from "./cardsData.jsx";

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Get 4 cards in a circular way
  const getVisibleCards = () => {
    return Array.from(
      { length: 4 },
      (_, i) => cards[(index + i) % cards.length]
    );
  };

  return (
    <div className="relative w-full bg-green-400 py-12 px-4 md:px-16">
      <div className="text-center text-white">
        <h2 className="text-xl md:text-3xl font-semibold">
          The Linearity Blog
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Stories, thoughts, ideas & more
        </h1>
        <p className="text-sm md:text-lg mt-2">For creators</p>
      </div>

      <div className="relative flex justify-center mt-12">
        <div {...handlers} className="relative w-[90%] max-w-4xl h-[400px]">
          <AnimatePresence mode="wait">
            {getVisibleCards().map((card, i) => {
              const isFront = i === 0;
              const scale = 1 - 0.1 * i;
              const translateY = i * -40;
              const zIndex = cards.length - i;

              return (
                <motion.div
                  key={card.title + index} // `index` to re-render key on swipe
                  className="absolute w-full h-full rounded-2xl overflow-hidden bg-white shadow-lg"
                  initial={{
                    opacity: 0,
                    y: translateY,
                    scale: scale,
                  }}
                  animate={{
                    opacity: isFront ? 1 : 0.5,
                    y: translateY,
                    scale: scale,
                    zIndex: zIndex,
                  }}
                  exit={{
                    opacity: 0,
                    scale: scale,
                    y: translateY,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ zIndex }}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="p-6 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-bold text-black">
                        {card.title}
                      </h3>
                      <p className="text-gray-700 mt-2">{card.description}</p>
                      <Button className="mt-4 w-fit">Read More</Button>
                    </div>
                    <img
                      src={card.image}
                      alt="illustration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <Button onClick={prevCard}>Previous</Button>
        <Button onClick={nextCard}>Next</Button>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { useSwipeable } from "react-swipeable";
// import cards from "./cardsData.jsx";

// export default function HeroSection() {
//   const [index, setIndex] = useState(0);

//   const nextCard = () => {
//     setIndex((index + 1) % cards.length);
//   };

//   const prevCard = () => {
//     setIndex((index - 1 + cards.length) % cards.length);
//   };

//   // Swipe handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: nextCard,
//     onSwipedRight: prevCard,
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true, // To enable swipe functionality on desktop
//   });

//   return (
//     <div className="relative w-full bg-green-400 py-12 px-4 md:px-16">
//       <div className="text-center text-white">
//         <h2 className="text-xl md:text-3xl font-semibold">
//           The Linearity Blog
//         </h2>
//         <h1 className="text-3xl md:text-5xl font-bold mt-2">
//           Stories, thoughts, ideas & more
//         </h1>
//         <p className="text-sm md:text-lg mt-2">For creators</p>
//       </div>

//       <div className="relative flex justify-center mt-12">
//         <div
//           {...handlers} // Adding swipeable functionality here
//           className="relative w-[90%] max-w-4xl h-[400px]"
//         >
//           <AnimatePresence mode="wait">
//             {/* Loop through cards and show up to 4 cards */}
//             {cards.slice(index, index + 4).map((card, i) => {
//               const isVisible = i === 0; // Only the first card in the slice should be fully visible
//               const scale = 1 - 0.1 * i; // Cards get smaller as they go back
//               const zIndex = i === 0 ? 10 : 5; // Front card should have higher zIndex
//               const translateY = i === 0 ? 0 : i * -40; // Cards should stack with a vertical offset

//               return (
//                 <motion.div
//                   key={card.title}
//                   className={`absolute w-full h-full rounded-2xl overflow-hidden bg-white shadow-lg`}
//                   initial={{
//                     opacity: 0,
//                     y: translateY, // Start with a small offset for all cards
//                     scale: scale,
//                   }}
//                   animate={{
//                     opacity: isVisible ? 1 : 0.5,
//                     y: translateY,
//                     scale: scale,
//                     zIndex: zIndex,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: translateY,
//                     scale: scale,
//                   }}
//                   transition={{
//                     duration: 0.5,
//                   }}
//                   style={{
//                     zIndex: zIndex,
//                   }}
//                 >
//                   <div className="grid md:grid-cols-2 h-full">
//                     <div className="p-6 flex flex-col justify-center">
//                       <h3 className="text-xl md:text-2xl font-bold text-black">
//                         {card.title}
//                       </h3>
//                       <p className="text-gray-700 mt-2">{card.description}</p>
//                       <Button className="mt-4 w-fit">Read More</Button>
//                     </div>
//                     <img
//                       src={card.image}
//                       alt="illustration"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>

//       <div className="flex justify-center space-x-4 mt-6">
//         <Button onClick={prevCard}>Previous</Button>
//         <Button onClick={nextCard}>Next</Button>
//       </div>
//     </div>
//   );
// }
