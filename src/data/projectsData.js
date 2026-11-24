import reviewpilotImg from "../assets/reviewpilot.jpg";
import deadlinedeskImg from "../assets/deadlinedesk.jpg";
import medicoreImg from "../assets/medicore.jpg";
import coffeeshopImg from "../assets/coffeeshop.jpg";

export const projectsData = [
  {
    id: "reviewpilot",
    number: "01",
    title: "ReviewPilot",
    tagline: "Enterprise feedback management & multi-protocol API analytics platform",
    type: "Full-Stack SaaS",
    description:
      "A review management platform designed to organize customer feedback, analytics, and business review workflows with multi-protocol API integrations.",
    image: reviewpilotImg,
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "REST API", "GraphQL", "Webhooks", "JSON-RPC", "SOAP"],
    github: "https://github.com/ManalHussain-dev/PilotReview",
    statusBadge: "Active Architecture",
    highlights: [
      "Role-based authentication & token-protected routes",
      "Interactive sentiment analysis & review metrics",
      "Multi-protocol API support (REST, GraphQL, Webhooks, JSON-RPC, SOAP)",
      "MongoDB document persistence with optimized indexing"
    ],
    // Case study details
    caseStudy: {
      overview:
        "ReviewPilot addresses the operational fragmentation businesses face when aggregating customer reviews across diverse digital channels. It centralizes customer feedback, tracks sentiment analytics, and automates review dispute and response workflows through a unified SaaS dashboard.",
      problem:
        "Companies often collect feedback across disparate services with heterogeneous API formats, making it difficult to calculate aggregated sentiment metrics or respond to customer concerns within standard SLA windows.",
      solution:
        "Built a modular full-stack platform featuring a reactive Vite/React interface backed by Express.js and MongoDB. Designed a multi-protocol integration engine capable of ingesting data via REST endpoints, GraphQL queries, webhook push notifications, and enterprise SOAP/JSON-RPC protocols.",
      keyFeatures: [
        "JWT-based authentication and granular role-based access control (Admin, Manager, Analyst)",
        "Real-time review stream with sentiment scoring, filter by rating, and status tagging",
        "Visual analytics dashboard displaying NPS trends, rating distributions, and response velocity",
        "Pluggable API adapter layer supporting REST, GraphQL schemas, Webhook event triggers, JSON-RPC, and legacy SOAP endpoints",
        "MongoDB aggregate pipelines for high-throughput feedback statistics"
      ],
      challenges:
        "Handling diverse communication protocols within a unified schema required architecting an adapter middleware pattern that normalized incoming payloads from GraphQL, Webhooks, and XML-based SOAP into standardized JSON models prior to database ingestion.",
      whatILearned:
        "Deepened understanding of multi-protocol communication, decoupled system architecture, webhook signature validation, and designing scalable MongoDB aggregation pipelines."
    }
  },
  {
    id: "deadlinedesk",
    number: "02",
    title: "Deadline Desk",
    tagline: "Productivity & deadline management application for focused workflow execution",
    type: "Productivity SaaS",
    description:
      "A productivity application designed to help organize tasks, manage deadlines, and keep projects on track with an intuitive dashboard and robust backend.",
    image: deadlinedeskImg,
    technologies: ["Node.js", "Express.js", "MongoDB", "REST API", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ManalHussain-dev/Dead-line-Desk",
    statusBadge: "Repository Available",
    highlights: [
      "Task breakdown & deadline tracking system",
      "Dynamic priority matrix & countdown milestones",
      "Robust RESTful CRUD endpoints with validation",
      "Lightweight, distraction-free dark interface"
    ],
    // Case study details
    caseStudy: {
      overview:
        "Deadline Desk was conceived to eliminate deadline anxiety by providing developers and students with a clean, low-friction task tracking system that visualizes urgency, priority levels, and completion velocity.",
      problem:
        "Traditional project management suites are overly complex, cluttered with feature bloat, and introduce friction for individual developers needing fast task triage and deadline countdowns.",
      solution:
        "Developed a streamlined productivity dashboard with Express.js and MongoDB. Designed REST endpoints for rapid task creation, priority updating, status transitions, and automated overdue alerts with minimal round-trip latency.",
      keyFeatures: [
        "Kanban-style task organization categorized by priority (Urgent, Moderate, Backlog)",
        "Deadline countdown timers and milestone date indicators",
        "Clean, dark aesthetic engineered for long coding sessions with minimal eye fatigue",
        "REST API with comprehensive input sanitation, error handling middleware, and status codes",
        "Persistent MongoDB storage with indexed task timestamps"
      ],
      challenges:
        "Calculating real-time deadline deltas accurately across different client timezones while maintaining sub-50ms API response times required careful timezone normalization on the Express server.",
      whatILearned:
        "Gained hands-on experience structuring Express middleware, managing MongoDB indexes for time-series queries, and crafting intuitive UX for priority management."
    }
  },
  {
    id: "medicore",
    number: "03",
    title: "MediCore",
    tagline: "Modern healthcare appointment & patient digital management concept",
    type: "Mobile App Concept",
    description:
      "A healthcare appointment management application concept connecting patients, doctors, and administrators through organized digital workflows.",
    image: medicoreImg,
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Mobile UI/UX"],
    github: null, // As specified in prompt, no fabricated link
    statusBadge: "Mobile Concept",
    highlights: [
      "Unified patient-doctor scheduling workflows",
      "Role-aware interface for patients and medical staff",
      "Realtime appointment syncing via Cloud Firestore",
      "Vitals tracking & medical history overview"
    ],
    // Case study details
    caseStudy: {
      overview:
        "MediCore is a cross-platform mobile application concept designed to modernize clinical appointment scheduling, patient record accessibility, and doctor consultation queues through a fluid mobile experience.",
      problem:
        "Long patient wait times, double-booking errors, and cumbersome paper appointment books continue to plague local clinic workflows and hinder patient satisfaction.",
      solution:
        "Prototyped a Flutter-based mobile app powered by Google Firebase and Cloud Firestore. Built role-specific navigation for patients (booking, notifications, vitals) and doctors (patient list, daily schedule, prescription notes).",
      keyFeatures: [
        "Patient digital intake and streamlined doctor appointment booking",
        "Doctor consultation portal with scheduled slots and patient notes",
        "Realtime appointment status updates powered by Firestore listeners",
        "Firebase Authentication supporting patient and practitioner profiles",
        "Intuitive dark-mode mobile UI designed in accordance with Material 3 guidelines"
      ],
      challenges:
        "Managing complex reactive state across multiple sub-screens (appointment selection, date/time pickers, doctor availability checks) using Flutter's widget tree and reactive streams.",
      whatILearned:
        "Deepened expertise in Dart, Flutter component lifecycle, state management, asynchronous Firestore event streaming, and mobile UX accessibility."
    }
  },
  {
    id: "coffeeshop",
    number: "04",
    title: "Coffee Shop Website",
    tagline: "Immersive digital storefront for specialty artisan coffee roasters",
    type: "Interactive Frontend",
    description:
      "A visually rich coffee shop website focused on elegant presentation, responsive design, and interactive user experience.",
    image: coffeeshopImg,
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design", "Motion"],
    github: null, // As specified in prompt, no fabricated link
    statusBadge: "UI/UX Showcase",
    highlights: [
      "Artisan menu presentation with roast origin details",
      "Responsive layout optimized across desktop, tablet, and mobile",
      "Fluid micro-interactions and scroll-linked reveals",
      "Warm, luxurious dark aesthetic with minimal typography"
    ],
    // Case study details
    caseStudy: {
      overview:
        "An elegant digital presence crafted for a specialty coffee roaster, blending atmospheric photography, warm ambient tones, and interactive menu exploration to convey craftsmanship and brand prestige.",
      problem:
        "Many boutique food & beverage sites lack responsive fluidity, suffer from sluggish load times due to unoptimized assets, and present static, uninspiring digital menus.",
      solution:
        "Crafted a high-performance landing experience with responsive grid layouts, optimized imagery, interactive coffee roast origin selectors, and smooth animations that elevate brand storytelling.",
      keyFeatures: [
        "Interactive beverage and beans menu with origin notes, tasting profiles, and brew guides",
        "Fully responsive layout seamlessly transitioning from desktop widescreen to mobile touch displays",
        "Atmospheric dark aesthetic combining deep roast tones with warm amber and subtle violet highlights",
        "Accessible typography, semantic HTML elements, and high contrast ratios",
        "Smooth scroll navigation and subtle hover transitions on interactive cards"
      ],
      challenges:
        "Balancing high-resolution visual imagery with fast rendering speeds and fluid CSS transitions across varying viewport widths.",
      whatILearned:
        "Strengthened skills in modern responsive typography, layout composition, CSS animation optimization, and designing sensory-driven digital brand experiences."
    }
  }
];
