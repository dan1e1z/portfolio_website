import React from "react";

interface Point {
  x: string; // Percentage value (e.g., '70%')
  y: string; // Percentage value (e.g., '0%')
}

interface DiagonalLineProps {
  top: Point;
  bottom: Point;
  colour?: string;
  thickness?: string;
  style?: React.CSSProperties;
}

const OverlayLine: React.FC<DiagonalLineProps> = ({
  top,
  bottom,
  colour = "#eee9cc",
  thickness = "1px",
  style = {},
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <line
          x1={top.x}
          y1={top.y}
          x2={bottom.x}
          y2={bottom.y}
          stroke={colour}
          strokeWidth={thickness}
        />
      </svg>
    </div>
  );
};

export default OverlayLine;
