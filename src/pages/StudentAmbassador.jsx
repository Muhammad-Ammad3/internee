import { motion } from "framer-motion";
import StudentAmbassadorsHero from "../components/StudentAmbassador/StudentAmbassadorsHero";
import AmbassadorBenefits from "../components/StudentAmbassador/AmbassadorBenefits";
import AmbassadorResponsibilities from "../components/StudentAmbassador/AmbassadorResponsibilities";
import CommunityImpactAndSteps from "../components/StudentAmbassador/CommunityImpactAndSteps";
import FaqsAndCtaBanner from "../components/StudentAmbassador/FaqsAndCtaBanner";

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.12,
      delayChildren: 0.1,
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
        <StudentAmbassadorsHero />
      </AnimatedSection>

      <AnimatedSection className="w-full">
        <AmbassadorBenefits />
      </AnimatedSection>

      <AnimatedSection className="w-full">
        <CommunityImpactAndSteps />
      </AnimatedSection>

      <AnimatedSectionLate className="w-full">
        <AmbassadorResponsibilities />
      </AnimatedSectionLate>

      <AnimatedSectionLate className="w-full">
        <FaqsAndCtaBanner />
      </AnimatedSectionLate>
    </motion.div>
  );
};

export default StudentAmbassador;
