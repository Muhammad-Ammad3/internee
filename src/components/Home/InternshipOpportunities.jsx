import React from 'react';

const InternshipOpportunities = () => {
  // Mock data matching the exact 6 layout category cards in your screenshots
  const categories = [
    {
      title: "Graphic Design",
      desc: "Master UI/UX, branding, and visual communication",
      bannerText: "LEARN DESIGN THAT STANDS OUT",
      badge: "BUILD REAL CREATIVE SKILLS",
      icon: "🎨" // Minimalist visual anchor placeholder
    },
    {
      title: "Chatbot Development",
      desc: "Build AI-powered conversational experiences",
      bannerText: "SMART AI BOTS THAT CONVERSE",
      badge: "HANDS-ON AI EXPERIENCE",
      icon: "🤖"
    },
    {
      title: "Frontend Internship",
      desc: "Create stunning, responsive web interfaces",
      bannerText: "BUILD REAL APPS FROM SCRATCH",
      badge: "REAL-WORLD APP PROJECTS",
      icon: "💻"
    },
    {
      title: "App Development",
      desc: "Design and develop mobile applications",
      bannerText: "BUILD REAL APPS FROM SCRATCH",
      badge: "REAL-WORLD APP PROJECTS",
      icon: "📱"
    },
    {
      title: "Backend Development",
      desc: "Build scalable APIs and server infrastructure",
      bannerText: "LEARN THE TECH BEHIND BIG APPS",
      badge: "REAL-WORLD BACKEND EXPERIENCE",
      icon: "⚙️"
    },
    {
      title: "Other Internships",
      desc: "Explore diverse tech career opportunities",
      bannerText: "SKILLS THAT LAST FOR EVERY ROLE",
      badge: "TRY SOMETHING NEW GROW WITH TECH",
      icon: "🚀"
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans">
      <div className="max-w-screen-2xl mx-auto space-y-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-4 py-1.5 shadow-sm">
            <span className="bg-[#3FB628] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider animate-pulse">
              Trending
            </span>
            <span className="text-xs font-bold text-gray-600 tracking-wide">
              Explore Internship Opportunities
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-[42px] font-black text-gray-950 tracking-tight leading-[1.15]">
            Your Dream Internship <br className="hidden sm:inline" />
            is Just One <span className="text-[#3FB628]">Click Away!</span>
          </h2>
          
          <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wide">
            Choose from 10+ in-demand tech tracks and start building real-world skills today.
          </p>
        </div>

        {/* ================= RESPONISVE 3-COLUMN CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {categories.map((item, idx) => (
            <div 
              key={idx}
              className="group bg-white border border-gray-100 rounded-[28px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(63,182,40,0.06)] hover:border-gray-200/80 transition-all duration-300 flex flex-col"
            >
              
              {/* Inner Abstract Mockup Frame Section (Top Half Dark Block) */}
              <div className="bg-[#242424] p-6 h-48 relative flex flex-col justify-between overflow-hidden">
                {/* Simulated geometric layout branding accent */}
                <div className="absolute top-4 right-4 text-[11px] font-bold text-neutral-500 tracking-tight flex items-center gap-1 opacity-80">
                  <span className="text-[#3FB628] text-xs">🎓</span> internee.pk
                </div>
                
                <div className="space-y-2 relative z-10 max-w-[70%] mt-auto">
                  <span className="inline-block bg-white/10 backdrop-blur-md text-[9px] font-extrabold text-neutral-300 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <h4 className="text-white text-base sm:text-lg font-black tracking-tight leading-snug">
                    {item.bannerText}
                  </h4>
                </div>

                {/* Big Absolute Graphic Character Vector Layout Base */}
                <div className="absolute right-3 bottom-2 text-[72px] opacity-25 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 select-none">
                  {item.icon}
                </div>
                
                {/* Smooth Dark Radial Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Content Metadata Info Block */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-6 bg-white">
                <div className="space-y-1.5">
                  <h3 className="text-base font-black text-gray-900 tracking-tight group-hover:text-[#3FB628] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-semibold leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Interactive Dynamic Action Anchor Link */}
                <button className="w-full bg-[#3FB628] text-white py-3 px-4 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 hover:bg-[#349e1e] transition-all duration-200 shadow-md shadow-green-100 group-hover:shadow-green-200">
                  <span>Apply Now</span>
                  <svg 
                    className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InternshipOpportunities;