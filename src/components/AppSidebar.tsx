// import { useState, useEffect, useCallback, useRef } from "react";
// import { Terminal, Instagram, Linkedin, Github } from "lucide-react";
//
// import {
//   SidebarTrigger,
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarSeparator,
// } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/button";
// import TerminalWindow from "@/components/TerminalWindow";
// import { ModeToggle } from "@/components/mode-toggle";
// import { items } from "@/data/menu";
//
// interface AppSidebarProps {
//   setIsSplit: React.Dispatch<React.SetStateAction<boolean>>;
//   setSplitDirectory: React.Dispatch<React.SetStateAction<string>>;
// }
//
// export function AppSidebar({ setIsSplit, setSplitDirectory }: AppSidebarProps) {
//   const [isTerminalVisible, setIsTerminalVisible] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);
//
//   const toggleTerminal = useCallback(() => {
//     setIsTerminalVisible((prev) => !prev);
//   }, []);
//
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape" && isTerminalVisible) {
//         setIsTerminalVisible(false);
//       }
//     };
//
//     window.addEventListener("keydown", handleKeyDown);
//
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isTerminalVisible]);
//
//   return (
//     <>
//       <Sidebar collapsible="icon" variant="inset">
//         <SidebarTrigger className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2" />
//
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupLabel>Contact Me</SidebarGroupLabel>
//
//             <div className="flex justify-center items-center gap-6 py-4">
//               <a
//                 href="https://www.instagram.com/daniel_lindsayshad/"
//                 target="_blank"
//               >
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600"
//                 >
//                   <Instagram className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/daniel-lindsay-shad-148073224/"
//                 target="_blank"
//               >
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-blue-600 text-white hover:bg-blue-700"
//                 >
//                   <Linkedin className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//               <a href="https://github.com/dan1e1z" target="_blank">
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-gray-700 text-white hover:bg-gray-800"
//                 >
//                   <Github className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//             </div>
//
//             <SidebarSeparator />
//
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {items.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild>
//                       <a href={item.url} className="flex items-center gap-2">
//                         <item.icon className="h-4 w-4" />
//                         <span>{item.title}</span>
//                         <span className="ml-auto text-xs tracking-widest text-muted-foreground rounded-md border w-5 h-6 flex items-center justify-center">
//                           {item.keyShortcut}
//                         </span>
//                       </a>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//
//                 <SidebarSeparator />
//
//                 <SidebarMenuItem>
//                   <SidebarMenuButton
//                     onClick={toggleTerminal}
//                     data-state={isTerminalVisible ? "active" : "inactive"}
//                     className="relative"
//                   >
//                     <Terminal className="h-4 w-4" />
//                     <span>Terminal</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//                 <ModeToggle />
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//       </Sidebar>
//
//       {/* NOTE: */}
//       {isTerminalVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div ref={terminalRef}>
//             <TerminalWindow
//               setIsTerminalVisible={setIsTerminalVisible}
//               setIsSplit={setIsSplit}
//               setSplitDirectory={setSplitDirectory}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// TEST2
// import { useState, useEffect, useCallback, useRef } from "react";
// import { Terminal, Instagram, Linkedin, Github } from "lucide-react";
//
// import {
//   SidebarTrigger,
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarSeparator,
//   useSidebar,
// } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/button";
// import TerminalWindow from "@/components/TerminalWindow";
// import { ModeToggle } from "@/components/mode-toggle";
// import { items } from "@/data/menu";
//
// interface AppSidebarProps {
//   setIsSplit: React.Dispatch<React.SetStateAction<boolean>>;
//   setSplitDirectory: React.Dispatch<React.SetStateAction<string>>;
// }
//
// export function AppSidebar({ setIsSplit, setSplitDirectory }: AppSidebarProps) {
//   const [isTerminalVisible, setIsTerminalVisible] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);
//   const { state } = useSidebar();
//
//   const toggleTerminal = useCallback(() => {
//     setIsTerminalVisible((prev) => !prev);
//   }, []);
//
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape" && isTerminalVisible) {
//         setIsTerminalVisible(false);
//       }
//     };
//
//     window.addEventListener("keydown", handleKeyDown);
//
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isTerminalVisible]);
//
//   return (
//     <>
//       <Sidebar collapsible="icon" variant="inset">
//         <SidebarTrigger className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2" />
//
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupLabel>Contact Me</SidebarGroupLabel>
//
//             <div className="flex justify-center items-center gap-6 py-4">
//               <a
//                 href="https://www.instagram.com/daniel_lindsayshad/"
//                 target="_blank"
//               >
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600"
//                 >
//                   <Instagram className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/daniel-lindsay-shad-148073224/"
//                 target="_blank"
//               >
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-blue-600 text-white hover:bg-blue-700"
//                 >
//                   <Linkedin className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//               <a href="https://github.com/dan1e1z" target="_blank">
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-gray-700 text-white hover:bg-gray-800"
//                 >
//                   <Github className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//             </div>
//
//             <SidebarSeparator />
//
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {items.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild>
//                       <a href={item.url} className="flex items-center gap-2">
//                         <item.icon className="h-4 w-4" />
//                         <span>{item.title}</span>
//                         <span className="ml-auto text-xs tracking-widest text-muted-foreground rounded-md border w-5 h-6 flex items-center justify-center">
//                           {item.keyShortcut}
//                         </span>
//                       </a>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//
//                 <SidebarSeparator />
//
//                 <SidebarMenuItem>
//                   <SidebarMenuButton
//                     onClick={toggleTerminal}
//                     data-state={isTerminalVisible ? "active" : "inactive"}
//                     className="relative"
//                   >
//                     <Terminal className="h-4 w-4" />
//                     <span>Terminal</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//
//                 {/* ModeToggle with conditional rotation */}
//                 <div
//                   className={
//                     state !== "collapsed"
//                       ? "rotate-90 transition-transform duration-300"
//                       : ""
//                   }
//                 >
//                   <ModeToggle />
//                 </div>
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//       </Sidebar>
//
//       {isTerminalVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div ref={terminalRef}>
//             <TerminalWindow
//               setIsTerminalVisible={setIsTerminalVisible}
//               setIsSplit={setIsSplit}
//               setSplitDirectory={setSplitDirectory}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// TEST3 - WORKING
// import { useState, useEffect, useCallback, useRef } from "react";
// import { Terminal, Instagram, Linkedin, Github } from "lucide-react";
//
// import {
//   SidebarTrigger,
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarSeparator,
// } from "@/components/ui/sidebar";
// import { Button } from "@/components/ui/button";
// import TerminalWindow from "@/components/TerminalWindow";
// import { ModeToggle } from "@/components/mode-toggle";
// import { items } from "@/data/menu";
//
// interface AppSidebarProps {
//   setIsSplit: React.Dispatch<React.SetStateAction<boolean>>;
//   setSplitDirectory: React.Dispatch<React.SetStateAction<string>>;
// }
//
// export function AppSidebar({ setIsSplit, setSplitDirectory }: AppSidebarProps) {
//   const [isTerminalVisible, setIsTerminalVisible] = useState(false);
//   const terminalRef = useRef<HTMLDivElement>(null);
//
//   const toggleTerminal = useCallback(() => {
//     setIsTerminalVisible((prev) => !prev);
//   }, []);
//
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape" && isTerminalVisible) {
//         setIsTerminalVisible(false);
//       }
//     };
//
//     window.addEventListener("keydown", handleKeyDown);
//
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [isTerminalVisible]);
//
//   return (
//     <>
//       <Sidebar collapsible="icon" variant="inset">
//         <SidebarTrigger className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2" />
//
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupLabel>Contact Me</SidebarGroupLabel>
//
//             <div className="flex justify-center items-center gap-6 py-4">
//               <a
//                 href="https://www.instagram.com/daniel_lindsayshad/"
//                 target="_blank"
//               >
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600"
//                 >
//                   <Instagram className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/daniel-lindsay-shad-148073224/"
//                 target="_blank"
//               >
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-blue-600 text-white hover:bg-blue-700"
//                 >
//                   <Linkedin className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//               <a href="https://github.com/dan1e1z" target="_blank">
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="rounded-ss bg-gray-700 text-white hover:bg-gray-800"
//                 >
//                   <Github className="h-5 w-5 text-white" />
//                 </Button>
//               </a>
//             </div>
//
//             <SidebarSeparator />
//
//             <SidebarGroupContent>
//               <SidebarMenu>
//                 {items.map((item) => (
//                   <SidebarMenuItem key={item.title}>
//                     <SidebarMenuButton asChild>
//                       <a href={item.url} className="flex items-center gap-2">
//                         <item.icon className="h-4 w-4" />
//                         <span>{item.title}</span>
//                         <span className="ml-auto text-xs tracking-widest text-muted-foreground w-5 h-6 flex items-center justify-center">
//                           {item.keyShortcut}
//                         </span>
//                       </a>
//                     </SidebarMenuButton>
//                   </SidebarMenuItem>
//                 ))}
//
//                 <SidebarSeparator />
//
//                 <SidebarMenuItem>
//                   <SidebarMenuButton
//                     onClick={toggleTerminal}
//                     data-state={isTerminalVisible ? "active" : "inactive"}
//                     className="relative"
//                   >
//                     <Terminal className="h-4 w-4" />
//                     <span>Terminal</span>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//
//                 {/* ModeToggle with conditional rotation */}
//                 {/* <div */}
//                 {/*   className={ */}
//                 {/*     state === "collapsed" */}
//                 {/*       ? "flex flex-col items-center gap-2 transition-all" // collapsed */}
//                 {/*       : "rotate-90 transition-all mt-16 flex flex-grow" //expanded */}
//                 {/*   } */}
//                 {/* > */}
//                 {/*   <ModeToggle /> */}
//                 {/* </div> */}
//                 <ModeToggle />
//               </SidebarMenu>
//             </SidebarGroupContent>
//           </SidebarGroup>
//         </SidebarContent>
//       </Sidebar>
//
//       {isTerminalVisible && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div ref={terminalRef}>
//             <TerminalWindow
//               setIsTerminalVisible={setIsTerminalVisible}
//               setIsSplit={setIsSplit}
//               setSplitDirectory={setSplitDirectory}
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// TEST4
import { useState, useEffect, useCallback, useRef } from "react";
import { Terminal, Instagram, Linkedin, Github } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

import {
  SidebarTrigger,
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
import { Button } from "@/components/ui/button";
import TerminalWindow from "@/components/TerminalWindow";
import { ModeToggle } from "@/components/ModeToggle";
import { items } from "@/data/menu";

interface AppSidebarProps {
  setIsSplit: React.Dispatch<React.SetStateAction<boolean>>;
  setSplitDirectory: React.Dispatch<React.SetStateAction<string>>;
}

export function AppSidebar({ setIsSplit, setSplitDirectory }: AppSidebarProps) {
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
      <Sidebar collapsible="icon" variant="inset">
        <SidebarTrigger className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2" />

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Contact Me</SidebarGroupLabel>

            <div className="flex justify-center items-center gap-6 py-4">
              <a
                href="https://www.instagram.com/daniel_lindsayshad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-ss bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-lindsay-shad-148073224/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-ss bg-blue-600 text-white hover:bg-blue-700"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </Button>
              </a>
              <a
                href="https://github.com/dan1e1z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-ss bg-gray-700 text-white hover:bg-gray-800"
                >
                  <Github className="h-5 w-5 text-white" />
                </Button>
              </a>
            </div>

            <SidebarSeparator />

            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.url}
                    >
                      <Link to={item.url} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        <span className="ml-auto text-xs tracking-widest text-muted-foreground w-5 h-6 flex items-center justify-center">
                          {item.keyShortcut}
                        </span>
                      </Link>
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
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <ModeToggle />
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {isTerminalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={terminalRef}>
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
