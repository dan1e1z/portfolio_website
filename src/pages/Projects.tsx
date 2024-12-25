import { useRef, useEffect, useState } from "react";
import { ProjectItem } from "@/components/ProjectItem";
import { projects } from "@/data/projects";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocation } from "react-router-dom";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Debugging function
  const debugLog = (message: string, ...args: any[]) => {
    console.log(`[Projects Debug] ${message}`, ...args);
  };

  // Update progress bar based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollableHeight =
          scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
        const scrollPosition = scrollRef.current.scrollTop;
        const progress =
          scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener("scroll", handleScroll);
      return () => {
        currentScrollRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Scroll to the specific project based on the URL parameter
  useEffect(() => {
    const scrollToProject = () => {
      // Debug: Log all current information
      debugLog("Current Location Search", location.search);

      // Parse URL parameters
      const params = new URLSearchParams(location.search);
      const projectParam = params.get("project");

      debugLog("Project Parameter", projectParam);

      // Debug: Log all project IDs
      const allProjectIds = projects.map((p) => `project-${p.id}`);
      debugLog("All Project IDs", allProjectIds);

      if (projectParam && scrollRef.current) {
        // Try multiple potential element IDs
        const possibleIds = [
          projectParam, // exact match
          `project-${projectParam}`, // with project- prefix
          projectParam.replace("project-", ""), // without prefix
        ];

        debugLog("Checking Possible IDs", possibleIds);

        // Try to find the element using multiple strategies
        let targetElement: HTMLElement | null = null;

        possibleIds.forEach((id) => {
          if (!targetElement) {
            targetElement = document.getElementById(id);
            if (targetElement) {
              debugLog(`Found element with ID: ${id}`);
            }
          }
        });

        if (targetElement) {
          debugLog("Target Element Found", {
            id: targetElement.id,
            offsetTop: targetElement.offsetTop,
          });

          // Multiple scrolling attempts for robustness
          const scrollAttempts = [
            () =>
              targetElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              }),
            () => {
              if (scrollRef.current && targetElement) {
                scrollRef.current.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: "smooth",
                });
              }
            },
            () => {
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: "auto",
                  block: "start",
                });
              }
            },
          ];

          // Try multiple scrolling strategies
          scrollAttempts.some((attempt) => {
            try {
              attempt();
              return true; // Stop after first successful attempt
            } catch (error) {
              debugLog("Scroll Attempt Failed", error);
              return false;
            }
          });
        } else {
          debugLog("No matching element found", {
            searchParam: projectParam,
            documentQueryResult: document.getElementById(projectParam),
          });
        }
      } else {
        debugLog("Missing project parameter or scroll ref", {
          projectParam,
          scrollRefCurrent: !!scrollRef.current,
        });
      }
    };

    // Delay to ensure DOM is ready
    const timeoutId = setTimeout(scrollToProject, 300);

    // Cleanup timeout
    return () => clearTimeout(timeoutId);
  }, [location.search]);

  // Scroll to the top when the button is clicked
  const handleScrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollArea
      className="h-full w-full rounded-lg overflow-y-auto"
      viewportRef={scrollRef}
    >
      {/* Sticky Header inside Scrollable Content */}
      <div id="sticky-header" className="sticky top-0 z-10 shadow-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Projects</h1>
          <div className="relative w-full max-w-md h-2 bg-gray-300 rounded-lg">
            <div
              className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Project List */}
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
        <button
          onClick={handleScrollToTop}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Scroll To Top
        </button>
      </div>
    </ScrollArea>
  );
}
