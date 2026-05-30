import { motion } from "framer-motion";
import OurJourneySection from "../components/StartupJourney/OurJourneySection";
import OurAchievements from "../components/StartupJourney/OurAchievements";
import OurCoreValues from "../components/StartupJourney/OurCoreValues";
import ImpactAndStartJourney from "../components/StartupJourney/ImpactAndStartJourney";

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

const StudentAmbassador = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="w-full bg-white"
    >
      <AnimatedSection className="w-full">
        <OurJourneySection />
      </AnimatedSection>

      <AnimatedSection className="w-full">
        <OurAchievements />
      </AnimatedSection>

      <AnimatedSectionLate className="w-full">
        <OurCoreValues />
      </AnimatedSectionLate>

      <AnimatedSectionLate className="w-full">
        <ImpactAndStartJourney />
      </AnimatedSectionLate>
    </motion.div>
  );
};

export default StudentAmbassador;
