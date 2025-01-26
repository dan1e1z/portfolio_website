import React, { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import AboutSectionTitle from "@/components/about/AboutSectionTitle";
import ImageSlider from "@/components/about/ImageSlider";
import TextOverlay from "@/components/about/TextOverlay";
import AboutContent from "@/components/about/AboutContent";
import EducationContent from "@/components/about/EducationContent";
import InterestsContent from "@/components/about/InterestsContent";
import HobbiesContent from "@/components/about/HobbiesContent";
import { sliderItems } from "@/constants/aboutData";
// import useContainerDimensions from "@/hooks/useContainerDimensions";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { aboutSections } from "@/data/about";

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // const dimensions = useContainerDimensions(containerRef);
  // console.log(dimensions);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useScrollNavigation(scrollRef, aboutSections, "about");

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === sliderItems.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const initLenis = async () => {
      const lenis = new Lenis({
        wrapper: containerRef.current!,
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();
  }, [containerRef]);

  return (
    <ScrollArea
      className="h-full w-full bg-[#1d1915] md:rounded-2xl"
      // className="bg-[#1d1915] md:rounded-2xl"
      viewportRef={containerRef}
    >
      <div ref={scrollRef} className="h-[90.5dvh] md:h-screen relative">
        <div className="relative h-full overflow-hidden">
          <ImageSlider currentImageIndex={currentImageIndex} />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col divide-y divide-[#eee9cc]">
          <TextOverlay
            scrollYProgress={scrollYProgress}
            containerRef={containerRef}
          />
        </div>
      </div>

      <AboutSectionTitle containerRef={containerRef} />
      <div className="font-neueMontreal text-[#EEE9CC] relative">
        <div
          className="h-[90dvh] md:h-screen border-b border-b-[#EEE9CC] bg-[#1d1915]"
          id="about1"
        >
          <AboutContent containerRef={containerRef} />
        </div>
        <div className="border-b border-b-[#EEE9CC] bg-[#1d1915]" id="about2">
          <EducationContent containerRef={containerRef} />
        </div>
        <div
          className="h-[90vh] md:h-screen border-b border-b-[#EEE9CC] bg-[#1d1915]"
          id="about3"
        >
          <InterestsContent containerRef={containerRef} />
        </div>
        <div className="" id="about4">
          <HobbiesContent containerRef={containerRef} />
        </div>
      </div>
    </ScrollArea>
  );
};

export default About;
