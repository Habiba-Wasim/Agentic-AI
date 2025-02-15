"use client"

import { motion } from "framer-motion"
import { Bot, Mail, Globe, Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted successfully')
  }

  return (
    <footer className="bg-gradient-to-b from-black via-purple-900 to-black text-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-right mb-6 mr-24"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 animate-gradient hover:from-purple-800 hover:via-purple-600 hover:to-purple-400 transition-all duration-500">
              Get in Touch
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-2xl text-gray-300 text-right mb-16 mr-20"
          >
            Ready to transform your business with AI?
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black/80 p-8 rounded-2xl shadow-xl shadow-purple-500/20">
              <h3 className="text-3xl font-semibold mb-6 text-purple-400">Contact Information</h3>
              <div className="space-y-4">
                <motion.p 
                  whileHover={{ x: 10, color: "#a855f7" }}
                  className="flex items-center text-lg"
                  transition={{ duration: 0.3 }}
                >
                  <Mail className="w-6 h-6 mr-3 text-purple-500" />
                  contact@agentiaworld.com
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10, color: "#a855f7" }}
                  className="flex items-center text-lg"
                  transition={{ duration: 0.3 }}
                >
                  <Globe className="w-6 h-6 mr-3 text-purple-500" />
                  www.agentiaworld.com
                </motion.p>
                <div className="flex space-x-6 mt-8">
                  <motion.a href="https://github.com/agentiaworld" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.4 }}>
                    <Github className="w-7 h-7 text-purple-400 hover:text-white cursor-pointer" />
                  </motion.a>
                  <motion.a href="https://linkedin.com/company/agentiaworld" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.4 }}>
                    <Linkedin className="w-7 h-7 text-purple-400 hover:text-white cursor-pointer" />
                  </motion.a>
                  <motion.a href="https://twitter.com/agentiaworld" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.4 }}>
                    <Twitter className="w-7 h-7 text-purple-400 hover:text-white cursor-pointer" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black/80 p-8 rounded-2xl shadow-xl shadow-purple-500/20">

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <motion.input 
                    whileFocus={{ scale: 1.02, borderColor: "#a855f7" }}
                    type="text" 
                    placeholder="First Name" 
                    className="bg-gray-900/60 rounded-lg p-3 border-2 border-transparent hover:border-purple-500 transition-all duration-300 focus:outline-none" 
                    required
                  />
                  <motion.input 
                    whileFocus={{ scale: 1.02, borderColor: "#a855f7" }}
                    type="text" 
                    placeholder="Last Name" 
                    className="bg-gray-900/60 rounded-lg p-3 border-2 border-transparent hover:border-purple-500 transition-all duration-300 focus:outline-none" 
                    required
                  />
                </div>
                <motion.input 
                  whileFocus={{ scale: 1.02, borderColor: "#a855f7" }}
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-gray-900/60 rounded-lg p-3 w-full border-2 border-transparent hover:border-purple-500 transition-all duration-300 focus:outline-none" 
                  required
                />
                <motion.textarea 
                  whileFocus={{ scale: 1.02, borderColor: "#a855f7" }}
                  placeholder="Your Message" 
                  rows={4} 
                  className="bg-gray-900/60 rounded-lg p-3 w-full border-2 border-transparent hover:border-purple-500 transition-all duration-300 focus:outline-none resize-none"
                  required
                ></motion.textarea>
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 hover:from-purple-800 hover:via-purple-600 hover:to-purple-400 transition-all duration-300 text-lg font-semibold shadow-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black/80 p-6 rounded-xl shadow-purple-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Bot className="w-10 h-10 text-purple-500" />
                </motion.div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">Agentia World</span>
              </div>
              <p className="text-gray-300 mb-6">
                Next-generation AI agents powering the future of enterprise intelligence.
              </p>
              <div className="flex space-x-5">
                <motion.a href="https://github.com/alishbamajeed" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.4 }}>
                  <Github className="w-6 h-6 text-purple-400 hover:text-white cursor-pointer" />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/alishba-majeed-5099b8310/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.4 }}>
                  <Linkedin className="w-6 h-6 text-purple-400 hover:text-white cursor-pointer" />
                </motion.a>
                <motion.a href="https://twitter.com/agentiaworld" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.4 }}>
                  <Twitter className="w-6 h-6 text-purple-400 hover:text-white cursor-pointer" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black/80 p-6 rounded-xl shadow-purple-500/20">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">Product</h3>
              <ul className="space-y-3">
                {["Features", "Pricing", "Documentation", "API"].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 8, color: "#a855f7" }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-300"
                  >
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black/80 p-6 rounded-xl shadow-purple-500/20">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">Company</h3>
              <ul className="space-y-3">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 8, color: "#a855f7" }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-300"
                  >
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="backdrop-blur-sm bg-black/80 p-6 rounded-xl shadow-purple-500/20">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">Legal</h3>
              <ul className="space-y-3">
                {["Privacy", "Terms", "Security", "Compliance"].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 8, color: "#a855f7" }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-300"
                  >
                    <a href="#" className="hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center text-gray-400 pt-8 border-t border-gray-800"
          >
            © 2025 Agentia World. Powered by Panaversity. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
    </footer>
  )
}

export default Footer