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

        for (const item of projects) {
          const element = document.getElementById(`project${item.id}`);
          if (
            element &&
            element.getBoundingClientRect().top >= 0 &&
            element.getBoundingClientRect().top <= window.innerHeight
          ) {
            window.history.replaceState({}, "", `?project=project${item.id}`);
            break;
          }
        }
      }
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener("scroll", handleScroll);
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const projectId = new URLSearchParams(location.search).get("project");
    if (projectId && scrollRef.current) {
      const targetElement = document.getElementById(projectId);
      console.log("project id", projectId);
      targetElement?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location.search]);

  return (
    <div className="w-full h-full bg-[#1c1915] relative rounded-lg">
      <ScrollArea className="h-full w-full rounded-lg" viewportRef={scrollRef}>
        <div className="sticky top-0 z-10 shadow-md p-4 bg-[#1c1915]/60 backdrop-blur-2xl rounded-lg">
          <div className="w-full h-2 bg-[#1c1915] rounded-lg overflow-hidden">
            <div
              className="h-full bg-[#eee9cc] rounded-lg transition-all duration-200"
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
        <div className="fixed bottom-4 right-4 z-50 hidden md:block">
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
