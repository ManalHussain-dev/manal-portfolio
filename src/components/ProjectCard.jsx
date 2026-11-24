import { motion } from "motion/react";
import { ArrowUpRight, Eye } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

function ProjectCard({ project, onSelectProject }) {
  const { number, title, description, technologies, type, github, image, statusBadge } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#0e0d1b] to-[#07060f] p-5 sm:p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_15px_45px_-10px_rgba(139,92,246,0.2)]"
    >
      {/* Background ambient glow inside card */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-600/10 blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:bg-violet-600/20" />

      {/* Visual Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
        <img
          src={image}
          alt={`${title} project preview`}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d1b] via-transparent to-transparent opacity-80" />

        {/* Floating Top Pill */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-violet-300 bg-black/60 px-2.5 py-1 rounded-full border border-violet-500/20 backdrop-blur-md">
            {number} / {type}
          </span>
          <span className="font-mono text-[10px] text-zinc-300 bg-black/60 px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-md">
            {statusBadge}
          </span>
        </div>

        {/* Quick View Button on Image Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px]">
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-2 rounded-full border border-violet-400 bg-violet-600/80 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-105"
          >
            <Eye className="h-4 w-4" />
            <span>Read Case Study</span>
          </button>
        </div>
      </div>

      {/* Content Details */}
      <div className="relative z-10 mt-5 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-violet-300 transition-colors">
            {title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>

        <div className="mt-6">
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pb-5 border-b border-white/[0.06]">
            {technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 5 && (
              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[11px] font-mono text-zinc-500">
                +{technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-600/15 px-4 py-2 text-xs font-semibold text-violet-200 transition-all hover:bg-violet-600/25 hover:border-violet-400 hover:text-white"
            >
              <span>Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            ) : (
              <span className="font-mono text-[10px] text-zinc-600">
                [Concept Prototype]
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
