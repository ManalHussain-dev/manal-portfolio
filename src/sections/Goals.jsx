import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const goals = [
  {
    label: "NOW",
    title: "Strengthen full-stack fundamentals",
    text: "Continue developing with React, Node.js, Spring Boot, databases, and strong software engineering practices.",
  },
  {
    label: "NEXT",
    title: "Gain practical experience",
    text: "Prepare for internships and opportunities where I can contribute to real development teams.",
  },
  {
    label: "2028",
    title: "Graduate & grow",
    text: "Complete my BS Software Engineering and continue growing as a professional full-stack developer.",
  },
];

function Goals() {
  return (
    <section className="section-pad border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          number="06 / DIRECTION"
          title="Where I'm heading."
          description="The goal is to turn academic knowledge into practical engineering ability."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-white/30">
                {goal.label}
              </span>

              <h3 className="mt-10 text-xl font-bold">
                {goal.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                {goal.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Goals;