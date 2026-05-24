import React from 'react';

const Partners = () => {
  // Aap placeholders ki jagah actual image paths bhi daal sakte hain baad mein
  const partnersData = [
    { name: 'Google Cloud', icon: '☁️' },
    { name: 'BEE Pakistan 2024', icon: '🌟' },
    { name: 'Microsoft Founders Hub', icon: '💻' },
    { name: 'ITG', icon: '🌐' },
    { name: 'NATIONAL EXPANSION PLAN OF NICS', icon: '🗺️' },
    { name: 'PITB', icon: '🏛️' }
  ];

  return (
    <section className="w-full bg-white py-12 border-b border-gray-100 font-sans">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 text-center">
        
        {/* Section Heading */}
        <p className="text-[11px] sm:text-[12px] font-bold text-gray-400 tracking-[0.15em] uppercase mb-10">
          COLLABORATED WITH TRUSTED WORLDWIDE PARTNERS
        </p>

        {/* Logos Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          
          {/* Logo 1: Google Cloud */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl mb-1 text-blue-500">☁️</div>
            <span className="text-xs font-bold text-gray-700 tracking-tight">Google Cloud</span>
          </div>

          {/* Logo 2: BEE Pakistan */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl mb-1 text-green-700">🇵🇰</div>
            <span className="text-[10px] font-extrabold text-gray-800 leading-none">BEE PAKISTAN</span>
            <span className="text-[9px] text-gray-400 font-bold">2024</span>
          </div>

          {/* Logo 3: Microsoft Founders Hub */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider leading-none">Microsoft</div>
            <div className="text-[9px] text-gray-400 leading-none">for Startups</div>
            <span className="text-sm font-black text-gray-800 mt-1">Founders Hub</span>
          </div>

          {/* Logo 4: ITG */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-black italic text-gray-800 tracking-tighter">ITG</span>
          </div>

          {/* Logo 5: National Expansion Plan */}
          <div className="flex flex-col items-center justify-center text-center max-w-[130px]">
            <span className="text-[10px] font-black text-gray-800 tracking-tight leading-tight">NATIONAL EXPANSION PLAN</span>
            <span className="text-[9px] text-gray-400 font-bold">OF NICS</span>
          </div>

          {/* Logo 6: PITB */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl mb-1 text-amber-600">🏛️</div>
            <span className="text-[11px] font-black text-gray-800 tracking-widest">PITB</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Partners;