import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

export default function Community() {
  const [searchQuery, setSearchQuery] = useState('');

  const ambassadors = [
    {
      name: "Nisar Noorani",
      role: "STUDENT AMBASSADOR",
      degree: "Master of Engineering in Biotechnology",
      gender: "He/Him",
      country: "Pakistan",
      avatar: null,
      isPlaceholder: true,
      placeholderText: "Profile Picture"
    },
    {
      name: "SHAJAR Abbas",
      role: "STUDENT AMBASSADOR",
      degree: "Bachelor of Science in Software Engineering",
      gender: "He/Him",
      country: "Pakistan",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80", // Replace with your actual asset links
    },
    {
      name: "Ameema Waheed",
      role: "STUDENT AMBASSADOR",
      degree: "Bachelor of Science in Computer Science",
      gender: "She/Her",
      country: "Pakistan",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Junaid Ahmad",
      role: "STUDENT AMBASSADOR",
      degree: "Bachelor of Science in Computer Science",
      gender: "He/Him",
      country: "Pakistan",
      avatar: "J",
      isInitial: true,
      bgColor: "bg-[#FF5722]"
    },
    {
      name: "Mahnoor Mahmood",
      role: "STUDENT AMBASSADOR",
      degree: "Bachelor of Arts in Business Administration",
      gender: "She/Her",
      country: "Pakistan",
      avatar: "M",
      isInitial: true,
      bgColor: "bg-[#009688]"
    },
    {
      name: "Mahnoor Umar",
      role: "STUDENT AMBASSADOR",
      degree: "Bachelor of Science in Computer Science",
      gender: "She/Her",
      country: "Pakistan",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    },
    {
      name: "Dua Zahra Dar",
      role: "STUDENT AMBASSADOR",
      degree: "Bachelor of Science in Cybersecurity",
      gender: "She/Her",
      country: "Pakistan",
      avatar: null,
      isIcon: true, 
    },
    {
      name: "Waqas Ahmed",
      role: "STUDENT AMBASSADOR",
      degree: "Bachelor of Science in Computer Science",
      gender: "He/Him",
      country: "Pakistan",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    }
  ];

  const filteredAmbassadors = ambassadors.filter(ambassador =>
    ambassador.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ambassador.degree.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Framer Motion Variants for Grid Items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1A1A1A] p-6 md:p-12 max-w-7xl mx-auto">
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16 mt-4">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 max-w-2xl"
        >
          <span className="inline-block bg-[#F0F2F5] text-[#4A4A4A] text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            Community
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Community Search
          </h1>
          <p className="text-[#555555] text-[15px] leading-relaxed max-w-xl">
            Use the search filters to find Internee community leaders and events in your field of interest or in your local area.
          </p>
        </motion.div>
        
        {/* Hero Image Right Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-105 h-65 rounded-3xl overflow-hidden border border-gray-100 shadow-sm shrink-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Person working on laptop" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Grid Header & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pt-4">
        <div>
          <h2 className="text-2xl font-bold text-black mb-1">Student Ambassadors</h2>
          <p className="text-[#666666] text-sm">Meet verified ambassadors from different programs and regions.</p>
        </div>
        
        {/* FontAwesome Search Input */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search profiles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 text-sm bg-white border border-[#E2E8F0] rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 text-[#333] placeholder-gray-400"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
      </div>

      {/* Animated Ambassador Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredAmbassadors.map((ambassador, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 10px 20px rgba(0,0,0,0.04)" }}
            className="bg-white border border-[#EAEEF3] rounded-2xl p-6 flex items-start gap-4 transition-shadow duration-200 min-h-40"
          >
            {/* Dynamic Avatar UI Layer using FontAwesome Fallbacks */}
            <div className="shrink-0">
              {ambassador.isInitial ? (
                <div className={`w-18 h-18 rounded-full ${ambassador.bgColor} flex items-center justify-center text-white text-2xl font-semibold`}>
                  {ambassador.avatar}
                </div>
              ) : ambassador.isPlaceholder ? (
                <div className="w-18 h-18 rounded-full border border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center text-center p-1">
                  <FontAwesomeIcon icon={faUser} className="text-gray-300 text-lg mb-0.5" />
                  <span className="text-[9px] text-gray-400 leading-tight font-medium">{ambassador.placeholderText}</span>
                </div>
              ) : ambassador.isIcon ? (
                <div className="w-18 h-18 rounded-full bg-[#ECE9FC] flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#7C4DFF] flex items-center justify-center text-white">
                    <FontAwesomeIcon icon={faUserGraduate} className="text-base" />
                  </div>
                </div>
              ) : (
                <img 
                  src={ambassador.avatar} 
                  alt={ambassador.name} 
                  className="w-18 h-18 rounded-full object-cover border border-gray-100"
                />
              )}
            </div>

            {/* Profile Content metadata */}
            <div className="flex-1 min-w-0">
              <span className="block text-[10px] font-bold tracking-wider text-[#7A828A] uppercase mb-1">
                {ambassador.role}
              </span>
              <h3 className="text-base font-bold text-black truncate mb-1">
                {ambassador.name}
              </h3>
              <p className="text-xs text-[#5A6573] leading-normal line-clamp-2 mb-2">
                {ambassador.degree}
              </p>
              
              <div className="flex flex-col gap-0.5 mt-auto">
                <span className="text-xs font-semibold text-[#50d523]">
                  {ambassador.gender}
                </span>
                <span className="text-xs text-[#8A94A0]">
                  {ambassador.country}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredAmbassadors.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-gray-400 text-sm"
        >
          No student ambassadors found matching current layout query.
        </motion.div>
      )}

    </div>
  );
}