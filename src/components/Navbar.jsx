import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scroll spy
      const sections = links.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 transition-all duration-300">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border transition-all duration-300 px-4 py-2.5 sm:px-6 sm:py-3 ${
          scrolled
            ? "border-white/10 bg-[#090912]/85 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            : "border-white/5 bg-black/40 backdrop-blur-xl"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1.5 font-display text-sm font-bold tracking-wider text-white transition-colors"
        >
          <span>MANAL</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7] transition-transform group-hover:scale-125" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 sm:gap-2 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-violet-600/20 border border-violet-500/30"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Highlighted "Let's Talk" CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-violet-500/35 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-indigo-600/20 px-4 py-1.5 text-xs font-semibold text-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 hover:border-violet-400 hover:bg-violet-600/30 hover:text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] active:scale-95"
        >
          <span>Let's Talk</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-violet-300" />
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/20 transition-all md:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-violet-500/20 bg-[#0a0a14]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-violet-600/15 text-violet-300 border border-violet-500/25"
                        : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl border border-violet-500/40 bg-gradient-to-r from-violet-600/25 to-indigo-600/25 py-3 text-sm font-semibold text-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
