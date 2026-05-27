import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBriefcase,
  faUserCheck,
  faArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import girlImage from "../../assets/girlImage.png";

const Hero = () => {
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

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatHover = {
    y: -8,
    transition: { duration: 0.3 },
  };

  const communityAvatars = [
    "https://ui-avatars.com/api/?name=Ali&background=FFC107&color=fff&rounded=true",
    "https://ui-avatars.com/api/?name=Zain&background=E91E63&color=fff&rounded=true",
    "https://ui-avatars.com/api/?name=Sara&background=00BCD4&color=fff&rounded=true",
    "https://ui-avatars.com/api/?name=Hamza&background=9C27B0&color=fff&rounded=true",
    "https://ui-avatars.com/api/?name=Ayesha&background=4CAF50&color=fff&rounded=true",
  ];

  return (
    <section className="w-full bg-white pt-4 pb-12 sm:pb-20 lg:pt-6 lg:pb-10 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-6 space-y-5 sm:space-y-7 text-center lg:text-left"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-gray-950 leading-[1.2] lg:leading-[1.15] tracking-tight"
          >
            Build Skills. <br />
            Get Experience. <br />
            <span className="text-[#50d523]">Land Your Job.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-medium mx-auto lg:mx-0"
          >
            Stop waiting for opportunities. Start building real skills with
            Pakistan's largest virtual internship platform. Your dream tech
            career begins here.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#50d523] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-green-600/20 hover:shadow-green-600/30 transition-all group"
            >
              <FontAwesomeIcon icon={faBriefcase} className="text-xs" />
              <span>Our Job Portal</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <FontAwesomeIcon icon={faUserCheck} className="text-xs" />
              <span>Sign In</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-4"
          >
            <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm font-semibold">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-base sm:text-[18px] text-[#50d523]"
              />
              No Experience Required
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm font-semibold">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-base sm:text-[18px] text-[#50d523]"
              />
              Industry-Ready Projects
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-6 relative flex justify-center items-center mt-16 sm:mt-24 lg:mt-0 min-h-85 sm:min-h-115"
        >
          <motion.div
            variants={floatVariants}
            className="relative w-65 h-65 sm:w-100 sm:h-100 rounded-[40px] sm:rounded-[60px] rounded-tr-[100px] sm:rounded-tr-[160px] rounded-bl-[100px] sm:rounded-bl-[160px] flex items-end justify-center overflow-visible"
          >
            <div className="absolute inset-0 z-10 flex items-end justify-center overflow-visible">
              <img
                src={girlImage}
                alt="Internee Professional"
                className="w-full h-[120%] object-contain object-bottom select-none pointer-events-none transform translate-y-2"
              />
            </div>
          </motion.div>

          <motion.div
            variants={floatVariants}
            whileHover={floatHover}
            className="absolute -left-2 sm:-left-4 top-[10%] bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-neutral-100/80 z-20 w-37.5 sm:w-52.5"
          >
            <div className="flex -space-x-1.5 sm:space-x-2 mb-2 sm:mb-3">
              {communityAvatars.slice(0, 4).map((url, i) => (
                <img
                  key={i}
                  className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full ring-2 ring-white object-cover"
                  src={url}
                  alt={`Student Avatar ${i + 1}`}
                />
              ))}
            </div>
            <div>
              <p className="text-[11px] sm:text-sm font-medium text-gray-500 leading-tight">
                Join our community of
              </p>
              <p className="text-[11px] sm:text-sm font-bold text-gray-800 mt-0.5">
                200K+ Students
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={floatVariants}
            whileHover={floatHover}
            className="absolute -right-2 sm:-right-4 top-[0%] bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-neutral-100/80 z-20 flex flex-col items-center w-35 sm:w-52.5"
          >
            <div className="relative w-20 h-10 sm:w-28 sm:h-14 flex items-end justify-center">
              <svg
                className="w-full h-full transform -scale-x-100"
                viewBox="0 0 100 50"
              >
                <path
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#E8F5E9"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 0.926 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  d="M 10 50 A 40 40 0 0 1 90 50"
                  fill="none"
                  stroke="#50d523"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute bottom-0 text-sm sm:text-xl font-bold text-black">
                92.6 %
              </span>
            </div>
            <div className="text-center mt-2 sm:mt-3">
              <p className="text-[11px] sm:text-sm font-bold text-gray-800 leading-tight">
                Internship Rate
              </p>
              <p className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5 hidden sm:block">
                Students find internships
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={floatVariants}
            whileHover={floatHover}
            className="absolute -left-4 sm:-left-6 bottom-[5%] bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-neutral-100/80 z-20 flex items-center gap-2.5 sm:gap-3.5 w-47.5 sm:w-65"
          >
            <div className="p-2 bg-[#50d523] text-white rounded-lg flex items-center justify-center shrink-0 shadow-md shadow-green-600/10">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-[10px] sm:text-sm font-semibold text-gray-400 leading-tight">
                Students finished courses
              </p>
              <p className="text-base sm:text-2xl font-bold text-gray-900 mt-0.5 sm:mt-1.5">
                12,000+
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
