// import React from 'react';
// import GraduateProgramHero from '../components/GraduatePrograme/GraduateProgramHero';
// import GraduateFeatures from '../components/GraduatePrograme/GraduateFeatures';
// import GraduateFaqAndCta from '../components/GraduatePrograme/GraduateFaqAndCta';
// import GraduateTracks from '../components/GraduatePrograme/GraduateTracks';
// import HowItWorksSteps from '../components/GraduatePrograme/HowItWorksSteps';

// const GraduateProgram = () => {
//   return (
//     <div className="w-full bg-white">
//       <GraduateProgramHero />
//       <GraduateFeatures />
//       <GraduateTracks />
//       <HowItWorksSteps />
//       <GraduateFaqAndCta />
      
//       {/* Agle dynamic sections yahan inject honge */}
//     </div>
//   );
// };

// export default GraduateProgram;



import React from "react";
import { motion } from "framer-motion";
import GraduateProgramHero from '../components/GraduatePrograme/GraduateProgramHero';
import GraduateFeatures from '../components/GraduatePrograme/GraduateFeatures';
import GraduateFaqAndCta from '../components/GraduatePrograme/GraduateFaqAndCta';
import GraduateTracks from '../components/GraduatePrograme/GraduateTracks';
import HowItWorksSteps from '../components/GraduatePrograme/HowItWorksSteps';

// Page transition variants
const pageTransitionVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const GraduateProgram = () => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="w-full bg-white"
    >
      {/* Hero Section with staggered animation */}
      <motion.div variants={sectionVariants}>
        <GraduateProgramHero />
      </motion.div>
      
      {/* Features Section */}
      <motion.div 
        variants={sectionVariants}
        className="relative"
        viewport={{ once: true, margin: "-100px" }}
      >
        <GraduateFeatures />
      </motion.div>
      
      {/* Tracks Section */}
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <GraduateTracks />
      </motion.div>
      
      {/* How It Works Steps */}
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <HowItWorksSteps />
      </motion.div>
      
      {/* FAQ and CTA Section */}
      <motion.div 
        variants={sectionVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <GraduateFaqAndCta />
      </motion.div>
      
      {/* Additional dynamic sections will be injected here */}
    </motion.div>
  );
};

export default GraduateProgram;