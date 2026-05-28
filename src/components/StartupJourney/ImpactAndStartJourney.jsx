import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faRocket,
  faCrosshairs,
  faEye,
  faHeartCircleCheck,
  faArrowRight,
  faWandMagicSparkles,
  faAward,
  faChartLine,
  faUsers,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

export default function ImpactAndStartJourney() {
  const checkmarks = [
    {
      text: "20,000+ students empowered with real-world experience",
      icon: faUsers,
    },
    {
      text: "200+ companies partnering with us for talent development",
      icon: faBriefcase,
    },
    {
      text: "50+ diverse skill tracks covering various tech domains",
      icon: faGraduationCap,
    },
    {
      text: "98% success rate in securing internships or jobs",
      icon: faChartLine,
    },
    {
      text: "2 years of rapid growth and excellence since 2023",
      icon: faAward,
    },
    { text: "4 major national and international awards", icon: faAward },
  ];

  const pillars = [
    {
      label: "Our Mission",
      text: "Bridge the gap between fresh talent and industry needs through experiential learning.",
      icon: faCrosshairs,
    },
    {
      label: "Our Vision",
      text: "Become South Asia's premier platform transforming youth into industry-ready professionals.",
      icon: faEye,
    },
    {
      label: "Our Promise",
      text: "Every student deserves a chance to succeed. We provide the platform, mentorship, and opportunity.",
      icon: faHeartCircleCheck,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        <motion.div variants={itemVariants} className="lg:col-span-6 space-y-7">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-tight">
              Real Impact,{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                Real Results
              </span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-xl">
              We measure our success by the careers launched, skills developed,
              and lives transformed. Every statistic represents a student who
              changed their trajectory through Internee.pk.
            </p>
          </div>

          <div className="space-y-3.5 pt-2">
            {checkmarks.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3.5 text-gray-700 text-xs sm:text-sm font-semibold leading-relaxed cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#E8F5E9] border border-[#50d523]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#50d523] transition-colors duration-200">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-[10px] text-[#50d523] group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="group-hover:text-gray-950 transition-colors pt-0.5">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-6 bg-[#F8FAFC] border border-gray-100 rounded-3xl p-5 sm:p-8 shadow-xs"
        >
          <div className="space-y-4">
            {pillars.map((pillar, index) => {
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.01, x: 2 }}
                  className="bg-white rounded-2xl p-5 border border-gray-100/80 shadow-xs hover:shadow-xl hover:shadow-gray-200/30 hover:border-gray-200 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#50d523] flex items-center justify-center border border-green-100/20 group-hover:scale-105 transition-transform">
                      <FontAwesomeIcon icon={pillar.icon} className="text-xs" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      {pillar.label}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed group-hover:text-gray-950 transition-colors">
                    {pillar.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-[#1A1A1A] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#50d523]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="space-y-6 max-w-xl z-10 relative text-left w-full">
          <div className="inline-flex items-center gap-2 bg-[#2E2E2E] border border-neutral-800 rounded-full py-1.5 pl-2 pr-4 select-none">
            <div className="w-5 h-5 bg-[#50d523]/20 border border-[#50d523]/30 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-[10px] text-[#50d523]"
              />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-wider">
              Join Our Growing Community
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.15] tracking-tight">
            Start Your Journey <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              With Internee.pk
            </span>
          </h2>

          <p className="text-neutral-300 text-md font-medium leading-relaxed max-w-2xl">
            Join 20,000+ students who've transformed their careers. Be part of a
            movement building Pakistan's tech future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#50d523] hover:bg-[#50d523] text-white font-bold px-6 py-4 rounded-xl text-xs sm:text-sm shadow-lg shadow-green-900/20 group whitespace-nowrap"
            >
              <FontAwesomeIcon
                icon={faRocket}
                className="text-xs group-hover:animate-bounce"
              />
              <span>Explore Internships</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs transform group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800/40 text-white font-bold px-6 py-4 rounded-xl transition-all text-xs sm:text-sm bg-transparent whitespace-nowrap"
            >
              Become Ambassador
            </motion.button>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-5 pointer-events-none select-none z-0">
          <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
          <div className="absolute right-48 top-12 w-28 h-28 bg-white rounded-2xl" />
          <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
        </div>
      </motion.div>
    </div>
  );
}
