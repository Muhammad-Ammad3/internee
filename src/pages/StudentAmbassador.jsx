// import StudentAmbassadorsHero from '../components/StudentAmbassador/StudentAmbassadorsHero';
// import AmbassadorBenefits from '../components/StudentAmbassador/AmbassadorBenefits';
// import AmbassadorResponsibilities from '../components/StudentAmbassador/AmbassadorResponsibilities';
// import CommunityImpactAndSteps from '../components/StudentAmbassador/CommunityImpactAndSteps';
// import FaqsAndCtaBanner from '../components/StudentAmbassador/FaqsAndCtaBanner';


// const StudentAmbassador = () => {
//   return (
//     <div className="w-full bg-white">
//       <StudentAmbassadorsHero />
//       <AmbassadorBenefits />
//       <CommunityImpactAndSteps />
//       <AmbassadorResponsibilities />
//       <FaqsAndCtaBanner />
      
//       {/* Agle dynamic sections yahan inject honge */}
//     </div>
//   );
// };

// export default StudentAmbassador;



import React from "react";
import { motion } from "framer-motion";
import StudentAmbassadorsHero from '../components/StudentAmbassador/StudentAmbassadorsHero';
import AmbassadorBenefits from '../components/StudentAmbassador/AmbassadorBenefits';
import AmbassadorResponsibilities from '../components/StudentAmbassador/AmbassadorResponsibilities';
import CommunityImpactAndSteps from '../components/StudentAmbassador/CommunityImpactAndSteps';
import FaqsAndCtaBanner from '../components/StudentAmbassador/FaqsAndCtaBanner';

// Page transition configuration
const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.12,
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
      {/* Student Ambassadors Hero Section - Main hero section */}
      <AnimatedSection className="w-full">
        <StudentAmbassadorsHero />
      </AnimatedSection>
      
      {/* Ambassador Benefits Section */}
      <AnimatedSection className="w-full">
        <AmbassadorBenefits />
      </AnimatedSection>
      
      {/* Community Impact and Steps Section */}
      <AnimatedSection className="w-full">
        <CommunityImpactAndSteps />
      </AnimatedSection>
      
      {/* Ambassador Responsibilities Section */}
      <AnimatedSectionLate className="w-full">
        <AmbassadorResponsibilities />
      </AnimatedSectionLate>
      
      {/* FAQ and CTA Banner Section */}
      <AnimatedSectionLate className="w-full">
        <FaqsAndCtaBanner />
      </AnimatedSectionLate>
      
      {/* Additional dynamic sections can be injected here */}
    </motion.div>
  );
};

export default StudentAmbassador;