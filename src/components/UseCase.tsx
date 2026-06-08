import { motion } from "framer-motion";
import GlassBubbles from "./background/GlassBubbles";

const cases = [
  {
    title: "Enterprise Ad Operations Data Pipeline",
    problem:
      "Advertising performance data was fragmented across multiple platforms, requiring manual extraction and consolidation into reporting sheets.",
    solution:
      "Designed and implemented an automated data pipeline that aggregates advertising metrics from multiple ad networks and synchronizes structured reporting data into centralized sheets.",
    result:
      "Standardized reporting workflow across marketing operations and eliminated manual data compilation.",
  },

  {
    title: "Real-Time Crypto Market Data & Pricing System",
    problem:
      "Business systems lacked a reliable mechanism to continuously track and normalize crypto market data for internal pricing and reporting.",
    solution:
      "Built a scheduled data ingestion system that collects market data from Binance, applies rate normalization logic, and updates internal backoffice systems on an hourly cadence.",
    result:
      "Enabled consistent real-time financial visibility across internal trading and reporting tools.",
  },

  {
    title: "Controlled SQL Execution & Reporting Desktop Platform",
    problem:
      "Teams were directly accessing analytics infrastructure (Superset) and executing unmanaged SQL queries, creating operational risk and inconsistency.",
    solution:
      "Architected a desktop execution layer that integrates with Asana task workflows, allowing controlled SQL execution and generating standardized, downloadable reporting outputs without direct database access.",
    result:
      "Improved data governance, reduced query-level risk, and enforced controlled reporting workflows.",
  },

  {
    title: "Enterprise Spreadsheet Governance & Monitoring System",
    problem:
      "Critical business spreadsheets lacked observability, resulting in outdated reports and delayed updates across teams.",
    solution:
      "Developed a centralized monitoring system that scans registered spreadsheets, evaluates update timestamps, and detects stale reporting states. Integrated alerting via Telegram for team leads.",
    result:
      "Improved data reliability across reporting operations and introduced proactive monitoring for business-critical spreadsheets.",
  },

  {
    title: "Multi-Platform Ad Account Monitoring System",
    problem:
      "Ad account balances across multiple platforms (Adsterra, AdCash, and others) were tracked manually, increasing operational overhead and risk of oversight.",
    solution:
      "Built a centralized monitoring system that aggregates account balance data across advertising platforms and standardizes visibility into financial status.",
    result:
      "Reduced operational monitoring effort and improved financial oversight across ad operations.",
  },

  {
    title: "Identity Verification & Compliance KYC Platform (Face API Integration)",
    problem:
      "User onboarding required manual identity verification, creating delays and inconsistent validation outcomes.",
    solution:
      "Engineered a KYC verification workflow using Face API for facial detection and matching, combined with camera-based ID capture (front/back), validation checks, and watermarking for audit integrity before submission to backoffice systems.",
    result:
      "Streamlined identity verification workflow and improved compliance processing efficiency.",
  },

  {
    title: "Risk Intelligence & Abuse Detection API",
    problem:
      "Risk operations lacked a unified system to detect fraudulent behaviors such as multi-accounting and bonus abuse across backend systems.",
    solution:
      "Developed a centralized risk analysis API that aggregates backend signals and applies rule-based detection for suspicious account patterns and behavioral anomalies.",
    result:
      "Strengthened fraud detection capabilities and improved risk enforcement across systems.",
  },

  {
    title: "Unified Email Aggregation & Workspace Client (NaviSync)",
    problem:
      "Users managing multiple email accounts lacked a centralized interface for monitoring communications.",
    solution:
      "Built a unified read-only email aggregation client that connects multiple email providers into a single interface for consolidated viewing.",
    result:
      "Improved productivity by reducing context switching across email platforms.",
  },

  {
    title: "Distributed Link Intelligence & Management Platform (NaviLink)",
    problem:
      "Important digital resources and links were scattered across multiple tools, chats, and notes with no structured organization.",
    solution:
      "Designed a link management system that enables categorization, storage, and controlled sharing of digital resources across teams and users.",
    result:
      "Improved knowledge organization and enabled structured information sharing.",
  },

  {
    title: "Indoor Navigation & Spatial Mapping Engine (NaviAtlas)",
    problem:
      "There was no efficient system to test, simulate, and validate indoor SVG-based navigation maps for spatial layouts.",
    solution:
      "Built an indoor mapping and visualization engine that supports SVG-based spatial structures for testing navigation paths and layout validation.",
    result:
      "Accelerated prototyping and validation of indoor navigation systems for spatial applications.",
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
            Real workflows designed to remove repetitive tasks, improve
            visibility, and help teams move faster.
          </p>
        </motion.div>
      </div>

      {/* cards */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {cases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
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
