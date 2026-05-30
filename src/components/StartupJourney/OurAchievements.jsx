import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAward,
  faStar,
  faTrophy,
  faMedal,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

export default function OurAchievements() {
  const achievements = [
    {
      id: 1,
      badge: "Runner-Up",
      tag: "Zindigi",
      title: "Runner-Up Sindh Regional Zindigi Prize",
      description:
        "Recognized among top startups in Sindh for creating meaningful social and economic impact through technology.",
      image:
        "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=80",
      imageAlt: "Sindh Regional Zindigi Prize Ceremony",
      icon: faTrophy,
    },
    {
      id: 2,
      badge: "Winner",
      tag: "Ed-Tech",
      title: "SEE PAKISTAN ED-Tech Winner 2024",
      description:
        "Selected as Pakistan's best ED-Tech initiative for transforming youth employability and skills development.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      imageAlt: "SEE Pakistan Award Ceremony",
      icon: faMedal,
    },
    {
      id: 3,
      badge: "Winner",
      tag: "Vision 2024",
      title: "Aptech Young Entrepreneurs Award 2024",
      description:
        "Honored as the most innovative startup in the education and skills development sector by Aptech Global.",
      isYellowBanner: true,
      imageAlt: "Aptech Vision Award 2024",
      icon: faCrown,
    },
    {
      id: 4,
      badge: "Winner",
      tag: "Google Cloud",
      title: "Google Cloud Startup Competition Winner",
      description:
        "Recognized by Google Cloud for innovative use of technology in education and entrepreneurship ecosystem development.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
      imageAlt: "Google Cloud Startup Competition",
      icon: faAward,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
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
          <FontAwesomeIcon icon={faTrophy} className="text-xs text-[#50d523]" />
          <span className="text-xs font-bold text-[#50d523] uppercase tracking-wider">
            Recognition & Awards
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight"
        >
          Celebrating Our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#50d523] to-[#50d523]">
            Achievements
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-sm lg:text-base max-w-2xl mx-auto font-medium"
        >
          Industry recognition for our innovation, excellence, and commitment
        </motion.p>
      </motion.div>

      <div className="space-y-16 md:space-y-24">
        {achievements.map((item, index) => {
          const isImageRight = index % 2 === 1;

          return (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center group"
            >
              <motion.div
                variants={imageVariants}
                className={`col-span-1 lg:col-span-6 relative ${isImageRight ? "lg:order-last" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 relative transition-all duration-500 group-hover:shadow-2xl ${
                    item.isYellowBanner
                      ? "bg-linear-to-br from-yellow-400 to-amber-500"
                      : "bg-slate-50"
                  }`}
                >
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1.5">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-xs text-gray-800"
                      />
                      {item.badge}
                    </span>
                  </div>

                  {item.isYellowBanner ? (
                    <div className="aspect-4/3 w-full flex flex-col justify-center items-center p-8 bg-linear-to-br from-yellow-400 to-amber-500 text-slate-900 select-none">
                      <div className="bg-black/90 text-yellow-400 font-bold px-4 py-2 text-xl rounded-md uppercase tracking-tighter shadow-md mb-2">
                        Aptech Learning
                      </div>
                      <h4 className="text-2xl lg:text-3xl font-bold text-center tracking-tight leading-tight max-w-xs mt-2 uppercase">
                        {item.title}
                      </h4>
                      <div className="w-16 h-16 rounded-full bg-white/20 mt-4 border border-white/40 flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faCrown}
                          className="text-xl text-white"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full aspect-4/3 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="col-span-1 lg:col-span-6 space-y-5 lg:px-6"
              >
                <div className="flex items-center gap-2 text-[#50d523] text-xs font-bold tracking-wider uppercase">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-xs text-[#50d523]"
                  />
                  <span>2024 Recognition</span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium">
                  {item.description}
                </p>

                <motion.div whileHover={{ width: 80 }} className="pt-2">
                  <div className="w-12 h-0.75 bg-linear-to-r from-[#50d523] to-green-400 rounded-full group-hover:w-20 transition-all duration-300" />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
