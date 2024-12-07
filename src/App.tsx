import React, { useState, useEffect } from "react";
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

// Reusable panel content wrapper
const PanelContent: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="h-full bg-neutral-200 rounded-lg">{children}</div>
);

const KeyPressNavigation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "1":
          navigate("/"); // Navigate to Home
          break;
        case "2":
          navigate("/about"); // Navigate to About
          break;
        case "3":
          navigate("/projects"); // Navigate to Projects
          break;
        case "4":
          navigate("/contacts"); // Navigate to Contacts
          break;
        case "5":
          navigate("/settings"); // Navigate to Settings
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

  return null; // This component only adds a side effect
};

// Main App component
const App: React.FC<React.PropsWithChildren> = ({ children }) => {
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
        <ResizablePanel defaultSize={50}>
          <PanelContent>{renderRoutes()}</PanelContent>
        </ResizablePanel>
        <ResizableHandle withHandle className="w-1 bg-background" />
        <ResizablePanel defaultSize={50}>
          <PanelContent>
            {SplitComponent ? <SplitComponent /> : null}
          </PanelContent>
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
          <KeyPressNavigation />
          <AppSidebar
            setIsSplit={setIsSplit}
            setSplitDirectory={setSplitDirectory}
          />
          <SidebarInset className="bg-background">
            <main>{children}</main>
            {isSplit ? renderSplitView() : renderRoutes()}
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
