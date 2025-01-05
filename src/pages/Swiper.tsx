import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HobbySwiperProps {
  scrollRef: React.RefObject<HTMLDivElement>;
}

const HobbySwiper: React.FC<HobbySwiperProps> = ({ scrollRef }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollRef,
    offset: ["start end", "end start"],
  });

  const getXTransform = (columnIndex: number, rowIndex: number) => {
    const direction = columnIndex < 2 ? -1 : 1;
    const speed = 1 + rowIndex * 0.5;
    const targetX = (columnIndex - 1.5) * 25; // New start position
    const startX = direction * 25 * speed + targetX; // New end position
    return useTransform(scrollYProgress, [0, 1], [`${startX}%`, `${targetX}%`]);
  };

  const HobbyRow = ({
    items,
    rowIndex,
  }: {
    items: string[];
    rowIndex: number;
  }) => (
    <div className="flex w-full h-[12vw] overflow-hidden">
      {items.map((hobby, columnIndex) => (
        <div
          key={columnIndex}
          className="relative w-1/4 overflow-hidden border-r border-[#EEE9CC] last:border-r-0"
        >
          <motion.p
            className="absolute top-0 left-0 w-full text-center whitespace-nowrap text-[6vw] text-[#EEE9CC]"
            style={{
              x: getXTransform(columnIndex, rowIndex),
              opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
            }}
          >
            {hobby}
          </motion.p>
        </div>
      ))}
    </div>
  );

  const hobbies = [
    ["Chess", "Photography", "Movies", "Hiking"],
    ["Reading", "Chess", "Photography", "Movies"],
    ["Hiking", "Reading", "Chess", "Photography"],
  ];

  return (
    <div ref={containerRef} className="bg-[#1d1915] sc-intro">
      <h2 className="text-[#EEE9CC] text-8xl font-bold text-center py-8">
        My Hobbies
      </h2>
      <div className="group-flex">
        {hobbies.map((items, index) => (
          <HobbyRow key={index} items={items} rowIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default HobbySwiper;
