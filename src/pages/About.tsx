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
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import ComputerModelContainer from "@/components/services/ComputerModelContainer";
//
// const interests = [
//   "Web Development",
//   "UI/UX Design",
//   "Machine Learning",
//   "Open Source",
// ];
//
// const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
// const About = () => {
//   return (
//     <div className="min-h-screen bg-background p-6 flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg overflow-hidden">
//         <div className="p-6">
//           <h1 className="text-3xl font-bold mb-6 text-card-foreground">
//             About Me
//           </h1>
//           <Tabs defaultValue="education" className="w-full">
//             <TabsList className="flex flex-col sm:flex-row w-full mb-8">
//               <TabsTrigger value="education" className="flex-1">
//                 Education
//               </TabsTrigger>
//               <TabsTrigger value="interests" className="flex-1">
//                 Interests
//               </TabsTrigger>
//               <TabsTrigger value="hobbies" className="flex-1">
//                 Hobbies
//               </TabsTrigger>
//               <TabsTrigger value="about" className="flex-1">
//                 About
//               </TabsTrigger>
//             </TabsList>
//             <div className="mt-6">
//               <TabsContent value="education">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Education
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-lg font-medium text-card-foreground">
//                       Bachelor of Science in Computer Science
//                     </h3>
//                     <p className="text-muted-foreground">
//                       University of Sydney
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-card-foreground">
//                       test
//                     </h3>
//                     <p className="text-muted-foreground">test</p>
//                   </div>
//                 </div>
//               </TabsContent>
//               <TabsContent value="interests">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Interests
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {interests.map((interest, index) => (
//                     <Badge key={index} variant="secondary">
//                       {interest}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="hobbies">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Hobbies
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {hobbies.map((hobby, index) => (
//                     <Badge key={index} variant="outline">
//                       {hobby}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="about">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   About Me
//                 </h2>{" "}
//                 <p className="text-muted-foreground leading-relaxed">
//                   A passionate{" "}
//                   <strong className="text-primary">web developer</strong>
//                   specializing in creating{" "}
//                   <strong className="text-primary">
//                     intuitive and visually appealing interfaces{" "}
//                   </strong>
//                   . Proficient in{" "}
//                   <strong className="text-primary">
//                     full-stack development{" "}
//                   </strong>{" "}
//                   with expertise in{" "}
//                   <strong className="text-primary">
//                     Python, TypeScript, React{" "}
//                   </strong>
//                   , and modern web technologies.{" "}
//                 </p>
//               </TabsContent>
//             </div>
//           </Tabs>
//         </div>
//         <ComputerModelContainer />
//       </div>
//     </div>
//   );
// };
//
// export default About;

// TEST2 - WORKING
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import ComputerModelContainer from "@/components/services/ComputerModelContainer";
//
// const interests = [
//   "Web Development",
//   "UI/UX Design",
//   "Machine Learning",
//   "Open Source",
// ];
//
// const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
// const About = () => {
//   return (
//     <div className="min-h-screen bg-background p-6 flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg overflow-hidden flex">
//         <div className="p-6">
//           <h1 className="text-3xl font-bold mb-6 text-card-foreground">
//             About Me
//           </h1>
//           <Tabs defaultValue="education" className="w-full">
//             <TabsList className="flex flex-col sm:flex-row w-full mb-8">
//               <TabsTrigger value="education" className="flex-1">
//                 Education
//               </TabsTrigger>
//               <TabsTrigger value="interests" className="flex-1">
//                 Interests
//               </TabsTrigger>
//               <TabsTrigger value="hobbies" className="flex-1">
//                 Hobbies
//               </TabsTrigger>
//               <TabsTrigger value="about" className="flex-1">
//                 About
//               </TabsTrigger>
//             </TabsList>
//             <div className="mt-6">
//               <TabsContent value="education">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Education
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-lg font-medium text-card-foreground">
//                       Bachelor of Science in Computer Science
//                     </h3>
//                     <p className="text-muted-foreground">
//                       University of Sydney
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-card-foreground">
//                       test
//                     </h3>
//                     <p className="text-muted-foreground">test</p>
//                   </div>
//                 </div>
//               </TabsContent>
//               <TabsContent value="interests">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Interests
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {interests.map((interest, index) => (
//                     <Badge key={index} variant="secondary">
//                       {interest}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="hobbies">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Hobbies
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {hobbies.map((hobby, index) => (
//                     <Badge key={index} variant="outline">
//                       {hobby}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="about">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   About Me
//                 </h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   A passionate{" "}
//                   <strong className="text-primary">web developer</strong>{" "}
//                   specializing in creating{" "}
//                   <strong className="text-primary">
//                     intuitive and visually appealing interfaces
//                   </strong>
//                   . Proficient in{" "}
//                   <strong className="text-primary">
//                     full-stack development
//                   </strong>{" "}
//                   with expertise in{" "}
//                   <strong className="text-primary">
//                     Python, TypeScript, React
//                   </strong>
//                   , and modern web technologies.
//                 </p>
//               </TabsContent>
//             </div>
//           </Tabs>
//         </div>
//         <div className="w-full">
//           <ComputerModelContainer />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default About;

// TEST3 - SEMI-WORKING

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import ComputerModelContainer from "@/components/services/ComputerModelContainer";
//
// const interests = [
//   "Web Development",
//   "UI/UX Design",
//   "Machine Learning",
//   "Open Source",
// ];
//
// const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
// const About = () => {
//   return (
//     <div className="min-h-screen bg-background p-6 flex items-center justify-center">
//       <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
//         <div className="p-6 flex-1">
//           <h1 className="text-3xl font-bold mb-6 text-card-foreground">
//             About Me
//           </h1>
//           <Tabs defaultValue="education" className="w-full">
//             <TabsList className="flex flex-col sm:flex-row w-full mb-8">
//               <TabsTrigger value="education" className="flex-1">
//                 Education
//               </TabsTrigger>
//               <TabsTrigger value="interests" className="flex-1">
//                 Interests
//               </TabsTrigger>
//               <TabsTrigger value="hobbies" className="flex-1">
//                 Hobbies
//               </TabsTrigger>
//               <TabsTrigger value="about" className="flex-1">
//                 About
//               </TabsTrigger>
//             </TabsList>
//             <div className="mt-6">
//               <TabsContent value="education">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Education
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-lg font-medium text-card-foreground">
//                       Bachelor of Science in Computer Science
//                     </h3>
//                     <p className="text-muted-foreground">
//                       University of Sydney
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-card-foreground">
//                       test
//                     </h3>
//                     <p className="text-muted-foreground">test</p>
//                   </div>
//                 </div>
//               </TabsContent>
//               <TabsContent value="interests">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Interests
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {interests.map((interest, index) => (
//                     <Badge key={index} variant="secondary">
//                       {interest}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="hobbies">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Hobbies
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {hobbies.map((hobby, index) => (
//                     <Badge key={index} variant="outline">
//                       {hobby}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="about">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   About Me
//                 </h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   A passionate{" "}
//                   <strong className="text-primary">web developer</strong>{" "}
//                   specializing in creating{" "}
//                   <strong className="text-primary">
//                     intuitive and visually appealing interfaces
//                   </strong>
//                   . Proficient in{" "}
//                   <strong className="text-primary">
//                     full-stack development
//                   </strong>{" "}
//                   with expertise in{" "}
//                   <strong className="text-primary">
//                     Python, TypeScript, React
//                   </strong>
//                   , and modern web technologies.
//                 </p>
//               </TabsContent>
//             </div>
//           </Tabs>
//         </div>
//         <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
//           <ComputerModelContainer />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default About;

// TEST4

// import { useState, useEffect, useRef } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import ComputerModelContainer from "@/components/services/ComputerModelContainer";
//
// const interests = [
//   "Web Development",
//   "UI/UX Design",
//   "Machine Learning",
//   "Open Source",
// ];
//
// const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
// const About = () => {
//   const [containerWidth, setContainerWidth] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current) {
//         setContainerWidth(containerRef.current.offsetWidth);
//       }
//     };
//
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);
//
//   const isLargeScreen = containerWidth >= 1024; // 1024px is typically the 'lg' breakpoint
//
//   return (
//     <div
//       className="min-h-screen bg-background p-6 flex items-center justify-center"
//       ref={containerRef}
//     >
//       <div
//         className={`w-full max-w-4xl bg-card rounded-lg shadow-lg overflow-hidden flex ${isLargeScreen ? "flex-row" : "flex-col"}`}
//       >
//         <div className="p-6 flex-1">
//           <h1 className="text-3xl font-bold mb-6 text-card-foreground">
//             About Me
//           </h1>
//           <Tabs defaultValue="education" className="w-full">
//             <TabsList
//               className={`flex ${containerWidth >= 640 ? "flex-row" : "flex-col"} w-full mb-8`}
//             >
//               <TabsTrigger value="education" className="flex-1">
//                 Education
//               </TabsTrigger>
//               <TabsTrigger value="interests" className="flex-1">
//                 Interests
//               </TabsTrigger>
//               <TabsTrigger value="hobbies" className="flex-1">
//                 Hobbies
//               </TabsTrigger>
//               <TabsTrigger value="about" className="flex-1">
//                 About
//               </TabsTrigger>
//             </TabsList>
//             <div className="mt-6">
//               <TabsContent value="education">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Education
//                 </h2>
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-lg font-medium text-card-foreground">
//                       Bachelor of Science in Computer Science
//                     </h3>
//                     <p className="text-muted-foreground">
//                       University of Sydney
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium text-card-foreground">
//                       test
//                     </h3>
//                     <p className="text-muted-foreground">test</p>
//                   </div>
//                 </div>
//               </TabsContent>
//               <TabsContent value="interests">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Interests
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {interests.map((interest, index) => (
//                     <Badge key={index} variant="secondary">
//                       {interest}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="hobbies">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   Hobbies
//                 </h2>
//                 <div className="flex flex-wrap gap-2">
//                   {hobbies.map((hobby, index) => (
//                     <Badge key={index} variant="outline">
//                       {hobby}
//                     </Badge>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="about">
//                 <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                   About Me
//                 </h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   A passionate{" "}
//                   <strong className="text-primary">web developer</strong>{" "}
//                   specializing in creating{" "}
//                   <strong className="text-primary">
//                     intuitive and visually appealing interfaces
//                   </strong>
//                   . Proficient in{" "}
//                   <strong className="text-primary">
//                     full-stack development
//                   </strong>{" "}
//                   with expertise in{" "}
//                   <strong className="text-primary">
//                     Python, TypeScript, React
//                   </strong>
//                   , and modern web technologies.
//                 </p>
//               </TabsContent>
//             </div>
//           </Tabs>
//         </div>
//         <div
//           className={`${isLargeScreen ? "w-1/2" : "w-full"} h-[300px] ${isLargeScreen ? "h-auto" : ""}`}
//         >
//           <ComputerModelContainer />
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default About;

// TEST5 - WORKING (UP_2-DATE)
// import { useState, useEffect, useRef } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import ComputerModelContainer from "@/components/services/ComputerModelContainer";
//
// const interests = [
//   "Web Development",
//   "UI/UX Design",
//   "Machine Learning",
//   "Open Source",
// ];
//
// const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
// const About = () => {
//   const [isScreenVisible, setIsScreenVisible] = useState<boolean>(false);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current)
//         setContainerWidth(containerRef.current.offsetWidth);
//     };
//
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);
//
//   const isLargeScreen = containerWidth >= 1024;
//
//   return (
//     <div
//       className="min-h-screen bg-background p-6 flex items-center justify-center"
//       ref={containerRef}
//     >
//       {/* <div */}
//       {/*   className={`w-full max-w-4xl bg-card rounded-lg shadow-lg overflow-hidden flex ${isLargeScreen ? "flex-row" : "flex-col"}`} */}
//       {/* > */}
//       <Card
//         className={`w-full  p-10 flex max-w-4xl ${isLargeScreen ? "flex-row" : "flex-col"}`}
//       >
//         <div className="p-6 flex-1">
//           <h1 className="text-3xl font-bold mb-6 text-card-foreground">
//             About Me
//           </h1>
//           <Tabs defaultValue="education" className="w-full">
//             <TabsList className={`flex w-full mb-8`}>
//               {["education", "interests", "hobbies", "about"].map((value) => (
//                 <TabsTrigger key={value} value={value} className="flex-1">
//                   {value.charAt(0).toUpperCase() + value.slice(1)}
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//             <div className="mt-6">
//               {["education", "interests", "hobbies", "about"].map((tab) => (
//                 <TabsContent key={tab} value={tab}>
//                   <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </h2>
//                   {tab === "education" && (
//                     <div className="space-y-4">
//                       <div>
//                         <h3 className="text-lg font-medium text-card-foreground">
//                           Bachelor of Science in Computer Science
//                         </h3>
//                         <p className="text-muted-foreground">
//                           University of Sydney
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                   {tab === "interests" && (
//                     <div className="flex flex-wrap gap-2">
//                       {interests.map((interest, index) => (
//                         <Badge key={index} variant="secondary">
//                           {interest}
//                         </Badge>
//                       ))}
//                     </div>
//                   )}
//                   {tab === "hobbies" && (
//                     <div className="flex flex-wrap gap-2">
//                       {hobbies.map((hobby, index) => (
//                         <Badge key={index} variant="outline">
//                           {hobby}
//                         </Badge>
//                       ))}
//                     </div>
//                   )}
//                   {tab === "about" && (
//                     <p className="text-muted-foreground leading-relaxed">
//                       A passionate{" "}
//                       <strong className="text-primary">web developer</strong>{" "}
//                       specialising in creating{" "}
//                       <strong className="text-primary">
//                         intuitive and visually appealing interfaces
//                       </strong>
//                       . Proficient in{" "}
//                       <strong className="text-primary">
//                         full-stack development
//                       </strong>{" "}
//                       with expertise in{" "}
//                       <strong className="text-primary">
//                         Python, TypeScript, React
//                       </strong>
//                       , and modern web technologies.
//                     </p>
//                   )}
//                 </TabsContent>
//               ))}
//             </div>
//           </Tabs>
//         </div>
//         <div
//           className={`${isLargeScreen ? "w-1/2" : "w-full"} ${isLargeScreen ? "h-auto" : "max-h-[400px] overflow-hidden"}`}
//         >
//           <ComputerModelContainer
//             isScreenVisible={isScreenVisible}
//             setIsScreenVisible={setIsScreenVisible}
//           />
//         </div>
//       </Card>
//       {/* </div> */}
//       <button
//         onClick={() => {
//           setIsScreenVisible(!isScreenVisible);
//         }}
//       >
//         click me
//       </button>
//     </div>
//   );
// };
//
// export default About;

// TEST6 - CURRENT TEST WORKING
// import { useState, useEffect, useRef } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import ComputerModelContainer from "@/components/services/ComputerModelContainer";
//
// const interests = [
//   "Web Development",
//   "UI/UX Design",
//   "Machine Learning",
//   "Open Source",
// ];
//
// const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
// const About = () => {
//   const [isScreenVisible, setIsScreenVisible] = useState<boolean>(false);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current)
//         setContainerWidth(containerRef.current.offsetWidth);
//     };
//
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);
//
//   const isLargeScreen = containerWidth >= 1024;
//
//   return (
//     <div
//       className="min-h-screen bg-background p-6 flex items-center justify-center"
//       ref={containerRef}
//     >
//       {isScreenVisible ? (
//         <div className="absolute inset-0">
//           <ComputerModelContainer
//             isScreenVisible={isScreenVisible}
//             setIsScreenVisible={setIsScreenVisible}
//           />
//         </div>
//       ) : (
//         <Card
//           className={`w-full p-10 flex max-w-4xl ${isLargeScreen ? "flex-row" : "flex-col"}`}
//         >
//           <div className="p-6 flex-1">
//             <h1 className="text-3xl font-bold mb-6 text-card-foreground">
//               About Me
//             </h1>
//             <Tabs defaultValue="education" className="w-full">
//               <TabsList className={`flex w-full mb-8`}>
//                 {["education", "interests", "hobbies", "about"].map((value) => (
//                   <TabsTrigger key={value} value={value} className="flex-1">
//                     {value.charAt(0).toUpperCase() + value.slice(1)}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//               <div className="mt-6">
//                 {["education", "interests", "hobbies", "about"].map((tab) => (
//                   <TabsContent key={tab} value={tab}>
//                     <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
//                       {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                     </h2>
//                     {tab === "education" && (
//                       <div className="space-y-4">
//                         <div>
//                           <h3 className="text-lg font-medium text-card-foreground">
//                             Bachelor of Science in Computer Science
//                           </h3>
//                           <p className="text-muted-foreground">
//                             University of Sydney
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                     {tab === "interests" && (
//                       <div className="flex flex-wrap gap-2">
//                         {interests.map((interest, index) => (
//                           <Badge key={index} variant="secondary">
//                             {interest}
//                           </Badge>
//                         ))}
//                       </div>
//                     )}
//                     {tab === "hobbies" && (
//                       <div className="flex flex-wrap gap-2">
//                         {hobbies.map((hobby, index) => (
//                           <Badge key={index} variant="outline">
//                             {hobby}
//                           </Badge>
//                         ))}
//                       </div>
//                     )}
//                     {tab === "about" && (
//                       <p className="text-muted-foreground leading-relaxed">
//                         A passionate{" "}
//                         <strong className="text-primary">web developer</strong>{" "}
//                         specialising in creating{" "}
//                         <strong className="text-primary">
//                           intuitive and visually appealing interfaces
//                         </strong>
//                         . Proficient in{" "}
//                         <strong className="text-primary">
//                           full-stack development
//                         </strong>{" "}
//                         with expertise in{" "}
//                         <strong className="text-primary">
//                           Python, TypeScript, React
//                         </strong>
//                         , and modern web technologies.
//                       </p>
//                     )}
//                   </TabsContent>
//                 ))}
//               </div>
//             </Tabs>
//           </div>
//           <div
//             className={`${isLargeScreen ? "w-1/2" : "w-full"} ${isLargeScreen ? "h-auto" : "max-h-[400px] overflow-hidden"}`}
//           >
//             <ComputerModelContainer
//               isScreenVisible={isScreenVisible}
//               setIsScreenVisible={setIsScreenVisible}
//             />
//           </div>
//         </Card>
//       )}
//       <button
//         onClick={() => {
//           setIsScreenVisible(!isScreenVisible);
//         }}
//         className="absolute bottom-4 right-4 z-50"
//       >
//         click me
//       </button>
//     </div>
//   );
// };
//
// export default About;

// TEST7 -- WORKING
//
// import { useState, useEffect, useRef } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import ComputerModelContainer from "@/components/services/ComputerModelContainer";
// import Circle from "@/assets/Circle";
//
// const interests = [
//   "Web Development",
//   "UI/UX Design",
//   "Machine Learning",
//   "Open Source",
// ];
//
// const hobbies = ["Photography", "Hiking", "Reading", "Chess"];
//
// const About = () => {
//   const [isScreenVisible, setIsScreenVisible] = useState<boolean>(false);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     if (!containerRef.current) return;
//
//     const resizeObserver = new ResizeObserver((entries) => {
//       for (let entry of entries) {
//         setContainerWidth(entry.contentRect.width);
//       }
//     });
//
//     resizeObserver.observe(containerRef.current);
//
//     return () => {
//       if (containerRef.current) {
//         resizeObserver.unobserve(containerRef.current);
//       }
//     };
//   }, []);
//
//   const isLargeContainer = containerWidth >= 768;
//
//   return (
//     <div
//       className="h-full w-full bg-background p-4 flex items-center justify-center overflow-auto"
//       ref={containerRef}
//     >
//       {isScreenVisible ? (
//         <div className="absolute inset-0">
//           <ComputerModelContainer
//             isScreenVisible={isScreenVisible}
//             setIsScreenVisible={setIsScreenVisible}
//           />
//         </div>
//       ) : (
//         <Card
//           className={`max-w-4xl w-full p-6 flex ${isLargeContainer ? "flex-row" : "flex-col"} rounded-lg bg-card text-card-foreground shadow-sm`}
//         >
//           <div className={`${isLargeContainer ? "w-1/2 pr-4" : "w-full mb-4"}`}>
//             <h1 className="text-2xl font-bold mb-4 text-card-foreground">
//               About Me
//             </h1>
//             <Tabs defaultValue="education" className="w-full">
//               <TabsList className="flex w-full mb-4">
//                 {["education", "interests", "hobbies", "about"].map((value) => (
//                   <TabsTrigger key={value} value={value} className="flex-1">
//                     {value.charAt(0).toUpperCase() + value.slice(1)}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//               <div className="mt-4">
//                 {["education", "interests", "hobbies", "about"].map((tab) => (
//                   <TabsContent key={tab} value={tab}>
//                     <h2 className="text-xl font-semibold mb-2 text-card-foreground">
//                       {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                     </h2>
//                     {tab === "education" && (
//                       <div>
//                         <h3 className="text-lg font-medium text-card-foreground">
//                           Bachelor of Science in Computer Science
//                         </h3>
//                         <p className="text-sm text-muted-foreground">
//                           University of Sydney
//                         </p>
//                       </div>
//                     )}
//                     {tab === "interests" && (
//                       <div className="flex flex-wrap gap-2">
//                         {interests.map((interest, index) => (
//                           <Badge key={index} variant="secondary">
//                             {interest}
//                           </Badge>
//                         ))}
//                       </div>
//                     )}
//                     {tab === "hobbies" && (
//                       <div className="flex flex-wrap gap-2">
//                         {hobbies.map((hobby, index) => (
//                           <Badge key={index} variant="outline">
//                             {hobby}
//                           </Badge>
//                         ))}
//                       </div>
//                     )}
//                     {tab === "about" && (
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         A passionate{" "}
//                         <strong className="text-primary">web developer</strong>{" "}
//                         specialising in creating{" "}
//                         <strong className="text-primary">
//                           intuitive and visually appealing interfaces
//                         </strong>
//                         . Proficient in{" "}
//                         <strong className="text-primary">
//                           full-stack development
//                         </strong>{" "}
//                         with expertise in{" "}
//                         <strong className="text-primary">
//                           Python, TypeScript, React
//                         </strong>
//                         , and modern web technologies.
//                       </p>
//                     )}
//                   </TabsContent>
//                 ))}
//               </div>
//             </Tabs>
//           </div>
//           <div
//             className={`${isLargeContainer ? "w-1/2" : "w-full"} ${
//               isLargeContainer ? "h-auto" : "h-64"
//             } flex flex-col rounded-lg bg-card text-card-foreground overflow-hidden`}
//           >
//             <ComputerModelContainer
//               isScreenVisible={isScreenVisible}
//               setIsScreenVisible={setIsScreenVisible}
//             />
//           </div>
//         </Card>
//       )}
//       <div className="font-neueMontreal relative">
//         <div className="relative inline-block">
//           <span className="text-2xl uppercase">Click</span>
//           <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[60%] z-10">
//             <Circle />
//           </div>
//         </div>
//         {/* <p className="text-[#f3dbc7] text-[1.125rem] absolute left-1/2 -translate-x-1/2 top-full"> */}
//         {/*   Interactive */}
//         {/* </p> */}
//       </div>
//       <button
//         onClick={() => setIsScreenVisible(!isScreenVisible)}
//         className="absolute bottom-4 right-4 z-50 px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
//       >
//         Toggle Screen
//       </button>
//     </div>
//   );
// };
//
// export default About;

// TEST8 - current
// import { useState, useEffect, useRef } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";
// import ComputerModelContainer from "@/components/services/ComputerModelContainer";
// import Circle from "@/assets/Circle";
// import Arrow from "@/assets/Arrow";
// import TypingText from "@/animations/TypingText";
// import { useTheme } from "@/components/theme-provider";
// import { motion } from "framer-motion";
//
// const interests = [
//   "web development",
//   "ui/ux design",
//   "machine learning",
//   "open source",
// ];
//
// const slidervariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-220%",
//     transition: {
//       repeat: infinity,
//       repeattype: "mirror",
//       duration: 20,
//     },
//   },
// };
//
// const hobbies = ["photography", "hiking", "reading", "chess"];
//
// const About = () => {
//   const [isScreenVisible, setIsScreenVisible] = useState<boolean>(false);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     if (!containerRef.current) return;
//
//     const resizeObserver = new ResizeObserver((entries) => {
//       for (let entry of entries) {
//         setContainerWidth(entry.contentRect.width);
//       }
//     });
//
//     resizeObserver.observe(containerRef.current);
//
//     return () => {
//       if (containerRef.current) {
//         resizeObserver.unobserve(containerRef.current);
//       }
//     };
//   }, []);
//
//   const isLargeContainer = containerWidth >= 768;
//   const theme = useTheme();
//
//   return (
//     <div
//       className="h-full w-full bg-background p-4 flex items-center justify-center overflow-auto relative"
//       ref={containerRef}
//     >
//       {isScreenVisible ? (
//         <div className="absolute inset-0">
//           <ComputerModelContainer
//             isScreenVisible={isScreenVisible}
//             setIsScreenVisible={setIsScreenVisible}
//           />
//         </div>
//       ) : (
//         <Card
//           className={`max-w-4xl w-full p-6 flex ${isLargeContainer ? "flex-row" : "flex-col"} rounded-lg bg-card text-card-foreground shadow-sm relative`}
//         >
//           <div className={`${isLargeContainer ? "w-1/2 pr-4" : "w-full mb-4"}`}>
//             <h1 className="text-2xl font-bold mb-4 text-card-foreground">
//               About Me
//             </h1>
//             <Tabs defaultValue="education" className="w-full">
//               <TabsList className="flex w-full mb-4">
//                 {["education", "interests", "hobbies", "about"].map((value) => (
//                   <TabsTrigger key={value} value={value} className="flex-1">
//                     {value.charAt(0).toUpperCase() + value.slice(1)}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//               <div className="mt-4">
//                 {["education", "interests", "hobbies", "about"].map((tab) => (
//                   <TabsContent key={tab} value={tab}>
//                     <h2 className="text-xl font-semibold mb-2 text-card-foreground">
//                       {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                     </h2>
//                     {tab === "education" && (
//                       <div>
//                         <h3 className="text-lg font-medium text-card-foreground">
//                           Bachelor of Science in Computer Science
//                         </h3>
//                         <p className="text-sm text-muted-foreground">
//                           University of Sydney
//                         </p>
//                       </div>
//                     )}
//                     {tab === "interests" && (
//                       <div className="flex flex-wrap gap-2">
//                         {interests.map((interest, index) => (
//                           <Badge key={index} variant="secondary">
//                             {interest}
//                           </Badge>
//                         ))}
//                       </div>
//                     )}
//                     {tab === "hobbies" && (
//                       <div className="flex flex-wrap gap-2">
//                         {hobbies.map((hobby, index) => (
//                           <Badge key={index} variant="outline">
//                             {hobby}
//                           </Badge>
//                         ))}
//                       </div>
//                     )}
//                     {tab === "about" && (
//                       <p className="text-sm text-muted-foreground leading-relaxed">
//                         A passionate{" "}
//                         <strong className="text-primary">web developer</strong>{" "}
//                         specialising in creating{" "}
//                         <strong className="text-primary">
//                           intuitive and visually appealing interfaces
//                         </strong>
//                         . Proficient in{" "}
//                         <strong className="text-primary">
//                           full-stack development
//                         </strong>{" "}
//                         with expertise in{" "}
//                         <strong className="text-primary">
//                           Python, TypeScript, React
//                         </strong>
//                         , and modern web technologies.
//                       </p>
//                     )}
//                   </TabsContent>
//                 ))}
//               </div>
//             </Tabs>
//           </div>
//           <div
//             className={`${isLargeContainer ? "w-1/2" : "w-full"} ${
//               isLargeContainer ? "h-auto" : "h-64"
//             } flex flex-col rounded-lg bg-card text-card-foreground overflow-hidden`}
//           >
//             <ComputerModelContainer
//               isScreenVisible={isScreenVisible}
//               setIsScreenVisible={setIsScreenVisible}
//             />
//             <TypingText
//               text="CLICK INTERACTIVE SCREEN "
//               speed={0.1}
//               className="translate-x-24"
//             />
//           </div>
//         </Card>
//       )}
//       <button
//         onClick={() => setIsScreenVisible(!isScreenVisible)}
//         className="absolute bottom-4 right-4 z-50 px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
//       >
//         Toggle Screen
//       </button>
//     </div>
//   );
// };
//
// export default About;

// TEST9 ---- testing new
// import { useState, useEffect } from "react";
//
// const sliderItems = [
//   {
//     webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/MaximeVanRoy-Artefact.webp",
//     jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/MaximeVanRoy-Artefact.jpg",
//     alt: "Maxime Van Roy Artefact",
//   },
//   {
//     webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/ArnaudGuillaume.webp",
//     jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/ArnaudGuillaume.jpg",
//     alt: "Arnaud Guillaume",
//   },
//   {
//     webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/RalentirDiegoDOnofrio.webp",
//     jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/RalentirDiegoDOnofrio.jpg",
//     alt: "Ralentir Diego D'Onofrio",
//   },
//   {
//     webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/MarcSolene.webp",
//     jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/MarcSolene.jpg",
//     alt: "Marc Solene",
//   },
//   {
//     webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/Polder.webp",
//     jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/Polder.jpg",
//     alt: "Polder",
//   },
//   {
//     webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/FermeDeKerbiguet.webp",
//     jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/FermeDeKerbiguet.jpg",
//     alt: "Ferme De Kerbiguet",
//   },
//   {
//     webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/Animal.e.webp",
//     jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/Animal.e.jpg",
//     alt: "Animal.e",
//   },
// ];
//
// const About = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const rows = 5; // Number of rows to split the image into
//
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);
//
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <div className="absolute inset-0 flex flex-col h-full">
//         {[...Array(rows)].map((_, rowIndex) => (
//           <div
//             key={rowIndex}
//             className="relative flex-1 border-b border-[#eee9cc] "
//           >
//             {sliderItems.map((item, imageIndex) => (
//               <div
//                 key={imageIndex}
//                 className={`absolute inset-0 transition-opacity duration-1000 ${
//                   imageIndex === activeIndex ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <picture className="w-full h-full block ">
//                   <source srcSet={item.webp} type="image/webp" />
//                   <source srcSet={item.jpg} type="image/jpeg" />
//                   <img
//                     src={item.jpg}
//                     alt={item.alt}
//                     className="absolute w-full h-[500%] object-cover"
//                     style={{
//                       top: `${rowIndex * -100}%`,
//                       clipPath: `inset(${rowIndex * 20}% 0 ${80 - rowIndex * 20}% 0)`,
//                     }}
//                   />
//                 </picture>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="absolute inset-0 bg-black/30 rounded-2xl" />
//     </div>
//   );
// };
//
// export default About;

import React, { useState, useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import AboutHeader from "./AboutHeader";
import VerticalSwiper from "./VerticalSwiper";
import Swiper from "./Swiper";

const sliderItems = [
  // {
  //   webp: "/stonehenge.webp",
  //   alt: "stonehenge",
  // },
  {
    webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/MaximeVanRoy-Artefact.webp",
    jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/MaximeVanRoy-Artefact.jpg",
    alt: "Maxime Van Roy Artefact",
  },
  {
    webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/ArnaudGuillaume.webp",
    jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/ArnaudGuillaume.jpg",
    alt: "Arnaud Guillaume",
  },
  {
    webp: "https://maelanlemeur.com/wp-content/uploads/2023/01/RalentirDiegoDOnofrio.webp",
    jpg: "https://maelanlemeur.com/wp-content/uploads/2023/01/RalentirDiegoDOnofrio.jpg",
    alt: "Ralentir Diego D'Onofrio",
  },
];

const textItems = [
  { text: "About", xPercent: -100 },
  { text: "Education", xPercent: 100 },
  { text: "Interests", xPercent: -200 },
  { text: "Hobbies", xPercent: 200 },
];

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgControls = useAnimation();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    container: containerRef,
    offset: ["start start", "end start"],
  });

  // Create a smooth version of the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 60, // High enough to prevent oscillation
    stiffness: 800, // High enough for responsive movement
    mass: 1, // Balanced mass for natural momentum
    restDelta: 0.001, // Small value for smooth finish
  });

  useEffect(() => {
    let isSubscribed = true;

    const sequence = async () => {
      while (isSubscribed) {
        await bgControls.start({
          height: "100%",
          bottom: "0",
          top: "auto",
          transition: {
            duration: 0.7,
            ease: "easeInOut",
          },
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        await bgControls.start({
          height: "0%",
          bottom: "0",
          top: "auto",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        });

        if (isSubscribed) {
          setCurrentImageIndex((prev) =>
            prev === sliderItems.length - 1 ? 0 : prev + 1,
          );
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    sequence();

    return () => {
      isSubscribed = false;
    };
  }, [bgControls]);

  const overlayVariants = {
    initial: {
      height: "0%",
      bottom: "0",
      top: "auto",
    },
  };

  // Create transform values outside the map function
  const transformValues = textItems.map((item) =>
    useTransform(smoothProgress, [0, 1], ["0%", `${item.xPercent}%`]),
  );

  return (
    <div className="w-full h-screen bg-[#1e1915]">
      <ScrollArea className="h-full w-full" viewportRef={containerRef}>
        <section ref={scrollRef} className="relative h-screen sc-main">
          <div className="relative w-full h-full overflow-hidden">
            {sliderItems.map((item, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <picture>
                  <source srcSet={item.webp} type="image/webp" />
                  <img
                    src={item.jpg}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 z-10 flex flex-col divide-y divide-[#eee9cc]">
            {textItems.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center h-[25vh] ${
                  index % 2 === 0 ? "text-left" : "justify-end"
                }`}
              >
                <motion.p
                  className="text-[25vh] text-[#eee9cc] m-5 z-20 font-neueMontreal"
                  style={{
                    lineHeight: "1",
                    x: transformValues[index],
                  }}
                  data-x={item.xPercent}
                >
                  {item.text}
                </motion.p>
                <motion.div
                  initial="initial"
                  animate={bgControls}
                  variants={overlayVariants}
                  className="absolute w-full bg-[#1e1915]"
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-t border-t-[#EEE9CC] font-neueMontreal">
          {/* About Section */}
          <div className="relative border border-b-[#EEE9CC]">
            <AboutHeader />
            {/* overlay */}
            <div className="absolute top-0 bottom-0 left-[60%] transform -translate-x-1/2 bg-[#EEE9CC] w-0.5 z-0" />

            <p className=" pb-4 pl-4 text-muted-foreground leading-relaxed font-neueMontreal">
              A passionate{" "}
              <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
                web developer
              </strong>{" "}
              specialising in creating
              <br />
              <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
                intuitive and visually appealing interfaces
              </strong>
              . Proficient in
              <br />
              <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
                full-stack development
              </strong>{" "}
              with expertise in
              <br />
              <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
                Python, TypeScript, React
              </strong>
              , and modern web technologies.
            </p>
          </div>

          {/* Education Section */}
          <section className="mt-8 pl-4 border-b border-b-[#EEE9CC] pb-12 flex flex-row">
            <div className="flex-1">
              <h2 className="text-8xl text-[#EEE9CC] mb-4">Education</h2>
              <p className="text-[#EEE9CC]">
                <span className="text-5xl">Bachelor</span> of
                <span className=""> Science</span> in{" "}
                <span className="text-3xl">Computer Science</span>
              </p>
            </div>
            <VerticalSwiper />
          </section>

          {/* Hobbies Section */}
          <section className="mt-8">
            <Swiper scrollRef={containerRef} />
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Hobbies</h2>
            <p className="text-gray-300">
              Include details about activities you enjoy in your free time or
              passionate interests.
            </p>
          </section>

          {/* Interests Section */}
          <section className="mt-8">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Interests</h2>
            <p className="text-gray-300">
              Discuss subjects, topics, or areas that capture your curiosity and
              enthusiasm.
            </p>
          </section>
        </section>
      </ScrollArea>
    </div>
  );
};

export default About;
