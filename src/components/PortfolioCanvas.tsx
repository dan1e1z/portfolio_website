import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contacts = lazy(() => import("@/pages/Contacts"));
const Skills = lazy(() => import("@/pages/Skills"));

const CHAPTERS = [
    { id: "home", label: "Home", number: "00", Page: Home },
    { id: "about", label: "About", number: "01", Page: About },
    { id: "projects", label: "Projects", number: "02", Page: Projects },
    { id: "skills", label: "Skills", number: "03", Page: Skills },
    { id: "contacts", label: "Contact", number: "04", Page: Contacts },
] as const;

const PortfolioCanvas = () => {
    return (
        <div className="w-full h-full">
            <div>
                {CHAPTERS.map(({ id, Page }) => (
                    <section key={id} id={id} className="">
                        <Page />
                    </section>
                ))}
            </div>
        </div >
    )
}

export default PortfolioCanvas;
