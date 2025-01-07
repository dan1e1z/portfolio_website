// import React, { useState, useEffect, useRef } from "react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   motion,
//   useAnimation,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import AboutHeader from "./AboutHeader";
// import VerticalSwiper from "./VerticalSwiper";
// import Swiper from "./Swiper";
// import Interests from "./Interests";
// import AboutSectionTitle from "@/components/aboutSection/AboutSectionTitle";
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
// ];
//
// const textItems = [
//   { text: "About", xPercent: -100 },
//   { text: "Education", xPercent: 100 },
//   { text: "Interests", xPercent: -200 },
//   { text: "Hobbies", xPercent: 200 },
// ];
//
// const About: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const bgControls = useAnimation();
//   const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
//
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     container: containerRef,
//     offset: ["start start", "end start"],
//   });
//
//   // Create a smooth version of the scroll progress
//   const smoothProgress = useSpring(scrollYProgress, {
//     damping: 60, // High enough to prevent oscillation
//     stiffness: 800, // High enough for responsive movement
//     mass: 1, // Balanced mass for natural momentum
//     restDelta: 0.001, // Small value for smooth finish
//   });
//
//   useEffect(() => {
//     let isSubscribed = true;
//
//     const sequence = async () => {
//       while (isSubscribed) {
//         await bgControls.start({
//           height: "100%",
//           bottom: "0",
//           top: "auto",
//           transition: {
//             duration: 0.7,
//             ease: "easeInOut",
//           },
//         });
//
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//
//         await bgControls.start({
//           height: "0%",
//           bottom: "0",
//           top: "auto",
//           transition: {
//             duration: 0.3,
//             ease: "easeInOut",
//           },
//         });
//
//         if (isSubscribed) {
//           setCurrentImageIndex((prev) =>
//             prev === sliderItems.length - 1 ? 0 : prev + 1,
//           );
//         }
//
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       }
//     };
//
//     sequence();
//
//     return () => {
//       isSubscribed = false;
//     };
//   }, [bgControls]);
//
//   const overlayVariants = {
//     initial: {
//       height: "0%",
//       bottom: "0",
//       top: "auto",
//     },
//   };
//
//   // Create transform values outside the map function
//   const transformValues = textItems.map((item) =>
//     useTransform(smoothProgress, [0, 1], ["0%", `${item.xPercent}%`]),
//   );
//
//   return (
//     <div className="w-full h-screen bg-[#1e1915]">
//       <ScrollArea className="h-full w-full" viewportRef={containerRef}>
//         <section
//           ref={scrollRef}
//           className="relative h-screen w-full relative sc-main"
//         >
//           <div className="relative w-full h-full overflow-hidden">
//             {sliderItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="absolute inset-0 w-full h-full"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: currentImageIndex === index ? 1 : 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <picture>
//                   <source srcSet={item.webp} type="image/webp" />
//                   <img
//                     src={item.jpg}
//                     alt={item.alt}
//                     className="w-full h-full object-cover"
//                   />
//                 </picture>
//               </motion.div>
//             ))}
//           </div>
//
//           <div className="absolute inset-0 z-10 flex flex-col divide-y divide-[#eee9cc]">
//             {textItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className={`relative flex items-center h-[25vh] ${
//                   index % 2 === 0 ? "text-left" : "justify-end"
//                 }`}
//               >
//                 <motion.p
//                   className="text-[25vh] text-[#eee9cc] m-5 z-20 font-neueMontreal"
//                   style={{
//                     lineHeight: "1",
//                     x: transformValues[index],
//                   }}
//                   data-x={item.xPercent}
//                 >
//                   {item.text}
//                 </motion.p>
//                 <motion.div
//                   initial="initial"
//                   animate={bgControls}
//                   variants={overlayVariants}
//                   className="absolute w-full bg-[#1e1915]"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>
//
//         <section className="border-t border-t-[#EEE9CC]  font-neueMontreal text-[#EEE9CC] whitespace-nowrap">
//           <AboutSectionTitle containerRef={containerRef} />
//
//           {/* About Section */}
//           {/* <div className="p-4 relative border-b border-b-[#EEE9CC]"> */}
//           <div className="relative min-h-[100dvh]  border-b border-b-[#EEE9CC] bg-[#1d1915] content-center p-4">
//             <AboutHeader />
//
//             {/* vertical line overlay */}
//             {/* <div className="absolute top-0 bottom-0 left-[60%] transform -translate-x-1/2 bg-[#EEE9CC] w-0.5 z-0" /> */}
//
//             <p className="text-muted-foreground leading-relaxed font-neueMontreal">
//               A passionate{" "}
//               <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
//                 web developer
//               </strong>{" "}
//               specialising in creating
//               <br />
//               <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
//                 intuitive and visually appealing interfaces
//               </strong>
//               . Proficient in
//               <br />
//               <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
//                 full-stack development
//               </strong>{" "}
//               with expertise in
//               <br />
//               <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
//                 Python, TypeScript, React
//               </strong>
//               , and modern web technologies.
//             </p>
//           </div>
//
//           {/* Education Section */}
//           <section className="mt-8 pl-4 border-b border-b-[#EEE9CC] pb-12 flex flex-row">
//             <div className="flex-1">
//               <h2 className="text-8xl text-[#EEE9CC] mb-4">Education</h2>
//               <p className="text-[#EEE9CC]">
//                 <span className="text-5xl">Bachelor</span> of
//                 <span className=""> Science</span> in{" "}
//                 <span className="text-3xl">Computer Science</span>
//               </p>
//             </div>
//             <VerticalSwiper />
//           </section>
//
//           {/* Interests Section */}
//           <section className="p-4 mt-8">
//             <h2 className="text-8xl text-[#EEE9CC] mb-4">Interests</h2>
//             <Interests containerRef={containerRef} />
//           </section>
//
//           {/* Hobbies Section */}
//           <section className="mt-8 border-t border-t-[#eee9cc] h-screen">
//             <Swiper containerRef={containerRef} />
//           </section>
//         </section>
//       </ScrollArea>
//     </div>
//   );
// };
//
// export default About;

// TEST1

// import React, { useState, useEffect, useRef } from "react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import {
//   motion,
//   useAnimation,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import AboutHeader from "./AboutHeader";
// import VerticalSwiper from "./VerticalSwiper";
// import Swiper from "./Swiper";
// import Interests from "./Interests";
// import AboutSectionTitle from "@/components/aboutSection/AboutSectionTitle";
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
// ];
//
// const textItems = [
//   { text: "About", xPercent: 0 },
//   { text: "Education", xPercent: 0 },
//   { text: "Interests", xPercent: 0 },
//   { text: "Hobbies", xPercent: 0 },
// ];
//
// const About: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const bgControls = useAnimation();
//   const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
//
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     container: containerRef,
//     offset: ["start start", "end start"],
//   });
//
//   // Create a smooth version of the scroll progress
//   const smoothProgress = useSpring(scrollYProgress, {
//     damping: 60, // High enough to prevent oscillation
//     stiffness: 800, // High enough for responsive movement
//     mass: 1, // Balanced mass for natural momentum
//     restDelta: 0.001, // Small value for smooth finish
//   });
//
//   useEffect(() => {
//     let isSubscribed = true;
//
//     const sequence = async () => {
//       while (isSubscribed) {
//         await bgControls.start({
//           height: "100%",
//           bottom: "0",
//           top: "auto",
//           transition: {
//             duration: 0.7,
//             ease: "easeInOut",
//           },
//         });
//
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//
//         await bgControls.start({
//           height: "0%",
//           bottom: "0",
//           top: "auto",
//           transition: {
//             duration: 0.3,
//             ease: "easeInOut",
//           },
//         });
//
//         if (isSubscribed) {
//           setCurrentImageIndex((prev) =>
//             prev === sliderItems.length - 1 ? 0 : prev + 1,
//           );
//         }
//
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       }
//     };
//
//     sequence();
//
//     return () => {
//       isSubscribed = false;
//     };
//   }, [bgControls]);
//
//   const overlayVariants = {
//     initial: {
//       height: "0%",
//       bottom: "0",
//       top: "auto",
//     },
//   };
//
//   // Create transform values outside the map function
//   const transformValues = textItems.map(
//     (item) => useTransform(smoothProgress, [0, 1], ["0%", "20%"]),
//     // useTransform(smoothProgress, [0, 1], ["0%", `${item.xPercent}%`]),
//   );
//
//   return (
//     <div className="w-full h-full bg-[#1e1915]">
//       <ScrollArea className="h-full w-full" viewportRef={containerRef}>
//         <section ref={scrollRef} className="relative h-screen">
//           <div className="relative w-full h-full overflow-hidden">
//             {sliderItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="absolute inset-0 w-full h-full"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: currentImageIndex === index ? 1 : 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <picture>
//                   <source srcSet={item.webp} type="image/webp" />
//                   <img
//                     src={item.jpg}
//                     alt={item.alt}
//                     className="w-full h-full object-cover"
//                   />
//                 </picture>
//               </motion.div>
//             ))}
//           </div>
//
//           <div className="absolute inset-0 z-10 flex flex-col divide-y divide-[#eee9cc]">
//             {textItems.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className={`relative flex items-center h-[25vh] ${
//                   index % 2 === 0 ? "justify-start" : "justify-end"
//                 }`}
//               >
//                 <motion.p
//                   className="text-[25vh] text-[#eee9cc] m-5 z-20 font-neueMontreal"
//                   // style={
//                   //   {
//                   //     x: transformValues[index],
//                   //   }
//                   // }
//                   // data-x={item.xPercent}
//                 >
//                   {item.text}
//                 </motion.p>
//                 <motion.div
//                   initial="initial"
//                   animate={bgControls}
//                   variants={overlayVariants}
//                   className="absolute w-full bg-[#1e1915]"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>
//
//         <section className="border-t border-t-[#EEE9CC]  font-neueMontreal text-[#EEE9CC] whitespace-nowrap">
//           {/* <AboutSectionTitle containerRef={containerRef} /> */}
//
//           {/* About Section */}
//           {/* <div className="p-4 relative border-b border-b-[#EEE9CC]"> */}
//           <div className="relative min-h-[100dvh]  border-b border-b-[#EEE9CC] bg-[#1d1915] content-center p-4">
//             <AboutHeader />
//
//             {/* vertical line overlay */}
//             {/* <div className="absolute top-0 bottom-0 left-[60%] transform -translate-x-1/2 bg-[#EEE9CC] w-0.5 z-0" /> */}
//
//             <p className="text-muted-foreground leading-relaxed font-neueMontreal">
//               A passionate{" "}
//               <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
//                 web developer
//               </strong>{" "}
//               specialising in creating
//               <br />
//               <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
//                 intuitive and visually appealing interfaces
//               </strong>
//               . Proficient in
//               <br />
//               <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
//                 full-stack development
//               </strong>{" "}
//               with expertise in
//               <br />
//               <strong className="font-neueMontreal text-[#EEE9CC] text-xl">
//                 Python, TypeScript, React
//               </strong>
//               , and modern web technologies.
//             </p>
//           </div>
//
//           {/* Education Section */}
//           <section className="mt-8 pl-4 border-b border-b-[#EEE9CC] pb-12 flex flex-row">
//             <div className="flex-1">
//               <h2 className="text-8xl text-[#EEE9CC] mb-4">Education</h2>
//               <p className="text-[#EEE9CC]">
//                 <span className="text-5xl">Bachelor</span> of
//                 <span className=""> Science</span> in{" "}
//                 <span className="text-3xl">Computer Science</span>
//               </p>
//             </div>
//             <VerticalSwiper />
//           </section>
//
//           {/* Interests Section */}
//           <section className="p-4 mt-8">
//             <h2 className="text-8xl text-[#EEE9CC] mb-4">Interests</h2>
//             <Interests containerRef={containerRef} />
//           </section>
//
//           {/* Hobbies Section */}
//           <section className="mt-8 border-t border-t-[#eee9cc] h-screen">
//             <Swiper containerRef={containerRef} />
//           </section>
//         </section>
//       </ScrollArea>
//     </div>
//   );
// };
//
// export default About;

// TEST2 - WORKING
// import React, { useEffect, useRef, useState } from "react";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import {
//   motion,
//   useAnimation,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import Lenis from "lenis";
//
// // Types
// type SliderItem = {
//   webp: string;
//   jpg: string;
//   alt: string;
// };
//
// type TextItem = {
//   text: string;
//   xPercent: number;
// };
//
// // Constants
// const sliderItems: SliderItem[] = [
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
// ];
//
// const textItems: TextItem[] = [
//   { text: "About", xPercent: -100 },
//   { text: "Education", xPercent: 100 },
//   { text: "Interests", xPercent: -200 },
//   { text: "Hobbies", xPercent: 200 },
// ];
//
// // Components
// const ImageSlider: React.FC<{ currentImageIndex: number }> = ({
//   currentImageIndex,
// }) => (
//   <>
//     {sliderItems.map((item, index) => (
//       <motion.div
//         key={index}
//         className="absolute inset-0 w-full h-full"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <picture>
//           <source srcSet={item.webp} type="image/webp" />
//           <img
//             src={item.jpg}
//             alt={item.alt}
//             className="w-full h-full object-cover"
//           />
//         </picture>
//       </motion.div>
//     ))}
//   </>
// );
//
// const TextOverlay: React.FC<{ smoothProgress: any }> = ({ smoothProgress }) => (
//   <>
//     {textItems.map((item, index) => {
//       const x = useTransform(
//         smoothProgress,
//         [0, 1],
//         ["0%", `${item.xPercent}%`],
//       );
//       return (
//         <motion.div
//           key={index}
//           className={`relative flex items-center h-[25vh] ${
//             index % 2 === 0 ? "text-left" : "justify-end"
//           }`}
//         >
//           <motion.p
//             className="text-[25vh] text-[#eee9cc] m-5 z-20 font-neueMontreal"
//             style={{ lineHeight: "1", x }}
//           >
//             {item.text}
//           </motion.p>
//         </motion.div>
//       );
//     })}
//   </>
// );
//
// const AboutContent: React.FC = () => (
//   <>
//     <h2 className="text-8xl text-[#EEE9CC] mb-4">About Me</h2>
//     <p className="text-muted-foreground leading-relaxed font-neueMontreal">
//       A passionate{" "}
//       <strong className="text-[#EEE9CC] text-xl">web developer</strong>{" "}
//       specialising in creating
//       <strong className="text-[#EEE9CC] text-xl">
//         {" "}
//         intuitive and visually appealing interfaces
//       </strong>
//       . Proficient in
//       <strong className="text-[#EEE9CC] text-xl">
//         {" "}
//         full-stack development
//       </strong>{" "}
//       with expertise in
//       <strong className="text-[#EEE9CC] text-xl">
//         {" "}
//         Python, TypeScript, React
//       </strong>
//       , and modern web technologies.
//     </p>
//   </>
// );
//
// const EducationContent: React.FC = () => (
//   <>
//     <h2 className="text-8xl text-[#EEE9CC] mb-4">Education</h2>
//     <p className="text-[#EEE9CC]">
//       <span className="text-5xl">Bachelor</span> of{" "}
//       <span className="">Science</span> in{" "}
//       <span className="text-3xl">Computer Science</span>
//     </p>
//   </>
// );
//
// const InterestsContent: React.FC = () => (
//   <>
//     <h2 className="text-8xl text-[#EEE9CC] mb-4">Interests</h2>
//     <p className="text-[#EEE9CC]">
//       Web Development, UI/UX Design, Machine Learning
//     </p>
//   </>
// );
//
// const HobbiesContent: React.FC = () => (
//   <>
//     <h2 className="text-8xl text-[#EEE9CC] mb-4">Hobbies</h2>
//     <p className="text-[#EEE9CC]">Photography, Hiking, Reading</p>
//   </>
// );
//
// // Main Component
// const About: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const bgControls = useAnimation();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end start"],
//   });
//
//   const smoothProgress = useSpring(scrollYProgress, {
//     damping: 60,
//     stiffness: 800,
//     mass: 1,
//     restDelta: 0.001,
//   });
//
//   // useEffect(() => {
//   //   const lenis = new Lenis({});
//   //
//   //   function raf(time: number) {
//   //     lenis.raf(time);
//   //     requestAnimationFrame(raf);
//   //   }
//   //   requestAnimationFrame(raf);
//   //
//   //   return () => {
//   //     lenis.destroy();
//   //   };
//   // }, []);
//
//   useEffect(() => {
//     let isSubscribed = true;
//
//     const sequence = async () => {
//       while (isSubscribed) {
//         await bgControls.start({
//           height: "100%",
//           bottom: "0",
//           top: "auto",
//           transition: { duration: 0.7, ease: "easeInOut" },
//         });
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         await bgControls.start({
//           height: "0%",
//           bottom: "0",
//           top: "auto",
//           transition: { duration: 0.3, ease: "easeInOut" },
//         });
//         if (isSubscribed) {
//           setCurrentImageIndex((prev) =>
//             prev === sliderItems.length - 1 ? 0 : prev + 1,
//           );
//         }
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       }
//     };
//
//     sequence();
//     return () => {
//       isSubscribed = false;
//     };
//   }, [bgControls]);
//
//   return (
//     <ScrollArea
//       className="h-full w-full overflow-hidden"
//       viewportRef={containerRef}
//     >
//       <div ref={scrollRef} className="relative">
//         <section className="h-screen">
//           <div className="relative w-full h-screen overflow-hidden">
//             <ImageSlider currentImageIndex={currentImageIndex} />
//           </div>
//           <div className="absolute inset-0 z-10 flex flex-col divide-y divide-[#eee9cc]">
//             <TextOverlay smoothProgress={smoothProgress} />
//           </div>
//         </section>
//
//         <section className="border-t border-t-[#EEE9CC] font-neueMontreal text-[#EEE9CC]">
//           <div className="min-h-screen border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
//             <AboutContent />
//           </div>
//           <div className="min-h-screen border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
//             <EducationContent />
//           </div>
//           <div className="min-h-screen border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
//             <InterestsContent />
//           </div>
//           <div className="min-h-screen bg-[#1d1915] p-4">
//             <HobbiesContent />
//           </div>
//         </section>
//       </div>
//     </ScrollArea>
//   );
// };
//
// export default About;

// TEST3
// import React, { useEffect, useRef, useState } from "react";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import {
//   motion,
//   useAnimation,
//   useScroll,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import Lenis from "lenis";
// import AboutSectionTitle from "@/components/aboutSection/AboutSectionTitle";
// import AboutHeader from "./AboutHeader";
// // Types
// type SliderItem = {
//   webp: string;
//   jpg: string;
//   alt: string;
// };
//
// type TextItem = {
//   text: string;
//   xPercent: number;
// };
//
// // Constants
// const sliderItems: SliderItem[] = [
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
// ];
//
// const textItems: TextItem[] = [
//   { text: "About", xPercent: -50 },
//   { text: "Education", xPercent: 50 },
//   { text: "Interests", xPercent: -20 },
//   { text: "Hobbies", xPercent: 20 },
// ];
//
// // Components
// const ImageSlider: React.FC<{ currentImageIndex: number }> = ({
//   currentImageIndex,
// }) => (
//   <>
//     {sliderItems.map((item, index) => (
//       <motion.div
//         key={index}
//         className="absolute inset-0 w-full h-full"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//       >
//         <picture
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: currentImageIndex === index ? 1 : 0,
//           }}
//           transition={{
//             duration: 0.5,
//             ease: "easeInOut",
//           }}
//         >
//           <source srcSet={item.webp} type="image/webp" />
//           <img
//             src={item.jpg}
//             alt={item.alt}
//             className="w-full h-full object-cover"
//           />
//         </picture>
//       </motion.div>
//     ))}
//   </>
// );
//
// const TextOverlay: React.FC<{
//   scrollYProgress: MotionValue<number>;
// }> = ({ scrollYProgress }) => {
//   const bgControls = useAnimation();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//
//   useEffect(() => {
//     let isSubscribed = true;
//
//     const sequence = async () => {
//       while (isSubscribed) {
//         await bgControls.start({
//           height: "100%",
//           bottom: "0",
//           top: "auto",
//           transition: { duration: 0.7, ease: "easeInOut" },
//         });
//         await new Promise((resolve) => setTimeout(resolve, 2000));
//         await bgControls.start({
//           height: "0%",
//           bottom: "0",
//           top: "auto",
//           transition: { duration: 0.3, ease: "easeInOut" },
//         });
//         if (isSubscribed) {
//           setCurrentImageIndex((prev) =>
//             prev === sliderItems.length - 1 ? 0 : prev + 1,
//           );
//         }
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//       }
//     };
//
//     sequence();
//
//     return () => {
//       isSubscribed = false;
//     };
//   }, [bgControls]);
//
//   const overlayVariants = {
//     initial: {
//       height: "0%",
//       bottom: "0",
//       top: "auto",
//     },
//   };
//
//   return (
//     <>
//       {console.log(scrollYProgress)}
//       {textItems.map((item, index) => {
//         const xPercent = useTransform(
//           scrollYProgress,
//           [0, 1],
//           ["0%", `${item.xPercent}%`],
//         );
//         return (
//           <motion.div
//             key={index}
//             className={`relative flex items-center h-[25vh] ${
//               index % 2 === 0 ? "text-left" : "justify-end"
//             }`}
//           >
//             <motion.p
//               className="text-[25vh] text-[#eee9cc] m-5 z-20 font-neueMontreal"
//               style={{
//                 lineHeight: "1",
//                 x: xPercent,
//               }}
//             >
//               {item.text}
//             </motion.p>
//
//             <motion.div
//               initial="initial"
//               animate={bgControls}
//               variants={overlayVariants}
//               className="absolute w-full bg-[#1e1915]"
//             />
//           </motion.div>
//         );
//       })}
//     </>
//   );
// };
//
// const AboutContent: React.FC = () => (
//   <div className="">
//     <AboutHeader />
//     <p className="text-muted-foreground leading-relaxed font-neueMontreal">
//       A passionate{" "}
//       <strong className="text-[#EEE9CC] text-xl">web developer</strong>{" "}
//       specialising in creating
//       <strong className="text-[#EEE9CC] text-xl">
//         {" "}
//         intuitive and visually appealing interfaces
//       </strong>
//       . Proficient in
//       <strong className="text-[#EEE9CC] text-xl">
//         {" "}
//         full-stack development
//       </strong>{" "}
//       with expertise in
//       <strong className="text-[#EEE9CC] text-xl">
//         {" "}
//         Python, TypeScript, React
//       </strong>
//       , and modern web technologies.
//     </p>
//   </div>
// );
//
// const EducationContent: React.FC = () => (
//   <>
//     <h2 className="text-8xl text-[#EEE9CC] mb-4">Education</h2>
//     <p className="text-[#EEE9CC]">
//       <span className="text-5xl">Bachelor</span> of{" "}
//       <span className="">Science</span> in{" "}
//       <span className="text-3xl">Computer Science</span>
//     </p>
//   </>
// );
//
// const InterestsContent: React.FC = () => (
//   <>
//     <h2 className="text-8xl text-[#EEE9CC] mb-4">Interests</h2>
//     <p className="text-[#EEE9CC]">
//       Web Development, UI/UX Design, Machine Learning
//     </p>
//   </>
// );
//
// const HobbiesContent: React.FC = () => (
//   <>
//     <h2 className="text-8xl text-[#EEE9CC] mb-4">Hobbies</h2>
//     <p className="text-[#EEE9CC]">Photography, Hiking, Reading</p>
//   </>
// );
//
// // Main Component
// const About: React.FC = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//
//   const { scrollYProgress } = useScroll({
//     container: containerRef,
//     target: scrollRef,
//     offset: ["start start", "end start"],
//   });
//
//   useEffect(() => {
//     let lenis: Lenis | null = null;
//
//     if (containerRef.current) {
//       lenis = new Lenis({
//         wrapper: containerRef.current,
//         lerp: 0.15,
//       });
//
//       function raf(time: number) {
//         lenis.raf(time);
//         requestAnimationFrame(raf);
//       }
//       requestAnimationFrame(raf);
//     }
//
//     return () => {
//       if (lenis) {
//         lenis.destroy();
//       }
//     };
//   }, []);
//
//   return (
//     <ScrollArea
//       className="h-full w-full bg-[#1d1915]"
//       viewportRef={containerRef}
//     >
//       <div ref={scrollRef} className="h-screen w-screen relative">
//         <div className="relative w-full h-full overflow-hidden">
//           <ImageSlider currentImageIndex={currentImageIndex} />
//         </div>
//         <div className="absolute inset-0 z-10 flex flex-col divide-y divide-[#eee9cc]">
//           <TextOverlay scrollYProgress={scrollYProgress} />
//         </div>
//
//         <AboutSectionTitle containerRef={containerRef} />
//         <div className="font-neueMontreal text-[#EEE9CC] relative">
//           <div className="border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
//             <AboutContent />
//           </div>
//           <div className="border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
//             <EducationContent />
//           </div>
//           <div className="border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
//             <InterestsContent />
//           </div>
//           <div className="min-h-screen bg-[#1d1915] p-4">
//             <HobbiesContent />
//           </div>
//         </div>
//       </div>
//       <ScrollBar orientation="vertical" />
//     </ScrollArea>
//   );
// };
//
// export default About;

// TEST4
import React, { useEffect, useRef, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  motion,
  useAnimation,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Lenis from "lenis";
import AboutSectionTitle from "@/components/aboutSection/AboutSectionTitle";
import AboutHeader from "./AboutHeader";

// Types
type SliderItem = {
  webp: string;
  jpg: string;
  alt: string;
};

type TextItem = {
  text: string;
  xPercent: number;
};

// Constants
const sliderItems: SliderItem[] = [
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

const textItems: TextItem[] = [
  { text: "About", xPercent: -50 },
  { text: "Education", xPercent: 50 },
  { text: "Interests", xPercent: -20 },
  { text: "Hobbies", xPercent: 20 },
];

// Components
const ImageSlider: React.FC<{ currentImageIndex: number }> = ({
  currentImageIndex,
}) => (
  <>
    {sliderItems.map((item, index) => (
      <motion.div
        key={index}
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
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
  </>
);

const TextOverlay: React.FC<{
  scrollYProgress: MotionValue<number>;
  currentImageIndex: number;
}> = ({ scrollYProgress, currentImageIndex }) => {
  const bgControls = useAnimation();

  useEffect(() => {
    let isSubscribed = true;

    const sequence = async () => {
      while (isSubscribed) {
        await bgControls.start({
          height: "100%",
          bottom: "0",
          top: "auto",
          transition: { duration: 0.7, ease: "easeInOut" },
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await bgControls.start({
          height: "0%",
          bottom: "0",
          top: "auto",
          transition: { duration: 0.3, ease: "easeInOut" },
        });
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

  return (
    <>
      {textItems.map((item, index) => {
        const xPercent = useTransform(
          scrollYProgress,
          [0, 1],
          ["0%", `${item.xPercent}%`],
        );
        return (
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
                x: xPercent,
              }}
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
        );
      })}
    </>
  );
};

const AboutContent: React.FC = () => (
  <div className="">
    <AboutHeader />
    <p className="text-muted-foreground leading-relaxed font-neueMontreal">
      A passionate{" "}
      <strong className="text-[#EEE9CC] text-xl">web developer</strong>{" "}
      specialising in creating
      <strong className="text-[#EEE9CC] text-xl">
        {" "}
        intuitive and visually appealing interfaces
      </strong>
      . Proficient in
      <strong className="text-[#EEE9CC] text-xl">
        {" "}
        full-stack development
      </strong>{" "}
      with expertise in
      <strong className="text-[#EEE9CC] text-xl">
        {" "}
        Python, TypeScript, React
      </strong>
      , and modern web technologies.
    </p>
  </div>
);

const EducationContent: React.FC = () => (
  <>
    <h2 className="text-8xl text-[#EEE9CC] mb-4">Education</h2>
    <p className="text-[#EEE9CC]">
      <span className="text-5xl">Bachelor</span> of{" "}
      <span className="">Science</span> in{" "}
      <span className="text-3xl">Computer Science</span>
    </p>
  </>
);

const InterestsContent: React.FC = () => (
  <>
    <h2 className="text-8xl text-[#EEE9CC] mb-4">Interests</h2>
    <p className="text-[#EEE9CC]">
      Web Development, UI/UX Design, Machine Learning
    </p>
  </>
);

const HobbiesContent: React.FC = () => (
  <>
    <h2 className="text-8xl text-[#EEE9CC] mb-4">Hobbies</h2>
    <p className="text-[#EEE9CC]">Photography, Hiking, Reading</p>
  </>
);

// Main Component
const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === sliderItems.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const initLenis = async () => {
      if (typeof window === "undefined") return;

      const lenis = new Lenis({
        wrapper: containerRef.current,
        lerp: 0.15,
        duration: 1.5,
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <ScrollArea
      className="h-full w-full bg-[#1d1915]"
      viewportRef={containerRef}
    >
      <div ref={scrollRef} className="h-screen w-screen relative">
        <div className="relative w-full h-full overflow-hidden">
          <ImageSlider currentImageIndex={currentImageIndex} />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col divide-y divide-[#eee9cc]">
          <TextOverlay
            scrollYProgress={scrollYProgress}
            currentImageIndex={currentImageIndex}
          />
        </div>

        <AboutSectionTitle containerRef={containerRef} />
        <div className="font-neueMontreal text-[#EEE9CC] relative">
          <div className="border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
            <AboutContent />
          </div>
          <div className="border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
            <EducationContent />
          </div>
          <div className="border-b border-b-[#EEE9CC] bg-[#1d1915] p-4">
            <InterestsContent />
          </div>
          <div className="min-h-screen bg-[#1d1915] p-4">
            <HobbiesContent />
          </div>
        </div>
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default About;
