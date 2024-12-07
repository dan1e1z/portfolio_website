import { Folder, FileType2, House } from "lucide-react";
import { Directory } from "@/type";
export const fileSystem: Directory = {
  name: "home",
  type: "directory",
  contents: [
    {
      name: "about",
      type: "directory",
      contents: [
        { name: "bio.txt", type: "file", icon: FileType2 },
        { name: "team.txt", type: "file", icon: FileType2 },
      ],
      icon: Folder,
    },
    {
      name: "projects",
      type: "directory",
      contents: [
        {
          name: "Blog",
          type: "file",
          icon: FileType2,
          parent: "projects",
          index: "1",
        },
        {
          name: "App",
          type: "file",
          icon: FileType2,
          parent: "projects",
          index: "2",
        },
        {
          name: "Music",
          type: "file",
          icon: FileType2,
          parent: "projects",
          index: "3",
        },
      ],
      icon: Folder,
    },
    {
      name: "contact",
      type: "directory",
      contents: [{ name: "contact.txt", type: "file", icon: FileType2 }],
      icon: Folder,
    },
  ],
  icon: House,
};
