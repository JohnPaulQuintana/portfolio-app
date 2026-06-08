import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import GlassBubbles from "./background/GlassBubbles";
import {
  FiGithub,
  FiExternalLink,
  FiLock,
  FiChevronLeft,
  FiChevronRight,
  FiZoomIn,
} from "react-icons/fi";

/* =========================
   PROJECT DATA
========================= */
const projects = [
  {
    title: "Enterprise Marketing Data Orchestration System",
    category: "Data Engineering / Automation Platform",
    confidential: true,

    desc: "Centralized automation platform that aggregates advertising performance data across multiple marketing channels and standardizes reporting workflows.",

    impact:
      "Eliminated manual reporting processes and improved cross-platform data consistency.",

    tech: [
      "Playwright",
      "Python",
      "Web Scrapping",
      "Google Sheets",
      "ETL Pipelines",
    ],

    images: ["/flow/1.png"],

    repo: null,
    live: null,
  },

  {
    title: "Real-Time Financial Data Processing Engine",
    category: "Market Data / Backend Systems",
    confidential: true,

    desc: "Automated ingestion and normalization engine that processes market data from external exchanges and synchronizes computed rates into internal systems.",

    impact:
      "Enabled reliable real-time financial visibility for operational reporting.",

    tech: ["Node.js", "APIs", "Cron Jobs", "Data Pipelines"],

    images: ["/flow/2.png"],

    repo: null,
    live: null,
  },

  {
    title: "Controlled Data Execution & Reporting Platform",
    category: "Data Governance / Internal Tools",
    confidential: true,

    desc: "Secure execution layer that orchestrates SQL-based reporting workflows through controlled pipelines.",

    impact:
      "Improved governance, reduced operational risk, and standardized reporting workflows across teams.",

    tech: ["Electron", "SQL", "Node.js"],

    images: ["/flow/3.png"],

    repo: null,
    live: null,
  },

  {
    title: "Enterprise Spreadsheet Observability & Monitoring System",
    category: "Observability / Reporting Infrastructure",
    confidential: true,

    desc: "Monitoring platform that tracks spreadsheet freshness and triggers alerts for reporting integrity issues.",

    impact:
      "Improved data reliability and introduced proactive monitoring for business-critical reporting systems.",

    tech: ["Node.js", "Schedulers", "Telegram API", "Monitoring"],

    images: ["/flow/4.png"],

    repo: null,
    live: null,
  },
];

function ImageViewer({
  images,
  index,
  onClose,
}: {
  images: string[];
  index: number;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(index);
  const [scale, setScale] = useState(1);

  // sync when opening
  useEffect(() => {
    setActiveIndex(index);
  }, [index]);

  const image = images[activeIndex];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    setScale(1);
  }, [activeIndex]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/95 flex items-center justify-center z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* IMAGE */}
        <motion.img
          src={image}
          className="max-h-[90vh] max-w-[90vw] select-none cursor-grab"
          style={{ scale }}
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          drag={scale > 1}
          dragConstraints={{ left: -400, right: 400, top: -300, bottom: 300 }}
          onClick={(e) => e.stopPropagation()}
          onDoubleClick={() => setScale((s) => (s === 1 ? 2.5 : 1))}
          onWheel={(e) => {
            e.preventDefault();
            setScale((s) =>
              Math.max(1, Math.min(3, s + (e.deltaY > 0 ? -0.2 : 0.2))),
            );
          }}
        />

        {/* NAV */}
        {images.length > 1 && (
          <>
            {/* LEFT */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((p) => (p - 1 + images.length) % images.length);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 
                 w-14 h-14 flex items-center justify-center
                 rounded-full bg-white/10 hover:bg-white/20
                 backdrop-blur-md border border-white/20
                 text-white
                 transition transform hover:scale-110 active:scale-95"
            >
              <FiChevronLeft className="text-2xl" />
            </button>

            {/* RIGHT */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((p) => (p + 1) % images.length);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 
                 w-14 h-14 flex items-center justify-center
                 rounded-full bg-white/10 hover:bg-white/20
                 backdrop-blur-md border border-white/20
                 text-white
                 transition transform hover:scale-110 active:scale-95"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================
   IMAGE SLIDER
========================= */
function ImageSlider({ images = [] }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);

  const safeImages =
    images.length > 0
      ? images
      : ["https://via.placeholder.com/1200x800?text=No+Preview"];

  const next = () => setIndex((p) => (p + 1) % safeImages.length);
  const prev = () =>
    setIndex((p) => (p - 1 + safeImages.length) % safeImages.length);

  // prevent background scroll when viewer is open
  useEffect(() => {
    if (viewerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [viewerOpen]);

  return (
    <>
      {/* MAIN IMAGE */}
      <div
        className="relative overflow-hidden rounded-[36px] h-[420px] w-full group cursor-zoom-in"
        onClick={() => setViewerOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={safeImages[index]}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
          />
        </AnimatePresence>

        {/* CENTER BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => setViewerOpen(true)}
            className="flex items-center gap-2 px-5 py-3
               rounded-full bg-black/60 hover:bg-black/70
               text-white text-sm font-medium
               backdrop-blur-md border border-white/20
               shadow-lg transition active:scale-95"
          >
            <FiZoomIn className="text-lg" />
            <span>View Full Image</span>
          </button>
        </div>

        {/* ARROWS */}
        {safeImages.length > 1 && (
          <div className="absolute bottom-4 right-4 flex gap-2">
            {/* PREV */}
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="w-11 h-11 flex items-center justify-center
                 rounded-full bg-black/40 hover:bg-black/60
                 text-white backdrop-blur-md border border-white/20
                 transition active:scale-95"
            >
              <FiChevronLeft className="text-xl" />
            </button>

            {/* NEXT */}
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="w-11 h-11 flex items-center justify-center
                 rounded-full bg-black/40 hover:bg-black/60
                 text-white backdrop-blur-md border border-white/20
                 transition active:scale-95"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        )}
      </div>

      {/* THUMBNAILS */}
      {safeImages.length > 1 && (
        <div className="mt-3 flex gap-2">
          {safeImages.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setIndex(i)}
              className={`h-14 w-14 object-cover rounded-lg cursor-pointer border ${
                i === index ? "border-black" : "border-transparent"
              }`}
            />
          ))}
        </div>
      )}

      {/* VIEWER */}
      {viewerOpen && (
        <ImageViewer
          images={safeImages}
          index={index}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </>
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

  const hasRepo = !!project.repo;
  const hasLive = !!project.live;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className={`relative grid lg:grid-cols-2 gap-14 items-center py-12 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* BIG NUMBER */}
      <div className="absolute left-0 md:left-auto md:right-4 top-1/2 -translate-y-1/2 text-[240px] font-bold text-primary/10 pointer-events-none select-none">
        {num}
      </div>

      {/* IMAGE */}
      <div className="relative">
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-[40px]" />
        <ImageSlider images={project.images} />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* CONFIDENTIAL BADGE */}
        <div className="mb-3">
          {project.confidential && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs text-red-600 font-medium shadow-sm">
              <FiLock className="text-xs" />
              Confidential System
            </span>
          )}
        </div>

        {/* TITLE */}
        <h3 className="mt-6 text-4xl font-semibold text-black">
          {project.title}
        </h3>

        {/* DESC */}
        <p className="mt-4 text-black/60 leading-relaxed">{project.desc}</p>

        {/* IMPACT */}
        <div className="mt-6 p-5 rounded-3xl bg-white/40 border">
          <div className="text-xs uppercase tracking-widest text-primary">
            Impact
          </div>
          <div className="mt-2 text-lg font-semibold">{project.impact}</div>
        </div>

        {/* TECH */}
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

        {/* LINKS (ENABLED / DISABLED STYLE) */}
        <div className="mt-8 flex gap-3">
          {/* GITHUB */}
          <button
            disabled={!hasRepo}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition
              ${
                hasRepo
                  ? "bg-white/60 hover:bg-white/80 text-black"
                  : "bg-black/5 text-black/30 cursor-not-allowed"
              }`}
          >
            <FiGithub /> GitHub
          </button>

          {/* LIVE */}
          <button
            disabled={!hasLive}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition
              ${
                hasLive
                  ? "bg-primary text-white hover:opacity-90"
                  : "bg-black/5 text-black/30 cursor-not-allowed"
              }`}
          >
            <FiExternalLink /> Live
          </button>
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

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-primary/10 blur-[220px] rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="mt-8 text-5xl font-semibold text-black">
          Systems designed for real operations
        </h2>

        <p className="mt-6 text-black/60">
          Automation platforms, backend systems, and internal tools built for
          scale.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="relative z-10 mt-20 max-w-7xl mx-auto px-6 md:px-28">
        <div className="relative space-y-28">
          {projects.map((project, i) => (
            <div key={project.title} className="relative">
              {/* SECTION DIVIDER */}
              {i !== 0 && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              )}

              {/* SECTION NUMBER BACKGROUND */}
              <div className="absolute -top-10 left-0 text-black/5 text-7xl font-bold select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* CARD */}
              <ProjectCard project={project} reverse={i % 2 !== 0} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
