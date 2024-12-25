import { IconType } from "react-icons";
export interface FileType {
  name: string;
  type: "file";
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  parent: string;
  index: string;
}

export interface Directory {
  name: string;
  type: "directory";
  contents: (FileType | Directory)[];
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
}

export type FileSystemItem = File | Directory;

export interface IconProps {
  className?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  description: string;
}
