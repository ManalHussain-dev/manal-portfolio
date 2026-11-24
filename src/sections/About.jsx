import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { BookOpen, Code2, Compass, Layers, CheckCircle2, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Foundation",
    description:
      "Pursuing BS Software Engineering at COMSATS University Islamabad, Sahiwal Campus (6th Semester).",
    tag: "COMSATS CUI",
  },
  {
    icon: Code2,
    title: "Hands-on Development",
    description:
      "Building practical applications from scratch to master modern web architectures, state, and APIs.",
    tag: "Practical Work",
  },
  {
    icon: Layers,
    title: "Full-Stack Vision",
    description:
      "Bridging intuitive, polished user interfaces with structured backend logic and scalable data models.",
    tag: "End-to-End",
  },
];

const learningMilestones = [
  {
    period: "2024",
    title: "Core Programming Foundations",
    detail: "Object-oriented concepts, C++, Java, and algorithms.",
  },
  {
    period: "2025",
    title: "Systems, Databases & Networks",
    detail: "Relational modeling (MySQL), networking fundamentals, and software design principles.",
  },
  {
    period: "2026",
    title: "Modern Web & Mobile Stacks",
    detail: "Building production-grade applications with React, Node.js, Express, MongoDB, and Flutter.",
  },
];

function About() {
  return (
    <section id="about" className="section-pad border-t border-white/[0.05] relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          number="01 / ABOUT"
          title="A little about me."
          description="I'm passionate about technology, problem-solving, and building applications that are both functional and visually engaging. My development journey involves exploring frontend interfaces, backend logic, databases, and application development. I enjoy learning through real projects and transforming ideas into working products."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & Highlight Cards (Cols 7) */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Context Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel rounded-3xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Compass className="h-5 w-5 text-violet-400" />
                <span>The Engineering Philosophy</span>
              </h3>
              
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-relaxed">
                Rather than treating software engineering as theoretical exercises, I believe the
                most impactful learning comes from creating solutions that solve real problems.
                Whether it's orchestrating complex data flows in <strong className="text-white font-medium">ReviewPilot</strong>,
                refining productivity workflows in <strong className="text-white font-medium">Deadline Desk</strong>, or crafting
                fluid client experiences, every project is an opportunity to raise the bar on code quality and user experience.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 pt-4 border-t border-white/[0.06]">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                  <CheckCircle2 className="h-3 w-3" /> Clean Code & Structure
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                  <CheckCircle2 className="h-3 w-3" /> Thoughtful UI/UX
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                  <CheckCircle2 className="h-3 w-3" /> Continuous Learning
                </span>
              </div>
            </motion.div>

            {/* 3 Highlight Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-[10px] tracking-wider text-zinc-500 uppercase">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="mt-4 text-sm font-bold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Code Snapshot & Learning Highlights (Cols 5) */}
          <div className="space-y-6 lg:col-span-5">
            
            {/* Developer Snapshot Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel rounded-3xl p-6 sm:p-7 overflow-hidden relative"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                  <span className="font-mono text-xs font-semibold text-white">
                    developer-profile.json
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">JSON</span>
              </div>

              <div className="mt-4 font-mono text-xs leading-relaxed text-zinc-300">
                <p className="text-zinc-500">&#123;</p>
                <p className="pl-4">
                  <span className="text-violet-400">"name"</span>: <span className="text-emerald-300">"Manal Hussain"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-violet-400">"degree"</span>: <span className="text-emerald-300">"BS Software Engineering"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-violet-400">"institution"</span>: <span className="text-emerald-300">"COMSATS CUI Sahiwal"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-violet-400">"current_term"</span>: <span className="text-amber-300">"Semester 06"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-violet-400">"mindset"</span>: <span className="text-emerald-300">"Learn by building real products"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-violet-400">"passions"</span>: [
                </p>
                <p className="pl-8 text-cyan-300">
                  "Full-Stack Web", "API Architecture", "Mobile Dev"
                </p>
                <p className="pl-4">]</p>
                <p className="text-zinc-500">&#125;</p>
              </div>
            </motion.div>

            {/* Concise Learning Journey Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel rounded-3xl p-6 sm:p-7"
            >
              <h4 className="text-sm font-bold uppercase tracking-wider text-violet-300 font-mono mb-5 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Learning Milestones</span>
              </h4>

              <div className="space-y-4">
                {learningMilestones.map((item) => (
                  <div key={item.period} className="flex gap-4 items-start">
                    <span className="font-mono text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded">
                      {item.period}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-zinc-400 leading-normal">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
