// import OurJourneySection from '../components/StartupJourney/OurJourneySection';
// import OurAchievements from '../components/StartupJourney/OurAchievements';
// import OurCoreValues from '../components/StartupJourney/OurCoreValues';
// import ImpactAndStartJourney from '../components/StartupJourney/ImpactAndStartJourney';


// const StudentAmbassador = () => {
//   return (
//     <div className="w-full bg-white">
//       <OurJourneySection />
//       <OurAchievements />
//       <OurCoreValues />
//       <ImpactAndStartJourney />
//     </div>
//   );
// };

// export default StudentAmbassador;


import React from "react";
import { motion } from "framer-motion";
import OurJourneySection from '../components/StartupJourney/OurJourneySection';
import OurAchievements from '../components/StartupJourney/OurAchievements';
import OurCoreValues from '../components/StartupJourney/OurCoreValues';
import ImpactAndStartJourney from '../components/StartupJourney/ImpactAndStartJourney';

// Page transition configuration
const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Section animation variants
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

// Animated section wrapper for Hero sections
const AnimatedSection = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-100px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

// Animated section wrapper for content sections
const AnimatedSectionLate = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, margin: "-50px" }}
    variants={sectionVariants}
    className={className}
  >
    {children}
  </motion.div>
);

const StudentAmbassador = () => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="w-full bg-white"
    >
      {/* Our Journey Section - Main hero section */}
      <AnimatedSection className="w-full">
        <OurJourneySection />
      </AnimatedSection>
      
      {/* Our Achievements Section */}
      <AnimatedSection className="w-full">
        <OurAchievements />
      </AnimatedSection>
      
      {/* Our Core Values Section */}
      <AnimatedSectionLate className="w-full">
        <OurCoreValues />
      </AnimatedSectionLate>
      
      {/* Impact and Start Journey Section */}
      <AnimatedSectionLate className="w-full">
        <ImpactAndStartJourney />
      </AnimatedSectionLate>
      
      {/* Additional sections can be added here */}
    </motion.div>
  );
};

export default StudentAmbassador;