import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GlassBubbles from "./background/GlassBubbles";
import { FiGithub, FiExternalLink } from "react-icons/fi";

/* =========================
   PROJECT DATA
========================= */
/* =========================
   PROJECT DATA (SENIOR SYSTEM VERSION)
========================= */
const projects = [
  {
    title: "Enterprise Marketing Data Orchestration System",
    category: "Data Engineering / Automation Platform",
    desc:
      "Centralized automation system that aggregates advertising performance data across multiple platforms and standardizes reporting pipelines for business intelligence workflows.",
    impact:
      "Eliminated manual reporting workflows and improved cross-platform data consistency across marketing operations.",
    tech: ["Playwright", "Node.js", "Docker", "ETL Pipelines"],
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: "https://github.com/yourname/project",
    live: "https://your-live-demo.com",
  },

  {
    title: "Real-Time Financial Data Processing Engine",
    category: "Market Data / Backend Systems",
    desc:
      "Scheduled data ingestion and normalization engine that processes crypto market data from external exchanges and synchronizes computed rates into internal business systems.",
    impact:
      "Enabled consistent real-time financial visibility for internal reporting and operational decision-making.",
    tech: ["Node.js", "APIs", "Cron Jobs", "Data Pipelines"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: null,
    live: null,
  },

  {
    title: "Controlled Data Execution & Reporting Platform",
    category: "Data Governance / Internal Tools",
    desc:
      "Secure execution layer that orchestrates SQL-based reporting workflows through task-driven inputs, replacing direct database access with controlled execution pipelines.",
    impact:
      "Improved data governance, reduced operational risk, and standardized reporting workflows across teams.",
    tech: ["Electron", "SQL", "Node.js", "Task Automation"],
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: null,
    live: null,
  },

  {
    title: "Enterprise Spreadsheet Observability & Monitoring System",
    category: "Observability / Reporting Infrastructure",
    desc:
      "System-wide monitoring platform that tracks spreadsheet freshness, detects stale data states, and triggers real-time alerts for reporting integrity across business units.",
    impact:
      "Improved data reliability and introduced proactive monitoring for business-critical reporting systems.",
    tech: ["Node.js", "Schedulers", "Telegram API", "Monitoring"],
    images: [
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: null,
    live: null,
  },
];
/* =========================
   IMAGE SLIDER
========================= */
function ImageSlider({ images = [] }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const safeImages =
    images.length > 0
      ? images
      : ["https://via.placeholder.com/1200x800?text=No+Preview"];

  const next = () => setIndex((p) => (p + 1) % safeImages.length);
  const prev = () =>
    setIndex((p) => (p - 1 + safeImages.length) % safeImages.length);

  return (
    <div className="relative overflow-hidden rounded-[36px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={safeImages[index]}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="h-[420px] w-full object-cover"
          style={{
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        />
      </AnimatePresence>

      {safeImages.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            className="w-9 h-9 rounded-full bg-white/70 backdrop-blur border"
            onClick={prev}
          >
            ←
          </button>
          <button
            className="w-9 h-9 rounded-full bg-white/70 backdrop-blur border"
            onClick={next}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================
   PROJECT CARD
========================= */
function ProjectCard({
  project,
  reverse,
  index,
}: {
  project: (typeof projects)[0];
  reverse: boolean;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
      }}
      className={`relative grid lg:grid-cols-2 gap-14 items-center py-10 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* BIG BACKGROUND NUMBER */}
      <div className="absolute -top-10 left-0 text-[180px] font-semibold text-black/5 select-none pointer-events-none">
        {num}
      </div>

      {/* IMAGE */}
      <div className="relative">
        <div className="absolute inset-0 bg-primary-soft/10 blur-3xl rounded-[40px]" />
        <ImageSlider images={project.images} />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* category + number badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border text-primary text-xs">
          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
            {num}
          </span>
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          {project.category}
        </div>

        {/* title */}
        <h3 className="mt-8 text-4xl font-semibold text-black">
          {project.title}
        </h3>

        {/* desc */}
        <p className="mt-6 text-black/60 leading-relaxed">{project.desc}</p>

        {/* impact */}
        <div className="mt-8 p-5 rounded-3xl bg-white/40 border">
          <div className="text-xs uppercase tracking-widest text-primary">
            Impact
          </div>
          <div className="mt-2 text-xl font-semibold">{project.impact}</div>
        </div>

        {/* tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-xl bg-white/50 border text-sm text-black/70"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="mt-8 flex gap-3">
          {project.repo && (
            <a
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 border"
              href={project.repo}
            >
              <FiGithub /> Repo
            </a>
          )}

          {project.live && (
            <a
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white"
              href={project.live}
            >
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN SECTION
========================= */
export default function SelectedProjects() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <GlassBubbles />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-primary-soft/10 blur-[220px] rounded-full" />

      {/* heading */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="mt-8 text-4xl sm:text-6xl font-semibold text-black leading-[1]">
          Systems designed
          <br />
          for real operations.
        </h2>

        <p className="mt-6 text-black/60 text-base sm:text-lg">
          Automation systems, web platforms, desktop software, and mobile apps
          crafted for modern businesses.
        </p>
      </div>

      {/* projects */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto px-6">
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, i) => (
            <div key={project.title} className="relative">
              {/* SECTION NUMBER (NEW) */}
              <div className="absolute -top-10 left-0 text-black/10 text-6xl sm:text-7xl font-bold select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* subtle divider line (NEW separation) */}
              {i !== 0 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              )}

              {/* actual card */}
              <ProjectCard project={project} reverse={i % 2 !== 0} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
