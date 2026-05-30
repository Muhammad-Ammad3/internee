import { motion } from "framer-motion";
import cloud from "../../assets/cloude.png";
import pakistan from "../../assets/pakistan.png";
import microsoft from "../../assets/microsoft.png";
import itg from "../../assets/itg.png";
import nics from "../../assets/nics.png";
import pitb from "../../assets/pitb.png";

const Partners = () => {
  const partnersData = [
    { name: "Google Cloud", src: cloud },
    { name: "BEE Pakistan 2024", src: pakistan },
    { name: "Microsoft Founders Hub", src: microsoft },
    { name: "ITG", src: itg },
    { name: "NATIONAL EXPANSION PLAN OF NICS", src: nics },
    { name: "PITB", src: pitb },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-12 lg:py-16 border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        ={" "}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2"
          >
            <p className="text-xm sm:text-sm font-medium text-gray-500 tracking-[0.15em] uppercase">
              Collaborated with Trusted Worldwide Partners
            </p>
          </motion.div>
        </motion.div>
        ={" "}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center"
        >
          {partnersData.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center justify-center p-2 w-full max-w-40 cursor-pointer group"
            >
              <div className="relative w-full h-16 flex items-center justify-center overflow-hidden">
                <img
                  src={partner.src}
                  alt={`${partner.name} Logo`}
                  title={partner.name}
                  className="h-17 w-auto object-contain opacity-60 grayscale contrast-125 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 select-none pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
