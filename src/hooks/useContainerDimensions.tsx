import { useState, useEffect, useCallback } from "react";

type Dimensions = {
  width: number;
  height: number;
};

const useContainerDimensions = (): [
  (node: HTMLDivElement | null) => void,
  Dimensions | null,
] => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const measure = useCallback(() => {
    if (node) {
      const rect = node.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    }
  }, [node]);

  useEffect(() => {
    if (!node) return;

    const observer = new ResizeObserver(() => {
      measure();
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [node, measure]);

  return [setNode, dimensions];
};

export default useContainerDimensions;
