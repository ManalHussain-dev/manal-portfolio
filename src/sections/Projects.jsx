import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projectsData } from "../data/projectsData";
import { FolderGit2 } from "lucide-react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-pad border-t border-white/[0.05] relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          number="03 / FEATURED PROJECTS"
          title="Engineered solutions & systems."
          description="A curated showcase of applications highlighting full-stack development, multi-protocol API integrations, database design, and responsive product interfaces."
        />

        {/* Project Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Modal Case Study Detail Experience */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* GitHub Footnote */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-white/[0.07] bg-gradient-to-r from-violet-950/20 via-black to-indigo-950/20 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <FolderGit2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Explore More Code on GitHub</h4>
              <p className="text-xs text-zinc-400">Discover additional experimentations, utilities, and backend repositories.</p>
            </div>
          </div>

          <a
            href="https://github.com/ManalHussain-dev/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/20 px-5 py-2.5 text-xs font-semibold text-violet-200 transition-all hover:bg-violet-600/30 hover:border-violet-400 hover:text-white shrink-0"
          >
            <span>Visit @ManalHussain-dev</span>
            <span className="font-mono">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
