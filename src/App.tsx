import { useMemo } from "react";
import { useLenis } from "lenis/react";
import PortfolioCanvas from "./components/PortfolioCanvas";
import { FloatingNav } from "@/components/nav/FloatingNav";
import { MobileDock } from "@/components/nav/MobileDock";

// Import your new hook and shared navigation config
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { NAV_ITEMS } from "@/config/navigation";

export default function App() {
    const lenis = useLenis((lenis) => {
        // console.log(lenis.scroll, lenis.velocity, lenis.progress);
    });

    // 1. Extract just the anchor IDs from the shared config
    const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.anchor), []);

    // 2. Run the navigation manager ONCE for the entire application
    const { activeId, scrollTo } = useScrollNavigation(sectionIds, "home");

    return (
        <div className="relative w-full">
            {/* 3. Pass both the active state and the scroll function down as props */}
            <FloatingNav activePath={activeId} scrollTo={scrollTo} />
            <MobileDock activePath={activeId} scrollTo={scrollTo} />

            <PortfolioCanvas />
        </div>
    );
}
