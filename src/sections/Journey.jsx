import { useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import {
  Globe,
  Code2,
  Binary,
  Database,
  Network,
  Smartphone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const journeyDomains = [
  {
    id: "web-dev",
    step: "01",
    title: "Web Development",
    icon: Globe,
    accent: "from-blue-500/20 to-indigo-500/10 text-blue-300 border-blue-500/20",
    summary:
      "Crafting performant client experiences with modern component architectures, reactive state, and responsive design systems.",
    focusAreas: [
      "Modern React component architecture & custom hooks",
      "Tailwind CSS responsive design systems & fluid layouts",
      "Virtual DOM optimization & client-side performance",
      "Accessible semantics & cross-browser compatibility",
    ],
  },
  {
    id: "oop",
    step: "02",
    title: "Object-Oriented Programming",
    icon: Code2,
    accent: "from-purple-500/20 to-violet-500/10 text-purple-300 border-purple-500/20",
    summary:
      "Mastering object-oriented principles to engineer clean, maintainable, and modular software systems in Java and C++.",
    focusAreas: [
      "Encapsulation, inheritance, polymorphism, and abstraction",
      "Software design patterns & SOLID principles",
      "Robust exception handling & testable module boundaries",
      "Modular system architecture and clean separation of concerns",
    ],
  },
  {
    id: "dsa",
    step: "03",
    title: "Data Structures & Algorithms",
    icon: Binary,
    accent: "from-cyan-500/20 to-teal-500/10 text-cyan-300 border-cyan-500/20",
    summary:
      "Developing analytical problem-solving skills and optimizing code execution through efficient algorithms and data structures.",
    focusAreas: [
      "Computational complexity analysis (Big-O time and space)",
      "Arrays, linked lists, stacks, queues, hash maps, and trees",
      "Graph traversal algorithms (BFS, DFS) and recursion",
      "Dynamic programming concepts and search/sort optimization",
    ],
  },
  {
    id: "databases",
    step: "04",
    title: "Database Development",
    icon: Database,
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-300 border-emerald-500/20",
    summary:
      "Designing robust data models and persistent storage layers across both relational and NoSQL document databases.",
    focusAreas: [
      "Relational schema modeling, normalization & SQL queries in MySQL",
      "Document collections, indexing, and aggregation pipelines in MongoDB",
      "Transaction integrity, ACID properties, and foreign key relations",
      "Query profiling, index optimization, and data caching",
    ],
  },
  {
    id: "api-dev",
    step: "05",
    title: "API Development",
    icon: Network,
    accent: "from-violet-500/20 to-fuchsia-500/10 text-violet-300 border-violet-500/20",
    summary:
      "Architecting reliable backend services, RESTful endpoints, and exploring multi-protocol integrations for seamless communication.",
    focusAreas: [
      "REST API design principles, status codes & JSON serialization",
      "Token authentication (JWT), request validation & middleware pipelines",
      "Multi-protocol exploration: REST, GraphQL, Webhooks, and SOAP",
      "Error handling strategies, rate limiting, and API testing in Postman",
    ],
  },
  {
    id: "mobile-dev",
    step: "06",
    title: "Mobile Application Development",
    icon: Smartphone,
    accent: "from-amber-500/20 to-orange-500/10 text-amber-300 border-amber-500/20",
    summary:
      "Building responsive cross-platform mobile applications with Flutter & Dart, integrated with realtime cloud services.",
    focusAreas: [
      "Flutter declarative widget trees and layout mechanics",
      "Dart asynchronous programming, futures, and streams",
      "Firebase Authentication & Cloud Firestore realtime listeners",
      "Touch-first mobile UI patterns and responsive screen adaptation",
    ],
  },
];

function Journey() {
  const [activeDomain, setActiveDomain] = useState(journeyDomains[0].id);

  return (
    <section id="journey" className="section-pad border-t border-white/[0.05] relative">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          number="04 / LEARNING JOURNEY"
          title="Always learning. Always building."
          description="A continuous engineering trajectory rooted in academic rigor and driven forward through hands-on software development across core technical pillars."
        />

        {/* Timeline Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {journeyDomains.map((domain, index) => {
            const Icon = domain.icon;
            const isHovered = activeDomain === domain.id;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setActiveDomain(domain.id)}
                className={`glass-panel glass-panel-hover group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                  isHovered ? "border-violet-500/40 shadow-[0_10px_35px_rgba(139,92,246,0.15)]" : ""
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600/15 text-violet-300 border border-violet-500/20">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-wider text-violet-400">
                        STEP {domain.step}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-zinc-500">
                      Core Discipline
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {domain.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {domain.summary}
                  </p>

                  {/* Focus Areas */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-white/[0.04]">
                    {domain.focusAreas.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-violet-400" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom tag */}
                <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    Continuous Progression
                  </span>
                  <Sparkles className="h-3 w-3 text-violet-400/50" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 rounded-2xl border border-white/[0.06] bg-black/40 p-6 backdrop-blur-md">
          <p className="text-center font-mono text-xs text-zinc-400">
            <span className="text-violet-400 font-semibold">// Growth Philosophy:</span> Deep conceptual comprehension reinforced through project architecture, iterative refactoring, and practical deployment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Journey;
