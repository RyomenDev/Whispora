import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Card from "./card.jsx";

const HeroCards = ({ cards, index, direction, getVisibleCards }) => {
  return (
    <div className="relative flex justify-center mt-12">
      <div className="relative w-[90%] max-w-4xl h-[400px]">
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
                  y: direction === "next" ? translateY + 40 : translateY - 40,
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
                <Card card={card} index={i} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroCards;
