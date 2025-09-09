// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const MotionLink = motion(Link);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Floating shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        {/* Geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            className="flex items-center justify-center space-x-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium text-slate-300 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
              Premium Digital Solutions
            </span>
            <Sparkles className="h-5 w-5 text-yellow-400" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Byte Code
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-slate-400 mt-2">
              by Edizo
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting exceptional digital experiences through innovative
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text"> app development</span>,
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"> web solutions</span>,
            <span className="text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text"> video editing</span>, and
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text"> graphic design</span>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <MotionLink
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </MotionLink>

            <MotionLink
              to="/app-development"
              className="group px-8 py-4 border-2 border-slate-600 rounded-full text-slate-300 font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>View Portfolio</span>
              </span>
            </MotionLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-slate-800"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;