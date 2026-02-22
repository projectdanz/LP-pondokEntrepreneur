import { motion } from "framer-motion";
import Card from "../../components/Card";

export default function SoluctionSeaction() {
  const solutions = [
    {
      title: "1. Dibentuk Pola Pikirnya",
      align: "side-right",
      content: [
        "Mindset bisnis yang visioner",
        "Mental tahan banting menghadapi kegagalan",
        "Cara berpikir strategis dalam setiap keputusan",
      ],
    },
    {
      title: "2. Dilatih Skill Nyata",
      align: "side-left",
      content: [
        "Riset pasar & validasi ide",
        "Marketing & branding yang efektif",
        "Closing & negosiasi tingkat tinggi",
        "Membangun & memimpin tim hebat",
        "Manajemen keuangan bisnis dasar",
      ],
    },
    {
      title: "3. Dibimbing Mentor Praktisi",
      align: "side-right",
      content: [
        "Bukan sekadar dosen teori akademis",
        "Bukan motivator yang hanya pandai merangkai kata",
        "Tapi orang yang sudah terbukti menjalankan bisnis nyata",
      ],
    },
    {
      title: "4. Hidup Dalam Lingkungan Bertumbuh",
      align: "side-left",
      content: [
        "Lingkungan positif menentukan masa depanmu",
        "Hidup bersama orang-orang dengan visi besar",
        "Saling mendukung dalam perjalanan membangun bisnis",
      ],
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#f1f5f9]/30 overflow-hidden min-h-screen">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0b3883]/2 -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Content */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#0b3883]/10 text-[#0b3883] text-sm font-bold mb-6"
          >
            OUR ECOSYSTEM
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0b3883] leading-tight max-w-4xl mx-auto"
          >
            Pondok Entrepreneur adalah ekosistem pembentukan{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#0b3883] to-[#0e489b]">
              pengusaha muda.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-[#0e489b]/70 font-medium"
          >
            Di sini kamu tidak hanya belajar teori. Tapi kamu akan dibentuk
            menjadi:
          </motion.p>
        </div>

        {/* Alternating Expandable Cards List */}
        <div className="flex flex-col gap-8 md:gap-12 max-w-4xl mx-auto">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                x: item.align === "side-right" ? -30 : 30,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex ${item.align === "side-right" ? "justify-start md:pr-20" : "justify-end md:pl-20"}`}
            >
              <Card
                variant="expandable"
                alignButton={item.align}
                title={item.title}
                size="lg"
                className="w-full hover:shadow-2xl transition-shadow duration-300"
              >
                <ul className="space-y-3 mt-2">
                  {item.content.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffca11] shrink-0" />
                      <span className="text-[#0e489b]/80 font-medium leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA or Visual Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="w-24 h-1.5 bg-[#ffca11] mx-auto rounded-full mb-8" />
          <p className="text-[#0b3883] text-xl font-bold italic">
            "Bukan sekadar kursus, ini adalah rumah perjuangan pengusaha."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
