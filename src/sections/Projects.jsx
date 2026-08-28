import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import shopSmart from "../assets/project-shopsmart.jpg";
import cineReel from "../assets/project-cinereel.jpg";
import weather from "../assets/project-weather.jpg";
import deadline from "../assets/project-deadline.jpg";

const projects = [
  { number: "01", title: "ShopSmart AI", type: "E-COMMERCE", description: "A modern commerce experience with AI assistance, authentication, filtering, cart, wishlist and checkout flows.", technologies: ["React", "TypeScript", "Tailwind", "Node.js", "Gemini AI"], github: "https://github.com/ManalHussain-dev/E-COMMERCE", image: shopSmart, featured: true },
  { number: "02", title: "CineReel", type: "MOVIE DISCOVERY", description: "A cinema-inspired movie discovery experience with search, trending titles and detailed movie information powered by TMDB.", technologies: ["React", "Vite", "Express", "TMDB API"], github: "https://github.com/ManalHussain-dev/cinereel", image: cineReel },
  { number: "03", title: "SkyPulse", type: "WEATHER + AI", description: "A rich weather dashboard combining forecasts, air quality, hourly trends, radar information and AI-powered assistance.", technologies: ["React", "TypeScript", "Tailwind", "Express", "AI"], github: "https://github.com/ManalHussain-dev/Weather", image: weather },
  { number: "04", title: "Deadline Desk", type: "REST API", description: "A backend-focused project exploring authentication, server architecture, environment configuration and MongoDB integration.", technologies: ["Node.js", "Express", "MongoDB", "REST API"], github: "https://github.com/ManalHussain-dev/Dead-line-Desk", image: deadline },
];

function Projects() {
  return (
    <section id="projects" className="visual-section projects-section">
      <div className="project-backdrop" />
      <div className="mx-auto max-w-7xl">
        <div className="projects-topline">
          <span>04 / SELECTED WORK</span>
          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.4, repeat: Infinity }}>● LIVE ARCHIVE</motion.span>
        </div>
        <SectionTitle number="04 / PROJECTS" title="Software you can actually see." description="A visual collection of projects I've built while turning university concepts and development experiments into working interfaces, APIs and applications." />
        <div className="project-list">{projects.map((project, index) => <ProjectCard key={project.number} {...project} />)}</div>
        <motion.div className="projects-footer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
          <span>THE CODE CONTINUES</span>
          <a href="https://github.com/ManalHussain-dev/" target="_blank" rel="noreferrer">VIEW ALL REPOSITORIES <b>↗</b></a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
