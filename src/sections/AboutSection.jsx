import { personal } from "../data/personal";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full flex justify-end">
        <div className="w-full lg:w-6/12 bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            01 // PROFESSIONAL SUMMARY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Layered Application Design & Backend Engineering.
          </h2>
          <p className="mt-5 font-sans text-zinc-300 leading-relaxed text-base">
            {personal.summary}
          </p>
          <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="text-zinc-500 block">TARGET ROLES</span>
              <span className="text-white">Entry-Level SDE, Java Developer, Spring Boot Developer</span>
            </div>
            <div>
              <span className="text-zinc-500 block">CORE FOUNDATION</span>
              <span className="text-white">Data Structures, OOP, DBMS, Layered Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
