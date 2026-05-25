// import React from 'react';
// import { Rocket, Heart, Lightbulb, TrendingUp, Compass } from 'lucide-react';

// export default function OurCoreValues() {
//   const values = [
//     {
//       icon: <Rocket className="w-6 h-6" />,
//       title: "Mission-Driven",
//       description: "Every decision is guided by our commitment to empower youth through real-world experience and skill development.",
//       badge: "Impact First"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: "Community First",
//       description: "We believe in building strong networks of mentors, partners, and students who support each other's success.",
//       badge: "Collaboration"
//     },
//     {
//       icon: <Lightbulb className="w-6 h-6" />,
//       title: "Innovation",
//       description: "We continuously push boundaries, adopting new technologies and methodologies to stay ahead in tech education.",
//       badge: "Forward-Thinking",
//       isFeatured: true // Highlights the card with green border just like the image
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Growth Focused",
//       description: "Measurable impact is our commitment. We track outcomes, improve continuously, and showcase real results.",
//       badge: "Excellence"
//     }
//   ];

//   return (
//     <div className="w-full bg-[#F8FAFC]/50 font-sans antialiased px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto">
      
//       {/* --- TOP HEADER TAG & TITLE --- */}
//       <div className="text-center space-y-4 mb-16">
//         <div className="inline-flex items-center gap-1.5 bg-[#E8F5E9] border border-[#43A047]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#43A047] mx-auto select-none">
//           <Compass className="w-3.5 h-3.5" /> What Drives Us
//         </div>
        
//         <h2 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight">
//           Our Core Values
//         </h2>
        
//         <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-medium">
//           Principles that guide every decision and action we take
//         </p>
//       </div>

//       {/* --- CORE VALUES CARDS GRID (4 COLUMNS) --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
//         {values.map((item, index) => (
//           <div 
//             key={index}
//             className={`bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] group ${
//               item.isFeatured 
//                 ? 'border-2 border-[#43A047] shadow-[0_10px_30px_rgba(67,160,71,0.08)]' 
//                 : 'border border-gray-100'
//             }`}
//           >
//             {/* Smooth Rounded Icon Container */}
//             <div className="w-14 h-14 bg-[#E8F5E9] text-[#43A047] rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
//               {item.icon}
//             </div>

//             {/* Content Body */}
//             <div className="flex-1 flex flex-col items-center justify-between space-y-4 w-full">
//               <div className="space-y-3">
//                 <h3 className="text-lg md:text-xl font-extrabold text-gray-900 tracking-tight">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-normal">
//                   {item.description}
//                 </p>
//               </div>

//               {/* Bottom Mini Badge */}
//               <div className="pt-2">
//                 <span className="inline-block bg-[#E8F5E9]/60 text-[#43A047] font-bold text-[10px] md:text-xs px-3 py-1 rounded-full border border-green-100/50">
//                   {item.badge}
//                 </span>
//               </div>
//             </div>

//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  Compass, 
  Sparkles,
  ArrowRight,
  Users,
  Zap
} from "lucide-react";

export default function OurCoreValues() {
  const values = [
    {
      icon: Rocket,
      title: "Mission-Driven",
      description: "Every decision is guided by our commitment to empower youth through real-world experience and skill development.",
      badge: "Impact First"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in building strong networks of mentors, partners, and students who support each other's success.",
      badge: "Collaboration"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push boundaries, adopting new technologies and methodologies to stay ahead in tech education.",
      badge: "Forward-Thinking",
      isFeatured: true
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Measurable impact is our commitment. We track outcomes, improve continuously, and showcase real results.",
      badge: "Excellence"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-gray-50/50 font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto">
      
      {/* --- TOP HEADER TAG & TITLE --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center space-y-5 mb-20"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5">
          <Compass className="w-4 h-4 text-[#43A047]" />
          <span className="text-xs font-bold text-[#43A047] uppercase tracking-wider">What Drives Us</span>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
          Our Core{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
            Values
          </span>
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-gray-500 text-sm lg:text-base max-w-xl mx-auto font-medium">
          Principles that guide every decision and action we take
        </motion.p>
      </motion.div>

      {/* --- CORE VALUES CARDS GRID (4 COLUMNS) --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {values.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className={`bg-white rounded-3xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 group cursor-pointer ${
              item.isFeatured 
                ? 'border-2 border-[#43A047]/30 shadow-xl shadow-green-500/10' 
                : 'border border-gray-100 shadow-lg'
            }`}
          >
            {/* Smooth Rounded Icon Container */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                item.isFeatured 
                  ? 'bg-gradient-to-br from-[#43A047] to-[#388E3C] text-white shadow-lg shadow-green-500/25' 
                  : 'bg-green-50 text-[#43A047]'
              }`}
            >
              <item.icon className="w-6 h-6" />
            </motion.div>

            {/* Content Body */}
            <div className="flex-1 flex flex-col items-center justify-between space-y-5 w-full">
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#43A047] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Mini Badge */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="pt-2"
              >
                <span className={`inline-block font-bold text-xs px-4 py-1.5 rounded-full border transition-colors ${
                  item.isFeatured 
                    ? 'bg-[#43A047] text-white border-[#43A047]' 
                    : 'bg-green-50 text-[#43A047] border-green-100'
                }`}
                >
                  {item.badge}
                </span>
              </motion.div>
            </div>

          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}