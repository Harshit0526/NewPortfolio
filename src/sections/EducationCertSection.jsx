import { education } from "../data/education";
import { certifications } from "../data/certifications";

export default function EducationCertSection() {
  return (
    <section id="education" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            05 // EDUCATION
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Academic Background
          </h2>

          {education.map((edu) => (
            <div key={edu.id} className="space-y-2">
              <div className="font-display text-lg font-semibold text-white">
                {edu.institution}
              </div>
              <div className="font-sans text-sm text-zinc-300">{edu.degree}</div>
              <div className="pt-3 flex flex-wrap gap-3 font-mono text-xs">
                <span className="px-3 py-1 bg-[#FF4D00]/15 text-[#FF4D00] border border-[#FF4D00]/30 rounded">
                  {edu.score}
                </span>
                <span className="px-3 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            06 // CERTIFICATIONS
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Verified Training Credential
          </h2>

          {certifications.map((cert) => (
            <div key={cert.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-white">{cert.title}</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                  Grade: {cert.grade}
                </span>
              </div>
              <div className="font-mono text-xs text-zinc-400">
                {cert.issuer} • {cert.date}
              </div>
              <div className="font-mono text-xs text-white bg-zinc-900/90 border border-zinc-800 px-3 py-2 rounded">
                Certificate ID: <span className="text-[#FF4D00]">{cert.certificateId}</span>
              </div>

              <div className="mt-4 p-4 border border-dashed border-zinc-800 rounded bg-zinc-950/50 font-mono text-[11px] text-zinc-500 space-y-1">
                <div>[EMPTY STATE] Certificate Preview Image: Not provided</div>
                <div>[EMPTY STATE] Public Verification URL: Not provided in resume</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
