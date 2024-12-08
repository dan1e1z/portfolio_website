import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { X } from "lucide-react";

// UI Components
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/app-sidebar";

// Page Components
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contacts from "@/pages/Contacts";
import Settings from "@/pages/Settings";

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
  settings: Settings,
};

const KeyPressNavigation: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
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
          navigate("/settings");
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
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );

  const renderSplitView = () => {
    const SplitComponent = splitDirectory
      ? PAGE_COMPONENTS[splitDirectory]
      : null;

    return (
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full w-full">{renderRoutes()}</div>
        </ResizablePanel>
        <ResizableHandle className="w-2.5" />
        <ResizablePanel defaultSize={50} minSize={30}>
          <div className="h-full w-full">
            {SplitComponent ? <SplitComponent /> : null}
          </div>
        </ResizablePanel>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-5 top-5 z-10"
          onClick={() => setIsSplit(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </ResizablePanelGroup>
    );
  };

  return (
    <Router>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <SidebarProvider>
          <div className="flex h-screen overflow-hidden w-screen">
            <KeyPressNavigation />
            <AppSidebar
              setIsSplit={setIsSplit}
              setSplitDirectory={setSplitDirectory}
            />
            <SidebarInset className="flex-1 overflow-hidden">
              <main className="h-full w-full">
                {isSplit ? (
                  renderSplitView()
                ) : (
                  <div className="h-full w-full max-w-full">
                    {renderRoutes()}
                  </div>
                )}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
