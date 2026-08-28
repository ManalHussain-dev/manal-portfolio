import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import skillsVisual from "../assets/skills.svg";

const groups = [
  { title: "Languages", items: ["Java", "C++", "JavaScript", "SQL", "HTML", "CSS"] },
  { title: "Frontend", items: ["React", "Tailwind CSS", "Vite"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "SQL Server"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "NetBeans", "Postman"] },
  { title: "Coursework", items: ["DSA", "Networking", "IoT", "Cryptography", "Software Engineering"] },
];

function Skills() {
  return (
    <section id="skills" className="visual-section skills-section">
      <div className="skills-radial" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="03 / SKILLS" title="A toolkit that keeps evolving." description="Technologies and tools I've worked with through coursework, APIs, backend experiments and personal projects." />
        <div className="section-visual-banner skills-banner"><motion.img src={skillsVisual} alt="Full-stack skills orbit illustration" initial={{ opacity: 0, scale: .95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .9 }} /></div>
        <div className="skills-layout">
          <motion.div className="skill-orbit" initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .9 }}>
            <div className="orbit-line orbit-line-a" /><div className="orbit-line orbit-line-b" /><div className="orbit-core"><span>BUILD</span><strong>+</strong><span>LEARN</span></div>
            <span className="skill-float sf-1">React</span><span className="skill-float sf-2">Java</span><span className="skill-float sf-3">Node.js</span><span className="skill-float sf-4">MongoDB</span><span className="skill-float sf-5">SQL</span>
          </motion.div>
          <div className="skill-groups">
            {groups.map((group, index) => (
              <motion.article key={group.title} className="skill-group" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }}>
                <div className="skill-group-head"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                <div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
