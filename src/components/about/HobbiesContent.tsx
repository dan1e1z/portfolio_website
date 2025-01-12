import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    container: containerRef,
    offset: ["start end", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);

  const overlayOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 0.5]);

  const squares = colors.map((color, index) => {
    const totalSquares = colors.length;
    const stagger = 0.7 / totalSquares;
    const start = index * stagger;
    const end = Math.min(start + stagger + 0.1, 0.95);

    const y = useTransform(scrollYProgress, [start, end], ["100vh", "0vh"], {
      clamp: true,
    });

    const opacity = useTransform(
      scrollYProgress,
      [start, Math.min(start + 0.1, 0.95)],
      [0, 1],
      {
        clamp: true,
      },
    );

    return { color, y, opacity };
  });

  const { mouseX, mouseY } = useMousePosition(gridRef);
  const size = isHovered ? 200 : 60;

  return (
    <div ref={scrollRef} className="h-[300vh] relative">
      <div
        ref={gridRef}
        className="h-screen sticky top-0 grid place-items-center overflow-hidden"
      >
        <div className="grid w-full h-full grid-cols-8 grid-rows-3 gap-2">
          {squares.map((square, index) => (
            <motion.div
              key={index + 1}
              className={`aspect-square w-full h-full ${square.color} ${getPositionStyles(index + 1)}`}
              style={{
                y: square.y,
                opacity: square.opacity,
                position: "relative",
              }}
              initial={{ y: "100vh", opacity: 0 }}
            />
          ))}
        </div>
        <motion.div
          className="absolute grid-area-[main] flex flex-col"
          initial={{ y: "100%", opacity: 0 }}
          style={{
            y: useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]),
            opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
          }}
        >
          <h2 className="text-[clamp(2rem,7vw,4.5rem)] leading-none mt-2 mb-0 font-medium tracking-tight">
            Hobbies
          </h2>
          <p className="text-[11px] uppercase font-normal text-right self-end m-0 max-w-[100px]">
            Captured in happy moments
          </p>
        </motion.div>

        {/* Mask Layer */}
        <motion.div
          className="absolute grid w-full h-full grid-cols-8 grid-rows-3 gap-2"
          style={{
            opacity: overlayOpacity,
            maskImage: "url(/Circle.svg)",
            WebkitMaskImage: "url(/Circle.svg)",
            backgroundColor: "#FF0000",
            maskRepeat: "no-repeat",
            maskSize: `${size}px`,
            WebkitMaskSize: `${size}px`,
            maskPosition: `${mouseX - size / 2}px ${mouseY - size / 2}px`,
            WebkitMaskPosition: `${mouseX - size / 2}px ${mouseY - size / 2}px`,
          }}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="row-start-1 col-start-3 flex justify-center items-center text-[#eee9cc] text-2xl"
          >
            Reading
          </div>
          <div
            className="row-start-2 col-start-3 flex justify-center items-center text-[#eee9cc] text-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Hiking
          </div>
          <div
            className="row-start-2 col-start-7 flex justify-center items-center text-[#eee9cc] text-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Photography
          </div>
          <div
            className="row-start-3 col-start-2 flex justify-center items-center text-[#eee9cc] text-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Chess
          </div>
          <div
            className="row-start-3 col-start-8 flex justify-center items-center text-[#eee9cc] text-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Gaming
          </div>
        </motion.div>

        {/* Title with scroll-based opacity */}
        <motion.h2
          className="absolute top-0 left-0 mt-8 ml-4 text-[#eee9cc] font-pacifico uppercase text-6xl font-medium tracking-tight"
          style={{ opacity: titleOpacity }}
        >
          Look for my <br />
          hobbies
        </motion.h2>
      </div>
    </div>
  );
};

export default HobbiesContent;
