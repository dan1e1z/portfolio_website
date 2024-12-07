import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ProjectItem } from "@/components/ProjectItem";
import { useLocation } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A modern blog built with Next.js, featuring server-side rendering and a sleek design for optimal performance and user experience.",
    link: "https://example.com/nextjs-blog",
  },
  {
    id: 2,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A lightweight and fast web application built with pure JavaScript, showcasing the power of vanilla JS in modern web development.",
    link: "https://example.com/vanilla-js-app",
  },
  {
    id: 3,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "An interactive music player app with a beautiful UI, supporting playlist creation, equalizer settings, and seamless audio playback.",
    link: "https://example.com/music-app",
  },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector(".sticky-header");
      if (header) {
        setHeaderHeight(header.getBoundingClientRect().height);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const scrollToProject = () => {
      const params = new URLSearchParams(location.search);
      const projectParam = params.get("project");

      if (projectParam === "top" || !projectParam) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const projectNumber = parseInt(projectParam.replace("project", ""), 10);
        const projectElement = document.getElementById(
          `project-${projectNumber}`,
        );
        if (projectElement) {
          const yOffset = -headerHeight - 20; // Additional offset for visual comfort
          const y =
            projectElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    scrollToProject();
  }, [location, headerHeight]);

  return (
    <div className="min-h-screen relative" ref={scrollRef}>
      <div
        className="sticky-header sticky left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
        style={{ top: 0 }}
      >
        <div className="max-w-4xl mx-auto px-4 pt-8 pb-4 sm:pt-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Works
          </h1>
          <motion.div
            className="h-1 bg-primary"
            style={{ scaleX, transformOrigin: "left" }}
          ></motion.div>
        </div>
      </div>
      <div
        className="px-4 py-8 max-w-4xl mx-auto"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        {items.map((item) => (
          <div key={item.id} id={`project-${item.id}`}>
            <ProjectItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
