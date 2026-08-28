import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import journeyVisual from "../assets/journey.svg";

const journey = [
  ["01", "Learn", "Understand the fundamentals instead of only memorizing syntax.", "01"],
  ["02", "Build", "Use projects to turn concepts into practical applications.", "02"],
  ["03", "Debug", "Treat errors as part of the development process and learn from them.", "03"],
  ["04", "Improve", "Refactor, explore better approaches and keep moving forward.", "04"],
];

function Journey() {
  return (
    <section id="journey" className="visual-section journey-section">
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="05 / JOURNEY" title="Learn. Build. Debug. Improve." description="The mindset I bring to every new technology, assignment and project." />
        <div className="section-visual-banner journey-banner"><motion.img src={journeyVisual} alt="Learn build debug improve journey illustration" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .9 }} /></div>
        <div className="journey-track"><div className="journey-line" />{journey.map(([number, title, text, index], i) => (
          <motion.article key={number} className="journey-card" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .1 }}>
            <span className="journey-number">{number}</span><div className="journey-icon">{index}</div><h3>{title}</h3><p>{text}</p><span className="journey-arrow">↗</span>
          </motion.article>
        ))}</div>
      </div>
    </section>
  );
}
export default Journey;
