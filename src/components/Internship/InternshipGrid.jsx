import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import graphicDesign from "../../assets/graphicDesign.png";
import chatbot from "../../assets/chatbot.png";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import other from "../../assets/other.png";

const InternshipOpportunities = () => {
  const tracks = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      desc: "Master UI/UX, branding, and visual communication",
      imgAsset: graphicDesign,
    },
    {
      id: "chatbot-development",
      title: "Chatbot Development",
      desc: "Build AI-powered conversational experiences",
      imgAsset: chatbot,
    },
    {
      id: "frontend-development",
      title: "Frontend Internship",
      desc: "Create stunning, responsive web interfaces",
      imgAsset: frontend,
    },
    {
      id: "app-development",
      title: "App Development",
      desc: "Design and develop mobile applications",
      imgAsset: frontend,
    },
    {
      id: "backend-development",
      title: "Backend Development",
      desc: "Build scalable APIs and server infrastructure",
      imgAsset: backend,
    },
    {
      id: "other-internships",
      title: "Other Internships",
      desc: "Explore diverse tech career opportunities",
      imgAsset: other,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto"
        >
          <motion.div
            variants={headerVariants}
            className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full p-1 pr-3 sm:px-4 sm:py-1.5"
          >
            <span className="text-[9px] sm:text-[10px] px-2 sm:w-14 h-5 sm:h-6 flex items-center font-bold justify-center border rounded-3xl text-white bg-[#50d523]">
              Trending
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-gray-600 tracking-wide whitespace-nowrap uppercase">
              Explore Internship Opportunities
            </span>
          </motion.div>

          <motion.h2
            variants={headerVariants}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight"
          >
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
              Internship Tracks
            </span>
          </motion.h2>

          <motion.p
            variants={headerVariants}
            className="text-gray-500 text-md sm:text-sm lg:text-lg font-medium max-w-md mx-auto px-2"
          >
            Choose from 10+ in-demand tech tracks and start building real-world
            skills today.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-500 flex flex-col cursor-pointer"
            >
              <div className="h-44 sm:h-52 relative flex flex-col justify-between p-5 sm:p-6 overflow-hidden select-none">
                <div className="absolute inset-0 w-full h-full z-0 transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={track.imgAsset}
                    alt={track.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute left-0 bottom-0 right-0 h-1 bg-white rounded-t-xl z-30" />
              </div>

              <div className="p-5 sm:p-6 flex flex-col grow justify-between space-y-4 sm:space-y-5 bg-white z-20">
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#50d523] transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                    {track.desc}
                  </p>
                </div>
                <Link to={`/internships/${track.id}`} className="w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-linear-to-r cursor-pointer from-[#50d523] to-[#50d523] text-white py-3 sm:py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200 group"
                >
                  <span>Apply Now</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipOpportunities;
