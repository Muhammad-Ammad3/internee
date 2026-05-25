// import React, { useState } from 'react';

// const LaunchCareer = () => {
//   // Testimonials Slider State Controller
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Dynamic user objects data bank matching the reference UI perfectly
//   const testimonials = [
//     {
//       name: "Mohammad Rafiq",
//       location: "Larkana, Pakistan",
//       text: '"I find internee.pk to be an outstanding to get hands on experience. Sometimes you have to spend to make lot of projects."',
//       avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
//     },
//     {
//       name: "Kashan Soomro",
//       location: "Karachi, Pakistan",
//       text: '"Thanks to internee.pk, I grew up my skills here and now I am working as a Flutter Developer in a US company."',
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
//     },
//     {
//       name: "Ali Raza",
//       location: "Islamabad, Pakistan",
//       text: '"I built my confidence and technical skills through this platform. Highly recommended!"',
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-16 px-6 lg:px-16 font-sans overflow-hidden">
//       <div className="max-w-screen-2xl mx-auto space-y-14">
        
//         {/* ================= 1. TOP BLOCK: DYNAMIC SLIDER LAYOUT ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
//           {/* Left Text Detail */}
//           <div className="lg:col-span-7 space-y-5">
//             <div className="inline-block bg-gray-100 border border-gray-200/50 rounded-full px-3.5 py-1 text-[10px] font-bold tracking-wide text-gray-500">
//               Trusted By Thousands
//             </div>
//             <h2 className="text-3xl sm:text-[45px] font-black text-gray-950 tracking-tight leading-[1.12]">
//               Join Thousands of <br />
//               Achievers Connect, <br />
//               Learn, Succeed.
//             </h2>
//             <div className="pt-2">
//               <button className="bg-[#3FB628] text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-[#349e1e] transition shadow-md shadow-green-100">
//                 Join Our Community
//               </button>
//             </div>
//           </div>

//           {/* Right Floating Card Slider Engine */}
//           <div className="lg:col-span-5 w-full flex flex-col items-center lg:items-start space-y-5">
//             <div className="bg-white border border-gray-100/90 rounded-[24px] p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.015)] w-full max-w-lg min-h-[160px] flex flex-col justify-between transition-all duration-300">
              
//               <div className="flex items-center gap-3">
//                 <img 
//                   src={testimonials[currentSlide].avatar} 
//                   alt={testimonials[currentSlide].name} 
//                   className="w-11 h-11 rounded-full object-cover shadow-sm border border-gray-100"
//                 />
//                 <div className="space-y-0.5">
//                   <h4 className="text-sm font-black text-gray-950 tracking-tight">
//                     {testimonials[currentSlide].name}
//                   </h4>
//                   <p className="text-[10px] font-bold text-gray-400">
//                     {testimonials[currentSlide].location}
//                   </p>
//                 </div>
//               </div>

//               <p className="text-gray-600 text-xs sm:text-[13px] font-medium leading-relaxed my-4">
//                 {testimonials[currentSlide].text}
//               </p>

//               <div className="flex items-center gap-0.5">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="text-[#3FB628] text-sm">★</span>
//                 ))}
//               </div>
//             </div>

//             {/* Pagination Controls */}
//             <div className="flex items-center gap-1.5 px-2">
//               {testimonials.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentSlide(idx)}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     currentSlide === idx ? 'w-5 bg-[#3FB628]' : 'w-1.5 bg-gray-200 hover:bg-gray-300'
//                   }`}
//                   aria-label={`Go to slide ${idx + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* ================= 2. MIDDLE BLOCK: DARK OPPORTUNITY CANVAS ================= */}
//         <div className="w-full bg-[#111111] rounded-[32px] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden border border-neutral-900 shadow-xl">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
//             {/* Action Text Area */}
//             <div className="lg:col-span-8 space-y-5">
//               <div className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1 text-[10px] font-bold text-neutral-400 tracking-wide">
//                 <span className="bg-[#3FB628] w-1.5 h-1.5 rounded-full animate-pulse" />
//                 Trending · Explore Internship Opportunities
//               </div>
              
//               <h3 className="text-2xl sm:text-[38px] font-black tracking-tight leading-[1.15] text-white">
//                 Unlock New Opportunities <br className="hidden sm:inline" />
//                 With Top-tier Internships.
//               </h3>
              
//               <p className="text-neutral-400 text-xs sm:text-sm font-semibold tracking-wide">
//                 Take the first step toward a successful career with internee.pk.
//               </p>
              
//               <div className="flex flex-wrap items-center gap-3.5 pt-2">
//                 <button className="bg-[#3FB628] text-white px-6 py-3 rounded-xl text-xs font-bold hover:bg-[#349e1e] transition shadow-md shadow-green-950/20">
//                   Get Started Now
//                 </button>
//                 <button className="bg-transparent text-neutral-200 border border-neutral-800 px-5 py-3 rounded-xl text-xs font-bold hover:bg-neutral-900 hover:text-white transition flex items-center gap-2">
//                   <span>🔍</span> Explore Internships
//                 </button>
//               </div>
//             </div>

//             {/* Geometric SVG Mockup Graphic Layout */}
//             <div className="lg:col-span-4 hidden lg:flex justify-end opacity-20 select-none pointer-events-none">
//               <div className="w-64 h-64 grid grid-cols-2 gap-4 transform rotate-6">
//                 <div className="border-[5px] border-neutral-400 rounded-full" />
//                 <div className="bg-neutral-600 rounded-3xl" />
//                 <div className="bg-neutral-600 rounded-tl-[90px]" />
//                 <div className="border-[5px] border-neutral-400 rounded-2xl" />
//               </div>
//             </div>
//           </div>
          
//           {/* Decorative Back Glow */}
//           <div className="absolute top-0 right-0 w-72 h-72 bg-[#3FB628]/10 rounded-full blur-[90px] pointer-events-none" />
//         </div>

//         {/* ================= 3. BOTTOM BLOCK: METRIC COUNTERS ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-5xl mx-auto text-center items-center">
          
//           <div className="space-y-1 sm:border-r border-gray-100 last:border-0">
//             <h4 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">20+</h4>
//             <p className="text-gray-400 text-[10px] font-bold tracking-wider uppercase">Expert-Led Internships</p>
//           </div>

//           <div className="space-y-1 sm:border-r border-gray-100 last:border-0">
//             <h4 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">1,500+</h4>
//             <p className="text-gray-400 text-[10px] font-bold tracking-wider uppercase">Successful Graduates</p>
//           </div>

//           <div className="space-y-1">
//             <h4 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">120k+</h4>
//             <p className="text-gray-400 text-[10px] font-bold tracking-wider uppercase">LinkedIn Followers</p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default LaunchCareer;



import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Star, 
  TrendingUp, 
  ArrowRight, 
  Briefcase, 
  Search,
  Award,
  GraduationCap,
  Linkedin,
  ChevronRight,
  Sparkles,
  Play
} from "lucide-react";

const LaunchCareer = () => {
  // Testimonials Slider State Controller
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamic user objects data bank matching the reference UI perfectly
  const testimonials = [
    {
      name: "Mohammad Rafiq",
      location: "Larkana, Pakistan",
      text: "I find internee.pk to be an outstanding to get hands on experience. Sometimes you have to spend to make lot of projects.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Kashan Soomro",
      location: "Karachi, Pakistan",
      text: "Thanks to internee.pk, I grew up my skills here and now I am working as a Flutter Developer in a US company.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Ali Raza",
      location: "Islamabad, Pakistan",
      text: "I built my confidence and technical skills through this platform. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    }
  ];

  // Metrics data
  const metrics = [
    { value: "20+", label: "Expert-Led Internships", icon: Briefcase },
    { value: "1,500+", label: "Successful Graduates", icon: GraduationCap },
    { value: "120k+", label: "LinkedIn Followers", icon: Linkedin }
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

  const slideVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= 1. TOP BLOCK: DYNAMIC SLIDER LAYOUT ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Text Detail */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
            >
              <Users className="w-4 h-4 text-[#43A047]" />
              <span className="text-xs font-bold tracking-wider text-gray-600">Trusted By Thousands</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Join Thousands of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#388E3C]">
                Achievers
              </span>
              <br />Connect, Learn, Succeed.
            </h2>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all">
                <span>Join Our Community</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Floating Card Slider Engine */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full flex flex-col items-center lg:items-start space-y-5">
            <div className="bg-white border border-gray-100 rounded-3xl p-7 shadow-xl shadow-gray-100/50 w-full max-w-lg min-h-[180px] flex flex-col justify-between transition-all duration-300">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[currentSlide].avatar} 
                      alt={testimonials[currentSlide].name} 
                      className="w-14 h-14 rounded-2xl object-cover shadow-lg border border-gray-100"
                    />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-gray-900">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-xs font-medium text-gray-400">
                        {testimonials[currentSlide].location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm font-medium leading-relaxed italic">
                    "{testimonials[currentSlide].text}"
                  </p>

                  <div className="flex items-center gap-0.5 pt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#43A047] fill-[#43A047]" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-8 bg-[#43A047]' : 'w-2 bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* ================= 2. MIDDLE BLOCK: DARK OPPORTUNITY CANVAS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#0a0a0a] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden border border-gray-800 shadow-2xl"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#43A047]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#43A047]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Action Text Area */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
              >
                <div className="w-2 h-2 bg-[#43A047] rounded-full animate-pulse" />
                <span className="text-xs font-bold text-gray-400 tracking-wider">Trending · Explore Internship Opportunities</span>
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Unlock New Opportunities{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
                  With Top-tier Internships
                </span>.
              </h3>
              
              <p className="text-gray-400 text-sm font-medium max-w-md">
                Take the first step toward a successful career with internee.pk.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
                >
                  <span>Get Started Now</span>
                  <Sparkles className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-transparent text-white border border-gray-700 px-5 py-3.5 rounded-xl text-sm font-bold hover:bg-white/5 hover:border-gray-600 transition-all"
                >
                  <Search className="w-4 h-4" />
                  <span>Explore Internships</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Geometric SVG Mockup Graphic Layout */}
            <div className="lg:col-span-4 hidden lg:flex justify-end opacity-20 select-none pointer-events-none">
              <div className="w-64 h-64 grid grid-cols-2 gap-4 transform rotate-6">
                <div className="border-[5px] border-neutral-400 rounded-full" />
                <div className="bg-neutral-600 rounded-3xl" />
                <div className="bg-neutral-600 rounded-tl-[90px]" />
                <div className="border-[5px] border-neutral-400 rounded-2xl" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= 3. BOTTOM BLOCK: METRIC COUNTERS ================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-5xl mx-auto text-center"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              className="space-y-3 sm:border-r sm:border-gray-100 last:border-0 py-4"
            >
              <div className="w-12 h-12 mx-auto bg-green-50 rounded-xl flex items-center justify-center mb-3">
                <metric.icon className="w-6 h-6 text-[#43A047]" />
              </div>
              <h4 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                {metric.value}
              </h4>
              <p className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default LaunchCareer;