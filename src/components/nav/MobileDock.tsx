"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/config/navigation";
import { MagneticButton } from "@/animation/MagneticButton"; // Adjust path if needed

interface MobileDockProps {
    activePath: string;
    scrollTo: (targetId: string) => void;
}

export const MobileDock = ({ activePath, scrollTo }: MobileDockProps) => {
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        scrollTo(targetId);
    };

    return (
        <div className="fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4 md:hidden">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.2 }}
                className="w-full max-w-[22rem]"
                aria-label="Primary navigation"
            >
                <div className="flex w-full items-center justify-evenly gap-1 rounded-full border border-foreground/10 bg-background/70 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                    {NAV_ITEMS.map((item) => {
                        const active = item.anchor === activePath;
                        const Icon = item.icon;
                        return (
                            <MagneticButton key={item.path} strength={0.3}>
                                <a
                                    href={`#${item.anchor}`}
                                    onClick={(e) => handleNavigation(e, item.anchor)}
                                    aria-label={item.label}
                                    aria-current={active ? "page" : undefined}
                                    className="relative flex select-none flex-col items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-medium transition-transform active:scale-95"
                                >
                                    {active && (
                                        <motion.div
                                            layoutId="mobile-nav-pill"
                                            className="absolute inset-0 rounded-full bg-foreground"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}

                                    <Icon
                                        className={cn(
                                            "relative z-10 size-[18px] transition-colors duration-300",
                                            active ? "text-primary-foreground" : "text-foreground/40"
                                        )}
                                        aria-hidden="true"
                                    />


                                    {/* Adapted from desktop's main label styling */}
                                    <span
                                        className={cn(
                                            "relative z-10 max-w-full truncate tracking-tight transition-colors duration-300",
                                            active ? "text-primary-foreground" : "text-foreground/80"
                                        )}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            </MagneticButton>
                        );
                    })}
                </div>
            </motion.nav>
        </div>
    );
};
