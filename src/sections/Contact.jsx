import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import contactVisual from "../assets/contact.svg";

function Contact() {
  return (
    <section id="contact" className="visual-section contact-section">
      <div className="contact-glow" />
      <div className="mx-auto max-w-7xl">
        <SectionTitle number="07 / CONTACT" title="Let's build something that moves." description="I'm open to learning, collaboration and opportunities that help me grow as a developer." />
        <motion.div className="section-visual-banner contact-banner"><motion.img src={contactVisual} alt="Connection path illustration" initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .9 }} /></motion.div>
        <motion.div className="contact-hero" initial={{ opacity: 0, scale: .97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .8 }}>
          <div><p className="eyebrow">START A CONVERSATION</p><h3>Have an idea?<br /><em>Let's talk.</em></h3></div>
          <a href="mailto:manalhussain409@gmail.com" className="contact-mail">manalhussain409@gmail.com <span>↗</span></a>
        </motion.div>
        <div className="contact-links">
          <a href="https://github.com/ManalHussain-dev/" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>ManalHussain-dev ↗</strong></a>
          <a href="https://www.linkedin.com/in/manalhussain-dev/" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>Manal Hussain ↗</strong></a>
          <a href="mailto:manalhussain409@gmail.com"><span>EMAIL</span><strong>manalhussain409@gmail.com ↗</strong></a>
        </div>
        <div className="contact-end"><span>MANAL HUSSAIN · FULL-STACK DEVELOPER IN PROGRESS</span><span>2026 / 2028</span></div>
      </div>
    </section>
  );
}
export default Contact;
