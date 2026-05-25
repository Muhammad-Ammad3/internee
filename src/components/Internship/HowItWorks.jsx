// import React from 'react';

// const HowItWorks = () => {
//   // Array dataset holding structured information exactly matching image_559a4a.png
//   const steps = [
//     {
//       id: 1,
//       title: "Choose Your Path",
//       desc: "Browse our diverse tracks and select the internship that aligns with your career goals."
//     },
//     {
//       id: 2,
//       title: "Accelerated Learning",
//       desc: "Dive into hands-on projects, follow our structured guide, and start building."
//     },
//     {
//       id: 3,
//       title: "Get Certified",
//       desc: "Complete your tasks, submit your final project, and receive your verified certificate."
//     }
//   ];

//   return (
//     <section className="w-full bg-[#fcfcfc] py-16 px-6 lg:px-16 font-sans">
//       <div className="max-w-4xl mx-auto space-y-10">
        
//         {/* ================= SECTION CENTALIZED HEADER ================= */}
//         <div className="text-center space-y-2">
//           <h2 className="text-3xl sm:text-[38px] font-black text-[#111827] tracking-tight">
//             How It Works
//           </h2>
//           <p className="text-gray-500 text-xs sm:text-[15px] font-medium tracking-wide">
//             Your path to an industry-ready career in three simple steps.
//           </p>
//         </div>

//         {/* ================= VERTICAL STEP CARDS CONTAINER ================= */}
//         <div className="space-y-4 pt-4">
//           {steps.map((step) => (
//             <div 
//               key={step.id} 
//               className="bg-white border border-gray-100/70 rounded-[20px] p-6 sm:p-8 flex items-start gap-5 sm:gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.02)] transition-all duration-300"
//             >
              
//               {/* Left Circular Green Numeric Counter Badge */}
//               <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#3FB628] flex items-center justify-center text-white text-sm sm:text-base font-black shrink-0 shadow-sm shadow-green-100">
//                 {step.id}
//               </div>

//               {/* Right Content Context Blocks */}
//               <div className="space-y-1 pt-0.5 sm:pt-1">
//                 <h3 className="text-base sm:text-[17px] font-black text-gray-950 tracking-tight">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-500 text-xs sm:text-[13px] font-medium leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowItWorks;



import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Zap, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const HowItWorks = () => {
  // Array dataset holding structured information exactly matching image_559a4a.png
  const steps = [
    {
      id: 1,
      title: "Choose Your Path",
      desc: "Browse our diverse tracks and select the internship that aligns with your career goals.",
      icon: MapPin
    },
    {
      id: 2,
      title: "Accelerated Learning",
      desc: "Dive into hands-on projects, follow our structured guide, and start building.",
      icon: Zap
    },
    {
      id: 3,
      title: "Get Certified",
      desc: "Complete your tasks, submit your final project, and receive your verified certificate.",
      icon: Award
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-gray-50 py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* ================= SECTION CENTRALIZED HEADER ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-[#43A047]" />
            <span className="text-sm font-medium text-gray-600">How It Works</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">Works</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-500 text-sm lg:text-base font-medium max-w-md mx-auto">
            Your path to an industry-ready career in three simple steps.
          </motion.p>
        </motion.div>

        {/* ================= VERTICAL STEP CARDS CONTAINER ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-4"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              whileHover={{ x: 6, scale: 1.01 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex items-start gap-5 sm:gap-6 shadow-lg hover:shadow-xl hover:shadow-green-500/10 hover:border-green-200/50 transition-all duration-300 group cursor-pointer"
            >
              
              {/* Left Circular Green Numeric Counter Badge */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#43A047] to-[#388E3C] flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-shadow"
              >
                <step.icon className="w-6 h-6" />
              </motion.div>

              {/* Right Content Context Blocks */}
              <div className="flex-1 space-y-2 pt-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#43A047] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs font-bold text-gray-300">Step {step.id}</span>
                </div>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Right Arrow Indicator */}
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-300 group-hover:bg-[#43A047] group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
                <ChevronRight className="w-5 h-5" />
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;