import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  Layers,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

function ProjectModal({ project, isOpen, onClose }) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-violet-500/25 bg-[#090812] shadow-[0_20px_70px_rgba(0,0,0,0.85)]"
        >
          {/* Header Image & Close Button */}
          <div className="relative aspect-[16/9] max-h-72 w-full overflow-hidden bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090812] via-[#090812]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090812]/80 via-transparent to-transparent" />

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Title Overlay in Banner */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-violet-400">
                  {project.number} / {project.type}
                </span>
                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-mono text-violet-300">
                  {project.statusBadge}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-zinc-300 max-w-xl">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Quick Actions & Tech Stack Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/20 px-4 py-2 text-xs font-semibold text-violet-200 transition-all hover:bg-violet-600/30 hover:border-violet-400"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>View Repository</span>
                </a>
              ) : (
                <span className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs text-zinc-500 font-mono">
                  Repository: Prototype Concept
                </span>
              )}
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="h-4 w-4 text-violet-400" />
                <span>Overview</span>
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                {caseStudy.overview}
              </p>
            </div>

            {/* Problem & Solution Two-Column Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] p-5">
                <h4 className="text-sm font-bold text-rose-300 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>The Problem</span>
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                  {caseStudy.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
                <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  <span>The Solution</span>
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-violet-400" />
                <span>Key Features & Capabilities</span>
              </h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {caseStudy.keyFeatures.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 text-xs leading-relaxed text-zinc-300"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Development Challenges & What I Learned */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-cyan-400" />
                  <span>Development Challenges</span>
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                  {caseStudy.challenges}
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-black/40 p-5">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-amber-400" />
                  <span>What I Learned</span>
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                  {caseStudy.whatILearned}
                </p>
              </div>
            </div>

            {/* Modal Bottom Close Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/15 bg-white/[0.05] px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/[0.1]"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ProjectModal;
