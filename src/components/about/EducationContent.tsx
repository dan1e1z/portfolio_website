import React from "react";
import VerticalSwiper from "@/components/about/VerticalSwiper";

interface EducationContentProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const EducationContent: React.FC<EducationContentProps> = ({
  containerRef,
}) => {
  return (
    <div className="relative w-full">
      <h2 className="text-8xl text-[#EEE9CC] mb-4">Education</h2>
      <p className="text-[#EEE9CC]">
        <span className="text-5xl">Bachelor</span> of{" "}
        <span className="">Science</span> in{" "}
        <span className="text-3xl">Computer Science</span>
      </p>
      <VerticalSwiper containerRef={containerRef} />
    </div>
  );
};

export default EducationContent;
