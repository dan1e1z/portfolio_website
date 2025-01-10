import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { textItems } from "@/constants/aboutData";

interface TextOverlayProps {
  scrollYProgress: MotionValue<number>;
}

const TextOverlay: React.FC<TextOverlayProps> = ({ scrollYProgress }) => {
  const bgControls = useAnimation();

  useEffect(() => {
    let isSubscribed = true;

    const sequence = async () => {
      while (isSubscribed) {
        await bgControls.start({
          height: "100%",
          bottom: "0",
          top: "auto",
          transition: { duration: 0.7, ease: "easeInOut" },
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await bgControls.start({
          height: "0%",
          bottom: "0",
          top: "auto",
          transition: { duration: 0.3, ease: "easeInOut" },
        });
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    sequence();

    return () => {
      isSubscribed = false;
    };
  }, [bgControls]);

  const overlayVariants = {
    initial: {
      height: "0%",
      bottom: "0",
      top: "auto",
    },
  };

  return (
    <>
      {textItems.map((item, index) => {
        const xPercent = useTransform(
          scrollYProgress,
          [0, 1],
          ["0%", `${item.xPercent}%`],
        );
        return (
          <motion.div
            key={index}
            className={`relative flex items-center h-[25vh] ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.p
              className="text-[25vh] text-[#eee9cc] m-5 z-20 font-neueMontreal"
              style={{
                lineHeight: "1",
                x: xPercent,
              }}
            >
              {item.text}
            </motion.p>

            <motion.div
              initial="initial"
              animate={bgControls}
              variants={overlayVariants}
              className="absolute w-full bg-[#1e1915]"
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default TextOverlay;
