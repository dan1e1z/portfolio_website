import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AboutSectionTitleProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const AboutSectionTitle = ({ containerRef }: AboutSectionTitleProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  const yPercent = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const brightness = useTransform(
    scrollYProgress,
    [0, 1],
    ["brightness(100%)", "brightness(30%)"],
  );
  const xPercent = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden flex flex-col justify-end bg-[#eee9cc]"
      style={{
        y: yPercent,
        scale,
        filter: brightness,
      }}
      ref={scrollRef}
    >
      <motion.h2
        className="absolute w-full text-[20rem] leading-none text-center whitespace-nowrap text-[#1c1915]"
        style={{
          x: xPercent,
        }}
      >
        About Me About Me
      </motion.h2>
    </motion.div>
  );
};

export default AboutSectionTitle;
