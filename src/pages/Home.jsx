import { motion } from "framer-motion";
import AIInterviews from '../components/Home/AIInterviews';
import CareerPath from '../components/Home/CareerPath';
import CareerLaunchpad from '../components/Home/CareerLaunchpad'; 
import Hero from '../components/Home/Hero'; 
import InstructorPortal from '../components/Home/InstructorPortal';
import Partners from '../components/Home/Partners'; 
import TaskPlatform from '../components/Home/TaskPlatform'; 
import Workflow from '../components/Home/Workflow'; 
import InternshipOpportunities from '../components/Home/InternshipOpportunities'; 
import LaunchCareer from '../components/Home/LaunchCareer'; 

// Page transition configuration
const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// Section animation variants
const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Animated section wrapper component
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

// Animated section with smaller margin for sections lower on page
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

function App() {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={pageTransition}
      className="w-full min-h-screen bg-white text-gray-900 antialiased selection:bg-green-100 selection:text-green-700"
    >
      
      <main>
        {/* Hero Section - First animation */}
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        
        {/* Partners Section */}
        <AnimatedSection>
          <Partners />
        </AnimatedSection>
        
        {/* Internship Opportunities */}
        <AnimatedSection>
          <InternshipOpportunities />
        </AnimatedSection>
        
        {/* Task Platform */}
        <AnimatedSection>
          <TaskPlatform />
        </AnimatedSection>
        
        {/* Instructor Portal */}
        <AnimatedSection>
          <InstructorPortal />
        </AnimatedSection>
        
        {/* Career Launchpad */}
        <AnimatedSection>
          <CareerLaunchpad />
        </AnimatedSection>
        
        {/* AI Interviews */}
        <AnimatedSection>
          <AIInterviews />
        </AnimatedSection>
        
        {/* Workflow */}
        <AnimatedSectionLate>
          <Workflow />
        </AnimatedSectionLate>
        
        {/* Career Path */}
        <AnimatedSectionLate>
          <CareerPath />
        </AnimatedSectionLate>
        
        {/* Launch Career */}
        <AnimatedSectionLate>
          <LaunchCareer />
        </AnimatedSectionLate>
      </main>
      
    </motion.div>
  );
}

export default App;