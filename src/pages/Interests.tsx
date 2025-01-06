import Character from "@/components/Character";

interface InterestsProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const paragraph = `I’m passionate about creating seamless digital experiences through Web Development and UI/UX Design. I’m constantly exploring the possibilities of Machine Learning and aim to contribute to the Open Source community. These interests drive my work and fuel my curiosity.`;

const Interests = ({ containerRef }: InterestsProps) => {
  return <Character paragraph={paragraph} containerRef={containerRef} />;
};

export default Interests;
