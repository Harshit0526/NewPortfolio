import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full lg:w-6/12 bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            02 // EXPERIENCE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Industry Training
          </h2>

          {experience.map((exp) => (
            <div key={exp.id} className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-800 pb-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="font-mono text-xs text-[#FF4D00]">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-zinc-400 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 font-sans text-sm text-zinc-300">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#FF4D00] font-mono mt-0.5">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
