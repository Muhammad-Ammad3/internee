// import React from 'react';

// const CareerLaunchpad = () => {
//   return (
//     <section className="w-full bg-[#FAFAFA] py-20 px-6 lg:px-16 font-sans">
//       <div className="max-w-screen-2xl mx-auto space-y-16">
        
//         {/* ================= 1. HEADER TITLE ================= */}
//         <div className="text-center max-w-3xl mx-auto space-y-4">
//           <div className="inline-flex items-center gap-2 bg-gray-100/80 rounded-full px-4 py-1 text-xs border border-gray-200 text-gray-500">
//             <span>🎓</span>
//             <span className="font-bold tracking-wide uppercase text-[10px]">Professional Development</span>
//           </div>
//           <h2 className="text-3xl sm:text-[42px] font-bold text-gray-950 leading-tight">
//             Launch Your Career with Internee.pk
//           </h2>
//           <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto font-medium">
//             Pakistan's innovative platform for career growth and professional development. Join our virtual internships to gain practical experience and kickstart your professional journey.
//           </p>
//         </div>

//         {/* ================= 2. FOUR COUNTER BLOCKS ================= */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//           <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
//             <span className="block text-2xl sm:text-3xl font-black text-[#3FB628]">1000+</span>
//             <span className="text-xs sm:text-sm font-bold text-gray-500 mt-1 block">Active Internships</span>
//           </div>
//           <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
//             <span className="block text-2xl sm:text-3xl font-black text-[#3FB628]">500+</span>
//             <span className="text-xs sm:text-sm font-bold text-gray-500 mt-1 block">Partner Companies</span>
//           </div>
//           <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
//             <span className="block text-2xl sm:text-3xl font-black text-[#3FB628]">10,000+</span>
//             <span className="text-xs sm:text-sm font-bold text-gray-500 mt-1 block">Success Stories</span>
//           </div>
//           <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
//             <span className="block text-2xl sm:text-3xl font-black text-[#3FB628]">50+</span>
//             <span className="text-xs sm:text-sm font-bold text-gray-500 mt-1 block">Industry Sectors</span>
//           </div>
//         </div>

//         {/* ================= 3. THREE CENTRAL MATRIX CARDS ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* Card 1: Targeted Learning */}
//           <div className="bg-white border border-gray-100 p-8 rounded-3xl space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
//             <div className="w-10 h-10 bg-green-50 text-[#3FB628] rounded-xl flex items-center justify-center font-bold text-lg border border-green-100">
//               🎯
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-lg font-bold text-gray-950">Targeted Learning</h3>
//               <p className="text-gray-400 text-sm font-medium leading-relaxed">
//                 Industry-specific virtual internships designed to build practical skills and experience.
//               </p>
//             </div>
//             <ul className="space-y-3 pt-2 text-sm font-bold text-gray-600">
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Web Development</li>
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Digital Marketing</li>
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> UI/UX Design</li>
//             </ul>
//           </div>

//           {/* Card 2: Mentorship Program */}
//           <div className="bg-white border border-gray-100 p-8 rounded-3xl space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
//             <div className="w-10 h-10 bg-green-50 text-[#3FB628] rounded-xl flex items-center justify-center font-bold text-lg border border-green-100">
//               👥
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-lg font-bold text-gray-950">Mentorship Program</h3>
//               <p className="text-gray-400 text-sm font-medium leading-relaxed">
//                 Learn directly from industry experts at Internee.pk with guided weekly sessions.
//               </p>
//             </div>
//             <ul className="space-y-3 pt-2 text-sm font-bold text-gray-600">
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> One-on-One Guidance</li>
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Project Reviews</li>
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Career Planning</li>
//             </ul>
//           </div>

//           {/* Card 3: Certification Track */}
//           <div className="bg-white border border-gray-100 p-8 rounded-3xl space-y-5 shadow-[0_4px_25px_rgba(0,0,0,0.01)]">
//             <div className="w-10 h-10 bg-green-50 text-[#3FB628] rounded-xl flex items-center justify-center font-bold text-lg border border-green-100">
//               🏅
//             </div>
//             <div className="space-y-2">
//               <h3 className="text-lg font-bold text-gray-950">Certification Track</h3>
//               <p className="text-gray-400 text-sm font-medium leading-relaxed">
//                 Earn recognized certifications and build a portfolio that employers trust.
//               </p>
//             </div>
//             <ul className="space-y-3 pt-2 text-sm font-bold text-gray-600">
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Skill Verification</li>
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Performance Badges</li>
//               <li className="flex items-center gap-3"><span className="text-[#3FB628]">✓</span> Digital Certificates</li>
//             </ul>
//           </div>

//         </div>

//         {/* ================= 4. BOTTOM TWO-COLUMN METRIC PLATFORM ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
//           {/* Left Block: Learning Journey Progress Indicators */}
//           <div className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-6">
//             <h4 className="text-base font-bold text-gray-900 mb-2">Your Learning Journey</h4>
            
//             {/* Phase 1 */}
//             <div className="space-y-2">
//               <div className="flex justify-between text-xs font-bold text-gray-700">
//                 <span>Phase 1: Foundation</span>
//                 <span className="text-gray-400">75%</span>
//               </div>
//               <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
//                 <div className="bg-[#3FB628] h-full rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
//               </div>
//             </div>

//             {/* Phase 2 */}
//             <div className="space-y-2">
//               <div className="flex justify-between text-xs font-bold text-gray-700">
//                 <span>Phase 2: Practical Skills</span>
//                 <span className="text-gray-400">60%</span>
//               </div>
//               <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
//                 <div className="bg-[#3FB628] h-full rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
//               </div>
//             </div>

//             {/* Phase 3 */}
//             <div className="space-y-2">
//               <div className="flex justify-between text-xs font-bold text-gray-700">
//                 <span>Phase 3: Industry Projects</span>
//                 <span className="text-gray-400">85%</span>
//               </div>
//               <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
//                 <div className="bg-[#3FB628] h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
//               </div>
//             </div>

//           </div>

//           {/* Right Block: Career Resources Link Items */}
//           <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.01)] space-y-4">
//             <h4 className="text-base font-bold text-gray-900 mb-2">Career Resources</h4>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
//               <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
//                 <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">📄</span>
//                 <span className="text-xs sm:text-sm font-bold text-gray-700">Resume Templates</span>
//               </div>
//               <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
//                 <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">💬</span>
//                 <span className="text-xs sm:text-sm font-bold text-gray-700">Mock Interviews</span>
//               </div>
//               <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
//                 <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">📊</span>
//                 <span className="text-xs sm:text-sm font-bold text-gray-700">Skill Analysis</span>
//               </div>
//               <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
//                 <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">📖</span>
//                 <span className="text-xs sm:text-sm font-bold text-gray-700">Learning Paths</span>
//               </div>
//               <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
//                 <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">🎯</span>
//                 <span className="text-xs sm:text-sm font-bold text-gray-700">Goal Tracking</span>
//               </div>
//               <div className="bg-gray-50/70 border border-gray-100/60 p-4 rounded-xl flex items-center gap-3 hover:bg-gray-100/50 transition cursor-pointer">
//                 <span className="text-green-600 bg-white shadow-sm w-8 h-8 rounded-lg flex items-center justify-center text-sm">👥</span>
//                 <span className="text-xs sm:text-sm font-bold text-gray-700">Peer Feedback</span>
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default CareerLaunchpad;


"use client";

import React from "react";
import { motion } from "framer-motion";

// Font Awesome Core aur Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid Icons Imports
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
  faCheckCircle 
} from "@fortawesome/free-solid-svg-icons";

export default function CareerLaunchpad() {
  // 1. Four Counter Blocks Data (Icons updated to Font Awesome)
  const stats = [
    { value: "1000+", label: "Active Internships", icon: faBriefcase },
    { value: "500+", label: "Partner Companies", icon: faBuilding },
    { value: "10,000+", label: "Success Stories", icon: faGraduationCap },
    { value: "50+", label: "Industry Sectors", icon: faChartLine }
  ];

  // 2. Three Central Matrix Cards Data (Icons updated to Font Awesome)
  const featureCards = [
    { 
      id: 1, 
      title: "Targeted Learning", 
      desc: "Industry-specific virtual internships designed to build practical skills and experience.", 
      icon: faBullseye, 
      features: ["Web Development", "Digital Marketing", "UI/UX Design"] 
    },
    { 
      id: 2, 
      title: "Mentorship Program", 
      desc: "Learn directly from industry experts with guided weekly sessions.", 
      icon: faUsers, 
      features: ["One-on-One Guidance", "Project Reviews", "Career Planning"] 
    },
    { 
      id: 3, 
      title: "Certification Track", 
      desc: "Earn recognized certifications and build a portfolio that employers trust.", 
      icon: faAward, 
      features: ["Skill Verification", "Performance Badges", "Digital Certificates"] 
    }
  ];

  // 3. Career Resources Grid Data (Icons updated to Font Awesome)
  const resources = [
    { icon: faFileAlt, label: "Resume Templates" },
    { icon: faCommentAlt, label: "Mock Interviews" },
    { icon: faBarChart, label: "Skill Analysis" },
    { icon: faBookOpen, label: "Learning Paths" },
    { icon: faCheckCircle, label: "Goal Tracking" },
    { icon: faUsers, label: "Peer Feedback" }
  ];

  // 4. Learning Journey Phases Data
  const phases = [
    { name: "Phase 1: Foundation", progress: 75 },
    { name: "Phase 2: Practical Skills", progress: 60 },
    { name: "Phase 3: Industry Projects", progress: 85 }
  ];

  // Framer Motion Master Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC]/60 py-20 lg:py-28 px-6 lg:px-12 font-sans antialiased max-w-7xl mx-auto">
      <div className="space-y-24">

        {/* ========================================================================= */}
        {/* 1. TOP HEADER SECTION                                                     */}
        {/* ========================================================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto space-y-5"
        >
          {/* Badge Pill */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#43A047]/20 rounded-full px-4 py-1.5 mx-auto select-none">
            <FontAwesomeIcon icon={faGraduationCap} className="text-xs text-[#43A047]" />
            <span className="font-bold tracking-wider uppercase text-[10px] sm:text-xs text-[#43A047]">
              Professional Development
            </span>
          </motion.div>
          
          {/* Title Heading */}
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            Launch Your Career with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              Internee.pk
            </span>
          </motion.h2>
          
          {/* Subtitle Description */}
          <motion.p variants={itemVariants} className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Pakistan's innovative platform for career growth and professional development. Join our virtual internships to gain practical experience and kickstart your professional journey.
          </motion.p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. STATS STATISTICS COUNTERS LAYER (4 COLUMNS)                           */}
        {/* ========================================================================= */}
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
                <div className="w-10 h-10 rounded-xl bg-gray-50 text-[#43A047] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E8F5E9] transition-colors">
                  <FontAwesomeIcon icon={stat.icon} className="text-sm" />
                </div>
                <span className="block text-2xl lg:text-3xl font-black text-gray-950 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-gray-400 mt-1 block uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. CENTRAL THREE MATRIX FEATURE CARDS LAYER                               */}
        {/* ========================================================================= */}
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
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 bg-[#E8F5E9] text-[#43A047] rounded-xl flex items-center justify-center border border-green-100/30 transition-transform group-hover:scale-105">
                    <FontAwesomeIcon icon={card.icon} className="text-base" />
                  </div>
                  
                  {/* Title and Desc */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-gray-900 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Sub Features Bullet List items */}
                <ul className="space-y-2.5 pt-4 border-t border-gray-50">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-600">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-[#43A047] text-xs shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ========================================================================= */}
        {/* 4. TWO-COLUMN SPLIT METRIC BLOCK                                        */}
        {/* ========================================================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {/* Left Block Side: Journey Progress bars lines */}
          <motion.div variants={itemVariants} className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between gap-6">
            <div>
              <h4 className="text-base font-black text-gray-900 tracking-tight mb-1">
                Your Learning Journey
              </h4>
              <p className="text-gray-400 text-xs font-medium">Real-time curriculum progression tracking</p>
            </div>
            
            <div className="space-y-5 flex-1 flex flex-col justify-center">
              {phases.map((phase, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gray-700">
                    <span>{phase.name}</span>
                    <span className="text-[#43A047]">{phase.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${phase.progress}%` }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className="bg-gradient-to-r from-[#43A047] to-[#66BB6A] h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Block Side: Grid Pill items anchors links */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <div>
              <h4 className="text-base font-black text-gray-900 tracking-tight mb-1">
                Career Resources
              </h4>
              <p className="text-gray-400 text-xs font-medium">Premium assets to enhance market readiness</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {resources.map((resource, index) => {
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="bg-[#F8FAFC]/80 border border-gray-100 p-3.5 rounded-xl flex items-center gap-3 hover:bg-[#E8F5E9]/50 hover:border-[#43A047]/20 transition-all cursor-pointer group"
                  >
                    <div className="w-9 h-9 bg-white border border-gray-100 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:text-[#43A047] transition-colors shadow-sm shrink-0">
                      <FontAwesomeIcon icon={resource.icon} className="text-xs text-[#43A047]" />
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