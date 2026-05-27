import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBriefcase,
  faBuilding,
  faGraduationCap,
  faChartLine,
  faBullseye,
  faUsers,
  faAward,
  faFileAlt,
  faCommentAlt,
  faBarChart,
  faBookOpen,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function CareerLaunchpad() {
  const stats = [
    { value: "1000+", label: "Active Internships", icon: faBriefcase },
    { value: "500+", label: "Partner Companies", icon: faBuilding },
    { value: "10,000+", label: "Success Stories", icon: faGraduationCap },
    { value: "50+", label: "Industry Sectors", icon: faChartLine },
  ];

  const featureCards = [
    {
      id: 1,
      title: "Targeted Learning",
      desc: "Industry-specific virtual internships designed to build practical skills and experience.",
      icon: faBullseye,
      features: ["Web Development", "Digital Marketing", "UI/UX Design"],
    },
    {
      id: 2,
      title: "Mentorship Program",
      desc: "Learn directly from industry experts with guided weekly sessions.",
      icon: faUsers,
      features: ["One-on-One Guidance", "Project Reviews", "Career Planning"],
    },
    {
      id: 3,
      title: "Certification Track",
      desc: "Earn recognized certifications and build a portfolio that employers trust.",
      icon: faAward,
      features: [
        "Skill Verification",
        "Performance Badges",
        "Digital Certificates",
      ],
    },
  ];

  const resources = [
    { icon: faFileAlt, label: "Resume Templates" },
    { icon: faCommentAlt, label: "Mock Interviews" },
    { icon: faBarChart, label: "Skill Analysis" },
    { icon: faBookOpen, label: "Learning Paths" },
    { icon: faCheckCircle, label: "Goal Tracking" },
    { icon: faUsers, label: "Peer Feedback" },
  ];

  const phases = [
    { name: "Phase 1: Foundation", progress: 75 },
    { name: "Phase 2: Practical Skills", progress: 60 },
    { name: "Phase 3: Industry Projects", progress: 85 },
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

  return (
    <section className="w-full bg-[#F8FAFC]/60 py-20 lg:py-28 px-6 lg:px-12 font-sans antialiased max-w-7xl mx-auto">
      <div className="space-y-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto space-y-5"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#50d523]/20 rounded-full px-4 py-1.5 mx-auto select-none"
          >
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-xs text-[#50d523]"
            />
            <span className="font-bold tracking-wider uppercase text-[10px] sm:text-xs text-[#50d523]">
              Professional Development
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-tight"
          >
            Launch Your Career with{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Internee.pk
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Pakistan's innovative platform for career growth and professional
            development. Join our virtual internships to gain practical
            experience and kickstart your professional journey.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white border border-gray-100 p-6 lg:p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:shadow-gray-100/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#50d523] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E8F5E9] transition-colors">
                  <FontAwesomeIcon icon={stat.icon} className="text-sm" />
                </div>
                <span className="block text-2xl lg:text-3xl font-bold text-[#50d523] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-gray-400 mt-1 block uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {featureCards.map((card) => {
            return (
              <motion.div
                key={card.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border border-gray-100 p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#E8F5E9] text-[#50d523] rounded-xl flex items-center justify-center border border-green-100/30 transition-transform group-hover:scale-105">
                    <FontAwesomeIcon icon={card.icon} className="text-base" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-gray-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-4 border-t border-gray-50">
                  {card.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-600"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-[#50d523] text-xm shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6"
          >
            <div>
              <h4 className="text-base font-black text-gray-900 tracking-tight mb-1">
                Your Learning Journey
              </h4>
              <p className="text-gray-400 text-xs font-medium">
                Real-time curriculum progression tracking
              </p>
            </div>

            <div className="space-y-5 flex-1 flex flex-col justify-center">
              {phases.map((phase, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gray-700">
                    <span>{phase.name}</span>
                    <span className="text-[#50d523]">{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${phase.progress}%` }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                      className="bg-linear-to-r from-[#50d523] to-[#50d523] h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6"
          >
            <div>
              <h4 className="text-base font-black text-gray-900 tracking-tight mb-1">
                Career Resources
              </h4>
              <p className="text-gray-400 text-xs font-medium">
                Premium assets to enhance market readiness
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {resources.map((resource, index) => {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="bg-[#F8FAFC]/80 border border-gray-100 p-3.5 rounded-xl flex items-center gap-3 hover:bg-[#E8F5E9]/50 hover:border-[#50d523]/20 transition-all cursor-pointer group"
                  >
                    <div className="w-9 h-9 bg-white border border-gray-100 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-[#50d523] transition-colors shadow-sm shrink-0">
                      <FontAwesomeIcon
                        icon={resource.icon}
                        className="text-xs text-[#50d523]"
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
                      {resource.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
