// import Character from "@/animations/Character";
// import OverlayLine from "@/components/OverlayLine";
//
// interface InterestsContentProps {
//   containerRef: React.RefObject<HTMLDivElement>;
// }
//
// const paragraph =
//   "I'm passionate about creating seamless digital experiences through Web Development and UI/UX Design. I'm constantly exploring the possibilities of Machine Learning and aim to contribute to the Open Source community. These interests drive my work and fuel my curiosity.";
//
// const InterestsContent = ({ containerRef }: InterestsContentProps) => {
//   return (
//     <div className="relative h-screen w-full">
//       <div className="absolute inset-0 -z-1">
//         <OverlayLine
//           top={{ x: "70%", y: "0%" }}
//           bottom={{ x: "70%", y: "100%" }}
//           colour="#eee9cc"
//           thickness="1px"
//         />
//         <OverlayLine
//           top={{ x: "70%", y: "0%" }}
//           bottom={{ x: "0%", y: "100%" }}
//           colour="#eee9cc"
//           thickness="1px"
//         />
//       </div>
//
//       {/* <div className="relative z-1 flex flex-col"> */}
//       <h2 className="text-8xl text-[#EEE9CC] ml-4 mt-4 mb-16">Interests</h2>
//       <Character paragraph={paragraph} containerRef={containerRef} />
//       {/* </div> */}
//     </div>
//   );
// };
//
// export default InterestsContent;

import { lazy, Suspense, useEffect } from "react";
import OverlayLine from "@/components/OverlayLine";

// Vite's lazy loading syntax
const Character = lazy(() => import("@/animations/Character"));

interface InterestsContentProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const paragraph =
  "I'm passionate about creating seamless digital experiences through Web Development and UI/UX Design. I'm constantly exploring the possibilities of Machine Learning and aim to contribute to the Open Source community. These interests drive my work and fuel my curiosity.";

const InterestsContent = ({ containerRef }: InterestsContentProps) => {
  // Force remount of Character component when navigating back to this page
  useEffect(() => {
    const cleanup = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "1";
        containerRef.current.style.filter = "none";
      }
    };

    // Add this to handle cleanup when component unmounts
    return cleanup;
  }, [containerRef]);

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-1">
        <OverlayLine
          top={{ x: "70%", y: "0%" }}
          bottom={{ x: "70%", y: "100%" }}
          colour="#eee9cc"
          thickness="1px"
        />
        <OverlayLine
          top={{ x: "70%", y: "0%" }}
          bottom={{ x: "0%", y: "100%" }}
          colour="#eee9cc"
          thickness="1px"
        />
      </div>
      <h2 className="text-8xl text-[#EEE9CC] ml-4 mt-4 mb-16">Interests</h2>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-64 w-full">
            <div className="animate-pulse bg-[#EEE9CC]/20 h-full w-full rounded" />
          </div>
        }
      >
        <Character
          key={window.location.pathname}
          paragraph={paragraph}
          containerRef={containerRef}
        />
      </Suspense>
    </div>
  );
};

export default InterestsContent;
