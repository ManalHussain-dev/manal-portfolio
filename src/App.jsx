import { motion, useScroll, useSpring } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Goals from "./sections/Goals";
import Contact from "./sections/Contact";

function App() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="site-shell">
      {/* Global scroll progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
      />

      {/* Ambient background */}
      <div className="ambient-background">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-orb ambient-orb-three" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Journey />
        <Goals />
        <Contact />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/30">
        © {new Date().getFullYear()} Manal Hussain. Built with React.
      </footer>
    </div>
  );
}

export default App;