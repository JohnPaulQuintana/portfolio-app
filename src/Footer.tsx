import {
  FiMail,
  FiLinkedin,
  FiSend,
  FiArrowUp,
  FiGlobe,
  FiDatabase,
  FiCpu,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary-soft/10 blur-[200px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* GLASS CARD */}
        <div className="
          rounded-[28px]
          bg-white/40
          backdrop-blur-2xl
          border border-white/30
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          px-6 sm:px-12 py-12
        ">

          {/* TOP */}
          <div className="flex flex-col md:flex-row justify-between gap-12">

            {/* BRAND */}
            <div className="max-w-sm">
              <div className="text-primary font-semibold text-lg tracking-tight">
                JP.DEV
              </div>

              <p className="mt-4 text-black/60 text-sm leading-relaxed">
                Systems Engineer focused on automation, backend infrastructure,
                and scalable application architecture that reduces manual work
                and improves operational efficiency.
              </p>
            </div>

            {/* ENGINEERING STACK LINKS */}
            <div className="grid grid-cols-2 gap-10 text-sm">

              <div className="space-y-3">
                <div className="text-black font-medium">Engineering</div>

                <div className="flex items-center gap-2 text-black/60">
                  <FiCpu size={14} />
                  System Design
                </div>

                <div className="flex items-center gap-2 text-black/60">
                  <FiDatabase size={14} />
                  Data Pipelines
                </div>

                <div className="flex items-center gap-2 text-black/60">
                  <FiGlobe size={14} />
                  Web Platforms
                </div>
              </div>

              {/* CONNECT */}
              <div className="space-y-3">
                <div className="text-black font-medium">Contact</div>

                <a
                  className="flex items-center gap-2 text-black/60 hover:text-primary transition"
                  href="mailto:jpquintana01@gmail.com"
                >
                  <FiMail size={14} /> Email
                </a>

                <a
                  className="flex items-center gap-2 text-black/60 hover:text-primary transition"
                  href="https://linkedin.com/in/john-paul-quintana118145287/"
                >
                  <FiLinkedin size={14} /> LinkedIn
                </a>

                <a
                  className="flex items-center gap-2 text-black/60 hover:text-primary transition"
                  href="https://t.me/exousianavi2"
                >
                  <FiSend size={14} /> Telegram
                </a>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-12 border-t border-white/30" />

          {/* BOTTOM */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

            {/* COPYRIGHT */}
            <div className="text-xs text-black/40">
              © {new Date().getFullYear()} JP.DEV — Built as a systems portfolio
            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 text-xs text-black/40">
              <span className="px-3 py-1 rounded-full bg-white/40 border border-white/30">
                System Architecture
              </span>
              <span className="px-3 py-1 rounded-full bg-white/40 border border-white/30">
                Automation
              </span>
              <span className="px-3 py-1 rounded-full bg-white/40 border border-white/30">
                API Integration
              </span>
            </div>
          </div>
        </div>

        {/* BACK TO TOP */}
        <div className="mt-8 text-center">
          <a
            href="#top"
            className="inline-flex items-center gap-1 text-xs text-black/40 hover:text-primary transition"
          >
            <FiArrowUp size={12} />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}