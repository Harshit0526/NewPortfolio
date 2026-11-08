import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./three/Scene";
import { useScrollStore } from "./three/scrollStore";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechStackSection from "./sections/TechStackSection";
import EducationCertSection from "./sections/EducationCertSection";
import ContactSection from "./sections/ContactSection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const scrollContainerRef = useRef(null);
  const setProgress = useScrollStore((state) => state.setProgress);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: scrollContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => trigger.kill();
  }, [setProgress]);

  return (
    <div ref={scrollContainerRef} className="relative bg-charcoal bg-grid-pattern">
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 2.6, 6.8], fov: 45, near: 0.1, far: 100 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <EducationCertSection />
        <ContactSection />
      </main>
    </div>
  );
}
