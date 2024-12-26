import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Ellipsis } from "lucide-react";

// UI Components
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AppSidebar } from "@/components/app-sidebar";

// Page Components
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contacts from "@/pages/Contacts";
import Skills from "@/pages/Skills";

// Types
interface PageComponentMap {
  [key: string]: React.ComponentType;
}

// Constant mapping of directory names to page components
const PAGE_COMPONENTS: PageComponentMap = {
  home: Home,
  about: About,
  projects: Projects,
  contacts: Contacts,
  skills: Skills,
};

const KeyPressNavigation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "1":
          navigate("/");
          break;
        case "2":
          navigate("/about");
          break;
        case "3":
          navigate("/projects");
          break;
        case "4":
          navigate("/contacts");
          break;
        case "5":
          navigate("/skills");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return null;
};

const App: React.FC = () => {
  const [isSplit, setIsSplit] = useState(false);
  const [splitDirectory, setSplitDirectory] = useState("");

  const renderRoutes = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );

  const renderSplitView = () => {
    const SplitComponent = splitDirectory
      ? PAGE_COMPONENTS[splitDirectory]
      : null;

    return (
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={50}
          minSize={30}
          className="bg-transparent"
        >
          <div className="h-full w-full  bg-transparent">{renderRoutes()}</div>
        </ResizablePanel>
        <ResizableHandle className="w-2.5" />
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full w-full bg-transparent">
            {SplitComponent ? <SplitComponent /> : null}
          </div>
        </ResizablePanel>
        {/* Adjusted Button */}
        <button
          className="fixed right-0 top-3 z-[100000] p-0 flex items-center justify-center overflow-hidden h-5 w-3"
          onClick={() => setIsSplit(false)}
        >
          <div className="transform -rotate-90">
            <Ellipsis className="h-5 w-5 block" />
          </div>
        </button>
      </ResizablePanelGroup>
    );
  };

  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <SidebarProvider>
          <div className="bg-sequoia-light dark:bg-sequoia-dark bg-cover h-screen w-screen">
            {/* Add a separate background overlay div */}
            <div className="absolute inset-0 bg-sidebar opacity-80" />
            {/* Move the content into a separate div without opacity */}
            <div className="relative z-10 flex h-screen w-screen backdrop-blur-2xl">
              <KeyPressNavigation />
              <AppSidebar
                setIsSplit={setIsSplit}
                setSplitDirectory={setSplitDirectory}
              />
              <SidebarInset className="flex-1 overflow-hidden">
                <main className="h-full w-full bg-transparent">
                  {isSplit ? (
                    renderSplitView()
                  ) : (
                    <div className="h-full w-full bg-transparent">
                      {renderRoutes()}
                    </div>
                  )}
                  <Toaster />
                </main>
              </SidebarInset>
            </div>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
