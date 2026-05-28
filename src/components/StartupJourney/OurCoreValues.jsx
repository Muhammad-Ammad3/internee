import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faRocket,
  faHeart,
  faLightbulb,
  faChartLine,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

export default function OurCoreValues() {
  const values = [
    {
      icon: faRocket,
      title: "Mission-Driven",
      description:
        "Every decision is guided by our commitment to empower youth through real-world experience and skill development.",
      badge: "Impact First",
    },
    {
      icon: faHeart,
      title: "Community First",
      description:
        "We believe in building strong networks of mentors, partners, and students who support each other's success.",
      badge: "Collaboration",
    },
    {
      icon: faLightbulb,
      title: "Innovation",
      description:
        "We continuously push boundaries, adopting new technologies and methodologies to stay ahead in tech education.",
      badge: "Forward-Thinking",
      isFeatured: true,
    },
    {
      icon: faChartLine,
      title: "Growth Focused",
      description:
        "Measurable impact is our commitment. We track outcomes, improve continuously, and showcase real results.",
      badge: "Excellence",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-gray-50/50 font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center space-y-5 mb-20"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
        >
          <FontAwesomeIcon
            icon={faCompass}
            className="text-xs text-[#50d523]"
          />
          <span className="text-xs font-bold text-[#50d523] uppercase tracking-wider">
            What Drives Us
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Our Core{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
            Values
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-sm lg:text-base max-w-xl mx-auto font-medium"
        >
          Principles that guide every decision and action we take
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {values.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-center text-center border-2 border-[#50d523]/30 shadow-xl shadow-green-500/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all bg-linear-to-br from-[#50d523] to-[#50d523] text-white shadow-lg shadow-green-500/25"
            >
              <FontAwesomeIcon icon={item.icon} className="text-lg" />
            </motion.div>

            <div className="flex-1 flex flex-col items-center justify-between space-y-5 w-full">
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#50d523] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} className="pt-2">
                <span className="inline-block font-bold text-xs px-4 py-1.5 rounded-full border transition-colors bg-green-50 text-[#50d523] border-gray-200">
                  {item.badge}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
