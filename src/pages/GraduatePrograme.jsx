import React from 'react';
import GraduateProgramHero from '../components/GraduatePrograme/GraduateProgramHero';
import GraduateFeatures from '../components/GraduatePrograme/GraduateFeatures';
import GraduateFaqAndCta from '../components/GraduatePrograme/GraduateFaqAndCta';
import GraduateTracks from '../components/GraduatePrograme/GraduateTracks';
import HowItWorksSteps from '../components/GraduatePrograme/HowItWorksSteps';

const GraduateProgram = () => {
  return (
    <div className="w-full bg-white">
      <GraduateProgramHero />
      <GraduateFeatures />
      <GraduateTracks />
      <HowItWorksSteps />
      <GraduateFaqAndCta />
      
      {/* Agle dynamic sections yahan inject honge */}
    </div>
  );
};

export default GraduateProgram;