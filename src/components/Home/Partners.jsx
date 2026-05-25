// import React from 'react';

// const Partners = () => {
//   // Aap placeholders ki jagah actual image paths bhi daal sakte hain baad mein
//   const partnersData = [
//     { name: 'Google Cloud', icon: '☁️' },
//     { name: 'BEE Pakistan 2024', icon: '🌟' },
//     { name: 'Microsoft Founders Hub', icon: '💻' },
//     { name: 'ITG', icon: '🌐' },
//     { name: 'NATIONAL EXPANSION PLAN OF NICS', icon: '🗺️' },
//     { name: 'PITB', icon: '🏛️' }
//   ];

//   return (
//     <section className="w-full bg-white py-12 border-b border-gray-100 font-sans">
//       <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 text-center">
        
//         {/* Section Heading */}
//         <p className="text-[11px] sm:text-[12px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-10">
//           COLLABORATED WITH TRUSTED WORLDWIDE PARTNERS
//         </p>

//         {/* Logos Grid Container */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          
//           {/* Logo 1: Google Cloud */}
//           <div className="flex flex-col items-center justify-center text-center">
//             <div className="text-3xl mb-1 text-blue-500">☁️</div>
//             <span className="text-xs font-bold text-gray-700 tracking-tight">Google Cloud</span>
//           </div>

//           {/* Logo 2: BEE Pakistan */}
//           <div className="flex flex-col items-center justify-center text-center">
//             <div className="text-3xl mb-1 text-green-700">🇵🇰</div>
//             <span className="text-[10px] font-extrabold text-gray-800 leading-none">BEE PAKISTAN</span>
//             <span className="text-[9px] text-gray-400 font-bold">2024</span>
//           </div>

//           {/* Logo 3: Microsoft Founders Hub */}
//           <div className="flex flex-col items-center justify-center text-center">
//             <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider leading-none">Microsoft</div>
//             <div className="text-[9px] text-gray-400 leading-none">for Startups</div>
//             <span className="text-sm font-black text-gray-800 mt-1">Founders Hub</span>
//           </div>

//           {/* Logo 4: ITG */}
//           <div className="flex flex-col items-center justify-center text-center">
//             <span className="text-2xl font-black italic text-gray-800 tracking-tighter">ITG</span>
//           </div>

//           {/* Logo 5: National Expansion Plan */}
//           <div className="flex flex-col items-center justify-center text-center max-w-[130px]">
//             <span className="text-[10px] font-black text-gray-800 tracking-tight leading-tight">NATIONAL EXPANSION PLAN</span>
//             <span className="text-[9px] text-gray-400 font-bold">OF NICS</span>
//           </div>

//           {/* Logo 6: PITB */}
//           <div className="flex flex-col items-center justify-center text-center">
//             <div className="text-3xl mb-1 text-amber-600">🏛️</div>
//             <span className="text-[11px] font-black text-gray-800 tracking-widest">PITB</span>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Partners;



import React from "react";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Building2, 
  Globe, 
  MapPin, 
  Landmark,
  ArrowRight,
  Sparkles,
  BadgeCheck
} from "lucide-react";

const Partners = () => {
  // Aap placeholders ki jagah actual image paths bhi daal sakte hain baad mein
  const partnersData = [
    { 
      name: 'Google Cloud', 
      icon: Cloud, 
      color: "from-blue-500 to-blue-600" 
    },
    { 
      name: 'BEE Pakistan 2024', 
      icon: Building2, 
      color: "from-green-500 to-green-600",
      subtitle: "2024"
    },
    { 
      name: 'Microsoft Founders Hub', 
      icon: Globe, 
      color: "from-gray-600 to-gray-700",
      subtitle: "for Startups"
    },
    { 
      name: 'ITG', 
      icon: Landmark, 
      color: "from-purple-500 to-purple-600",
      isText: true
    },
    { 
      name: 'NATIONAL EXPANSION PLAN OF NICS', 
      icon: MapPin, 
      color: "from-orange-500 to-orange-600",
      isCompact: true
    },
    { 
      name: 'PITB', 
      icon: Building2, 
      color: "from-amber-500 to-amber-600"
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20 border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-[#43A047]" />
            <p className="text-xs sm:text-sm font-bold text-gray-400 tracking-[0.15em] uppercase">
              Collaborated with Trusted Worldwide Partners
            </p>
          </motion.div>
        </motion.div>

        {/* Logos Grid Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 items-center justify-items-center"
        >
          {partnersData.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex flex-col items-center justify-center text-center p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon/Logo Circle */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`w-14 h-14 mb-3 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all`}
              >
                <partner.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              {/* Partner Name */}
              <span className="text-xs sm:text-sm font-bold text-gray-700 group-hover:text-[#43A047] transition-colors">
                {partner.name}
              </span>
              
              {/* Optional Subtitle */}
              {partner.subtitle && (
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">
                  {partner.subtitle}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Link */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-12"
        >
          <motion.a
            href="#partners"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#43A047] transition-colors group"
          >
            <span>Become a Partner</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Partners;