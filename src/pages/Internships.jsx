import { motion } from "framer-motion";
import InternshipHero from "../components/Internship/InternshipHero";
import FAQSection from "../components/Internship/FAQSection";
import HowItWorks from "../components/Internship/HowItWorks";
import InternshipGrid from "../components/Internship/InternshipGrid";

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
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

const Internships = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageTransition}
      className="w-full bg-white"
    >
      <AnimatedSection className="w-full">
        <InternshipHero />
      </AnimatedSection>

      <AnimatedSection className="w-full">
        <InternshipGrid />
      </AnimatedSection>

      <AnimatedSectionLate className="w-full">
        <HowItWorks />
      </AnimatedSectionLate>

      <AnimatedSectionLate className="w-full">
        <FAQSection />
      </AnimatedSectionLate>
    </motion.div>
  );
};

export default Internships;
