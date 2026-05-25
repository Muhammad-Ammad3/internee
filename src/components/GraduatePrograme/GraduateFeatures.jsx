// import React from 'react';

// const GraduateFeatures = () => {
//   // 6 Core Features Dataset Array from image_56120e.png
//   const features = [
//     {
//       id: 1,
//       title: "Career-Focused Curriculum",
//       desc: "Programs aligned with current industry demands and hiring requirements.",
//       icon: "🎯",
//       iconBg: "bg-green-50 text-green-600"
//     },
//     {
//       id: 2,
//       title: "Expert Mentorship",
//       desc: "Learn from professionals working at top tech companies worldwide.",
//       icon: "👥",
//       iconBg: "bg-green-50 text-green-600 border border-green-100" // matching active highlight block
//     },
//     {
//       id: 3,
//       title: "Job Placement Support",
//       desc: "Direct connections with hiring partners and job interview prep.",
//       icon: "📈",
//       iconBg: "bg-green-50 text-green-600"
//     },
//     {
//       id: 4,
//       title: "Verified Certificates",
//       desc: "Industry-recognized credentials that boost your resume.",
//       icon: "🏅",
//       iconBg: "bg-green-50 text-green-600"
//     },
//     {
//       id: 5,
//       title: "Flexible Scheduling",
//       desc: "Learn at your own pace with live and recorded sessions.",
//       icon: "🕒",
//       iconBg: "bg-green-50 text-green-600"
//     },
//     {
//       id: 6,
//       title: "Real Projects",
//       desc: "Work on actual client projects and build portfolio pieces.",
//       icon: "⚡",
//       iconBg: "bg-green-50 text-green-600"
//     }
//   ];

//   // Bottom 4 Metrics/Stats Counters Array from image_56120e.png
//   const stats = [
//     { value: "500+", label: "Graduates", subtext: "Successfully Placed" },
//     { value: "95%", label: "Job Rate", subtext: "Within 3 Months" },
//     { value: "2.5x", label: "Avg Salary", subtext: "Growth Rate" },
//     { value: "4.9/5", label: "Student", subtext: "Satisfaction" }
//   ];

//   return (
//     <section className="w-full bg-[#fcfcfc] py-20 px-6 lg:px-16 font-sans select-none">
//       <div className="max-w-screen-2xl mx-auto space-y-16">
        
//         {/* ================= HEADER SEGMENT ================= */}
//         <div className="text-center space-y-3 max-w-2xl mx-auto">
//           <h2 className="text-3xl sm:text-[38px] font-black text-gray-950 tracking-tight">
//             Why Choose Our Graduate Programs?
//           </h2>
//           <p className="text-gray-400 text-xs sm:text-[14px] font-semibold leading-relaxed">
//             Designed by industry experts for modern graduates seeking accelerated career growth.
//           </p>
//         </div>

//         {/* ================= 6 FEATURES GRID ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((item) => (
//             <div 
//               key={item.id}
//               className={`bg-white border rounded-[22px] p-6 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.015)] transition-all duration-300 ${
//                 item.id === 2 ? 'border-green-200 shadow-[0_10px_30px_rgba(63,182,40,0.03)]' : 'border-gray-100/90'
//               }`}
//             >
//               {/* Circular Icon Wrapper */}
//               <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center text-base`}>
//                 {item.icon}
//               </div>

//               {/* Text Layout */}
//               <div className="space-y-1.5">
//                 <h3 className="text-base font-black text-gray-950 tracking-tight">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-400 text-xs font-semibold leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ================= BOTTOM 4 STATS COUNTERS ================= */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
//           {stats.map((stat, i) => (
//             <div 
//               key={i}
//               className="bg-gradient-to-b from-white to-[#f9fbf9] border border-gray-100/80 rounded-[20px] p-6 text-center space-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.005)]"
//             >
//               <div className="text-2xl sm:text-3xl font-black text-[#3FB628] tracking-tight">
//                 {stat.value}
//               </div>
//               <div className="text-xs font-black text-gray-950 tracking-tight">
//                 {stat.label}
//               </div>
//               <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
//                 {stat.subtext}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default GraduateFeatures;



import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  Zap,
  ArrowRight,
  CheckCircle2,
  BadgeCheck,
  GraduationCap
} from "lucide-react";

const GraduateFeatures = () => {
  // 6 Core Features Dataset
  const features = [
    {
      id: 1,
      title: "Career-Focused Curriculum",
      desc: "Programs aligned with current industry demands and hiring requirements.",
      icon: Target,
      iconBg: "bg-green-500/10 text-[#43A047]"
    },
    {
      id: 2,
      title: "Expert Mentorship",
      desc: "Learn from professionals working at top tech companies worldwide.",
      icon: Users,
      iconBg: "bg-green-500/10 text-[#43A047]"
    },
    {
      id: 3,
      title: "Job Placement Support",
      desc: "Direct connections with hiring partners and job interview prep.",
      icon: TrendingUp,
      iconBg: "bg-green-500/10 text-[#43A047]"
    },
    {
      id: 4,
      title: "Verified Certificates",
      desc: "Industry-recognized credentials that boost your resume.",
      icon: Award,
      iconBg: "bg-green-500/10 text-[#43A047]"
    },
    {
      id: 5,
      title: "Flexible Scheduling",
      desc: "Learn at your own pace with live and recorded sessions.",
      icon: Clock,
      iconBg: "bg-green-500/10 text-[#43A047]"
    },
    {
      id: 6,
      title: "Real Projects",
      desc: "Work on actual client projects and build portfolio pieces.",
      icon: Zap,
      iconBg: "bg-green-500/10 text-[#43A047]"
    }
  ];

  // 4 Metrics/Stats Counters
  const stats = [
    { value: "500+", label: "Graduates", subtext: "Successfully Placed", icon: GraduationCap },
    { value: "95%", label: "Job Rate", subtext: "Within 3 Months", icon: TrendingUp },
    { value: "2.5x", label: "Avg Salary", subtext: "Growth Rate", icon: Zap },
    { value: "4.9/5", label: "Student", subtext: "Satisfaction", icon: BadgeCheck }
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-gray-50/50 py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ================= HEADER SEGMENT ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Why Choose Our 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]"> Graduate Programs</span>?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-500 text-sm font-medium leading-relaxed max-w-lg mx-auto">
            Designed by industry experts for modern graduates seeking accelerated career growth and professional development.
          </motion.p>
        </motion.div>

        {/* ================= 6 FEATURES GRID ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {features.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`bg-white border rounded-2xl p-6 lg:p-7 space-y-4 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/80 group ${
                item.id === 2 
                  ? 'border-[#43A047]/30 shadow-lg shadow-green-500/10' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {/* Circular Icon Wrapper */}
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>

              {/* Text Layout */}
              <div className="space-y-2">
                <h3 className="text-base lg:text-lg font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="flex items-center gap-1 text-[#43A047] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-bold">Learn more</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM 4 STATS COUNTERS ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 pt-6"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={statVariants}
              whileHover={{ scale: 1.03, y: -3 }}
              className="bg-gradient-to-b from-white to-green-50/30 border border-gray-100 rounded-2xl p-6 lg:p-8 text-center space-y-3 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
            >
              <div className="w-10 h-10 mx-auto bg-green-500/10 rounded-xl flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[#43A047]" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-[#43A047] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-900 tracking-tight">
                {stat.label}
              </div>
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default GraduateFeatures;