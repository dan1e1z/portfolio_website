// import React from "react";
// import { motion } from "framer-motion";
//
// const AnimatedLetters: React.FC = () => {
//   return (
//     <div className="flex space-x-2">
//       <motion.svg
//         width="631"
//         height="1042"
//         initial={{ rotateY: 0 }}
//         animate={{ rotateY: 360 }}
//         transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
//       >
//         <use href="#letter-e" />
//       </motion.svg>
//       <motion.svg
//         width="631"
//         height="1042"
//         initial={{ rotateY: 0 }}
//         animate={{ rotateY: 360 }}
//         transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
//       >
//         <use href="#letter-e" />
//       </motion.svg>
//       <motion.svg
//         width="631"
//         height="1042"
//         initial={{ rotateY: 0 }}
//         animate={{ rotateY: 360 }}
//         transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
//       >
//         <use href="#letter-e" />
//       </motion.svg>
//       <motion.svg
//         width="631"
//         height="1042"
//         initial={{ rotateY: 0 }}
//         animate={{ rotateY: 360 }}
//         transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
//       >
//         <use href="#letter-e" />
//       </motion.svg>
//     </div>
//   );
// };
//
// export default AnimatedLetters;

// TEST1
// import React from "react";
// import { motion } from "framer-motion";
//
// const AnimatedLetters: React.FC = () => {
//   return (
//     <>
//       {/* Define the SVG symbol in the document */}
//       <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
//         <symbol id="letter-e" viewBox="0 0 631 1042" fill="none">
//           <path
//             d="M396.784 176.16 518.421 8H289.925l-61.387 168.16h168.246ZM8 1034h615V864.703H203.527V714.721h395.601V545.424H203.527V407.941h410.379V238.644H8V1034Z"
//             stroke-width="16"
//             stroke="currentColor"
//           ></path>
//         </symbol>
//       </svg>
//
//       {/* Animated Letter Component */}
//       <div className="flex space-x-2">
//         <motion.svg
//           width="631"
//           height="1042"
//           initial={{ rotateY: 0 }}
//           animate={{ rotateY: 360 }}
//           transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
//         >
//           <use href="#letter-e" />
//         </motion.svg>
//         <motion.svg
//           width="631"
//           height="1042"
//           initial={{ rotateY: 0 }}
//           animate={{ rotateY: 360 }}
//           transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
//         >
//           <use href="#letter-e" />
//         </motion.svg>
//         <motion.svg
//           width="631"
//           height="1042"
//           initial={{ rotateY: 0 }}
//           animate={{ rotateY: 360 }}
//           transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
//         >
//           <use href="#letter-e" />
//         </motion.svg>
//         <motion.svg
//           width="631"
//           height="1042"
//           initial={{ rotateY: 0 }}
//           animate={{ rotateY: 360 }}
//           transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
//         >
//           <use href="#letter-e" />
//         </motion.svg>
//       </div>
//     </>
//   );
// };
//
// export default AnimatedLetters;

// TEST2
// import React from "react";
// import { motion } from "framer-motion";
//
// const AnimatedText: React.FC = () => {
//   return (
//     <div className="letter flex">
//       <motion.svg
//         width="631"
//         height="1042"
//         className="svelte-nievjq"
//         animate={{ rotateY: 360 }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           repeatDelay: 0.75,
//           ease: "easeInOut",
//         }}
//       >
//         <use href="#letter-e"></use>
//       </motion.svg>
//       <motion.svg
//         width="631"
//         height="1042"
//         className="svelte-nievjq opacity-75"
//         animate={{ rotateY: 360 }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           repeatDelay: 1.5,
//           ease: "easeInOut",
//         }}
//       >
//         <use href="#letter-e"></use>
//       </motion.svg>
//       <motion.svg
//         width="631"
//         height="1042"
//         className="svelte-nievjq opacity-50"
//         animate={{ rotateY: 360 }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           repeatDelay: 2.25,
//           ease: "easeInOut",
//         }}
//       >
//         <use href="#letter-e"></use>
//       </motion.svg>
//       <motion.svg
//         width="631"
//         height="1042"
//         className="svelte-nievjq opacity-25"
//         animate={{ rotateY: 360 }}
//         transition={{
//           duration: 5,
//           repeat: Infinity,
//           repeatDelay: 3,
//           ease: "easeInOut",
//         }}
//       >
//         <use href="#letter-e"></use>
//       </motion.svg>
//       <svg width="0" height="0" style={{ position: "absolute" }}>
//         <symbol id="letter-e" viewBox="0 0 631 1042" fill="none">
//           <path
//             d="M396.784 176.16 518.421 8H289.925l-61.387 168.16h168.246ZM8 1034h615V864.703H203.527V714.721h395.601V545.424H203.527V407.941h410.379V238.644H8V1034Z"
//             strokeWidth="16"
//             stroke="currentColor"
//           ></path>
//         </symbol>
//       </svg>
//     </div>
//   );
// };
//
// export default AnimatedText;

// TEST3
import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  isAnimated?: boolean;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  isAnimated = true,
  className = "",
}) => {
  const cubicBezier = [0.65, 0, 0.35, 1];

  // text-[#eedc68]
  return (
    <div className={`w-full h-full`}>
      <div
        className={`
          text-[#eee9cc] grid relative z-[4] mix-blend-difference
          w-full h-full
          ${className}
        `}
        style={{ perspective: "1600px" }}
      >
        {[0, 75, 150, 225].map((delay, index) => (
          <motion.svg
            key={index}
            viewBox="0 0 631 1042"
            className="block w-full h-full col-start-1 row-start-1"
            style={{
              opacity: index === 0 ? 1 : 1 - index * 0.25,
              transformStyle: "preserve-3d",
              transformOrigin: "50% 50%",
            }}
            animate={
              isAnimated
                ? {
                    rotateY: [0, 360],
                  }
                : {}
            }
            transition={{
              duration: 5,
              ease: cubicBezier,
              repeat: Infinity,
              delay: delay / 1000,
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            <use href="#letter-e" />
          </motion.svg>
        ))}

        <svg width="0" height="0" className="absolute">
          <symbol id="letter-e" viewBox="0 0 631 1042" fill="none">
            {/* E-acent */}
            {/* <path */}
            {/*   d="M396.784 176.16 518.421 8H289.925l-61.387 168.16h168.246ZM8 1034h615V864.703H203.527V714.721h395.601V545.424H203.527V407.941h410.379V238.644H8V1034Z" */}
            {/*   strokeWidth="16" */}
            {/*   stroke="currentColor" */}
            {/* /> */}
            {/* A */}
            {/* <path */}
            {/*   d="M315 0L0 1042h157l63-210h191l63 210h157L315 0zm-64 674l80-268 80 268H251z" */}
            {/*   strokeWidth="16" */}
            {/*   stroke="currentColor" */}
            {/* /> */}
            {/* <path */}
            {/*   d="M396 176v205h-16q-8-59-28-94q-20-35-58-56q-38-21-78-21q-46 0-76 28q-30 28-30 63q0 27 19 50q27 33 130 88q83 45 114 69q31 24 47 56q17 33 17 68q0 68-53 117q-52 49-135 49q-26 0-49-4q-14-2-57-16q-43-14-54-14q-11 0-18 7q-6 7-9 27h-16V524h16q11 64 31 96q19 32 59 53q40 21 87 21q55 0 87-29q32-29 32-69q0-22-12-44q-12-22-37-42q-17-13-94-56q-76-43-109-69q-32-25-49-56q-17-31-17-68q0-64 49-110q49-47 125-47q47 0 101 23q25 11 35 11q11 0 18-7q7-7 12-28z" */}
            {/*   strokeWidth="16" */}
            {/*   stroke="currentColor" */}
            {/* /> */}
            {/* <path */}
            {/*   d="M315 8L250 176h-15l46-168z" */}
            {/*   strokeWidth="16" */}
            {/*   stroke="currentColor" */}
            {/* /> */}
            {/* <path */}
            {/*   d="M8 1034V8h157l151 726 151-726h156v1026H498V290L362 1034H269L133 290v744H8z   M396.784 176.16 518.421 8H289.925l-61.387 168.16h168.246ZM8" */}
            {/*   strokeWidth="16" */}
            {/*   stroke="currentColor" */}
            {/* /> */}
            <text
              x="50%"
              y="60%"
              font-size="900"
              font-family="Arial, sans-serif"
              font-weight="bold"
              text-anchor="middle"
              alignment-baseline="middle"
              stroke="currentColor"
              strokeWidth="16"
            >
              Ḿ
            </text>
          </symbol>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedText;
