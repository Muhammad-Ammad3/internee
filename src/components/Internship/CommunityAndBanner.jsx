// import React, { useState } from 'react';

// const CommunityAndBanner = () => {
//   // Testimonial sliding dataset state management array
//   const testimonials = [
//     {
//       id: 1,
//       name: "Mohammad Rafiq",
//       location: "Larkana, Pakistan",
//       avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
//       text: "I find internee.pk to be an outstanding to get hands-on experience. Sometimes you have to spend to make lot of projects.",
//       rating: 5
//     },
//     {
//       id: 2,
//       name: "Ali Raza",
//       location: "Islamabad, Pakistan",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
//       text: "I built my confidence and technical skills through this platform. Highly recommended!",
//       rating: 5
//     }
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   // Bottom dark layout metric dataset 
//   const bottomCounters = [
//     { value: "20+", label: "Expert-Led Internships" },
//     { value: "1,500+", label: "Successful Graduates" },
//     { value: "120k+", label: "LinkedIn Followers" }
//   ];

//   return (
//     <section className="w-full bg-white py-16 px-6 lg:px-16 font-sans select-none">
//       <div className="max-w-screen-2xl mx-auto space-y-20">
        
//         {/* ========================================================================= */}
//         {/* 1. TOP VIEW LAYER: TRUSTED COMMUNITY TESTIMONIAL GRID                   */}
//         {/* ========================================================================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
//           {/* Left Block Headers */}
//           <div className="lg:col-span-6 space-y-5">
//             <span className="bg-gray-100 border border-gray-200/60 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
//               Trusted By Thousands
//             </span>
//             <h2 className="text-3xl sm:text-[48px] font-black text-gray-950 tracking-tight leading-[1.1]">
//               Join Thousands of<br />
//               Achievers Connect,<br />
//               Learn, Succeed.
//             </h2>
//             <div className="pt-2">
//               <button className="bg-[#3FB628] text-white px-6 py-3.5 rounded-full text-xs font-bold hover:bg-[#349e1e] transition shadow-md shadow-green-100">
//                 Join Our Community
//               </button>
//             </div>
//           </div>

//           {/* Right Block Slider Deck Component */}
//           <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center w-full space-y-4">
//             <div className="w-full max-w-md bg-white border border-gray-100 rounded-[24px] p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.02)] min-h-[190px] transition-all duration-300">
              
//               {/* User Metadata Bio Meta Header */}
//               <div className="flex items-center gap-3.5">
//                 <img 
//                   src={testimonials[activeIndex].avatar} 
//                   alt={testimonials[activeIndex].name} 
//                   className="w-11 h-11 rounded-full object-cover border border-gray-100"
//                 />
//                 <div className="leading-tight">
//                   <h4 className="text-sm font-black text-gray-950 tracking-tight">
//                     {testimonials[activeIndex].name}
//                   </h4>
//                   <span className="text-[10px] font-semibold text-gray-400">
//                     {testimonials[activeIndex].location}
//                   </span>
//                 </div>
//               </div>

//               {/* Dynamic feedback quote text lines */}
//               <p className="text-gray-600 text-xs sm:text-[13px] font-medium leading-relaxed mt-4 italic">
//                 "{testimonials[activeIndex].text}"
//               </p>

//               {/* Graphical Star Ratings micro rendering rows */}
//               <div className="flex items-center gap-0.5 text-yellow-400 text-sm mt-4">
//                 {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
//                   <span key={i}>★</span>
//                 ))}
//               </div>
//             </div>

//             {/* Pagination Controls Dot Deck Indicators Slider */}
//             <div className="flex items-center gap-1.5 pr-2">
//               {testimonials.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveIndex(idx)}
//                   className={`h-1.5 rounded-full transition-all duration-300 ${
//                     activeIndex === idx ? "w-6 bg-[#3FB628]" : "w-1.5 bg-gray-200"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* ========================================================================= */}
//         {/* 2. MIDDLE VIEW LAYER: PREMIUM GEOMETRIC JET BLACK CONTEXT CARD BANNER     */}
//         {/* ========================================================================= */}
//         <div className="w-full bg-[#121212] rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-xl">
          
//           {/* Subtle Geometric Wireframe Absolute Vectors for Backdrop Canvas style structure */}
//           <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-10 pointer-events-none hidden sm:block">
//             <div className="absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 border-[24px] border-white rounded-full" />
//             <div className="absolute right-48 top-12 w-24 h-24 bg-white rounded-xl rotate-45" />
//             <div className="absolute right-4 top-8 w-16 h-16 bg-white" />
//           </div>

//           {/* Banner Left contextual content data inputs */}
//           <div className="space-y-4 max-w-xl z-10 relative">
//             <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1">
//               <span className="bg-[#3FB628] text-white text-[9px] font-black tracking-wider uppercase px-1.5 py-0.5 rounded-full">
//                 Trending
//               </span>
//               <span className="text-neutral-400 text-[11px] font-bold tracking-wide">
//                 Explore Internship Opportunities
//               </span>
//             </div>

//             <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
//               Unlock New Opportunities<br />
//               With Top-tier Internships.
//             </h3>

//             <p className="text-neutral-400 text-xs sm:text-sm font-semibold leading-relaxed">
//               Take the first step toward a successful career with Internee.pk.
//             </p>

//             <div className="flex flex-wrap items-center gap-3.5 pt-2">
//               <button className="bg-[#3FB628] hover:bg-[#349e1e] text-white text-xs font-black px-6 py-3.5 rounded-full transition-all tracking-wide shadow-md">
//                 Get Started Now
//               </button>
//               <button className="bg-transparent border border-neutral-800 hover:border-neutral-700 text-white text-xs font-black px-6 py-3.5 rounded-full transition-all flex items-center gap-2">
//                 <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//                 Explore Internships
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ========================================================================= */}
//         {/* 3. BOTTOM VIEW LAYER: NUMERICAL MATRICES TRACK COUNTERS                  */}
//         {/* ========================================================================= */}
//         <div className="pt-4 max-w-5xl mx-auto w-full">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-center">
//             {bottomCounters.map((item, index) => (
//               <div 
//                 key={index} 
//                 className="flex flex-col items-center justify-center text-center space-y-1 relative sm:border-r last:border-0 border-gray-100"
//               >
//                 <div className="text-4xl font-black text-gray-950 tracking-tighter">
//                   {item.value}
//                 </div>
//                 <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CommunityAndBanner;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Star, 
  TrendingUp, 
  ArrowRight, 
  Search,
  Sparkles,
  Award,
  GraduationCap,
  Linkedin,
  ChevronRight,
  Play,
  CheckCircle2
} from 'lucide-react';

const CommunityAndBanner = () => {
  // Testimonial sliding dataset state management array
  const testimonials = [
    {
      id: 1,
      name: "Mohammad Rafiq",
      location: "Larkana, Pakistan",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      text: "I find internee.pk to be an outstanding to get hands-on experience. Sometimes you have to spend to make lot of projects.",
      rating: 5
    },
    {
      id: 2,
      name: "Ali Raza",
      location: "Islamabad, Pakistan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      text: "I built my confidence and technical skills through this platform. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Sara Khan",
      location: "Karachi, Pakistan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      text: "The mentorship I received helped me land my dream job. Truly a life-changing platform!",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Bottom dark layout metric dataset 
  const bottomCounters = [
    { value: "20+", label: "Expert-Led Internships", icon: Award },
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

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. TOP VIEW LAYER: TRUSTED COMMUNITY TESTIMONIAL GRID                   */}
        {/* ========================================================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Block Headers */}
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5"
            >
              <Users className="w-4 h-4 text-[#43A047]" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
                Trusted By Thousands
              </span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Join Thousands of <br />
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
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group">
                <span>Join Our Community</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Block Slider Deck Component */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center w-full space-y-5">
            <div className="w-full max-w-md bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100/50 min-h-[200px] transition-all duration-300">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  {/* User Metadata Bio Meta Header */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name} 
                      className="w-14 h-14 rounded-2xl object-cover border border-gray-100 shadow-md"
                    />
                    <div className="leading-tight">
                      <h4 className="text-base font-bold text-gray-900">
                        {testimonials[activeIndex].name}
                      </h4>
                      <span className="text-xs font-medium text-gray-400">
                        {testimonials[activeIndex].location}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic feedback quote text lines */}
                  <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
                    "{testimonials[activeIndex].text}"
                  </p>

                  {/* Graphical Star Ratings micro rendering rows */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls Dot Deck Indicators Slider */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "w-8 bg-[#43A047]" : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* ========================================================================= */}
        {/* 2. MIDDLE VIEW LAYER: PREMIUM GEOMETRIC JET BLACK CONTEXT CARD BANNER     */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-[#0a0a0a] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl"
        >
          {/* Subtle Geometric Wireframe Absolute Vectors */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-10 pointer-events-none hidden sm:block">
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-72 h-72 border-[24px] border-white/20 rounded-full" />
            <div className="absolute right-48 top-12 w-24 h-24 bg-white/10 rounded-xl rotate-45" />
            <div className="absolute right-4 top-8 w-16 h-16 bg-white/10" />
          </div>

          {/* Banner Left contextual content data inputs */}
          <div className="space-y-6 max-w-xl z-10 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5"
            >
              <div className="w-2 h-2 bg-[#43A047] rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-gray-400">
                Explore Internship Opportunities
              </span>
            </motion.div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              Unlock New Opportunities <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43A047] to-[#66BB6A]">
                With Top-tier Internships.
              </span>
            </h3>

            <p className="text-gray-400 text-sm lg:text-base font-medium leading-relaxed">
              Take the first step toward a successful career with Internee.pk.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-gradient-to-r from-[#43A047] to-[#388E3C] text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group"
              >
                <span>Get Started Now</span>
                <Sparkles className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-transparent border border-gray-700 hover:border-gray-600 text-white px-6 py-3.5 rounded-full text-sm font-bold transition-all duration-300"
              >
                <Search className="w-4 h-4" />
                <span>Explore Internships</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. BOTTOM VIEW LAYER: NUMERICAL MATRICES TRACK COUNTERS                  */}
        {/* ========================================================================= */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="pt-8 max-w-5xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justify-center">
            {bottomCounters.map((item, index) => (
              <motion.div 
                key={index}
                variants={counterVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center justify-center text-center space-y-4 relative sm:border-r last:border-0 border-gray-100 py-4"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100">
                  <item.icon className="w-7 h-7 text-[#43A047]" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tighter">
                  {item.value}
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommunityAndBanner;