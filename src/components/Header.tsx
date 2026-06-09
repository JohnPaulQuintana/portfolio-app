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
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#work" className="hover:text-primary transition">Work</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">

          {/* CTA */}
          <a
            href="mailto:jpquintana01@gmail.com"
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
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-4 flex flex-col gap-3 text-sm text-black/70"
          >
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}