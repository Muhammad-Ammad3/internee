// import InternshipHero from '../components/Internship/InternshipHero';
// import CommunityAndBanner from '../components/Internship/CommunityAndBanner';
// import HowItWorks from '../components/Internship/HowItWorks';
// import InternshipGrid from '../components/Internship/InternshipGrid';

// const Internships = () => {
//   return (
//     <div className="w-full bg-white">
//       {/* Internship cards yahan render honge */}
//       <InternshipHero />
//       <InternshipGrid />
//       <HowItWorks />
//       <CommunityAndBanner />
//     </div>
//   );
// };

// export default Internships;


import React from "react";
import { motion } from "framer-motion";
import InternshipHero from '../components/Internship/InternshipHero';
import FAQSection from '../components/Internship/FAQSection';
import HowItWorks from '../components/Internship/HowItWorks';
import InternshipGrid from '../components/Internship/InternshipGrid';

// Page transition configuration
const pageTransition = {
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

// Animated section wrapper - Hero and first sections
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

// Animated section wrapper - Later sections with smaller margin
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

const Internships = () => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={pageTransition}
      className="w-full bg-white"
    >
      {/* Internship Hero Section - First section with larger margin */}
      <AnimatedSection className="w-full">
        <InternshipHero />
      </AnimatedSection>
      
      {/* Internship Grid Section */}
      <AnimatedSection className="w-full">
        <InternshipGrid />
      </AnimatedSection>
      
      {/* How It Works Section */}
      <AnimatedSectionLate className="w-full">
        <HowItWorks />
      </AnimatedSectionLate>
      
      {/* Community and Banner Section */}
      <AnimatedSectionLate className="w-full">
        <FAQSection />
      </AnimatedSectionLate>
      
      {/* Additional sections can be added here */}
    </motion.div>
  );
};

export default Internships;