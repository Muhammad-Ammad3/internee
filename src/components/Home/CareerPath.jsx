import React, { useState } from 'react';

const CareerPath = () => {
  // Active feature tracking for interactive right-side preview element
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "AI Resume Building",
      desc: "Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.",
      icon: (
        <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      title: "Cover Letter Creation",
      desc: "Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.",
      icon: (
        <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Interview Preparation",
      desc: "Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.",
      icon: (
        <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Industry Insights",
      desc: "Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.",
      icon: (
        <svg className="w-5 h-5 text-[#3FB628]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        
        {/* ================= TOP BLOCK: TWO COLUMN HERO GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 bg-gray-100 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-wide text-gray-500 border border-gray-200/50">
              <span>🧭</span> Your AI Career Journey
            </div>
            <h2 className="text-3xl sm:text-[40px] font-black text-gray-950 tracking-tight leading-[1.15]">
              Master the AI Career Path
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed max-w-xl">
              Looking to kickstart your career in the AI industry? Our AI Career Coach platform offers expert guidance in resume building, cover letter creation, interview preparation, quizzes, and industry insights—all designed to help you land your dream job in Artificial Intelligence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button className="bg-[#3FB628] text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-[#349e1e] transition shadow-md shadow-green-100">
                Start Teaching Today
              </button>
              <button className="bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-full text-xs font-bold hover:bg-gray-50 transition">
                Explore Tools
              </button>
            </div>
          </div>

          {/* Right Interface Visual Box Block */}
          <div className="lg:col-span-6 bg-gray-50 border border-gray-100 rounded-[32px] p-6 sm:p-8 relative">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`p-3.5 rounded-xl border text-[11px] font-bold flex items-center gap-2.5 transition-all duration-200 cursor-pointer ${
                    activeTab === i 
                      ? 'bg-white border-[#3FB628] text-gray-900 shadow-sm' 
                      : 'bg-white/60 border-gray-200/40 text-gray-500 hover:bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="scale-90">{f.icon}</div>
                  <span>{f.title}</span>
                </div>
              ))}
            </div>

            {/* Simulated Path Status Bar Indicator */}
            <div className="bg-[#0F0F0F] rounded-2xl p-5 border border-neutral-900 text-white relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-neutral-400 tracking-wider uppercase block">Career Growth</span>
                  <h4 className="text-sm font-black tracking-tight text-white">Personalized Path</h4>
                </div>
                <span className="text-base text-[#3FB628] animate-pulse">✨</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full mt-5 overflow-hidden">
                <div 
                  className="bg-[#3FB628] h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(activeTab + 1) * 25}%` }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BLOCK: 2x2 DETAILED CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {features.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-100/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-[0_8px_24px_rgba(0,0,0,0.01)] hover:border-gray-200 hover:shadow-[0_12px_30px_rgba(63,182,40,0.03)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-black text-gray-950 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareerPath;