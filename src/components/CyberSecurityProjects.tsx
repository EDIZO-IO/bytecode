import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, AlertTriangle, Key } from 'lucide-react';

const CyberSecurityProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Network Security Scanner',
      description: 'Automated vulnerability assessment tool that scans networks for security weaknesses and provides detailed reports.',
      technologies: ['Python', 'Nmap', 'Nessus API', 'Django', 'PostgreSQL'],
      features: ['Vulnerability detection', 'Risk assessment', 'Compliance reporting', 'Real-time monitoring'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Network Security'
    },
    {
      id: 2,
      title: 'Penetration Testing Framework',
      description: 'Comprehensive security testing platform with automated tools and manual testing capabilities for web applications.',
      technologies: ['Metasploit', 'Burp Suite', 'OWASP ZAP', 'React', 'Node.js'],
      features: ['Automated scanning', 'Manual testing tools', 'Report generation', 'Vulnerability tracking'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Penetration Testing'
    },
    {
      id: 3,
      title: 'Security Information Management',
      description: 'SIEM solution for collecting, analyzing, and responding to security events across your entire infrastructure.',
      technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Python', 'Docker'],
      features: ['Log aggregation', 'Threat detection', 'Incident response', 'Compliance monitoring'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'SIEM'
    },
    {
      id: 4,
      title: 'Identity & Access Management',
      description: 'Enterprise-grade IAM solution with multi-factor authentication, role-based access control, and audit logging.',
      technologies: ['OAuth 2.0', 'SAML', 'JWT', 'React', 'Spring Boot'],
      features: ['Multi-factor auth', 'Role management', 'Audit trails', 'Single sign-on'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'IAM'
    }
  ];

  const categories = ['All', 'Network Security', 'Penetration Testing', 'SIEM', 'IAM'];

  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-red-400" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Cyber Security Projects
                </span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Advanced security solutions and tools that protect your digital assets from evolving cyber threats
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Lock className="h-5 w-5 text-red-400" />
                <span className="text-slate-300">Threat Protection</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Eye className="h-5 w-5 text-orange-400" />
                <span className="text-slate-300">Monitoring</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Key className="h-5 w-5 text-yellow-400" />
                <span className="text-slate-300">Access Control</span>
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
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Security Solutions
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive security tools and frameworks designed to safeguard your digital infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
                    <span className="bg-red-400/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                        <AlertTriangle className="h-3 w-3 text-red-400" />
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
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
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
            <Zap className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Digital Assets
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Protect your organization with our comprehensive cybersecurity solutions and expert security consulting.
            </p>
            <motion.button
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Secure Your Systems
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityProjects;
