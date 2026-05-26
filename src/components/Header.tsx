import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-semibold tracking-tight text-primary">
            JP.DEV
          </span>
        </div>

        {/* NAV (desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/60">
          <a href="#home" className="hover:text-primary transition">
            Home
          </a>
          <a href="#skills" className="hover:text-primary transition">
            Skills
          </a>
          <a href="#work" className="hover:text-primary transition">
            Work
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="
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
        </a>
      </div>
    </header>
  );
}