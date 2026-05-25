import React from 'react';

export default function CommunityImpactAndSteps() {
  const stats = [
    { value: "300+", label: "Active Ambassadors", sub: "Across Pakistan" },
    { value: "50+", label: "Campuses", sub: "Represented" },
    { value: "1000+", label: "Events", sub: "Organized" },
    { value: "15K+", label: "Students", sub: "Reached" }
  ];

  const steps = [
    {
      number: "1",
      title: "Apply Online",
      description: "Fill out the application form and tell us about yourself"
    },
    {
      number: "2",
      title: "Get Verified",
      description: "Undergo quick eligibility check and assessment"
    },
    {
      number: "3",
      title: "Training",
      description: "Attend onboarding and receive ambassador tools & resources"
    },
    {
      number: "4",
      title: "Start Representing",
      description: "Organize events and grow Internee.pk on your campus"
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased space-y-32 px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto">
      
      {/* ==========================================
          1. AMBASSADOR COMMUNITY IMPACT SECTION
          ========================================== */}
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            Ambassador Community Impact
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Join a thriving community making real impact
          </p>
        </div>

        {/* Stats Grid Layout (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[#F4F6F5]/60 border border-gray-100 rounded-2xl p-8 text-center flex flex-col justify-center items-center min-h-[160px] shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:scale-[1.02] transition-transform duration-200"
            >
              <span className="text-3xl md:text-4xl font-black text-[#43A047] tracking-tight">
                {stat.value}
              </span>
              <h4 className="font-bold text-gray-900 text-sm md:text-base mt-2 tracking-tight">
                {stat.label}
              </h4>
              <p className="text-gray-400 text-[11px] md:text-xs mt-1 font-medium">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ==========================================
          2. HOW TO BECOME AN AMBASSADOR SECTION
          ========================================== */}
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            How to Become an Ambassador
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Simple steps to join our growing community
          </p>
        </div>

        {/* Steps Horizontal/Vertical Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              
              {/* Main Step Card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-start min-h-[200px] shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all z-10 relative">
                
                {/* Step Circle Number */}
                <div className="w-8 h-8 rounded-full bg-[#43A047] text-white flex items-center justify-center text-xs font-bold mb-6 shadow-sm shadow-green-600/20">
                  {step.number}
                </div>

                {/* Step Text Content */}
                <div className="space-y-2 mt-auto">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line Indicator (Only visible on Large Screens desktop and avoids last card) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-[#43A047] to-transparent z-0 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}