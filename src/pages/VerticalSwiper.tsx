import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const VerticalSwiper = () => {
  const items = [
    {
      text: "FullStack Certification",
      styles: ["text-4xl font-bold", "text-2xl font-normal"],
    },
    {
      text: "TypeScript Certification",
      styles: ["text-4xl font-bold", "text-2xl font-normal"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle automatic slide change every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2500); // 2.5 seconds delay

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="pr-64 flex flex-col justify-center text-[#EEE9CC] relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }} // Start below the container
          animate={{ y: 0, opacity: 1 }} // Move into view
          exit={{ y: -20, opacity: 0 }} // Move out of view
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0"
        >
          <div>
            {/* Split the text and apply different styles */}
            <span className={`${items[currentIndex].styles[0]}`}>
              {items[currentIndex].text.split(" ")[0]}{" "}
            </span>
            <span className={`${items[currentIndex].styles[1]}`}>
              {items[currentIndex].text.split(" ")[1]}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VerticalSwiper;
