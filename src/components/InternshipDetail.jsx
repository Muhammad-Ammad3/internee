import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocationDot,
  faClock,
  faArrowUpRightFromSquare,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import photoshop from "../assets/photoshop.png";
import ai from "../assets/ai.png";
import maya from "../assets/maya.png";
import figma from "../assets/figmaIcon.png";
import alexa from "../assets/alexa.png";
import dialogflow from "../assets/dialogflow.png";
import salesforce from "../assets/salesforce.png";
import rasa from "../assets/rasa.png";
import genrative from "../assets/genrative.png";
import htmlcssjs from "../assets/htmlcssjs.png";
import net from "../assets/net.png";
import nextjs from "../assets/nextjs.png";
import react from "../assets/React.png";
import angular from "../assets/angular.png";
import django from "../assets/django.png";
import wordpress from "../assets/wordpress.png";
import php from "../assets/php.png";
import mean from "../assets/mean.png";
import web3 from "../assets/web3.png";
import nodejs from "../assets/nodejs.png";
import mern from "../assets/mern.png";
import flutter from "../assets/flutter.png";
import reactNative from "../assets/react-native.png";
import swift from "../assets/Swift.png";
import andriod from "../assets/andriod.png";
import analyst from "../assets/analyst.png";
import cyber from "../assets/cyber.png";
import machineLearning from "../assets/machineLearning.png";
import marketing from "../assets/marketing.png";
import cloud from "../assets/cloud.png";
import dataScience from "../assets/dataScience.png";
import technicalWriting from "../assets/technicalWriting.png";

const trackData = {
  "graphic-design": {
    mainTitle: "Graphic Design",
    highlight: "Program",
    tagline:
      "Launch your career in Graphic Design with our hands-on, remote-first internship. Join thousands of students building the future of tech.",
    subTracks: [
      {
        title: "Photoshop Internship",
        logo: photoshop,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Illustrator Internship",
        logo: ai,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Autodesk Maya Internship",
        logo: maya,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Figma Internship",
        logo: figma,
        type: "Remote",
        duration: "2 Months",
      },
    ],
  },
  "chatbot-development": {
    mainTitle: "Chatbot Development",
    highlight: "Program",
    tagline:
      "Launch your career in Chatbot Development with our hands-on, remote-first internship. Join thousands of students building the future of tech.",
    subTracks: [
      {
        title: "Dialogflow Internship",
        logo: dialogflow,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Alexa Skill Internship",
        logo: alexa,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "RASA Internship",
        logo: rasa,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Genrative AI Internship",
        logo: genrative,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Salesforce CRM Internship",
        logo: salesforce,
        type: "Remote",
        duration: "2 Months",
      },
    ],
  },
  "frontend-development": {
    mainTitle: "Frontend Development",
    highlight: "Program",
    tagline:
      "Master HTML5, CSS3, JavaScript, and modern frameworks like React 19 & Next.js. Build pixel-perfect web experiences.",
    subTracks: [
      {
        title: "React.js Internship",
        logo: react,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Next.js Internship",
        logo: nextjs,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "HTML CSS JS Internship",
        logo: htmlcssjs,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: ".NET Core Internship",
        logo: net,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Django Internship",
        logo: django,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Wordpress Internship",
        logo: wordpress,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Angular Internship",
        logo: angular,
        type: "Remote",
        duration: "2 Months",
      },
    ],
  },
  "backend-development": {
    mainTitle: "Backend Development",
    highlight: "Program",
    tagline:
      "Build secure, industry-standard server-side infrastructure, databases, and optimized APIs.",
    subTracks: [
      {
        title: "MEAN Stack Internship",
        logo: mean,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "PHP Development",
        logo: php,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Web 3.0 Internship",
        logo: web3,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "NodeJS Internship",
        logo: nodejs,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "MERN Stack Internship",
        logo: mern,
        type: "Remote",
        duration: "2 Months",
      },
    ],
  },
  "app-development": {
    mainTitle: "App Development",
    highlight: "Program",
    tagline:
      "Dive into mobile application development and build native or cross-platform apps for iOS and Android.",
    subTracks: [
      {
        title: "Flutter Internship",
        logo: flutter,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "React Native Internship",
        logo: reactNative,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Swift Internship",
        logo: swift,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Andriod Internship",
        logo: andriod,
        type: "Remote",
        duration: "2 Months",
      },
    ],
  },
  "other-internships": {
    mainTitle: "Other Tech",
    highlight: "Tracks",
    tagline:
      "Explore various fields in the modern technology stack to start your career.",
    subTracks: [
      {
        title: "Data Science Internship",
        logo: dataScience,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Cyber Security Internship",
        logo: cyber,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Social Media Internship",
        logo: technicalWriting,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Cloud Internship",
        logo: cloud,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Data Analyst",
        logo: analyst,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Machine Learning",
        logo: machineLearning,
        type: "Remote",
        duration: "2 Months",
      },
      {
        title: "Video Editing Internship",
        logo: marketing,
        type: "Remote",
        duration: "2 Months",
      },
    ],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const arrowVariants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 3,
    y: -3,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const backArrowVariants = {
  initial: { x: 0 },
  hover: {
    x: -4,
    transition: { repeat: Infinity, repeatType: "reverse", duration: 0.4 },
  },
};

const InternshipDetail = () => {
  const { trackId } = useParams();
  const currentTrack = trackData[trackId];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [trackId]);

  if (!currentTrack) {
    return (
      <div className="w-full text-center py-20 font-sans">
        <h2 className="text-xl font-bold text-gray-800">Track Not Found</h2>
        <Link to="/" className="text-[#50d523] underline mt-2 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen bg-white font-sans px-6 lg:px-24 pt-6 pb-10 selection:bg-green-100"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors inline-flex items-center gap-2 mb-8 group"
          >
            <motion.span
              variants={backArrowVariants}
              initial="initial"
              whileHover="hover"
              className="inline-block"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </motion.span>
            <span>Back to Internships</span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-4 mb-16 text-left"
        >
          <div className="inline-block bg-[#50d523] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Available Now
          </div>
          <span className="text-sm font-semibold text-gray-500 ml-3">
            Verified Professional Tracks
          </span>

          <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
            {currentTrack.mainTitle}{" "}
            <span className="text-[#50d523]">{currentTrack.highlight}</span>
          </h1>
          <p className="text-gray-600 text-md max-w-3xl leading-relaxed">
            {currentTrack.tagline}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center space-y-2 mb-12"
        >
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
            Explore Your Next <span className="text-[#50d523]">Internship</span>
          </h2>
          <p className="text-gray-600 text-md font-medium max-w-md mx-auto">
            Handpicked opportunities to elevate your career and build real-world
            expertise in this program.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {currentTrack.subTracks.map((track, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white border border-gray-100 rounded-2xl shadow-xs overflow-hidden flex flex-col p-5 group transition-all duration-300 hover:shadow-xl hover:border-transparent"
              style={{ originY: 0.5 }}
            >
              <div className="w-full h-44 bg-neutral-50 rounded-xl flex items-center justify-center p-6 mb-5 border border-neutral-100 overflow-hidden relative">
                <motion.img
                  variants={{
                    hover: { scale: 1.06, rotate: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  src={track.logo}
                  alt={track.title}
                  className="max-h-full max-w-[70%] object-contain select-none z-10"
                  onError={(e) => {
                    e.target.src =
                      "https://ui-avatars.com/api/?name=Tech&background=f0fdf4&color=50d523";
                  }}
                />
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/1.5 transition-colors duration-300" />
              </div>

              <div className="flex-1 space-y-3 text-left">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#50d523] transition-colors duration-200">
                  {track.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 font-medium">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="text-[#50d523] w-3.5"
                    />
                    <span>{track.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-blue-500 w-3.5"
                    />
                    <span>{track.duration}</span>
                  </div>
                  <div className="text-[#50d523] font-bold text-[10px] tracking-wider uppercase pt-1 flex items-center gap-1.5">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="text-[14px]"
                    />
                    <span>Internship</span>
                  </div>
                </div>
              </div>

              <motion.button
                variants={{
                  hover: { scale: 1.02, backgroundColor: "#49ba23" },
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="w-full bg-[#50d523] text-white text-md font-medium py-3 px-4 rounded-2xl mt-5 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply Now</span>
                <motion.span
                  variants={arrowVariants}
                  className="inline-block text-[11px]"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InternshipDetail;
