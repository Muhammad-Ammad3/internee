import React from 'react';

const InternshipGrid = () => {
  // Complete tracks dataset array containing accurate image_5596a5.png values
  const tracks = [
    {
      id: 1,
      title: "Graphic Design",
      desc: "Master UI/UX, branding, and visual communication",
      bgText: "LEARN DESIGN THAT STANDS OUT",
      subTag: "BUILD REAL CREATIVE SKILLS",
      icon: "🎨", // Placeholder vector: Aap imagery paths custom static src bhi de sakte hain
      color: "from-blue-500/10 to-transparent"
    },
    {
      id: 2,
      title: "Chatbot Development",
      desc: "Build AI-powered conversational experiences",
      bgText: "SMART AI BOTS THAT CONVERSE",
      subTag: "HANDS-ON AI EXPERIENCE",
      icon: "🤖",
      color: "from-purple-500/10 to-transparent"
    },
    {
      id: 3,
      title: "Frontend Internship",
      desc: "Create stunning, responsive web interfaces",
      bgText: "BUILD REAL APPS FROM SCRATCH",
      subTag: "REAL-WORLD APP PROJECTS",
      icon: "💻",
      color: "from-cyan-500/10 to-transparent"
    },
    {
      id: 4,
      title: "App Development",
      desc: "Design and develop mobile applications",
      bgText: "BUILD REAL APPS FROM SCRATCH",
      subTag: "REAL-WORLD APP PROJECTS",
      icon: "📱",
      color: "from-indigo-500/10 to-transparent"
    },
    {
      id: 5,
      title: "Backend Development",
      desc: "Build scalable APIs and server infrastructure",
      bgText: "LEARN THE TECH BEHIND BIG APPS",
      subTag: "REAL-WORLD BACKEND EXPERIENCE",
      icon: "⚙️",
      color: "from-orange-500/10 to-transparent"
    },
    {
      id: 6,
      title: "Other Internships",
      desc: "Explore diverse tech career opportunities",
      bgText: "SKILLS THAT LAST FOR EVERY ROLE",
      subTag: "TRY SOMETHING NEW GROW WITH TECH",
      icon: "🚀",
      color: "from-emerald-500/10 to-transparent"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-16 font-sans">
      <div className="max-w-screen-2xl mx-auto space-y-12">
        
        {/* ================= SECTION MASTER HEADER TITLE ================= */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-[40px] font-black text-gray-950 tracking-tight">
            Explore Our <span className="text-[#3FB628]">Internship Tracks</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-[14px] font-semibold tracking-wide">
            Choose from 10+ in-demand tech tracks and start building real-world skills today.
          </p>
        </div>

        {/* ================= COMPACT CARDS RESPONSIVE GRID LAYOUT ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {tracks.map((track) => (
            <div 
              key={track.id} 
              className="bg-white border border-gray-100 rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between group"
            >
              
              {/* Top Custom Visual Card Frame Block */}
              <div className="relative h-44 bg-[#232323] p-5 flex flex-col justify-between overflow-hidden">
                {/* Asymmetric Light Glow Flare Backdrop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-40`} />
                
                {/* Branding Small Minimal Watermark Logomark Row */}
                <div className="w-full flex justify-end relative z-10">
                  <div className="text-[10px] text-white/40 font-black tracking-tighter">
                    Internee<span className="text-[#3FB628]">.pk</span>
                  </div>
                </div>

                {/* Conceptual Card Artwork Text Content Layout */}
                <div className="relative z-10 max-w-[65%] space-y-1">
                  <h4 className="text-white font-black text-sm leading-tight tracking-wide uppercase">
                    {track.bgText}
                  </h4>
                  <span className="inline-block bg-white/10 text-white/60 text-[8px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-sm">
                    {track.subTag}
                  </span>
                </div>

                {/* Right Floating Core 3D Graphic Placeholder Canvas Frame */}
                <div className="absolute right-4 bottom-4 w-20 h-20 bg-neutral-800/80 border border-neutral-700/50 rounded-2xl flex items-center justify-center text-3xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {track.icon}
                </div>

                {/* Sleek Bottom Wave Slicing Geometry Vector */}
                <div className="absolute left-0 bottom-0 right-0 h-3 bg-white rounded-t-xl z-20" />
              </div>

              {/* Bottom Metadata Text Content Panel */}
              <div className="p-6 pt-3 flex-grow flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <h3 className="text-base font-black text-gray-950 tracking-tight">
                    {track.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-semibold leading-relaxed min-h-[36px]">
                    {track.desc}
                  </p>
                </div>

                {/* Primary Action Button Link Component */}
                <button className="w-full bg-[#3FB628] hover:bg-[#349e1e] text-white text-xs font-black py-3 rounded-xl transition-all duration-200 shadow-sm tracking-wide">
                  Apply Now
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InternshipGrid;