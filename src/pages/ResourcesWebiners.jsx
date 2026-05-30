import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendarDays,
  faPlay,
  faArrowRight,
  faVideo,
  faUsers,
  faBookOpen,
  faClock,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

const AnimatedSectionLate = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ResourcesWebiners() {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filters = ["All", "Upcoming", "Live", "Completed", "Webinars"];

  const webinars = [
    {
      id: 1,
      status: "Completed",
      duration: "1h",
      category: "Career Development",
      title: "Digital Baithak: Exploring Career Paths with Umair Ahmed",
      speaker: "Umair Ahmed",
      role: "Career Coach and Industry Expert",
      date: "Mar 15, 2026",
      displayDate: "14",
      displayMonth: "MAR 2026",
      displayTime: "10:30 PM",
      topicBadge: "CAREER PATHS",
      subTopic: "Exploring Career Paths",
      tags: [
        "career development",
        "personal branding",
        "networking",
        "internships",
      ],
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      status: "Completed",
      duration: "1 hour",
      category: "Career Development",
      title:
        "Digital Baithak: The Future of Career Development with Qasim Hassan",
      speaker: "Qasim Hassan",
      role: "Career Strategist and Coach",
      date: "Monday, Mar 16, 2026 at 03:30 AM",
      displayDate: "15",
      displayMonth: "MAR 2026",
      displayTime: "10:30 PM",
      topicBadge: "DATA ENGINEERING",
      subTopic: "Career Guide & Current Market Worth",
      tags: [
        "career development",
        "networking",
        "digital tools",
        "internships",
        "personal branding",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      status: "Completed",
      duration: "1h",
      category: "Career Development",
      title: "Building a Successful Career in Software Engineering",
      speaker: "Muhammad Abdullah",
      role: "Senior Software Engineer",
      date: "Mar 10, 2026",
      displayDate: "09",
      displayMonth: "MAR 2026",
      displayTime: "10:30 PM",
      topicBadge: "SOFTWARE ENG.",
      subTopic: "Building a Successful Career",
      tags: [
        "career",
        "software engineering",
        "professional growth",
        "internships",
      ],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      status: "Live",
      duration: "1h",
      category: "Career Development",
      title: "Exploring Digital Innovation: Episode 02 of Digital Baithak",
      speaker: "Zeeshan Awan",
      role: "Digital Innovation Specialist",
      date: "Feb 28, 2026",
      displayDate: "28",
      displayMonth: "FEB 2026",
      displayTime: "08:00 PM",
      topicBadge: "INNOVATION",
      subTopic: "Exploring Digital Innovation",
      tags: [
        "digital innovation",
        "innovation",
        "career growth",
        "internships",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      status: "Completed",
      duration: "1h",
      category: "AI & Machine Learning",
      title: "Digital Baithak: Navigating Careers ft. Nasir Hussain",
      speaker: "Nasir Hussain",
      role: "AI Engineer and Mentor",
      date: "Mar 09, 2026",
      displayDate: "09",
      displayMonth: "MAR 2026",
      displayTime: "04:00 PM",
      topicBadge: "AI & ML",
      subTopic: "Navigating Tech Careers",
      tags: [
        "career development",
        "networking",
        "skill enhancement",
        "internships",
      ],
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleWatchRecording = (webinar) => {
    navigate("/webinars/digital", { state: { webinar } });
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="w-full bg-gray-50/50 min-h-screen font-sans antialiased pb-24 text-left overflow-x-hidden"
    >
      <AnimatedSection className="w-full">
        <div className="w-full bg-[#0a0a0a] text-white px-4 py-12 sm:px-6 md:px-12 lg:px-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 opacity-15 pointer-events-none z-0 hidden sm:block">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 grid grid-cols-2 gap-0 mix-blend-overlay">
              <div className="w-40 h-40 bg-white rounded-l-full"></div>
              <div className="w-40 h-40 bg-white"></div>
              <div className="w-40 h-40 bg-white rounded-full"></div>
              <div className="w-40 h-40 bg-white rounded-tr-full"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto space-y-4 md:space-y-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={faVideo}
                className="text-[10px] sm:text-xs text-[#50d523]"
              />
              <span className="text-[10px] sm:text-xs font-bold text-[#50d523] uppercase tracking-wider">
                Expert-Led Sessions
              </span>
            </motion.div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight wrap-break-words">
              Webinars &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                Masterclasses
              </span>
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-2xl leading-relaxed font-medium">
              Join exclusive online sessions hosted by industry professionals.
              Gain practical insights, learn trending technologies, and
              accelerating your career growth.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-10 space-y-8 md:space-y-12">
        <AnimatedSection className="flex flex-wrap items-center gap-3 pb-4 overflow-x-auto no-scrollbar">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all whitespace-nowrap ${
                (filter === "All" && activeFilter === "All") ||
                activeFilter === filter
                  ? "bg-[#50d523] border-[#50d523] text-white shadow-lg shadow-green-500/25"
                  : "bg-white border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {webinars
            .filter(
              (item) =>
                activeFilter === "All" ||
                item.status === activeFilter ||
                (activeFilter === "Webinars" && item.status === "Completed"),
            )
            .map((item) => (
              <AnimatedSectionLate key={item.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-500 flex flex-col group cursor-pointer"
                >
                  <div className="relative aspect-16/10 bg-[#121b15] text-white overflow-hidden p-4 sm:p-5 flex justify-between items-center select-none">
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[16px_16px]"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#50d523]/10 rounded-full blur-2xl"></div>

                    <div className="z-10 flex flex-col justify-between h-full max-w-[55%] space-y-2">
                      <div className="space-y-1">
                        <div className="bg-[#50d523] text-black font-extrabold text-[9px] uppercase px-2 py-0.5 rounded tracking-wider inline-block">
                          {item.speaker.split(" ")[0]}{" "}
                          {item.speaker.split(" ")[1] || ""}
                        </div>
                        <h4 className="text-white font-black text-xs sm:text-sm leading-tight uppercase tracking-tight line-clamp-1">
                          {item.speaker}
                        </h4>
                        <p className="text-[9px] text-gray-400 font-medium line-clamp-1 border-b border-white/10 pb-1">
                          {item.role}
                        </p>
                      </div>

                      <div className="pt-1">
                        <div className="text-[11px] font-black text-[#50d523] tracking-wide leading-none uppercase">
                          {item.topicBadge}
                        </div>
                        <div className="text-[9px] text-gray-300 font-bold leading-tight mt-0.5 line-clamp-2 italic">
                          {item.subTopic}
                        </div>
                      </div>
                    </div>

                    <div className="absolute right-16 bottom-0 w-25 h-[88%] z-10 overflow-hidden rounded-t-2xl border-t border-l border-r border-white/20 bg-neutral-900 shadow-inner">
                      <img
                        src={item.image}
                        alt={item.speaker}
                        className="w-full h-full object-cover object-top filter contrast-105 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="z-20 flex flex-col items-center justify-center bg-white text-black rounded-xl py-2 px-2.5 min-w-13.75 shadow-2xl border border-gray-100 self-center transform scale-95 sm:scale-100">
                      <span className="text-xl font-black leading-none text-neutral-900 tracking-tighter">
                        {item.displayDate}
                      </span>
                      <span className="text-[8px] font-black uppercase text-[#50d523] tracking-widest mt-0.5">
                        {item.displayMonth.split(" ")[0]}
                      </span>
                      <span className="text-[7px] font-bold text-gray-400 leading-none">
                        {item.displayMonth.split(" ")[1]}
                      </span>
                      <span className="text-[7px] font-extrabold bg-neutral-900 text-white px-1 py-0.5 rounded-sm mt-1.5 whitespace-nowrap tracking-tight">
                        {item.displayTime}
                      </span>
                    </div>

                    <div className="absolute top-2 left-2 flex gap-1.5 z-30">
                      <span
                        className={`text-[8px] uppercase font-bold px-2 py-0.5 rounded tracking-wider text-white ${
                          item.status === "Live"
                            ? "bg-red-600 animate-pulse"
                            : "bg-neutral-900/80 backdrop-blur-xs"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#50d523]">
                        {item.category}
                      </span>
                      <h3 className="text-base lg:text-lg font-bold text-gray-900 tracking-tight line-clamp-2 leading-snug group-hover:text-[#50d523] transition-colors">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 text-gray-400 text-sm font-medium pt-1">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="text-xs text-gray-300"
                        />
                        <span className="text-xs line-clamp-1">
                          {item.date}
                        </span>
                        <span className="text-gray-300">•</span>
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-xs text-gray-300"
                        />
                        <span className="text-xs">{item.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5 max-h-8 overflow-hidden">
                        {item.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="bg-gray-50 text-gray-500 border border-gray-100 text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="bg-gray-50 text-gray-500 border border-gray-100 text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap">
                            +{item.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleWatchRecording(item)}
                        className="w-full bg-[#0a0a0a] hover:bg-[#50d523] text-white font-bold text-sm py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group-hover:bg-[#50d523]"
                      >
                        <FontAwesomeIcon icon={faPlay} className="text-xs" />
                        Watch Recording
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSectionLate>
            ))}
        </div>

        <AnimatedSectionLate className="mt-8">
          <motion.div
            whileInView="animate"
            className="w-full bg-[#0a0a0a] rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
          >
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#50d523]/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 bg-purple-500/10 rounded-full blur-[50px] sm:blur-[80px] pointer-events-none" />

            <div className="space-y-4 sm:space-y-6 max-w-xl z-10 relative w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full py-1.5 pl-2 pr-4"
              >
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-[10px] sm:text-xs text-[#50d523]"
                />
                <span className="text-[10px] sm:text-xs font-medium text-gray-300">
                  Stay Ahead of the Curve
                </span>
              </motion.div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight wrap-break-words">
                Never Miss a{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                  Learning Opportunity
                </span>
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm lg:text-base font-medium leading-relaxed">
                Register for upcoming webinars and watch recordings of past
                sessions to continuously build your skills.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <button
                  onClick={() => navigate("/internships")}
                  className="flex items-center justify-center gap-2 cursor-pointer bg-linear-to-r from-[#50d523] to-[#50d523] text-white font-bold px-5 py-3.5 rounded-xl transition-all text-xs sm:text-sm shadow-lg shadow-green-500/25 hover:shadow-green-500/40 group w-full sm:w-auto"
                >
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    className="text-xs sm:text-sm"
                  />
                  <span>Explore Internships</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button
                  onClick={() => navigate("/studentambassadors")}
                  className="flex items-center justify-center gap-2 cursor-pointer border border-gray-700 hover:border-gray-500 hover:bg-white/5 text-white font-bold px-5 py-3.5 rounded-xl transition-colors text-xs sm:text-sm bg-transparent w-full sm:w-auto"
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-xs sm:text-sm"
                  />
                  <span>Become Ambassador</span>
                </button>
              </div>
            </div>

            <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none z-0">
              <div className="absolute right-12 bottom-12 w-32 h-32 bg-white rounded-full" />
              <div className="absolute right-48 top-12 w-28 h-28 bg-white" />
              <div className="absolute right-12 top-24 w-24 h-48 border-t-48px border-l-48px border-transparent border-t-white" />
              <div className="absolute right-48 bottom-16 w-32 h-32 bg-white rounded-tl-full" />
            </div>
          </motion.div>
        </AnimatedSectionLate>
      </div>
    </motion.div>
  );
}
