import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBullseye,
  faUsers,
  faChartLine,
  faAward,
  faClock,
  faBolt,
  faArrowRight,
  faCertificate,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const GraduateFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Career-Focused Curriculum",
      desc: "Programs aligned with current industry demands and hiring requirements.",
      icon: faBullseye,
      iconBg: "bg-green-500/10 text-[#50d523]",
    },
    {
      id: 2,
      title: "Expert Mentorship",
      desc: "Learn from professionals working at top tech companies worldwide.",
      icon: faUsers,
      iconBg: "bg-green-500/10 text-[#50d523]",
    },
    {
      id: 3,
      title: "Job Placement Support",
      desc: "Direct connections with hiring partners and job interview prep.",
      icon: faChartLine,
      iconBg: "bg-green-500/10 text-[#50d523]",
    },
    {
      id: 4,
      title: "Verified Certificates",
      desc: "Industry-recognized credentials that boost your resume.",
      icon: faAward,
      iconBg: "bg-green-500/10 text-[#50d523]",
    },
    {
      id: 5,
      title: "Flexible Scheduling",
      desc: "Learn at your own pace with live and recorded sessions.",
      icon: faClock,
      iconBg: "bg-green-500/10 text-[#50d523]",
    },
    {
      id: 6,
      title: "Real Projects",
      desc: "Work on actual client projects and build portfolio pieces.",
      icon: faBolt,
      iconBg: "bg-green-500/10 text-[#50d523]",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Graduates",
      subtext: "Successfully Placed",
      icon: faGraduationCap,
    },
    {
      value: "95%",
      label: "Job Rate",
      subtext: "Within 3 Months",
      icon: faChartLine,
    },
    {
      value: "2.5x",
      label: "Avg Salary",
      subtext: "Growth Rate",
      icon: faBolt,
    },
    {
      value: "4.9/5",
      label: "Student",
      subtext: "Satisfaction",
      icon: faCertificate,
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-gray-50/50 py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Why Choose Our
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              {" "}
              Graduate Programs
            </span>
            ?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm font-medium leading-relaxed max-w-lg mx-auto"
          >
            Designed by industry experts for modern graduates seeking
            accelerated career growth and professional development.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {features.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`bg-white border rounded-2xl p-6 lg:p-7 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/80 group ${
                item.id === 2
                  ? "border-[#50d523]/30 shadow-lg shadow-green-500/10"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
              </div>

              <div className="space-y-2">
                <h3 className="text-base lg:text-lg font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#50d523] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-bold">Learn more</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pt-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={statVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              className="bg-linear-to-b from-white to-green-50/30 border border-gray-100 rounded-2xl p-6 lg:p-8 text-center space-y-3 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto bg-green-500/10 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="text-[#50d523] text-base"
                />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-[#50d523] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-900 tracking-tight">
                {stat.label}
              </div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GraduateFeatures;
