import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Cpu, Shield, Zap, Thermometer, Activity, Loader2 } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useProjects } from '../hooks/useProjects';

const IOTProjects = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const { projects, categories, loading, error, fetchProjectsByCategory } = useProjects();

  // Filter projects for IoT Projects category
  useEffect(() => {
    const iotCategory = categories.find(cat => cat.name === 'IoT Projects');
    if (iotCategory) {
      fetchProjectsByCategory(iotCategory.id);
    }
  }, [categories, fetchProjectsByCategory]);

  // Transform projects to match the expected format
  const transformedProjects = projects.map(project => ({
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies ? project.technologies.split(',') : [],
    features: project.features ? project.features.split(',') : [],
    image: project.media_url,
    category: project.category_name,
    external_url: project.external_url,
    github_url: project.github_url
  }));


  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <Wifi className="h-8 w-8 text-green-400" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  IoT Projects
                </span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Connected devices and smart systems that bring intelligence to everyday objects and industrial processes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Cpu className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">Embedded Systems</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Activity className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300">Real-time Data</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Connected Solutions
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Discover our innovative IoT projects that connect the physical and digital worlds
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="flex items-center space-x-3">
                <Loader2 className="h-8 w-8 animate-spin text-green-400" />
                <span className="text-xl text-slate-300">Loading IoT projects...</span>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="text-red-400 text-xl mb-4">⚠️ Error loading projects</div>
                <p className="text-slate-300 mb-4">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                        <Thermometer className="h-3 w-3 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-medium text-slate-400 bg-slate-700/50 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Zap className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect Everything, Control Anything
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Transform your ideas into connected solutions with our comprehensive IoT development services.
            </p>
            <motion.button
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your IoT Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IOTProjects;
