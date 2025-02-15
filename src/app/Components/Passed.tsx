"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquare, Zap, Shield } from "lucide-react"

const featuresList = [
  {
    icon: Brain,
    title: "Autonomous Learning",
    description:
      "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning",
  },
  {
    icon: MessageSquare,
    title: "Multi-Modal Intelligence",
    description: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding",
  },
  {
    icon: Zap,
    title: "Cognitive Integration",
    description: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges",
  },
  {
    icon: Shield,
    title: "Ethical AI Framework",
    description: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment",
  },
]

const Features = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 text-white py-16 relative overflow-hidden"
      initial={{ backgroundPosition: "0% 0%" }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "50% 50%", "0% 100%"],
        boxShadow: [
          "0 0 0 rgba(0,0,0,0)",
          "0 0 100px rgba(147,51,234,0.3)",
          "0 0 200px rgba(147,51,234,0.5)",
          "0 0 0 rgba(0,0,0,0)",
        ],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(147,51,234,0.4)",
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 shadow-lg"
            >
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  background: "linear-gradient(to bottom right, #9333ea, #3b82f6)"
                }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Features
