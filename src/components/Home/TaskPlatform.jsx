import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBriefcase,
  faShieldHalved,
  faLink,
  faBookOpen,
  faCircleCheck,
  faHandSparkles,
} from "@fortawesome/free-solid-svg-icons";

const TaskPlatform = () => {
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
    <section className="w-full bg-[#0a0a0a] text-white py-20 lg:py-28 px-6 lg:px-12 font-sans relative overflow-hidden">
      <div className="absolute right-0 top-10 w-96 h-96 bg-[#50d523]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/*  HEADER SECTION  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto space-y-6 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/15 rounded-full px-4 py-1.5"
          >
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-xl text-[#50d523]"
            />
            <span className="text-xs font-semibold tracking-wide text-[#50d523]">
              Task Management Platform
            </span>
          </motion.div>

          {/* Main Typography */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Turn Learning into{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Proof
            </span>{" "}
            with the <br />
            internee.pk Task Portal
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm lg:text-base max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Complete real tasks, get structured feedback, and build a portfolio
            employers trust. Every milestone moves you closer to job-ready.
          </motion.p>
        </motion.div>

        {/*  CARDS CONTAINER (GRID)  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-6 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-[#111111] border border-gray-800/60 rounded-3xl p-8 space-y-5 hover:border-[#50d523]/30 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-500/20 to-green-500/5 flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-xl text-[#50d523]"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Hands-on Industry Projects
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Practice with real-world projects that mirror industry
                  workflows. Each task sharpens your skills and strengthens your
                  portfolio.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-gray-300 font-medium pt-2">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-xm text-[#50d523]"
                  />
                  Project-based learning
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-xm text-[#50d523]"
                  />
                  Industry-standard practices
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-xm text-[#50d523]"
                  />
                  Portfolio building
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-[#111111] border border-gray-800/60 rounded-3xl p-8 space-y-5 hover:border-[#50d523]/30 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-green-500/20 to-green-500/5 flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-xl text-[#50d523]"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Skill Verification System
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every completed task adds verified proof to your profile.
                  Track progress and showcase outcomes with confidence.
                </p>
              </div>
              <ul className="space-y-3 text-sm text-gray-300 font-medium pt-2">
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-xm text-[#50d523]"
                  />
                  Skill verification
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-xm text-[#50d523]"
                  />
                  Progress tracking
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="text-xm text-[#50d523]"
                  />
                  Achievement badges
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="bg-[#111111] border border-gray-800/60 rounded-3xl p-6 flex gap-4 items-start hover:border-[#50d523]/30 transition-all duration-300 group"
            >
              <div className="p-3 bg-green-500/10 text-[#50d523] rounded-xl shrink-0 border border-green-500/20 group-hover:scale-110 transition-transform flex items-center justify-center w-11 h-11">
                <FontAwesomeIcon icon={faLink} className="text-sm" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-white text-base">
                  SDLC Implementation via internee.pk
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-normal">
                  Experience the complete Software Development Life Cycle
                  through structured tasks and milestones.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ x: 4 }}
              className="bg-[#111111] border border-gray-800/60 rounded-3xl p-6 flex gap-4 items-start hover:border-[#50d523]/30 transition-all duration-300 group"
            >
              <div className="p-3 bg-green-500/10 text-[#50d523] rounded-xl shrink-0 border border-green-500/20 group-hover:scale-110 transition-transform flex items-center justify-center w-11 h-11">
                <FontAwesomeIcon icon={faBookOpen} className="text-sm" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-white text-base">
                  Guided Learning Path at internee.pk
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-normal">
                  Follow a structured learning path designed for both beginners
                  and advanced learners.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-linear-to-r from-[#111111] to-[#151c2c] border border-gray-800/80 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden mt-10 shadow-2xl"
          >
            <div className="absolute right-4 bottom-0 opacity-10 pointer-events-none hidden lg:block">
              <div className="grid grid-cols-3 gap-3">
                <div className="w-16 h-16 rounded-full border-4 border-white"></div>
                <div className="w-16 h-16 bg-white rounded-xl"></div>
                <div className="w-16 h-16 rounded-full border-4 border-white"></div>
              </div>
            </div>

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-white">
                Ready to Build Your{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                  Professional Portfolio
                </span>{" "}
                with internee.pk?
              </h3>
              <p className="text-gray-400 text-sm lg:text-base font-medium leading-relaxed">
                Join our virtual internships and get access to industry-standard
                tasks that will help you build a remarkable portfolio, only at
                internee.pk.
              </p>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <button className="flex items-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-8 py-4 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 mx-auto group">
                  <span>Start Your Journey Now</span>
                  <FontAwesomeIcon
                    icon={faHandSparkles}
                    className="text-xs group-hover:rotate-12 transition-transform"
                  />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TaskPlatform;
