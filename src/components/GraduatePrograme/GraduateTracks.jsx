import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faStethoscope,
  faMicrochip,
  faCode,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function GraduateTracks() {
  const tracks = [
    {
      id: 1,
      category: "Health Care",
      desc: "Step into the world where every second counts and lives are changed. Whether it's assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action.",
      icon: faStethoscope,
      linear: "from-slate-300 to-slate-400",
    },
    {
      id: 2,
      category: "Engineering",
      desc: "Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver's seat of innovation.",
      icon: faMicrochip,
      linear: "from-slate-400 to-slate-500",
      isFeatured: true,
    },
    {
      id: 3,
      category: "Information Technology",
      desc: "Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution.",
      icon: faCode,
      isDigitalBg: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans antialiased max-w-7xl mx-auto">
      <div className="space-y-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full border-b border-gray-100 pb-6 gap-4"
        >
          <div className="space-y-3">
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight"
            >
              Explore All{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
                Categories
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-xs sm:text-sm font-medium"
            >
              Choose from diverse program tracks tailored to your interests and
              career goals
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="shrink-0">
            <Link
              to="/all-programs"
              className="inline-flex items-center gap-2 text-[#50d523] hover:text-[#50d523] text-xs sm:text-sm font-bold transition-colors group"
            >
              <span>View All Programs</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs transform group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {tracks.map((track) => {
            return (
              <motion.div
                key={track.id}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`bg-white border rounded-3xl overflow-hidden flex flex-col h-full group transition-all duration-300 ${
                  track.isFeatured
                    ? "border-[#50d523] shadow-[0_15px_40px_rgba(67,160,71,0.08)]"
                    : "border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/40"
                }`}
              >
                <div className="h-48 lg:h-52 w-full relative bg-gray-50 overflow-hidden shrink-0 select-none">
                  {track.isDigitalBg ? (
                    <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center relative">
                      <div className="absolute inset-0 opacity-20 bg-[radial-linear(#50d523_1px,transparent_1px)] background-size:[16px_16px]" />
                      <div className="relative z-10 grid grid-cols-3 gap-3 opacity-20">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="w-7 h-7 border border-[#50d523] rounded flex items-center justify-center"
                          >
                            <FontAwesomeIcon
                              icon={faBolt}
                              className="text-[10px] text-[#50d523]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`w-full h-full bg-linear-to-br ${track.linear} opacity-85`}
                    />
                  )}

                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs border border-gray-100 px-3 py-1 rounded-full shadow-sm">
                    <span className="text-[#50d523] text-[10px] font-black uppercase tracking-wider block">
                      Graduate Track
                    </span>
                  </div>

                  <div
                    className={`absolute bottom-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${
                      track.isFeatured
                        ? "bg-[#50d523] text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    <FontAwesomeIcon icon={track.icon} className="text-base" />
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between gap-6">
                  <div className="space-y-3">
                    <h3
                      className={`text-lg font-black tracking-tight ${
                        track.isFeatured ? "text-[#50d523]" : "text-gray-900"
                      }`}
                    >
                      {track.category}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed line-clamp-4">
                      {track.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-50 flex items-center transition-transform group-hover:translate-x-1 duration-200">
                    <Link
                      to={`/programs/${track.category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-2 text-[#50d523] text-xs sm:text-sm font-bold"
                    >
                      <span>Learn more</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[10px]"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
