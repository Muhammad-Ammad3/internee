import React from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarkerAlt,
  faBookOpen,
  faFolderOpen,
  faBriefcase,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorksSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Your Track",
      desc: "Select from 20+ specialized programs based on your interests and career goals",
      icon: faMapMarkerAlt,
    },
    {
      id: 2,
      title: "Learn & Project",
      desc: "Complete structured lessons and work on real-world projects with expert mentors",
      icon: faBookOpen,
    },
    {
      id: 3,
      title: "Build Portfolio",
      desc: "Create a professional portfolio showcasing your verified skills",
      icon: faFolderOpen,
    },
    {
      id: 4,
      title: "Land Your Job",
      desc: "Connect with hiring companies and start your career journey",
      icon: faBriefcase,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4"
        >
          <motion.h2
            variants={stepVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
          >
            How Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Programs Work
            </span>
          </motion.h2>
          <motion.p
            variants={stepVariants}
            className="text-gray-500 text-sm font-medium max-w-md mx-auto"
          >
            Simple steps to launch your career in tech
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-4"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                variants={stepVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative w-full lg:w-[23%] min-h-60 bg-linear-to-b from-white to-green-50/30 border border-gray-200 bg-gray-200 rounded-3xl p-7 flex flex-col justify-start space-y-5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-[#50d523] to-[#50d523] flex items-center justify-center text-white shadow-lg shadow-green-500/25">
                  <FontAwesomeIcon icon={step.icon} className="text-sm" />
                </div>

                <div className="absolute top-4 right-4 text-4xl font-black text-gray-100 group-hover:text-green-100 transition-colors select-none">
                  {step.id}
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-[#50d523] text-xs opacity-50"
                  />
                  <span className="text-xs font-bold text-[#50d523]">
                    Step {step.id}
                  </span>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  variants={lineVariants}
                  className="hidden lg:flex grow items-center justify-center mx-2"
                >
                  <div className="w-full h-0.5 bg-linear-to-r from-[#50d523] to-[#66BB6A] opacity-60 relative overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 w-1/2 bg-white/50 blur-sm"
                    />
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <div className="lg:hidden flex justify-center"></div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
