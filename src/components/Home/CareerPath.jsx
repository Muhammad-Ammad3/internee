import { useState } from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEdit,
  faEnvelope,
  faUserCheck,
  faLightbulb,
  faCompass,
  faArrowRight,
  faWandMagicSparkles,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CareerPath = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "AI Resume Building",
      desc: "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.",
      icon: faEdit,
    },
    {
      title: "Cover Letter Creation",
      desc: "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.",
      icon: faEnvelope,
    },
    {
      title: "Interview Preparation",
      desc: "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.",
      icon: faUserCheck,
    },
    {
      title: "Industry Insights",
      desc: "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.",
      icon: faLightbulb,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 space-y-5 sm:space-y-7 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
            >
              <FontAwesomeIcon
                icon={faCompass}
                className="text-xs text-[#50d523]"
              />
              <span className="font-bold tracking-wider uppercase text-[10px] sm:text-xs text-[#50d523]">
                Your AI Career Journey
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Master the{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                AI Career Path
              </span>
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
              Looking to kickstart your career in the AI industry? Our AI Career
              Coach platform offers expert guidance in resume building, cover
              letter creation, interview preparation, quizzes, and industry
              insights—all designed to help you land your dream job in
              Artificial Intelligence.
            </p>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all group">
                <span>Start Teaching Today</span>
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  className="text-xs group-hover:rotate-12 transition-transform"
                />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold hover:border-gray-300 hover:shadow-lg transition-all">
                <span>Explore Tools</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 bg-gray-50 border border-gray-100 rounded-3xl sm:rounded-4xl p-4 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#50d523]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#50d523]/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    onClick={() => setActiveTab(i)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 sm:p-4 rounded-xl border text-[11px] sm:text-sm font-bold flex items-center gap-2 sm:gap-3 transition-all duration-200 cursor-pointer ${
                      activeTab === i
                        ? "bg-white border-[#50d523] text-gray-900 shadow-lg shadow-green-500/10"
                        : "bg-white/60 border-gray-200/40 text-gray-500 hover:bg-white hover:border-gray-200"
                    }`}
                  >
                    <div
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0"
                    >
                      <FontAwesomeIcon
                        icon={f.icon}
                        className="text-xs text-[#50d523]"
                      />
                    </div>
                    <span className="block truncate sm:whitespace-normal">{f.title}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#0a0a0a] rounded-2xl p-4 sm:p-6 border border-gray-800 text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#50d523]/10 rounded-full blur-2xl" />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="space-y-1">
                    <span className="text-[10px] sm:text-xs font-bold text-neutral-400 tracking-wider uppercase block">
                      Career Growth
                    </span>
                    <h4 className="text-sm sm:text-lg font-black tracking-tight text-white">
                      {features[activeTab].title}
                    </h4>
                  </div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#50d523] rounded-full animate-pulse" />
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-neutral-400 text-xs sm:text-sm mt-3 font-medium min-h-12"
                >
                  {features[activeTab].desc.substring(0, 100)}...
                </motion.p>

                <div className="w-full bg-neutral-800 h-1.5 sm:h-2 rounded-full mt-4 sm:mt-5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(activeTab + 1) * 25}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-linear-to-r from-[#50d523] to-[#50d523] h-full rounded-full"
                  />
                </div>

                <div className="flex justify-between mt-2 text-[10px] sm:text-xs font-bold text-neutral-500">
                  <span>Step {activeTab + 1} of 4</span>
                  <span>{(activeTab + 1) * 25}% Complete</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-green-50 to-green-100 border border-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-sm sm:text-base text-[#50d523]"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#50d523] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 lg:-translate-x-2 lg:group-hover:translate-x-0">
                <span className="text-xs sm:text-sm font-bold text-[#50d523]">
                  Learn more
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[10px] sm:text-xs text-[#50d523]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareerPath;