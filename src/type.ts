export interface FileType {
  name: string;
  type: "file";
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
  parnet: string;
  index: string;
}

export interface Directory {
  name: string;
  type: "directory";
  contents: (FileType | Directory)[];
  icon: React.ForwardRefExoticComponent<React.RefAttributes<SVGSVGElement>>;
}

export type FileSystemItem = File | Directory;
