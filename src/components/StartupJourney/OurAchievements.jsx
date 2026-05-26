// import React from 'react';
// import { Award, Star } from 'lucide-react';

// export default function OurAchievements() {
//   const achievements = [
//     {
//       id: 1,
//       badge: "Runner-Up",
//       tag: "Zindigi",
//       title: "Runner-Up Sindh Regional Zindigi Prize",
//       description: "Recognized among top startups in Sindh for creating meaningful social and economic impact through technology.",
//       image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Sindh Regional Zindigi Prize Ceremony"
//     },
//     {
//       id: 2,
//       badge: "Winner",
//       tag: "Ed-Tech",
//       title: "SEE PAKISTAN ED-Tech Winner 2024",
//       description: "Selected as Pakistan's best ED-Tech initiative for transforming youth employability and skills development.",
//       image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
//       imageAlt: "SEE Pakistan Award Ceremony"
//     },
//     {
//       id: 3,
//       badge: "Winner",
//       tag: "Vision 2024",
//       title: "Aptech Young Entrepreneurs Award 2024",
//       description: "Honored as the most innovative startup in the education and skills development sector by Aptech Global.",
//       image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80", // Using a rich background texture style placeholder for the golden/yellow banner look
//       isYellowBanner: true,
//       imageAlt: "Aptech Vision Award 2024"
//     },
//     {
//       id: 4,
//       badge: "Winner",
//       tag: "Google Cloud",
//       title: "Google Cloud Startup Competition Winner",
//       description: "Recognized by Google Cloud for innovative use of technology in education and entrepreneurship ecosystem development.",
//       image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
//       imageAlt: "Google Cloud Startup Competition"
//     }
//   ];

//   return (
//     <div className="w-full bg-white font-sans antialiased px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto">

//       {/* --- SECTION HEADER --- */}
//       <div className="text-center space-y-3 mb-20">
//         <div className="inline-flex items-center gap-1.5 bg-[#E8F5E9] border border-[#43A047]/20 rounded-full px-3 py-1 text-[11px] font-bold text-[#43A047] uppercase tracking-wider mx-auto">
//           <Award className="w-3.5 h-3.5" /> Recognition & Awards
//         </div>
//         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
//           Celebrating Our Achievements
//         </h2>
//         <p className="text-gray-500 text-xs md:text-sm max-w-2xl mx-auto font-medium">
//           Industry recognition for our innovation, excellence, and commitment
//         </p>
//       </div>

//       {/* --- ZIGZAG TIMELINE/ACHIEVEMENTS LAYOUT --- */}
//       <div className="space-y-16 md:space-y-24">
//         {achievements.map((item, index) => {
//           // Check if index is odd to flip image side on desktop viewports
//           const isImageRight = index % 2 === 1;

//           return (
//             <div
//               key={item.id}
//               className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center group"
//             >

//               {/* Image Container Wrapper */}
//               <div className={`col-span-1 lg:col-span-6 relative ${isImageRight ? 'lg:order-last' : ''}`}>
//                 <div className={`w-full overflow-hidden rounded-2xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] relative transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:scale-[1.01] ${
//                   item.isYellowBanner ? 'bg-[#FFC107]' : 'bg-slate-50'
//                 }`}>

//                   {/* Absolute Badge on top of Image (Simulating the top right text in images) */}
//                   <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-3 py-1 rounded-md shadow-sm uppercase tracking-wider z-10">
//                     {item.badge}
//                   </span>

//                   {/* Dynamic Layout styling for Aptech Style Yellow Container or Regular Photo */}
//                   {item.isYellowBanner ? (
//                     <div className="aspect-[4/3] w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] text-slate-900 select-none">
//                       <div className="bg-black/90 text-yellow-400 font-black px-4 py-2 text-xl rounded-md uppercase tracking-tighter shadow-md mb-2">
//                         Aptech Learning
//                       </div>
//                       <h4 className="text-2xl font-black text-center tracking-tight leading-tight max-w-xs mt-2 uppercase">
//                         Aptech Vision Award 2024
//                       </h4>
//                       <div className="w-16 h-16 rounded-full bg-yellow-100/40 mt-4 border border-white/20 flex items-center justify-center font-bold text-xs">
//                         🏆
//                       </div>
//                     </div>
//                   ) : (
//                     <img
//                       src={item.image}
//                       alt={item.imageAlt}
//                       className="w-full aspect-[4/3] object-cover object-center transition-transform duration-500 group-hover:scale-105"
//                     />
//                   )}
//                 </div>
//               </div>

//               {/* Text Meta Content Block */}
//               <div className="col-span-1 lg:col-span-6 space-y-4 lg:px-6">

//                 {/* Meta Indicator (Star + Label) */}
//                 <div className="flex items-center gap-1.5 text-[#43A047] text-xs font-bold tracking-wider uppercase">
//                   <Star className="w-3.5 h-3.5 fill-[#43A047]" />
//                   <span>2024 Recognition</span>
//                 </div>

//                 {/* Achievement Headline Title */}
//                 <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-snug">
//                   {item.title}
//                 </h3>

//                 {/* Description Text */}
//                 <p className="text-gray-500 text-sm md:text-base leading-relaxed font-normal">
//                   {item.description}
//                 </p>

//                 {/* Premium Stylized Bottom Accent Line */}
//                 <div className="pt-2">
//                   <div className="w-12 h-[3px] bg-[#43A047] rounded-full group-hover:w-20 transition-all duration-300" />
//                 </div>

//               </div>

//             </div>
//           );
//         })}
//       </div>

//     </div>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";

// Font Awesome Core aur Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid Icons Imports
import {
  faAward,
  faStar,
  faTrophy,
  faMedal,
  faCrown,
  faArrowRight,
  faWandMagicSparkles,
  faCalendar,
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

  // Animation variants
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
      {/* --- SECTION HEADER --- */}
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
          <FontAwesomeIcon icon={faTrophy} className="text-xs text-[#43A047]" />
          <span className="text-xs font-bold text-[#43A047] uppercase tracking-wider">
            Recognition & Awards
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
        >
          Celebrating Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
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

      {/* --- ZIGZAG TIMELINE/ACHIEVEMENTS LAYOUT --- */}
      <div className="space-y-16 md:space-y-24">
        {achievements.map((item, index) => {
          // Check if index is odd to flip image side on desktop viewports
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
              {/* Image Container Wrapper */}
              <motion.div
                variants={imageVariants}
                className={`col-span-1 lg:col-span-6 relative ${isImageRight ? "lg:order-last" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full overflow-hidden rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 relative transition-all duration-500 group-hover:shadow-2xl ${
                    item.isYellowBanner
                      ? "bg-gradient-to-br from-yellow-400 to-amber-500"
                      : "bg-slate-50"
                  }`}
                >
                  {/* Absolute Badge on top of Image */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1.5">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-xs text-gray-800"
                      />
                      {item.badge}
                    </span>
                  </div>

                  {/* Dynamic Layout styling for Aptech Style Yellow Container or Regular Photo */}
                  {item.isYellowBanner ? (
                    <div className="aspect-[4/3] w-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900 select-none">
                      <div className="bg-black/90 text-yellow-400 font-black px-4 py-2 text-xl rounded-md uppercase tracking-tighter shadow-md mb-2">
                        Aptech Learning
                      </div>
                      <h4 className="text-2xl lg:text-3xl font-black text-center tracking-tight leading-tight max-w-xs mt-2 uppercase">
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
                      className="w-full aspect-[4/3] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </motion.div>
              </motion.div>

              {/* Text Meta Content Block */}
              <motion.div
                variants={itemVariants}
                className="col-span-1 lg:col-span-6 space-y-5 lg:px-6"
              >
                {/* Meta Indicator (Star + Label) */}
                <div className="flex items-center gap-2 text-[#43A047] text-xs font-bold tracking-wider uppercase">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-xs text-[#43A047]"
                  />
                  <span>2024 Recognition</span>
                </div>

                {/* Achievement Headline Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                  {item.title}
                </h3>

                {/* Description Text */}
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Premium Stylized Bottom Accent Line */}
                <motion.div whileHover={{ width: 80 }} className="pt-2">
                  <div className="w-12 h-[3px] bg-gradient-to-r from-[#43A047] to-green-400 rounded-full group-hover:w-20 transition-all duration-300" />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
