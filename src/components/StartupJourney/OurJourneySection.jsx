// import React from 'react';
// import { 
//   Compass, 
//   Users, 
//   Globe, 
//   TrendingUp, 
//   Award, 
//   CheckCircle2 
// } from 'lucide-react';

// export default function OurJourneySection() {
//   return (
//     <div className="w-full bg-white font-sans antialiased px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
//         {/* ==========================================
//             LEFT SIDE: CONTENT & SUMMARY STATS
//             ========================================== */}
//         <div className="space-y-8 max-w-xl">
          
//           {/* Main Heading */}
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-[1.15] tracking-tight">
//             Our Journey to <br />
//             <span className="text-[#43A047]">Impact & Excellence</span>
//           </h2>
          
//           {/* Main Paragraph Description */}
//           <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
//             From launch in 2023 to South Asia's leading virtual internship 
//             platform. We've transformed 20,000+ careers and 
//             partnered with 200+ companies in just 2 years. This is our 
//             story.
//           </p>
          
//           {/* Action Buttons */}
//           <div className="flex flex-wrap gap-4 items-center">
//             <button className="flex items-center gap-2 bg-[#43A047] hover:bg-[#388E3C] text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 transform active:scale-95 shadow-md shadow-green-600/10">
//               Explore Programs <Compass className="w-4 h-4" />
//             </button>
//             <button className="border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors bg-transparent">
//               Join Community
//             </button>
//           </div>

//           {/* Mini Badges / Checkmarks */}
//           <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-b border-gray-100 pb-6">
//             <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
//               <CheckCircle2 className="w-4 h-4 text-[#43A047]" />
//               20,000+ Students
//             </div>
//             <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
//               <CheckCircle2 className="w-4 h-4 text-[#43A047]" />
//               4 Major Awards
//             </div>
//           </div>

//           {/* Bottom Row Simple Counters */}
//           <div className="grid grid-cols-3 gap-4 pt-2">
//             <div>
//               <span className="block text-2xl md:text-3xl font-black text-[#43A047]">2</span>
//               <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Years Active</span>
//             </div>
//             <div>
//               <span className="block text-2xl md:text-3xl font-black text-gray-950">200+</span>
//               <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Companies</span>
//             </div>
//             <div>
//               <span className="block text-2xl md:text-3xl font-black text-[#43A047]">98%</span>
//               <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Success Rate</span>
//             </div>
//           </div>

//         </div>

//         {/* ==========================================
//             RIGHT SIDE: 4 HIGH-IMPACT CARDS GRID
//             ========================================== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
//           {/* Card 1: Students Transformed (Green Theme) */}
//           <div className="bg-[#43A047] text-white rounded-3xl p-6 min-h-[190px] flex flex-col justify-between relative overflow-hidden shadow-lg shadow-green-700/5 group">
//             {/* Top Icon */}
//             <div className="z-10">
//               <Users className="w-6 h-6 stroke-[2]" />
//             </div>
//             {/* Bottom Content */}
//             <div className="space-y-1 z-10 mt-auto">
//               <h3 className="text-3xl font-black tracking-tight">20K+</h3>
//               <p className="text-sm font-bold opacity-90">Students Transformed</p>
//               <p className="text-[11px] opacity-75 font-medium">Real careers launched</p>
//             </div>
//             {/* Abstract Background Curve Circle */}
//             <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-sm pointer-events-none group-hover:scale-110 transition-transform" />
//           </div>

//           {/* Card 2: Industry Partners (Blue Theme) */}
//           <div className="bg-[#1D61E7] text-white rounded-3xl p-6 min-h-[190px] flex flex-col justify-between relative overflow-hidden shadow-lg shadow-blue-700/5 group">
//             <div className="z-10">
//               <Globe className="w-6 h-6 stroke-[2]" />
//             </div>
//             <div className="space-y-1 z-10 mt-auto">
//               <h3 className="text-3xl font-black tracking-tight">200+</h3>
//               <p className="text-sm font-bold opacity-90">Industry Partners</p>
//               <p className="text-[11px] opacity-75 font-medium">Leading companies</p>
//             </div>
//             <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-sm pointer-events-none group-hover:scale-110 transition-transform" />
//           </div>

//           {/* Card 3: Success Rate (Purple Theme) */}
//           <div className="bg-[#8B22E2] text-white rounded-3xl p-6 min-h-[190px] flex flex-col justify-between relative overflow-hidden shadow-lg shadow-purple-700/5 group">
//             <div className="z-10">
//               <TrendingUp className="w-6 h-6 stroke-[2]" />
//             </div>
//             <div className="space-y-1 z-10 mt-auto">
//               <h3 className="text-3xl font-black tracking-tight">98%</h3>
//               <p className="text-sm font-bold opacity-90">Success Rate</p>
//               <p className="text-[11px] opacity-75 font-medium">Jobs or internships</p>
//             </div>
//             <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-sm pointer-events-none group-hover:scale-110 transition-transform" />
//           </div>

//           {/* Card 4: Major Awards (Orange-Red Theme) */}
//           <div className="bg-[#D34A08] text-white rounded-3xl p-6 min-h-[190px] flex flex-col justify-between relative overflow-hidden shadow-lg shadow-orange-700/5 group">
//             <div className="z-10">
//               <Award className="w-6 h-6 stroke-[2]" />
//             </div>
//             <div className="space-y-1 z-10 mt-auto">
//               <h3 className="text-3xl font-black tracking-tight">4+</h3>
//               <p className="text-sm font-bold opacity-90">Major Awards</p>
//               <p className="text-[11px] opacity-75 font-medium">National Recognition</p>
//             </div>
//             <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-sm pointer-events-none group-hover:scale-110 transition-transform" />
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import { 
  Compass, 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Target,
  Medal,
  Trophy
} from "lucide-react";

export default function OurJourneySection() {
  // Journey cards data with icons
  const journeyCards = [
    {
      id: 1,
      value: "20K+",
      label: "Students Transformed",
      subLabel: "Real careers launched",
      icon: Users,
      color: "from-[#43A047] to-[#388E3C]"
    },
    {
      id: 2,
      value: "200+",
      label: "Industry Partners",
      subLabel: "Leading companies",
      icon: Building2,
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 3,
      value: "98%",
      label: "Success Rate",
      subLabel: "Jobs or internships",
      icon: Trophy,
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 4,
      value: "4+",
      label: "Major Awards",
      subLabel: "National Recognition",
      icon: Medal,
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Stats data
  const stats = [
    { value: "2", label: "Years Active" },
    { value: "200+", label: "Companies" },
    { value: "98%", label: "Success Rate" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* ==========================================
            LEFT SIDE: CONTENT & SUMMARY STATS
            ========================================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
            Our Journey to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              Impact & Excellence
            </span>
          </motion.h2>
          
          {/* Main Paragraph Description */}
          <motion.p variants={itemVariants} className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium max-w-lg">
            From launch in 2023 to South Asia's leading virtual internship 
            platform. We've transformed 20,000+ careers and 
            partnered with 200+ companies in just 2 years. This is our 
            story.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 group"
            >
              <Compass className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border border-gray-200 hover:border-gray-300 text-gray-700 font-bold text-sm px-7 py-3.5 rounded-full transition-colors bg-transparent"
            >
              Join Community
            </motion.button>
          </motion.div>

          {/* Mini Badges / Checkmarks */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-[#43A047]" />
              20,000+ Students
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-[#43A047]" />
              4 Major Awards
            </div>
          </motion.div>

          {/* Bottom Row Simple Counters */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-2">
            {stats.map((stat, index) => (
              <div key={index}>
                <span className={`block text-3xl lg:text-4xl font-black ${index === 0 || index === 2 ? 'text-[#43A047]' : 'text-gray-900'}`}>
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* ==========================================
            RIGHT SIDE: 4 HIGH-IMPACT CARDS GRID
            ========================================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {journeyCards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`bg-gradient-to-br ${card.color} text-white rounded-3xl p-6 min-h-[190px] flex flex-col justify-between relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
            >
              {/* Decorative background */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-lg pointer-events-none" />
              
              {/* Top Icon */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="z-10"
              >
                <card.icon className="w-7 h-7 stroke-[2]" />
              </motion.div>
              
              {/* Bottom Content */}
              <div className="space-y-1 z-10 mt-auto">
                <h3 className="text-4xl font-black tracking-tight">{card.value}</h3>
                <p className="text-sm font-bold opacity-90">{card.label}</p>
                <p className="text-xs opacity-75 font-medium">{card.subLabel}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}