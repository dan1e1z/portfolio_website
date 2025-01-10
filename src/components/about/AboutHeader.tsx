import { motion, MotionProps } from "framer-motion";
import useContainerDimensions from "@/hooks/useContainerDimensions";

const AboutHeader = () => {
  const animation: MotionProps["animate"] = {
    // x: [100, -300, 200],
    x: [-1000, 0],
    transition: {
      duration: 4,
      ease: "easeIn",
    },
  };

  const [setContainerRef, dimensions] = useContainerDimensions();
  // console.log(dimensions);

  return (
    <div ref={setContainerRef} className="">
      <div className="text-8xl font-neueMontreal text-[#EEE9CC]">
        <motion.p className="pb-36" animate={animation}>
          About
          <br />
          Me
        </motion.p>
      </div>
    </div>
  );
};

export default AboutHeader;
