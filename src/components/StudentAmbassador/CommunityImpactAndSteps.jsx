// import React from 'react';

// export default function CommunityImpactAndSteps() {
//   const stats = [
//     { value: "300+", label: "Active Ambassadors", sub: "Across Pakistan" },
//     { value: "50+", label: "Campuses", sub: "Represented" },
//     { value: "1000+", label: "Events", sub: "Organized" },
//     { value: "15K+", label: "Students", sub: "Reached" }
//   ];

//   const steps = [
//     {
//       number: "1",
//       title: "Apply Online",
//       description: "Fill out the application form and tell us about yourself"
//     },
//     {
//       number: "2",
//       title: "Get Verified",
//       description: "Undergo quick eligibility check and assessment"
//     },
//     {
//       number: "3",
//       title: "Training",
//       description: "Attend onboarding and receive ambassador tools & resources"
//     },
//     {
//       number: "4",
//       title: "Start Representing",
//       description: "Organize events and grow Internee.pk on your campus"
//     }
//   ];

//   return (
//     <div className="w-full bg-white font-sans antialiased space-y-32 px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto">
      
//       {/* ==========================================
//           1. AMBASSADOR COMMUNITY IMPACT SECTION
//           ========================================== */}
//       <div className="space-y-12">
//         {/* Section Header */}
//         <div className="text-center space-y-3">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
//             Ambassador Community Impact
//           </h2>
//           <p className="text-gray-500 text-sm md:text-base">
//             Join a thriving community making real impact
//           </p>
//         </div>

//         {/* Stats Grid Layout (4 Columns) */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <div 
//               key={index} 
//               className="bg-[#F4F6F5]/60 border border-gray-100 rounded-2xl p-8 text-center flex flex-col justify-center items-center min-h-[160px] shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:scale-[1.02] transition-transform duration-200"
//             >
//               <span className="text-3xl md:text-4xl font-black text-[#43A047] tracking-tight">
//                 {stat.value}
//               </span>
//               <h4 className="font-bold text-gray-900 text-sm md:text-base mt-2 tracking-tight">
//                 {stat.label}
//               </h4>
//               <p className="text-gray-400 text-[11px] md:text-xs mt-1 font-medium">
//                 {stat.sub}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ==========================================
//           2. HOW TO BECOME AN AMBASSADOR SECTION
//           ========================================== */}
//       <div className="space-y-16">
//         {/* Section Header */}
//         <div className="text-center space-y-3">
//           <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
//             How to Become an Ambassador
//           </h2>
//           <p className="text-gray-500 text-sm md:text-base">
//             Simple steps to join our growing community
//           </p>
//         </div>

//         {/* Steps Horizontal/Vertical Responsive Layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//           {steps.map((step, index) => (
//             <div key={index} className="relative group">
              
//               {/* Main Step Card */}
//               <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-start min-h-[200px] shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all z-10 relative">
                
//                 {/* Step Circle Number */}
//                 <div className="w-8 h-8 rounded-full bg-[#43A047] text-white flex items-center justify-center text-xs font-bold mb-6 shadow-sm shadow-green-600/20">
//                   {step.number}
//                 </div>

//                 {/* Step Text Content */}
//                 <div className="space-y-2 mt-auto">
//                   <h3 className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               </div>

//               {/* Connecting Line Indicator (Only visible on Large Screens desktop and avoids last card) */}
//               {index < steps.length - 1 && (
//                 <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-[#43A047] to-transparent z-0 transform -translate-y-1/2" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }



"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Building2, Calendar, UserCheck, Sparkles, 
  Star, CheckCircle2, Globe, Video, Play 
} from "lucide-react";

export default function CommunityImpactAndSteps() {
  // 1. Metrics Statistics Dataset
  const stats = [
    { value: "300+", label: "Active Ambassadors", sub: "Across Pakistan", icon: Users },
    { value: "50+", label: "Campuses", sub: "Represented", icon: Building2 },
    { value: "1,000+", label: "Events", sub: "Organized", icon: Calendar },
    { value: "15K+", label: "Students", sub: "Reached", icon: UserCheck }
  ];

  // 2. Step-by-Step Roadmap Dataset
  const steps = [
    { number: "1", title: "Apply Online", description: "Fill out the application form and tell us about yourself", icon: Play },
    { number: "2", title: "Get Verified", description: "Undergo quick eligibility check and assessment", icon: CheckCircle2 },
    { number: "3", title: "Training", description: "Attend onboarding and receive ambassador tools & resources", icon: Video },
    { number: "4", title: "Start Representing", description: "Organize events and grow Internee.pk on your campus", icon: Star }
  ];

  // Master Framer Motion Stagger Animation Schemas
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

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className="w-full bg-white font-sans antialiased space-y-32 px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto">
      
      {/* ========================================================================= */}
      {/* 1. AMBASSADOR COMMUNITY IMPACT STATISTICS GRID LAYER                      */}
      {/* ========================================================================= */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-14"
      >
        {/* Section Headings Banner */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#43A047]/10 rounded-full px-4 py-1.5 select-none">
            <Globe className="w-3.5 h-3.5 text-[#43A047]" />
            <span className="text-[10px] sm:text-xs font-black text-[#388E3C] uppercase tracking-wider">
              Our Community
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            Ambassador{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              Community Impact
            </span>
          </h2>
          
          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            Join a thriving community making real impact across premium institutes.
          </p>
        </motion.div>

        {/* Dynamic 4-Column Metrics Info Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={statCardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-[#F8FAFC] border border-gray-100 rounded-3xl p-6 text-center flex flex-col justify-center items-center min-h-[180px] hover:shadow-xl hover:shadow-gray-200/40 hover:border-green-200 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-11 h-11 mb-3.5 bg-white border border-gray-100/50 text-[#43A047] rounded-xl flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <StatIcon className="w-4 h-4 stroke-[2]" />
                </div>
                <span className="text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
                  {stat.value}
                </span>
                <h4 className="font-black text-gray-800 text-sm mt-2.5 tracking-tight">
                  {stat.label}
                </h4>
                <p className="text-gray-400 text-[11px] mt-0.5 font-semibold">
                  {stat.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* ========================================================================= */}
      {/* 2. ONBOARDING ROADMAP: HOW TO BECOME AN AMBASSADOR SEGMENT               */}
      {/* ========================================================================= */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Section Headings Banner */}
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#43A047]/10 rounded-full px-4 py-1.5 select-none">
            <Sparkles className="w-3.5 h-3.5 text-[#43A047]" />
            <span className="text-[10px] sm:text-xs font-black text-[#388E3C] uppercase tracking-wider">
              Join Us
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
            How to Become{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              an Ambassador
            </span>
          </h2>
          
          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            Simple steps to launch and manage the platform community inside your campus.
          </p>
        </motion.div>

        {/* Steps Cards Layout Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={index} className="relative group">
                {/* Main Interactive Step Container Card */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-start min-h-[220px] shadow-xs hover:shadow-xl hover:shadow-gray-200/30 hover:border-green-200 transition-all duration-300 z-10 relative cursor-pointer"
                >
                  {/* Icon Metric Badge */}
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white flex items-center justify-center mb-5 shadow-md shadow-green-900/10">
                    <StepIcon className="w-4 h-4" />
                  </div>
                  
                  {/* Step Descriptive Contents */}
                  <div className="space-y-2 mt-auto text-left">
                    <h3 className="text-base font-black text-gray-950 tracking-tight group-hover:text-[#43A047] transition-colors">
                      {step.number}. {step.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Micro Horizontal Visual Link Connectors (Visible on Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1.5px] bg-gradient-to-r from-gray-200 to-transparent z-0 transform -translate-y-1/2 pointer-events-none" />
                )}
              </div>
            );
          })}
        </motion.div>
      </motion.div>

    </div>
  );
}