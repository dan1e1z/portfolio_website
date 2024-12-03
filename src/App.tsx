import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contacts from "@/pages/Contacts";
import Settings from "@/pages/Settings";
import { X } from "lucide-react";
import { useState } from "react";

const App = ({ children }: { children: React.ReactNode }) => {
  const [isSplit, setIsSplit] = useState(false);
  const [splitDirectory, setSplitDirectory] = useState("");

  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {/* <div> */}
        <SidebarProvider>
          <AppSidebar
            setIsSplit={setIsSplit}
            setSplitDirectory={setSplitDirectory}
          />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger />
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
            {!isSplit ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            ) : (
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel>
                  {splitDirectory === "home" ? (
                    <Home />
                  ) : splitDirectory === "about" ? (
                    <About />
                  ) : splitDirectory === "projects" ? (
                    <Projects />
                  ) : splitDirectory === "contacts" ? (
                    <Contacts />
                  ) : splitDirectory === "settings" ? (
                    <Settings />
                  ) : null}
                </ResizablePanel>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4"
                  onClick={() => {
                    setIsSplit(!isSplit);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </ResizablePanelGroup>
            )}
          </SidebarInset>
        </SidebarProvider>
        {/* </div> */}
      </ThemeProvider>
    </Router>
  );
};

export default App;
