import { motion } from "framer-motion";

const ShapeAnimation = ({ rotate = 0 }) => {
  // Default rotation value is 0
  return (
    <motion.div
      className="w-64 h-64 border-2 border-[#ede9cb] p-2"
      style={{ rotate: rotate }} // Apply rotation to the outer box
    >
      <motion.div
        className="relative w-full bg-[#ede9cb]"
        initial={{ height: "30%", bottom: "0%" }} // Adjust the initial bottom margin
        animate={{
          height: ["30%", "0%", "100%", "30%"],
          bottom: ["0%", "0%", "0%", "0%"], // Ensure the bottom margin stays at 2px throughout
        }}
        transition={{
          duration: 6,
          times: [0, 0.33, 0.66, 1],
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default ShapeAnimation;
