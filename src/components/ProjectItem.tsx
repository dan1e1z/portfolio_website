// TEST 1
// import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
//
// interface ProjectItemProps {
//   id: string; // Added id prop
//   title: string;
//   img: string;
//   desc: string;
//   link: string;
// }
//
// export function ProjectItem({ id, title, img, desc, link }: ProjectItemProps) {
//   return (
//     <div id={id} className="w-full max-w-4xl mx-auto my-8 overflow-hidden">
//       <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
//         <div className="w-full overflow-hidden">
//           <a href={link} className="block">
//             <motion.div
//               whileHover={{ scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//               className="relative aspect-video"
//             >
//               <motion.img
//                 src={img}
//                 alt={title}
//                 className="w-full h-full object-cover"
//                 whileHover={{ scale: 1.5 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>
//           </a>
//         </div>
//         <div className="w-full p-6 bg-background">
//           <CardHeader className="p-0 mb-4">
//             <CardTitle className="text-2xl font-bold">{title}</CardTitle>
//           </CardHeader>
//           <CardContent className="p-0">
//             <p className="text-muted-foreground">{desc}</p>
//           </CardContent>
//         </div>
//       </div>
//     </div>
//   );
// }
// TEST 2
// import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
//
// interface ProjectItemProps {
//   title: string;
//   img: string;
//   desc: string;
//   link: string;
// }
//
// export function ProjectItem({ title, img, desc, link }: ProjectItemProps) {
//   return (
//     <div className="w-full max-w-4xl mx-auto mb-8">
//       <div className="flex flex-col rounded-lg overflow-hidden">
//         <div className="w-full overflow-hidden">
//           <a href={link} className="block">
//             <motion.div
//               whileHover={{ scale: 0.95 }}
//               transition={{ duration: 0.3 }}
//               className="relative aspect-video"
//             >
//               <motion.img
//                 src={img}
//                 alt={title}
//                 className="w-full h-full object-cover"
//                 whileHover={{ scale: 1.5 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.div>
//           </a>
//         </div>
//         <div className="w-full p-6 bg-neutral-200">
//           <CardHeader className="p-0 mb-4">
//             <CardTitle className="text-2xl font-bold">{title}</CardTitle>
//           </CardHeader>
//           <CardContent className="p-0">
//             <p className="text-muted-foreground">{desc}</p>
//           </CardContent>
//         </div>
//       </div>
//     </div>
//   );
// }
// TEST 3 - Works
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectItemProps {
  id: string; // Added id prop
  title: string;
  img: string;
  desc: string;
  link: string;
}

export function ProjectItem({ id, title, img, desc, link }: ProjectItemProps) {
  return (
    <div id={id} className="w-full max-w-4xl mx-auto my-8 overflow-hidden">
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
