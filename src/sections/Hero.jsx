import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect } from "react";
import developer from "../assets/developer.svg";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 18 });
  const visualX = useTransform(smoothX, [-600, 600], [-22, 22]);
  const visualY = useTransform(smoothY, [-400, 400], [-18, 18]);

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="hero-v2">
      <div className="hero-v2-grid" />
      <div className="hero-v2-noise" />
      <motion.div className="hero-v2-glow" animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.7, 0.45] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

      <div className="hero-v2-wrap">
        <motion.div className="hero-v2-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11 } } }}>
          <motion.div className="hero-kicker" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <span className="status-dot" /> AVAILABLE FOR LEARNING & COLLABORATION
          </motion.div>

          <motion.p className="hero-mini" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            HELLO, I'M
          </motion.p>

          <motion.h1 className="hero-name" variants={{ hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0 } }}>
            MANAL <span>HUSSAIN</span>
          </motion.h1>

          <motion.p className="hero-role" variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}>
            <span>Full-Stack Developer</span> in progress — building interactive interfaces,
            APIs and practical software while studying Software Engineering.
          </motion.p>

          <motion.div className="hero-v2-actions" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <a href="#projects" className="neon-button">EXPLORE PROJECTS <span>↗</span></a>
            <a href="https://github.com/ManalHussain-dev/" target="_blank" rel="noreferrer" className="ghost-button">GITHUB <span>↗</span></a>
          </motion.div>

          <motion.div className="hero-stats" variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            <div><strong>3.55</strong><span>CGPA</span></div>
            <div><strong>06</strong><span>SEMESTER</span></div>
            <div><strong>2028</strong><span>GRADUATION</span></div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-character" style={{ x: visualX, y: visualY }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <motion.img src={developer} alt="Illustrated developer working at a laptop" animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="orbit-label label-react" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>React</motion.div>
          <motion.div className="orbit-label label-node" animate={{ y: [0, 9, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>Node.js</motion.div>
          <motion.div className="orbit-label label-java" animate={{ y: [0, -7, 0] }} transition={{ duration: 5.2, repeat: Infinity }}>Java</motion.div>
        </motion.div>
      </div>

      <div className="hero-v2-bottom">
        <span>COMSATS UNIVERSITY ISLAMABAD · SAHIWAL CAMPUS</span>
        <span>BS SOFTWARE ENGINEERING · 2024—2028</span>
        <span>SCROLL ↓</span>
      </div>
    </section>
  );
}

export default Hero;
