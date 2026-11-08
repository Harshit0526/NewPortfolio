import { personal } from "../data/personal";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-[#0B0B0E]/75 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{personal.location}</span>
          </div>

          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
            PORTFOLIO // {personal.name}
          </p>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {personal.heroTitle}
          </h1>

          <p className="mt-5 font-sans text-zinc-300 text-base sm:text-lg leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#FF4D00] text-white font-medium rounded hover:bg-[#e04400] transition"
            >
              <Github className="w-4 h-4" />
              {personal.githubHandle}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/90 border border-zinc-700 text-zinc-200 rounded hover:border-[#FF4D00] transition"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/90 border border-zinc-700 text-zinc-200 rounded hover:border-[#FF4D00] transition"
            >
              <Mail className="w-4 h-4" />
              {personal.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
