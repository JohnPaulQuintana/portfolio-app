import { motion } from "framer-motion";
import GlassBubbles from "./background/GlassBubbles";

const groups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "Laravel",
      "Python",
      "REST APIs",
    ],
  },
  {
    title: "Automation",
    items: [
      "Playwright",
      "Puppeteer",
      "Browserless",
      "Web Scraping",
      "Workflow Automation",
    ],
  },
  {
    title: "Mobile & Desktop",
    items: [
      "React Native",
      "Expo",
      "Electron",
      "Cross-platform Apps",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Supabase",
      "PostgreSQL",
      "Docker",
      "Render",
      "Vercel",
      "GitHub Actions",
    ],
  },
];

function TechPill({ label, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      className="
        group relative overflow-hidden
        px-5 py-3 rounded-2xl
        bg-white/50
        backdrop-blur-xl
        border border-white/40
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
      "
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-primary-soft/10" />
      </div>

      <div className="relative z-10 text-sm sm:text-base text-black/75 font-medium tracking-tight">
        {label}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="relative py-36 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <GlassBubbles />
      </div>

      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary-soft/10 blur-[180px]" />

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
            Technologies & Systems
          </div>

          <h2 className="mt-8 text-4xl sm:text-6xl font-semibold tracking-tight text-black leading-[1]">
            Built with modern
            <br />
            engineering tools.
          </h2>

          <p className="mt-6 text-black/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Technologies carefully selected to build scalable products,
            reliable automations, and high-performance applications.
          </p>

        </motion.div>
      </div>

      {/* groups */}
      <div className="relative z-10 mt-24 max-w-6xl mx-auto px-6 space-y-16">

        {groups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: groupIndex * 0.05,
            }}
          >

            {/* title */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight">
                {group.title}
              </h3>
            </div>

            {/* pills */}
            <div className="flex flex-wrap gap-4">
              {group.items.map((item, i) => (
                <TechPill
                  key={item}
                  label={item}
                  delay={i * 0.04}
                />
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}