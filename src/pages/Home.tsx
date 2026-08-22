import { useRef } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import HomeContent from "@/components/home/HomeContent";

export default function Home() {
    const shouldReduceMotion = useReducedMotion();
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroScale = useTransform(scrollYProgress, [0, 0.72], [1, shouldReduceMotion ? 1 : 0.9]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.58, 0.9], [1, 0.78, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.9], [0, shouldReduceMotion ? 0 : -72]);

    return (
        <div className="w-full flex-1">
            {/* HERO SECTION */}
            <motion.section
                ref={heroRef}
                style={{
                    scale: heroScale,
                    opacity: heroOpacity,
                    y: heroY,
                    willChange: "transform, opacity",
                }}
                // className=" mt-28 relative mx-auto flex min-h-[100dvh] w-full max-w-[1700px] flex-col justify-end px-4 pb-28 pt-6 sm:px-8 sm:pb-32 sm:pt-8 md:pb-20 md:pt-28"
                className="mt-28 px-8"
            >
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 flex w-full flex-col justify-between gap-6 border-t border-foreground/15 pt-6 sm:gap-8 md:flex-row md:items-end md:gap-12 lg:gap-16 xl:gap-24"
                >
                    {/* Headline Canvas */}
                    <div className="min-w-0 flex-1">
                        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground sm:mb-4">
                            Independent digital portfolio
                        </p>
                        {/* <h1 className="break-words font-sometimesTimes text-5xl font-normal leading-[0.92] tracking-tight sm:text-7xl sm:leading-[0.88] lg:text-8xl xl:text-[9rem]"> */}
                        <h1 className="break-words font-sometimesTimes text-5xl leading-[0.85] tracking-tight sm:text-7xl  lg:text-8xl xl:text-[9rem]">
                            Designing<br />momentum for<br />the web.
                        </h1>
                    </div>
                    {/* Intro Text */}
                    <div className="max-w-full shrink-0 font-mono text-xs uppercase leading-relaxed tracking-wider text-muted-foreground sm:max-w-xs md:w-60 md:pb-1 md:text-right">
                        Selected work, systems, and experiments by Daniel.
                    </div>
                </motion.div>
                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="mt-8 flex select-none items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:justify-start"
                >
                    <div className="flex items-center gap-3">
                        <span className="h-4 w-px bg-foreground/40 sm:h-5" />
                        <span>Scroll to explore</span>
                    </div>
                    <span className="text-foreground/40 sm:hidden">↓</span>
                </motion.div>
            </motion.section>

            {/* CONTENT SECTION */}
            {/* <section className="w-full px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24"> */}
            {/*     <div className="mx-auto w-full max-w-[1700px]"> */}
            {/*         <HomeContent /> */}
            {/*     </div> */}
            {/* </section> */}
        </div>
    );
}
