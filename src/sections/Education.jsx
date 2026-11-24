import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";

const milestones = [
  {
    year: "2024",
    title: "Started BS Software Engineering",
    text: "Began my academic journey at COMSATS University Islamabad, Sahiwal Campus.",
  },
  {
    year: "2025",
    title: "Building Technical Foundations",
    text: "Worked with Java, C++, databases, data structures, networking, and software engineering concepts.",
  },
  {
    year: "2026",
    title: "Moving Toward Full-Stack Development",
    text: "Expanding into React, Node.js, Express, Spring Boot, MySQL, and MongoDB through practical projects.",
  },
  {
    year: "2028",
    title: "Expected Graduation",
    text: "Complete my BS Software Engineering and take the next step into professional software development.",
  },
];

function Education() {
  return (
    <section className="section-pad border-y border-white/5">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          number="02 / EDUCATION"
          title="The journey behind the code."
          description="My academic path has been the foundation for everything I'm building today."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 sm:block" />

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:pl-10"
              >
                <div className="relative">
                  <span className="font-mono text-sm text-white/40">
                    {milestone.year}
                  </span>

                  <span className="absolute -left-[35px] top-1.5 hidden h-2.5 w-2.5 rounded-full border border-white/40 bg-[#050505] sm:block" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    {milestone.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/45">
                    {milestone.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-white/30">
              DEGREE
            </p>
            <p className="mt-2 font-semibold">
              BS Software Engineering
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-white/30">
              CURRENT
            </p>
            <p className="mt-2 font-semibold">
              6th Semester
            </p>
            <p className="mt-1 text-xs text-white/35">
              CGPA 3.55
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <p className="font-mono text-xs text-white/30">
              UNIVERSITY
            </p>
            <p className="mt-2 font-semibold">
              COMSATS University Islamabad
            </p>
            <p className="mt-1 text-xs text-white/35">
              Sahiwal Campus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;