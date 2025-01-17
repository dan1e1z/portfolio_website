import { useRef } from "react";
import { motion } from "framer-motion";

const AboutContent = () => {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className="h-full w-full flex flex-row content-center items-center m-4"
    >
      <div className="">
        <motion.h2
          className="text-8xl font-neueMontreal text-[#EEE9CC] pb-12"
          // initial={{ opacity: 0, x: -200 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 0.9, ease: "easeIn", delay: 0.3 }}
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
      {/* <AboutShapes /> */}
    </div>
  );
};

export default AboutContent;
