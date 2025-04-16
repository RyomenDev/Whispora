import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useSwipeable } from "react-swipeable";
import BouncingDotsLoader from "../../assets/svgJSX/BouncingDotsLoader.jsx";

export default function HeroSection({ data }) {
  const cards = data.cards;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const nextCard = () => {
    setDirection("next");
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextCard,
    onSwipedRight: prevCard,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const getVisibleCards = () => {
    return Array.from(
      { length: 4 },
      (_, i) => cards[(index + i) % cards.length]
    );
  };

  return (
    <div className="relative w-full bg-white py-12 px-4 md:px-16 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-[430px] bg-green-400 z-0"
        style={{
          backgroundImage: `url(${data.hero_bg})`,
        }}
      />
      <div className="absolute top-2 left-2 h-14 w-14">
        <BouncingDotsLoader />
      </div>
      <div className="relative z-10">
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
            <AnimatePresence mode="popLayout">
              {getVisibleCards().map((card, i) => {
                const isFront = i === 0;
                const scale = 1 - 0.1 * i;
                const translateY = i * -30;
                const zIndex = cards.length - i;

                return (
                  <motion.div
                    key={`${card.title}-${(index + i) % cards.length}`}
                    className="absolute w-full h-full border-2 border-green-600 rounded-4xl overflow-hidden bg-white shadow-lg"
                    initial={{
                      opacity: 0,
                      y:
                        direction === "next"
                          ? translateY + 40
                          : translateY - 40,
                      scale: scale - 0.05,
                    }}
                    animate={{
                      opacity: isFront ? 1 : 0.5,
                      y: translateY,
                      scale: scale,
                      zIndex,
                    }}
                    exit={{
                      opacity: 0,
                      y: direction === "next" ? -100 : 100,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
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
    </div>
  );
}
