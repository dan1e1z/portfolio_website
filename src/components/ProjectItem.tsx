import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectItemProps {
  title: string;
  img: string;
  desc: string;
  link: string;
}

export function ProjectItem({ title, img, desc, link }: ProjectItemProps) {
  return (
    <div className="w-full max-w-4xl mx-auto my-8 overflow-hidden">
      <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
        <div className="w-full overflow-hidden">
          <a href={link} className="block">
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video"
            >
              <motion.img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </a>
        </div>
        <div className="w-full p-6 bg-background">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">{desc}</p>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
