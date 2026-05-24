import React from 'react';

const AIInterviews = () => {
  // Right stacked layout cards data
  const rightFeatures = [
    {
      id: 1,
      icon: (
        <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Realistic AI Interview Simulations",
      desc: "Simulate real interview environments powered by AI. Perfect for students seeking online internship interview practice or job readiness."
    },
    {
      id: 2,
      icon: (
        <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart Feedback with AI",
      desc: "Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates."
    },
    {
      id: 3,
      icon: (
        <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Role-Based Mock Interviews",
      desc: "Practice interviews for software engineering, product management, business, and digital marketing roles in our internee.pk platform."
    }
  ];

  // Bottom row grid items data
  const bottomCards = [
    {
      id: 1,
      badge: "🏅",
      title: "Build Real Interview Confidence",
      desc: "Reduce anxiety and increase success rate through repeated AI-based mock interview sessions."
    },
    {
      id: 2,
      badge: "📈",
      title: "Become Job-Ready Fast",
      desc: "Structured interview training that prepares you for real-world scenarios. Perfect for students applying for internships."
    },
    {
      id: 3,
      badge: "📄",
      title: "Track Progress with Reports",
      desc: "Access detailed performance reports you can share with mentors and hiring managers."
    }
  ];

  return (
    <section className="w-full bg-[#0A0A0A] text-gray-100 py-24 px-6 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-screen-2xl mx-auto space-y-20">
        
        {/* ================= TOP CONTENT LAYER (SPLIT VIEW) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Header Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#162512] text-[#42c729] rounded-full px-4 py-1.5 border border-[#224419]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3FB628] animate-pulse"></span>
              <span className="font-bold tracking-wider uppercase text-[10px]">AI Mock Interviews</span>
            </div>
            
            <h2 className="text-3xl sm:text-[42px] font-bold text-white leading-[1.15] tracking-tight">
              Ace Your Internship <br className="hidden sm:inline" /> Interviews with AI Practice
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md font-medium">
              Get realistic, role-specific mock interviews for tech, marketing, and business. Receive instant feedback and build confidence before the real interview.
            </p>
            
            <div className="pt-2">
              <button className="bg-[#3FB628] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#349e1e] transition-all duration-300 shadow-lg shadow-green-900/20 flex items-center gap-2 group">
                <span>Apply Now</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side Stacked List */}
          <div className="lg:col-span-7 space-y-4">
            {rightFeatures.map((item) => (
              <div 
                key={item.id}
                className="bg-[#121212] border border-gray-900 rounded-2xl p-6 flex gap-5 hover:border-gray-800 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#161f14] border border-[#23381e] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#3FB628] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= BOTTOM 3-COLUMN FEATURE MATRIX ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-900">
          {bottomCards.map((card) => (
            <div 
              key={card.id}
              className="bg-[#111111]/40 border border-gray-900/80 p-8 rounded-2xl space-y-4 hover:bg-[#121212] hover:border-gray-800 transition-all duration-300 group"
            >
              <div className="text-2xl bg-[#161616] w-12 h-12 rounded-xl flex items-center justify-center border border-gray-800 shadow-inner group-hover:scale-105 transition-transform">
                {card.badge}
              </div>
              
              <div className="space-y-2">
                <h4 className="text-[16px] font-bold text-gray-100 group-hover:text-[#3FB628] transition-colors">
                  {card.title}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIInterviews;