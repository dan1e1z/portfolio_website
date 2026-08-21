import { useRef } from "react";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import HomeContent from "@/components/home/HomeContent";

export default function Home() {


    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroScale = useTransform(scrollYProgress, [0, 0.72], [1, 0.9]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.58, 0.9], [1, 0.78, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.9], [0, -72]);

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
                className="relative mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-[1700px] flex-col justify-end px-5 pb-10 pt-6 sm:min-h-[calc(100dvh-5rem)] sm:px-8 md:px-12 md:pb-20 md:pt-12"
            >
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 flex w-full flex-col justify-between gap-8 border-t border-foreground/15 pt-6 md:flex-row md:items-end md:gap-12 lg:gap-16 xl:gap-24 2xl:gap-32"
                >
                    {/* Headline Canvas */}
                    <div className="min-w-0 flex-1">
                        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                            Independent digital portfolio
                        </p>
                        <h1 className="font-sometimesTimes text-5xl font-normal leading-[0.88] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8.5rem] 2xl:text-[10rem]">
                            Designing momentum for the web.
                        </h1>
                    </div>

                    {/* Intro Text */}
                    <div className="max-w-xs shrink-0 font-mono text-xs uppercase leading-relaxed tracking-wider text-muted-foreground md:w-56 md:pb-2 md:text-right">
                        Selected work, systems, and experiments by Daniel.
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="mt-10 flex select-none items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:justify-start md:absolute md:bottom-6 md:right-12 md:mt-0"
                >
                    <div className="flex items-center gap-3">
                        <span className="h-4 w-px bg-foreground/40 md:h-6" />
                        <span>Scroll to explore</span>
                    </div>
                    <span className="text-[10px] text-foreground/40 sm:hidden">↓</span>
                </motion.div>
            </motion.section>

            {/* CONTENT SECTION */}
            <section className="w-full px-5 py-16 sm:px-8 md:px-12 md:py-24">
                <div className="mx-auto w-full max-w-[1700px]">
                    <HomeContent />
                </div>
            </section>
        </div>
    );
}
