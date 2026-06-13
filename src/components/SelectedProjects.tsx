import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlassBubbles from "./background/GlassBubbles";
import {
  FiGithub,
  FiExternalLink,
  FiLock,
  FiChevronLeft,
  FiChevronRight,
  FiZoomIn,
  FiX,
  FiZoomOut,
} from "react-icons/fi";
import { createPortal } from "react-dom";

const caseStudies = [
  {
    title: "Indoor Navigation & Spatial Mapping Engine (NaviAtlas)",

    problem:
      "There was no efficient system to test, simulate, and validate indoor SVG-based navigation maps for spatial layouts.",

    solution:
      "Built an indoor mapping and visualization engine that supports SVG-based spatial structures for testing navigation paths and layout validation.",

    result:
      "Accelerated prototyping and validation of indoor navigation systems for spatial applications.",

    tech: ["React", "SVG", "Spatial Mapping", "Visualization", "Express"],

    images: ["/flow/5.png", "/flow/6.png", "/flow/7.png"],
    repo: null,
    live: "https://naviatlas.netlify.app/",
  },
  {
    title: "Enterprise Ad Operations Data Pipeline",
    confidential: true,

    problem:
      "Advertising performance data was fragmented across multiple platforms, requiring manual extraction and consolidation into reporting sheets.",

    solution:
      "Designed and implemented an automated data pipeline that aggregates advertising metrics from multiple ad networks and synchronizes structured reporting data into centralized sheets.",

    result:
      "Standardized reporting workflow across marketing operations and eliminated manual data compilation.",

    tech: [
      "Playwright",
      "Python",
      "Web Scraping",
      "Google Sheets",
      "ETL Pipelines",
    ],

    images: ["/flow/1.png"],
    repo: null,
    live: null,
  },

  {
    title: "Real-Time Crypto Market Data & Pricing System",
    confidential: true,

    problem:
      "Business systems lacked a reliable mechanism to continuously track and normalize crypto market data for internal pricing and reporting.",

    solution:
      "Built a scheduled data ingestion system that collects market data from Binance, applies rate normalization logic, and updates internal backoffice systems on an hourly cadence.",

    result:
      "Enabled consistent real-time financial visibility across internal trading and reporting tools.",

    tech: ["Node.js", "APIs", "Cron Jobs", "Data Pipelines"],

    images: ["/flow/2.png"],
    repo: null,
    live: null,
  },

  {
    title: "Controlled SQL Execution & Reporting Desktop Platform",
    confidential: true,

    problem:
      "Teams were directly accessing analytics infrastructure (Superset) and executing unmanaged SQL queries, creating operational risk and inconsistency.",

    solution:
      "Architected a desktop execution layer that integrates with Asana task workflows, allowing controlled SQL execution and generating standardized, downloadable reporting outputs without direct database access.",

    result:
      "Improved data governance, reduced query-level risk, and enforced controlled reporting workflows.",

    tech: ["Electron", "SQL", "Node.js"],

    images: ["/flow/3.png"],
    repo: null,
    live: null,
  },

  {
    title: "Enterprise Spreadsheet Governance & Monitoring System",
    confidential: true,

    problem:
      "Critical business spreadsheets lacked observability, resulting in outdated reports and delayed updates across teams.",

    solution:
      "Developed a centralized monitoring system that scans registered spreadsheets, evaluates update timestamps, and detects stale reporting states. Integrated alerting via Telegram for team leads.",

    result:
      "Improved data reliability across reporting operations and introduced proactive monitoring for business-critical spreadsheets.",

    tech: ["Node.js", "Schedulers", "Telegram API", "Monitoring"],

    images: ["/flow/4.png"],
    repo: null,
    live: null,
  },

  {
    title: "Multi-Platform Ad Account Monitoring System",

    problem:
      "Ad account balances across multiple platforms (Adsterra, AdCash, and others) were tracked manually, increasing operational overhead and risk of oversight.",

    solution:
      "Built a centralized monitoring system that aggregates account balance data across advertising platforms and standardizes visibility into financial status.",

    result:
      "Reduced operational monitoring effort and improved financial oversight across ad operations.",

    tech: ["Node.js", "Automation", "Reporting", "Monitoring"],

    images: [],
    repo: null,
    live: null,
  },

  {
    title:
      "Identity Verification & Compliance KYC Platform (Face API Integration)",

    problem:
      "User onboarding required manual identity verification, creating delays and inconsistent validation outcomes.",

    solution:
      "Engineered a KYC verification workflow using Face API for facial detection and matching, combined with camera-based ID capture (front/back), validation checks, and watermarking for audit integrity before submission to backoffice systems.",

    result:
      "Streamlined identity verification workflow and improved compliance processing efficiency.",

    tech: ["Face API", "Node.js", "Image Processing", "KYC", "Compliance"],

    images: [],
    repo: null,
    live: null,
  },

  {
    title: "Risk Intelligence & Abuse Detection API",

    problem:
      "Risk operations lacked a unified system to detect fraudulent behaviors such as multi-accounting and bonus abuse across backend systems.",

    solution:
      "Developed a centralized risk analysis API that aggregates backend signals and applies rule-based detection for suspicious account patterns and behavioral anomalies.",

    result:
      "Strengthened fraud detection capabilities and improved risk enforcement across systems.",

    tech: ["Node.js", "REST API", "Fraud Detection", "Rules Engine"],

    images: [],
    repo: null,
    live: null,
  },

  {
    title: "Unified Email Aggregation & Workspace Client (NaviSync)",

    problem:
      "Users managing multiple email accounts lacked a centralized interface for monitoring communications.",

    solution:
      "Built a unified read-only email aggregation client that connects multiple email providers into a single interface for consolidated viewing.",

    result:
      "Improved productivity by reducing context switching across email platforms.",

    tech: ["Electron", "React", "Email APIs", "Desktop Application"],

    images: [],
    repo: null,
    live: null,
  },

  {
    title: "Distributed Link Intelligence & Management Platform (NaviLink)",

    problem:
      "Important digital resources and links were scattered across multiple tools, chats, and notes with no structured organization.",

    solution:
      "Designed a link management system that enables categorization, storage, and controlled sharing of digital resources across teams and users.",

    result:
      "Improved knowledge organization and enabled structured information sharing.",

    tech: ["React", "Node.js", "Knowledge Management", "Search"],

    images: [],
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
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const draggingRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0 });
  const pinchStartRef = useRef<number | null>(null);

  const image = images[activeIndex];

  const clamp = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, n));

  const resetView = () => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  };

  const next = () => {
    resetView();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    resetView();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    setActiveIndex(index);
    resetView();
  }, [index]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // ========================
  // DESKTOP
  // ========================

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;

    draggingRef.current = true;

    startRef.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!draggingRef.current) return;

    setPos({
      x: e.clientX - startRef.current.x,
      y: e.clientY - startRef.current.y,
    });
  };

  const onMouseUp = () => {
    draggingRef.current = false;
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;

    setScale((prev) => clamp(prev * zoomFactor, 1, 6));
  };

  // ========================
  // MOBILE
  // ========================

  const getDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchStartRef.current = getDistance(e.touches);
    } else {
      startRef.current = {
        x: e.touches[0].clientX - pos.x,
        y: e.touches[0].clientY - pos.y,
      };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStartRef.current) {
      const newDistance = getDistance(e.touches);

      const zoomRatio = newDistance / pinchStartRef.current;

      setScale((prev) => clamp(prev * zoomRatio, 1, 6));

      pinchStartRef.current = newDistance;
    }

    if (e.touches.length === 1 && scale > 1) {
      setPos({
        x: e.touches[0].clientX - startRef.current.x,
        y: e.touches[0].clientY - startRef.current.y,
      });
    }
  };

  const onTouchEnd = () => {
    pinchStartRef.current = null;

    if (scale <= 1) {
      setPos({ x: 0, y: 0 });
    }
  };

  // ========================
  // DOUBLE CLICK / TAP
  // ========================

  const toggleZoom = () => {
    if (scale === 1) {
      setScale(2.5);
    } else {
      resetView();
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Counter */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm text-white">
          {activeIndex + 1} / {images.length}
        </div>

        {/* Close */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-white/20"
        >
          <FiX size={20} />
        </button>

        {/* Zoom Controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setScale((s) => clamp(s - 0.5, 1, 6));
            }}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center text-white"
          >
            <FiZoomOut />
          </button>

          <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white text-sm">
            {Math.round(scale * 100)}%
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setScale((s) => clamp(s + 0.5, 1, 6));
            }}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center text-white"
          >
            <FiZoomIn />
          </button>
        </div>

        {/* Image Container */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          onWheel={onWheel}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <motion.img
            src={image}
            draggable={false}
            onMouseDown={onMouseDown}
            onDoubleClick={toggleZoom}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="
              select-none
              max-w-[90vw]
              max-h-[90vh]
              object-contain
              touch-none
              cursor-grab
              active:cursor-grabbing
            "
            style={{
              transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${scale})`,
              transformOrigin: "center center",
            }}
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                w-14 h-14 rounded-full
                bg-white/10 backdrop-blur
                border border-white/10
                text-white
                flex items-center justify-center
              "
            >
              <FiChevronLeft size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                w-14 h-14 rounded-full
                bg-white/10 backdrop-blur
                border border-white/10
                text-white
                flex items-center justify-center
              "
            >
              <FiChevronRight size={28} />
            </button>
          </>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body,
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
      : [
          "https://placehold.co/1200x800/F8FAFC/64748B?text=Architecture+Diagram",
        ];

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
  project: (typeof caseStudies)[0];
  reverse: boolean;
  index: number;
}) {
  const num = String(index + 1).padStart(2, "0");

  // const hasRepo = !!project.repo;
  // const hasLive = !!project.live;

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
      {/* BIG NUMBER */}
      {/* <div
        className="
    absolute
    right-0
    top-1/2
    -translate-y-1/2
    pointer-events-none
    select-none
    font-bold
    text-primary/5
    hidden lg:block
    text-[140px]
    xl:text-[180px]
    2xl:text-[220px]
  "
      >
        {num}
      </div> */}

      {/* IMAGE */}
      <div className="relative">
        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-[40px]" />
        <ImageSlider images={project.images} />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {project.confidential && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
              <FiLock className="text-xs" />
              Confidential System
            </span>
          </div>
        )}

        <div className="flex items-start gap-4">
          <span className="text-primary/40 text-xl font-semibold">{num}</span>

          <h3 className="text-4xl font-semibold text-black/80">
            {project.title}
          </h3>
        </div>

        {/* PROBLEM */}
        <div className="mt-8">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">
            Problem
          </div>

          <p className="mt-3 text-black/70 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* SOLUTION */}
        <div className="mt-6">
          <div className="text-xs uppercase tracking-[0.2em] text-primary">
            Solution
          </div>

          <p className="mt-3 text-black/70 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* RESULT FIRST */}
        <div
          className="
    mt-6
    relative
    overflow-hidden
    rounded-[32px]
    border border-white/40
    bg-white/50
    backdrop-blur-3xl
    shadow-[0_20px_80px_rgba(0,0,0,0.08)]
    p-6
  "
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary">
                Result
              </span>
            </div>

            <p className="mt-4 text-xl font-semibold text-black/80 leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        {/* TECH */}
        <div className="mt-8 flex flex-wrap gap-2">
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
          <button
            disabled={!project.repo}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition ${
              project.repo
                ? "bg-white/60 hover:bg-white/80 text-black"
                : "bg-black/5 text-black/30 cursor-not-allowed"
            }`}
          >
            <FiGithub />
            GitHub
          </button>

          <button
            disabled={!project.live}
            onClick={() => {
              if (project.live) {
                window.open(project.live, "_blank", "noopener,noreferrer");
              }
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
              project.live
                ? "bg-primary text-white hover:opacity-90"
                : "bg-black/5 text-black/30 cursor-not-allowed"
            }`}
          >
            <FiExternalLink />
            Live
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
          {caseStudies.map((project, i) => (
            <div key={project.title} className="relative">
              {/* SECTION DIVIDER */}
              {i !== 0 && (
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
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
