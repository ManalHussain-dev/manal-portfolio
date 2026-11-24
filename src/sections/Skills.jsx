import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import {
  Layout,
  Server,
  Database,
  Smartphone,
  Wrench,
  Code2,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  { id: "all", name: "All Technologies" },
  { id: "frontend", name: "Frontend", icon: Layout },
  { id: "backend", name: "Backend", icon: Server },
  { id: "databases", name: "Databases", icon: Database },
  { id: "programming", name: "Programming & Apps", icon: Smartphone },
  { id: "tools", name: "Tools", icon: Wrench },
];

const skillsData = [
  // Frontend
  { name: "HTML5", category: "frontend", description: "Semantic markup & modern standards" },
  { name: "CSS3", category: "frontend", description: "Responsive layouts, animations & flex/grid" },
  { name: "JavaScript", category: "frontend", description: "ES6+, asynchronous programming & DOM" },
  { name: "React", category: "frontend", description: "Component state, hooks & virtual DOM" },
  { name: "Bootstrap", category: "frontend", description: "Responsive component frameworks" },
  { name: "jQuery", category: "frontend", description: "Legacy scripting & DOM utilities" },
  { name: "Tailwind CSS", category: "frontend", description: "Utility-first modern styling" },

  // Backend
  { name: "Node.js", category: "backend", description: "Asynchronous runtime environments" },
  { name: "Express.js", category: "backend", description: "Server routing, middleware & handlers" },
  { name: "PHP", category: "backend", description: "Server-side scripting & MVC architecture" },
  { name: "Laravel", category: "backend", description: "Modern PHP web application framework" },
  { name: "REST APIs", category: "backend", description: "Standardized HTTP endpoints & JSON" },

  // Databases
  { name: "MySQL", category: "databases", description: "Relational modeling, queries & indexing" },
  { name: "MongoDB", category: "databases", description: "NoSQL document collections & aggregation" },
  { name: "Firebase", category: "databases", description: "Realtime data, auth & cloud storage" },

  // Programming & App Development
  { name: "Java", category: "programming", description: "Object-oriented software & data structures" },
  { name: "C++", category: "programming", description: "Memory concepts, algorithms & speed" },
  { name: "Dart", category: "programming", description: "Type-safe language for Flutter apps" },
  { name: "Flutter", category: "programming", description: "Cross-platform mobile UI engineering" },

  // Tools
  { name: "Git", category: "tools", description: "Version control & branch management" },
  { name: "GitHub", category: "tools", description: "Code collaboration & open-source workflows" },
  { name: "VS Code", category: "tools", description: "Primary IDE & debugging environment" },
  { name: "Postman / Thunder Client", category: "tools", description: "API testing, headers & validation" },
];

const categoryColorMap = {
  frontend: "from-blue-500/20 to-cyan-500/10 text-cyan-300 border-cyan-500/20",
  backend: "from-purple-500/20 to-violet-500/10 text-violet-300 border-violet-500/20",
  databases: "from-emerald-500/20 to-teal-500/10 text-emerald-300 border-emerald-500/20",
  programming: "from-amber-500/20 to-orange-500/10 text-amber-300 border-amber-500/20",
  tools: "from-fuchsia-500/20 to-pink-500/10 text-fuchsia-300 border-fuchsia-500/20",
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="section-pad border-t border-white/[0.05] relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          number="02 / SKILLS"
          title="Technical toolkit & competencies."
          description="Technologies and frameworks I utilize to build modern, performant web applications, APIs, and software solutions."
        />

        {/* Category Pills Filter */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-violet-600/25 text-white border border-violet-500/40 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                    : "glass-pill text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                <span>{cat.name}</span>
                {isSelected && (
                  <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-violet-400/20 px-1 text-[10px] text-violet-300">
                    {filteredSkills.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Grid of Skill Cards */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const badgeStyle = categoryColorMap[skill.category] || "from-violet-500/20 to-purple-500/10 text-violet-300 border-violet-500/20";
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                  className="glass-panel glass-panel-hover group relative rounded-2xl p-5 overflow-hidden flex flex-col justify-between"
                >
                  {/* Subtle top corner gradient accent */}
                  <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-violet-600/10 blur-xl group-hover:bg-violet-600/25 transition-all duration-500" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-gradient-to-r ${badgeStyle}`}>
                        {skill.category}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Bottom indicator tag */}
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                    <span className="font-mono text-[10px] text-zinc-500 flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-violet-400/70" /> Production-ready
                    </span>
                    <span className="text-[10px] text-zinc-600 group-hover:text-violet-400 transition-colors">
                      ●
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Category Summary Footnote */}
        <div className="mt-12 rounded-2xl border border-white/[0.06] bg-black/40 p-5 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-violet-400" />
              <span>Full technology spectrum spanning frontend, backend, persistence, and cross-platform architecture.</span>
            </div>
            <span className="font-mono text-[11px] text-zinc-500">
              Total technologies cataloged: 23
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
