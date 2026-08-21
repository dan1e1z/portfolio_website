import { useLenis } from "lenis/react";
import PortfolioCanvas from "./components/PortfolioCanvas";

export default function App() {
    const lenis = useLenis((lenis) => {
        // logs scroll position, velocity, progress, etc.
        console.log(lenis.scroll, lenis.velocity, lenis.progress);
    });

    return (
        <div>
            <PortfolioCanvas />
        </div>
    );
}
