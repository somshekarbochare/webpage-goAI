import { useCallback, useEffect, useState } from "react";
import { AINetworkBackground } from "./components/AINetworkBackground";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./components/Footer";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Blogs } from "./sections/Blogs";
import { Clients } from "./sections/Clients";
import { Contact } from "./sections/Contact";
import { Founders } from "./sections/Founders";
import { HowDifferent } from "./sections/HowDifferent";
import { HumanAI } from "./sections/HumanAI";
import { IntroducingAPDM } from "./sections/IntroducingAPDM";
import { Landing } from "./sections/Landing";
import { OriginStory } from "./sections/OriginStory";
import { Projects } from "./sections/Projects";
import { RealImpact } from "./sections/RealImpact";
import { Testimonials } from "./sections/Testimonials";
import { TheProblem } from "./sections/TheProblem";
import { TheShift } from "./sections/TheShift";
import { NAV_ITEMS } from "./data/content";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("landing");
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleLoadingComplete = useCallback(() => setLoading(false), []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [loading]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`relative ${loading ? "overflow-hidden" : ""}`}>
        <AINetworkBackground />
        <Navbar activeSection={activeSection} />
        <main className="relative z-10">
          <Landing />
          <TheShift />
          <TheProblem />
          <IntroducingAPDM />
          <HumanAI />
          <HowDifferent />
          <RealImpact />
          <Projects />
          <Clients />
          <Testimonials />
          <Founders />
          <OriginStory />
          <Blogs />
          <Contact />
        </main>
        <Footer activeSection={activeSection} onNavigate={scrollTo} />
        <BackToTop visible={showBackToTop} />
      </div>
    </>
  );
}

export default App;
