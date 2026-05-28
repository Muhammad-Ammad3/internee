import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCrosshairs,
  faGlobe,
  faClock,
  faGift,
  faUsers,
  faVideo,
  faCommentAlt,
  faChartBar,
  faGraduationCap,
  faBullhorn,
  faCalendarAlt,
  faAward,
  faPenNib,
  faStar,
  faShareAlt,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

export default function AmbassadorResponsibilities() {
  const campusTasks = [
    {
      num: 1,
      title: "Organize Events",
      desc: "Host 2-3 events monthly - workshops, hackathons, talks, networking sessions",
      icon: faBullhorn,
    },
    {
      num: 2,
      title: "Recruit Students",
      desc: "Connect with students and share Internee.pk opportunities and programs",
      icon: faUsers,
    },
    {
      num: 3,
      title: "Share Updates",
      desc: "Keep campus informed about new programs and success stories",
      icon: faShareAlt,
    },
    {
      num: 4,
      title: "Mentor Peers",
      desc: "Guide new students through programs and opportunity selection",
      icon: faGraduationCap,
    },
    {
      num: 5,
      title: "Brand Representation",
      desc: "Represent Internee.pk at college events and competitions",
      icon: faAward,
    },
  ];

  const onlineTasks = [
    {
      num: 1,
      title: "Content Creation",
      desc: "Share engaging posts, stories, and testimonials on social media",
      icon: faPenNib,
    },
    {
      num: 2,
      title: "Community Engagement",
      desc: "Answer questions on forums and support ambassador community",
      icon: faCommentAlt,
    },
    {
      num: 3,
      title: "Track Metrics",
      desc: "Report event attendance, engagement, and outcomes monthly",
      icon: faChartBar,
    },
    {
      num: 4,
      title: "Attend Training",
      desc: "Participate in monthly ambassador training and webinars",
      icon: faVideo,
    },
    {
      num: 5,
      title: "Provide Feedback",
      desc: "Share insights and suggestions to help improve our programs",
      icon: faHeadphones,
    },
  ];

  const metadata = [
    {
      icon: faClock,
      title: "Time Required",
      desc: "8-10 hours per week (flexible)",
      color: "green",
    },
    {
      icon: faCalendarAlt,
      title: "Commitment",
      desc: "6-12 months (negotiable)",
      color: "blue",
    },
    {
      icon: faGift,
      title: "Compensation",
      desc: "Monthly stipend + performance bonus",
      color: "green",
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

  const taskVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center space-y-5 mb-8"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
        >
          <FontAwesomeIcon icon={faStar} className="text-xs text-[#50d523]" />
          <span className="text-xs font-bold text-[#50d523] uppercase tracking-wider">
            Your Role
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight"
        >
          What You'll Do{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
            As an Ambassador
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-md max-w-2xl mx-auto font-medium"
        >
          Make real impact with meaningful responsibilities and full support
          from our team
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-white border-2 border-green-100/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-green-500/10 space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <div className="p-3 bg-linear-to-br from-[#50d523] to-[#50d523] text-white rounded-2xl w-12 h-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faCrosshairs} className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                On Campus
              </h3>
              <p className="text-gray-400 text-sm font-medium">
                Physical presence & engagement
              </p>
            </div>
          </motion.div>

          <div className="space-y-3">
            {campusTasks.map((task, index) => (
              <motion.div
                key={index}
                variants={taskVariants}
                whileHover={{ x: 6 }}
                className="bg-gray-50/50 rounded-xl p-4 flex items-start gap-4 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-linear-to-r from-[#50d523] to-[#50d523] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  <FontAwesomeIcon icon={task.icon} className="text-[10px]" />
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#50d523] transition-colors">
                    {task.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-white border border-blue-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-500/10 space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <div className="p-3 bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faGlobe} className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                Online
              </h3>
              <p className="text-gray-400 text-sm font-medium">
                Digital & community engagement
              </p>
            </div>
          </motion.div>

          <div className="space-y-3">
            {onlineTasks.map((task, index) => (
              <motion.div
                key={index}
                variants={taskVariants}
                whileHover={{ x: 6 }}
                className="bg-gray-50/50 rounded-xl p-4 flex items-start gap-4 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-linear-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  <FontAwesomeIcon icon={task.icon} className="text-[10px]" />
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                    {task.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="w-full rounded-3xl border border-gray-100 overflow-hidden bg-linear-to-r from-green-50/50 via-white to-blue-50/30 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100"
      >
        {metadata.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-200 p-6 flex items-center gap-4 md:justify-center transition-colors cursor-pointer"
          >
            <div
              className={`p-2.5 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 ${
                item.color === "green"
                  ? "bg-green-100 text-[#50d523]"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="text-xl" />
            </div>
            <div>
              <h5 className="font-medium text-gray-900 text-md">
                {item.title}
              </h5>
              <p className="text-gray-600 text-xs mt-0.5">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
