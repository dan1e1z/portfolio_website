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

// TEST1
// import { ForwardRefExoticComponent, RefAttributes } from "react";
// import { IconType } from "react-icons";
//
// export interface File {
//   name: string;
//   type: "file";
//   icon?: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
//   parent?: string;
//   index?: number;
// }
//
// export interface Directory {
//   name: string;
//   type: "directory";
//   contents?: (File | Directory)[];
//   icon?: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
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
// }

// TEST2
//
// import { ForwardRefExoticComponent, RefAttributes } from "react";
// import { IconType } from "react-icons";
//
// export interface File {
//   name: string;
//   type: "file";
//   icon?: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
//   parent?: string;
//   index?: number;
// }
//
// export interface Directory {
//   name: string;
//   type: "directory";
//   contents?: (File | Directory)[];
//   icon?: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
//   parent?: string;
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
// }

// TEST3

import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons";

export interface File {
  name: string;
  type: "file";
  icon?: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  parent?: string;
  index?: number;
}

export interface Directory {
  name: string;
  type: "directory";
  contents?: (File | Directory)[];
  icon?: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  parent?: string;
}

export type FileSystemItem = File | Directory;

export interface IconProps {
  className?: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  level: string;
  description: string;
}
