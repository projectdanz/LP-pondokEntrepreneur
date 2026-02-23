import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("beranda");
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: "beranda", label: "Beranda" },
    { id: "masalah", label: "Masalah" },
    { id: "program", label: "Program" },
    { id: "testimoni", label: "Testimoni" },
    { id: "daftar", label: "Daftar Sekarang" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-5">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const isHovered = hoveredItem === item.id;

        return (
          <div
            key={item.id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Tooltip */}
            <div
              className={`
                absolute right-full mr-4 px-4 py-2 rounded-xl
                bg-[#0b3883] text-white text-sm font-bold
                whitespace-nowrap shadow-lg
                transition-all duration-300 pointer-events-none
                ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
              `}
            >
              {item.label}
              {/* Tooltip Arrow */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-[#0b3883] rotate-45 rounded-sm" />
            </div>

            {/* Dot */}
            <button
              onClick={() => handleClick(item.id)}
              aria-label={item.label}
              className={`
                rounded-full transition-all duration-500 ease-out
                ${
                  isActive
                    ? "w-4 h-4 bg-[#ffca11] shadow-[0_0_12px_rgba(255,202,17,0.5)]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                }
              `}
            />
          </div>
        );
      })}
    </nav>
  );
}
