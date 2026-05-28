import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUsers,
  faBuilding,
  faCalendarAlt,
  faUserCheck,
  faWandMagicSparkles,
  faStar,
  faCheckCircle,
  faGlobe,
  faVideo,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

export default function CommunityImpactAndSteps() {
  const stats = [
    {
      value: "300+",
      label: "Active Ambassadors",
      sub: "Across Pakistan",
      icon: faUsers,
    },
    { value: "50+", label: "Campuses", sub: "Represented", icon: faBuilding },
    { value: "1,000+", label: "Events", sub: "Organized", icon: faCalendarAlt },
    { value: "15K+", label: "Students", sub: "Reached", icon: faUserCheck },
  ];

  const steps = [
    {
      number: "1",
      title: "Apply Online",
      description: "Fill out the application form and tell us about yourself",
      icon: faPlay,
    },
    {
      number: "2",
      title: "Get Verified",
      description: "Undergo quick eligibility check and assessment",
      icon: faCheckCircle,
    },
    {
      number: "3",
      title: "Training",
      description: "Attend onboarding and receive ambassador tools & resources",
      icon: faVideo,
    },
    {
      number: "4",
      title: "Start Representing",
      description: "Organize events and grow Internee.pk on your campus",
      icon: faStar,
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

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white font-sans antialiased space-y-32 px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-14"
      >
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#50d523]/10 rounded-full px-4 py-1.5 select-none">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-xs text-[#50d523]"
            />
            <span className="text-[10px] sm:text-xs font-bold text-[#50d523] uppercase tracking-wider">
              Our Community
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight">
            Ambassador{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Community Impact
            </span>
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            Join a thriving community making real impact across premium
            institutes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            return (
              <motion.div
                key={index}
                variants={statCardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-[#F8FAFC] border border-gray-100 rounded-3xl p-6 text-center flex flex-col justify-center items-center min-h-45 hover:shadow-xl hover:shadow-gray-200/40 hover:border-green-200 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-11 h-11 mb-3.5 bg-white border border-gray-100/50 text-[#50d523] rounded-xl flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform shrink-0">
                  <FontAwesomeIcon icon={stat.icon} className="text-lg" />
                </div>
                <span className="text-3xl lg:text-4xl font-bold text-[#50d523] tracking-tight">
                  {stat.value}
                </span>
                <h4 className="font-bold text-gray-800 text-md mt-2.5 tracking-tight">
                  {stat.label}
                </h4>
                <p className="text-gray-500 text-[13px] mt-0.5 font-semibold">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-16"
      >
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#50d523]/10 rounded-full px-4 py-1.5 select-none">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              className="text-xs text-[#50d523]"
            />
            <span className="text-[10px] sm:text-xs font-bold text-[#50d523] uppercase tracking-wider">
              Join Us
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-950 tracking-tight">
            How to Become{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              an Ambassador
            </span>
          </h2>

          <p className="text-gray-500 text-md font-medium">
            Simple steps to join our growing community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, index) => {
            return (
              <div key={index} className="relative group">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-start min-h-55 shadow-xs hover:shadow-xl hover:shadow-gray-200/30 hover:border-green-200 transition-all duration-300 z-10 relative cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-xl bg-linear-to-r from-[#50d523] to-[#50d523] text-white flex items-center justify-center mb-5 shadow-md shadow-green-900/10 shrink-0">
                    <FontAwesomeIcon icon={step.icon} className="text-xs" />
                  </div>

                  <div className="space-y-2 mt-auto text-left">
                    <h3 className="text-base font-bold text-gray-950 tracking-tight group-hover:text-[#50d523] transition-colors">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1.5px] bg-linear-to-r from-gray-200 to-transparent z-0 transform -translate-y-1/2 pointer-events-none" />
                )}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
