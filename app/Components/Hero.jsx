"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const targetDate = new Date("2025-05-05T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = "https://i.pinimg.com/originals/45/68/ff/4568ff50e791b0dd37c7ef839c244163.gif";
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
<<<<<<< HEAD
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Mario GIF Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: bgLoaded ? 0.4 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img
          src="https://i.pinimg.com/originals/45/68/ff/4568ff50e791b0dd37c7ef839c244163.gif"
          alt="Mario background"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center",
            minHeight: "100%",
            minWidth: "100%",
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0.6 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Pulsing overlay effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        {/* Organizer Logo and Name with fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center space-x-3 mb-8"
        >
          <motion.img
            src="./gdg-cropped.svg"
            alt="Google Developer Group"
            className="h-6 w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-red-500 to-yellow-500"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Google Developer Group
          </motion.span>
        </motion.div>

        {/* Hackathon Title - Mario-themed with character-by-character animation */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
        >
          {["H", "a", "c", "k", "'", "o", "R", "e", "l", "a", "y"].map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              className={`
                inline-block
                ${index === 0 || index === 4 || index === 6 || index === 10 ? "text-red-500" : ""}
                ${index === 1 || index === 5 || index === 9 ? "text-yellow-500" : ""}
                ${index === 2 || index === 8 ? "text-blue-500" : ""}
                ${index === 3 || index === 7 ? "text-green-500" : ""}
                drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]
                hover:scale-110 transition-transform
              `}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.p className="text-base sm:text-lg lg:text-xl max-w-xl mb-10 text-white">
            {["Code.", "Collaborate.", "Create.", "Join the ultimate hackathon experience!"]
              .map((text, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.5 + index * 0.2
                  }}
                  className={`
                    ${index === 0 ? "text-red-500 font-semibold" : ""}
                    ${index === 1 ? "text-green-500 font-semibold" : ""}
                    ${index === 2 ? "text-yellow-500 font-semibold" : ""}
                    ${index === 3 ? "text-white" : ""}
                    mr-2
                  `}
                >
                  {text}
                </motion.span>
              ))}
          </motion.p>
        </motion.div>

        {/* Countdown Timer - Mario blocks style with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="flex space-x-3 sm:space-x-5 lg:space-x-6 mb-12"
        >
          {[
            { value: timeLeft.days, label: "Days", color: "bg-red-500" },
            { value: timeLeft.hours, label: "Hours", color: "bg-green-500" },
            { value: timeLeft.minutes, label: "Minutes", color: "bg-yellow-500" },
            { value: timeLeft.seconds, label: "Seconds", color: "bg-blue-500" },
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 2.3 + index * 0.15
              }}
            >
              <motion.div 
                className={`${item.color} rounded-lg px-3 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-3 shadow-lg border-2 border-white`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                  key={item.value} // This forces re-animation when value changes
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.value.toString().padStart(2, "0")}
                </motion.span>
              </motion.div>
              <motion.span 
                className="text-white text-xs sm:text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 + index * 0.1 }}
              >
                {item.label}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>

        {/* Register Button - Mario-themed with pulsing animation */}
        <motion.a
          href="/register"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            boxShadow: "0 0 15px rgba(239, 68, 68, 0.7)"
          }}
          transition={{ 
            duration: 0.8, 
            delay: 2.8,
            y: { type: "spring", stiffness: 300 }
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 20px rgba(239, 68, 68, 0.9)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 sm:px-7 sm:py-3 bg-red-500 text-white rounded-full font-semibold text-base sm:text-lg border-2 border-yellow-400 relative overflow-hidden"
        >
          <motion.span 
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            Register Now
          </motion.span>
          <motion.div 
            className="absolute inset-0 bg-yellow-400 opacity-0"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: ["-100%", "100%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.a>
      </div>
    </div>
=======
    <div className="relative min-h-screen w-full bg-neutral-950 overflow-hidden">
  {/* Glowing Grid Pattern */}
  <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
  
  {/* Floating Tech Elements with Pulse - scaled down */}
  <div className="absolute top-16 left-8 w-12 h-12 rounded-full bg-blue-500/20 blur-lg pulse-animation" style={{ animationDelay: '0s' }}></div>
  <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-purple-500/20 blur-lg pulse-animation" style={{ animationDelay: '1.5s' }}></div>
  <div className="absolute top-1/3 right-16 w-10 h-10 rounded-full bg-yellow-500/20 blur-lg pulse-animation" style={{ animationDelay: '0.75s' }}></div>

  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 pt-16 pb-10">
    {/* Organizer Logo and Name - scaled down */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center mb-6 group"
    >
      <img
        src="./gdg-cropped.svg"
        alt="Google Developer Group"
        className="h-8 w-auto mb-1 transition-transform group-hover:scale-110"
      />
      <span className="text-md font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 tracking-wider">
        PRESENTS
      </span>
    </motion.div>

    {/* Hackathon Title with Pulsing Glow - scaled down */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mb-6 glow-container"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-3 tracking-tight relative z-10">
      Hack'oRelay 4.0
      </h1>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full glow-effect"></div>
      <div className="text-md sm:text-lg text-neutral-300 font-mono mt-1">
        May 5-6, 2025 • 24-Hour Hackathon
      </div>
    </motion.div>

    {/* Animated Tagline - scaled down */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="max-w-2xl mb-8"
    >
      <p className="text-lg sm:text-xl text-neutral-300 font-medium mb-4">
        <span className="text-blue-400 font-bold">Code</span> • 
        <span className="text-red-400 font-bold"> Collaborate</span> • 
        <span className="text-yellow-400 font-bold"> Create</span>
      </p>
      <p className="text-sm sm:text-base text-neutral-400">
        Join developers, designers, and innovators for 24 hours of 
        <span className="text-purple-400 font-semibold"> intense coding</span>, 
        <span className="text-blue-400 font-semibold"> workshops</span>, and 
        <span className="text-green-400 font-semibold"> networking</span>.
        Win amazing prizes and build something incredible!
      </p>
    </motion.div>

    {/* Countdown Timer with Tech Card Style - scaled down */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="grid grid-cols-4 gap-2 sm:gap-3 mb-8 w-full max-w-sm"
    >
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center group"
        >
          <div className="w-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-2 transition-all duration-300 group-hover:bg-neutral-900/70 group-hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
            <span className="text-xl sm:text-2xl font-mono font-bold text-white">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-neutral-400 text-xs mt-1 uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </motion.div>

    {/* Action Buttons with Soft Glow - scaled down */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-3"
    >
      <motion.a
        href="/register"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-xs sm:text-sm shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-1 relative overflow-hidden"
      >
        <span className="absolute inset-0 bg-white/10 glow-button-effect opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
        Register Now
      </motion.a>
      
      <motion.a
        href="#details"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-neutral-800/50 border border-neutral-700 text-white rounded-full font-bold text-xs sm:text-sm shadow-lg hover:shadow-neutral-500/10 transition-all duration-300 flex items-center justify-center gap-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
        </svg>
        Learn More
      </motion.a>
    </motion.div>
  </div>
</div>
>>>>>>> f45a45ee80060b1c77db07b6a87a4c0ea5ec0ea9
  );
};

export default Hero;