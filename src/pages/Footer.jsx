import { Instagram, Youtube, Music2 } from "lucide-react";
import IconPondok from "../../public/image_pe/icon_pe(04).svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-16 pb-8 px-4 border-t border-[#0b3883]/5">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Left Side: Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="flex items-center gap-3">
              <img
                src={IconPondok}
                alt="Pondok Entrepreneur"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-black text-[#0b3883] tracking-tighter uppercase">
                Pondok <span className="text-[#ffca11]">Entrepreneur</span>
              </span>
            </div>
            <p className="text-[#0e489b]/60 text-sm max-w-xs font-medium">
              Ekosistem pembentukan pengusaha muda terbaik di Indonesia. Mulai,
              Tumbuh, dan Meluncur.
            </p>
          </div>

          {/* Right Side: Social Media */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <p className="text-[#0b3883] font-bold text-sm uppercase tracking-widest">
              Ikuti Perjalanan Kami
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  icon: Instagram,
                  href: "#",
                  color:
                    "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
                },
                { icon: Music2, href: "#", color: "hover:bg-[#000000]" },
                { icon: Youtube, href: "#", color: "hover:bg-[#FF0000]" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-[#0b3883]/5 text-[#0b3883] transition-all duration-300 hover:text-white hover:shadow-xl hover:-translate-y-1 ${social.color}`}
                >
                  <social.icon size={22} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright */}
        <div className="pt-8 border-t border-[#0b3883]/5 flex flex-col items-center gap-4">
          <p className="text-[#0e489b]/40 text-xs font-bold uppercase tracking-[0.2em] text-center">
            &copy; {currentYear} Pondok Entrepreneur. All Rights Reserved.
          </p>
          {/* Simple Bottom Decoration */}
          <div className="w-12 h-1 bg-[#ffca11] rounded-full opacity-30" />
        </div>
      </div>
    </footer>
  );
}
