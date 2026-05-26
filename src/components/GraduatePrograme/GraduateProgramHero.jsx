// import React from 'react';

// const GraduateProgramHero = () => {
//   // Mini metrics dataset for the top feature card in artwork
//   const miniMetrics = [
//     { value: "20+", label: "Tracks" },
//     { value: "80+", label: "Projects" },
//     { value: "35+", label: "Mentors" }
//   ];

//   return (
//     <section className="w-full bg-white pt-20 pb-16 px-6 lg:px-16 font-sans overflow-hidden select-none">
//       <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
//         {/* ========================================================================= */}
//         {/* LEFT COLUMN: BRANDING TITLES & INTERACTION CONTROLS                       */}
//         {/* ========================================================================= */}
//         <div className="lg:col-span-7 space-y-6">
          
//           {/* Micro Graduate Program Capsule Tag */}
//           <div className="inline-flex items-center gap-2 bg-[#f4fbf2] border border-green-100 rounded-full px-3 py-1">
//             <span className="text-xs">🎓</span>
//             <span className="text-[#3FB628] text-[11px] font-black tracking-wide uppercase">
//               Graduate Programs
//             </span>
//           </div>

//           {/* Main Master Heading */}
//           <h1 className="text-4xl sm:text-[56px] font-black text-gray-950 tracking-tight leading-[1.1] max-w-2xl">
//             Graduate Programs That<br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-950 to-neutral-700">
//               Launch Careers
//             </span>
//           </h1>

//           {/* Short Narrative Subtext */}
//           <p className="text-gray-500 text-xs sm:text-[15px] font-semibold leading-relaxed max-w-xl">
//             Explore structured, career-focused programs designed to build job-ready skills through real projects, mentorship, and industry expertise.
//           </p>

//           {/* Action Interface Buttons Row */}
//           <div className="flex flex-wrap items-center gap-4 pt-2">
//             <button className="bg-[#3FB628] text-white px-7 py-3.5 rounded-full text-xs font-black hover:bg-[#349e1e] transition-all shadow-md shadow-green-100 flex items-center gap-2 group active:scale-95">
//               Browse Programs 
//               <span className="text-sm transform group-hover:translate-x-0.5 transition-transform">✨</span>
//             </button>
//             <button className="bg-transparent text-gray-900 border border-gray-200 px-7 py-3.5 rounded-full text-xs font-black hover:bg-gray-50 transition active:scale-95">
//               Get Started
//             </button>
//           </div>
//         </div>

//         {/* ========================================================================= */}
//         {/* RIGHT COLUMN: ASYMMETRIC VISUAL LAYOUTS (ARTWORK CARDS)                  */}
//         {/* ========================================================================= */}
//         <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-end justify-center gap-5 relative">
          
//           {/* 1. TOP CARD: COMPREHENSIVE LEARNING OVERVIEW PANEL */}
//           <div className="w-full max-w-md bg-white border border-gray-100/90 rounded-[28px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.02)] space-y-5">
            
//             {/* Header Layout inside card */}
//             <div className="flex items-center justify-between w-full">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-[#f4fbf2] flex items-center justify-center text-sm">
//                   🟢
//                 </div>
//                 <div>
//                   <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">
//                     Program Features
//                   </span>
//                   <h4 className="text-sm font-black text-gray-950 tracking-tight">
//                     Comprehensive Learning
//                   </h4>
//                 </div>
//               </div>
              
//               {/* Duration badge */}
//               <span className="bg-gray-50 border border-gray-100 text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-md">
//                 12 Weeks
//               </span>
//             </div>

//             {/* Nested Inner Metrics Grid Setup */}
//             <div className="grid grid-cols-3 gap-3">
//               {miniMetrics.map((metric, i) => (
//                 <div key={i} className="bg-white border border-dashed border-gray-200 rounded-xl p-3 text-center space-y-0.5">
//                   <div className="text-base font-black text-gray-950 tracking-tight">
//                     {metric.value}
//                   </div>
//                   <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">
//                     {metric.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* 2. BOTTOM CARD: JET BLACK OUTCOME SNAPSHOT COMPONENT */}
//           <div className="w-full max-w-md bg-[#121212] rounded-[28px] p-6 text-white shadow-xl space-y-4 relative overflow-hidden transform lg:-translate-x-6">
            
//             {/* Micro Top Header Details */}
//             <div className="flex items-center justify-between">
//               <span className="text-neutral-500 text-[10px] font-bold tracking-wider uppercase">
//                 Outcome Snapshot
//               </span>
//               <span className="text-[#3FB628] text-xs">✦</span>
//             </div>

//             {/* Central Typography Header */}
//             <div className="space-y-1.5">
//               <h3 className="text-lg font-black tracking-tight text-white">
//                 Career-Ready Portfolio
//               </h3>
//               <p className="text-neutral-400 text-[11px] font-semibold leading-relaxed">
//                 Build verified projects with feedback and present a portfolio recruiters trust.
//               </p>
//             </div>

//             {/* Bottom Twin Micro Capsule Tags Row */}
//             <div className="grid grid-cols-2 gap-2.5 pt-1.5">
//               <div className="bg-neutral-900 border border-neutral-800/80 rounded-xl p-3 flex items-center gap-2">
//                 <span className="text-neutral-400 text-xs">💼</span>
//                 <span className="text-neutral-300 text-[11px] font-bold tracking-tight">
//                   Real-World Work
//                 </span>
//               </div>
//               <div className="bg-neutral-900 border border-neutral-800/80 rounded-xl p-3 flex items-center gap-2">
//                 <span className="text-[#3FB628] text-xs">✓</span>
//                 <span className="text-neutral-300 text-[11px] font-bold tracking-tight">
//                   Verified Skills
//                 </span>
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default GraduateProgramHero;


import React from "react";
import { motion } from "framer-motion";

// Font Awesome Core aur Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid Icons Imports
import { 
  faGraduationCap, 
  faWandMagicSparkles, 
  faArrowRight, 
  faClock, 
  faFolderOpen, // FolderKanban ki jagah clean look ke liye
  faUsers, 
  faBriefcase, 
  faCheckCircle,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

const GraduateProgramHero = () => {
  // Mini metrics dataset (Icons ko Font Awesome se replace kiya)
  const miniMetrics = [
    { value: "20+", label: "Tracks", icon: faFolderOpen },
    { value: "80+", label: "Projects", icon: faChartLine },
    { value: "35+", label: "Mentors", icon: faUsers }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: BRANDING TITLES & INTERACTION CONTROLS                       */}
        {/* ========================================================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-7 space-y-7"
        >
          {/* Micro Graduate Program Capsule Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5">
            <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4 text-[#43A047]" />
            <span className="text-[#43A047] text-xs font-bold uppercase tracking-widest">
              Graduate Programs
            </span>
          </motion.div>

          {/* Main Master Heading */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] max-w-2xl">
            Graduate Programs That<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              Launch Careers
            </span>
          </motion.h1>

          {/* Short Narrative Subtext */}
          <motion.p variants={itemVariants} className="text-gray-500 text-sm lg:text-base font-medium leading-relaxed max-w-xl">
            Explore structured, career-focused programs designed to build job-ready skills through real projects, mentorship, and industry expertise.
          </motion.p>

          {/* Action Interface Buttons Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all group"
            >
              <span>Browse Programs</span>
              <FontAwesomeIcon icon={faWandMagicSparkles} className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-7 py-3.5 rounded-full text-sm font-bold hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <span>Get Started</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: ASYMMETRIC VISUAL LAYOUTS (ARTWORK CARDS)                  */}
        {/* ========================================================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="lg:col-span-5 w-full flex flex-col items-center lg:items-end justify-center gap-5 relative"
        >
          
          {/* 1. TOP CARD: COMPREHENSIVE LEARNING OVERVIEW PANEL */}
          <motion.div variants={cardVariants} className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-6 lg:p-7 space-y-5 shadow-xl shadow-gray-100/50">
            
            {/* Header Layout inside card */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="w-6 h-6 text-[#43A047] text-lg" />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-400 tracking-wider uppercase block">
                    Program Features
                  </span>
                  <h4 className="text-base font-bold text-gray-900 tracking-tight">
                    Comprehensive Learning
                  </h4>
                </div>
              </div>
              
              {/* Duration badge */}
              <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                12 Weeks
              </span>
            </div>

            {/* Nested Inner Metrics Grid Setup */}
            <div className="grid grid-cols-3 gap-3">
              {miniMetrics.map((metric, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center space-y-2 hover:border-green-200 hover:bg-green-50/30 transition-all cursor-pointer"
                >
                  <FontAwesomeIcon icon={metric.icon} className="w-5 h-5 mx-auto text-gray-400" />
                  <div className="text-lg font-black text-gray-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 2. BOTTOM CARD: JET BLACK OUTCOME SNAPSHOT COMPONENT */}
          <motion.div 
            variants={cardVariants}
            className="w-full max-w-md bg-[#0a0a0a] rounded-3xl p-6 lg:p-7 text-white shadow-2xl space-y-5 relative overflow-hidden"
          >
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#43A047] opacity-5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#43A047] opacity-5 rounded-full blur-3xl" />
            
            {/* Micro Top Header Details */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-neutral-500 text-xs font-bold tracking-wider uppercase">
                Outcome Snapshot
              </span>
              <div className="w-2 h-2 bg-[#43A047] rounded-full animate-pulse" />
            </div>

            {/* Central Typography Header */}
            <div className="space-y-2 relative z-10">
              <h3 className="text-xl lg:text-2xl font-black tracking-tight text-white">
                Career-Ready Portfolio
              </h3>
              <p className="text-neutral-400 text-sm font-medium leading-relaxed">
                Build verified projects with feedback and present a portfolio recruiters trust.
              </p>
            </div>

            {/* Bottom Twin Micro Capsule Tags Row */}
            <div className="grid grid-cols-2 gap-3 pt-2 relative z-10">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:border-neutral-700 transition-all"
              >
                <FontAwesomeIcon icon={faBriefcase} className="text-neutral-400 w-4 h-4" />
                <span className="text-neutral-300 text-sm font-bold tracking-tight">
                  Real-World Work
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:border-neutral-700 transition-all"
              >
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#43A047] w-4 h-4" />
                <span className="text-neutral-300 text-sm font-bold tracking-tight">
                  Verified Skills
                </span>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default GraduateProgramHero;