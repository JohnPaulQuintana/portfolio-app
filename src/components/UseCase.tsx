import { motion } from "framer-motion";
import GlassBubbles from "./background/GlassBubbles";

const cases = [
  {
    title: "Automated Reporting Pipeline",
    problem:
      "Teams manually generated reports every day across multiple sheets.",
    solution:
      "Built an automation workflow that collects, validates, and generates reports automatically.",
    result: "Reduced reporting time from 3 hours to 10 minutes.",
  },

  {
    title: "Internal Operations Dashboard",
    problem:
      "Managers had no centralized visibility of ongoing operations.",
    solution:
      "Created a real-time dashboard with analytics, tracking, and monitoring tools.",
    result: "Improved operational visibility across departments.",
  },

  {
    title: "Mobile Field Reporting System",
    problem:
      "Field teams relied on paper-based reporting and delayed updates.",
    solution:
      "Developed a mobile app for instant submissions with cloud syncing.",
    result: "Faster reporting and reduced manual encoding errors.",
  },
];

export default function UseCases() {
  return (
    <section className="relative py-36 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <GlassBubbles />
      </div>

      {/* ambient glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[900px] bg-primary-soft/10 blur-[180px] rounded-full" />

      {/* heading */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/40 backdrop-blur-xl text-primary text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Real-World Systems
          </div>

          <h2 className="mt-8 text-4xl sm:text-6xl font-semibold tracking-tight text-black leading-[1]">
            Built for actual
            <br />
            business operations.
          </h2>

          <p className="mt-6 text-black/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Real workflows designed to remove repetitive tasks,
            improve visibility, and help teams move faster.
          </p>

        </motion.div>
      </div>

      {/* cards */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-8">

        {cases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="
              relative overflow-hidden
              rounded-[32px]
              border border-white/30
              bg-white/40
              backdrop-blur-2xl
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              p-8 sm:p-10
            "
          >

            {/* glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-soft/10 blur-3xl rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-3 gap-10">

              {/* problem */}
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary">
                  Problem
                </div>

                <p className="mt-4 text-black/70 leading-relaxed">
                  {item.problem}
                </p>
              </div>

              {/* solution */}
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary">
                  Solution
                </div>

                <p className="mt-4 text-black/70 leading-relaxed">
                  {item.solution}
                </p>
              </div>

              {/* result */}
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary">
                  Result
                </div>

                <p className="mt-4 text-black/90 font-medium leading-relaxed">
                  {item.result}
                </p>
              </div>

            </div>

            <h3 className="relative z-10 mt-10 text-2xl sm:text-3xl font-semibold text-black tracking-tight">
              {item.title}
            </h3>

          </motion.div>
        ))}

      </div>
    </section>
  );
}