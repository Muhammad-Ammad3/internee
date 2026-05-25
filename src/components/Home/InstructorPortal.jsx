// import React from "react";

// const InstructorPortal = () => {
//   // Bottom ke 4 main feature cards ka data
//   const featureCards = [
//     {
//       id: 1,
//       icon: (
//         <svg
//           className="w-6 h-6 text-[#3FB628]"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
//           />
//         </svg>
//       ),
//       title: "Upload Tutorials & Exercises",
//       desc: "Use internee.pk to share tutorials, exercises, and projects. Help others learn while you grow with virtual internships that reward your skills.",
//     },
//     {
//       id: 2,
//       icon: (
//         <svg
//           className="w-6 h-6 text-[#3FB628]"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//       ),
//       title: "Earn from Your Expertise",
//       desc: "Internee.pk offers virtual internships in Pakistan where tech creators and instructors can earn passive income by sharing their knowledge.",
//     },
//     {
//       id: 3,
//       icon: (
//         <svg
//           className="w-6 h-6 text-[#3FB628]"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//           />
//         </svg>
//       ),
//       title: "Build Your Instructor Profile",
//       desc: "Become a trusted voice on internee.pk. Our virtual internship ecosystem helps you build your personal brand in the online learning space.",
//     },
//     {
//       id: 4,
//       icon: (
//         <svg
//           className="w-6 h-6 text-[#3FB628]"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//           />
//         </svg>
//       ),
//       title: "Fair Revenue Sharing",
//       desc: "We keep it transparent. Join internee.pk and benefit from a fair model that pays you well — all while gaining experience in virtual internships.",
//     },
//   ];

//   return (
//     <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans">
//       <div className="max-w-screen-2xl mx-auto space-y-20">
//         {/* ================= TOP GRID SPLIT BLOCK ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
//           {/* Left Column: Main Headline */}
//           <div className="lg:col-span-5 space-y-5">
//             <span className="inline-block bg-gray-100 text-gray-500 font-bold px-3 py-1 rounded-full text-[11px] tracking-wide uppercase">
//               Instructor Portal
//             </span>
//             <h2 className="text-3xl sm:text-[42px] font-bold text-gray-950 leading-[1.15] tracking-tight">
//               Tech Instructor or <br /> Content Creator?
//             </h2>
//             <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md font-medium">
//               Create in your native language, reach more learners, and earn from
//               your expertise with internee.pk.
//             </p>
//             <div className="pt-2">
//               <button className="bg-[#3FB628] text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#349e1e] transition-all duration-300 shadow-sm shadow-green-100">
//                 Start Teaching Today
//               </button>
//             </div>
//           </div>

//           {/* Right Column: 4 Stat Boxes Card Platform */}
//           <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] space-y-6">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {/* Stat 1 */}
//               <div className="bg-gray-50/60 border border-gray-100 p-5 rounded-2xl">
//                 <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-1">
//                   Upload Content
//                 </span>
//                 <span className="text-base font-bold text-gray-800">
//                   Tutorials & Projects
//                 </span>
//               </div>

//               {/* Stat 2 */}
//               <div className="bg-gray-50/60 border border-gray-100 p-5 rounded-2xl">
//                 <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-1">
//                   Earn Income
//                 </span>
//                 <span className="text-base font-bold text-gray-800">
//                   Transparent Payouts
//                 </span>
//               </div>

//               {/* Stat 3 */}
//               <div className="bg-gray-50/60 border border-gray-100 p-5 rounded-2xl">
//                 <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-1">
//                   Grow Profile
//                 </span>
//                 <span className="text-base font-bold text-gray-800">
//                   Verified Reviews
//                 </span>
//               </div>

//               {/* Stat 4 */}
//               <div className="bg-gray-50/60 border border-gray-100 p-5 rounded-2xl">
//                 <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-1">
//                   Reach Learners
//                 </span>
//                 <span className="text-base font-bold text-gray-800">
//                   Global Community
//                 </span>
//               </div>
//             </div>

//             <p className="text-center text-xs text-gray-400 font-semibold tracking-wide">
//               Join a growing community of instructors sharing practical,
//               industry-ready content.
//             </p>
//           </div>
//         </div>

//         {/* ================= BOTTOM GRID: 4 MAIN FEATURE CARDS ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
//           {featureCards.map((card) => (
//             <div
//               key={card.id}
//               className="bg-white border border-gray-100 p-8 rounded-3xl space-y-4 shadow-[0_4px_25px_rgba(0,0,0,0.015)] group hover:shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:border-gray-200/80 transition-all duration-300 flex flex-col justify-between"
//             >
//               <div className="space-y-4">
//                 {/* Icon Wrapper with explicit border radii template */}
//                 <div className="w-12 h-12 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-center group-hover:scale-105 transition-transform">
//                   {card.icon}
//                 </div>

//                 <div className="space-y-2">
//                   <h3 className="text-[17px] font-bold text-gray-900 group-hover:text-[#3FB628] transition-colors">
//                     {card.title}
//                   </h3>
//                   <p className="text-gray-400 text-[13.5px] sm:text-sm leading-relaxed font-medium">
//                     {card.desc}
//                   </p>
//                 </div>
//               </div>

//               {/* Learn More Active Link Arrow trigger */}
//               <div className="pt-4 flex items-center gap-1 text-[#3FB628] text-xs font-bold cursor-pointer group-hover:gap-2 transition-all">
//                 <span>Learn more</span>
//                 <svg
//                   className="w-3 h-3 stroke-[3]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InstructorPortal;



import React from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  Wallet, 
  UserCheck, 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  BookOpen,
  DollarSign,
  Star,
  Users,
  ChevronRight
} from "lucide-react";

const InstructorPortal = () => {
  // Bottom ke 4 main feature cards ka data
  const featureCards = [
    {
      id: 1,
      icon: Upload,
      title: "Upload Tutorials & Exercises",
      desc: "Use internee.pk to share tutorials, exercises, and projects. Help others learn while you grow with virtual internships that reward your skills.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: DollarSign,
      title: "Earn from Your Expertise",
      desc: "Internee.pk offers virtual internships in Pakistan where tech creators and instructors can earn passive income by sharing their knowledge.",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      icon: UserCheck,
      title: "Build Your Instructor Profile",
      desc: "Become a trusted voice on internee.pk. Our virtual internship ecosystem helps you build your personal brand in the online learning space.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: "Fair Revenue Sharing",
      desc: "We keep it transparent. Join internee.pk and benefit from a fair model that pays you well — all while gaining experience in virtual internships.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Stats data
  const stats = [
    { label: "Upload Content", value: "Tutorials & Projects" },
    { label: "Earn Income", value: "Transparent Payouts" },
    { label: "Grow Profile", value: "Verified Reviews" },
    { label: "Reach Learners", value: "Global Community" }
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
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= TOP GRID SPLIT BLOCK ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Main Headline */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
            >
              <BookOpen className="w-4 h-4 text-[#43A047]" />
              <span className="font-bold tracking-wider uppercase text-xs text-[#43A047]">Instructor Portal</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Tech Instructor or{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
                Content Creator
              </span>?
            </h2>
            
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-md font-medium">
              Create in your native language, reach more learners, and earn from your expertise with internee.pk.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all group">
                <span>Start Teaching Today</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: 4 Stat Boxes Card Platform */}
          <motion.div variants={itemVariants} className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-100/50 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gray-50/60 border border-gray-100 p-5 rounded-2xl hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-xs font-bold text-gray-400 tracking-wider uppercase block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-base font-bold text-gray-800 group-hover:text-[#43A047] transition-colors">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 font-medium tracking-wide">
              Join a growing community of instructors sharing practical, industry-ready content.
            </p>
          </motion.div>
        </motion.div>

        {/* ================= BOTTOM GRID: 4 MAIN FEATURE CARDS ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {featureCards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-gray-100 p-8 rounded-3xl space-y-5 hover:shadow-2xl hover:shadow-green-500/10 hover:border-gray-200 transition-all duration-500 group cursor-pointer"
            >
              <div className="space-y-5">
                {/* Icon Wrapper with gradient background */}
                <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-[#43A047] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Learn More Active Link Arrow trigger */}
              <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <span className="text-sm font-bold text-[#43A047]">Learn more</span>
                <ChevronRight className="w-4 h-4 text-[#43A047]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default InstructorPortal;