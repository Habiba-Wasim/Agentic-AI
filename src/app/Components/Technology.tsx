"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code, Globe, ChevronDown, ChevronUp, ArrowRight, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bot,
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
    details:
      "Our neural networks utilize state-of-the-art architectures like transformers and graph neural networks to tackle the most challenging AI problems.",
    showcase: "Experience real-time image classification powered by our neural networks.",
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
    details:
      "We employ cutting-edge deep learning techniques including transfer learning, few-shot learning, and self-supervised learning to push the boundaries of AI capabilities.",
    showcase: "Try our sentiment analysis tool that uses deep learning to understand text emotions.",
  },
  {
    icon: Code,
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
    details:
      "Our advanced machine learning algorithms cover a wide range of techniques from ensemble methods to reinforcement learning, optimized for performance and efficiency.",
    showcase: "Explore our predictive analytics dashboard powered by advanced ML algorithms.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Distributed AI processing across global networks",
    details:
      "Our global infrastructure allows for distributed training and inference, enabling AI models to scale to billions of parameters and process massive datasets.",
    showcase: "Visualize our global AI processing network in real-time.",
  },
];

export default function AIFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center px-4 sm:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: ["-100%", "100%"], 
            y: ["-50%", "50%"], 
            rotate: [0, 360], 
            scale: [1, 2, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15, 
            ease: "linear",
            times: [0, 1]
          }}
          className="absolute top-1/3 left-1/4 w-[800px] h-[800px] bg-purple-600 opacity-20 rounded-full blur-[180px]"
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-cyan-500"
        >
          Innovating Through AI Excellence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-center mb-12 text-xl font-semibold"
        >
          Revolutionizing technology with cutting-edge neural architectures
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black border-2 border-purple-500 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:border-purple-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              onClick={() => toggleExpand(index)}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="bg-gradient-to-br from-purple-500 to-pink-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-lg"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.8 }
                }}
                animate={{
                  y: [0, -5, 0],
                  boxShadow: ["0 0 0 rgba(168,85,247,0.4)", "0 0 20px rgba(168,85,247,0.6)", "0 0 0 rgba(168,85,247,0.4)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <feature.icon className="w-7 h-7 text-white animate-pulse" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-purple-300">{feature.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 text-sm mt-2">{feature.details}</p>
                    <Button
                      variant="link"
                      className="mt-4 text-purple-500 hover:text-purple-400 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      Try it out <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                {expandedIndex === index ? (
                  <ChevronUp className="w-5 h-5 mt-2 text-purple-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 mt-2 text-purple-500" />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
