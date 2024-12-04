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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNamaste(prev => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center 
      bg-gradient-to-br from-gray-900 to-gray-800 
      transition-all duration-500"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [0.5, 1.1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-48 h-48"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          className="absolute inset-0 w-full h-full"
        >
          {/* Outer Hexagonal Ring */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            d="M300 50 
               L500 150 
               L500 450 
               L300 550 
               L100 450 
               L100 150 Z"
            fill="none"
            stroke="url(#gradientStroke)"
            strokeWidth="15"
            strokeLinecap="round"
          />

          {/* Inner Geometric Elements */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            d="M300 200 L400 250 L300 300 L200 250 Z"
            fill="rgba(71, 85, 105, 0.3)"
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient
              id="gradientStroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="1" />
              <stop offset="100%" stopColor="#4338CA" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Animated Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          color: ["#1E40AF", "#4338CA", "#1E40AF"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mt-8 text-2xl font-bold tracking-wide text-gray-300"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={isNamaste ? "namaste" : "hello"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {isNamaste ? "नमस्ते" : "Hello"}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Navbar />
      <Navigationbar />
      <AboutMe />
      <Teckstacks />
      <Projects />
      <Expreence />
      <br />
      <Contact />
    </div>
  );
}