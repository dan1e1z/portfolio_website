// import React, { useEffect } from "react";
// import {
//   motion,
//   useAnimation,
//   useTransform,
//   type MotionValue,
// } from "framer-motion";
// import { textItems } from "@/constants/aboutData";
// import useContainerDimensions from "@/hooks/useContainerDimensions";
//
// interface TextOverlayProps {
//   scrollYProgress: MotionValue<number>;
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// const TextOverlay: React.FC<TextOverlayProps> = ({
//   scrollYProgress,
//   containerRef,
// }) => {
//   const bgControls = useAnimation();
//   const dimensions = useContainerDimensions(containerRef);
//
//   const getResponsiveConfig = (width: number) => {
//     if (width < 446) {
//       return {
//         textSize: "text-[3.5rem]",
//       };
//     } else if (width < 652) {
//       return {
//         textSize: "text-[4rem]",
//       };
//     } else if (width < 980) {
//       return {
//         textSize: "text-[6rem]",
//       };
//     } else if (width < 1200) {
//       return {
//         textSize: "text-[8rem]",
//       };
//     } else {
//       return {
//         textSize: "text-[10rem]",
//       };
//     }
//   };
//
//   const config = dimensions?.width
//     ? getResponsiveConfig(dimensions.width)
//     : getResponsiveConfig(1000);
//
//   useEffect(() => {
//     let isSubscribed = true;
//
//     const sequence = async () => {
//       while (isSubscribed) {
//         await bgControls.start({
//           height: "100%",
//           bottom: "0",
//           top: "auto",
//           transition: { duration: 0.7, ease: "easeInOut" },
//         });
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         await bgControls.start({
//           height: "0%",
//           bottom: "0",
//           top: "auto",
//           transition: { duration: 0.3, ease: "easeInOut" },
//         });
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       }
//     };
//
//     sequence();
//
//     return () => {
//       isSubscribed = false;
//     };
//   }, [bgControls]);
//
//   const overlayVariants = {
//     initial: {
//       height: "0%",
//       bottom: "0",
//       top: "auto",
//     },
//   };
//
//   return (
//     <>
//       {textItems.map((item, index) => {
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         const xPercent = useTransform(
//           scrollYProgress,
//           [0, 1],
//           ["0%", `${item.xPercent}%`],
//         );
//         return (
//           <motion.div
//             key={index}
//             className={`relative flex items-center h-[25vh] ${
//               index % 2 === 0 ? "justify-start" : "justify-end"
//             }`}
//           >
//             <motion.p
//               className={`${config.textSize} text-[#eee9cc] m-5 z-20 font-neueMontreal`}
//               style={{
//                 lineHeight: "1",
//                 x: xPercent,
//               }}
//             >
//               {item.text}
//             </motion.p>
//
//             <motion.div
//               initial="initial"
//               animate={bgControls}
//               variants={overlayVariants}
//               className="absolute w-full bg-[#1e1915]"
//             />
//           </motion.div>
//         );
//       })}
//     </>
//   );
// };
//
// export default TextOverlay;

// TEST1
// import React, { useEffect } from "react";
// import {
//   motion,
//   useAnimation,
//   useTransform,
//   type MotionValue,
// } from "framer-motion";
// import { textItems } from "@/constants/aboutData";
// import useContainerDimensions from "@/hooks/useContainerDimensions";
//
// interface TextOverlayProps {
//   scrollYProgress: MotionValue<number>;
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// const TextOverlay: React.FC<TextOverlayProps> = ({
//   scrollYProgress,
//   containerRef,
// }) => {
//   const bgControls = useAnimation();
//   const dimensions = useContainerDimensions(containerRef);
//
//   const getResponsiveConfig = (width: number) => {
//     if (width < 446) {
//       return {
//         textSize: "text-2xl sm:text-3xl",
//         padding: "px-4",
//         height: "h-[20vh]",
//       };
//     } else if (width < 652) {
//       return {
//         textSize: "text-4xl",
//         padding: "px-6",
//         height: "h-[25vh]",
//       };
//     } else if (width < 980) {
//       return {
//         textSize: "text-6xl",
//         padding: "px-8",
//         height: "h-[25vh]",
//       };
//     } else if (width < 1200) {
//       return {
//         textSize: "text-7xl",
//         padding: "px-10",
//         height: "h-[25vh]",
//       };
//     } else {
//       return {
//         textSize: "text-8xl",
//         padding: "px-12",
//         height: "h-[25vh]",
//       };
//     }
//   };
//
//   const config = dimensions?.width
//     ? getResponsiveConfig(dimensions.width)
//     : getResponsiveConfig(1000);
//
//   useEffect(() => {
//     let isSubscribed = true;
//     const sequence = async () => {
//       while (isSubscribed) {
//         await bgControls.start({
//           height: "100%",
//           bottom: "0",
//           top: "auto",
//           transition: { duration: 0.7, ease: "easeInOut" },
//         });
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         await bgControls.start({
//           height: "0%",
//           bottom: "0",
//           top: "auto",
//           transition: { duration: 0.3, ease: "easeInOut" },
//         });
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       }
//     };
//     sequence();
//     return () => {
//       isSubscribed = false;
//     };
//   }, [bgControls]);
//
//   const overlayVariants = {
//     initial: {
//       height: "0%",
//       bottom: "0",
//       top: "auto",
//     },
//   };
//
//   return (
//     <div className="">
//       {textItems.map((item, index) => {
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         const xPercent = useTransform(
//           scrollYProgress,
//           [0, 1],
//           ["0%", `${item.xPercent}%`],
//         );
//
//         return (
//           <motion.div
//             key={index}
//             className={`relative flex items-center ${config.height} ${
//               index % 2 === 0 ? "justify-start" : "justify-end"
//             }`}
//           >
//             <motion.div
//               className={`relative ${config.padding}`}
//               style={{
//                 x: xPercent,
//               }}
//             >
//               <p
//                 className={`${config.textSize} text-[#eee9cc] font-neueMontreal break-words whitespace-pre-wrap leading-tight`}
//               >
//                 {item.text}
//               </p>
//             </motion.div>
//             <motion.div
//               initial="initial"
//               animate={bgControls}
//               variants={overlayVariants}
//               className="absolute w-full bg-[#1e1915]"
//             />
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };
//
// export default TextOverlay;

// TEST2
import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { textItems } from "@/constants/aboutData";
import useContainerDimensions from "@/hooks/useContainerDimensions";

interface TextOverlayProps {
  scrollYProgress: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement>;
}

const TextOverlay: React.FC<TextOverlayProps> = ({
  scrollYProgress,
  containerRef,
}) => {
  const bgControls = useAnimation();
  const dimensions = useContainerDimensions(containerRef);

  const getResponsiveConfig = (width: number) => {
    if (width < 446) {
      return {
        textSize: "text-[3.5rem]",
      };
    } else if (width < 652) {
      return {
        textSize: "text-[4rem]",
      };
    } else if (width < 980) {
      return {
        textSize: "text-[6rem]",
      };
    } else if (width < 1200) {
      return {
        textSize: "text-[8rem]",
      };
    } else {
      return {
        textSize: "text-[8.5rem]",
      };
    }
  };

  const config = dimensions?.width
    ? getResponsiveConfig(dimensions.width)
    : getResponsiveConfig(1000);

  useEffect(() => {
    let isSubscribed = true;
    const sequence = async () => {
      while (isSubscribed) {
        await bgControls.start({
          height: "100%",
          bottom: 0,
          transition: { duration: 0.7, ease: "easeInOut" },
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await bgControls.start({
          height: "0%",
          bottom: 0,
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
      bottom: 0,
    },
  };

  return (
    <div
      style={{
        width: dimensions?.width || "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      // className={`${dimensions?.width ? `w-[${dimensions.width}]` : "w-full"} overflow-hidden flex flex-col`} // does not work
    >
      {textItems.map((item, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const xPercent = useTransform(
          scrollYProgress,
          [0, 1],
          ["0%", `${Math.min(item.xPercent, 50)}%`],
        );

        return (
          <motion.div
            key={index}
            className={`relative flex items-center h-screen ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <motion.p
              className={`${config.textSize} text-[#eee9cc] m-5 font-neueMontreal`}
              style={{
                lineHeight: "1",
                x: xPercent,
                zIndex: 100,
              }}
            >
              {item.text}
            </motion.p>
            <motion.div
              initial="initial"
              animate={bgControls}
              variants={overlayVariants}
              className="absolute w-full bg-[#1e1915] border-b border-b-[#eee9cc]"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default TextOverlay;
