// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";
// import useContainerDimensions from "@/hooks/useContainerDimensions";
//
// export default function Paragraph({ paragraph, containerRef }) {
//   const [setContainerRef, dimensions] = useContainerDimensions();
//   console.log(dimensions);
//
//   const scrollRef = useRef<HTMLParagraphElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     container: containerRef,
//     offset: ["start 0.9", "start 0.25"],
//   });
//
//   const words = paragraph.split(" ");
//   return (
//     <p
//       ref={scrollRef}
//       className="flex text-6xl leader-1 text-[#EEE9CC] flex-wrap justify-center"
//     >
//       {words.map((word, i) => {
//         const start = i / words.length;
//         const end = start + 1 / words.length;
//         return (
//           <Word key={i} progress={scrollYProgress} range={[start, end]}>
//             {word}
//           </Word>
//         );
//       })}
//     </p>
//   );
// }
//
// const Word = ({ children, progress, range }) => {
//   const amount = range[1] - range[0];
//   const step = amount / children.length;
//   return (
//     <span className="relative mr-[12px] mt-[12px]">
//       {children.split("").map((char, i) => {
//         const start = range[0] + i * step;
//         const end = range[0] + (i + 1) * step;
//         return (
//           <Char key={`c_${i}`} progress={progress} range={[start, end]}>
//             {char}
//           </Char>
//         );
//       })}
//     </span>
//   );
// };
//
// const Char = ({ children, progress, range }) => {
//   const opacity = useTransform(progress, range, [0, 1]);
//   return (
//     <span>
//       <span className="absolute opacity-[20%]">{children}</span>
//       <motion.span style={{ opacity: opacity }}>{children}</motion.span>
//     </span>
//   );
// };

// TEST1

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Paragraph({ paragraph, containerRef }) {
  const scrollRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    container: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <motion.p
      ref={scrollRef}
      className="flex text-6xl leader-1 text-[#EEE9CC] flex-wrap justify-center"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  const springConfig = { stiffness: 1000, damping: 100 };
  const opacity = useSpring(
    useTransform(progress, range, [0, 1]),
    springConfig,
  );
  const skewX = useSpring(
    useTransform(progress, range, [-20, 0]),
    springConfig,
  );
  const blur = useSpring(useTransform(progress, range, [8, 0]), springConfig);

  return (
    <motion.span
      className="relative mr-[12px] mt-[12px] inline-block"
      style={{
        opacity,
        skewX,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
      }}
    >
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </motion.span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="inline-block will-change-[filter,transform]">
      <span className="absolute opacity-[20%]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
