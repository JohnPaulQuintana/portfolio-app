import { motion } from "framer-motion";
import GlassBubbles from "./background/GlassBubbles";
import { type IconType } from "react-icons";
import {
  FiCpu,
  FiGlobe,
  FiSmartphone,
  FiLayers,
  FiLink,
} from "react-icons/fi";

type BuildItem = {
  title: string;
  desc: string;
  icon: IconType;
  size?: "lg" | "wide";
};

type CardProps = {
  item: BuildItem;
  index: number;
};

const items: BuildItem[] = [
  {
    title: "Automation Systems",
    desc: "End-to-end workflows that remove manual processes and connect tools seamlessly.",
    icon: FiCpu,
  },
  {
    title: "Web Applications",
    desc: "Modern, responsive apps built with scalable architecture and clean UI systems.",
    icon: FiGlobe,
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile experiences with smooth UX and performance-first design.",
    icon: FiSmartphone,
  },
  {
    title: "Internal Tools",
    desc: "Dashboards, admin panels, and tools that improve team productivity.",
    icon: FiLayers,
    size: "wide",
  },
  {
    title: "API Integrations",
    desc: "Connect services, automate data flow, and build reliable backend systems.",
    icon: FiLink,
  },
];

function Card({ item, index }: CardProps) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        scale: 1.015,
      }}
      whileTap={{
        scale: 0.99,
      }}
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
      className={`
        group
        relative
        overflow-hidden
        transform-gpu
        rounded-[34px]
        border
        border-white/30
        bg-white/35
        backdrop-blur-2xl
        shadow-[0_10px_40px_rgba(0,0,0,0.05)]

        ${
          item.size === "lg"
            ? "sm:col-span-2 min-h-[420px]"
            : item.size === "wide"
            ? "lg:col-span-2 min-h-[320px]"
            : "min-h-[320px]"
        }
      `}
    >
      {/* ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-primary-soft/20 blur-3xl"
      />

      {/* glass shine */}
      <div className="absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className="
            absolute
            top-0
            left-0
            h-full
            w-24
            rotate-12
            bg-white/20
            blur-xl
            -translate-x-[200%]
            transition-transform
            duration-1000
            ease-out
            group-hover:translate-x-[900%]
          "
        />
      </div>

      {/* border */}
      <div className="absolute inset-[1px] rounded-[32px] border border-white/20 pointer-events-none" />

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
        <div>
          {/* icon */}
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/40
              bg-white/60
              text-primary
              backdrop-blur-xl
              shadow-sm
            "
          >
            <Icon size={24} />
          </motion.div>

          <h3 className="mt-8 text-2xl font-semibold tracking-tight text-black leading-tight sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-black/60 sm:text-base">
            {item.desc}
          </p>
        </div>

        {/* ambient line */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-primary-soft/50 to-transparent"
        />
      </div>
    </motion.div>
  );
}

export default function WhatIBuild() {
  return (
    <section className="relative py-32 sm:py-32 overflow-hidden rounded-md">

      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <GlassBubbles />
      </div>

      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary-soft/10 blur-[180px] rounded-full pointer-events-none" />

      {/* heading */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/40 backdrop-blur-xl text-primary text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Build Systems
          </div>

          <h2 className="mt-8 text-4xl sm:text-6xl font-semibold tracking-tight text-black leading-[1]">
            Software crafted
            <br />
            for modern workflows.
          </h2>

          <p className="mt-6 text-black/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            I create scalable systems, intelligent automations, and polished
            digital products that help businesses move faster.
          </p>
        </motion.div>
      </div>

      {/* cards */}
      <div className="relative z-10 mt-24 max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

          {items.map((item, i) => (
            <Card key={i} item={item} index={i} />
          ))}

        </div>
      </div>
    </section>
  );
}