import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUpload,
  faUserCheck,
  faShieldHalved,
  faBookOpen,
  faHandSparkles,
  faDollarSign,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const InstructorPortal = () => {
  const featureCards = [
    {
      id: 1,
      icon: faUpload,
      title: "Upload Tutorials & Exercises",
      desc: "Use internee.pk to share tutorials, exercises, and projects. Help others learn while you grow with virtual internships that reward your skills.", },
    {
      id: 2,
      icon: faDollarSign,
      title: "Earn from Your Expertise",
      desc: "Internee.pk offers virtual internships in Pakistan where tech creators and instructors can earn passive income by sharing their knowledge.",   },
    {
      id: 3,
      icon: faUserCheck,
      title: "Build Your Instructor Profile",
      desc: "Become a trusted voice on internee.pk. Our virtual internship ecosystem helps you build your personal brand in the online learning space.",
    },
    {
      id: 4,
      icon: faShieldHalved,
      title: "Fair Revenue Sharing",
      desc: "We keep it transparent. Join internee.pk and benefit from a fair model that pays you well — all while gaining experience in virtual internships.",
    },
  ];

  const stats = [
    { label: "Upload Content", value: "Tutorials & Projects" },
    { label: "Earn Income", value: "Transparent Payouts" },
    { label: "Grow Profile", value: "Verified Reviews" },
    { label: "Reach Learners", value: "Global Community" },
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
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        {/*  TOP GRID SPLIT BLOCK  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
            >
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-xs text-[#50d523]"
              />
              <span className="font-bold tracking-wider uppercase text-xs text-[#50d523]">
                Instructor Portal
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              Tech Instructor or{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                Content Creator?
              </span>
            </h2>

            <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-md font-medium">
              Create in your native language, reach more learners, and earn from
              your expertise with internee.pk.
            </p>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <button className="flex items-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all group">
                <span>Start Teaching Today</span>
                <FontAwesomeIcon
                  icon={faHandSparkles}
                  className="text-sm group-hover:rotate-12 transition-transform"
                />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-100/50 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-gray-200 rounded-3xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gray-50/60 border border-gray-100 p-5 rounded-2xl hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-xs font-bold text-gray-500 tracking-wider uppercase block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-base font-bold text-gray-800 group-hover:text-[#50d523] transition-colors">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xm text-gray-500 font-medium tracking-wide">
              Join a growing community of instructors sharing practical,
              industry-ready content.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {featureCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-gray-100 p-8 rounded-3xl space-y-5 hover:shadow-2xl hover:shadow-green-500/10 hover:border-gray-200 transition-all duration-500 group cursor-pointer"
            >
              <div className="space-y-5 ">
                <div
                  className={`w-14 h-14 bg-linear-to-br bg-gray-100  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <FontAwesomeIcon
                    icon={card.icon}
                    className="text-xl text-[#50d523] "
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#50d523] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <span className="text-sm font-bold text-[#50d523]">
                  Learn more
                </span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-xs text-[#50d523]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorPortal;
