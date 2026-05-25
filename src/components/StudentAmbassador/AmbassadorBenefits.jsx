import React from 'react';
import { 
  Gift, 
  Star, 
  BookOpen, 
  Rocket, 
  Globe, 
  Award 
} from 'lucide-react';

export default function AmbassadorBenefits() {
  const perks = [
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Exclusive Stipend",
      description: "Earn competitive stipend based on performance and events organized"
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Priority Recognition",
      description: "Get featured on Internee.pk social media and internal platforms"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Free Learning Resources",
      description: "Access premium courses and certifications at no cost"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Startup Support",
      description: "Launch your own startup with mentorship and resources"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Networking",
      description: "Connect with 300+ ambassadors and industry professionals"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Career Opportunities",
      description: "Direct pathway to internships and full-time positions"
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased px-6 py-16 md:px-16 md:py-24 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
          Ambassador Benefits & Perks
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Get exclusive rewards, recognition, and opportunities as a Student Ambassador
        </p>
      </div>

      {/* Perks Grid Layout (3 Columns on Desktop, 1 on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {perks.map((perk, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-start justify-between min-h-[220px] shadow-[0_4px_20px_rgb(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.03)] transition-all group"
          >
            {/* Icon Container with Light Green Background */}
            <div className="p-3 bg-[#E8F5E9] text-[#43A047] rounded-xl mb-6 transition-transform group-hover:scale-105">
              {perk.icon}
            </div>

            {/* Content Area */}
            <div className="space-y-2 mt-auto w-full">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                {perk.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-normal">
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}