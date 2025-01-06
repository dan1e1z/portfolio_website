// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
//
// interface AboutSectionTitleProps {
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// const AboutSectionTitle = ({ containerRef }: AboutSectionTitleProps) => {
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     container: containerRef,
//     offset: ["start start", "end start"],
//   });
//
//   const yPercent = useTransform(scrollYProgress, [0, 1], [0, 35]); // Maps scroll progress to yPercent
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]); // Maps scale transformation
//   const brightness = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["brightness(100%)", "brightness(30%)"],
//   ); // Filter transition
//   const xPercent = useTransform(scrollYProgress, [0, 1], [0, -80]); // Title movement
//
//   return (
//     <motion.div
//       className="uppercase relative leading-1 text-[#1e1915] bg-[#eee9cc] h-screen flex flex-col justify-end"
//       style={{
//         y: yPercent,
//         scale,
//         filter: brightness,
//       }}
//       ref={scrollRef}
//     >
//       <motion.h2
//         className="whitespace-nowrap text-[clamp(2rem,20vw,20rem)] m-0 tracking-[-0.05em] pt-[0.15em] font-normal leading-[0.55] indent-[-0.065em] word-spacing-[0.15em] font-neueMontreal"
//         style={{
//           x: xPercent,
//         }}
//       >
//         About Me
//       </motion.h2>
//     </motion.div>
//   );
// };
//
// export default AboutSectionTitle;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AboutSectionTitleProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const AboutSectionTitle = ({ containerRef }: AboutSectionTitleProps) => {
  const frameRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: frameRef,
    container: containerRef,
    offset: ["start start", "end start"], // This matches 'top bottom' to 'bottom top' in GSAP
  });

  // Create transforms that match GSAP timeline exactly
  const yPercent = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const brightness = useTransform(
    scrollYProgress,
    [0, 1],
    ["brightness(100%)", "brightness(30%)"],
  );
  const xPercent = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <motion.div
      ref={frameRef}
      className="uppercase relative leading-1 text-[#1e1915] bg-[#eee9cc] h-screen flex flex-col justify-end overflow-hidden"
      style={{
        y: yPercent,
        scale,
        filter: brightness,
      }}
    >
      <motion.h2
        className="whitespace-nowrap text-[clamp(2rem,20vw,20rem)] m-0 tracking-[-0.05em] pt-[0.15em] font-normal leading-[0.55] indent-[-0.065em] word-spacing-[0.15em] font-neueMontreal"
        style={{
          x: xPercent,
        }}
      >
        About Me
      </motion.h2>
    </motion.div>
  );
};

export default AboutSectionTitle;
