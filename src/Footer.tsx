export default function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary-soft/10 blur-[200px] rounded-full" />
      </div>

      {/* GLASS BASE */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="
          rounded-[28px]
          bg-white/40
          backdrop-blur-2xl
          border border-white/30
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
          px-8 sm:px-12 py-12
        ">

          {/* TOP */}
          <div className="flex flex-col md:flex-row justify-between gap-12">

            {/* BRAND */}
            <div className="max-w-sm">
              <div className="text-primary font-semibold text-lg tracking-tight">
                JP.DEV
              </div>

              <p className="mt-4 text-black/60 text-sm leading-relaxed">
                Automation Engineer & Full-Stack Developer building systems that remove manual work and scale businesses.
              </p>
            </div>

            {/* LINKS */}
            <div className="grid grid-cols-2 gap-10 text-sm">

              {/* WORK */}
              <div className="space-y-3">
                <div className="text-black font-medium">Work</div>

                <a className="block text-black/60 hover:text-primary transition" href="#projects">
                  Projects
                </a>
                <a className="block text-black/60 hover:text-primary transition" href="#services">
                  Services
                </a>
                <a className="block text-black/60 hover:text-primary transition" href="#process">
                  Process
                </a>
              </div>

              {/* CONNECT */}
              <div className="space-y-3">
                <div className="text-black font-medium">Connect</div>

                <a className="block text-black/60 hover:text-primary transition" href="mailto:youremail@gmail.com">
                  Email
                </a>
                <a className="block text-black/60 hover:text-primary transition" href="https://facebook.com">
                  Facebook
                </a>
                <a className="block text-black/60 hover:text-primary transition" href="https://linkedin.com">
                  LinkedIn
                </a>
                <a className="block text-black/60 hover:text-primary transition" href="https://t.me">
                  Telegram
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
              © {new Date().getFullYear()} JP.DEV — All rights reserved
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 text-xs text-black/40">
              <span className="px-3 py-1 rounded-full bg-white/40 border border-white/30">
                React
              </span>
              <span className="px-3 py-1 rounded-full bg-white/40 border border-white/30">
                Framer Motion
              </span>
              <span className="px-3 py-1 rounded-full bg-white/40 border border-white/30">
                TailwindCSS
              </span>
            </div>

          </div>
        </div>

        {/* BACK TO TOP (SUBTLE APPLE TOUCH) */}
        <div className="mt-8 text-center">
          <a
            href="#top"
            className="text-xs text-black/40 hover:text-primary transition"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}