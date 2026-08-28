import { motion } from "motion/react";

function SectionTitle({ number, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="mb-14"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-xs text-white/30">{number}</span>
        <span className="h-px w-10 bg-white/20" />
      </div>

      <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;