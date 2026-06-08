import { motion } from "framer-motion";
import {
  FiMail,
  FiSend,
  FiLinkedin,
  FiArrowUpRight,
  FiGlobe,
  FiCpu,
} from "react-icons/fi";

const contacts = [
  {
    label: "System Inquiry (Email)",
    value: "Direct project & system discussions",
    icon: FiMail,
    href: "mailto:johnpaul@email.com",
  },
  {
    label: "Automation Requests (Telegram)",
    value: "Fast coordination for workflows & systems",
    icon: FiSend,
    href: "https://t.me/yourtelegram",
  },
  {
    label: "Professional Profile (LinkedIn)",
    value: "Engineering background & experience",
    icon: FiLinkedin,
    href: "https://linkedin.com",
  },
  {
    label: "System Portfolio",
    value: "Live projects, architectures & case studies",
    icon: FiGlobe,
    href: "#projects",
  },
];

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden rounded-[36px]">

      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary-soft/20 blur-[200px] rounded-full" />
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="
          relative z-10
          max-w-5xl mx-auto
          px-6 sm:px-10
          py-14 sm:py-20
          rounded-[36px]
          bg-white/40
          backdrop-blur-2xl
          border border-white/40
          shadow-[0_30px_100px_rgba(0,0,0,0.12)]
        "
      >

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-black leading-[1.1]">
            Let’s connect
            <br />
            and build systems
          </h2>

          <p className="mt-6 text-black/60 text-base sm:text-lg">
            Open for automation systems, backend architecture, data pipelines,
            and full-stack product engineering work.
          </p>
        </div>

        {/* CONTACT LIST */}
        <div className="mt-14 space-y-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.a
                key={i}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -2 }}
                className="
                  group flex items-center justify-between
                  px-6 py-5
                  rounded-3xl
                  bg-white/50
                  border border-white/40
                  backdrop-blur-xl
                  transition
                  hover:bg-white/70
                "
              >
                {/* left */}
                <div className="flex items-center gap-5">
                  <div className="
                    w-14 h-14
                    rounded-2xl
                    bg-white/60
                    border border-white/40
                    flex items-center justify-center
                  ">
                    <Icon className="text-primary" size={22} />
                  </div>

                  <div>
                    <div className="text-base font-semibold text-black">
                      {c.label}
                    </div>
                    <div className="text-sm text-black/50">
                      {c.value}
                    </div>
                  </div>
                </div>

                {/* arrow */}
                <div className="text-black/30 group-hover:text-primary transition">
                  <FiArrowUpRight size={18} />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* FOOT NOTE */}
        <div className="mt-14 text-center text-sm text-black/40">
          Systems engineering • Automation • APIs • Scalable architecture
        </div>
      </motion.div>
    </section>
  );
}