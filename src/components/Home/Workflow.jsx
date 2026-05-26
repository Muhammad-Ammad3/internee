// import React from "react";

// const Workflow = () => {
//   return (
//     <section className="w-full bg-[#f5f5f5] py-20 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//         {/* Left Content */}
//         <div>
//           <button className="px-5 py-2 rounded-full bg-white text-sm text-gray-700 shadow-sm border border-gray-200">
//             How It Works
//           </button>

//           <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight text-black">
//             Start Fast.
//             <br />
//             Learn Smart.
//             <br />
//             Get Job-Ready.
//           </h1>

//           <p className="mt-6 text-gray-600 text-lg leading-8 max-w-md">
//             Follow three clear steps to start, learn, and earn your certificate.
//             Everything is structured so you can move fast and stay focused.
//           </p>

//           <button className="mt-10 bg-[#48b41f] hover:bg-[#3da118] transition-all duration-300 text-white font-medium px-8 py-4 rounded-full text-lg shadow-md">
//             Get Started Now
//           </button>
//         </div>

//         {/* Right Cards */}
//         <div className="flex flex-col gap-8">
//           {/* Card 1 */}
//           <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-[#e8f7e1] flex items-center justify-center text-[#48b41f] font-semibold">
//                 01
//               </div>

//               <span className="text-gray-500 text-sm">Step 01</span>
//             </div>

//             <h2 className="mt-6 text-3xl font-semibold text-black">
//               Sign Up & Choose a Domain
//             </h2>

//             <p className="mt-4 text-gray-600 text-lg leading-7">
//               Explore a wide range of internships across various industries,
//               tailored to your skills.
//             </p>

//             <div className="flex flex-wrap gap-3 mt-6">
//               <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
//                 Fast setup
//               </span>

//               <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
//                 Guided steps
//               </span>

//               <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
//                 Verified outcome
//               </span>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 rounded-full bg-[#e8f7e1] flex items-center justify-center text-[#48b41f] font-semibold">
//                 02
//               </div>

//               <span className="text-gray-500 text-sm">Step 02</span>
//             </div>

//             <h2 className="mt-6 text-3xl font-semibold text-black">
//               Complete Your Application
//             </h2>

//             <p className="mt-4 text-gray-600 text-lg leading-7">
//               Submit a short form and secure your internship opportunity in
//               minutes.
//             </p>

//             <div className="flex flex-wrap gap-3 mt-6">
//               <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
//                 Fast setup
//               </span>

//               <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
//                 Guided steps
//               </span>

//               <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm">
//                 Verified outcome
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Workflow;



"use client";

import React from "react";
import { motion } from "framer-motion";

// Font Awesome Core aur Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Solid Icons Imports
import { 
  faUserPlus, 
  faFileCircleCheck, 
  faArrowRight, 
  faBolt, 
  faHandSparkles,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Workflow = () => {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Steps data (Font Awesome components mapping ke sath)
  const steps = [
    {
      step: "01",
      title: "Sign Up & Choose a Domain",
      desc: "Explore a wide range of internships across various industries, tailored to your skills and career goals.",
      tags: ["Fast setup", "Guided steps", "Verified outcome"],
      icon: faUserPlus
    },
    {
      step: "02",
      title: "Complete Your Application",
      desc: "Submit a short form and secure your internship opportunity in minutes.",
      tags: ["Quick process", "Expert review", "Direct access"],
      icon: faFileCircleCheck
    },
    {
      step: "03",
      title: "Start Learning & Grow",
      desc: "Begin your virtual internship journey with mentorship and real-world projects.",
      tags: ["Hands-on projects", "Mentor support", "Career pathways"],
      icon: faHandSparkles
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
            <FontAwesomeIcon icon={faBolt} className="text-xs text-[#43A047]" />
            <span className="text-sm font-medium text-gray-600">How It Works</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 tracking-tight">
            Start Fast.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">Learn Smart.</span>
            <br />
            Get Job-Ready.
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 text-gray-500 text-lg leading-relaxed max-w-md font-medium">
            Follow three clear steps to start, learn, and earn your certificate. Everything is structured so you can move fast and stay focused on what matters most.
          </motion.p>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="mt-10">
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group">
              <span>Get Started Now</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-sm group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-500 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center text-[#43A047] font-bold border border-green-100 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={step.icon} className="text-lg" />
                </div>

                <span className="text-gray-400 text-sm font-medium">Step {step.step}</span>
              </div>

              <h2 className="mt-6 text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#43A047] transition-colors">
                {step.title}
              </h2>

              <p className="mt-3 text-gray-500 text-base leading-relaxed">
                {step.desc}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {step.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100 group-hover:border-green-200 group-hover:bg-green-50 transition-all">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="flex items-center gap-1 mt-4 text-[#43A047] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm font-bold">Learn more</span>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;