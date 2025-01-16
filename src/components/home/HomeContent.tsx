// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
//
// interface GridItem {
//   title: string;
//   number: string;
//   imageUrl: string;
// }
//
// const gridItems: GridItem[] = [
//   { title: "Mountains", number: "01", imageUrl: "/stonehenge1.webp" },
//   { title: "Architecture", number: "02", imageUrl: "/farm.webp" },
//   { title: "Abstract", number: "03", imageUrl: "/images/3.jpeg" },
//   { title: "Winter", number: "04", imageUrl: "/images/4.jpeg" },
//   { title: "Urban", number: "05", imageUrl: "/images/5.jpeg" },
//   { title: "Commute", number: "06", imageUrl: "/images/6.jpeg" },
// ];
//
// interface HomeContentProps {
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// const HomeContent: React.FC<HomeContentProps> = ({ containerRef }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [rowHeights, setRowHeights] = useState(["50%", "50%"]);
//   const [isHeadingVisible, setIsHeadingVisible] = useState(false);
//   const [isGridVisible, setIsGridVisible] = useState(false);
//   const [containerDimensions, setContainerDimensions] = useState({
//     width: 0,
//     height: 0,
//   });
//   const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
//   const [debug, setDebug] = useState<{ [key: string]: any }>({});
//
//   useEffect(() => {
//     const updateDimensions = () => {
//       if (containerRef.current) {
//         const dims = {
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight,
//         };
//         setContainerDimensions(dims);
//         setDebug((prev) => ({ ...prev, containerDimensions: dims }));
//       }
//     };
//
//     updateDimensions();
//     const observer = new ResizeObserver(updateDimensions);
//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }
//
//     setTimeout(() => setIsHeadingVisible(true), 500);
//     setTimeout(() => setIsGridVisible(true), 1000);
//
//     // Debug image loading
//     gridItems.forEach((item) => {
//       const img = new Image();
//       img.src = item.imageUrl;
//       setDebug((prev) => ({
//         ...prev,
//         imageLoading: {
//           ...prev.imageLoading,
//           [item.imageUrl]: "loading",
//         },
//       }));
//
//       img.onload = () => {
//         setLoadedImages((prev) => new Set([...prev, item.imageUrl]));
//         setDebug((prev) => ({
//           ...prev,
//           imageLoading: {
//             ...prev.imageLoading,
//             [item.imageUrl]: "loaded",
//           },
//         }));
//       };
//
//       img.onerror = (error) => {
//         setDebug((prev) => ({
//           ...prev,
//           imageLoading: {
//             ...prev.imageLoading,
//             [item.imageUrl]: "error",
//           },
//           imageErrors: {
//             ...prev.imageErrors,
//             [item.imageUrl]: error,
//           },
//         }));
//       };
//     });
//
//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, [containerRef]);
//
//   const handleItemClick = (idx: number) => {
//     setDebug((prev) => ({ ...prev, clickedIndex: idx }));
//
//     if (activeIndex === idx) {
//       setActiveIndex(null);
//       setRowHeights(["50%", "50%"]);
//       setDebug((prev) => ({
//         ...prev,
//         action: "deactivating",
//         newHeights: ["50%", "50%"],
//       }));
//       return;
//     }
//
//     setActiveIndex(idx);
//     let newHeights = ["50%", "50%"];
//
//     if (containerDimensions.width > 600) {
//       newHeights = idx <= 2 ? ["70%", "30%"] : ["30%", "70%"];
//     }
//
//     setRowHeights(newHeights);
//     setDebug((prev) => ({
//       ...prev,
//       action: "activating",
//       newHeights,
//       containerWidth: containerDimensions.width,
//     }));
//   };
//
//   useEffect(() => {
//     console.log("Debug State:", debug);
//   }, [debug]);
//
//   const getExpandedIndexes = (idx: number): number[] => {
//     if (containerDimensions.width <= 600) return [idx];
//     if (idx === 0 || idx === 3) return [0, 3];
//     if (idx === 1 || idx === 4) return [1, 4];
//     return [2, 5];
//   };
//
//   return (
//     <div className="relative w-full h-full">
//       {/* Debug Display */}
//       {/* <div className="fixed top-0 left-0 bg-black/50 text-white text-xs p-2 z-50"> */}
//       {/*   <pre>Active Index: {activeIndex}</pre> */}
//       {/*   <pre>Container: {JSON.stringify(containerDimensions, null, 2)}</pre> */}
//       {/*   <pre>Images Loaded: {Array.from(loadedImages).join(", ")}</pre> */}
//       {/* </div> */}
//
//       {/* <motion.div */}
//       {/*   className="" */}
//       {/*   whileInView={{ rotate: 0 }} */}
//       {/*   initial={{ rotate: 5 }} */}
//       {/*   transition={{ duration: 0.5 }} */}
//       {/* > */}
//       {/*   <motion.h1 */}
//       {/*     className="font-['ivar'] font-light text-5xl md:text-[70px] leading-[70px]" */}
//       {/*     whileInView={{ */}
//       {/*       y: 0, */}
//       {/*       rotate: 0, */}
//       {/*     }} */}
//       {/*     initial={{ y: "100%", rotate: 5 }} */}
//       {/*     transition={{ duration: 0.5 }} */}
//       {/*   > */}
//       {/*     NAVIGATION <br /> */}
//       {/*     GALLERY */}
//       {/*   </motion.h1> */}
//       {/* </motion.div> */}
//
//       <motion.div
//         className="w-full h-screen flex flex-col"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isGridVisible ? 1 : 0 }}
//         transition={{ duration: 1 }}
//       >
//         {[0, 1].map((rowIndex) => (
//           <div
//             key={rowIndex}
//             className="flex flex-col md:flex-row"
//             style={{ height: rowHeights[rowIndex] }}
//           >
//             {gridItems
//               .slice(rowIndex * 3, (rowIndex + 1) * 3)
//               .map((item, idx) => {
//                 const absoluteIdx = rowIndex * 3 + idx;
//                 const isActive = activeIndex === absoluteIdx;
//                 const isExpanded =
//                   activeIndex !== null &&
//                   getExpandedIndexes(activeIndex).includes(absoluteIdx);
//
//                 return (
//                   <motion.div
//                     key={absoluteIdx}
//                     className={`relative h-full border-t border-white md:border-r-[1px] last:border-r-0 cursor-pointer p-3 flex overflow-hidden
//                     ${isActive || isExpanded ? "flex-[4]" : "flex-1"}`}
//                     onClick={() => handleItemClick(absoluteIdx)}
//                     layout
//                   >
//                     <div className="relative pointer-events-none flex-2 overflow-hidden">
//                       <h2 className="font-['ivar'] tracking-wider text-xs md:text-lg uppercase">
//                         {item.title}/
//                         <span className="font-['NeueMontreal'] text-[8px] md:text-[10px]">
//                           {item.number}
//                         </span>
//                       </h2>
//                       <h5 className="font-['NeueMontreal'] text-[8px] md:text-xs absolute bottom-0">
//                         Details
//                       </h5>
//                     </div>
//                     <motion.div
//                       className={`relative pointer-events-none overflow-hidden
//                         ${isActive ? "w-full h-full" : "w-0 h-0"}`}
//                       initial={false}
//                       animate={{
//                         width: isActive ? "100%" : "0%",
//                         height: isActive ? "100%" : "0%",
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <motion.div
//                         className="absolute top-0 left-0 w-full h-full bg-gray-900"
//                         initial={{ scale: 1.5, opacity: 0 }}
//                         animate={{
//                           scale: isActive ? 1 : 1.5,
//                           opacity: isActive ? 1 : 0,
//                         }}
//                         transition={{ duration: 1 }}
//                       >
//                         {loadedImages.has(item.imageUrl) && (
//                           <img
//                             src={item.imageUrl}
//                             alt={item.title}
//                             className="w-full h-full object-cover"
//                             style={{
//                               display: isActive ? "block" : "none",
//                               position: "absolute",
//                               top: 0,
//                               left: 0,
//                               width: "100%",
//                               height: "100%",
//                             }}
//                           />
//                         )}
//                         {/* Debug overlay for image container */}
//                         <div className="absolute top-0 left-0 bg-black/30 text-white text-xs p-1">
//                           Loaded:{" "}
//                           {loadedImages.has(item.imageUrl) ? "Yes" : "No"}
//                           <br />
//                           Active: {isActive ? "Yes" : "No"}
//                           <br />
//                           URL: {item.imageUrl}
//                         </div>
//                       </motion.div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };
//
// export default HomeContent;

// TEST1 -- WORKING
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
//
// interface GridItem {
//   title: string;
//   number: string;
//   imageUrl: string;
// }
//
// const gridItems: GridItem[] = [
//   { title: "Mountains", number: "01", imageUrl: "/stonehenge1.webp" },
//   { title: "Architecture", number: "02", imageUrl: "/farm.webp" },
//   { title: "Abstract", number: "03", imageUrl: "/images/3.jpeg" },
//   { title: "Winter", number: "04", imageUrl: "/images/4.jpeg" },
//   { title: "Urban", number: "05", imageUrl: "/images/5.jpeg" },
//   { title: "Commute", number: "06", imageUrl: "/images/6.jpeg" },
// ];
//
// interface HomeContentProps {
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// const HomeContent: React.FC<HomeContentProps> = ({ containerRef }) => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [rowHeights, setRowHeights] = useState(["50%", "50%"]);
//   const [isGridVisible, setIsGridVisible] = useState(false);
//   const [containerDimensions, setContainerDimensions] = useState({
//     width: 0,
//     height: 0,
//   });
//   const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
//
//   useEffect(() => {
//     const updateDimensions = () => {
//       if (containerRef.current) {
//         setContainerDimensions({
//           width: containerRef.current.clientWidth,
//           height: containerRef.current.clientHeight,
//         });
//       }
//     };
//
//     updateDimensions();
//     const observer = new ResizeObserver(updateDimensions);
//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }
//
//     setTimeout(() => setIsGridVisible(true), 1000);
//
//     gridItems.forEach((item) => {
//       const img = new Image();
//       img.src = item.imageUrl;
//       img.onload = () => {
//         setLoadedImages((prev) => new Set([...prev, item.imageUrl]));
//       };
//     });
//
//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, [containerRef]);
//
//   const handleItemClick = (idx: number) => {
//     if (activeIndex === idx) {
//       setActiveIndex(null);
//       setRowHeights(["50%", "50%"]);
//       return;
//     }
//
//     setActiveIndex(idx);
//     let newHeights = ["50%", "50%"];
//
//     if (containerDimensions.width > 600) {
//       newHeights = idx <= 2 ? ["70%", "30%"] : ["30%", "70%"];
//     }
//
//     setRowHeights(newHeights);
//   };
//
//   const getExpandedIndexes = (idx: number): number[] => {
//     if (containerDimensions.width <= 600) return [idx];
//     if (idx === 0 || idx === 3) return [0, 3];
//     if (idx === 1 || idx === 4) return [1, 4];
//     return [2, 5];
//   };
//
//   return (
//     <div className="relative w-full h-full">
//       <motion.div
//         className="w-full h-screen flex flex-col"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isGridVisible ? 1 : 0 }}
//         transition={{ duration: 1 }}
//       >
//         {[0, 1].map((rowIndex) => (
//           <div
//             key={rowIndex}
//             className="flex flex-col md:flex-row"
//             style={{ height: rowHeights[rowIndex] }}
//           >
//             {gridItems
//               .slice(rowIndex * 3, (rowIndex + 1) * 3)
//               .map((item, idx) => {
//                 const absoluteIdx = rowIndex * 3 + idx;
//                 const isActive = activeIndex === absoluteIdx;
//                 const isExpanded =
//                   activeIndex !== null &&
//                   getExpandedIndexes(activeIndex).includes(absoluteIdx);
//
//                 return (
//                   <motion.div
//                     key={absoluteIdx}
//                     className={`relative h-full border-t border-white md:border-r-[1px] last:border-r-0 cursor-pointer p-3 flex overflow-hidden
//                     ${isActive || isExpanded ? "flex-[4]" : "flex-1"}`}
//                     onClick={() => handleItemClick(absoluteIdx)}
//                     layout
//                   >
//                     <div className="relative pointer-events-none flex-2 overflow-hidden">
//                       <h2 className="font-['ivar'] tracking-wider text-xs md:text-lg uppercase">
//                         {item.title}/
//                         <span className="font-['NeueMontreal'] text-[8px] md:text-[10px]">
//                           {item.number}
//                         </span>
//                       </h2>
//                       <h5 className="font-['NeueMontreal'] text-[8px] md:text-xs absolute bottom-0">
//                         Details
//                       </h5>
//                     </div>
//                     <motion.div
//                       className={`relative pointer-events-none overflow-hidden
//                         ${isActive ? "w-full h-full" : "w-0 h-0"}`}
//                       initial={false}
//                       animate={{
//                         width: isActive ? "100%" : "0%",
//                         height: isActive ? "100%" : "0%",
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <motion.div
//                         className="absolute top-0 left-0 w-full h-full bg-gray-900"
//                         initial={{ scale: 1.5, opacity: 0 }}
//                         animate={{
//                           scale: isActive ? 1 : 1.5,
//                           opacity: isActive ? 1 : 0,
//                         }}
//                         transition={{ duration: 1 }}
//                       >
//                         {loadedImages.has(item.imageUrl) && (
//                           <img
//                             src={item.imageUrl}
//                             alt={item.title}
//                             className="w-full h-full object-cover"
//                             style={{
//                               display: isActive ? "block" : "none",
//                               position: "absolute",
//                               top: 0,
//                               left: 0,
//                               width: "100%",
//                               height: "100%",
//                             }}
//                           />
//                         )}
//                       </motion.div>
//                     </motion.div>
//                   </motion.div>
//                 );
//               })}
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };
//
// export default HomeContent;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// types.ts
type MediaItem = {
  title: string;
  number: string;
  videoUrl: string;
};

type RowHeights = [string, string];

// constants.ts
export const GRID_ITEMS: MediaItem[] = [
  { title: "About", number: "01", videoUrl: "/about-page-video.mp4" },
  { title: "Projects", number: "02", videoUrl: "/projects-page-video.mp4" },
  { title: "Contacts", number: "03", videoUrl: "/contacts-page-video.mp4" },
  { title: "Skills", number: "04", videoUrl: "/skills-page-video.mp4" },
  { title: "Split", number: "05", videoUrl: "/split-function-video.mp4" },
  { title: "Fzf", number: "06", videoUrl: "/fzf-function-video.mp4" },
];

// GridItem.tsx
interface GridItemProps {
  item: MediaItem;
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
}

const GridItem = ({
  item,
  index,
  isActive,
  isExpanded,
  onClick,
}: GridItemProps) => {
  return (
    <motion.div
      className={`relative h-full border-t border-[#eee9cc] text-[#eee9cc] md:border-r-[1px] last:border-r-0 cursor-pointer p-3 flex overflow-hidden
      ${isActive || isExpanded ? "flex-[4]" : "flex-1"}`}
      onClick={onClick}
      layout
    >
      <div className="relative pointer-events-none flex-2 overflow-hidden">
        <h2 className="font-['ivar'] tracking-wider text-xs md:text-lg uppercase">
          {item.title}/
          <span className="font-['NeueMontreal'] text-[8px] md:text-[10px]">
            {item.number}
          </span>
        </h2>
        <h5 className="font-['NeueMontreal'] text-[8px] md:text-xs absolute bottom-0">
          Details
        </h5>
      </div>
      <motion.div
        className={`relative pointer-events-none overflow-hidden
          ${isActive ? "w-full h-full" : "w-0 h-0"}`}
        initial={false}
        animate={{
          width: isActive ? "100%" : "0%",
          height: isActive ? "100%" : "0%",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gray-900"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{
            scale: isActive ? 1 : 1.5,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          {isActive && (
            <video
              src={item.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// hooks/useContainerDimensions.ts
const useContainerDimensions = (
  containerRef: React.RefObject<HTMLDivElement>,
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return dimensions;
};

// HomeContent.tsx
interface HomeContentProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const HomeContent: React.FC<HomeContentProps> = ({ containerRef }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rowHeights, setRowHeights] = useState<RowHeights>(["50%", "50%"]);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const dimensions = useContainerDimensions(containerRef);

  useEffect(() => {
    setTimeout(() => setIsGridVisible(true), 1000);
  }, []);

  const handleItemClick = (idx: number) => {
    if (activeIndex === idx) {
      setActiveIndex(null);
      setRowHeights(["50%", "50%"]);
      return;
    }

    setActiveIndex(idx);
    const newHeights: RowHeights =
      dimensions.width > 600
        ? idx <= 2
          ? ["70%", "30%"]
          : ["30%", "70%"]
        : ["50%", "50%"];

    setRowHeights(newHeights);
  };

  const getExpandedIndexes = (idx: number): number[] => {
    if (dimensions.width <= 600) return [idx];
    if (idx === 0 || idx === 3) return [0, 3];
    if (idx === 1 || idx === 4) return [1, 4];
    return [2, 5];
  };

  return (
    <div className="relative w-full h-full">
      <motion.div
        className="w-full h-screen flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: isGridVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {[0, 1].map((rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col md:flex-row"
            style={{ height: rowHeights[rowIndex] }}
          >
            {GRID_ITEMS.slice(rowIndex * 3, (rowIndex + 1) * 3).map(
              (item, idx) => {
                const absoluteIdx = rowIndex * 3 + idx;
                const isActive = activeIndex === absoluteIdx;
                const isExpanded =
                  activeIndex !== null &&
                  getExpandedIndexes(activeIndex).includes(absoluteIdx);

                return (
                  <GridItem
                    key={absoluteIdx}
                    item={item}
                    index={absoluteIdx}
                    isActive={isActive}
                    isExpanded={isExpanded}
                    onClick={() => handleItemClick(absoluteIdx)}
                  />
                );
              },
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomeContent;
