import React, { useRef } from "react";
import { useInView } from "motion/react";
import { motion } from "framer-motion";
// import AboutHeader from "@/components/about/AboutHeader";

interface AboutContentProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const AboutContent = ({ containerRef }: AboutContentProps) => {
  const scrollRef = useRef(null);

  // const isInView = useInView(scrollRef, { root: containerRef, once: true });

  return (
    <div ref={scrollRef} className="h-full w-full content-center p-4">
      {/* <AboutHeader /> */}
      <motion.h2
        className="text-8xl font-neueMontreal text-[#EEE9CC] pb-36"
        // style={{
        //   transform: isInView ? "none" : "translateX(-200px)",
        //   opacity: isInView ? 1 : 0,
        //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        // }}
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeIn", delay: 0.3 }}
      >
        About
        <br />
        Me
      </motion.h2>

      <p className="text-muted-foreground leading-relaxed font-neueMontreal">
        A passionate{" "}
        <strong className="text-[#EEE9CC] text-xl">web developer</strong>{" "}
        specialising in creating <br />
        <strong className="text-[#EEE9CC] text-xl">
          {" "}
          intuitive and visually appealing interfaces
        </strong>
        .<br />
        Proficient in
        <strong className="text-[#EEE9CC] text-xl">
          {" "}
          full-stack development
        </strong>{" "}
        with expertise <br />
        in
        <strong className="text-[#EEE9CC] text-xl">
          {" "}
          Python, TypeScript, React
        </strong>
        , and modern web technologies.
      </p>
    </div>
  );
};

export default AboutContent;
