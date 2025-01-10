import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const colors = [
  "bg-red-800",
  "bg-amber-600",
  "bg-emerald-700",
  "bg-sky-700",
  "bg-purple-700",
  "bg-rose-600",
  "bg-orange-500",
  "bg-teal-600",
  "bg-blue-600",
  "bg-violet-600",
  "bg-pink-600",
  "bg-yellow-500",
  "bg-green-600",
  "bg-cyan-600",
  "bg-indigo-600",
  "bg-fuchsia-600",
  "bg-lime-600",
];

interface HobbiesContentProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

type PositionMap = {
  [key: number]: string;
};

const HobbiesContent = ({ containerRef }: HobbiesContentProps) => {
  const positions: PositionMap = {
    1: "row-start-1 col-start-1",
    2: "row-start-1 col-start-3",
    3: "row-start-1 col-start-4",
    4: "row-start-1 col-start-5",
    5: "row-start-1 col-start-7",
    6: "row-start-2 col-start-1",
    7: "row-start-2 col-start-3",
    8: "row-start-2 col-start-4",
    9: "row-start-2 col-start-6",
    10: "row-start-2 col-start-7",
    11: "row-start-2 col-start-8",
    12: "row-start-3 col-start-1",
    13: "row-start-3 col-start-2",
    14: "row-start-3 col-start-4",
    15: "row-start-3 col-start-5",
    16: "row-start-3 col-start-7",
    17: "row-start-3 col-start-8",
  };

  const getPositionStyles = (pos: number): string => {
    return positions[pos] || "";
  };

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    container: containerRef,
    offset: ["start start", "end end"],
  });

  const squares = colors.map((color, index) => {
    const totalSquares = colors.length;
    const stagger = 0.8 / totalSquares; // Distribute animation duration
    const start = index * stagger;
    const end = Math.min(start + stagger, 1); // Ensure it doesn't exceed the scroll range

    const y = useTransform(
      scrollYProgress,
      [start, end],
      ["100vh", "0px"], // Move precisely to 0px
    );
    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

    return { color, y, opacity };
  });

  const titleY = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <div ref={scrollRef} className="h-[300vh]">
      <div className="h-screen sticky top-0 grid place-items-center">
        <div className="grid w-full h-full grid-cols-8 grid-rows-3 gap-2">
          {squares.map((square, index) => (
            <motion.div
              key={index + 1}
              className={`aspect-square w-full h-full ${square.color} ${getPositionStyles(index + 1)}`}
              style={{
                y: square.y,
                opacity: square.opacity,
              }}
            />
          ))}
        </div>
        <motion.div
          className="absolute grid-area-[main] flex flex-col"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94], // power4 ease
            delay: 0.8,
          }}
        >
          <h2 className="text-[clamp(2rem,7vw,4.5rem)] leading-none mt-2 mb-0 font-medium tracking-tight">
            Hobbies
          </h2>
          <p className="text-[11px] uppercase font-normal text-right self-end m-0 max-w-[100px]">
            Captured in happy moments
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HobbiesContent;
