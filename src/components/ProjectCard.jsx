import { motion } from "motion/react";

function ProjectCard({ number, title, description, technologies, type, github, image, featured = false }) {
  return (
    <motion.article
      className={`project-showcase ${featured ? "project-featured" : ""}`}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="project-visual">
        <div className="project-browser">
          <span /><span /><span />
          <b>{title.toLowerCase().replaceAll(" ", "-")}.dev</b>
        </div>

        <motion.img
          src={image}
          alt={`${title} project preview`}
          whileHover={{ scale: 1.055 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        />

        <div className="project-image-fade" />
        <div className="project-scanline" />
        <div className="project-shine" />
        <span className="project-index">{number}</span>
        <span className="project-kind">{type}</span>

        <motion.div
          className="project-hover-label"
          initial={{ opacity: 0, y: 12 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          VIEW SOURCE ↗
        </motion.div>
      </div>

      <div className="project-info">
        <div className="project-heading-row">
          <div>
            <p className="eyebrow">FEATURED PROJECT / {number}</p>
            <h3>{title}</h3>
          </div>
          <span className="project-status"><i /> BUILT</span>
        </div>

        <p className="project-description">{description}</p>

        <div className="project-bottom">
          <div className="project-tech">
            {technologies.map((item) => <span key={item}>{item}</span>)}
          </div>
          <a href={github} target="_blank" rel="noreferrer" className="project-github">
            GITHUB <span>↗</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
