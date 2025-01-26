import { FaGithub, FaReact, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export const skills = [
  { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
  {
    name: "React",
    icon: FaReact,
    level: "Advanced",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Advanced",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "Intermediate",
  },
  {
    name: "Python",
    icon: FaPython,
    level: "Advanced",
  },
  {
    name: "Git",
    icon: FaGithub,
    level: "Advanced",
  },
  {
    name: "Java",
    icon: FaJava,
    level: "Intermediate",
  },
  {
    name: "Go",
    icon: FaGolang,
    level: "Beginner",
  },
];

export const skillSection = [
  {
    id: 1,
    title: "Skills",
  },
];
