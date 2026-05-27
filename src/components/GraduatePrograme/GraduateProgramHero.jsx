import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGraduationCap,
  faWandMagicSparkles,
  faArrowRight,
  faClock,
  faFolderOpen,
  faUsers,
  faBriefcase,
  faCheckCircle,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const GraduateProgramHero = () => {
  const miniMetrics = [
    { value: "20+", label: "Tracks", icon: faFolderOpen },
    { value: "80+", label: "Projects", icon: faChartLine },
    { value: "35+", label: "Mentors", icon: faUsers },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white pt-2 pb-20 lg:pt-0 lg:pb-28 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-7 space-y-7"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
          >
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="w-4 h-4 text-[#50d523]"
            />
            <span className="text-[#50d523] text-xs font-bold uppercase tracking-widest">
              Graduate Programs
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-2xl"
          >
            Graduate Programs That
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Launch Careers
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm lg:text-base font-medium leading-relaxed max-w-xl"
          >
            Explore structured, career-focused programs designed to build
            job-ready skills through real projects, mentorship, and industry
            expertise.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all group"
            >
              <span>Browse Programs</span>
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="w-4 h-4 group-hover:rotate-12 transition-transform"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-full text-sm font-bold hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <span>Get Started</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 w-full flex flex-col items-center lg:items-end justify-center gap-5 relative"
        >
          <motion.div
            variants={cardVariants}
            className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-6 lg:p-7 space-y-5 shadow-xl shadow-gray-100/50"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="w-6 h-6 text-[#50d523] text-lg"
                  />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                    Program Features
                  </span>
                  <h4 className="text-base font-bold text-gray-900 tracking-tight">
                    Comprehensive Learning
                  </h4>
                </div>
              </div>

              <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                12 Weeks
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {miniMetrics.map((metric, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center space-y-2 hover:border-green-200 hover:bg-green-50/30 transition-all cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={metric.icon}
                    className="w-5 h-5 mx-auto text-gray-400"
                  />
                  <div className="text-lg font-bold text-gray-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="w-full max-w-md bg-[#0a0a0a] rounded-3xl p-6 lg:p-7 text-white shadow-2xl space-y-5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#50d523] opacity-5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#50d523] opacity-5 rounded-full blur-3xl" />

            <div className="flex items-center justify-between relative z-10">
              <span className="text-neutral-500 text-xs font-bold tracking-wider uppercase">
                Outcome Snapshot
              </span>
              <div className="w-2 h-2 bg-[#50d523] rounded-full animate-pulse" />
            </div>

            <div className="space-y-2 relative z-10">
              <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white">
                Career-Ready Portfolio
              </h3>
              <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                Build verified projects with feedback and present a portfolio
                recruiters trust.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:border-neutral-700 transition-all"
              >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-[#50d523] w-4 h-4"
                />
                <span className="text-neutral-300 text-sm font-bold tracking-tight">
                  Real-World Work
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:border-neutral-700 transition-all"
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-[#50d523] w-4 h-4"
                />
                <span className="text-neutral-300 text-sm font-bold tracking-tight">
                  Verified Skills
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GraduateProgramHero;
