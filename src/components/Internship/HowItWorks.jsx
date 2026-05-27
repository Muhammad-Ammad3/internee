import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapPin,
  faBolt,
  faAward,
  faCircleCheck,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Your Path",
      desc: "Browse our diverse tracks and select the internship that aligns with your career goals.",
      icon: faMapPin,
    },
    {
      id: 2,
      title: "Accelerated Learning",
      desc: "Dive into hands-on projects, follow our structured guide, and start building.",
      icon: faBolt,
    },
    {
      id: 3,
      title: "Get Certified",
      desc: "Complete your tasks, submit your final project, and receive your verified certificate.",
      icon: faAward,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-xs text-[#50d523]"
            />
            <span className="text-sm font-medium text-gray-600">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-gray-900 tracking-tight"
          >
            How It{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Works
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm lg:text-base font-medium max-w-md mx-auto"
          >
            Your path to an industry-ready career in three simple steps.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.01 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex items-start gap-5 sm:gap-6 shadow-lg hover:shadow-xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-linear-to-br from-[#50d523] to-[#50d523] flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow"
              >
                <FontAwesomeIcon icon={step.icon} className="text-lg" />
              </motion.div>

              <div className="flex-1 space-y-2 pt-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#50d523] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold text-gray-300">
                    Step {step.id}
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-300 group-hover:bg-[#50d523] group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
