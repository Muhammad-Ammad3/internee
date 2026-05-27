import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlay,
  faCircleCheck,
  faBolt,
  faAward,
  faClock,
  faBriefcase,
  faCommentDots,
  faArrowRight,
  faChartLine,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const CountUp = ({ value }) => {
  const numericTarget = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOutQuad = percentage * (2 - percentage);

      setCount(Math.floor(easeOutQuad * numericTarget));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [numericTarget]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

export default function InternshipHero() {
  const stats = [
    { value: "15+", label: "INTERNSHIP TRACKS", icon: faChartLine },
    { value: "50000+", label: "STUDENTS JOINED", icon: faUsers },
    { value: "100%", label: "REMOTE-FIRST", icon: faGlobe },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white pt-0 sm:pt-6 md:pt-14 lg:pt-1 pb-8 sm:pb-16 lg:pb-10 px-3 sm:px-6 lg:px-12 font-sans antialiased overflow-hidden relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left w-full"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#E8F5E9] border border-[#50d523]/10 rounded-full p-1 pr-2.5 sm:px-4 sm:py-1.5 select-none max-w-full mx-auto lg:mx-0"
          >
            <span className="text-[8px] sm:text-[10px] px-2 sm:w-14 h-5 sm:h-6 flex items-center font-bold justify-center border rounded-3xl text-white bg-[#50d523] shrink-0">
              Trending
            </span>

            <span className="text-[9px] sm:text-xs font-bold tracking-wider text-[#50d523] uppercase truncate">
              Explore Internship Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-gray-950 tracking-tight leading-[1.15] sm:leading-[1.2] lg:leading-[1.1]"
          >
            Build Skills. <br className="hidden sm:inline" />
            Get Experience. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Land Your Job.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 px-1 sm:px-0"
          >
            Stop waiting for opportunities. Start building real skills with
            Pakistan's largest virtual internship platform. Your dream tech
            career begins here.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm font-bold shadow-lg shadow-green-900/10 transition-all group cursor-pointer"
            >
              <span>Browse Tracks</span>

              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs transform group-hover:translate-x-1 transition-transform"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm font-bold hover:border-gray-300 hover:bg-gray-50/50 transition-all cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-xs text-gray-700"
              />

              <span>How It Works</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-x-6 pt-4 border-t border-gray-100"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 text-center sm:text-left">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-sm text-[#50d523] shrink-0"
              />

              <span>No Experience Required</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700 text-center sm:text-left">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-sm text-[#50d523] shrink-0"
              />

              <span>Industry-Ready Projects</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 w-full flex justify-center lg:justify-end relative pt-4 lg:pt-0 select-none"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md lg:max-w-full items-center">
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 space-y-2 sm:space-y-3 h-full"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center border border-blue-100/20">
                  <FontAwesomeIcon
                    icon={faBolt}
                    className="text-xs sm:text-sm text-blue-500"
                  />
                </div>

                <h4 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">
                  Skill Growth
                </h4>

                <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                  Systematic track design for maximum career impact.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-linear-to-br from-[#50d523] to-[#50d523] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-lg shadow-green-900/10 space-y-2 sm:space-y-3 relative overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl pointer-events-none" />

                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 flex items-center justify-center relative z-10">
                  <FontAwesomeIcon
                    icon={faAward}
                    className="text-xs sm:text-sm text-white"
                  />
                </div>

                <h4 className="text-sm sm:text-base font-bold tracking-tight relative z-10">
                  Verified track
                </h4>

                <p className="text-white/80 text-xs sm:text-sm font-medium leading-relaxed relative z-10">
                  Trusted by top recruiters and tech partners.
                </p>
              </motion.div>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:translate-y-8">
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-xl space-y-2 sm:space-y-3 h-full"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-neutral-800 flex items-center justify-center border border-neutral-700/50">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-xs sm:text-sm text-emerald-400"
                  />
                </div>

                <h4 className="text-sm sm:text-base font-bold tracking-tight">
                  Flexible Pace
                </h4>

                <p className="text-neutral-400 text-xs sm:text-sm font-medium leading-relaxed">
                  Learn on your schedule, anywhere in the world.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 space-y-2 sm:space-y-3 h-full"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-green-50 text-[#50d523] flex items-center justify-center border border-green-100/20">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-xs sm:text-sm text-[#50d523]"
                  />
                </div>

                <h4 className="text-sm sm:text-base font-bold text-gray-900 tracking-tight">
                  Job Support
                </h4>

                <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                  Direct referrals for top performing internees.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="mt-12 sm:mt-20 lg:mt-24 pt-6 sm:pt-12 border-t border-gray-100"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center max-w-4xl mx-auto items-stretch">
          {stats.map((stat, idx) => {
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="space-y-1 sm:space-y-2 flex flex-col items-center justify-center p-2 sm:p-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-50 text-[#50d523] rounded-lg sm:rounded-xl flex items-center justify-center mb-1 shadow-2xs">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-xs sm:text-sm"
                  />
                </div>

                <div className="text-lg sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight">
                  <CountUp value={stat.value} />
                </div>

                <div className="text-[8px] sm:text-[10px] font-black text-gray-400 tracking-wider uppercase leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-linear-to-r from-[#50d523] to-[#50d523] shadow-lg shadow-green-900/20 text-white flex items-center justify-center group cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faCommentDots}
            className="text-sm sm:text-lg text-white group-hover:rotate-12 transition-transform duration-200"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
