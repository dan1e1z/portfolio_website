// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   CodeIcon,
//   BookOpenIcon,
//   TargetIcon,
//   HeartIcon,
//   TrophyIcon,
// } from "lucide-react";
//
// export default function About() {
//   const interests = [
//     "Web Development",
//     "UI/UX Design",
//     "Machine Learning",
//     "Open Source",
//   ];
//   const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
//   return (
//     <div className="h-full w-full bg-background flex items-center justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <CardHeader className="bg-secondary/50 rounded-t-lg">
//             <CardTitle className="flex items-center text-xl">
//               <CodeIcon className="mr-3 text-primary" />
//               Professional Overview
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-6">
//             <p className="text-muted-foreground leading-relaxed">
//               A passionate{" "}
//               <strong className="text-primary">web developer</strong>{" "}
//               specializing in creating
//               <strong className="text-primary">
//                 {" "}
//                 intuitive and visually appealing interfaces
//               </strong>
//               . Proficient in{" "}
//               <strong className="text-primary">
//                 full-stack development
//               </strong>{" "}
//               with expertise in{" "}
//               <strong className="text-primary">
//                 Python, TypeScript, React
//               </strong>
//               , and modern web technologies.
//             </p>
//           </CardContent>
//         </Card>
//
//         <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <CardHeader className="bg-secondary/50 rounded-t-lg">
//             <CardTitle className="flex items-center text-xl">
//               <TargetIcon className="mr-3 text-primary" />
//               Profile
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="flex justify-center items-center p-6">
//             <div className="w-48 h-48 bg-secondary rounded-full flex items-center justify-center">
//               <span className="text-3xl font-bold text-muted-foreground">
//                 YN
//               </span>
//             </div>
//           </CardContent>
//         </Card>
//
//         <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <CardHeader className="bg-secondary/50 rounded-t-lg">
//             <CardTitle className="flex items-center text-xl">
//               <BookOpenIcon className="mr-3 text-primary" />
//               Background
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-6">
//             <p className="text-muted-foreground leading-relaxed">
//               Computer Science student studying computer science at{" "}
//               <strong className="text-primary">university of sydney</strong>.
//               experienced with technologies ranging from{" "}
//               <strong className="text-primary">
//                 Python and Java to TypeScript and React
//               </strong>
//               . Passionate about{" "}
//               <strong className="text-primary">continuous learning</strong> and{" "}
//               <strong className="text-primary">problem-solving</strong>.
//             </p>
//           </CardContent>
//         </Card>
//
//         <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <CardHeader className="bg-secondary/50 rounded-t-lg">
//             <CardTitle className="flex items-center text-xl">
//               <HeartIcon className="mr-3 text-primary" />
//               Interests
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-6">
//             <ul className="list-none pl-0 space-y-2">
//               {interests.map((interest) => (
//                 <li
//                   key={interest}
//                   className="text-muted-foreground before:content-['▸'] before:mr-2 before:text-primary"
//                 >
//                   {interest}
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//
//         <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <CardHeader className="bg-secondary/50 rounded-t-lg">
//             <CardTitle className="flex items-center text-xl">
//               <TrophyIcon className="mr-3 text-primary" />
//               Hobbies
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="p-6">
//             <ul className="list-none pl-0 space-y-2">
//               {hobbies.map((hobby) => (
//                 <li
//                   key={hobby}
//                   className="text-muted-foreground before:content-['▸'] before:mr-2 before:text-primary"
//                 >
//                   {hobby}
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// Professional Overview
// Profile
// Background
// Interests
// Hobbies

// TEST1
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const interests = [
  "Web Development",
  "UI/UX Design",
  "Machine Learning",
  "Open Source",
];

const hobbies = ["Photography", "Hiking", "Reading", "Chess"];

const About = () => {
  return (
    <div className="min-h-screen bg-background p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-card-foreground">
            About Me
          </h1>
          <Tabs defaultValue="education" className="w-full">
            <TabsList className="flex flex-col sm:flex-row w-full mb-8">
              <TabsTrigger value="education" className="flex-1">
                Education
              </TabsTrigger>
              <TabsTrigger value="interests" className="flex-1">
                Interests
              </TabsTrigger>
              <TabsTrigger value="hobbies" className="flex-1">
                Hobbies
              </TabsTrigger>
              <TabsTrigger value="about" className="flex-1">
                About
              </TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent value="education">
                <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-card-foreground">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-muted-foreground">
                      University of Technology, 2018-2022
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card-foreground">
                      Master of Science in Artificial Intelligence
                    </h3>
                    <p className="text-muted-foreground">
                      Tech Institute, 2022-2024
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="interests">
                <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Interests
                </h2>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="hobbies">
                <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Hobbies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <Badge key={index} variant="outline">
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
                  About Me
                </h2>
                <p className="text-card-foreground">
                  I'm a passionate software developer with a keen interest in
                  artificial intelligence and web technologies. With a strong
                  foundation in computer science and specialized knowledge in
                  AI, I strive to create innovative solutions that push the
                  boundaries of what's possible in tech. When I'm not coding,
                  you can find me exploring nature through hiking, capturing
                  moments with my camera, or engaged in a challenging game of
                  chess.
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default About;
