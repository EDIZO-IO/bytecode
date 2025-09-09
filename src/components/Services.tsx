// src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Globe, Video, Palette, ArrowRight } from 'lucide-react';

const MotionLink = motion(Link);

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'API Integration'],
      color: 'from-blue-500 to-cyan-500',
      path: '/app-development'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Modern, responsive websites and web applications that deliver exceptional user experiences.',
      features: ['React/Next.js', 'E-commerce', 'CMS Integration', 'SEO Optimization'],
      color: 'from-purple-500 to-pink-500',
      path: '/website-development'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video production and post-production services for brands and content creators.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Mixing', 'Visual Effects'],
      color: 'from-orange-500 to-red-500',
      path: '/video-editing'
    },
    {
      icon: Palette,
      title: 'Graphics Design',
      description: 'Creative visual solutions including branding, UI/UX design, and marketing materials.',
      features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Digital Marketing'],
      color: 'from-green-500 to-teal-500',
      path: '/graphics-design'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to transform your ideas into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700 group-hover:border-slate-600 transition-all duration-300">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2 text-sm text-slate-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <MotionLink
                    to={service.path}
                    className="group/btn flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </MotionLink>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;