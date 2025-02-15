"use client"
import { motion } from "framer-motion";
import { RiBrainLine, RiCustomerService2Line } from 'react-icons/ri';
import Image from 'next/image';

const Feature = () => {
  return (
    <motion.section 
      className="bg-black text-white py-20 relative overflow-hidden min-h-screen flex items-center"
      initial={{ backgroundColor: "#000000" }}
      animate={{ 
        backgroundColor: "#000000",
        boxShadow: "0 0 80px rgba(147, 51, 234, 0.3)"
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600">
              AI Agent Features
            </span>
          </motion.h1>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 rounded-xl backdrop-blur-sm cursor-pointer"
            >
              <RiBrainLine className="text-5xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent mb-4" />
              <h3 className="text-xl font-bold mb-2">Cognitive Processing</h3>
              <p className="text-purple-300">Advanced AI for intelligent decision-making and problem-solving.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 rounded-xl backdrop-blur-sm cursor-pointer"
            >
              <RiCustomerService2Line className="text-5xl text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Adaptive Learning</h3>
              <p className="text-purple-300">Continuously improves through user interactions and feedback.</p>
            </motion.div>
          </div>
        </div>
        {/* Right Image */}
        <motion.div 
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Image
            src="/robot.png"
            alt="AI Robot"
            width={600}
            height={600}
            className="max-w-full"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Feature;
