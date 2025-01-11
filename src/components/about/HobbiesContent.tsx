// import React, { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
//
// const colors = [
//   "bg-red-800",
//   "bg-amber-600",
//   "bg-emerald-700",
//   "bg-sky-700",
//   "bg-purple-700",
//   "bg-rose-600",
//   "bg-orange-500",
//   "bg-teal-600",
//   "bg-blue-600",
//   "bg-violet-600",
//   "bg-pink-600",
//   "bg-yellow-500",
//   "bg-green-600",
//   "bg-cyan-600",
//   "bg-indigo-600",
//   "bg-fuchsia-600",
//   "bg-lime-600",
// ];
//
// interface HobbiesContentProps {
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// type PositionMap = {
//   [key: number]: string;
// };
//
// const HobbiesContent = ({ containerRef }: HobbiesContentProps) => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//
//   const positions: PositionMap = {
//     1: "row-start-1 col-start-1",
//     2: "row-start-1 col-start-3",
//     3: "row-start-1 col-start-4",
//     4: "row-start-1 col-start-5",
//     5: "row-start-1 col-start-7",
//     6: "row-start-2 col-start-1",
//     7: "row-start-2 col-start-3",
//     8: "row-start-2 col-start-4",
//     9: "row-start-2 col-start-6",
//     10: "row-start-2 col-start-7",
//     11: "row-start-2 col-start-8",
//     12: "row-start-3 col-start-1",
//     13: "row-start-3 col-start-2",
//     14: "row-start-3 col-start-4",
//     15: "row-start-3 col-start-5",
//     16: "row-start-3 col-start-7",
//     17: "row-start-3 col-start-8",
//   };
//
//   const getPositionStyles = (pos: number): string => {
//     return positions[pos] || "";
//   };
//
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const gridRef = useRef<HTMLDivElement | null>(null);
//
//   useEffect(() => {
//     if (gridRef.current) {
//       setDimensions({
//         width: gridRef.current.offsetWidth,
//         height: gridRef.current.offsetHeight,
//       });
//       console.log("dimensions:", dimensions);
//     }
//   }, []);
//
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     container: containerRef,
//     offset: ["start start", "end end"],
//   });
//
//   // Generate random Y values for each square
//   const getRandomY = () => {
//     const min = dimensions.height || window.innerHeight;
//     const max = (dimensions.height || window.innerHeight) * 1.8;
//     return Math.floor(Math.random() * (max - min) + min);
//   };
//
//   const squares = colors.map((color, index) => {
//     const stagger = 0.07;
//     const start = index * stagger;
//     const end = start + 0.3; // Increased duration for smoother animation
//
//     const y = useTransform(
//       scrollYProgress,
//       [start, end],
//       [`${getRandomY()}px`, "0px"],
//     );
//
//     const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
//     return { color, y, opacity };
//   });
//
//   const titleY = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);
//   const titleOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
//
//   return (
//     <div ref={scrollRef} className="h-[300vh]">
//       <div
//         ref={gridRef}
//         className="h-screen sticky top-0 grid place-items-center"
//       >
//         <div className="grid w-full h-full grid-cols-8 grid-rows-3 gap-2">
//           {squares.map((square, index) => (
//             <motion.div
//               key={index + 1}
//               className={`aspect-square w-full h-full ${square.color} ${getPositionStyles(index + 1)}`}
//               style={{
//                 y: square.y,
//                 // opacity: square.opacity,
//               }}
//             />
//           ))}
//         </div>
//         <motion.div
//           className="absolute grid-area-[main] flex flex-col"
//           initial={{ y: "100%", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           style={{
//             y: titleY,
//             opacity: titleOpacity,
//           }}
//           transition={{
//             duration: 1.2,
//             ease: [0.25, 0.46, 0.45, 0.94],
//             delay: 0.8,
//           }}
//         >
//           <h2 className="text-[clamp(2rem,7vw,4.5rem)] leading-none mt-2 mb-0 font-medium tracking-tight">
//             Hobbies
//           </h2>
//           <p className="text-[11px] uppercase font-normal text-right self-end m-0 max-w-[100px]">
//             Captured in happy moments
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
//
// export default HobbiesContent;

// TEST1 - WORKING;

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
//
// const colors = [
//   "bg-red-800",
//   "bg-amber-600",
//   "bg-emerald-700",
//   "bg-sky-700",
//   "bg-purple-700",
//   "bg-rose-600",
//   "bg-orange-500",
//   "bg-teal-600",
//   "bg-blue-600",
//   "bg-violet-600",
//   "bg-pink-600",
//   "bg-yellow-500",
//   "bg-green-600",
//   "bg-cyan-600",
//   "bg-indigo-600",
//   "bg-fuchsia-600",
//   "bg-lime-600",
// ];
//
// interface HobbiesContentProps {
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// type PositionMap = {
//   [key: number]: string;
// };
//
// const HobbiesContent = ({ containerRef }: HobbiesContentProps) => {
//   const positions: PositionMap = {
//     1: "row-start-1 col-start-1",
//     2: "row-start-1 col-start-3",
//     3: "row-start-1 col-start-4",
//     4: "row-start-1 col-start-5",
//     5: "row-start-1 col-start-7",
//     6: "row-start-2 col-start-1",
//     7: "row-start-2 col-start-3",
//     8: "row-start-2 col-start-4",
//     9: "row-start-2 col-start-6",
//     10: "row-start-2 col-start-7",
//     11: "row-start-2 col-start-8",
//     12: "row-start-3 col-start-1",
//     13: "row-start-3 col-start-2",
//     14: "row-start-3 col-start-4",
//     15: "row-start-3 col-start-5",
//     16: "row-start-3 col-start-7",
//     17: "row-start-3 col-start-8",
//   };
//
//   const getPositionStyles = (pos: number): string => {
//     return positions[pos] || "";
//   };
//
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     container: containerRef,
//     offset: ["start start", "end end"],
//   });
//
//   const baseStagger = 0.05;
//   const overlap = 0.6;
//
//   const squares = colors.map((color, index) => {
//     const stagger = baseStagger * (1 - overlap); // Adjust stagger duration to overlap
//     const start = index * stagger;
//     const end = Math.min(start + baseStagger, 1);
//
//     const y = useTransform(
//       scrollYProgress,
//       [start, end],
//       ["690vh", "0px"], // Move precisely to 0px
//     );
//     const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
//
//     return { color, y, opacity };
//   });
//
//   const titleY = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"]);
//   const titleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
//
//   return (
//     <div ref={scrollRef} className="h-[300vh]">
//       <div className="h-screen sticky top-0 grid place-items-center">
//         <div className="grid w-full h-full grid-cols-8 grid-rows-3 gap-2">
//           {squares.map((square, index) => (
//             <motion.div
//               key={index + 1}
//               className={`aspect-square w-full h-full ${square.color} ${getPositionStyles(index + 1)}`}
//               style={{
//                 y: square.y,
//               }}
//             />
//           ))}
//         </div>
//         <motion.div
//           className="absolute grid-area-[main] flex flex-col"
//           initial={{ y: "100%", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           style={{
//             y: titleY,
//             opacity: titleOpacity,
//           }}
//           transition={{
//             duration: 1.2,
//             ease: [0.25, 0.46, 0.45, 0.94], // power4 ease
//             delay: 0.8,
//           }}
//         >
//           <h2 className="text-[clamp(2rem,7vw,4.5rem)] leading-none mt-2 mb-0 font-medium tracking-tight">
//             Hobbies
//           </h2>
//           <p className="text-[11px] uppercase font-normal text-right self-end m-0 max-w-[100px]">
//             Captured in happy moments
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
//
// export default HobbiesContent;

// TEST2
import React, { useRef, useEffect } from "react";
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
  // Updated positions to ensure correct grid placement
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
    offset: ["start end", "end end"],
  });

  const squares = colors.map((color, index) => {
    const totalSquares = colors.length;
    // Adjusted timing to ensure complete animation
    const stagger = 0.7 / totalSquares; // Increased total animation duration
    const start = index * stagger;
    const end = Math.min(start + stagger + 0.1, 0.95); // Ensure animation completes before scroll ends

    // Debug information for last three squares
    if (index >= colors.length - 3) {
      console.log(`Square ${index + 1} animation parameters:`, {
        start,
        end,
        position: positions[index + 1],
      });
    }

    const y = useTransform(scrollYProgress, [start, end], ["100vh", "0vh"], {
      clamp: true, // Ensure transformation stays within bounds
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

  return (
    <div ref={scrollRef} className="h-[300vh] relative">
      <div className="h-screen sticky top-0 grid place-items-center overflow-hidden">
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
              // Added data attribute for debugging
              data-square-index={index + 1}
            />
          ))}
        </div>
        <motion.div
          className="absolute grid-area-[main] flex flex-col"
          initial={{ y: "100%", opacity: 0 }}
          style={{
            y: useTransform(scrollYProgress, [0.7, 0.9], ["100%", "0%"]),
            opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
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
