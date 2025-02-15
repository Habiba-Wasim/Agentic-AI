"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

const Hero = (): React.JSX.Element => {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-48 text-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%", "-100%"], y: ["50%", "-50%", "50%"], rotate: [0, 360], scale: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[300px] sm:w-[400px] md:w-[800px] lg:w-[1200px] xl:w-[1500px] 2xl:w-[2000px] h-[300px] sm:h-[400px] md:h-[800px] lg:h-[1200px] xl:h-[1500px] 2xl:h-[2000px] bg-gradient-to-r from-blue-600 via-purple-700 to-pink-600 opacity-60 rounded-full blur-[200px]"
        ></motion.div>
      </div>

      {/* Robot Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 mb-4"
      >
        <Image src="/cartoon.png" alt="AI Robot" fill className="object-contain" />
      </motion.div>

      {/* Power Badge */}
      <motion.div 
        className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-700 to-pink-600 px-4 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2 md:py-3 rounded-full text-white font-bold text-sm sm:text-sm md:text-base lg:text-lg"
        whileHover={{ scale: 1.05 }}
      >
        POWERED BY PANAVERSITY
      </motion.div>

      {/* Heading */}
      <motion.h1 
        className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mt-4 leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">The Future of </span>
        <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">AI Agents</span>
      </motion.h1>

      <motion.span 
        className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Intelligent. Adaptive. Limitless.
      </motion.span>

      {/* New CTA Instead of Chatbot Input */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 max-w-[320px] sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-4xl px-2"
      >
        Transform Your Business with AI-Powered Innovation.
      </motion.p>

      {/* Buttons */}
      <motion.div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 mt-4 w-full max-w-[320px] sm:max-w-none px-4 justify-center items-center">
        <motion.button
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 px-6 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 text-white font-bold rounded-xl shadow-xl transition-all duration-300 text-sm sm:text-sm md:text-base lg:text-lg"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(138, 43, 226, 0.9)" }}
          whileTap={{ scale: 0.95 }}
        >
          Deploy Your AI Agent
        </motion.button>
        <motion.button
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 px-6 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 text-white font-bold rounded-xl shadow-xl transition-all duration-300 border-2 border-gray-700 text-sm sm:text-sm md:text-base lg:text-lg"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(100, 100, 100, 0.9)" }}
          whileTap={{ scale: 0.95 }}
        >
          Watch Demo
        </motion.button>
      </motion.div>    </section>
  );
};

export default Hero;
