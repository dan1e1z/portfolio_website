// import { useRef, useEffect, useState } from "react";
// import { ProjectItem } from "@/components/ProjectItem";
// import { projects } from "@/data/projects";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { useLocation } from "react-router-dom";
//
// export default function Projects() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const location = useLocation();
//
//   // Debugging function
//   const debugLog = (message: string, ...args: any[]) => {
//     console.log(`[Projects Debug] ${message}`, ...args);
//   };
//
//   // Update progress bar based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const scrollableHeight =
//           scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
//         const scrollPosition = scrollRef.current.scrollTop;
//         const progress =
//           scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;
//         setScrollProgress(Math.min(100, Math.max(0, progress)));
//       }
//     };
//
//     const currentScrollRef = scrollRef.current;
//     if (currentScrollRef) {
//       currentScrollRef.addEventListener("scroll", handleScroll);
//       return () => {
//         currentScrollRef.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, []);
//
//   // Scroll to the specific project based on the URL parameter
//   useEffect(() => {
//     const scrollToProject = () => {
//       // Debug: Log all current information
//       debugLog("Current Location Search", location.search);
//
//       // Parse URL parameters
//       const params = new URLSearchParams(location.search);
//       const projectParam = params.get("project");
//
//       debugLog("Project Parameter", projectParam);
//
//       // Debug: Log all project IDs
//       const allProjectIds = projects.map((p) => `project-${p.id}`);
//       debugLog("All Project IDs", allProjectIds);
//
//       if (projectParam && scrollRef.current) {
//         // Try multiple potential element IDs
//         const possibleIds = [
//           projectParam, // exact match
//           `project-${projectParam}`, // with project- prefix
//           projectParam.replace("project-", ""), // without prefix
//         ];
//
//         debugLog("Checking Possible IDs", possibleIds);
//
//         // Try to find the element using multiple strategies
//         let targetElement: HTMLElement | null = null;
//
//         possibleIds.forEach((id) => {
//           if (!targetElement) {
//             targetElement = document.getElementById(id);
//             if (targetElement) {
//               debugLog(`Found element with ID: ${id}`);
//             }
//           }
//         });
//
//         if (targetElement) {
//           debugLog("Target Element Found", {
//             id: targetElement.id,
//             offsetTop: targetElement.offsetTop,
//           });
//
//           // Multiple scrolling attempts for robustness
//           const scrollAttempts = [
//             () =>
//               targetElement?.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//               }),
//             () => {
//               if (scrollRef.current && targetElement) {
//                 scrollRef.current.scrollTo({
//                   top: targetElement.offsetTop,
//                   behavior: "smooth",
//                 });
//               }
//             },
//             () => {
//               if (targetElement) {
//                 targetElement.scrollIntoView({
//                   behavior: "auto",
//                   block: "start",
//                 });
//               }
//             },
//           ];
//
//           // Try multiple scrolling strategies
//           scrollAttempts.some((attempt) => {
//             try {
//               attempt();
//               return true; // Stop after first successful attempt
//             } catch (error) {
//               debugLog("Scroll Attempt Failed", error);
//               return false;
//             }
//           });
//         } else {
//           debugLog("No matching element found", {
//             searchParam: projectParam,
//             documentQueryResult: document.getElementById(projectParam),
//           });
//         }
//       } else {
//         debugLog("Missing project parameter or scroll ref", {
//           projectParam,
//           scrollRefCurrent: !!scrollRef.current,
//         });
//       }
//     };
//
//     // Delay to ensure DOM is ready
//     const timeoutId = setTimeout(scrollToProject, 300);
//
//     // Cleanup timeout
//     return () => clearTimeout(timeoutId);
//   }, [location.search]);
//
//   // Scroll to the top when the button is clicked
//   const handleScrollToTop = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//   };
//
//   return (
//     <ScrollArea
//       className="h-full w-full rounded-lg overflow-y-auto"
//       viewportRef={scrollRef}
//     >
//       {/* Sticky Header inside Scrollable Content */}
//       <div id="sticky-header" className="sticky top-0 z-10 shadow-md p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-bold">Projects</h1>
//           <div className="relative w-full max-w-md h-2 bg-gray-300 rounded-lg">
//             <div
//               className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
//               style={{ width: `${scrollProgress}%` }}
//             />
//           </div>
//         </div>
//       </div>
//
//       {/* Project List */}
//       <div className="flex flex-col w-full items-stretch gap-6 p-6">
//         {projects.map((item) => (
//           <ProjectItem
//             key={item.id}
//             id={`project${item.id}`}
//             title={item.title}
//             img={item.img}
//             desc={item.desc}
//             link={item.link}
//           />
//         ))}
//         <button
//           onClick={handleScrollToTop}
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//         >
//           Scroll To Top
//         </button>
//       </div>
//     </ScrollArea>
//   );
// }

// TEST1 - WORKING

// import { useRef, useEffect, useState } from "react";
// import { ProjectItem } from "@/components/ProjectItem";
// import { projects } from "@/data/projects";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { useLocation } from "react-router-dom";
//
// export default function Projects() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const location = useLocation();
//
//   // Update progress bar based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const scrollableHeight =
//           scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
//         const scrollPosition = scrollRef.current.scrollTop;
//         const progress =
//           scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;
//         setScrollProgress(Math.min(100, Math.max(0, progress)));
//       }
//     };
//
//     const currentScrollRef = scrollRef.current;
//     if (currentScrollRef) {
//       currentScrollRef.addEventListener("scroll", handleScroll);
//       return () => {
//         currentScrollRef.removeEventListener("scroll", handleScroll);
//       };
//     }
//   }, []);
//
//   // Scroll to the specific project based on the URL parameter
//   useEffect(() => {
//     const scrollToProject = () => {
//       const params = new URLSearchParams(location.search);
//       const projectParam = params.get("project");
//
//       if (projectParam && scrollRef.current) {
//         const possibleIds = [
//           projectParam,
//           `project-${projectParam}`,
//           projectParam.replace("project-", ""),
//         ];
//
//         let targetElement: HTMLElement | null = null;
//
//         possibleIds.forEach((id) => {
//           if (!targetElement) {
//             targetElement = document.getElementById(id);
//           }
//         });
//
//         if (targetElement) {
//           const scrollAttempts = [
//             () =>
//               targetElement?.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//               }),
//             () => {
//               if (scrollRef.current && targetElement) {
//                 scrollRef.current.scrollTo({
//                   top: targetElement.offsetTop,
//                   behavior: "smooth",
//                 });
//               }
//             },
//             () => {
//               if (targetElement) {
//                 targetElement.scrollIntoView({
//                   behavior: "auto",
//                   block: "start",
//                 });
//               }
//             },
//           ];
//
//           scrollAttempts.some((attempt) => {
//             try {
//               attempt();
//               return true;
//             } catch (error) {
//               return false;
//             }
//           });
//         }
//       }
//     };
//
//     const timeoutId = setTimeout(scrollToProject, 300);
//
//     return () => clearTimeout(timeoutId);
//   }, [location.search]);
//
//   // Scroll to the top when the button is clicked
//   const handleScrollToTop = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//   };
//
//   return (
//     <div className="w-full h-full bg-page">
//       <ScrollArea
//         className="h-full w-full rounded-lg overflow-y-auto"
//         viewportRef={scrollRef}
//       >
//         {/* Sticky Header inside Scrollable Content */}
//         <div id="sticky-header" className="sticky top-0 z-10 shadow-md p-4">
//           <div className="flex justify-between items-center">
//             <div className="relative w-full max-w-md h-2 bg-gray-300 rounded-lg">
//               <div
//                 className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
//                 style={{ width: `${scrollProgress}%` }}
//               />
//             </div>
//           </div>
//         </div>
//
//         {/* Project List */}
//         <div className="flex flex-col w-full items-stretch gap-6 p-6">
//           {projects.map((item) => (
//             <ProjectItem
//               key={item.id}
//               id={`project${item.id}`}
//               title={item.title}
//               img={item.img}
//               desc={item.desc}
//               link={item.link}
//             />
//           ))}
//           <button
//             onClick={handleScrollToTop}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
//           >
//             Scroll To Top
//           </button>
//         </div>
//       </ScrollArea>
//     </div>
//   );
// }

// TEST2
// import { useRef, useEffect, useState } from "react";
// import { ProjectItem } from "@/components/ProjectItem";
// import { projects } from "@/data/projects";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowUp } from "lucide-react";
//
// export default function Projects() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [columns, setColumns] = useState(3);
//   const location = useLocation();
//
//   useEffect(() => {
//     let rafId: number;
//     const handleScrollAndResize = () => {
//       rafId = requestAnimationFrame(() => {
//         if (scrollRef.current) {
//           const { scrollHeight, clientHeight, scrollTop } = scrollRef.current;
//           const scrollableHeight = scrollHeight - clientHeight;
//           const progress =
//             scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
//           setScrollProgress(Math.min(100, Math.max(0, progress)));
//         }
//       });
//     };
//
//     const currentScrollRef = scrollRef.current;
//     if (currentScrollRef) {
//       currentScrollRef.addEventListener("scroll", handleScrollAndResize);
//       return () => {
//         currentScrollRef.removeEventListener("scroll", handleScrollAndResize);
//         cancelAnimationFrame(rafId);
//       };
//     }
//   }, []);
//
//   useEffect(() => {
//     const updateLayout = () => {
//       if (containerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         if (containerWidth < 768) {
//           setColumns(1);
//         } else if (containerWidth < 1024) {
//           setColumns(2);
//         } else {
//           setColumns(3);
//         }
//       }
//     };
//
//     const resizeObserver = new ResizeObserver(() => {
//       requestAnimationFrame(updateLayout);
//     });
//
//     if (containerRef.current) {
//       resizeObserver.observe(containerRef.current);
//       updateLayout();
//     }
//
//     return () => resizeObserver.disconnect();
//   }, []);
//
//   useEffect(() => {
//     const scrollToProject = () => {
//       const params = new URLSearchParams(location.search);
//       const projectParam = params.get("project");
//
//       if (!projectParam || !scrollRef.current) return;
//
//       const possibleIds = [
//         projectParam,
//         `project-${projectParam}`,
//         `project${projectParam}`,
//         projectParam.replace("project-", ""),
//       ];
//
//       const targetElement = possibleIds
//         .map((id) => document.getElementById(id))
//         .find((element) => element !== null);
//
//       if (targetElement && scrollRef.current) {
//         try {
//           const scrollContainer = scrollRef.current;
//           const headerHeight = 80;
//           const targetPosition = targetElement.offsetTop - headerHeight;
//
//           scrollContainer.scrollTo({
//             top: targetPosition,
//             behavior: "smooth",
//           });
//         } catch (error) {
//           console.error("Scroll error:", error);
//           targetElement.scrollIntoView({ block: "start" });
//         }
//       }
//     };
//
//     const timeoutId = setTimeout(scrollToProject, 300);
//     return () => clearTimeout(timeoutId);
//   }, [location.search]);
//
//   const handleScrollToTop = () => {
//     scrollRef.current?.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//
//   const getGridClass = () => {
//     switch (columns) {
//       case 1:
//         return "grid-cols-1";
//       case 2:
//         return "grid-cols-2";
//       default:
//         return "grid-cols-3";
//     }
//   };
//
//   return (
//     <div className="w-full h-full bg-page relative rounded-2xl">
//       <ScrollArea className="h-full w-full rounded-lg" viewportRef={scrollRef}>
//         <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
//           <div className="flex flex-col sm:flex-row justify-between items-center p-4 gap-4">
//             <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
//             <div className="relative w-full sm:max-w-md h-2 bg-secondary rounded-full overflow-hidden">
//               <div
//                 className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300 ease-out"
//                 style={{ width: `${scrollProgress}%` }}
//               />
//             </div>
//           </div>
//         </div>
//
//         <div
//           ref={containerRef}
//           className={`grid ${getGridClass()} gap-6 p-6 transition-all duration-300 ease-in-out`}
//         >
//           {projects.map((item) => (
//             <ProjectItem
//               key={item.id}
//               id={`project${item.id}`}
//               title={item.title}
//               img={item.img}
//               desc={item.desc}
//               link={item.link}
//             />
//           ))}
//         </div>
//
//         <div className="absolute bottom-4 right-4 z-50">
//           <Button
//             onClick={handleScrollToTop}
//             className="rounded-full p-2"
//             size="icon"
//             variant="outline"
//           >
//             <ArrowUp className="h-4 w-4" />
//             <span className="sr-only">Scroll to top</span>
//           </Button>
//         </div>
//       </ScrollArea>
//     </div>
//   );
// }

// TEST3
import { useRef, useEffect, useState } from "react";
import { ProjectItem } from "@/components/ProjectItem";
import { projects } from "@/data/projects";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollHeight, clientHeight, scrollTop } = scrollRef.current;
        const scrollableHeight = scrollHeight - clientHeight;
        const progress =
          scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener("scroll", handleScroll);
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const projectId = new URLSearchParams(location.search).get("project");

    if (projectId && scrollRef.current) {
      const targetElement =
        document.getElementById(projectId) ||
        document.getElementById(`project-${projectId}`) ||
        document.getElementById(projectId.replace("project-", ""));

      targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.search]);

  return (
    <div className="w-full h-full bg-page relative">
      <ScrollArea className="h-full w-full rounded-lg" viewportRef={scrollRef}>
        <div className="sticky top-0 z-10 shadow-md p-4 bg-background/60 backdrop-blur-2xl">
          <div className="w-full h-2 bg-secondary rounded-lg overflow-hidden">
            <div
              className="h-full bg-primary rounded-lg transition-all duration-200"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col w-full items-stretch gap-6 p-6">
          {projects.map((item) => (
            <ProjectItem
              key={item.id}
              id={`project${item.id}`}
              title={item.title}
              img={item.img}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 z-50">
          <Button
            onClick={() =>
              scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="p-2"
            size="icon"
            variant="outline"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}

// TEST4
// import { useRef, useEffect, useState } from "react";
// import { ProjectItem } from "@/components/ProjectItem";
// import { projects } from "@/data/projects";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Button } from "@/components/ui/button";
// import { useLocation } from "react-router-dom";
// import { ArrowUp } from "lucide-react";
//
// export default function Projects() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const location = useLocation();
//
//   // Track the project currently in view
//   const [currentProject, setCurrentProject] = useState<string | null>(null);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const { scrollHeight, clientHeight, scrollTop } = scrollRef.current;
//         const scrollableHeight = scrollHeight - clientHeight;
//         const progress =
//           scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
//         setScrollProgress(Math.min(100, Math.max(0, progress)));
//
//         // Check which project is in view based on scroll position
//         for (const item of projects) {
//           const element = document.getElementById(`project${item.id}`);
//           if (element) {
//             const rect = element.getBoundingClientRect();
//             if (rect.top >= 0 && rect.top <= window.innerHeight) {
//               // Update URL if the project comes into view
//               if (currentProject !== item.id.toString()) {
//                 setCurrentProject(item.id.toString());
//                 window.history.replaceState(
//                   {},
//                   "",
//                   `?project=project${item.id}`,
//                 );
//               }
//               break;
//             }
//           }
//         }
//       }
//     };
//
//     const currentRef = scrollRef.current;
//     currentRef?.addEventListener("scroll", handleScroll);
//     return () => currentRef?.removeEventListener("scroll", handleScroll);
//   }, [currentProject]);
//
//   useEffect(() => {
//     const projectId = new URLSearchParams(location.search).get("project");
//
//     if (projectId && scrollRef.current) {
//       const targetElement =
//         document.getElementById(projectId) ||
//         document.getElementById(`project-${projectId}`) ||
//         document.getElementById(projectId.replace("project-", ""));
//
//       targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [location.search]);
//
//   return (
//     <div className="w-full h-full bg-page relative">
//       <ScrollArea className="h-full w-full rounded-lg" viewportRef={scrollRef}>
//         <div className="sticky top-0 z-10 shadow-md p-4 bg-background/60 backdrop-blur-2xl">
//           <div className="w-full h-2 bg-secondary rounded-lg overflow-hidden">
//             <div
//               className="h-full bg-primary rounded-lg transition-all duration-200"
//               style={{ width: `${scrollProgress}%` }}
//             />
//           </div>
//         </div>
//
//         <div className="flex flex-col w-full items-stretch gap-6 p-6">
//           {projects.map((item) => (
//             <ProjectItem
//               key={item.id}
//               id={`project${item.id}`}
//               title={item.title}
//               img={item.img}
//               desc={item.desc}
//               link={item.link}
//             />
//           ))}
//         </div>
//         <div className="absolute bottom-4 right-4 z-50">
//           <Button
//             onClick={() =>
//               scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
//             }
//             className="p-2"
//             size="icon"
//             variant="outline"
//           >
//             <ArrowUp className="h-4 w-4" />
//             <span className="sr-only">Scroll to top</span>
//           </Button>
//         </div>
//       </ScrollArea>
//     </div>
//   );
// }

// TEST5
// import { useRef, useEffect, useState } from "react";
// import { ProjectItem } from "@/components/ProjectItem";
// import { projects } from "@/data/projects";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Button } from "@/components/ui/button";
// import { useLocation } from "react-router-dom";
// import { ArrowUp } from "lucide-react";
//
// export default function Projects() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const location = useLocation();
//
//   const [currentProject, setCurrentProject] = useState<string | null>(null);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollRef.current) {
//         const { scrollHeight, clientHeight, scrollTop } = scrollRef.current;
//         const scrollableHeight = scrollHeight - clientHeight;
//         const progress =
//           scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
//         setScrollProgress(Math.min(100, Math.max(0, progress)));
//
//         for (const item of projects) {
//           const element = document.getElementById(`project${item.id}`);
//           if (element) {
//             const rect = element.getBoundingClientRect();
//             if (rect.top >= 0 && rect.top <= window.innerHeight) {
//               if (currentProject !== item.id.toString()) {
//                 setCurrentProject(item.id.toString());
//                 window.history.replaceState(
//                   {},
//                   "",
//                   `?project=project${item.id}`,
//                 );
//               }
//               break;
//             }
//           }
//         }
//       }
//     };
//
//     const currentRef = scrollRef.current;
//     currentRef?.addEventListener("scroll", handleScroll);
//     return () => currentRef?.removeEventListener("scroll", handleScroll);
//   }, [currentProject]);
//
//   useEffect(() => {
//     const projectId = new URLSearchParams(location.search).get("project");
//
//     if (projectId && scrollRef.current) {
//       const targetElement =
//         document.getElementById(projectId) ||
//         document.getElementById(`project-${projectId}`) ||
//         document.getElementById(projectId.replace("project-", ""));
//
//       if (targetElement) {
//         // Scroll to the project regardless of its current visibility
//         targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }
//   }, [location.search]); // Trigger the scroll action whenever the search query changes
//
//   return (
//     <div className="w-full h-full bg-page relative">
//       <ScrollArea className="h-full w-full rounded-lg" viewportRef={scrollRef}>
//         <div className="sticky top-0 z-10 shadow-md p-4 bg-background/60 backdrop-blur-2xl">
//           <div className="w-full h-2 bg-secondary rounded-lg overflow-hidden">
//             <div
//               className="h-full bg-primary rounded-lg transition-all duration-200"
//               style={{ width: `${scrollProgress}%` }}
//             />
//           </div>
//         </div>
//
//         <div className="flex flex-col w-full items-stretch gap-6 p-6">
//           {projects.map((item) => (
//             <ProjectItem
//               key={item.id}
//               id={`project${item.id}`}
//               title={item.title}
//               img={item.img}
//               desc={item.desc}
//               link={item.link}
//             />
//           ))}
//         </div>
//         <div className="absolute bottom-4 right-4 z-50">
//           <Button
//             onClick={() =>
//               scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
//             }
//             className="p-2"
//             size="icon"
//             variant="outline"
//           >
//             <ArrowUp className="h-4 w-4" />
//             <span className="sr-only">Scroll to top</span>
//           </Button>
//         </div>
//       </ScrollArea>
//     </div>
//   );
// }

// TEST6
