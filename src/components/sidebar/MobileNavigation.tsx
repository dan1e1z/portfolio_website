// import type React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Terminal } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import type { MenuItem } from "@/types/sidebar";
// import { items } from "@/data/menu";
//
// interface MobileNavigationProps {
//   toggleTerminal: () => void;
// }
//
// export const MobileNavigation: React.FC<MobileNavigationProps> = ({
//   toggleTerminal,
// }) => {
//   const location = useLocation();
//
//   return (
//     <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
//       <div className="relative">
//         <div className="absolute inset-0 bg-sidebar opacity-80" />
//         <div className="relative backdrop-blur-2xl border-t">
//           <div className="flex items-center justify-between px-4 py-3">
//             <div className="flex space-x-6 justify-center flex-1">
//               {items.map((item: MenuItem) => (
//                 <Link
//                   key={item.title}
//                   to={item.url}
//                   className={`flex flex-col items-center ${
//                     location.pathname === item.url
//                       ? "text-primary"
//                       : "text-muted-foreground"
//                   }`}
//                 >
//                   <item.icon className="h-6 w-6" />
//                   <span className="text-xs mt-1">{item.title}</span>
//                 </Link>
//               ))}
//             </div>
//             <Button
//               size="icon"
//               variant="ghost"
//               onClick={toggleTerminal}
//               className={`text-foreground hidden sm:block`}
//             >
//               <Terminal className="h-6 w-6" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // import { Terminal } from "lucide-react";
// import type React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import type { MenuItem } from "@/types/sidebar";
// import { items } from "@/data/menu";
//
// const MobileNavigation = () => {
//   const location = useLocation();
//   return <div className="p-4 block md:hidden">MobileNavigation</div>;
// };
//
// export default MobileNavigation;

// TEST2
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Terminal } from "lucide-react";
// import type { MenuItem } from "@/types/sidebar";
// import { items } from "@/data/menu";
//
// const MobileNavigation: React.FC = () => {
//   const location = useLocation();
//   const [isTerminalOpen, setIsTerminalOpen] = React.useState(false);
//
//   const toggleTerminal = () => {
//     setIsTerminalOpen(!isTerminalOpen);
//   };
//
//   return (
//     <div className="m-2 block md:hidden z-50 relative">
//       <div className="flex items-center justify-between">
//         <div className="flex space-x-6 justify-center flex-1">
//           {items.map((item: MenuItem) => (
//             <Link
//               key={item.title}
//               to={item.url}
//               className={`flex flex-col items-center ${
//                 location.pathname === item.url
//                   ? "text-primary"
//                   : "text-muted-foreground"
//               }`}
//             >
//               <item.icon className="h-6 w-6" />
//               <span className="text-xs mt-1">{item.title}</span>
//             </Link>
//           ))}
//         </div>
//         <Button
//           size="icon"
//           variant="ghost"
//           onClick={toggleTerminal}
//           className={`text-foreground hidden sm:block`}
//         >
//           <Terminal className="h-6 w-6" />
//         </Button>
//       </div>
//     </div>
//   );
// };
//
// export default MobileNavigation;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import type { MenuItem } from "@/types/sidebar";
import { items } from "@/data/menu";

const MobileNavigation: React.FC = () => {
  const location = useLocation();
  const [isTerminalOpen, setIsTerminalOpen] = React.useState(false);

  const toggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  return (
    // <div className="fixed bottom-0 left-0 right-0 block md:hidden z-50">
    <div className="block md:hidden z-50">
      <div className="flex items-center justify-between p-2 bg-transparent backdrop-blur-md">
        <div className="flex space-x-6 justify-center flex-1">
          {items.map((item: MenuItem) => (
            <Link
              key={item.title}
              to={item.url}
              className={`flex flex-col items-center ${
                location.pathname === item.url
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.title}</span>
            </Link>
          ))}
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleTerminal}
          className="text-foreground hidden sm:block"
        >
          <Terminal className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default MobileNavigation;
