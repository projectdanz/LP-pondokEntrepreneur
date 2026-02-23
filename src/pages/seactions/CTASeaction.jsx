import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/Button";
import { MessageCircle, ArrowRight, Zap } from "lucide-react";

export default function CTASeaction() {
  const [currentMentor, setCurrentMentor] = useState(0);
  const mentors = [
    {
      name: "Abi Rully",
      role: "Founder",
      image: "/image_management/Abi_Rully.svg",
      glowColor: "bg-white",
    },
    {
      name: "Koh Fadhlih",
      role: "CEO",
      image: "/image_management/Koh_Fadhlih.svg",
      glowColor: "bg-[#ffca11]",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMentor((prev) => (prev + 1) % mentors.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="daftar"
      className="relative w-full py-24 px-4 bg-[#0b3883] overflow-hidden rounded-4xl"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#ffca11] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          {/* Images Section - Mentors Carousel */}
          <div className="w-full lg:w-1/2 flex flex-col items-center relative gap-8">
            <div className="relative w-full h-112.5 md:h-150 flex items-end justify-center">
              {/* Background Glow based on active mentor */}
              <motion.div
                key={`glow-${currentMentor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[80%] ${mentors[currentMentor].glowColor} rounded-full blur-3xl`}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMentor}
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.05, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full flex flex-col items-center justify-end"
                >
                  <img
                    src={mentors[currentMentor].image}
                    alt={mentors[currentMentor].name}
                    className="w-full h-[90%] object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-12 md:bottom-24 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-center shadow-2xl"
                  >
                    <p className="text-white font-black text-xl tracking-tight">
                      {mentors[currentMentor].name}
                    </p>
                    <p className="text-[#ffca11] font-bold text-sm uppercase tracking-widest">
                      {mentors[currentMentor].role}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-4">
              {mentors.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentMentor(idx)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    currentMentor === idx
                      ? "w-10 bg-[#ffca11]"
                      : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffca11]/10 text-[#ffca11] font-bold text-xs uppercase tracking-widest mb-8"
            >
              <Zap size={14} className="fill-[#ffca11]" />
              Limited Slot for 2026
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Jangan Tunggu Sampai{" "}
              <span className="text-[#ffca11]">Tahun Depan.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-sm md:text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Kesempatan tidak datang dua kali. Keputusanmu hari ini akan
              menentukan langkah bisnismu dalam 3–5 tahun ke depan. Secure your
              future now!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden border-2 bg-amber-400 hover:bg-amber-500"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  DAFTAR SEKARANG
                </span>
                <ArrowRight
                  size={18}
                  className="absolute z-10 transition-all duration-500 ease-out opacity-0 -left-4 group-hover:opacity-100 group-hover:right-4 group-hover:left-auto text-white"
                />
              </Button>
              <a
                href="https://wa.me/6281529002900?text=hallo%20cs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white! border-white/30! bg-green-600! hover:bg-green-700!"
                >
                  <MessageCircle size={18} className="mr-2" />
                  <span className="text-sm">CHAT ADMIN</span>
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center lg:justify-start gap-4"
            >
              <div className="flex flex-col">
                <span className="text-[#ffca11] text-2xl font-black">
                  DISKON 50%
                </span>
                <span className="text-white/40 text-xs font-medium uppercase tracking-widest text-center lg:text-left">
                  Pendaftar Tahun Ini
                </span>
              </div>
              <div className="h-10 w-px bg-white/10 hidden sm:block" />
              <p className="text-white/60 text-sm max-w-50 text-left hidden sm:block">
                Tingkatkan peluang kesuksesanmu dengan investasi yang tepat.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
