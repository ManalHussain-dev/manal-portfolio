import { motion } from "motion/react";

function SectionTitle({ number, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 lg:mb-20 ${isCenter ? "mx-auto text-center max-w-3xl" : "max-w-3xl"}`}
    >
      {/* Label & Number */}
      <div className={`mb-4 inline-flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400/80">
          {number}
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-violet-500/60 to-transparent" />
      </div>

      {/* Main Title */}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
        {title}
      </h2>

      {/* Subtext */}
      {description && (
        <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
