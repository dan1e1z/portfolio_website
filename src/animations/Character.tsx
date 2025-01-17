// import {
//   useScroll,
//   useTransform,
//   motion,
//   useSpring,
//   MotionValue,
// } from "framer-motion";
// import { useRef } from "react";
// import useContainerDimensions from "@/hooks/useContainerDimensions";
//
// interface ParagraphProps {
//   paragraph: string;
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// export default function Paragraph({ paragraph, containerRef }: ParagraphProps) {
//   const scrollRef = useRef<HTMLParagraphElement>(null);
//
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     container: containerRef,
//     offset: ["start 0.9", "start 0.25"],
//   });
//
//   const words = paragraph.split(" ");
//
//   // const textSize = useContainerTextSize(containerRef, paragraph);
//   // console.log("textSize", textSize);
//   const dimensions = useContainerDimensions(containerRef);
//   // console.log("dimensions", dimensions);
//
//   let textSize: string = "text-3xl"; // Default value
//
//   if (dimensions?.width !== undefined && dimensions.width < 517) {
//     textSize = "text-3xl";
//   } else if (dimensions?.width !== undefined && dimensions.width < 732) {
//     textSize = "text-4xl";
//   } else if (dimensions?.width !== undefined && dimensions.width < 1173) {
//     textSize = "text-5xl";
//   } else {
//     textSize = "text-6xl";
//   }
//
//   return (
//     <motion.p
//       ref={scrollRef}
//       className={` relative flex ${textSize} leader-1 text-[#EEE9CC] flex-wrap justify-center`}
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
//     </motion.p>
//   );
// }
//
// interface WordProps {
//   children: string;
//   progress: MotionValue<number>;
//   range: [number, number];
// }
//
// const Word = ({ children, progress, range }: WordProps) => {
//   const amount = range[1] - range[0];
//   const step = amount / children.length;
//
//   const springConfig = { stiffness: 1000, damping: 100 };
//   const opacity = useSpring(
//     useTransform(progress, range, [0, 1]),
//     springConfig,
//   );
//   const skewX = useSpring(
//     useTransform(progress, range, [-20, 0]),
//     springConfig,
//   );
//   const blur = useSpring(useTransform(progress, range, [8, 0]), springConfig);
//
//   return (
//     <motion.span
//       className="relative mr-[12px] mt-[12px] inline-block"
//       style={{
//         opacity,
//         skewX,
//         filter: useTransform(blur, (value) => `blur(${value}px)`),
//       }}
//     >
//       {children.split("").map((char, i) => {
//         const start = range[0] + i * step;
//         const end = range[0] + (i + 1) * step;
//         return (
//           <Char key={`c_${i}`} progress={progress} range={[start, end]}>
//             {char}
//           </Char>
//         );
//       })}
//     </motion.span>
//   );
// };
//
// interface CharProps {
//   children: string;
//   progress: MotionValue<number>;
//   range: [number, number];
// }
//
// const Char = ({ children, progress, range }: CharProps) => {
//   const opacity = useTransform(progress, range, [0, 1]);
//   return (
//     <span className="inline-block will-change-[filter,transform]">
//       <span className="absolute opacity-[20%]">{children}</span>
//       <motion.span style={{ opacity }}>{children}</motion.span>
//     </span>
//   );
// };

// TEST1
// import {
//   useScroll,
//   useTransform,
//   motion,
//   useSpring,
//   MotionValue,
// } from "framer-motion";
// import { useRef, useMemo } from "react";
// import useContainerDimensions from "@/hooks/useContainerDimensions";
//
// interface ParagraphProps {
//   paragraph: string;
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// // Memoized spring config to avoid recreating it
// const springConfig = { stiffness: 1000, damping: 100 };
//
// export default function Paragraph({ paragraph, containerRef }: ParagraphProps) {
//   const scrollRef = useRef<HTMLParagraphElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     container: containerRef,
//     offset: ["start 0.9", "start 0.25"],
//   });
//
//   // Memoize words array to prevent unnecessary recalculations
//   const words = useMemo(() => paragraph.split(" "), [paragraph]);
//
//   const dimensions = useContainerDimensions(containerRef);
//
//   // Memoize text size calculation
//   const textSize = useMemo(() => {
//     const width = dimensions?.width;
//     if (!width) return "text-3xl";
//     if (width < 517) return "text-3xl";
//     if (width < 732) return "text-4xl";
//     if (width < 1173) return "text-5xl";
//     return "text-6xl";
//   }, [dimensions?.width]);
//
//   return (
//     <motion.p
//       ref={scrollRef}
//       className={`relative flex ${textSize} leader-1 text-[#EEE9CC] flex-wrap justify-center`}
//     >
//       {words.map((word, i) => {
//         const start = i / words.length;
//         const end = start + 1 / words.length;
//         return (
//           <AnimatedWord
//             key={`w_${i}`}
//             word={word}
//             progress={scrollYProgress}
//             range={[start, end]}
//           />
//         );
//       })}
//     </motion.p>
//   );
// }
//
// interface WordProps {
//   word: string;
//   progress: MotionValue<number>;
//   range: [number, number];
// }
//
// const AnimatedWord = ({ word, progress, range }: WordProps) => {
//   // Create single spring animations for the word
//   const opacity = useSpring(
//     useTransform(progress, range, [0, 1]),
//     springConfig,
//   );
//
//   const skewX = useSpring(
//     useTransform(progress, range, [-20, 0]),
//     springConfig,
//   );
//
//   const blur = useSpring(useTransform(progress, range, [8, 0]), springConfig);
//
//   // Pre-calculate character ranges
//   const chars = useMemo(() => {
//     const amount = range[1] - range[0];
//     const step = amount / word.length;
//     return word.split("").map((char, i) => ({
//       char,
//       start: range[0] + i * step,
//       end: range[0] + (i + 1) * step,
//     }));
//   }, [word, range]);
//
//   return (
//     <motion.span
//       className="relative mr-[12px] mt-[12px] inline-block"
//       style={{
//         opacity,
//         skewX,
//         filter: useTransform(blur, (value) => `blur(${value}px)`),
//       }}
//     >
//       {chars.map(({ char, start, end }, i) => (
//         <AnimatedChar key={`c_${i}`} progress={progress} range={[start, end]}>
//           {char}
//         </AnimatedChar>
//       ))}
//     </motion.span>
//   );
// };
//
// interface CharProps {
//   children: string;
//   progress: MotionValue<number>;
//   range: [number, number];
// }
//
// const AnimatedChar = ({ children, progress, range }: CharProps) => {
//   const opacity = useTransform(progress, range, [0, 1]);
//
//   return (
//     <span className="inline-block will-change-[filter,transform]">
//       <span className="absolute opacity-[20%]">{children}</span>
//       <motion.span style={{ opacity }}>{children}</motion.span>
//     </span>
//   );
// };

// TEST2

import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef, useMemo } from "react";
import useContainerDimensions from "@/hooks/useContainerDimensions";

interface ParagraphProps {
  paragraph: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

const springConfig = { stiffness: 1000, damping: 100 };

export default function Character({ paragraph, containerRef }: ParagraphProps) {
  const scrollRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    container: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = useMemo(() => paragraph.split(" "), [paragraph]);

  const dimensions = useContainerDimensions(containerRef);

  const textSize = useMemo(() => {
    const width = dimensions?.width;
    if (!width) return "text-3xl";
    if (width < 517) return "text-3xl";
    if (width < 732) return "text-4xl";
    if (width < 1173) return "text-5xl";
    return "text-6xl";
  }, [dimensions?.width]);

  return (
    <motion.p
      ref={scrollRef}
      className={`relative flex ${textSize} leader-1 text-[#EEE9CC] flex-wrap justify-center`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <AnimatedWord
            key={`w_${i}`}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </motion.p>
  );
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedWord = ({ word, progress, range }: WordProps) => {
  const opacity = useSpring(
    useTransform(progress, range, [0, 1]),
    springConfig,
  );

  const skewX = useSpring(
    useTransform(progress, range, [-20, 0]),
    springConfig,
  );

  const blur = useSpring(useTransform(progress, range, [8, 0]), springConfig);

  const chars = useMemo(() => {
    const amount = range[1] - range[0];
    const step = amount / word.length;
    return word.split("").map((char, i) => ({
      char,
      start: range[0] + i * step,
      end: range[0] + (i + 1) * step,
    }));
  }, [word, range]);

  return (
    <motion.span
      className="relative mr-[12px] mt-[12px] inline-block"
      style={{
        opacity,
        skewX,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
      }}
    >
      {chars.map(({ char, start, end }, i) => (
        <AnimatedChar key={`c_${i}`} progress={progress} range={[start, end]}>
          {char}
        </AnimatedChar>
      ))}
    </motion.span>
  );
};

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar = ({ children, progress, range }: CharProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="inline-block will-change-[filter,transform]">
      <span className="absolute opacity-[20%]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
