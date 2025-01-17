// import { useState, useEffect } from "react";
//
// interface useMousePositionProps {
//   containerRef: React.RefObject<HTMLDivElement>;
// }
// const useMousePosition = (containerRef: useMousePositionProps) => {
//   const [mousePosition, setMousePosition] = useState({
//     mouseX: 0,
//     mouseY: 0,
//   });
//
//   const updateMousePosition = (e) => {
//     if (!containerRef.current) return;
//
//     // Get the container's bounding rectangle
//     const rect = containerRef.current.getBoundingClientRect();
//
//     // Calculate position relative to the container
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//
//     setMousePosition({ mouseX, mouseY });
//   };
//
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//
//     container.addEventListener("mousemove", updateMousePosition);
//
//     return () => {
//       container.removeEventListener("mousemove", updateMousePosition);
//     };
//   }, [containerRef]);
//
//   return mousePosition;
// };
//
// export default useMousePosition;

import { useState, useEffect, RefObject } from "react";

interface MousePosition {
  mouseX: number;
  mouseY: number;
}

// Changed from interface to type since we're just aliasing a RefObject
type UseMousePositionProps = RefObject<HTMLDivElement>;

const useMousePosition = (
  containerRef: UseMousePositionProps,
): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    mouseX: 0,
    mouseY: 0,
  });

  const updateMousePosition = (e: MouseEvent): void => {
    if (!containerRef.current) return;

    // Get the container's bounding rectangle
    const rect = containerRef.current.getBoundingClientRect();

    // Calculate position relative to the container
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePosition({ mouseX, mouseY });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", updateMousePosition);

    return () => {
      container.removeEventListener("mousemove", updateMousePosition);
    };
  }, [containerRef]); // Added containerRef to dependency array

  return mousePosition;
};

export default useMousePosition;
