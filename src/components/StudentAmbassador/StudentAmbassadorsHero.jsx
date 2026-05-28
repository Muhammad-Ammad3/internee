import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUsers,
  faBookOpen,
  faTrophy,
  faWandMagicSparkles,
  faGraduationCap,
  faCode,
  faPlay,
  faGlobe,
  faRocket,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function StudentAmbassadorsHero() {
  const features = [
    { title: "Get started", desc: "Become a Student Ambassador", icon: faPlay },
    { title: "Community", desc: "Explore Ambassador profiles", icon: faUsers },
    {
      title: "Startup Competition",
      desc: "Student competition for AI startups",
      icon: faTrophy,
    },
    {
      title: "Founders Hub",
      desc: "A platform for entrepreneurs at any stage",
      icon: faGlobe,
    },
  ];

  const whyJoin = [
    {
      title: "Learn and Grow",
      desc: "Access exclusive learning resources and certifications to build your technical skills.",
      icon: faGraduationCap,
    },
    {
      title: "Build Community",
      desc: "Connect with fellow students and mentors from around the world.",
      icon: faUsers,
    },
    {
      title: "Create Solutions",
      desc: "Work on real projects using cutting-edge Internee's technologies.",
      icon: faCode,
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
    <div className="w-full bg-white font-sans antialiased px-4 sm:px-6 pt-4 pb-12 md:pt-8 md:pb-20 lg:pt-2 lg:pb-28 md:px-12 lg:px-4 max-w-7xl mx-auto selection:bg-green-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-start mb-16 md:mb-28"
      >
        <motion.div
          variants={itemVariants}
          className="space-y-5 sm:space-y-7 max-w-xl text-left lg:pt-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#50d523]/10 rounded-full px-3.5 py-1.5 select-none">
            <FontAwesomeIcon
              icon={faWandMagicSparkles}
              className="text-[10px] sm:text-xs text-[#50d523]"
            />
            <span className="text-[9px] sm:text-xs font-bold text-[#50d523] uppercase tracking-wider">
              Student Ambassadors
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-950 leading-tight tracking-tight">
            Internee.pk Student <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Ambassadors
            </span>
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Join our global community of students who build real projects, grow
            leadership skills, and represent Internee.pk on campus.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <Link to="/studentambassadors/agreement">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-[#50d523] to-[#50d523] text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm shadow-md shadow-green-900/10 group whitespace-nowrap"
            >
              <FontAwesomeIcon icon={faRocket} className="text-sm text-white" />
              <span>Get Started</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-sm group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm bg-transparent transition-colors whitespace-nowrap"
            >
              <FontAwesomeIcon icon={faUsers} className="text-sm" />
              <span>View Community</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-4 sm:space-y-6 lg:pl-6 w-full"
        >
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl shadow-gray-200/20 text-left"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#E8F5E9] text-[#50d523] rounded-xl flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-widest font-black">
                    AMBASSADOR HUB
                  </p>
                  <h3 className="text-sm sm:text-base font-black text-gray-950">
                    Community Pulse
                  </h3>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold bg-gray-50 text-gray-500 px-2.5 py-1 rounded-full border border-gray-100 select-none">
                Weekly
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="border border-dashed border-gray-200 rounded-xl p-2 sm:p-3 bg-gray-50/50">
                <p className="text-base sm:text-xl font-black text-gray-950">
                  34
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 font-semibold">
                  Events
                </p>
              </div>
              <div className="border border-dashed border-gray-200 rounded-xl p-2 sm:p-3 bg-gray-50/50">
                <p className="text-base sm:text-xl font-black text-gray-950">
                  120+
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 font-semibold">
                  Leads
                </p>
              </div>
              <div className="border border-dashed border-gray-200 rounded-xl p-2 sm:p-3 bg-gray-50/50">
                <p className="text-base sm:text-xl font-black text-gray-950">
                  8.4k
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 mt-0.5 font-semibold">
                  Reach
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white shadow-2xl relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#50d523]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
              <div>
                <p className="text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">
                  Leadership Track
                </p>
                <h3 className="text-lg sm:text-xl font-black tracking-tight">
                  Build Your Impact
                </h3>
              </div>
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                className="text-xs sm:text-sm text-[#50d523]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
              <div className="bg-[#262626] border border-neutral-800 p-3 sm:p-4 rounded-xl">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-gray-300 mb-2">
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    className="text-xs text-[#50d523]"
                  />{" "}
                  Skill Growth
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#50d523] h-full rounded-full w-[65%]" />
                </div>
              </div>

              <div className="bg-[#262626] border border-neutral-800 p-3 sm:p-4 rounded-xl">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-gray-300 mb-2">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="text-xs text-[#50d523]"
                  />{" "}
                  Recognition
                </div>
                <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#50d523] h-full rounded-full w-[45%]" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-semibold pt-3 border-t border-neutral-800 text-gray-400 relative z-10">
              <span>Verified Campus Projects</span>
              <span className="text-[#50d523] font-black">+27%</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 md:mb-32"
      >
        {features.map((feature, index) => {
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white border border-gray-100 p-4 sm:p-5 rounded-2xl flex items-start gap-4 hover:shadow-xl hover:shadow-gray-200/30 hover:border-green-200 transition-all group cursor-pointer text-left"
            >
              <div className="w-9 h-9 bg-[#E8F5E9] text-[#50d523] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#50d523] group-hover:text-white transition-all">
                <FontAwesomeIcon icon={feature.icon} className="text-xs" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-md mb-1 group-hover:text-[#50d523] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-xs font-medium leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-10 sm:space-y-14"
      >
        <motion.div
          variants={itemVariants}
          className="space-y-2 sm:space-y-3 text-left"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-gray-950 tracking-tight">
            Why you should{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              join
            </span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium">
            Build skills, grow your network, and create real impact on campus.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {whyJoin.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 hover:shadow-2xl hover:shadow-gray-200/40 hover:border-green-200/70 transition-all duration-300 cursor-pointer group text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#E8F5E9] rounded-xl border border-green-100/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-md text-[#50d523]"
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-xl font-medium text-gray-950 group-hover:text-[#50d523] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[#50d523] opacity-0 group-hover:opacity-100 transition-all duration-300 pt-3 sm:pt-4">
                  <span className="text-xs font-black">Learn more</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-xs transform group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
