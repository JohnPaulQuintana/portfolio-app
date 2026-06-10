import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const y = element.getBoundingClientRect().top + window.pageYOffset - 120;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4">
      {/* FLOATING GLASS BAR */}
      <div
        className={`
          w-full max-w-6xl
          flex items-center justify-between
          px-5 sm:px-8 py-3
          transition-all duration-300 ease-in-out
          rounded-2xl

          ${
            scrolled
              ? "bg-white/60 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/40"
              : "bg-white/30 backdrop-blur-xl border border-white/30"
          }
        `}
      >
        {/* LOGO */}
        <div className="flex items-center gap-2 bg-white rounded-xl p-2 shadow-md">
          <img
            src="/logo.png"
            alt="JP.Dev Logo"
            className="w-9 h-9 object-contain"
          />
        </div>

        {/* NAV (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/60">
          <button
            onClick={() => scrollToSection("solutions")}
            className="hover:text-primary transition"
          >
            Solutions
          </button>

          <button
            onClick={() => scrollToSection("work")}
            className="hover:text-primary transition"
          >
            Work
          </button>

          <button
            onClick={() => scrollToSection("stack")}
            className="hover:text-primary transition"
          >
            Stack
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition"
          >
            Contact
          </button>
        </nav>
        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          {/* CTA */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jpquintana01@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="
    group inline-flex items-center gap-2
    px-4 sm:px-5 py-2
    rounded-xl
    bg-white/50
    border border-white/40
    backdrop-blur-xl
    text-sm text-black/70
    hover:bg-white/70
    transition
    shadow-sm
  "
          >
            Hire Me
            <FiArrowUpRight
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              size={16}
            />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/50 border border-white/40 shadow-sm text-black/70"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (ANIMATED) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-4 flex flex-col gap-3 text-sm text-black/70"
          >
            <button
              className="text-left"
              onClick={() => {
                scrollToSection("solutions");
                setMenuOpen(false);
              }}
            >
              Solutions
            </button>

            <button
              className="text-left"
              onClick={() => {
                scrollToSection("work");
                setMenuOpen(false);
              }}
            >
              Work
            </button>

            <button
              className="text-left"
              onClick={() => {
                scrollToSection("stack");
                setMenuOpen(false);
              }}
            >
              Stack
            </button>

            <button
              className="text-left"
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
