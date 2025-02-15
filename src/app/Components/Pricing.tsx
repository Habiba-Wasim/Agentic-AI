"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const plans = [
  {
    name: "Starter",
    price: 499,
  },
  {
    name: "Professional",
    price: 999,
  },
  {
    name: "Enterprise",
    price: 1500,
  },
]

const Price= () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle, rgba(147,51,234,0.2) 0%, rgba(139,92,246,0.1) 100%)',
            'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(147,51,234,0.1) 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-between gap-8">
        <div className="w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            <Bot className="w-12 h-12 mb-4 text-purple-500 inline-block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-violet-600">
              Choose Your Plan
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8"
          >
            Scale your AI capabilities with our flexible pricing
          </motion.p>
        </div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={plans}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip 
                contentStyle={{ 
                  background: 'rgba(0,0,0,0.8)', 
                  border: '1px solid #purple-500',
                  borderRadius: '8px'
                }} 
                labelStyle={{ color: '#fff' }}
              />
              <Bar 
                dataKey="price" 
                fill="url(#colorGradient)" 
                barSize={40}
                radius={[8, 8, 0, 0]}
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}

export default Price
