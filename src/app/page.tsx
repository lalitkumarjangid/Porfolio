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
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Bigger and More Futuristic Animation */}
      <motion.div
        className="relative w-72 h-72"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 600"
          className="w-full h-full"
        >
          <motion.circle
            cx="300" cy="300" r="150"
            stroke="url(#gradientStroke)" strokeWidth="15" fill="none"
            initial={{ strokeDasharray: "1, 300" }}
            animate={{ strokeDasharray: "300, 300" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#1E90FF" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Animated Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, color: ["#00FFFF", "#1E90FF", "#00FFFF"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-8 text-3xl font-bold tracking-wide text-gray-300"
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
