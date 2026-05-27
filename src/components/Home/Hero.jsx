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
    <section className="w-full bg-white pt-4 pb-20 lg:pt-6 lg:pb-10 px-6 lg:px-12 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-6 space-y-7"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-950 leading-[1.15] tracking-tight"
          >
            Build Skills. <br />
            Get Experience. <br />
            <span className="text-[#50d523]">Land Your Job.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-base lg:text-lg max-w-xl leading-relaxed font-medium"
          >
            Stop waiting for opportunities. Start building real skills with
            Pakistan's largest virtual internship platform. Your dream tech
            career begins here.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-[#50d523] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-600/20 hover:shadow-green-600/30 transition-all group"
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
              className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-full text-sm font-bold hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <FontAwesomeIcon icon={faUserCheck} className="text-xs" />
              <span>Sign In</span>
            </motion.button>
          </motion.div>

          {/* Bottom Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4"
          >
            <div className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[18px] text-[#50d523]"
              />
              No Experience Required
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-[18px] text-[#50d523]"
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
          className="lg:col-span-6 relative flex justify-center items-center mt-12 lg:mt-0"
        >
          <motion.div
            variants={floatVariants}
            className="relative w-[320px] h-80 sm:w-105 sm:h-105 rounded-[60px] rounded-tr-[160px] rounded-bl-[160px] flex items-end justify-center overflow-visible"
          >
            {/* Girl Image Wrapper */}
            <div className="absolute inset-0 z-10 flex items-end justify-center overflow-visible">
              <img
                src={girlImage}
                alt="Internee Professional"
                className="w-full h-[120%] object-contain object-bottom select-none pointer-events-none transform translate-y-2"
              />
            </div>
          </motion.div>

          {/* --- Card 1: 200k+ Students (Top Left with Fix Avatars) --- */}
          <motion.div
            variants={floatVariants}
            whileHover={floatHover}
            className="absolute -left-4 sm:-left-2.5 top-[15%] bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-neutral-100/80 z-20 w-52.5"
          >
            <div className="flex -space-x-2 mb-3">
              {communityAvatars.map((url, i) => (
                <img
                  key={i}
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src={url}
                  alt={`Student Avatar ${i + 1}`}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 leading-tight">
                Join our community of
              </p>
              <p className="text-sm font-medium text-gray-500 mt-0.5">
                200K+ Students
              </p>
            </div>
          </motion.div>

          {/* --- Card 2: Internship Rate (Top Right Gauge Fixed Angle) --- */}
          <motion.div
            variants={floatVariants}
            whileHover={floatHover}
            className="absolute -right-4 sm:-right-2.5 top-[5%] bg-white p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-neutral-100/80 z-20 flex flex-col items-center w-52.5"
          >
            {/* Custom SVG Gauge (Original design direction standard) */}
            <div className="relative w-28 h-14 flex items-end justify-center">
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
              <span className="absolute bottom-0 text-xl font-bold text-black">
                92.6 %
              </span>
            </div>
            <div className="text-center mt-3">
              <p className="text-sm font-medium text-gray-500 leading-tight">
                Internship Rate
              </p>
              <p className="text-sm text-gray-500 font-medium mt-1">
                Students find internships
              </p>
            </div>
          </motion.div>

          {/* --- Card 3: Courses Finished (Bottom Left) --- */}
          <motion.div
            variants={floatVariants}
            whileHover={floatHover}
            className="absolute -left-6 sm:-left-5 bottom-[12%] bg-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-neutral-100/80 z-20 flex items-start gap-3.5 w-65"
          >
            {/* Custom Clean SVG Badge */}
            <div className="p-2.5 bg-[#50d523] text-white rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-green-600/10">
              <svg
                className="w-5 h-5"
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
              <p className="text-md font-semibold text-gray-400 leading-none">
                Students finished courses
              </p>
              <p className="text-2xl font-medium text-gray-900 mt-1.5">
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
