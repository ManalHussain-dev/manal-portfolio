import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Direction", href: "#direction" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-v2">
      <nav className="nav-v2-inner">
        <a href="#home" className="nav-brand">MANAL<span>.</span></a>
        <div className="nav-links">
          {links.map((link) => <a key={link.name} href={link.href}>{link.name}</a>)}
        </div>
        <a href="#contact" className="nav-connect">LET'S CONNECT <span>↗</span></a>
        <button type="button" onClick={() => setOpen(!open)} className="nav-menu" aria-label="Toggle menu">{open ? "×" : "☰"}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="nav-mobile">
          {links.map((link) => <a key={link.name} href={link.href} onClick={() => setOpen(false)}>{link.name}</a>)}
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
export default Navbar;
