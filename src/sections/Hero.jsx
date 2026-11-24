import { motion } from "motion/react";
import { ArrowDown, Terminal, Sparkles, Code2, Cpu } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons";
import heroImage from "../assets/hero-developer.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center cyber-grid"
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/15 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-[-100px] w-[450px] h-[450px] bg-gradient-to-br from-purple-600/10 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Text & Content (Cols 7) */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-violet-500/25 bg-violet-950/30 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.12)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] font-medium tracking-wider text-violet-200 uppercase">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08]"
            >
              Building digital experiences with{" "}
              <span className="gradient-text font-black">code & creativity.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed"
            >
              I'm a developer passionate about creating modern web applications, intuitive
              interfaces, and technology-driven solutions that turn ideas into meaningful digital
              experiences.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary Action Button */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full border border-violet-500/40 bg-gradient-to-r from-violet-600/30 via-purple-600/25 to-indigo-600/30 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-all duration-300 hover:border-violet-400 hover:bg-violet-600/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.4)] active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              {/* Secondary Action Button */}
              <a
                href="https://github.com/ManalHussain-dev/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                <GithubIcon className="h-4 w-4" />
                <span>View GitHub</span>
              </a>
            </motion.div>

            {/* Small developer-themed labels / terminal details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[11px] text-zinc-500 border-t border-white/[0.06] pt-5 w-full"
            >
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Terminal className="h-3.5 w-3.5 text-violet-400" />
                <span>stack:</span>
                <span className="text-zinc-300">React • Node.js • Flutter</span>
              </div>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Code2 className="h-3.5 w-3.5 text-cyan-400" />
                <span>role:</span>
                <span className="text-zinc-300">Full-Stack Explorer</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Artwork & Floating Tech Badges (Cols 5) */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px]"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-violet-600/30 via-purple-600/20 to-cyan-500/30 blur-xl opacity-70 animate-pulse" />

              {/* Main Artwork Container */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#131122] to-[#090813] shadow-2xl backdrop-blur-xl">
                
                {/* Image Window Bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-black/40">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider text-zinc-400">
                    dev-workspace.tsx
                  </span>
                  <Sparkles className="h-3.5 w-3.5 text-violet-400" />
                </div>

                {/* Developer Illustration */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a14]">
                  <img
                    src={heroImage}
                    alt="Manal - Developer working on laptop with purple ambient lighting"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Inner subtle gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090813] via-transparent to-transparent opacity-60" />
                </div>

                {/* Embedded Terminal Status Bar */}
                <div className="border-t border-white/10 bg-black/60 px-4 py-3">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-violet-300">
                      <span className="text-zinc-500">const</span> developer = <span className="text-emerald-400">"Manal"</span>;
                    </span>
                    <span className="text-zinc-500">SE-06</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 rounded-2xl border border-violet-500/30 bg-[#0c0c1a]/85 px-3.5 py-2 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7]" />
                  <span className="font-mono text-xs font-medium text-white">Full-Stack</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -left-4 rounded-2xl border border-cyan-500/30 bg-[#0c0c1a]/85 px-3.5 py-2 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-300">
                  <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Always Building</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 sm:mt-24 flex flex-col items-center justify-center gap-2"
        >
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-zinc-500 hover:text-violet-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll to explore</span>
            <div className="h-7 w-4 rounded-full border border-white/20 p-1 flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-violet-400"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
