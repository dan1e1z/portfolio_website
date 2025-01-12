import { useState, useEffect } from "react";

const useMousePosition = (containerRef) => {
  const [mousePosition, setMousePosition] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  const updateMousePosition = (e) => {
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
  }, [containerRef]);

  return mousePosition;
};

export default useMousePosition;
