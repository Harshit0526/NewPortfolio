import { FileDown, Eye } from "lucide-react";
import { personal } from "../data/personal";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";

function Divider() {
  return <hr className="border-white/15 my-5" />;
}

function SectionHeading({ children }) {
  return (
    <h3 className="font-display text-lg font-bold text-white tracking-wide uppercase mb-3">
      {children}
    </h3>
  );
}

export default function ResumeSection() {
  return (
    <section id="resume" className="h-screen flex flex-col justify-center px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col" style={{ maxHeight: "100vh" }}>
        {/* Header row */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4 flex-shrink-0">
          <div>
            <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-1">
              06 // RESUME
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Full Résumé
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-white/20 text-white font-mono text-xs font-medium rounded hover:bg-white/10 transition"
            >
              <Eye className="w-4 h-4" />
              View Resume
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="flex items-center gap-2 px-5 py-3 bg-[#FF4D00] text-white font-mono text-xs font-medium rounded hover:bg-[#e04400] transition"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Frosted glass panel — scales down to fit viewport */}
        <div className="flex-1 min-h-0 flex items-start">
          <div
            className="w-full origin-top"
            style={{ transform: "scale(0.72)", transformOrigin: "top center", marginBottom: "-28%" }}
          >
            <div
              className="rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(28px) saturate(160%)",
                WebkitBackdropFilter: "blur(28px) saturate(160%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <div className="p-8 sm:p-12 font-sans text-white/90 text-sm leading-relaxed">

                {/* Name & Contact */}
                <div className="mb-6">
                  <h2 className="font-display text-3xl font-bold text-white tracking-tight">
                    {personal.name}
                  </h2>
                  <p className="font-mono text-xs text-white/60 mt-1">
                    {personal.location} &nbsp;·&nbsp;{" "}
                    <a href={`mailto:${personal.email}`} className="underline hover:text-white transition">
                      {personal.email}
                    </a>{" "}
                    &nbsp;·&nbsp;{" "}
                    <a href={personal.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white transition">
                      {personal.linkedinHandle}
                    </a>{" "}
                    &nbsp;·&nbsp;{" "}
                    <a href={personal.github} target="_blank" rel="noreferrer" className="underline hover:text-white transition">
                      {personal.githubHandle}
                    </a>
                  </p>
                </div>

                <Divider />

                {/* Summary */}
                <SectionHeading>Summary</SectionHeading>
                <p className="text-white/80">{personal.summary}</p>

                <Divider />

                {/* Experience */}
                <SectionHeading>Experience</SectionHeading>
                {experience.map((exp) => (
                  <div key={exp.id} className="mb-4">
                    <div className="flex flex-wrap justify-between items-baseline gap-2">
                      <span className="font-semibold text-white">{exp.role}</span>
                      <span className="font-mono text-xs text-white/50">{exp.period}</span>
                    </div>
                    <div className="text-[#FF4D00] text-xs font-mono mb-2">{exp.company}</div>
                    <ul className="list-disc list-inside space-y-1 text-white/75">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Divider />

                {/* Projects */}
                <SectionHeading>Projects</SectionHeading>
                {projects.map((proj) => (
                  <div key={proj.id} className="mb-5">
                    <div className="flex flex-wrap justify-between items-baseline gap-2">
                      <span className="font-semibold text-white">
                        {proj.title}{" "}
                        <span className="text-white/50 font-normal">— {proj.subtitle}</span>
                      </span>
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-xs text-[#FF4D00] underline hover:text-white transition"
                        >
                          {proj.githubDisplay}
                        </a>
                      )}
                    </div>
                    <div className="font-mono text-xs text-white/45 mb-2">
                      {proj.techStack.join(" · ")}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-white/75">
                      {proj.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}

                <Divider />

                {/* Skills */}
                <SectionHeading>Technical Skills</SectionHeading>
                <div className="space-y-2">
                  {skills.map((s) => (
                    <div key={s.category} className="flex flex-wrap gap-x-2">
                      <span className="font-semibold text-white min-w-[130px]">{s.category}:</span>
                      <span className="text-white/75">{s.items.join(", ")}</span>
                    </div>
                  ))}
                </div>

                <Divider />

                {/* Education */}
                <SectionHeading>Education</SectionHeading>
                {education.map((edu) => (
                  <div key={edu.id} className="mb-3">
                    <div className="flex flex-wrap justify-between items-baseline gap-2">
                      <span className="font-semibold text-white">{edu.degree}</span>
                      <span className="font-mono text-xs text-white/50">{edu.period}</span>
                    </div>
                    <div className="text-[#FF4D00] text-xs font-mono">{edu.institution}</div>
                    <div className="text-white/60 text-xs mt-0.5">{edu.score}</div>
                  </div>
                ))}

                <Divider />

                {/* Certifications */}
                <SectionHeading>Certifications</SectionHeading>
                {certifications.map((cert) => (
                  <div key={cert.id} className="mb-3">
                    <div className="flex flex-wrap justify-between items-baseline gap-2">
                      <span className="font-semibold text-white">{cert.title}</span>
                      <span className="font-mono text-xs text-white/50">{cert.date}</span>
                    </div>
                    <div className="text-[#FF4D00] text-xs font-mono">{cert.issuer}</div>
                    <div className="text-white/60 text-xs mt-0.5">
                      Certificate ID: {cert.certificateId} &nbsp;·&nbsp; Grade: {cert.grade}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
