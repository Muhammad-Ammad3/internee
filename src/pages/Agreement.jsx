import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Agreement = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleContinue = () => {
    if (isAgreed) {
      navigate("/studentambassadors/apply");
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen bg-neutral-50/40 font-sans px-4 sm:px-8 lg:px-24 pt-12 pb-20 text-left selection:bg-green-100 selection:text-green-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="mb-3">
          <span className="bg-neutral-100 text-gray-600 text-sm font-semibold px-4 py-1.5 rounded-full border border-neutral-200/50">
            Student Ambassador
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-neutral-800 tracking-tight">
            Registration Agreement
          </h1>
          <p className="text-gray-600 text-sm font-medium leading-relaxed">
            Please review the requirements and confirm your eligibility to
            continue the application.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full bg-white border border-neutral-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-neutral-100/70 relative"
        >
          <button className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer text-lg p-1">
            &times;
          </button>

          <div className="space-y-6">
            <h2 className="text-2xl font-medium text-neutral-900 tracking-tight">
              Internee.pk Student Ambassador Registration
            </h2>

            <p className="text-gray-600 text-md leading-relaxed font-medium">
              Thank you for your interest in the Internee.pk Student Ambassadors
              program. If you would like to become a Student Ambassador, please
              fill out this registration with valid information. Please note,
              students must meet activity requirements to be invited. If you
              have any questions, contact Internee.pk Global Support.
            </p>

            <div className="w-full bg-neutral-50/80 border border-neutral-100 rounded-2xl p-5 sm:p-6 space-y-5">
              <h3 className="text-md font-medium text-neutral-800 tracking-tight">
                All registering students must:
              </h3>

              <ul className="space-y-3 pl-4 list-disc text-gray-600 text-xs sm:text-sm font-medium">
                <li className="marker:text-gray-500">
                  Be at least 16 years old.
                </li>
                <li className="marker:text-gray-500">
                  Be enrolled full-time in an accredited institution.
                </li>
                <li className="marker:text-gray-500">
                  Not be an Internee.pk employee or current contractor.
                </li>
              </ul>

              <div className="space-y-3 pt-2 border-t border-neutral-200/50 text-xs sm:text-[13px] text-gray-500 font-medium leading-relaxed">
                <p>
                  Your information is subject to the Internee.pk Privacy
                  Statement. If your registration is not completed, your data
                  will be removed within twelve months. For removal requests,
                  contact{" "}
                  <span className="text-neutral-500 underline cursor-pointer hover:text-neutral-700">
                    support@internee.pk
                  </span>
                  .
                </p>
                <p>
                  By completing this registration, you agree to the Internee.pk
                  Privacy Statement and confirm your eligibility.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 select-none">
              <label className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 bg-white border-2 border-neutral-300 rounded-md peer-checked:bg-[#3ca81a] peer-checked:border-[#3ca81a] transition-all flex items-center justify-center">
                  <svg
                    className={`w-3 h-3 text-white transition-transform ${isAgreed ? "scale-100" : "scale-0"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-gray-500 pl-2 text-xs sm:text-sm font-semibold tracking-wide">
                  I agree to the terms and conditions
                </span>
              </label>
            </div>

            <div className="flex justify-end pt-4">
              <button
                disabled={!isAgreed}
                onClick={handleContinue}
                className={`text-sm font-bold px-7 py-3 rounded-full transition-all duration-300 ${
                  isAgreed
                    ? "bg-[#3ca81a] hover:bg-[#328f15] text-white shadow-md shadow-green-600/10 cursor-pointer"
                    : "bg-[#3ca81a]/40 text-white/80 cursor-not-allowed"
                }`}
              >
                Agree and Continue
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Agreement;
