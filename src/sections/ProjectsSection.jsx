import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-[130vh] flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full lg:w-6/12 bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            03 // SYSTEM ARCHITECTURE & PROJECTS
          </div>

          {projects.map((project) => (
            <div key={project.id}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="font-mono text-xs text-zinc-400 mt-1">{project.subtitle}</p>

              <div className="flex flex-wrap gap-1.5 my-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 font-mono text-[11px] bg-zinc-900 text-zinc-200 border border-zinc-800 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2.5 font-sans text-sm text-zinc-300 my-6">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FF4D00] font-mono">0{idx + 1}.</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-4 font-mono text-xs">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF4D00] text-white rounded hover:bg-[#e04400] transition"
                >
                  <Github className="w-4 h-4" />
                  {project.githubDisplay}
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Deployment
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-900/60 border border-dashed border-zinc-700 text-zinc-500 rounded">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo URL: Not provided in resume (Empty State)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
