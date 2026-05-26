import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GlassBubbles from "./background/GlassBubbles";
import { FiGithub, FiExternalLink } from "react-icons/fi";

/* =========================
   PROJECT DATA
========================= */
const projects = [
  {
    title: "Workflow Automation Engine",
    category: "Automation System",
    desc:
      "Automated browser workflows, scheduled scraping systems, reporting pipelines, and API integrations for operational processes.",
    impact: "Reduced repetitive manual work and improved operational speed",
    tech: ["Playwright", "Node.js", "Docker", "APIs"],
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: "https://github.com/yourname/project",
    live: "https://your-live-demo.com",
  },

  {
    title: "Enterprise Web Platform",
    category: "Web Application",
    desc:
      "Modern internal management platform with dashboards, reporting systems, authentication, and workflow tracking.",
    impact: "Centralized operations and improved team productivity",
    tech: ["React", "TypeScript", "Supabase", "TailwindCSS"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: null,
    live: null,
  },

  {
    title: "Mobile Field Reporting App",
    category: "Android Application",
    desc:
      "Cross-platform mobile app for field teams with offline sync, real-time updates, and cloud-connected workflows.",
    impact: "Enabled faster field reporting and mobile-first operations",
    tech: ["React Native", "Expo", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop",
    ],
    repo: null,
    live: null,
  },

  {
    title: "Operations Desktop Suite",
    category: "Desktop Application",
    desc:
      "Desktop software for monitoring reports, tracking operational tasks, and managing business workflows in one place.",
    impact: "Improved visibility and monitoring across teams",
    tech: ["Electron", "React", "TypeScript"],
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
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[420px] object-cover"
        />
      </AnimatePresence>

      {safeImages.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="w-9 h-9 rounded-full bg-white/70 backdrop-blur border" onClick={prev}>
            ←
          </button>
          <button className="w-9 h-9 rounded-full bg-white/70 backdrop-blur border" onClick={next}>
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
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 1,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
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
        <p className="mt-6 text-black/60 leading-relaxed">
          {project.desc}
        </p>

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
            <a className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 border" href={project.repo}>
              <FiGithub /> Repo
            </a>
          )}

          {project.live && (
            <a className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white" href={project.live}>
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
        <ProjectCard
          project={project}
          reverse={i % 2 !== 0}
          index={i}
        />
      </div>
    ))}
  </div>
</div>
    </section>
  );
}