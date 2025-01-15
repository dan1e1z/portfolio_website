// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { skills } from "@/data/skills";
// // import { Skill } from "@/types";
//
// const Skills = () => {
//   return (
//     <div className="flex items-center justify-center w-full h-full rounded-2lg bg-page">
//       <Card className="w-full max-w-4xl">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">Skill Stack</CardTitle>
//           <CardDescription>Technologies and tools I work with</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//             {skills.map((skill) => (
//               <div
//                 key={skill.name}
//                 className="group flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-colors duration-200"
//               >
//                 <div className="mb-3 p-2 rounded-full bg-transparent duration-200">
//                   <skill.icon className="w-8 h-8 text-primary" />
//                 </div>
//                 <h4 className="text-sm font-medium text-center">
//                   {skill.name}
//                 </h4>
//                 {skill.level && (
//                   <Badge variant="outline" className="mt-2 text-xs">
//                     {skill.level}
//                   </Badge>
//                 )}
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };
//
// export default Skills;

// TEST1
// import { useRef } from "react";
// import SplitTextAnimation from "@/animations/SplitTextAnimation";
// import OverlayLine from "@/components/OverlayLine";
// import AnimatedText from "@/animations/AnimatedText";
// import Arrow from "@/animations/Arrow";
// import { ScrollArea } from "@/components/ui/scroll-area";
//
// const Skills = () => {
//   const scrollRef = useRef(null);
//   return (
//     <ScrollArea viewportRef={scrollRef} className="w-full h-full bg-[#1c1915]">
//       <div className="h-screen w-full">
//         <div className="absolute w-24 top-[10%] right-[30%] rotate-90">
//           <Arrow />
//         </div>
//         <div className="h-full w-[30%]">
//           <AnimatedText /> {/* Animated Text component */}
//         </div>
//         <div className="absolute bottom-0 left-[20%]">
//           <SplitTextAnimation
//             text="SKILL"
//             direction="up"
//             className="text-[#eee9cc] text-8xl font-neueMontreal"
//             scalingFactor={2}
//             overallDelay={0}
//           />
//           <SplitTextAnimation
//             text="EXPERTISE"
//             direction="down"
//             className="text-[#eee9cc] text-8xl font-neueMontreal mt-[-0.1em]"
//             overallDelay={0.6}
//           />
//         </div>
//         <div className="absolute inset-0 -z-1">
//           <OverlayLine
//             top={{ x: "70%", y: "0%" }}
//             bottom={{ x: "70%", y: "100%" }}
//             colour="#eee9cc"
//             thickness="1px"
//           />
//           <OverlayLine
//             top={{ x: "50%", y: "100%" }}
//             bottom={{ x: "90%", y: "0%" }}
//             colour="#eee9cc"
//             thickness="1px"
//           />
//         </div>
//       </div>
//       <div className="h-screen w-full">hello</div>
//     </ScrollArea>
//   );
// };
//
// export default Skills;

// TEST2
import { useRef } from "react";
import SplitTextAnimation from "@/animations/SplitTextAnimation";
import OverlayLine from "@/components/OverlayLine";
import AnimatedText from "@/animations/AnimatedText";
import Arrow from "@/animations/Arrow";
import { ScrollArea } from "@/components/ui/scroll-area";

const Skills = () => {
  const scrollRef = useRef(null);

  return (
    <ScrollArea viewportRef={scrollRef} className="w-full h-full bg-[#1c1915]">
      <div className="relative w-full h-screen">
        {" "}
        {/* Make the parent relative */}
        <div className="absolute w-24 top-[10%] right-[30%] rotate-90">
          <Arrow />
        </div>
        <div className="h-full w-[30%]">
          <AnimatedText /> {/* Animated Text component */}
        </div>
        <div className="absolute bottom-0 left-[20%]">
          <SplitTextAnimation
            text="SKILL"
            direction="up"
            className="text-[#eee9cc] text-8xl font-neueMontreal"
            scalingFactor={2}
            overallDelay={0}
          />
          <SplitTextAnimation
            text="EXPERTISE"
            direction="down"
            className="text-[#eee9cc] text-8xl font-neueMontreal mt-[-0.1em]"
            overallDelay={0.6}
          />
        </div>
        <div className="absolute inset-0 -z-1">
          <OverlayLine
            top={{ x: "70%", y: "0%" }}
            bottom={{ x: "70%", y: "100%" }}
            colour="#eee9cc"
            thickness="1px"
          />
          <OverlayLine
            top={{ x: "50%", y: "100%" }}
            bottom={{ x: "90%", y: "0%" }}
            colour="#eee9cc"
            thickness="1px"
          />
        </div>
      </div>
      <div className="h-screen w-full border-t border-t-[#eee9cc]">hello</div>{" "}
    </ScrollArea>
  );
};

export default Skills;
