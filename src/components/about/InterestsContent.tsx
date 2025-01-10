import Character from "@/animations/Character";

interface InterestsContentProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const paragraph =
  "I’m passionate about creating seamless digital experiences through Web Development and UI/UX Design. I’m constantly exploring the possibilities of Machine Learning and aim to contribute to the Open Source community. These interests drive my work and fuel my curiosity.";

const InterestsContent = ({ containerRef }: InterestsContentProps) => (
  <div className="">
    <h2
      className="text-8xl text-[#EEE9CC] p-8 mb-32"
      style={{
        textDecorationLine: "underline",
        textDecorationThickness: "4px",
        textUnderlineOffset: "2rem",
      }}
    >
      Interests
    </h2>
    <Character paragraph={paragraph} containerRef={containerRef} />
  </div>
);

export default InterestsContent;
