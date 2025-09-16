// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Zap } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

const About = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Clock, value: '3+', label: 'Years Experience' },
    { icon: Zap, value: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We are passionate creators dedicated to delivering exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                Crafting Digital Excellence Since 2021
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                At Byte Code by Edizo, we believe in the power of innovative technology and creative design. 
                Our mission is to transform ideas into reality through cutting-edge development solutions 
                and exceptional visual storytelling.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                From mobile applications that revolutionize user experiences to websites that drive business growth, 
                from compelling video content to striking visual designs - we deliver comprehensive digital solutions 
                that exceed expectations.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-cyan-400">Our Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Innovation', 'Quality', 'Reliability', 'Creativity'].map((value, index) => (
                  <motion.div
                    key={value}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                    <span className="text-slate-300 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mb-4">
                  <stat.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: (index * 0.1) + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', description: 'Creating wireframes and visual concepts' },
              { step: '03', title: 'Development', description: 'Building with latest technologies' },
              { step: '04', title: 'Delivery', description: 'Testing, deployment, and ongoing support' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold text-lg mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-slate-300">{phase.description}</p>
                
                {/* Connecting line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;