import { motion } from "framer-motion";
import Card from "../../components/Card";
import {
  BookOpen,
  Users,
  Sprout,
  Rocket,
  Globe,
  BarChart,
  GraduationCap,
} from "lucide-react";

export default function YourGetSection() {
  const benefits = [
    { text: "Kurikulum bisnis terstruktur", icon: BookOpen },
    { text: "Mentoring intensif", icon: Users },
    { text: "Lingkungan entrepreneur", icon: Sprout },
    { text: "Praktik langsung bangun bisnis", icon: Rocket },
    { text: "Networking", icon: Globe },
    { text: "Evaluasi mingguan", icon: BarChart },
    { text: "Akses komunitas alumni", icon: GraduationCap },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full py-24 px-4 bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ffca11]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0b3883]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-[#0b3883] mb-4"
          >
            Apa yang <span className="text-[#ffca11]">Kamu Dapatkan?</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-[#ffca11] mx-auto rounded-full"
          />
        </div>

        {/* Uniform Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex">
              <Card
                variant="path-item"
                className="w-full h-full flex flex-col items-center justify-center py-8 px-4"
              >
                <div className="mb-4 p-4 bg-[#0b3883]/5 rounded-2xl text-[#d1a814]">
                  <benefit.icon size={32} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-[#0b3883] leading-tight text-center text-sm">
                  {benefit.text}
                </span>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Feel */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16 text-[#0e489b]/60 font-medium italic"
        >
          Semuanya dirancang untuk memastikan kamu tidak hanya paham bisnis,
          tapi siap jadi pelaku bisnis.
        </motion.p>
      </div>
    </section>
  );
}
