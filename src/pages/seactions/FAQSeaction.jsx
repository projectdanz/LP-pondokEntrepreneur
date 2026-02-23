import { motion } from "framer-motion";
import Card from "../../components/Card";

export default function FAQSeaction() {
  const faqs = [
    {
      question: "Apakah saya harus sudah punya bisnis?",
      answer:
        "Tidak. Kami mulai dari dasar sampai praktik. Kamu akan dibimbing dari nol hingga benar-benar memiliki bisnis yang tervalidasi.",
    },
    {
      question: "Apakah cocok untuk pemula?",
      answer:
        "Ya. Justru ini tempat terbaik untuk memulai dengan sistem yang benar, menghindari kesalahan-kesalahan umum pemula.",
    },
    {
      question: "Bagaimana jika saya belum percaya diri?",
      answer:
        "Itulah fungsi lingkungan dan mentoring. Kami membentuk, bukan menghakimi. Kamu akan tumbuh bersama komunitas yang suportif.",
    },
    {
      question: "Apakah ada jaminan sukses?",
      answer:
        "Kami tidak menjual mimpi instan. Kami menyediakan sistem, mentor, dan lingkungan. Kesuksesan tetap ditentukan oleh komitmen dan kerja kerasmu.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#f8fafc]">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#0b3883] mb-4"
          >
            Sering <span className="text-[#ffca11]">Ditanyakan</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-[#ffca11] mx-auto rounded-full"
          />
        </div>

        <div className="flex flex-col gap-10">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card
                variant="expandable"
                alignButton="bottom-center"
                title={faq.question}
                size="lg"
              >
                <div className="pb-4">
                  <p className="text-[#0e489b]/80 leading-relaxed italic border-l-4 border-[#ffca11] pl-4">
                    "{faq.answer}"
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
