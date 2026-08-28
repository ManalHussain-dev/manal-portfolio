import { motion, useScroll, useTransform } from "motion/react";
import developer from "../assets/developer.svg";
import SectionTitle from "../components/SectionTitle";

const stats = [
  ["3.55", "CURRENT CGPA"],
  ["06", "SEMESTER"],
  ["2028", "EXPECTED GRADUATION"],
  ["04", "FEATURED PROJECTS"],
];

const principles = [
  ["01", "Learn", "Strong foundations in programming, databases, software engineering and problem solving."],
  ["02", "Build", "Turning university concepts into practical applications, APIs and interactive websites."],
  ["03", "Improve", "Debugging, refactoring and continuously finding cleaner ways to build software."],
];

function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.05, 0.3], [60, -40]);

  return (
    <section id="about" className="visual-section about-section">
      <div className="section-orb section-orb-purple" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="01 / ABOUT" title="Building with curiosity. Growing with every project." description="I'm Manal Hussain, a Software Engineering student at COMSATS University Islamabad, Sahiwal Campus. My focus is becoming a capable full-stack developer by connecting what I learn in university with software I can actually build." />

        <div className="about-stage">
          <motion.div style={{ y }} className="about-visual-wrap">
            <div className="about-ring about-ring-one" />
            <div className="about-ring about-ring-two" />
            <img src={developer} alt="Illustrated developer working at a laptop" className="about-developer" />
            <div className="about-code-card">
              <span>currently_building</span>
              <strong>full-stack experiences</strong>
              <i>01 → 04</i>
            </div>
          </motion.div>

          <div className="about-copy">
            <p className="eyebrow">WHO I AM</p>
            <h3>Not finished. <em>Just getting started.</em></h3>
            <p className="about-lead">I enjoy the part of development where an idea becomes a working interface, an API, or a complete application. Every project gives me another reason to learn something new.</p>
            <div className="stat-grid">
              {stats.map(([value, label], index) => (
                <motion.div key={label} className="stat-tile" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                  <strong>{value}</strong><span>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="principle-grid">
          {principles.map(([number, title, text], index) => (
            <motion.article key={number} className="principle-card" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -7 }}>
              <span>{number}</span><h4>{title}</h4><p>{text}</p>
              <div className="card-arrow">↗</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
