"use client"

import { motion } from "framer-motion"
import { Globe, Server, Shield } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "Enterprise AI",
    description: "Custom AI agents designed for enterprise-scale operations and decision-making",
  },
  {
    icon: Server,
    title: "Neural Operations",
    description: "Automated workflow optimization through distributed neural networks",
  },
  {
    icon: Shield,
    title: "Secure Intelligence",
    description: "Privacy-first AI solutions with military-grade security protocols",
  },
]

const AISolutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  }

  return (
    <section className="bg-black text-white py-16 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900 to-black animate-pulse"></div>
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          variants={titleVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 animate-pulse">
            AI Solutions
          </span>
        </motion.h2>
        <motion.p
          variants={titleVariants}
          className="text-xl text-purple-400 text-center mb-12"
        >
          Transforming industries with intelligent agents
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateZ: 2,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.4)"
              }}
              className="bg-black/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 transform-gpu border border-purple-500"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <solution.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2"
                whileHover={{ scale: 1.05, color: "#a855f7" }}
              >
                {solution.title}
              </motion.h3>
              <motion.p 
                className="text-purple-300"
                whileHover={{ color: "#e9d5ff" }}
              >
                {solution.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AISolutions