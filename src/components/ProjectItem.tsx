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
//         <div className="w-full p-6 bg-[#1c1915]">
//           <CardHeader className="p-0 mb-4">
//             <CardTitle className="text-[#eee9cc] text-2xl font-bold">
//               {title}
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-0">
//             <p className="text-[#eee9cc] ">{desc}</p>
//           </CardContent>
//         </div>
//       </div>
//     </div>
//   );
// }

// TEST1
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectItemProps {
  id: string;
  title: string;
  img: string;
  desc: string;
  link: string;
}

export function ProjectItem({ id, title, img, desc, link }: ProjectItemProps) {
  return (
    <div id={id} className="w-full max-w-4xl mx-auto my-8">
      <div className="flex flex-col shadow-lg rounded-lg overflow-hidden">
        <div className="w-full overflow-hidden">
          <a href={link} className="block">
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full pt-[56.25%]" // 16:9 aspect ratio
            >
              <motion.img
                src={img}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </a>
        </div>
        <div className="w-full p-6 bg-[#1c1915]">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-[#eee9cc] text-2xl font-bold">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[#eee9cc]">{desc}</p>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
