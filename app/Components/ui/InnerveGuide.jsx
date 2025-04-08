"use client";
import { motion } from "framer-motion";
import React from 'react';

const InnerveGuide = () => {
  const timelineEvents = [
    {
      id: 1,
      title: "Registration Starts",
      date: "15 DEC 2024",
      description: "Secure your spot starting December 15, 2024, at 12:00 AM IST. Join us for an exciting 24-hour hackathon by registering early!"
    },
    {
      id: 2,
      title: "Registration Ends",
      date: "22 JAN 2025",
      description: "Last date to register for the hackathon! Don't miss out on this opportunity—finalize your participation before it's too late!"
    },
    {
      id: 3,
      title: "Pre-Innerve Game",
      date: "23 JAN 2025",
      description: "Embark on an exciting Pre-Innerve game designed exclusively for first-year students!"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pulse = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full p-6 bg-neutral-900 font-sans relative overflow-hidden">
      {/* Decorative floating coins */}
      <motion.div 
        className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-16 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"
        animate={{
          y: [0, -15, 0],
          x: [0, -8, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Animated title */}
        <motion.h1 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <span className="text-red-500">H</span>
          <span className="text-green-500">E</span>
          <span className="text-blue-500">R</span>
          <span className="text-yellow-500">E</span>
          <span className="text-red-500">'</span>
          <span className="text-green-500">S</span> 
          <span className="text-blue-500"> Y</span>
          <span className="text-yellow-500">O</span>
          <span className="text-red-500">U</span>
          <span className="text-green-500">R</span> 
          <span className="text-blue-500"> G</span>
          <span className="text-yellow-500">U</span>
          <span className="text-red-500">I</span>
          <span className="text-green-500">D</span>
          <span className="text-blue-500">E</span> 
          <span className="text-yellow-500"> T</span>
          <span className="text-red-500">O</span> 
          <span className="text-green-500"> I</span>
          <span className="text-blue-500">N</span>
          <span className="text-yellow-500">N</span>
          <span className="text-red-500">E</span>
          <span className="text-green-500">R</span>
          <span className="text-blue-500">V</span>
          <span className="text-yellow-500">E</span> 
          <span className="text-red-500"> 9</span>
        </motion.h1>
        
        <motion.div 
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={event.id} 
              className="flex"
              variants={item}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated timeline dot and line */}
              <div className="flex flex-col items-center mr-6">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative"
                  variants={pulse}
                  initial="initial"
                  animate="pulse"
                >
                  <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-yellow-400"
                    initial={{ scale: 1, opacity: 0.7 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </motion.div>
                {index < timelineEvents.length - 1 && (
                  <motion.div 
                    className="w-1 h-32 bg-gradient-to-b from-yellow-400 to-green-500 my-1"
                    initial={{ height: 0 }}
                    animate={{ height: "8rem" }}
                    transition={{ 
                      duration: 1,
                      delay: 0.3 * index + 0.5
                    }}
                  />
                )}
              </div>
              
              {/* Content */}
              <motion.div 
                className="flex-1 pb-6 bg-neutral-800/50 p-6 rounded-xl border-l-4 border-red-500"
                whileHover={{ 
                  borderLeftColor: "#facc15",
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start">
                  <motion.h2 
                    className="text-xl text-white font-bold"
                    whileHover={{ color: "#facc15" }}
                  >
                    {event.title.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: i * 0.05 + 0.3 * index,
                          type: "spring", 
                          stiffness: 300 
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h2>
                  <motion.span 
                    className="text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 * index + 0.5 }}
                  >
                    {event.date}
                  </motion.span>
                </div>
                <motion.p 
                  className="mt-2 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * index + 0.7 }}
                >
                  {event.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/20 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>
    </div>
  );
};

export default InnerveGuide;