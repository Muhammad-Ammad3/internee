// import React from 'react';

// const InternshipOpportunities = () => {
//   // Mock data matching the exact 6 layout category cards in your screenshots
//   const categories = [
//     {
//       title: "Graphic Design",
//       desc: "Master UI/UX, branding, and visual communication",
//       bannerText: "LEARN DESIGN THAT STANDS OUT",
//       badge: "BUILD REAL CREATIVE SKILLS",
//       icon: "🎨" // Minimalist visual anchor placeholder
//     },
//     {
//       title: "Chatbot Development",
//       desc: "Build AI-powered conversational experiences",
//       bannerText: "SMART AI BOTS THAT CONVERSE",
//       badge: "HANDS-ON AI EXPERIENCE",
//       icon: "🤖"
//     },
//     {
//       title: "Frontend Internship",
//       desc: "Create stunning, responsive web interfaces",
//       bannerText: "BUILD REAL APPS FROM SCRATCH",
//       badge: "REAL-WORLD APP PROJECTS",
//       icon: "💻"
//     },
//     {
//       title: "App Development",
//       desc: "Design and develop mobile applications",
//       bannerText: "BUILD REAL APPS FROM SCRATCH",
//       badge: "REAL-WORLD APP PROJECTS",
//       icon: "📱"
//     },
//     {
//       title: "Backend Development",
//       desc: "Build scalable APIs and server infrastructure",
//       bannerText: "LEARN THE TECH BEHIND BIG APPS",
//       badge: "REAL-WORLD BACKEND EXPERIENCE",
//       icon: "⚙️"
//     },
//     {
//       title: "Other Internships",
//       desc: "Explore diverse tech career opportunities",
//       bannerText: "SKILLS THAT LAST FOR EVERY ROLE",
//       badge: "TRY SOMETHING NEW GROW WITH TECH",
//       icon: "🚀"
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans">
//       <div className="max-w-screen-2xl mx-auto space-y-12">
        
//         {/* ================= HEADER SECTION ================= */}
//         <div className="text-center space-y-4 max-w-2xl mx-auto">
//           <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 shadow-sm">
//             <span className="bg-[#3FB628] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse">
//               Trending
//             </span>
//             <span className="text-xs font-bold text-gray-600 tracking-wide">
//               Explore Internship Opportunities
//             </span>
//           </div>
          
//           <h2 className="text-3xl sm:text-[42px] font-black text-gray-950 tracking-tight leading-[1.15]">
//             Your Dream Internship <br className="hidden sm:inline" />
//             is Just One <span className="text-[#3FB628]">Click Away!</span>
//           </h2>
          
//           <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wide">
//             Choose from 10+ in-demand tech tracks and start building real-world skills today.
//           </p>
//         </div>

//         {/* ================= RESPONISVE 3-COLUMN CARDS GRID ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
//           {categories.map((item, idx) => (
//             <div 
//               key={idx}
//               className="group bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(63,182,40,0.06)] hover:border-gray-200/80 transition-all duration-300 flex flex-col"
//             >
              
//               {/* Inner Abstract Mockup Frame Section (Top Half Dark Block) */}
//               <div className="bg-[#242424] p-6 h-48 relative flex flex-col justify-between overflow-hidden">
//                 {/* Simulated geometric layout branding accent */}
//                 <div className="absolute top-4 right-4 text-[11px] font-bold text-neutral-500 tracking-tight flex items-center gap-1 opacity-80">
//                   <span className="text-[#3FB628] text-xs">🎓</span> internee.pk
//                 </div>
                
//                 <div className="space-y-2 relative z-10 max-w-[70%] mt-auto">
//                   <span className="inline-block bg-white/10 backdrop-blur-md text-[9px] font-extrabold text-neutral-300 px-2 py-0.5 rounded-md uppercase tracking-wider">
//                     {item.badge}
//                   </span>
//                   <h4 className="text-white text-base sm:text-lg font-black tracking-tight leading-snug">
//                     {item.bannerText}
//                   </h4>
//                 </div>

//                 {/* Big Absolute Graphic Character Vector Layout Base */}
//                 <div className="absolute right-3 bottom-2 text-[72px] opacity-25 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 select-none">
//                   {item.icon}
//                 </div>
                
//                 {/* Smooth Dark Radial Ambient Glow */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
//               </div>

//               {/* Bottom Content Metadata Info Block */}
//               <div className="p-6 flex flex-col flex-grow justify-between space-y-6 bg-white">
//                 <div className="space-y-1.5">
//                   <h3 className="text-base font-black text-gray-900 tracking-tight group-hover:text-[#3FB628] transition-colors">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-500 text-xs font-semibold leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* Interactive Dynamic Action Anchor Link */}
//                 <button className="w-full bg-[#3FB628] text-white py-3 px-4 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 hover:bg-[#349e1e] transition-all duration-200 shadow-md shadow-green-100 group-hover:shadow-green-200">
//                   <span>Apply Now</span>
//                   <svg 
//                     className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     strokeWidth="2.5" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
//                   </svg>
//                 </button>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default InternshipOpportunities;


"use client";

import React from "react";
import { motion } from "framer-motion";

// Font Awesome Core aur Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid Icons Imports
import { 
  faPalette, 
  faRobot, 
  faCode, 
  faMobileScreenButton, 
  faServer, 
  faRocket,
  faArrowRight, 
  faCircleCheck 
} from "@fortawesome/free-solid-svg-icons";

const InternshipOpportunities = () => {
  // Mock data matching the exact 6 layout category cards (Font Awesome icons reference ke sath)
  const categories = [
    {
      title: "Graphic Design",
      desc: "Master UI/UX, branding, and visual communication",
      bannerText: "LEARN DESIGN THAT STANDS OUT",
      badge: "BUILD REAL CREATIVE SKILLS",
      icon: faPalette,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Chatbot Development",
      desc: "Build AI-powered conversational experiences",
      bannerText: "SMART AI BOTS THAT CONVERSE",
      badge: "HANDS-ON AI EXPERIENCE",
      icon: faRobot,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Frontend Internship",
      desc: "Create stunning, responsive web interfaces",
      bannerText: "BUILD REAL APPS FROM SCRATCH",
      badge: "REAL-WORLD APP PROJECTS",
      icon: faCode,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "App Development",
      desc: "Design and develop mobile applications",
      bannerText: "BUILD REAL APPS FROM SCRATCH",
      badge: "REAL-WORLD APP PROJECTS",
      icon: faMobileScreenButton,
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Backend Development",
      desc: "Build scalable APIs and server infrastructure",
      bannerText: "LEARN THE TECH BEHIND BIG APPS",
      badge: "REAL-WORLD BACKEND EXPERIENCE",
      icon: faServer,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Other Internships",
      desc: "Explore diverse tech career opportunities",
      bannerText: "SKILLS THAT LAST FOR EVERY ROLE",
      badge: "TRY SOMETHING NEW GROW WITH TECH",
      icon: faRocket,
      color: "from-red-500 to-rose-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-6 max-w-2xl mx-auto"
        >
          <motion.div variants={headerVariants} className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5">
            <div className="w-2 h-2 bg-[#43A047] rounded-full animate-pulse" />
            <span className="text-xs font-bold text-gray-600 tracking-wide">
              Explore Internship Opportunities
            </span>
          </motion.div>
          
          <motion.h2 variants={headerVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Your Dream Internship{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              is Just One Click Away!
            </span>
          </motion.h2>
          
          <motion.p variants={headerVariants} className="text-gray-500 text-sm lg:text-base font-medium max-w-md mx-auto">
            Choose from 10+ in-demand tech tracks and start building real-world skills today.
          </motion.p>
        </motion.div>

        {/* ================= RESPONSIVE 3-COLUMN CARDS GRID ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-500/10 hover:border-gray-200 transition-all duration-500 flex flex-col cursor-pointer"
            >
              
              {/* Inner Abstract Mockup Frame Section (Top Half Dark Block) */}
              <div className="bg-[#0a0a0a] p-6 h-48 relative flex flex-col justify-between overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#43A047]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                
                {/* Simulated geometric layout branding accent */}
                <div className="absolute top-4 right-4 text-xs font-bold text-neutral-500 tracking-tight flex items-center gap-1.5 opacity-80">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-xs text-[#43A047]" />
                  <span>internee.pk</span>
                </div>
                
                <div className="space-y-3 relative z-10 max-w-[80%] mt-auto">
                  <span className="inline-block bg-white/10 backdrop-blur-sm text-[9px] font-bold text-neutral-300 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <h4 className="text-white text-base sm:text-lg font-bold tracking-tight leading-snug">
                    {item.bannerText}
                  </h4>
                </div>

                {/* Big Absolute Graphic Icon */}
                <motion.div 
                  className="absolute right-4 bottom-4 text-5xl opacity-20 group-hover:scale-110 group-hover:opacity-35 transition-all duration-300 select-none text-white flex items-center justify-center w-16 h-16"
                >
                  <FontAwesomeIcon icon={item.icon} className="w-12 h-12" />
                </motion.div>
                
                {/* Smooth Dark Radial Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Content Metadata Info Block */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-5 bg-white">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#43A047] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Interactive Dynamic Action Anchor Link */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white py-3.5 px-4 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-200 group"
                >
                  <span>Apply Now</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default InternshipOpportunities;