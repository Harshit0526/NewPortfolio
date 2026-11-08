import { useState } from "react";
import { personal } from "../data/personal";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";
import { Github, Linkedin, Mail, FileDown, FileText, X } from "lucide-react";

function ResumeModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: "rgba(18,18,22,0.97)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 border-b border-white/10"
          style={{ background: "rgba(18,18,22,0.97)" }}>
          <span className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest">Resume</span>
          <div className="flex items-center gap-3">
            <a
              href={personal.resumeUrl}
              download
              className="flex items-center gap-2 px-4 py-2 bg-[#FF4D00] text-white font-mono text-xs font-medium rounded hover:bg-[#e04400] transition"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download
            </a>
            <button onClick={onClose} className="text-zinc-400 hover:text-white transition">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume content */}
        <div className="px-8 py-6 font-sans text-sm text-white/90 leading-relaxed">

          {/* Name & Contact */}
          <h2 className="font-display text-3xl font-bold text-white tracking-tight">{personal.name}</h2>
          <p className="font-mono text-xs text-white/55 mt-1">
            {personal.location} &nbsp;·&nbsp;{" "}
            <a href={`mailto:${personal.email}`} className="underline hover:text-white transition">{personal.email}</a>
            &nbsp;·&nbsp;{" "}
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white transition">{personal.linkedinHandle}</a>
            &nbsp;·&nbsp;{" "}
            <a href={personal.github} target="_blank" rel="noreferrer" className="underline hover:text-white transition">{personal.githubHandle}</a>
          </p>

          <hr className="border-white/15 my-5" />

          {/* Summary */}
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mb-2">Summary</h3>
          <p className="text-white/75">{personal.summary}</p>

          <hr className="border-white/15 my-5" />

          {/* Experience */}
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mb-3">Experience</h3>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <span className="font-semibold text-white">{exp.role}</span>
                <span className="font-mono text-xs text-white/50">{exp.period}</span>
              </div>
              <div className="text-[#FF4D00] text-xs font-mono mb-2">{exp.company}</div>
              <ul className="list-disc list-inside space-y-1 text-white/75">
                {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          ))}

          <hr className="border-white/15 my-5" />

          {/* Projects */}
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mb-3">Projects</h3>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-5">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <span className="font-semibold text-white">
                  {proj.title} <span className="text-white/50 font-normal">— {proj.subtitle}</span>
                </span>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noreferrer"
                    className="font-mono text-xs text-[#FF4D00] underline hover:text-white transition">
                    {proj.githubDisplay}
                  </a>
                )}
              </div>
              <div className="font-mono text-xs text-white/45 mb-2">{proj.techStack.join(" · ")}</div>
              <ul className="list-disc list-inside space-y-1 text-white/75">
                {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}

          <hr className="border-white/15 my-5" />

          {/* Skills */}
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mb-3">Technical Skills</h3>
          <div className="space-y-1.5">
            {skills.map((s) => (
              <div key={s.category} className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-white min-w-[150px]">{s.category}:</span>
                <span className="text-white/75">{s.items.join(", ")}</span>
              </div>
            ))}
          </div>

          <hr className="border-white/15 my-5" />

          {/* Education */}
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mb-3">Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <span className="font-semibold text-white">{edu.degree}</span>
                <span className="font-mono text-xs text-white/50">{edu.period}</span>
              </div>
              <div className="text-[#FF4D00] text-xs font-mono">{edu.institution}</div>
              <div className="text-white/55 text-xs mt-0.5">{edu.score}</div>
            </div>
          ))}

          <hr className="border-white/15 my-5" />

          {/* Certifications */}
          <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide mb-3">Certifications</h3>
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-3">
              <div className="flex flex-wrap justify-between items-baseline gap-2">
                <span className="font-semibold text-white">{cert.title}</span>
                <span className="font-mono text-xs text-white/50">{cert.date}</span>
              </div>
              <div className="text-[#FF4D00] text-xs font-mono">{cert.issuer}</div>
              <div className="text-white/55 text-xs mt-0.5">
                Certificate ID: {cert.certificateId} &nbsp;·&nbsp; Grade: {cert.grade}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

      <section id="contact" className="min-h-screen flex items-center px-6 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-[#0B0B0E]/90 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded">
            <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-3">
              07 // INITIATE CONNECTION
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight">
              Let&apos;s Build Something.
            </h2>
            <p className="mt-4 font-sans text-zinc-400 max-w-2xl text-base">
              Available for entry-level Software Development Engineer (SDE), Java Developer, or Spring Boot Developer roles.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-[#FF4D00] text-white font-medium rounded hover:bg-[#e04400] transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-zinc-700 text-white rounded hover:border-[#FF4D00] transition"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-zinc-700 text-white rounded hover:border-[#FF4D00] transition"
              >
                <Mail className="w-4 h-4" />
                Email ({personal.email})
              </a>
              <button
                onClick={() => setShowResume(true)}
                className="flex items-center gap-2 px-5 py-3 bg-white text-black font-medium rounded hover:bg-zinc-200 transition"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
