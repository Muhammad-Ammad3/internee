import React from 'react';

const GraduateFeatures = () => {
  // 6 Core Features Dataset Array from image_56120e.png
  const features = [
    {
      id: 1,
      title: "Career-Focused Curriculum",
      desc: "Programs aligned with current industry demands and hiring requirements.",
      icon: "🎯",
      iconBg: "bg-green-50 text-green-600"
    },
    {
      id: 2,
      title: "Expert Mentorship",
      desc: "Learn from professionals working at top tech companies worldwide.",
      icon: "👥",
      iconBg: "bg-green-50 text-green-600 border border-green-100" // matching active highlight block
    },
    {
      id: 3,
      title: "Job Placement Support",
      desc: "Direct connections with hiring partners and job interview prep.",
      icon: "📈",
      iconBg: "bg-green-50 text-green-600"
    },
    {
      id: 4,
      title: "Verified Certificates",
      desc: "Industry-recognized credentials that boost your resume.",
      icon: "🏅",
      iconBg: "bg-green-50 text-green-600"
    },
    {
      id: 5,
      title: "Flexible Scheduling",
      desc: "Learn at your own pace with live and recorded sessions.",
      icon: "🕒",
      iconBg: "bg-green-50 text-green-600"
    },
    {
      id: 6,
      title: "Real Projects",
      desc: "Work on actual client projects and build portfolio pieces.",
      icon: "⚡",
      iconBg: "bg-green-50 text-green-600"
    }
  ];

  // Bottom 4 Metrics/Stats Counters Array from image_56120e.png
  const stats = [
    { value: "500+", label: "Graduates", subtext: "Successfully Placed" },
    { value: "95%", label: "Job Rate", subtext: "Within 3 Months" },
    { value: "2.5x", label: "Avg Salary", subtext: "Growth Rate" },
    { value: "4.9/5", label: "Student", subtext: "Satisfaction" }
  ];

  return (
    <section className="w-full bg-[#fcfcfc] py-20 px-6 lg:px-16 font-sans select-none">
      <div className="max-w-screen-2xl mx-auto space-y-16">
        
        {/* ================= HEADER SEGMENT ================= */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-[38px] font-black text-gray-950 tracking-tight">
            Why Choose Our Graduate Programs?
          </h2>
          <p className="text-gray-400 text-xs sm:text-[14px] font-semibold leading-relaxed">
            Designed by industry experts for modern graduates seeking accelerated career growth.
          </p>
        </div>

        {/* ================= 6 FEATURES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => (
            <div 
              key={item.id}
              className={`bg-white border rounded-[22px] p-6 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.015)] transition-all duration-300 ${
                item.id === 2 ? 'border-green-200 shadow-[0_10px_30px_rgba(63,182,40,0.03)]' : 'border-gray-100/90'
              }`}
            >
              {/* Circular Icon Wrapper */}
              <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center text-base`}>
                {item.icon}
              </div>

              {/* Text Layout */}
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-gray-950 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs font-semibold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM 4 STATS COUNTERS ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {stats.map((stat, i) => (
            <div 
              key={i}
              className="bg-gradient-to-b from-white to-[#f9fbf9] border border-gray-100/80 rounded-[20px] p-6 text-center space-y-1 shadow-[0_8px_25px_rgba(0,0,0,0.005)]"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#3FB628] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-black text-gray-950 tracking-tight">
                {stat.label}
              </div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GraduateFeatures;