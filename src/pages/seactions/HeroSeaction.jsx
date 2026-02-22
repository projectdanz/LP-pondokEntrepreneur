import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Card from "../../components/Card";

export default function HeroSeaction() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate card appearances based on progress
  const cardOpacity1 = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const cardTranslate1 = useTransform(smoothProgress, [0, 0.15], [-30, 0]);

  const cardOpacity2 = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);
  const cardTranslate2 = useTransform(smoothProgress, [0.25, 0.4], [30, 0]);

  const cardOpacity3 = useTransform(smoothProgress, [0.5, 0.65], [0, 1]);
  const cardTranslate3 = useTransform(smoothProgress, [0.5, 0.65], [-30, 0]);

  const cardOpacity4 = useTransform(smoothProgress, [0.65, 0.8], [0, 1]);
  const cardTranslate4 = useTransform(smoothProgress, [0.65, 0.8], [30, 0]);

  // Floating decoration animations
  const floatingY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const rotateSlower = useTransform(smoothProgress, [0, 1], [0, 45]);
  const rotateFaster = useTransform(smoothProgress, [0, 1], [0, -90]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 md:py-32 px-4 bg-white overflow-hidden min-h-[140vh] md:min-h-[160vh]"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large subtle blobs */}
        <div className="absolute top-[20%] -left-[10%] w-96 h-96 bg-[#0b3883]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] -right-[10%] w-96 h-96 bg-[#ffca11]/5 rounded-full blur-3xl" />

        {/* Floating Icons/Shapes for Desktop */}
        <motion.div
          style={{ y: floatingY, rotate: rotateSlower }}
          className="absolute top-[25%] left-[15%] hidden md:block opacity-20"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0b3883"
            strokeWidth="1.5"
          >
            <path d="M12 2v20M2 12h20M7 7l10 10M7 17L17 7" />
          </svg>
        </motion.div>

        <motion.div
          style={{
            y: useTransform(smoothProgress, [0, 1], [0, -150]),
            rotate: rotateFaster,
          }}
          className="absolute top-[60%] right-[12%] hidden md:block opacity-10"
        >
          <div className="w-16 h-16 border-4 border-[#ffca11] rounded-2xl" />
        </motion.div>

        <motion.div
          style={{ y: useTransform(smoothProgress, [0, 1], [0, 50]) }}
          className="absolute bottom-[10%] left-[20%] hidden md:block opacity-15"
        >
          <div className="w-8 h-8 bg-[#0e489b] rounded-full" />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-24 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-[#0b3883] leading-tight px-4"
          >
            Bayangkan dalam 3–6 bulan ke depan:
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#ffca11] mx-auto mt-6 rounded-full" />
        </div>

        {/* Animated Path Container */}
        <div className="absolute top-56 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
          {/* Mobile Path (Vertical) */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-100">
            <motion.div
              className="w-full bg-[#ffca11] origin-top"
              style={{ height: "100%", scaleY: smoothProgress }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ffca11] rounded-full shadow-[0_0_10px_#ffca11]"
              style={{
                top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
              }}
            />
          </div>

          {/* Desktop Path (Zig-zag SVG) */}
          <div className="hidden md:block w-full h-full relative">
            <svg
              viewBox="0 0 800 1000"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full opacity-10"
            >
              <path
                d="M 200,0 C 200,125 600,125 600,250 C 600,375 200,375 200,500 C 200,625 600,625 600,750 C 600,875 400,875 400,1000"
                stroke="#0b3883"
                strokeWidth="4"
                strokeDasharray="8 8"
              />
            </svg>
            <svg
              viewBox="0 0 800 1000"
              fill="none"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full z-10"
            >
              <motion.path
                d="M 200,0 C 200,125 600,125 600,250 C 600,375 200,375 200,500 C 200,625 600,625 600,750 C 600,875 400,875 400,1000"
                stroke="#ffca11"
                strokeWidth="5"
                style={{ pathLength: smoothProgress }}
                strokeLinecap="round"
              />
            </svg>
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 14,
                height: 14,
                borderRadius: "100%",
                backgroundColor: "#ffca11",
                boxShadow: "0 0 15px #ffca11",
                zIndex: 30,
                x: useTransform(
                  smoothProgress,
                  [0, 0.25, 0.5, 0.75, 1],
                  ["25%", "75%", "25%", "75%", "50%"],
                ),
                y: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
          </div>
        </div>

        {/* Cards Content */}
        <div className="relative z-20 space-y-32 md:space-y-40 lg:space-y-48">
          {/* Card 1 - Left */}
          <div className="flex justify-center md:justify-start md:ml-[5%] lg:ml-[10%]">
            <motion.div
              style={{
                opacity: cardOpacity1,
                x: cardTranslate1,
                scale: useTransform(smoothProgress, [0, 0.15], [0.9, 1]),
              }}
            >
              <Card variant="path-item">Kamu punya skill bisnis nyata</Card>
            </motion.div>
          </div>

          {/* Card 2 - Right */}
          <div className="flex justify-center md:justify-end md:mr-[5%] lg:mr-[10%]">
            <motion.div
              style={{
                opacity: cardOpacity2,
                x: cardTranslate2,
                scale: useTransform(smoothProgress, [0.25, 0.4], [0.9, 1]),
              }}
            >
              <Card variant="path-item">
                Punya mentor yang membimbing langsung
              </Card>
            </motion.div>
          </div>

          {/* Card 3 - Left */}
          <div className="flex justify-center md:justify-start md:ml-[5%] lg:ml-[10%]">
            <motion.div
              style={{
                opacity: cardOpacity3,
                x: cardTranslate3,
                scale: useTransform(smoothProgress, [0.5, 0.65], [0.9, 1]),
              }}
            >
              <Card variant="path-item">
                Punya jaringan sesama calon pengusaha
              </Card>
            </motion.div>
          </div>

          {/* Card 4 - Right */}
          <div className="flex justify-center md:justify-end md:mr-[5%] lg:mr-[10%]">
            <motion.div
              style={{
                opacity: cardOpacity4,
                x: cardTranslate4,
                scale: useTransform(smoothProgress, [0.75, 0.9], [0.9, 1]),
              }}
            >
              <Card variant="path-item">Bahkan sudah mulai menghasilkan</Card>
            </motion.div>
          </div>
        </div>

        {/* New Summary Content */}
        <div className="mt-32 md:mt-48 pb-32 md:pb-64 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
          >
            {[
              "Tanpa bingung mulai",
              "Tanpa teori kosong",
              "Tanpa jalan sendirian",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 bg-[#0b3883] text-white rounded-2xl font-bold shadow-lg transform -rotate-1 even:rotate-1"
              >
                <div className="w-2 h-2 bg-[#ffca11] rounded-full animate-pulse" />
                {text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-4xl font-black text-[#0b3883] leading-tight">
              Tempat kamu ditempa bukan hanya untuk paham bisnis,
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0b3883] to-[#0e489b] italic">
                tapi untuk jadi pelaku bisnis.
              </span>
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
