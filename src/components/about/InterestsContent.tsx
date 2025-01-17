import Character from "@/animations/Character";
import OverlayLine from "@/components/OverlayLine";

interface InterestsContentProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const paragraph =
  "I'm passionate about creating seamless digital experiences through Web Development and UI/UX Design. I'm constantly exploring the possibilities of Machine Learning and aim to contribute to the Open Source community. These interests drive my work and fuel my curiosity.";

const InterestsContent = ({ containerRef }: InterestsContentProps) => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-1">
        <OverlayLine
          top={{ x: "70%", y: "0%" }}
          bottom={{ x: "70%", y: "100%" }}
          colour="#eee9cc"
          thickness="1px"
        />
        <OverlayLine
          top={{ x: "70%", y: "0%" }}
          bottom={{ x: "0%", y: "100%" }}
          colour="#eee9cc"
          thickness="1px"
        />
      </div>

      {/* <div className="relative z-1 flex flex-col"> */}
      <h2 className="text-8xl text-[#EEE9CC] ml-4 mt-4 mb-16">Interests</h2>
      <Character paragraph={paragraph} containerRef={containerRef} />
      {/* </div> */}
    </div>
  );
};

export default InterestsContent;
