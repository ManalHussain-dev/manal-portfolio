import { motion, useScroll, useSpring, useTransform } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import educationVisual from "../assets/education.svg";

const milestones = [
  ["2024", "Started BS Software Engineering", "Began my academic journey at COMSATS University Islamabad, Sahiwal Campus."],
  ["2025", "Built technical foundations", "Worked with Java, C++, databases, data structures, networking and software engineering concepts."],
  ["2026", "Moving toward full-stack development", "Expanding into React, Node.js, Express, Spring Boot, MySQL and MongoDB through practical projects."],
  ["2028", "Expected graduation", "Complete my BS Software Engineering and take the next step into professional software development."],
];

function Education() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(useTransform(scrollYProgress, [0.22, 0.58], [0, 1]), { stiffness: 90, damping: 25 });

  return (
    <section id="education" className="visual-section education-section">
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="02 / EDUCATION" title="The journey behind the code." description="A timeline of the path that brought me from university fundamentals to practical full-stack development." />
        <div className="section-visual-banner"><motion.img src={educationVisual} alt="Animated learning trajectory illustration" initial={{ opacity: 0, scale: .96, y: 25 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .9 }} /></div>
        <div className="timeline-shell">
          <div className="timeline-track"><motion.div className="timeline-progress" style={{ scaleY: progress }} /></div>
          <div className="timeline-list">
            {milestones.map(([year, title, text], index) => (
              <motion.article key={year} className="timeline-item" initial={{ opacity: 0, x: index % 2 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
                <div className="timeline-year">{year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="education-strip">
          <div><span>DEGREE</span><strong>BS Software Engineering</strong></div>
          <div><span>UNIVERSITY</span><strong>COMSATS University Islamabad</strong><small>Sahiwal Campus</small></div>
          <div><span>CURRENT</span><strong>6th Semester · CGPA 3.55</strong></div>
        </div>
      </div>
    </section>
  );
}

export default Education;
