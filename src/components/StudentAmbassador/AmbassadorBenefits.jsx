// import React from 'react';
// import {
//   Gift,
//   Star,
//   BookOpen,
//   Rocket,
//   Globe,
//   Award
// } from 'lucide-react';

// export default function AmbassadorBenefits() {
//   const perks = [
//     {
//       icon: <Gift className="w-5 h-5" />,
//       title: "Exclusive Stipend",
//       description: "Earn competitive stipend based on performance and events organized"
//     },
//     {
//       icon: <Star className="w-5 h-5" />,
//       title: "Priority Recognition",
//       description: "Get featured on Internee.pk social media and internal platforms"
//     },
//     {
//       icon: <BookOpen className="w-5 h-5" />,
//       title: "Free Learning Resources",
//       description: "Access premium courses and certifications at no cost"
//     },
//     {
//       icon: <Rocket className="w-5 h-5" />,
//       title: "Startup Support",
//       description: "Launch your own startup with mentorship and resources"
//     },
//     {
//       icon: <Globe className="w-5 h-5" />,
//       title: "Global Networking",
//       description: "Connect with 300+ ambassadors and industry professionals"
//     },
//     {
//       icon: <Award className="w-5 h-5" />,
//       title: "Career Opportunities",
//       description: "Direct pathway to internships and full-time positions"
//     }
//   ];

//   return (
//     <div className="w-full bg-white font-sans antialiased px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto">

//       {/* Section Header */}
//       <div className="text-center space-y-3 mb-16">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
//           Ambassador Benefits & Perks
//         </h2>
//         <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
//           Get exclusive rewards, recognition, and opportunities as a Student Ambassador
//         </p>
//       </div>

//       {/* Perks Grid Layout (3 Columns on Desktop, 1 on Mobile) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {perks.map((perk, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-start justify-between min-h-[220px] shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all group"
//           >
//             {/* Icon Container with Light Green Background */}
//             <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl mb-6 transition-transform group-hover:scale-105">
//               {perk.icon}
//             </div>

//             {/* Content Area */}
//             <div className="space-y-2 mt-auto w-full">
//               <h3 className="text-lg font-bold text-gray-900 tracking-tight">
//                 {perk.title}
//               </h3>
//               <p className="text-gray-500 text-sm leading-relaxed font-normal">
//                 {perk.description}
//               </p>
//             </div>
//           </div>
//         ))}
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
  faGift,
  faStar,
  faBookOpen,
  faRocket,
  faGlobe,
  faAward,
  faArrowRight,
  faWandMagicSparkles,
  faUsers,
  faBriefcase,
  faGraduationCap,
  faChartLine,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function AmbassadorBenefits() {
  const perks = [
    {
      icon: faGift,
      title: "Exclusive Stipend",
      description:
        "Earn competitive stipend based on performance and events organized",
      color: "from-green-500 to-green-600",
    },
    {
      icon: faStar,
      title: "Priority Recognition",
      description:
        "Get featured on Internee.pk social media and internal platforms",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: faBookOpen,
      title: "Free Learning Resources",
      description: "Access premium courses and certifications at no cost",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: faRocket,
      title: "Startup Support",
      description: "Launch your own startup with mentorship and resources",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: faGlobe,
      title: "Global Networking",
      description: "Connect with 300+ ambassadors and industry professionals",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: faAward,
      title: "Career Opportunities",
      description: "Direct pathway to internships and full-time positions",
      color: "from-rose-500 to-rose-600",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
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
          <FontAwesomeIcon
            icon={faWandMagicSparkles}
            className="text-xs text-[#43A047]"
          />
          <span className="text-xs font-bold text-[#43A047] uppercase tracking-wider">
            Rewards & Benefits
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight"
        >
          Ambassador{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
            Benefits & Perks
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-sm lg:text-base max-w-2xl mx-auto font-medium"
        >
          Get exclusive rewards, recognition, and opportunities as a Student
          Ambassador
        </motion.p>
      </motion.div>

      {/* Perks Grid Layout (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {perks.map((perk, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-start justify-between min-h-[230px] shadow-lg hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-500 group cursor-pointer"
          >
            {/* Icon Container with Gradient Background */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`p-4 bg-gradient-to-br ${perk.color} rounded-2xl shadow-lg`}
            >
              <FontAwesomeIcon
                icon={perk.icon}
                className="text-lg text-white w-5 h-5 flex items-center justify-center"
              />
            </motion.div>

            {/* Content Area */}
            <div className="space-y-3 mt-auto w-full">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#43A047] transition-colors">
                {perk.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {perk.description}
              </p>
            </div>

            {/* Arrow indicator */}
            <div className="flex items-center gap-2 pt-4 text-[#43A047] opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-sm font-bold">Learn more</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xs group-hover:translate-x-1 transition-transform"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
