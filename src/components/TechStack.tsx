import { motion } from "framer-motion";
import GlassBubbles from "./background/GlassBubbles";
type TechPillProps = {
  label: string;
};
const groups = [
  {
    title: "Frontend Systems",
    items: [
      "React (Component-driven architecture)",
      "TypeScript (Type-safe UI systems)",
      "TailwindCSS (Design system implementation)",
      "Framer Motion (UI interaction systems)",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js (Service layer architecture)",
      "Express (RESTful API design)",
      "Laravel (Enterprise backend systems)",
      "Python (Data + automation services)",
      "REST / Network APIs (External system integrations)",
    ],
  },
  {
    title: "Automation & Data Pipelines",
    items: [
      "Playwright (Browser automation workflows)",
      "Puppeteer (Headless execution systems)",
      "Browserless (Scalable scraping infrastructure)",
      "Web Scraping (Data extraction pipelines)",
      "Workflow Automation (Event-driven task systems)",
    ],
  },
  {
    title: "Mobile & Desktop Systems",
    items: [
      "React Native (Cross-platform application architecture)",
      "Expo (Rapid mobile deployment pipeline)",
      "Electron (Desktop automation tools)",
      "Cross-platform Systems (Unified codebase delivery)",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    items: [
      "Supabase (Backend-as-a-service architecture)",
      "PostgreSQL (Relational data modeling)",
      "Docker (Containerized deployment systems)",
      "Render (Cloud deployment pipelines)",
      "Vercel (Edge deployment workflows)",
      "GitHub Actions (CI/CD automation)",
      "Hostinger (Production hosting & DNS management)",
    ],
  },
];

function TechPill({ label }: TechPillProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        transform-gpu
        rounded-2xl
        border
        border-white/40
        bg-white/50
        px-5
        py-3
        backdrop-blur-xl
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        transition-transform
        duration-200
        hover:scale-[1.03]
        active:scale-[0.98]
      "
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-primary-soft/10" />
      </div>

      <div className="relative z-10 text-sm font-medium tracking-tight text-black/75 sm:text-base">
        {label}
      </div>
    </div>
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-primary-soft/10 blur-[120px]" />

      {/* heading */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
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
            Technologies carefully selected to build scalable products, reliable
            automations, and high-performance applications.
          </p>
        </motion.div>
      </div>

      {/* groups */}
      <div className="relative z-10 mt-24 max-w-6xl mx-auto px-6 space-y-16">
        {groups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: groupIndex * 0.04,
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
              {group.items.map((item) => (
                <TechPill
                  key={item}
                  label={item}
                  // delay={i * 0.04}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
