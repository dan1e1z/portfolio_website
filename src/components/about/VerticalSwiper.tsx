import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SLIDE_INTERVAL = 2500;

const slideVariants = {
  enter: { y: 20, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const CERTIFICATIONS = [
  {
    firstWord: "FullStack",
    secondWord: "Certification",
  },
  {
    firstWord: "TypeScript",
    secondWord: "Certification",
  },
] as const;

const VerticalSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[#EEE9CC] absolute top-0 right-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
          // className="flex flex-col items-end" // Added flex container for vertical stacking
        >
          <span className="text-4xl font-bold">
            {CERTIFICATIONS[currentIndex].firstWord}{" "}
          </span>
          <span className="text-2xl font-normal">
            {CERTIFICATIONS[currentIndex].secondWord}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VerticalSwiper;
