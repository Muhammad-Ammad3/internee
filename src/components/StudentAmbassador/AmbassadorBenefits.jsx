import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGift,
  faStar,
  faBookOpen,
  faRocket,
  faGlobe,
  faAward,
  faArrowRight,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export default function AmbassadorBenefits() {
  const perks = [
    {
      icon: faGift,
      title: "Exclusive Stipend",
      description:
        "Earn competitive stipend based on performance and events organized",
    },
    {
      icon: faStar,
      title: "Priority Recognition",
      description:
        "Get featured on Internee.pk social media and internal platforms",
    },
    {
      icon: faBookOpen,
      title: "Free Learning Resources",
      description: "Access premium courses and certifications at no cost",
    },
    {
      icon: faRocket,
      title: "Startup Support",
      description: "Launch your own startup with mentorship and resources",
    },
    {
      icon: faGlobe,
      title: "Global Networking",
      description: "Connect with 300+ ambassadors and industry professionals",
    },
    {
      icon: faAward,
      title: "Career Opportunities",
      description: "Direct pathway to internships and full-time positions",
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
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center space-y-5 mb-20"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
        >
          <FontAwesomeIcon
            icon={faWandMagicSparkles}
            className="text-xs text-[#50d523]"
          />
          <span className="text-xs font-bold text-[#50d523] uppercase tracking-wider">
            Rewards & Benefits
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Ambassador{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
            Benefits & Perks
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-sm lg:text-base max-w-2xl mx-auto font-medium"
        >
          Get exclusive rewards, recognition, and opportunities as a Student
          Ambassador
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-start justify-between min-h-57.5 shadow-lg hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-500 group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`p-4 bg-linear-to-br bg-gray-100 rounded-2xl`}
            >
              <FontAwesomeIcon
                icon={perk.icon}
                className="text-lg text-[#50d523] w-5 h-5 flex items-center justify-center"
              />
            </motion.div>

            <div className="space-y-3 mt-auto w-full">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#50d523] transition-colors">
                {perk.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {perk.description}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 text-[#50d523] opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm font-bold">Learn more</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs group-hover:translate-x-1 transition-transform"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
