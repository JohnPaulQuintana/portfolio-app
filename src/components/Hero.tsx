import { motion, type Variants } from "framer-motion";
import GlassBubbles from "./background/GlassBubbles";
import { FiArrowRight, FiEye } from "react-icons/fi";
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const text1 = "I build automation systems";
const text2 = "for modern businesses.";

export default function Hero() {
  return (
    <section className="relative overflow-hidden isolate rounded-3xl px-6 py-24 sm:py-32 bg-white/40 backdrop-blur-xl border border-black/5 shadow-soft">
      {/* 🫧 Living Glass Bubble Background */}
      {/* 🌫 Background */}
      <GlassBubbles />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div variants={item} className="flex justify-center mb-5">
          <div className="w-[252px] h-[228px] rounded-2xl overflow-hidden bg-white/20">
            <img
              src="/me.JPG"
              alt="profile"
              draggable={false}
              className="block w-full h-full object-cover"
              style={{
                objectPosition: "center",
                aspectRatio: "1 / 1",
              }}
            />
          </div>
        </motion.div>

        {/* NAME */}
        <motion.div
          variants={item}
          className="text-primary text-lg sm:text-2xl font-semibold tracking-tight"
        >
          JOHN PAUL QUINTANA
        </motion.div>

        {/* ROLE */}
        <motion.div
          variants={item}
          className="mt-3 text-[rgba(20,20,20,0.60)] text-sm sm:text-base"
        >
          Automation Engineer • Full-Stack Developer
        </motion.div>

        {/* BADGE */}
        <motion.div
          variants={item}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 backdrop-blur border border-black/5 text-[rgba(20,20,20,0.65)] text-xs sm:text-sm shadow-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
          Available for Freelance • Automation Systems
        </motion.div>

        {/* HEADLINE (Apple-style typography = NO fancy letter animation) */}
        <motion.h1
          variants={item}
          className="mt-10 sm:mt-14 text-[2.5rem] sm:text-6xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[rgba(20,20,20,0.92)]"
        >
          {text1}
          <br />
          <span className="text-[rgba(20,20,20,0.75)]">{text2}</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={item}
          className="mt-6 text-[rgba(20,20,20,0.65)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          I design workflows and build software that removes manual processes
          and improves business efficiency.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jpquintana01@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="
      group inline-flex items-center justify-center gap-2
      px-8 py-3 rounded-xl
      bg-primary text-white
      shadow-soft
      hover:scale-[1.03]
      active:scale-[0.98]
      transition
    "
          >
            Start Automation Project
            <FiArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={18}
            />
          </a>

          {/* Secondary CTA */}
          <a
            href="#work"
            className="
      group inline-flex items-center justify-center gap-2
      px-8 py-3 rounded-xl
      bg-white/60 backdrop-blur
      border border-black/10
      text-[rgba(20,20,20,0.75)]
      hover:bg-white
      transition
    "
          >
            <FiEye size={18} className="opacity-70" />
            View Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
