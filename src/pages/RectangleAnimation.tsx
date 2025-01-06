// import { motion } from "framer-motion";
//
// const ShapeAnimation = ({ rotate = 0 }) => {
//   // Default rotation value is 0
//   return (
//     <motion.div
//       className="w-64 h-64 border-2 border-[#ede9cb] p-2"
//       style={{ rotate: rotate }} // Apply rotation to the outer box
//     >
//       <motion.div
//         className="relative w-full bg-[#ede9cb]"
//         initial={{ height: "30%", bottom: "0%" }} // Adjust the initial bottom margin
//         animate={{
//           height: ["30%", "0%", "100%", "30%"],
//           bottom: ["0%", "0%", "0%", "0%"], // Ensure the bottom margin stays at 2px throughout
//         }}
//         transition={{
//           duration: 6,
//           times: [0, 0.33, 0.66, 1],
//           ease: "easeInOut",
//           repeat: Infinity,
//         }}
//       />
//     </motion.div>
//   );
// };
//
// export default ShapeAnimation;

import { motion } from "framer-motion";

const RectangleAnimation = ({ rotate = 0, id = "rect" }) => {
  // Default rotation value is 0
  return (
    <motion.svg
      width="256"
      height="256"
      viewBox="0 0 256 256"
      // style={{ rotate: rotate }} // Apply rotation to the whole SVG element
      style={{
        transform: `rotate(${rotate}deg)`,
      }}
      className="border-2 border-[#ede9cb]"
    >
      <motion.rect
        id={id}
        x="10"
        y="10"
        width="236"
        height="30"
        fill="#ede9cb"
        initial={{ height: 30 }} // Start with a height of 30
        animate={{
          height: ["30%", "0%", "93%", "30%"],
        }}
        transition={{
          duration: 6,
          times: [0, 0.33, 0.66, 1],
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.svg>
  );
};

export default RectangleAnimation;
