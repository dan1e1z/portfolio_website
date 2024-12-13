// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
//
// export default function About() {
//   const skills = ["React", "TypeScript", "Tailwind CSS", "Node.js", "Python"];
//   const interests = [
//     "Web Development",
//     "UI/UX Design",
//     "Machine Learning",
//     "Open Source",
//   ];
//   const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8">About Me</h1>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card className="md:col-span-2">
//           <CardHeader>
//             <CardTitle>About Me</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>
//               I'm a passionate <strong>web developer</strong> focused on
//               creating <strong>intuitive</strong> and{" "}
//               <strong>visually appealing user interfaces</strong>. With
//               experience in <strong>Python</strong>, <strong>Java</strong>,{" "}
//               <strong>C</strong>, and modern web technologies like{" "}
//               <strong>TypeScript</strong>, <strong>React</strong>, and{" "}
//               <strong>Go</strong>, I thrive on bringing ideas to life through
//               code. Whether working on <strong>full-stack applications</strong>{" "}
//               or tackling <strong>low-level programming</strong>, I’m always
//               eager to learn and take on new challenges.
//             </p>
//           </CardContent>
//         </Card>
//
//         <Card>
//           <CardHeader>
//             <CardTitle>Profile</CardTitle>
//           </CardHeader>
//           <CardContent className="flex justify-center">
//             {/* <Avatar className="w-48 h-48"> */}
//             {/*   <AvatarImage src="/path-to-your-image.jpg" alt="Profile picture" /> */}
//             {/*   <AvatarFallback>YN</AvatarFallback> */}
//             {/* </Avatar> */}
//           </CardContent>
//         </Card>
//
//         <Card>
//           <CardHeader>
//             <CardTitle>Background</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>
//               I’m currently studying <strong>Computer Science</strong> and have
//               over five years of hands-on experience in the{" "}
//               <strong>tech industry</strong>. My journey began with{" "}
//               <strong>Python</strong>, <strong>Java</strong>, and{" "}
//               <strong>C</strong>, and has expanded to include modern web
//               technologies like <strong>TypeScript</strong>,{" "}
//               <strong>MongoDB</strong>, and <strong>React</strong>. I’ve also
//               explored <strong>Go</strong> through a <strong>hackathon</strong>.
//               I’m passionate about <strong>full-stack development</strong> and{" "}
//               <strong>problem-solving</strong>, with a hands-on, trial-and-error
//               approach to learning.
//             </p>
//           </CardContent>
//         </Card>
//
//         <Card>
//           <CardHeader>
//             <CardTitle>Skills</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill) => (
//                 <Badge key={skill} variant="secondary">
//                   {skill}
//                 </Badge>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//
//         <Card>
//           <CardHeader>
//             <CardTitle>Interests</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="list-disc pl-5">
//               {interests.map((interest) => (
//                 <li key={interest}>{interest}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//
//         <Card>
//           <CardHeader>
//             <CardTitle>Hobbies</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="list-disc pl-5">
//               {hobbies.map((hobby) => (
//                 <li key={hobby}>{hobby}</li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CodeIcon,
  BookOpenIcon,
  TargetIcon,
  HeartIcon,
  TrophyIcon,
} from "lucide-react";

export default function About() {
  const interests = [
    "Web Development",
    "UI/UX Design",
    "Machine Learning",
    "Open Source",
  ];
  const hobbies = ["Photography", "Hiking", "Reading", "Chess"];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 rounded-t-lg">
            <CardTitle className="flex items-center text-xl text-gray-700 dark:text-gray-200">
              <CodeIcon className="mr-3 text-blue-500" />
              Professional Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              A passionate{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                web developer
              </strong>{" "}
              specializing in creating
              <strong className="text-blue-600 dark:text-blue-400">
                {" "}
                intuitive and visually appealing interfaces
              </strong>
              . Proficient in{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                full-stack development
              </strong>{" "}
              with expertise in{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                Python, TypeScript, React
              </strong>
              , and modern web technologies.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 rounded-t-lg">
            <CardTitle className="flex items-center text-xl text-gray-700 dark:text-gray-200">
              <TargetIcon className="mr-3 text-green-500" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center p-6">
            <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-500 dark:text-gray-400">
                YN
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 rounded-t-lg">
            <CardTitle className="flex items-center text-xl text-gray-700 dark:text-gray-200">
              <BookOpenIcon className="mr-3 text-purple-500" />
              Background
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Computer Science student with{" "}
              <strong className="text-purple-600 dark:text-purple-400">
                five years of tech industry experience
              </strong>
              . Explored technologies from{" "}
              <strong className="text-purple-600 dark:text-purple-400">
                Python and Java to TypeScript and React
              </strong>
              . Passionate about{" "}
              <strong className="text-purple-600 dark:text-purple-400">
                continuous learning
              </strong>{" "}
              and{" "}
              <strong className="text-purple-600 dark:text-purple-400">
                problem-solving
              </strong>
              .
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 rounded-t-lg">
            <CardTitle className="flex items-center text-xl text-gray-700 dark:text-gray-200">
              <HeartIcon className="mr-3 text-red-500" />
              Interests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="list-none pl-0 space-y-2">
              {interests.map((interest) => (
                <li
                  key={interest}
                  className="text-gray-600 dark:text-gray-300 before:content-['▸'] before:mr-2 before:text-red-500"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="bg-gray-50 dark:bg-gray-800 rounded-t-lg">
            <CardTitle className="flex items-center text-xl text-gray-700 dark:text-gray-200">
              <TrophyIcon className="mr-3 text-amber-500" />
              Hobbies
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="list-none pl-0 space-y-2">
              {hobbies.map((hobby) => (
                <li
                  key={hobby}
                  className="text-gray-600 dark:text-gray-300 before:content-['▸'] before:mr-2 before:text-amber-500"
                >
                  {hobby}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
