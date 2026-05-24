import React from 'react';

const HowItWorks = () => {
  // Array dataset holding structured information exactly matching image_559a4a.png
  const steps = [
    {
      id: 1,
      title: "Choose Your Path",
      desc: "Browse our diverse tracks and select the internship that aligns with your career goals."
    },
    {
      id: 2,
      title: "Accelerated Learning",
      desc: "Dive into hands-on projects, follow our structured guide, and start building."
    },
    {
      id: 3,
      title: "Get Certified",
      desc: "Complete your tasks, submit your final project, and receive your verified certificate."
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-16 px-6 lg:px-16 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* ================= SECTION CENTALIZED HEADER ================= */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-[38px] font-black text-[#111827] tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-500 text-xs sm:text-[15px] font-medium tracking-wide">
            Your path to an industry-ready career in three simple steps.
          </p>
        </div>

        {/* ================= VERTICAL STEP CARDS CONTAINER ================= */}
        <div className="space-y-4 pt-4">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white border border-gray-100/70 rounded-[20px] p-6 sm:p-8 flex items-start gap-5 sm:gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.02)] transition-all duration-300"
            >
              
              {/* Left Circular Green Numeric Counter Badge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#3FB628] flex items-center justify-center text-white text-sm sm:text-base font-black shrink-0 shadow-sm shadow-green-100">
                {step.id}
              </div>

              {/* Right Content Context Blocks */}
              <div className="space-y-1 pt-0.5 sm:pt-1">
                <h3 className="text-base sm:text-[17px] font-black text-gray-950 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-[13px] font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;