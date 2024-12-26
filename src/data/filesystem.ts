// interface File {
//   name: string;
//   type: "file";
//   icon: React.ElementType; // Ensure this matches the type of icons you use
//   parent: string;
//   index: number; // Use `number` instead of `string` for consistency
// }
//
// interface Directory {
//   name: string;
//   type: "directory";
//   icon: React.ElementType;
//   contents: (File | Directory)[]; // A directory can contain files or other directories
// }
//
// import { Folder, FileType2, House } from "lucide-react";
//
// export const fileSystem: Directory = {
//   name: "home",
//   type: "directory",
//   icon: House,
//   contents: [
//     {
//       name: "about",
//       type: "directory",
//       icon: Folder,
//       contents: [
//         {
//           name: "bio.txt",
//           type: "file",
//           icon: FileType2,
//           parent: "about",
//           index: 1, // Changed to number
//         },
//         {
//           name: "team.txt",
//           type: "file",
//           icon: FileType2,
//           parent: "about",
//           index: 2, // Changed to number
//         },
//       ],
//     },
//     {
//       name: "projects",
//       type: "directory",
//       icon: Folder,
//       contents: [
//         {
//           name: "Blog",
//           type: "file",
//           icon: FileType2,
//           parent: "projects",
//           index: 1, // Changed to number
//         },
//         {
//           name: "App",
//           type: "file",
//           icon: FileType2,
//           parent: "projects",
//           index: 2, // Changed to number
//         },
//         {
//           name: "Music",
//           type: "file",
//           icon: FileType2,
//           parent: "projects",
//           index: 3, // Changed to number
//         },
//       ],
//     },
//     {
//       name: "contacts",
//       type: "directory",
//       icon: Folder,
//       contents: [
//         {
//           name: "contact.txt",
//           type: "file",
//           icon: FileType2,
//           parent: "contacts", // Corrected parent to match the directory name
//           index: 1, // Changed to number
//         },
//       ],
//     },
//   ],
// };

import { Directory } from "@/type";
import { Folder, FileType2, Home } from "lucide-react";

export const fileSystem: Directory = {
  name: "home",
  type: "directory",
  icon: Home,
  contents: [
    {
      name: "about",
      type: "directory",
      icon: Folder,
      contents: [
        {
          name: "bio.txt",
          type: "file",
          icon: FileType2,
        },
        {
          name: "team.txt",
          type: "file",
          icon: FileType2,
        },
      ],
    },
    {
      name: "projects",
      type: "directory",
      icon: Folder,
      contents: [
        {
          name: "Blog",
          type: "file",
          icon: FileType2,
        },
        {
          name: "App",
          type: "file",
          icon: FileType2,
        },
        {
          name: "Music",
          type: "file",
          icon: FileType2,
        },
      ],
    },
    {
      name: "contacts",
      type: "directory",
      icon: Folder,
      contents: [
        {
          name: "contact.txt",
          type: "file",
          icon: FileType2,
        },
      ],
    },
  ],
};
