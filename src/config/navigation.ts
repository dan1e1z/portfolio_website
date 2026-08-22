import { Briefcase, Home, Layers, Mail, User } from "lucide-react";
// import type { NavItem } from "@/types/navigation";

// Export the array so any component can import it
export const NAV_ITEMS = [
    { label: "Home", shortLabel: "00", path: "/", anchor: "home", icon: Home },
    { label: "About", shortLabel: "01", path: "/about", anchor: "about", icon: User },
    { label: "Work", shortLabel: "02", path: "/projects", anchor: "projects", icon: Briefcase },
    { label: "Skills", shortLabel: "03", path: "/skills", anchor: "skills", icon: Layers },
    { label: "Contact", shortLabel: "04", path: "/contacts", anchor: "contacts", icon: Mail },
];
