import { useState, useEffect } from "react";
import "./styles/NavbarDotStyle.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled more than 45% of viewport height
      if (window.scrollY > window.innerHeight * 0.45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Program", href: "#" },
    { name: "Tentang Kami", href: "#" },
    { name: "Kontak", href: "#" },
  ];

  return (
    <nav
      className={`
                fixed top-6 left-1/2 -translate-x-1/2 z-50
                w-[90%] max-w-5xl
                backdrop-blur-xl
                border
                rounded-[2rem]
                transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                ${
                  isScrolled
                    ? "bg-[#0e489b] border-[#0e489b]/20 shadow-[0_20px_50px_rgba(14,72,155,0.3)] h-16 opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10 pointer-events-none"
                }
            `}
    >
      <div className="relative flex items-center h-full px-8">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div
            className={`
                            w-10 h-10
                            rounded-2xl
                            flex items-center justify-center
                            shadow-lg transition-all duration-500
                            ${isScrolled ? "bg-white" : "bg-gradient-to-br from-[#0e489b] to-[#0047ff]"}
                        `}
          >
            <span
              className={`font-black text-xl italic leading-none transition-colors duration-500 ${isScrolled ? "text-[#0e489b]" : "text-white"}`}
            >
              P.
            </span>
          </div>
          <span
            className={`text-lg font-bold hidden sm:block transition-colors duration-500 ${isScrolled ? "text-white" : "bg-clip-text text-transparent bg-gradient-to-r from-[#0e489b] to-[#0047ff]"}`}
          >
            PONDOK PE
          </span>
        </div>

        {/* CENTER: Desktop Navigation */}
        <div
          className="
                        absolute left-1/2 -translate-x-1/2
                        hidden md:flex items-center gap-1
                    "
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`
        relative px-6 py-2 rounded-xl
        text-sm font-semibold tracking-wide
        transition-all duration-300 group
        ${
          isScrolled
            ? active === item.name
              ? "text-white"
              : "text-white/70 hover:text-white"
            : active === item.name
              ? "text-[#0e489b]"
              : "text-[#0e489b]/70 hover:text-[#0e489b]"
        }
        `}
            >
              {/* Hover background */}
              <span
                className={`
            absolute inset-0 scale-75 opacity-0
            group-hover:scale-100 group-hover:opacity-100
            transition-all duration-300 rounded-xl
            ${isScrolled ? "bg-white/10" : "bg-[#0e489b]/5"}
        `}
              />

              {/* Text */}
              <span className="relative z-10">{item.name}</span>

              {/* DOT INDICATOR */}
              <div
                className={`
            absolute left-1/2 -translate-x-1/2
            flex gap-1
            transition-opacity duration-300
            ${
              active === item.name
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }
        `}
              >
                <span className="dot dot-1" />
                <span className="dot dot-2" />
                <span className="dot dot-3" />
              </div>
            </a>
          ))}
        </div>

        {/* RIGHT: CTA Button (Desktop) */}
        <div className="hidden md:block ml-auto">
          <button
            className={`
                        px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-md active:scale-95
                        ${
                          isScrolled
                            ? "bg-white text-[#0e489b] hover:bg-[#ffc80f] hover:text-[#0e489b]"
                            : "bg-[#0e489b] text-white hover:bg-[#0047ff] hover:shadow-[#0047ff]/30"
                        }
                    `}
          >
            Mulai Sekarang
          </button>
        </div>

        {/* MOBILE: Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`
                        ml-auto md:hidden
                        w-12 h-12
                        flex items-center justify-center
                        rounded-2xl
                        transition-all duration-300
                        ${isScrolled ? "text-white hover:bg-white/10" : "text-[#0e489b] hover:bg-[#0e489b]/10"}
                    `}
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${open ? "top-2.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${open ? "top-2.5 -rotate-45" : "top-5"}`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
                    md:hidden
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
                    ${isScrolled ? "bg-[#0e489b]" : "bg-white"}
                    rounded-b-[2rem]
                `}
      >
        <div className="px-6 pb-8 pt-2 flex flex-col gap-2">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActive(item.name);
                setOpen(false);
              }}
              className={`
                                px-6 py-4 rounded-2xl
                                text-base font-bold
                                transition-all duration-300
                                ${
                                  active === item.name
                                    ? isScrolled
                                      ? "bg-white text-[#0e489b]"
                                      : "bg-[#0e489b] text-white"
                                    : isScrolled
                                      ? "text-white/80 hover:bg-white/10"
                                      : "text-[#0e489b] hover:bg-[#0e489b]/5"
                                }
                            `}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
