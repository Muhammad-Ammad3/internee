import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserPlus,
  faFileCircleCheck,
  faArrowRight,
  faBolt,
  faHandSparkles,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Workflow = () => {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const steps = [
    {
      step: "01",
      title: "Sign Up & Choose a Domain",
      desc: "Explore a wide range of internships across various industries, tailored to your skills and career goals.",
      tags: ["Fast setup", "Guided steps", "Verified outcome"],
      icon: faUserPlus,
    },
    {
      step: "02",
      title: "Complete Your Application",
      desc: "Submit a short form and secure your internship opportunity in minutes.",
      tags: ["Quick process", "Expert review", "Direct access"],
      icon: faFileCircleCheck,
    },
    {
      step: "03",
      title: "Start Learning & Grow",
      desc: "Begin your virtual internship journey with mentorship and real-world projects.",
      tags: ["Hands-on projects", "Mentor support", "Career pathways"],
      icon: faHandSparkles,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
          >
            <FontAwesomeIcon icon={faBolt} className="text-xs text-[#50d523]" />
            <span className="text-sm font-medium text-gray-600">
              How It Works
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight"
          >
            Start Fast.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Learn Smart.
            </span>
            <br />
            Get Job-Ready.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-500 text-lg leading-relaxed max-w-md font-medium"
          >
            Follow three clear steps to start, learn, and earn your certificate.
            Everything is structured so you can move fast and stay focused on
            what matters most.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10"
          >
            <button className="flex items-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group">
              <span>Get Started Now</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-sm group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-500 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-green-500/20 to-green-500/5 flex items-center justify-center text-[#50d523] font-bold border border-green-100 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={step.icon} className="text-lg" />
                </div>

                <span className="text-gray-400 text-sm font-medium">
                  Step {step.step}
                </span>
              </div>

              <h2 className="mt-6 text-2xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#50d523] transition-colors">
                {step.title}
              </h2>

              <p className="mt-3 text-gray-500 text-base leading-relaxed">
                {step.desc}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {step.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100 group-hover:border-green-200 group-hover:bg-green-50 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 mt-4 text-[#50d523] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm font-bold">Learn more</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
