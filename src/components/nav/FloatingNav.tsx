import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/animation/MagneticButton"; // Verify your folder path
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/config/navigation";

// 1. Add scrollTo to your expected props
interface FloatingNavProps {
    activePath: string;
    scrollTo: (targetId: string) => void;
}

// 2. Destructure scrollTo from props
export function FloatingNav({ activePath, scrollTo }: FloatingNavProps) {
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    // 3. The click handler is now incredibly clean
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault(); // Stop the instant HTML anchor jump
        scrollTo(targetId); // Fire the smooth scroll from your hook
    };

    return (
        <div className="fixed inset-x-0 top-6 z-[100] hidden justify-center md:flex">
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.15 }}
                className="flex w-fit max-w-full items-center gap-1 rounded-full border border-foreground/10 bg-background/70 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl"
                aria-label="Primary navigation"
                onMouseLeave={() => setHoveredPath(null)}
            >
                {NAV_ITEMS.map((item) => {
                    const active = item.anchor === activePath;
                    const Icon = item.icon;
                    return (
                        <MagneticButton key={item.path} strength={0.3}>
                            <a
                                href={`#${item.anchor}`}
                                // 4. Attach the updated handler here
                                onClick={(e) => handleNavigation(e, item.anchor)}
                                onMouseEnter={() => setHoveredPath(item.anchor)}
                                aria-current={active ? "page" : undefined}
                                className="relative flex select-none items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium"
                            >
                                {active && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 rounded-full bg-foreground"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <span
                                    className={cn(
                                        "relative z-10 font-mono text-[9px] tracking-widest transition-colors duration-300",
                                        active ? "text-primary-foreground/55" : "text-foreground/35"
                                    )}
                                >
                                    {item.shortLabel}
                                </span>
                                <Icon
                                    className={cn(
                                        "relative z-10 size-4 transition-colors duration-300",
                                        active ? "text-primary-foreground" : "text-foreground/40"
                                    )}
                                    aria-hidden="true"
                                />
                                <span
                                    className={cn(
                                        "relative z-10 tracking-tight transition-colors duration-300",
                                        active ? "text-primary-foreground" : "text-foreground/80"
                                    )}
                                >
                                    {item.label}
                                </span>
                            </a>
                        </MagneticButton>
                    );
                })}
            </motion.nav>
        </div>
    );
}
