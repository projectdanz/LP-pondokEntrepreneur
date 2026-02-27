import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimoniSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "Dania Is Wara",
      role: "Santri Pondok Entrepreneur #1",
      image: "/image_santri_pe/Dania_Is_Wara.webp",
      text: "Alhamdulillah aku sudah mempunyai beberapa ilmu yang luar biasa seperti: Belajar IT, bisnis & content creation dari zero sampai berani tampil. Tempat aku upgrade diri jadi lebih independent & berani bermimpi besar. Belajar digital marketing, design, & entrepreneurship. Preparing myself to be young entrepreneur from pesantren.",
    },
    {
      name: "Nurul Fauziyyah",
      role: "Santri Pondok Entrepreneur #1",
      image: "/image_santri_pe/Nurul_Fauziyyah.webp",
      text: "Alhamdulillah selama di sini aku merasa banyak sekali perubahan yang aku dapat, karena di sini aku diajarkan untuk berani, tegar, dan memiliki mindset positif. Di sini juga aku belajar banyak skill baru yang InsyaAllah skill tersebut akan bermanfaat di zaman serba digital ini.",
    },
    {
      name: "Wafiq Qurrotul 'Aini",
      role: "Santri Pondok Entrepreneur #1",
      image: "/image_santri_pe/Wafiq_Qurrotul_'Aini.webp",
      text: "Awalnya aku mondok di Pondok Entrepreneur tanpa bayangan akan dapat pengalaman apa. Ternyata di sini aku belajar banyak hal baru, mulai dari bikin konten edukasi dan edit video dari nol sampai bisa. Salah satu pengalaman paling berkesan adalah belajar berani menawarkan produk ke orang asing. Meski awalnya takut dan deg-degan, dari situ aku jadi lebih percaya diri. Mondok di sini bukan cuma soal bisnis, tapi tentang tumbuh jadi pribadi yang lebih berani.",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Berhenti jika sedang di-hover atau di mode mobile
    if (isPaused || isMobile) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, isMobile, testimonials.length]);

  return (
    <section
      id="testimoni"
      className="relative w-full py-24 px-4 bg-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffca11]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0b3883]/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#0b3883] mb-4"
          >
            Apa Kata <span className="text-[#ffca11]">Mereka?</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-[#ffca11] mx-auto rounded-full"
          />
        </div>

        {/* Testimonial Card */}
        <div
          className="relative min-h-80 md:min-h-64"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-[#f8fafc] border border-[#0b3883]/5 rounded-3xl p-8 md:p-12 shadow-lg"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="#ffca11"
                  opacity="0.6"
                >
                  <path d="M11 7.5V14H7.5C7.5 15.93 9.07 17.5 11 17.5V19.5C7.96 19.5 5.5 17.04 5.5 14V7.5H11ZM18.5 7.5V14H15C15 15.93 16.57 17.5 18.5 17.5V19.5C15.46 19.5 13 17.04 13 14V7.5H18.5Z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-[#0e489b]/80 text-lg md:text-xl leading-relaxed italic mb-8">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover border-3 border-[#ffca11] shadow-md"
                />
                <div>
                  <p className="font-black text-[#0b3883] text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[#0e489b]/50 font-bold text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-3 rounded-full transition-all duration-500 ${
                current === idx
                  ? "w-10 bg-[#ffca11]"
                  : "w-3 bg-[#0b3883]/15 hover:bg-[#0b3883]/30"
              }`}
              aria-label={`Testimoni ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
