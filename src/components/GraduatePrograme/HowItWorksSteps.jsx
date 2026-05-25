// import React from 'react';

// const HowItWorksSteps = () => {
//   // 4 Steps Dataset Array directly matching image content
//   const steps = [
//     {
//       id: 1,
//       title: "Choose Your Track",
//       desc: "Select from 20+ specialized programs based on your interests and goals"
//     },
//     {
//       id: 2,
//       title: "Learn & Project",
//       desc: "Complete structured lessons and work on real-world projects with mentors"
//     },
//     {
//       id: 3,
//       title: "Build Portfolio",
//       desc: "Create a professional portfolio showcasing your verified skills"
//     },
//     {
//       id: 4,
//       title: "Land Your Job",
//       desc: "Connect with hiring companies and start your career journey"
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans select-none">
//       <div className="max-w-screen-2xl mx-auto space-y-16">
        
//         {/* ================= HEADER SECTION ================= */}
//         <div className="text-center space-y-3">
//           <h2 className="text-3xl sm:text-[40px] font-black text-gray-950 tracking-tight">
//             How Our Programs Work
//           </h2>
//           <p className="text-gray-600 text-xs sm:text-[15px] font-medium tracking-wide">
//             Simple steps to launch your career
//           </p>
//         </div>

//         {/* ================= STEP CARDS GRID ================= */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2 relative">
//           {steps.map((step, index) => (
//             <React.Fragment key={step.id}>
              
//               {/* Individual Step Card */}
//               <div className="w-full lg:w-[23%] min-h-[220px] bg-gradient-to-b from-[#f3f8f5] to-[#edf4fc] border border-[#e1edf5] rounded-[24px] p-7 flex flex-col justify-start space-y-4 shadow-[0_8px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
                
//                 {/* Green Number Badge */}
//                 <div className="w-8 h-8 rounded-full bg-[#3FB628] flex items-center justify-center text-white text-xs font-black shadow-sm">
//                   {step.id}
//                 </div>

//                 {/* Content Area */}
//                 <div className="space-y-2">
//                   <h3 className="text-base font-black text-gray-950 tracking-tight">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-500 text-[11px] sm:text-xs font-semibold leading-relaxed">
//                     {step.desc}
//                   </p>
//                 </div>

//               </div>

//               {/* Connecting Green Horizontal Line (Only between cards and only on Desktop) */}
//               {index < steps.length - 1 && (
//                 <div className="hidden lg:block flex-grow h-[2px] bg-[#3FB628] max-w-[24px] self-center opacity-80" />
//               )}

//             </React.Fragment>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowItWorksSteps;



import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  BookOpen, 
  FolderKanban, 
  Briefcase, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const HowItWorksSteps = () => {
  // 4 Steps Dataset
  const steps = [
    {
      id: 1,
      title: "Choose Your Track",
      desc: "Select from 20+ specialized programs based on your interests and career goals",
      icon: MapPin
    },
    {
      id: 2,
      title: "Learn & Project",
      desc: "Complete structured lessons and work on real-world projects with expert mentors",
      icon: BookOpen
    },
    {
      id: 3,
      title: "Build Portfolio",
      desc: "Create a professional portfolio showcasing your verified skills",
      icon: FolderKanban
    },
    {
      id: 4,
      title: "Land Your Job",
      desc: "Connect with hiring companies and start your career journey",
      icon: Briefcase
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

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" } }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ================= HEADER SECTION ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center space-y-4"
        >
          <motion.h2 variants={stepVariants} className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            How Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
              Programs Work
            </span>
          </motion.h2>
          <motion.p variants={stepVariants} className="text-gray-500 text-sm font-medium max-w-md mx-auto">
            Simple steps to launch your career in tech
          </motion.p>
        </motion.div>

        {/* ================= STEP CARDS GRID ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-4"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              
              {/* Individual Step Card */}
              <motion.div
                variants={stepVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative w-full lg:w-[23%] min-h-[240px] bg-gradient-to-b from-white to-green-50/30 border border-gray-100 rounded-3xl p-7 flex flex-col justify-start space-y-5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group"
              >
                
                {/* Step Number Badge */}
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#43A047] to-[#388E3C] flex items-center justify-center text-white font-bold shadow-lg shadow-green-500/25">
                  <step.icon className="w-5 h-5" />
                </div>

                {/* Step Count */}
                <div className="absolute top-4 right-4 text-4xl font-black text-gray-100 group-hover:text-green-100 transition-colors">
                  {step.id}
                </div>

                {/* Content Area */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Check Circle for completed feel */}
                <div className="flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-[#43A047] opacity-50" />
                  <span className="text-xs font-bold text-[#43A047]">Step {step.id}</span>
                </div>

              </motion.div>

              {/* Connecting Green Horizontal Line (Desktop only) */}
              {index < steps.length - 1 && (
                <motion.div 
                  variants={lineVariants}
                  className="hidden lg:flex flex-grow items-center justify-center mx-2"
                >
                  <div className="w-full h-[2px] bg-gradient-to-r from-[#43A047] to-[#66BB6A] opacity-60 relative overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="absolute inset-0 w-1/2 bg-white/50 blur-sm"
                    />
                  </div>
                </motion.div>
              )}

            </React.Fragment>
          ))}
        </motion.div>

        {/* Mobile Connector Line (Vertical) */}
        <div className="lg:hidden flex justify-center">
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#43A047] to-[#66BB6A] opacity-40" />
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSteps;