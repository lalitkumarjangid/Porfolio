"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./pages/Navbar";
import Navigationbar from "./pages/Navigationbar";
import { AboutMe } from "./pages/AboutMe";
import { Teckstacks } from "./pages/techstacks";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import Expreence from "./pages/Expreence";

const LoadingScreen = () => {
  const [isNamaste, setIsNamaste] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNamaste(prev => !prev);
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : prev));
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const outerCircleVariants = {
    initial: { rotate: 0, scale: 0.8 },
    animate: {
      rotate: 360,
      scale: 1,
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const innerCircleVariants = {
    initial: { rotate: 360, scale: 0.8 },
    animate: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        />
      </div>

      {/* Main Loading Animation */}
      <div className="relative">
        <motion.div
          className="absolute inset-0"
          variants={outerCircleVariants}
          initial="initial"
          animate="animate"
        >
          <svg
            className="w-80 h-80"
            viewBox="0 0 600 600"
          >
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="1">
                  <animate
                    attributeName="stopColor"
                    values="#00FFFF; #1E90FF; #00FFFF"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#1E90FF" stopOpacity="1">
                  <animate
                    attributeName="stopColor"
                    values="#1E90FF; #00FFFF; #1E90FF"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <motion.circle
              cx="300"
              cy="300"
              r="180"
              stroke="url(#gradient1)"
              strokeWidth="8"
              fill="none"
              filter="url(#glow)"
              strokeDasharray="1130"
              strokeDashoffset={1130 - (1130 * progress) / 100}
              transition={{ duration: 0.5 }}
            />
          </svg>
        </motion.div>

        <motion.div
          className="relative w-80 h-80"
          variants={innerCircleVariants}
          initial="initial"
          animate="animate"
        >
          <svg viewBox="0 0 600 600" className="w-full h-full">
            <motion.circle
              cx="300"
              cy="300"
              r="150"
              stroke="url(#gradient1)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Animated Text */}
      <div className="mt-12 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={isNamaste ? "namaste" : "hello"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.span
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
              animate={{
                backgroundPosition: ["0%", "100%"],
                filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {isNamaste ? "नमस्ते" : "Hello"}
            </motion.span>
          </motion.div>
        </AnimatePresence>
        
        <motion.div
          className="mt-4 text-lg text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading your experience...
        </motion.div>
        
        <motion.div
          className="mt-2 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {progress}%
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Navigationbar />
          <AboutMe />
          <Teckstacks />
          <Projects />
          <Expreence />
          <br />
          <Contact />
        </motion.div>
      )}
    </AnimatePresence>
  );
}