// import { useEffect, useRef, useState } from "react";
// import { animate } from "framer-motion";
// import { FaGithub, FaReact, FaJava, FaPython } from "react-icons/fa";
// import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
// import { FaGolang } from "react-icons/fa6";
// import FuturisticHover from "@/animations/FuturisticHover";
//
// const skills = [
//   { name: "TypeScript", icon: SiTypescript, level: 5 },
//   {
//     name: "React",
//     icon: FaReact,
//     level: 5,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: SiTailwindcss,
//     level: 4,
//   },
//   {
//     name: "MongoDB",
//     icon: SiMongodb,
//     level: 3,
//   },
//   {
//     name: "Python",
//     icon: FaPython,
//     level: 4,
//   },
//   {
//     name: "Git",
//     icon: FaGithub,
//     level: 4,
//   },
//   {
//     name: "Java",
//     icon: FaJava,
//     level: 3,
//   },
//   {
//     name: "Go",
//     icon: FaGolang,
//     level: 2,
//   },
// ];
//
// const path = [
//   "M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5",
//   "M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8",
//   "M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25",
//   "M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9",
//   "M183.2,43.7H92.1l-10,88.3c0,0,18.3-21.9,51-21.9s49.4,32.6,49.4,48.2c0,22.2-9.5,57-52.5,57s-51.4-36.7-51.4-36.7",
// ];
//
// const SkillContent = () => {
//   const [index, setIndex] = useState(0);
//   const circles = useRef<SVGCircleElement[]>([]); // TypeScript: Declare the correct type for the ref array
//   const paths = useRef<SVGPathElement[]>([]); // TypeScript: Declare the correct type for the ref array
//   const nbOfCircles = 30;
//   const radius = 20;
//
//   useEffect(() => {
//     const length = paths.current[index].getTotalLength();
//     const step = length / nbOfCircles;
//
//     circles.current.forEach((circle, i) => {
//       const { x, y } = paths.current[index].getPointAtLength(i * step);
//       animate(circle, { cx: x, cy: y }, { delay: i * 0.025, ease: "easeOut" });
//     });
//   }, [index]);
//
//   return (
//     <div className="h-full w-full flex items-center justify-center">
//       <div className="cursor-pointer text-[36px]">
//         {skills.map((skill, i) => {
//           const { name, _icon, _level } = skill;
//           return (
//             <p
//               // style={{ color: i === index ? "red" : "black" }}
//               onClick={() => setIndex(i)}
//               key={i}
//             >
//               <FuturisticHover text={`${name}`} className="text-[#1c1915]" />
//             </p>
//           );
//         })}
//       </div>
//       <svg
//         viewBox="0 0 256 256"
//         style={{ width: "500px", filter: "url(#filter)" }}
//       >
//         <defs>
//           <filter id="filter">
//             <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15"
//               result="filter"
//             />
//           </filter>
//         </defs>
//         <g>
//           {skills.map((skill, i) => {
//             const { _name, _icon, level } = skill;
//             return (
//               <path
//                 key={`p_${i}`}
//                 ref={(ref) => (paths.current[i] = ref!)}
//                 d={path[level - 1]}
//                 style={{ display: "none" }}
//               />
//             );
//           })}
//         </g>
//
//         <g>
//           {[...Array(nbOfCircles)].map((_, i) => {
//             return (
//               <circle
//                 key={`c_${i}`}
//                 ref={(ref) => (circles.current[i] = ref!)}
//                 cx="128"
//                 cy="128"
//                 r={radius}
//               />
//             );
//           })}
//         </g>
//       </svg>
//     </div>
//   );
// };
//
// export default SkillContent;

// TEST1
// import { useEffect, useRef, useState } from "react";
// import { animate } from "framer-motion";
// import { FaGithub, FaReact, FaJava, FaPython } from "react-icons/fa";
// import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
// import { FaGolang } from "react-icons/fa6";
// import FuturisticHover from "@/animations/FuturisticHover";
//
// const skills = [
//   { name: "TypeScript", icon: SiTypescript, level: 5 },
//   {
//     name: "React",
//     icon: FaReact,
//     level: 5,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: SiTailwindcss,
//     level: 4,
//   },
//   {
//     name: "MongoDB",
//     icon: SiMongodb,
//     level: 3,
//   },
//   {
//     name: "Python",
//     icon: FaPython,
//     level: 4,
//   },
//   {
//     name: "Git",
//     icon: FaGithub,
//     level: 4,
//   },
//   {
//     name: "Java",
//     icon: FaJava,
//     level: 3,
//   },
//   {
//     name: "Go",
//     icon: FaGolang,
//     level: 2,
//   },
// ];
//
// const path = [
//   "M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5",
//   "M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8",
//   "M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25",
//   "M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9",
//   "M183.2,43.7H92.1l-10,88.3c0,0,18.3-21.9,51-21.9s49.4,32.6,49.4,48.2c0,22.2-9.5,57-52.5,57s-51.4-36.7-51.4-36.7",
// ];
//
// const SkillContent = () => {
//   const [index, setIndex] = useState(0);
//   const [rerenderKey, setRerenderKey] = useState(0); // Dummy state to trigger re-renders
//   const circles = useRef<SVGCircleElement[]>([]); // TypeScript: Declare the correct type for the ref array
//   const paths = useRef<SVGPathElement[]>([]); // TypeScript: Declare the correct type for the ref array
//   const nbOfCircles = 30;
//   const radius = 20;
//
//   useEffect(() => {
//     const length = paths.current[index].getTotalLength();
//     const step = length / nbOfCircles;
//
//     circles.current.forEach((circle, i) => {
//       const { x, y } = paths.current[index].getPointAtLength(i * step);
//       animate(circle, { cx: x, cy: y }, { delay: i * 0.025, ease: "easeOut" });
//     });
//   }, [index]);
//
//   const handleClick = (i: number) => {
//     setIndex(i); // Update to a new index or same index (React re-renders even with same value)
//     setRerenderKey((prevKey) => prevKey + 1); // Force a re-render
//   };
//
//   return (
//     <div className="h-full w-full flex items-center justify-center gap-2">
//       <div className="cursor-pointer text-[36px]">
//         {skills.map((skill, i) => {
//           const { name, _icon, _level } = skill;
//           return (
//             <p onClick={() => handleClick(i)} key={i}>
//               <FuturisticHover
//                 text={`${name}`}
//                 className="text-[#1c1915] tracking-wide font-mono"
//               />
//             </p>
//           );
//         })}
//       </div>
//       <svg
//         viewBox="0 0 256 256"
//         style={{ width: "500px", filter: "url(#filter)" }}
//       >
//         <defs>
//           <filter id="filter">
//             <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15"
//               result="filter"
//             />
//           </filter>
//         </defs>
//         <g>
//           {skills.map((skill, i) => {
//             const { _name, _icon, level } = skill;
//             return (
//               <path
//                 key={`p_${i}`}
//                 ref={(ref) => (paths.current[i] = ref!)}
//                 d={path[level - 1]}
//                 style={{ display: "none" }}
//               />
//             );
//           })}
//         </g>
//
//         <g>
//           {[...Array(nbOfCircles)].map((_, i) => {
//             return (
//               <circle
//                 key={`c_${i}`}
//                 ref={(ref) => (circles.current[i] = ref!)}
//                 cx="128"
//                 cy="128"
//                 r={radius}
//               />
//             );
//           })}
//         </g>
//       </svg>
//     </div>
//   );
// };
//
// export default SkillContent;

// TEST2
import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { FaGithub, FaReact, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import FuturisticHover from "@/animations/FuturisticHover";

const skills = [
  { name: "TypeScript", icon: SiTypescript, level: 5 },
  { name: "React", icon: FaReact, level: 5 },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 4 },
  { name: "MongoDB", icon: SiMongodb, level: 3 },
  { name: "Python", icon: FaPython, level: 4 },
  { name: "Git", icon: FaGithub, level: 4 },
  { name: "Java", icon: FaJava, level: 3 },
  { name: "Go", icon: FaGolang, level: 2 },
];

const path = [
  "M87.9,79.2c1.1-0.4,53.7-39.2,54.9-39.1v180.5",
  "M81.7,85.7c-1.4-67,112.3-55.1,90.2,11.6c-12.6,32-70.6,83.7-88.8,113.7h105.8",
  "M74.8,178.5c3,39.4,63.9,46.7,88.6,23.7c34.3-35.1,5.4-75.8-41.7-77c29.9,5.5,68.7-43.1,36.5-73.7 c-23.4-21.5-76.5-11.1-78.6,25",
  "M161.9,220.8 161.9,41 72.6,170.9 208.2,170.9",
  "M183.2,43.7H92.1l-10,88.3c0,0,18.3-21.9,51-21.9s49.4,32.6,49.4,48.2c0,22.2-9.5,57-52.5,57s-51.4-36.7-51.4-36.7",
];

const SkillContent = () => {
  const [selectedSkill, setSelectedSkill] = useState<number>(0);
  const [renderKey, setRenderKey] = useState<number>(0);
  const circles = useRef<SVGCircleElement[]>([]);
  const paths = useRef<SVGPathElement[]>([]);
  const nbOfCircles = 30;
  const radius = 20;

  useEffect(() => {
    const length = paths.current[selectedSkill].getTotalLength();
    const step = length / nbOfCircles;

    circles.current.forEach((circle, i) => {
      const { x, y } = paths.current[selectedSkill].getPointAtLength(i * step);
      animate(circle, { cx: x, cy: y }, { delay: i * 0.025, ease: "easeOut" });
    });
  }, [selectedSkill, renderKey]);

  const handleClick = (index: number) => {
    if (index === selectedSkill) {
      // Force a new render cycle with the same animation
      setRenderKey((prev) => prev + 1);
    } else {
      setSelectedSkill(index);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center gap-2">
      <div className="cursor-pointer text-[36px]">
        {skills.map((skill, i) => (
          <p onClick={() => handleClick(i)} key={i}>
            <FuturisticHover
              text={skill.name}
              className="text-[#1c1915] tracking-wide font-mono"
            />
          </p>
        ))}
      </div>
      <svg
        viewBox="0 0 256 256"
        style={{ width: "500px", filter: "url(#filter)" }}
        key={renderKey} // This forces SVG to completely re-render
      >
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -15"
              result="filter"
            />
          </filter>
        </defs>
        <g>
          {skills.map((skill, i) => (
            <path
              key={`p_${i}`}
              ref={(ref) => (paths.current[i] = ref!)}
              d={path[skill.level - 1]}
              style={{ display: "none" }}
            />
          ))}
        </g>
        <g>
          {Array.from({ length: nbOfCircles }).map((_, i) => (
            <circle
              key={`c_${i}`}
              ref={(ref) => (circles.current[i] = ref!)}
              cx="128"
              cy="128"
              r={radius}
            />
          ))}
        </g>
      </svg>

      {/* Add the /5 with the same filter as main SVG */}
      <div className="translate-y-40 text-8xl font-mono text-black">/5</div>
    </div>
  );
};

export default SkillContent;
