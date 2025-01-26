import { useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import SkillHero from "@/components/skills/SkillHero";
import SkillContent from "@/components/skills/SkillContent";
import SkillTransition from "@/components/skills/SkillTransition";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { skillSection } from "@/data/skills";

const Skills = () => {
  const containerRef = useRef(null);

  useScrollNavigation(containerRef, skillSection, "skills");

  return (
    <ScrollArea
      viewportRef={containerRef}
      // className="w-full h-full bg-[#1c1915] md:rounded-2xl"
      className=" bg-[#1c1915] md:rounded-2xl"
    >
      <div className="relative w-full h-[90dvh] md:h-screen border-b border-b-[#eee9cc]">
        <SkillHero containerRef={containerRef} />
      </div>
      <SkillTransition containerRef={containerRef} />
      <div
        className="h-[90dvh] md:h-screen w-full border-t border-t-[#eee9cc] bg-[#eee9cc]"
        id="skills1"
      >
        <SkillContent containerRef={containerRef} />
      </div>
    </ScrollArea>
  );
};

export default Skills;
