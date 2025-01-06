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

// import { motion } from "framer-motion";

// CURRENT
import { motion, MotionProps } from "framer-motion";
import useContainerDimensions from "@/hooks/useContainerDimensions";

const AboutHeader = () => {
  const animation: MotionProps["animate"] = {
    // x: [100, -300, 200],
    x: [-1000, 0],
    transition: {
      duration: 4,
      // repeat: Infinity,
      // repeatType: "reverse", // This matches the allowed values
      ease: "easeInOut",
    },
  };

  const [setContainerRef, dimensions] = useContainerDimensions();
  console.log(dimensions);

  return (
    <div ref={setContainerRef} className="relative h-screen">
      {/* Inline Animated SVG Mask */}

      {/* Masked Content */}
      <div
        className="absolute w-full h-full flex items-center justify-center text-[#1e1915] text-[30vh] leading-tight cursor-default z-10"
        style={{
          background: "#EEE9CC",
          maskRepeat: "no-repeat",
          maskSize: "256", // Adjust mask size as needed
          maskImage: `
            url(/AnimatedRectangleRight.svg),
            url(/AnimatedRectangleDown.svg),
            url(/AnimatedRectangleUp.svg),
            url(/AnimatedRectangleLeft.svg)
         `,
          maskPosition: `
            2% 50%,
            33% 50%,
            66% 50%,
            98% 50%
          `,
        }}
      >
        <motion.p className="" animate={animation}>
          About
          <br />
          <span>Me</span>
        </motion.p>
      </div>

      {/* Default Content */}
      <div className="body w-full h-full flex items-center justify-center text-[#eee9cc] text-[30vh] leading-tight cursor-default">
        <motion.p className="" animate={animation}>
          About
          <br />
          <span>Me</span>
        </motion.p>
      </div>

      {/* overlay */}
      {/* 
      <div className="absolute h-[288px] w-[288px] border-2 border-[#EEE9CC] top-[29.5%] left-[0%]" />
      <div className="absolute h-[288px] w-[288px] border-2 border-[#EEE9CC] top-[29.5%] left-[25%]" />
      <div className="absolute h-[288px] w-[288px] border-2 border-[#EEE9CC] top-[29.5%] left-[51.5%]" />
      <div className="absolute h-[288px] w-[288px] border-2 border-[#EEE9CC] top-[29.5%] left-[77%]" />
      */}
    </div>
  );
};

export default AboutHeader;
