import { skills } from "../data/skills";

export default function TechStackSection() {
  return (
    <section id="skills" className="min-h-screen flex items-end px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            04 // TECHNICAL SKILLS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
            Resume Skill Matrix
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-4 bg-zinc-950/80 border border-zinc-800/90 rounded hover:border-[#FF4D00]/50 transition"
              >
                <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-3">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 font-mono text-xs bg-zinc-900 text-zinc-200 border border-zinc-800 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
