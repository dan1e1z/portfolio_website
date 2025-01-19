// import { motion } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import { MediaItem } from "@/types/home";
//
// interface GridItemProps {
//   item: MediaItem;
//   isActive: boolean;
//   isExpanded: boolean;
//   onClick: () => void;
// }
//
// const GridItem = ({ item, isActive, isExpanded, onClick }: GridItemProps) => {
//   const [videoLoaded, setVideoLoaded] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//
//   useEffect(() => {
//     if (isActive && !videoLoaded && videoRef.current) {
//       videoRef.current.src = item.videoUrl;
//       videoRef.current.preload = "auto";
//       videoRef.current.oncanplaythrough = () => setVideoLoaded(true);
//     }
//   }, [isActive, videoLoaded, item.videoUrl]);
//
//   return (
//     <motion.div
//       className={`relative h-full border-t border-[#eee9cc] text-[#eee9cc] md:border-r-[1px] last:border-r-0 cursor-pointer p-3 flex flex-col space-y-3 overflow-hidden
//       ${isActive || isExpanded ? "flex-[4]" : "flex-1"}`}
//       onClick={onClick}
//       layout
//     >
//       {/* Title Section */}
//       <div className="relative flex-none">
//         <h2 className="font-['ivar'] tracking-wider text-xs md:text-lg uppercase">
//           {item.title}/
//           <span className="font-['NeueMontreal'] text-[8px] md:text-[10px]">
//             {item.number}
//           </span>
//         </h2>
//         <h5 className="font-['NeueMontreal'] text-[8px] md:text-xs mt-1">
//           Details
//         </h5>
//       </div>
//
//       {/* Video Section */}
//       <motion.div
//         className={`relative flex-auto overflow-hidden
//           ${isActive ? "w-full h-full" : "w-0 h-0"}`}
//         initial={false}
//         animate={{
//           width: isActive ? "100%" : "0%",
//           height: isActive ? "100%" : "0%",
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <motion.div
//           className="absolute top-0 left-0 w-full h-full bg-[#1c1915]"
//           initial={{ scale: 1.5, opacity: 0 }}
//           animate={{
//             scale: isActive ? 1 : 1.5,
//             opacity: isActive ? 1 : 0,
//           }}
//           transition={{ duration: 1 }}
//         >
//           {isActive && (
//             <video
//               ref={videoRef}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//             />
//           )}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };
//
// export default GridItem;

// TEST1
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MediaItem } from "@/types/home";

interface GridItemProps {
  item: MediaItem;
  isActive: boolean;
  isExpanded: boolean;
  onClick: () => void;
}

const GridItem = ({ item, isActive, isExpanded, onClick }: GridItemProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Initialize video when component mounts
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    // Start preloading metadata when expanded
    if (isExpanded) {
      video.preload = "metadata";
      const source = document.createElement("source");
      source.src = item.videoUrl;
      source.type = "video/mp4"; // Adjust based on your video type
      video.appendChild(source);
    }

    const handleCanPlayThrough = () => setVideoLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("error", handleError);
      // Cleanup video resources
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [isExpanded, item.videoUrl]);

  // Handle video playback
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    if (isActive) {
      video.preload = "auto";
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
      });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <motion.div
      className={`relative h-full border-t border-[#eee9cc] text-[#eee9cc] md:border-r-[1px] last:border-r-0 cursor-pointer p-3 flex flex-col space-y-3 overflow-hidden
      ${isActive || isExpanded ? "flex-[4]" : "flex-1"}`}
      onClick={onClick}
      layout
    >
      {/* Title Section */}
      <div className="relative flex-none">
        <h2 className="font-['ivar'] tracking-wider text-xs md:text-lg uppercase">
          {item.title}/
          <span className="font-['NeueMontreal'] text-[8px] md:text-[10px]">
            {item.number}
          </span>
        </h2>
        <h5 className="font-['NeueMontreal'] text-[8px] md:text-xs mt-1">
          Details
        </h5>
      </div>

      {/* Video Section */}
      <motion.div
        className={`relative flex-auto overflow-hidden
          ${isActive ? "w-full h-full" : "w-0 h-0"}`}
        initial={false}
        animate={{
          width: isActive ? "100%" : "0%",
          height: isActive ? "100%" : "0%",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#1c1915]"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{
            scale: isActive ? 1 : 1.5,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          {(isActive || isExpanded) && (
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            />
          )}
          {!videoLoaded && isActive && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white">Loading...</span>
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-red-500">Failed to load video</span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GridItem;
