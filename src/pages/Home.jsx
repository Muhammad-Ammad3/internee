import { motion } from "framer-motion";
import AIInterviews from "../components/Home/AIInterviews";
import CareerPath from "../components/Home/CareerPath";
import CareerLaunchpad from "../components/Home/CareerLaunchpad";
import Hero from "../components/Home/Hero";
import InstructorPortal from "../components/Home/InstructorPortal";
import Partners from "../components/Home/Partners";
import TaskPlatform from "../components/Home/TaskPlatform";
import Workflow from "../components/Home/Workflow";
import InternshipOpportunities from "../components/Home/InternshipOpportunities";
import LaunchCareer from "../components/Home/LaunchCareer";

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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
        <AnimatedSection>
          <Hero />
        </AnimatedSection>

        <AnimatedSection>
          <Partners />
        </AnimatedSection>

        <AnimatedSection>
          <InternshipOpportunities />
        </AnimatedSection>

        <AnimatedSection>
          <TaskPlatform />
        </AnimatedSection>

        <AnimatedSection>
          <InstructorPortal />
        </AnimatedSection>

        <AnimatedSection>
          <CareerLaunchpad />
        </AnimatedSection>

        <AnimatedSection>
          <AIInterviews />
        </AnimatedSection>

        <AnimatedSectionLate>
          <Workflow />
        </AnimatedSectionLate>

        <AnimatedSectionLate>
          <CareerPath />
        </AnimatedSectionLate>

        <AnimatedSectionLate>
          <LaunchCareer />
        </AnimatedSectionLate>
      </main>
    </motion.div>
  );
}

export default App;
