import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface InterestsProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const Interests = ({ containerRef }: InterestsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    container: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.p
      ref={scrollRef}
      style={{ opacity: scrollYProgress }}
      className="font-neueMontreal text=[#EEE9CC] flex leading-1 p-[40px]  max-w-[1280px] flex-wrap"
    >
      I’m passionate about creating seamless digital experiences through Web
      Development and UI/UX Design. I’m constantly exploring the possibilities
      of Machine Learning and enjoy contributing to the Open Source community.
      These interests drive my work and fuel my curiosity.
    </motion.p>
  );
};

export default Interests;
