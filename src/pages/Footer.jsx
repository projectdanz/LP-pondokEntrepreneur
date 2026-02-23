import { Instagram, Youtube, Music2, MessageCircle } from "lucide-react";
import IconPondok from "../../public/image_pe/icon_pe(04).svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/pondokentrepreneur.official",
      label: "Instagram",
      hoverColor:
        "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
    },
    {
      icon: Music2,
      href: "https://www.tiktok.com/@pondokjagoentrepreneur",
      label: "TikTok",
      hoverColor: "hover:bg-black",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@PonpesEntrepreneur",
      label: "YouTube",
      hoverColor: "hover:bg-[#FF0000]",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/6281529002900",
      label: "WhatsApp",
      hoverColor: "hover:bg-green-600",
    },
  ];

  return (
    <footer className="w-full bg-[#0b3883] pt-16 pb-8 px-8 rounded-2xl">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Left Side: Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="flex items-center gap-3">
              <img
                src={IconPondok}
                alt="Pondok Entrepreneur"
                className="w-12 h-12 object-contain brightness-0 invert"
              />
              <span className="text-xl font-black text-white tracking-tighter uppercase">
                Pondok <span className="text-[#ffca11]">Entrepreneur</span>
              </span>
            </div>
            <p className="text-white/50 text-sm max-w-xs font-medium">
              Ekosistem pembentukan pengusaha muda terbaik di Indonesia. Mulai,
              Tumbuh, dan Meluncur.
            </p>
          </div>

          {/* Right Side: Social Media */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <p className="text-white font-bold text-sm uppercase tracking-widest">
              Ikuti Perjalanan Kami
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${social.hoverColor}`}
                >
                  <social.icon size={22} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
          <p className="text-white/30 text-xs font-bold uppercase tracking-[0.2em] text-center">
            &copy; {currentYear} Pondok Entrepreneur. All Rights Reserved.
          </p>
          {/* Simple Bottom Decoration */}
          <div className="w-12 h-1 bg-[#ffca11] rounded-full opacity-30" />
        </div>
      </div>
    </footer>
  );
}
