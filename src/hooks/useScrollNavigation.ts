import { useState, useEffect, useCallback } from "react";
import { useLenis } from "lenis/react";

/**
 * A hook that monitors page scroll to determine the active section,
 * and provides a smooth scrolling function to navigate between them using Lenis.
 * 
 * @param sectionIds - Array of HTML element IDs to watch (e.g., ['home', 'about', 'contact'])
 * @param defaultActive - The ID to return before any scrolling happens
 * @returns An object containing the currently active section ID and a smooth scroll function.
 */
export function useScrollNavigation(sectionIds: string[], defaultActive: string = "") {
    const [activeId, setActiveId] = useState<string>(defaultActive);

    // 1. Hook into Lenis here
    const lenis = useLenis();

    useEffect(() => {
        // Find all the elements on the page that match our IDs
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            // The magic "trigger zone" in the middle of the screen
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionIds]); // Re-run if the list of sections changes

    // 2. Create a reusable scroll function wrapper
    const scrollTo = useCallback((targetId: string) => {
        if (lenis) {
            // Tell Lenis to smoothly scroll to the ID
            lenis.scrollTo(`#${targetId}`, {
                offset: 0,
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            // Fallback native smooth scrolling just in case Lenis hasn't initialized
            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        }
    }, [lenis]);

    // 3. Return BOTH the active ID and the scroll function
    return { activeId, scrollTo };
}
