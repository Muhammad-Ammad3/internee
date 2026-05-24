import React from 'react';

const HowItWorksSteps = () => {
  // 4 Steps Dataset Array directly matching image content
  const steps = [
    {
      id: 1,
      title: "Choose Your Track",
      desc: "Select from 20+ specialized programs based on your interests and goals"
    },
    {
      id: 2,
      title: "Learn & Project",
      desc: "Complete structured lessons and work on real-world projects with mentors"
    },
    {
      id: 3,
      title: "Build Portfolio",
      desc: "Create a professional portfolio showcasing your verified skills"
    },
    {
      id: 4,
      title: "Land Your Job",
      desc: "Connect with hiring companies and start your career journey"
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 font-sans select-none">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-[40px] font-black text-gray-950 tracking-tight">
            How Our Programs Work
          </h2>
          <p className="text-gray-600 text-xs sm:text-[15px] font-medium tracking-wide">
            Simple steps to launch your career
          </p>
        </div>

        {/* ================= STEP CARDS GRID ================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-2 relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              
              {/* Individual Step Card */}
              <div className="w-full lg:w-[23%] min-h-[220px] bg-gradient-to-b from-[#f3f8f5] to-[#edf4fc] border border-[#e1edf5] rounded-[24px] p-7 flex flex-col justify-start space-y-4 shadow-[0_8px_25px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.02)] transition-all duration-300">
                
                {/* Green Number Badge */}
                <div className="w-8 h-8 rounded-full bg-[#3FB628] flex items-center justify-center text-white text-xs font-black shadow-sm">
                  {step.id}
                </div>

                {/* Content Area */}
                <div className="space-y-2">
                  <h3 className="text-base font-black text-gray-950 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs font-semibold leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>

              {/* Connecting Green Horizontal Line (Only between cards and only on Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block flex-grow h-[2px] bg-[#3FB628] max-w-[24px] self-center opacity-80" />
              )}

            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSteps;