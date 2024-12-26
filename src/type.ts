// import { IconType } from "react-icons";
// export interface FileType {
//   name: string;
//   type: "file";
//   icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
//   parent: string;
//   index: string;
// }
//
// export interface Directory {
//   name: string;
//   type: "directory";
//   contents: (FileType | Directory)[];
//   icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
// }
//
// export type FileSystemItem = File | Directory;
//
// export interface IconProps {
//   className?: string;
// }
//
// export interface Skill {
//   name: string;
//   icon: IconType;
//   description: string;
//
// }

import { IconType } from "react-icons";

// Define a File type
export interface File {
  name: string;
  type: "file";
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  parent?: Directory; // Directory where this file is located
  index: number; // Unique index for ordering or identification
}

// Define a Directory type
export interface Directory {
  name: string;
  type: "directory";
  contents: (File | Directory)[]; // Contains files and subdirectories
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  parent?: Directory; // Parent directory
}

// Union type for FileSystemItem
export type FileSystemItem = File | Directory;

// Interface for Icons
export interface IconProps {
  className?: string;
}

// Skill Interface (unchanged)
export interface Skill {
  name: string;
  icon: IconType;
  description: string;
}

// ScrollAreaProps Fix (example definition for missing property)
export interface ScrollAreaProps {
  children: React.ReactNode;
  className: string;
  viewportRef: React.RefObject<HTMLDivElement>; // Add required property
}
