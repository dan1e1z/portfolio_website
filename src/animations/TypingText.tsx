// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
//
// interface TypingTextProps {
//   text: string;
//   speed?: number;
// }
//
// const TypingText: React.FC<TypingTextProps> = ({ text, speed = 0.3 }) => {
//   const [displayedText, setDisplayedText] = useState("");
//
//   useEffect(() => {
//     let index = 0;
//     const timer = setInterval(() => {
//       if (index < text.length) {
//         setDisplayedText((prev) => prev + text.charAt(index));
//         index++;
//       } else {
//         clearInterval(timer);
//       }
//     }, speed * 1000);
//
//     return () => clearInterval(timer);
//   }, [text, speed]);
//
//   return (
//     <div className="font-mono mt-2">
//       {displayedText}
//       <motion.span
//         animate={{
//           opacity: [0, 1],
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//       >
//         _
//       </motion.span>
//     </div>
//   );
// };
//
// export default TypingText;

import { motion } from "framer-motion";

export const sentenceVariants = {
  hidden: {},
  // change staggerChildren variable to speed up or slow down typing.
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

const TypingText = ({ text, ...rest }) => (
  <motion.p
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={`${char}-${i}`}
        variants={letterVariants}
        className="font-mono"
      >
        {char}
      </motion.span>
    ))}
  </motion.p>
);

export default TypingText;
