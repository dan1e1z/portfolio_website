import { useState, useEffect, useCallback, useRef } from "react";
import { Terminal } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import TerminalWindow from "@/components/TerminalWindow";
import { items } from "@/data/menu";

interface AppSidebarProps {
  setIsSplit: React.Dispatch<React.SetStateAction<boolean>>;
  setSplitDirectory: React.Dispatch<React.SetStateAction<string>>;
}

export function AppSidebar({ setIsSplit, setSplitDirectory }: AppSidebarProps) {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const toggleTerminal = useCallback(() => {
    setIsTerminalVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isTerminalVisible) {
        setIsTerminalVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isTerminalVisible]);

  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}

                <SidebarSeparator />

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={toggleTerminal}
                    data-state={isTerminalVisible ? "active" : "inactive"}
                    className="relative"
                  >
                    <Terminal className="h-4 w-4" />
                    <span>Terminal</span>
                    {isTerminalVisible && (
                      <span className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-green-500" />
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* NOTE: */}
      {isTerminalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={terminalRef}
            // className="relative w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800"
          >
            <TerminalWindow
              setIsTerminalVisible={setIsTerminalVisible}
              setIsSplit={setIsSplit}
              setSplitDirectory={setSplitDirectory}
            />
          </div>
        </div>
      )}
    </>
  );
}
