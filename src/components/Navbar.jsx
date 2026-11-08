import { useScrollStore } from "../three/scrollStore";
import { personal } from "../data/personal";

export default function Navbar() {
  const progress = useScrollStore((s) => s.progress);
  const activeStage = useScrollStore((s) => s.activeStage);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#0B0B0E]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#hero" className="font-display font-bold tracking-tight text-white text-sm">
            {personal.name.toUpperCase()}
          </a>
          <span className="hidden sm:inline-block font-mono text-[11px] text-[#FF4D00] px-2 py-0.5 bg-[#FF4D00]/10 border border-[#FF4D00]/30 rounded">
            {activeStage}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
          <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#skills" className="hover:text-white transition-colors">TECH STACK</a>
          <a href="#education" className="hover:text-white transition-colors">EDUCATION</a>
          <a href="#contact" className="text-[#FF4D00] hover:underline">CONTACT</a>
        </nav>

        <div className="font-mono text-xs text-zinc-400 tabular-nums">
          CAM_TIMELINE: <span className="text-white font-semibold">{Math.round(progress * 100)}%</span>
        </div>
      </div>

      <div className="h-[2px] w-full bg-zinc-900">
        <div
          className="h-full bg-[#FF4D00] transition-all duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </header>
  );
}
