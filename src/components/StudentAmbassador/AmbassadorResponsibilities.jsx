// import React from "react";
// import { Target, Globe, Clock, Zap, Gift } from "lucide-react";

// export default function AmbassadorResponsibilities() {
//   const campusTasks = [
//     {
//       num: 1,
//       title: "Organize Events",
//       desc: "Host 2-3 events monthly - workshops, hackathons, talks, networking sessions",
//     },
//     {
//       num: 2,
//       title: "Recruit Students",
//       desc: "Connect with students and share Internee.pk opportunities and programs",
//     },
//     {
//       num: 3,
//       title: "Share Updates",
//       desc: "Keep campus informed about new programs and success stories",
//     },
//     {
//       num: 4,
//       title: "Mentor Peers",
//       desc: "Guide new students through programs and opportunity selection",
//     },
//     {
//       num: 5,
//       title: "Brand Representation",
//       desc: "Represent Internee.pk at college events and competitions",
//     },
//   ];

//   const onlineTasks = [
//     {
//       num: 1,
//       title: "Content Creation",
//       desc: "Share engaging posts, stories, and testimonials on social media",
//     },
//     {
//       num: 2,
//       title: "Community Engagement",
//       desc: "Answer questions on forums and support ambassador community",
//     },
//     {
//       num: 3,
//       title: "Track Metrics",
//       desc: "Report event attendance, engagement, and outcomes monthly",
//     },
//     {
//       num: 4,
//       title: "Attend Training",
//       desc: "Participate in monthly ambassador training and webinars",
//     },
//     {
//       num: 5,
//       title: "Provide Feedback",
//       desc: "Share insights and suggestions to help improve our programs",
//     },
//   ];

//   return (
//     <div className="w-full bg-white font-sans antialiased px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto space-y-12">
//       {/* --- SECTION HEADER --- */}
//       <div className="text-center space-y-3 mb-16">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
//           What You'll Do As an Ambassador
//         </h2>
//         <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
//           Make real impact with meaningful responsibilities and full support
//           from our team
//         </p>
//       </div>

//       {/* --- MAIN SPLIT TWO COLUMNS --- */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* LEFT COLUMN: ON CAMPUS (Green Theme) */}
//         <div className="bg-white border-2 border-[#43A047]/10 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] space-y-6">
//           {/* Header area */}
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-full">
//               <Target className="w-6 h-6 stroke-[2.5]" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">On Campus</h3>
//               <p className="text-gray-400 text-xs md:text-sm font-medium">
//                 Physical presence & engagement
//               </p>
//             </div>
//           </div>

//           {/* List Wrapper */}
//           <div className="space-y-3">
//             {campusTasks.map((task) => (
//               <div
//                 key={task.num}
//                 className="bg-[#F8FAFC] rounded-xl p-4 flex items-start gap-4 border border-slate-100"
//               >
//                 <span className="w-5 h-5 rounded-full bg-[#43A047] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
//                   {task.num}
//                 </span>
//                 <div className="space-y-0.5">
//                   <h4 className="font-bold text-gray-900 text-sm">
//                     {task.title}
//                   </h4>
//                   <p className="text-gray-500 text-xs leading-relaxed">
//                     {task.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT COLUMN: ONLINE (Blue Theme) */}
//         <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-6">
//           {/* Header area */}
//           <div className="flex items-center gap-4">
//             <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
//               <Globe className="w-6 h-6 stroke-[2.5]" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">Online</h3>
//               <p className="text-gray-400 text-xs md:text-sm font-medium">
//                 Digital & community engagement
//               </p>
//             </div>
//           </div>

//           {/* List Wrapper */}
//           <div className="space-y-3">
//             {onlineTasks.map((task) => (
//               <div
//                 key={task.num}
//                 className="bg-[#F8FAFC] rounded-xl p-4 flex items-start gap-4 border border-slate-100"
//               >
//                 <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
//                   {task.num}
//                 </span>
//                 <div className="space-y-0.5">
//                   <h4 className="font-bold text-gray-900 text-sm">
//                     {task.title}
//                   </h4>
//                   <p className="text-gray-500 text-xs leading-relaxed">
//                     {task.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --- BOTTOM METADATA/INFO BAR --- */}
//       <div className="w-full rounded-2xl border border-gray-200 overflow-hidden bg-gradient-to-r from-[#E8F5E9]/40 via-white to-blue-50/30 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
//         {/* Info Box 1 */}
//         <div className="p-6 flex items-center gap-4 md:justify-center">
//           <div className="text-[#43A047]">
//             <Clock className="w-5 h-5 stroke-[2]" />
//           </div>
//           <div>
//             <h5 className="font-bold text-gray-900 text-sm">Time Required</h5>
//             <p className="text-gray-500 text-xs mt-0.5">
//               8-10 hours per week (flexible)
//             </p>
//           </div>
//         </div>

//         {/* Info Box 2 */}
//         <div className="p-6 flex items-center gap-4 md:justify-center">
//           <div className="text-[#43A047]">
//             <Zap className="w-5 h-5 stroke-[2]" />
//           </div>
//           <div>
//             <h5 className="font-bold text-gray-900 text-sm">Commitment</h5>
//             <p className="text-gray-500 text-xs mt-0.5">
//               6-12 months (negotiable)
//             </p>
//           </div>
//         </div>

//         {/* Info Box 3 */}
//         <div className="p-6 flex items-center gap-4 md:justify-center">
//           <div className="text-[#43A047]">
//             <Gift className="w-5 h-5 stroke-[2]" />
//           </div>
//           <div>
//             <h5 className="font-bold text-gray-900 text-sm">Compensation</h5>
//             <p className="text-gray-500 text-xs mt-0.5">
//               Monthly stipend + performance bonus
//             </p>
//           </div>
//         </div>
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
  faCrosshairs, 
  faGlobe, 
  faClock, 
  faBolt, 
  faGift,
  faUsers,
  faVideo,
  faCommentAlt,
  faChartBar,
  faGraduationCap,
  faBullhorn,
  faCalendarAlt,
  faAward,
  faPenNib,
  faArrowRight,
  faStar,
  faCheckCircle,
  faEnvelope,
  faShareAlt,
  faHeadphones
} from "@fortawesome/free-solid-svg-icons";

export default function AmbassadorResponsibilities() {
  // Campus tasks data with Font Awesome icons
  const campusTasks = [
    {
      num: 1,
      title: "Organize Events",
      desc: "Host 2-3 events monthly - workshops, hackathons, talks, networking sessions",
      icon: faBullhorn
    },
    {
      num: 2,
      title: "Recruit Students",
      desc: "Connect with students and share Internee.pk opportunities and programs",
      icon: faUsers
    },
    {
      num: 3,
      title: "Share Updates",
      desc: "Keep campus informed about new programs and success stories",
      icon: faShareAlt
    },
    {
      num: 4,
      title: "Mentor Peers",
      desc: "Guide new students through programs and opportunity selection",
      icon: faGraduationCap
    },
    {
      num: 5,
      title: "Brand Representation",
      desc: "Represent Internee.pk at college events and competitions",
      icon: faAward
    },
  ];

  // Online tasks data with Font Awesome icons
  const onlineTasks = [
    {
      num: 1,
      title: "Content Creation",
      desc: "Share engaging posts, stories, and testimonials on social media",
      icon: faPenNib
    },
    {
      num: 2,
      title: "Community Engagement",
      desc: "Answer questions on forums and support ambassador community",
      icon: faCommentAlt
    },
    {
      num: 3,
      title: "Track Metrics",
      desc: "Report event attendance, engagement, and outcomes monthly",
      icon: faChartBar
    },
    {
      num: 4,
      title: "Attend Training",
      desc: "Participate in monthly ambassador training and webinars",
      icon: faVideo
    },
    {
      num: 5,
      title: "Provide Feedback",
      desc: "Share insights and suggestions to help improve our programs",
      icon: faHeadphones
    },
  ];

  // Bottom metadata bars data with Font Awesome icons
  const metadata = [
    { 
      icon: faClock, 
      title: "Time Required", 
      desc: "8-10 hours per week (flexible)",
      color: "green"
    },
    { 
      icon: faCalendarAlt, 
      title: "Commitment", 
      desc: "6-12 months (negotiable)",
      color: "blue"
    },
    { 
      icon: faGift, 
      title: "Compensation", 
      desc: "Monthly stipend + performance bonus",
      color: "green"
    },
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

  const taskVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-20 lg:py-28 md:px-12 lg:px-16 max-w-7xl mx-auto space-y-16">
      
      {/* --- SECTION HEADER --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="text-center space-y-5 mb-8"
      >
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5">
          <FontAwesomeIcon icon={faStar} className="text-xs text-[#43A047]" />
          <span className="text-xs font-bold text-[#43A047] uppercase tracking-wider">Your Role</span>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
          What You'll Do{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
            As an Ambassador
          </span>
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-gray-500 text-sm lg:text-base max-w-2xl mx-auto font-medium">
          Make real impact with meaningful responsibilities and full support from our team
        </motion.p>
      </motion.div>

      {/* --- MAIN SPLIT TWO COLUMNS --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
      >
        {/* LEFT COLUMN: ON CAMPUS (Green Theme) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-white border-2 border-green-100/50 rounded-3xl p-6 md:p-8 shadow-xl shadow-green-500/10 space-y-6"
        >
          {/* Header area */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-[#43A047] to-[#388E3C] text-white rounded-2xl w-12 h-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faCrosshairs} className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">On Campus</h3>
              <p className="text-gray-400 text-sm font-medium">
                Physical presence & engagement
              </p>
            </div>
          </motion.div>

          {/* List Wrapper */}
          <div className="space-y-3">
            {campusTasks.map((task, index) => (
              <motion.div
                key={index}
                variants={taskVariants}
                whileHover={{ x: 6 }}
                className="bg-gray-50/50 rounded-xl p-4 flex items-start gap-4 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  <FontAwesomeIcon icon={task.icon} className="text-[10px]" />
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#43A047] transition-colors">
                    {task.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: ONLINE (Blue Theme) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-100/50 space-y-6"
        >
          {/* Header area */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faGlobe} className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Online</h3>
              <p className="text-gray-400 text-sm font-medium">
                Digital & community engagement
              </p>
            </div>
          </motion.div>

          {/* List Wrapper */}
          <div className="space-y-3">
            {onlineTasks.map((task, index) => (
              <motion.div
                key={index}
                variants={taskVariants}
                whileHover={{ x: 6 }}
                className="bg-gray-50/50 rounded-xl p-4 flex items-start gap-4 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                  <FontAwesomeIcon icon={task.icon} className="text-[10px]" />
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                    {task.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* --- BOTTOM METADATA/INFO BAR --- */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="w-full rounded-3xl border border-gray-100 overflow-hidden bg-gradient-to-r from-green-50/50 via-white to-blue-50/30 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100"
      >
        {metadata.map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="p-6 flex items-center gap-4 md:justify-center hover:bg-gray-50/50 transition-colors cursor-pointer"
          >
            <div className={`p-2.5 rounded-xl w-10 h-10 flex items-center justify-center shrink-0 ${
              item.color === "green" 
                ? "bg-green-100 text-[#43A047]" 
                : "bg-blue-100 text-blue-600"
            }`}>
              <FontAwesomeIcon icon={item.icon} className="text-base" />
            </div>
            <div>
              <h5 className="font-bold text-gray-900 text-sm">{item.title}</h5>
              <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}