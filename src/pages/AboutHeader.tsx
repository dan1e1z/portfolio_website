// import { motion } from "framer-motion";
//
// import RectangleAnimation from "./RectangleAnimation";
//
// const AboutHeader = () => {
//   return (
//     <div className="relative h-[50vh] overflow-hidden">
//       {/* Parent container for background and text */}
//       <div className="relative h-full w-full">
//         {/* Background with animation */}
//         <div
//           id="background-area"
//           className="flex h-full border border-b-[#EEE9CC] items-center"
//         >
//           <div className="p-4 flex-1">
//             <RectangleAnimation rotate={270} />
//           </div>
//           <div className="p-4 flex-1">
//             <RectangleAnimation rotate={180} />
//           </div>
//           <div className="p-4 flex-1">
//             <RectangleAnimation rotate={0} />
//           </div>
//           <div className="p-4 flex-1">
//             <RectangleAnimation rotate={90} />
//           </div>
//         </div>
//
//         {/* Overlay text */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <motion.div
//             className="text mix-blend-exclusion"
//             animate={{
//               x: [0, -400, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "easeInOut",
//             }}
//           >
//             {/* Text with dynamic colour change based on overlap */}
//             <p className="text-[50vh] leading-[1] font-neueMontreal text-[#EEE9CC] font-outline-4">
//               About
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default AboutHeader;

import { motion } from "framer-motion";

const AboutHeader = () => {
  const rectWidth = 252;
  const numRects = 4;
  const svgWidth = 2000; // Or use `window.innerWidth` if you want it to be dynamic.
  const padding = (svgWidth - rectWidth * numRects) / (numRects + 1);

  // Calculate the vertical middle of the rectangles
  const rectMiddleY = 176 + 76 / 2; // Vertical position of the middle of the animated rectangles

  return (
    <svg
      id="demo"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="400"
      viewBox="0 0 2000 280"
    >
      <defs>
        {/* Clip Path Definitions for Each Animated Rectangle */}
        <clipPath id="clipPath1">
          <rect
            x={padding}
            y="176"
            width={rectWidth}
            height="76"
            fill="#ede9cb"
            rx="0"
            className="animated-shape"
          />
        </clipPath>
        <clipPath id="clipPath2">
          <rect
            x={padding * 2 + rectWidth}
            y="176"
            width={rectWidth}
            height="76"
            fill="#ede9cb"
            rx="0"
            className="animated-shape"
          />
        </clipPath>
        <clipPath id="clipPath3">
          <rect
            x={padding * 3 + rectWidth * 2}
            y="176"
            width={rectWidth}
            height="76"
            fill="#ede9cb"
            rx="0"
            className="animated-shape"
          />
        </clipPath>
        <clipPath id="clipPath4">
          <rect
            x={padding * 4 + rectWidth * 3}
            y="176"
            width={rectWidth}
            height="76"
            fill="#ede9cb"
            rx="0"
            className="animated-shape"
          />
        </clipPath>
      </defs>

      {/* Outer Rectangles (Static) */}
      <rect
        x={padding}
        y="2"
        width={rectWidth}
        height="252"
        fill="#1e1915"
        stroke="#ede9cb"
        strokeWidth="2"
      />
      <rect
        x={padding * 2 + rectWidth}
        y="2"
        width={rectWidth}
        height="252"
        fill="#1e1915"
        stroke="#ede9cb"
        strokeWidth="2"
      />
      <rect
        x={padding * 3 + rectWidth * 2}
        y="2"
        width={rectWidth}
        height="252"
        fill="#1e1915"
        stroke="#ede9cb"
        strokeWidth="2"
      />
      <rect
        x={padding * 4 + rectWidth * 3}
        y="2"
        width={rectWidth}
        height="252"
        fill="#1e1915"
        stroke="#ede9cb"
        strokeWidth="2"
      />

      {/* Animated Rectangles with CSS Keyframe Animations */}
      <motion.rect
        x={padding}
        y="178"
        width={rectWidth}
        height="76"
        fill="#ede9cb"
        rx="0"
        className="animated-shape"
        clipPath="url(#clipPath1)" // Apply clipPath to the animated rectangle
        transform={`rotate(90, ${padding + rectWidth / 2}, ${178 + 76 / 2}) translate(${-87}, ${87})`}
      />
      <motion.rect
        x={padding * 2 + rectWidth}
        y="176"
        width={rectWidth}
        height="76"
        fill="#ede9cb"
        rx="0"
        className="animated-shape"
        clipPath="url(#clipPath2)" // Apply clipPath to the animated rectangle
      />
      <motion.rect
        x={padding * 3 + rectWidth * 2}
        y="176"
        width={rectWidth}
        height="76"
        fill="#ede9cb"
        rx="0"
        className="animated-shape"
        clipPath="url(#clipPath3)" // Apply clipPath to the animated rectangle
        transform={`rotate(270, ${padding * 3 + rectWidth * 2 + rectWidth / 2}, ${176 + 76 / 2}) translate(87, 87)`}
      />
      <motion.rect
        x={padding * 4 + rectWidth * 3}
        y="176"
        width={rectWidth}
        height="76"
        fill="#ede9cb"
        rx="0"
        className="animated-shape"
        clipPath="url(#clipPath4)" // Apply clipPath to the animated rectangle
        transform={`rotate(180, ${padding * 4 + rectWidth * 3 + rectWidth / 2}, ${176 + 76 / 2}) translate(0, 174)`}
      />

      {/* Static Text */}
      <motion.text
        x="50%" // Center text horizontally
        y={rectMiddleY} // Set vertical position at the middle of the rectangles
        textAnchor="middle"
        fontSize="400"
        fill="#ede9cb" // Updated fill to match the background
        animate={{
          x: [200, -400, 200], // Animate the x position of the text
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        About
      </motion.text>

      {/* Apply the clip path to the animated text and animate its fill */}
      <motion.g clipPath="url(#clipPath1)">
        <motion.text
          x="50%" // Center text horizontally
          y={rectMiddleY} // Set vertical position at the middle of the rectangles
          textAnchor="middle"
          fontSize="400"
          fill="#1e1915"
          animate={{
            x: [200, -400, 200], // Animate the x position of the text
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          About
        </motion.text>
      </motion.g>

      {/* Apply the clip path to the animated text for other rectangles */}
      <motion.g clipPath="url(#clipPath2)">
        <motion.text
          x="50%" // Center text horizontally
          y={rectMiddleY} // Set vertical position at the middle of the rectangles
          textAnchor="middle"
          fontSize="400"
          fill="#1e1915"
          animate={{
            x: [200, -400, 200], // Animate the x position of the text
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          About
        </motion.text>
      </motion.g>

      <motion.g clipPath="url(#clipPath3)">
        <motion.text
          x="50%" // Center text horizontally
          y={rectMiddleY} // Set vertical position at the middle of the rectangles
          textAnchor="middle"
          fontSize="400"
          fill="#1e1915"
          animate={{
            x: [200, -400, 200], // Animate the x position of the text
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          About
        </motion.text>
      </motion.g>

      <motion.g clipPath="url(#clipPath4)">
        <motion.text
          x="50%" // Center text horizontally
          y={rectMiddleY} // Set vertical position at the middle of the rectangles
          textAnchor="middle"
          fontSize="400"
          fill="#1e1915"
          animate={{
            x: [200, -400, 200], // Animate the x position of the text
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          About
        </motion.text>
      </motion.g>

      {/* CSS for the animation */}
      <style>
        {`
          .animated-shape {
            animation: shape-animation 6s ease-in-out infinite;
          }
          
          @keyframes shape-animation {
            0%, 100% {
              height: 76px;
              y: 176px;
            }
            33% {
              height: 0;
              y: 252px;
            }
            66% {
              height: 252px;
              y: 0;
            }
          }
        `}
      </style>
    </svg>
  );
};

export default AboutHeader;
