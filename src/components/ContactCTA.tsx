import { motion } from "framer-motion";
import {
  FiMail,
  FiFacebook,
  FiSend,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

const socials = [
  {
    label: "Email",
    value: "johnpaul@email.com",
    icon: FiMail,
    href: "mailto:johnpaul@email.com",
  },
  {
    label: "Telegram",
    value: "@yourtelegram",
    icon: FiSend,
    href: "https://t.me/yourtelegram",
  },
  {
    label: "Facebook",
    value: "facebook.com/jp.dev",
    icon: FiFacebook,
    href: "https://facebook.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jpdev",
    icon: FiLinkedin,
    href: "https://linkedin.com",
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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
            Let’s build something
            <br />
            meaningful together
          </h2>

          <p className="mt-6 text-black/60 text-base sm:text-lg">
            Reach out through any platform below — I usually respond within a day.
          </p>
        </div>

        {/* SOCIAL LIST */}
        <div className="mt-14 space-y-4">
          {socials.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.a
                key={i}
                href={s.href}
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
                      {s.label}
                    </div>
                    <div className="text-sm text-black/50">
                      {s.value}
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
          Available for freelance automation • web • mobile • desktop systems
        </div>
      </motion.div>
    </section>
  );
}