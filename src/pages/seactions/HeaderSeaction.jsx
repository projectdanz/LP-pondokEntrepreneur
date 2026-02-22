import { motion } from "framer-motion";
import Button from "../../components/Button";

export default function HeaderSeaction() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-white overflow-hidden ">
      {/* Background Decorative Elements (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-100 h-100 bg-[#0b3883]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-75 h-75 bg-[#ffca11]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center z-10">
        {/* Top Badge/Bar as seen in the image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0b3883]/5 border border-[#0b3883]/10 mb-10 group cursor-default"
        >
          <div className="w-6 h-6 rounded-full bg-[#ffca11] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
          </div>
          <span className="text-[#0b3883] text-sm font-medium tracking-wide">
            Pondok Entrepreneur - Batch 2026
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#0b3883] leading-[1.1] mb-8"
        >
          “Belajar Bisnis Itu Mudah. <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0b3883] to-[#0e489b]">
            Yang Sulit Itu Lingkungannya.
          </span>
          ”
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[#0e489b] max-w-2xl mb-6 leading-relaxed"
        >
          Bangun ekosistem bisnis yang suportif. Kita tidak hanya belajar teori,
          tapi langsung praktek dengan bimbingan praktisi berpengalaman.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="secondary" size="lg" className="shadow-xl">
            Daftar Sekarang
          </Button>
        </motion.div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-[#ffca11]/20 to-transparent blur-lg" />
    </section>
  );
}
