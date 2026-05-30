import { motion } from "framer-motion";
import GraduateProgramHero from "../components/GraduatePrograme/GraduateProgramHero";
import GraduateFeatures from "../components/GraduatePrograme/GraduateFeatures";
import GraduateFaqAndCta from "../components/GraduatePrograme/GraduateFaqAndCta";
import GraduateTracks from "../components/GraduatePrograme/GraduateTracks";
import HowItWorksSteps from "../components/GraduatePrograme/HowItWorksSteps";

const pageTransitionVariants = {
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

const GraduateProgram = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="w-full bg-white"
    >
      <motion.div variants={sectionVariants}>
        <GraduateProgramHero />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        className="relative"
        viewport={{ once: true, margin: "-100px" }}
      >
        <GraduateFeatures />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <GraduateTracks />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <HowItWorksSteps />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        viewport={{ once: true, margin: "-50px" }}
      >
        <GraduateFaqAndCta />
      </motion.div>
    </motion.div>
  );
};

export default GraduateProgram;
