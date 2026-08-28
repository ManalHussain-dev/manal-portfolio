import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import directionVisual from "../assets/direction.svg";

const goals = [
  ["NOW", "Strengthen full-stack fundamentals", "Keep improving with React, Node.js, Spring Boot, databases and software engineering practices."],
  ["NEXT", "Gain practical experience", "Prepare for internships and opportunities where I can contribute to real development teams."],
  ["2028", "Graduate & grow", "Complete my BS Software Engineering and keep growing as a professional full-stack developer."],
];

function Goals() {
  return (
    <section id="direction" className="visual-section goals-section">
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="06 / DIRECTION" title="Where I'm heading." description="The goal is simple: turn academic knowledge into practical engineering ability." />
        <div className="section-visual-banner direction-banner"><motion.img src={directionVisual} alt="Career direction and full-stack growth illustration" initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .9 }} /></div>
        <div className="goal-stage">
          <div className="goal-big-word">NEXT</div>
          <div className="goal-cards">{goals.map(([label, title, text], index) => <motion.article key={label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -7 }}><span>{label}</span><h3>{title}</h3><p>{text}</p><i>0{index + 1} ↗</i></motion.article>)}</div>
        </div>
      </div>
    </section>
  );
}
export default Goals;
