import { motion } from "framer-motion";
import GlassBubbles from "./background/GlassBubbles";

import {
  FiSearch,
  FiGrid,
  FiCpu,
  FiTrendingUp,
} from "react-icons/fi";

import { type IconType } from "react-icons";

/* =========================
   TYPES
========================= */
type Step = {
  title: string;
  desc: string;
  icon: IconType;
};

type StepCardProps = {
  step: Step;
  index: number;
};

/* =========================
   DATA
========================= */
const steps: Step[] = [
  {
    title: "Understand the system",
    desc: "I analyze workflows, bottlenecks, and automation opportunities.",
    icon: FiSearch,
  },
  {
    title: "Design architecture",
    desc: "I map clean systems that scale and reduce manual work.",
    icon: FiGrid,
  },
  {
    title: "Build & automate",
    desc: "I implement tools, APIs, and interfaces that connect everything.",
    icon: FiCpu,
  },
  {
    title: "Optimize & scale",
    desc: "I refine performance and ensure long-term maintainability.",
    icon: FiTrendingUp,
  },
];

/* =========================
   CARD
========================= */
function StepCard({ step, index }: StepCardProps) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -8 }}
      className="
        group relative overflow-hidden
        rounded-[34px]
        border border-white/30
        bg-white/35
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.05)]
      "
    >
      {/* glow */}
      <motion.div
        animate={{
          x: ["0%", "12%", "0%"],
          y: ["0%", "10%", "0%"],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-soft/20 blur-3xl"
      />

      {/* shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute -left-40 top-0 h-full w-32 rotate-12 bg-white/30 blur-2xl group-hover:left-[120%] transition-all duration-[1600ms]" />
      </div>

      {/* border */}
      <div className="absolute inset-[1px] rounded-[32px] border border-white/20 pointer-events-none" />

      {/* number */}
      <div className="absolute top-6 right-6 text-black/[0.06] text-6xl sm:text-7xl font-semibold">
        0{index + 1}
      </div>

      {/* content */}
      <div className="relative z-10 p-7 sm:p-9">

        {/* icon */}
        <motion.div
          whileHover={{ rotate: 6, scale: 1.05 }}
          className="
            w-14 h-14 rounded-2xl
            bg-white/60 border border-white/40
            backdrop-blur-xl
            flex items-center justify-center
            text-primary shadow-sm
          "
        >
          <Icon size={24} />
        </motion.div>

        {/* title */}
        <h3 className="mt-8 text-2xl sm:text-3xl font-semibold text-black">
          {step.title}
        </h3>

        {/* desc */}
        <p className="mt-4 text-black/60 text-sm sm:text-base">
          {step.desc}
        </p>

        {/* line */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-primary-soft/50 to-transparent"
        />
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN SECTION
========================= */
export default function HowIWork() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">

      <div className="absolute inset-0 pointer-events-none">
        <GlassBubbles />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border text-primary text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Process
        </div>

        <h2 className="mt-8 text-4xl sm:text-6xl font-semibold text-black">
          A structured approach
          <br />
          to building systems.
        </h2>

        <p className="mt-6 text-black/60 text-base sm:text-lg">
          Every automation, application, and workflow is designed with clarity,
          scalability, and long-term efficiency in mind.
        </p>
      </div>

      {/* cards */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}