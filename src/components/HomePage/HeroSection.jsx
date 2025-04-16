import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSwipeable } from "react-swipeable";
import HeroCards from "./HeroCards.jsx";
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

        <HeroCards
          cards={cards}
          index={index}
          direction={direction}
          getVisibleCards={getVisibleCards}
        />

        <div className="flex justify-center space-x-4 mt-6">
          {/* <Button onClick={prevCard}>Previous</Button> */}
          <Button onClick={nextCard}>Next</Button>
        </div>
      </div>
    </div>
  );
}
