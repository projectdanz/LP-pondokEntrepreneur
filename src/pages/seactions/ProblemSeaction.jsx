import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../../components/Card";

export default function ProblemSeaction() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/image_santri/santri_berfikir.svg",
    "/image_santri/santri_bertanya.svg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const problems = [
    { text: "Terlalu banyak teori, nol eksekusi", position: "top", delay: 0 },
    {
      text: "Tidak punya mentor yang benar-benar peduli",
      position: "left-mid",
      delay: 0.2,
    },
    { text: "Lingkungan tidak mendukung", position: "left-bottom", delay: 0.4 },
    {
      text: "Takut gagal karena tidak tahu sistemnya",
      position: "right-mid",
      delay: 0.6,
    },
    {
      text: "Bingung mulai dari ide, marketing, sampai closing",
      position: "right-bottom",
      delay: 0.8,
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#f8fafc] overflow-hidden min-h-screen flex flex-col items-center">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-[#0b3883]/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-[#0b3883]/10 rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#0e489b] font-bold tracking-widest text-sm uppercase mb-4 block"
        >
          Common Challenges
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-[#0b3883] leading-tight"
        >
          Kenapa Banyak Bisnis
          <br />
          <span className="text-[#ffca11] drop-shadow-sm">
            Gagal Sebelum Mulai?
          </span>
        </motion.h2>
      </div>

      <div className="container mx-auto max-w-6xl relative mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 min-h-max md:min-h-162.5">
        {/* Connection Lines (Desktop Only) */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none opacity-20"
          viewBox="0 0 1000 600"
        >
          <line
            x1="500"
            y1="300"
            x2="500"
            y2="80"
            stroke="#0b3883"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="500"
            y1="300"
            x2="250"
            y2="200"
            stroke="#0b3883"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="500"
            y1="300"
            x2="250"
            y2="400"
            stroke="#0b3883"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="500"
            y1="300"
            x2="750"
            y2="200"
            stroke="#0b3883"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <line
            x1="500"
            y1="300"
            x2="750"
            y2="400"
            stroke="#0b3883"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Animated Central Image (Enlarged, No Border) */}
        <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
          <div className="absolute inset-0 z-20 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(11,56,131,0.1)]"
              alt="Santri"
            />
          </AnimatePresence>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/5 rounded-[100%] blur-3xl shadow-2xl" />
        </div>

        {/* Desktop Layout Cards (Absolute) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {/* Top Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto"
          >
            <Card variant="path-item" className="w-75!">
              {problems[0].text}
            </Card>
          </motion.div>

          {/* Left Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute top-[20%] left-[2%] pointer-events-auto"
          >
            <Card variant="path-item" className="w-70!">
              {problems[1].text}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute bottom-[20%] left-[2%] pointer-events-auto"
          >
            <Card variant="path-item" className="w-70!">
              {problems[2].text}
            </Card>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute top-[20%] right-[2%] pointer-events-auto"
          >
            <Card variant="path-item" className="w-70!">
              {problems[3].text}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute bottom-[20%] right-[2%] pointer-events-auto"
          >
            <Card variant="path-item" className="w-70!">
              {problems[4].text}
            </Card>
          </motion.div>
        </div>

        {/* Mobile Layout Cards (Standard Flow) */}
        <div className="md:hidden flex flex-col gap-4 px-4 z-20 w-full">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card
                variant="path-item"
                className="w-full text-sm py-3 px-4 shadow-md"
              >
                {prob.text}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Summary Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 md:mt-16 text-center max-w-2xl px-6 relative z-10"
      >
        <p className="text-[#0e489b]/70 font-medium italic">
          "Banyak yang punya mimpi besar, tapi terjebak dalam kebingungan tanpa
          arah. Kami hadir untuk memutus rantai masalah ini."
        </p>
      </motion.div>
    </section>
  );
}
