
// src/components/ProjectDetails.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Play, Pause, Volume2, VolumeX, Maximize2, ArrowLeft } from 'lucide-react';

// Sample project data (in a real app, this would come from an API or centralized data store)
const projects = [
  {
    id: 1,
    category: 'Apps',
    title: 'E-Commerce Mobile App',
    description: 'A full-featured shopping app with seamless payment integration and user-friendly navigation.',
    longDescription: 'This e-commerce mobile app was designed to provide a seamless shopping experience for users on both iOS and Android platforms. It includes features like product browsing, secure payment processing, user authentication, and order tracking. The app integrates with Stripe for payments and uses a modern UI/UX design to enhance user engagement.',
    technologies: ['React Native', 'Node.js', 'Stripe', 'Firebase'],
    media: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'image',
    aspectRatio: 'aspect-[4/5]',
    additionalMedia: [
      'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    id: 2,
    category: 'Websites',
    title: 'Corporate Website Redesign',
    description: 'A modern, responsive website for a tech startup with enhanced user experience.',
    longDescription: 'This project involved a complete redesign of a corporate website for a tech startup, focusing on modern design principles and responsiveness. Built with React and Next.js, it features optimized performance, SEO integration, and a custom CMS for easy content updates.',
    technologies: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
    media: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'image',
    aspectRatio: 'aspect-video',
    additionalMedia: [
      'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    id: 3,
    category: 'Videos',
    title: 'Product Launch Campaign',
    description: 'A cinematic product showcase with engaging motion graphics.',
    longDescription: 'This cinematic product launch video was created to showcase a new tech product with high-quality visuals and motion graphics. The project involved storyboarding, filming, and post-production, including advanced color grading and visual effects to create an impactful promotional video.',
    technologies: ['After Effects', 'Premiere Pro', '3D Animation', 'Cinema 4D'],
    media: 'https://videos.pexels.com/video-files/3945313/3945313-uhd_2560_1440_30fps.mp4',
    type: 'video',
    aspectRatio: 'aspect-video',
    additionalMedia: [
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    id: 4,
    category: 'Graphics',
    title: 'Brand Identity System',
    description: 'A complete brand package with logo and design guidelines.',
    longDescription: 'This project delivered a comprehensive brand identity system, including logo design, typography selection, color schemes, and brand guidelines. The design was crafted to reflect the client’s vision and ensure consistency across all marketing materials.',
    technologies: ['Illustrator', 'Photoshop', 'Figma', 'InDesign'],
    media: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'image',
    aspectRatio: 'aspect-square',
    additionalMedia: [
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/326515/pexels-photo-326515.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ]
  },
  {
    id: 5,
    category: 'Videos',
    title: 'Corporate Documentary',
    description: 'A professional company story and culture video.',
    longDescription: 'This documentary-style video tells the story of a company’s journey, highlighting its culture, values, and achievements. The project involved on-site filming, interviews, and advanced post-production to create a compelling narrative.',
    technologies: ['Cinema Camera', 'DaVinci Resolve', 'Motion Graphics'],
    media: 'https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_30fps.mp4',
    type: 'video',
    aspectRatio: 'aspect-video',
    additionalMedia: []
  },
  {
    id: 6,
    category: 'Apps',
    title: 'Fitness App Interface',
    description: 'A health and fitness app with social features.',
    longDescription: 'This fitness app provides users with workout tracking, social sharing, and integration with health platforms like HealthKit. Built with Flutter for cross-platform compatibility, it offers a sleek interface and real-time performance tracking.',
    technologies: ['Flutter', 'Firebase', 'HealthKit', 'REST APIs'],
    media: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'image',
    aspectRatio: 'aspect-[4/5]',
    additionalMedia: []
  },
  {
    id: 7,
    category: 'Graphics',
    title: 'Marketing Campaign Graphics',
    description: 'Social media and print marketing materials.',
    longDescription: 'This project involved creating a series of marketing materials for a product launch, including social media graphics, print ads, and digital banners. The designs were optimized for engagement and brand consistency.',
    technologies: ['Photoshop', 'Illustrator', 'InDesign'],
    media: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'image',
    aspectRatio: 'aspect-[3/4]',
    additionalMedia: []
  },
  {
    id: 8,
    category: 'Videos',
    title: 'Event Highlight Reel',
    description: 'Dynamic event coverage with drone footage.',
    longDescription: 'This event highlight reel captures the energy of a major corporate event using drone footage and dynamic editing. The video includes professional color grading and sound design to create an immersive experience.',
    technologies: ['Drone Cinematography', 'Final Cut Pro', 'Color Grading'],
    media: 'https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4',
    type: 'video',
    aspectRatio: 'aspect-video',
    additionalMedia: []
  },
  {
    id: 9,
    category: 'Websites',
    title: 'Restaurant Website',
    description: 'An elegant restaurant website with online ordering.',
    longDescription: 'This restaurant website offers a visually appealing design with integrated online ordering and reservation systems. Built with Next.js and Sanity CMS, it provides a seamless user experience and easy content management.',
    technologies: ['Next.js', 'Sanity CMS', 'Stripe', 'Tailwind'],
    media: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'image',
    aspectRatio: 'aspect-video',
    additionalMedia: []
  },
  {
    id: 10,
    category: 'Graphics',
    title: 'Logo Design Collection',
    description: 'Creative logo designs for various industries.',
    longDescription: 'A collection of logo designs created for clients across multiple industries, focusing on unique typography and brand representation. Each logo was crafted to be memorable and versatile for both digital and print use.',
    technologies: ['Illustrator', 'Brand Strategy', 'Typography'],
    media: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'image',
    aspectRatio: 'aspect-square',
    additionalMedia: []
  }
];

const ProjectDetails = () => {
  const { projectId } = useParams(); // Get projectId from URL
  const [playingVideo, setPlayingVideo] = useState(false);
  const [muted, setMuted] = useState(true);
  const [fullscreenMedia, setFullscreenMedia] = useState(null);
  const videoRef = useRef(null);

  // Find the project based on projectId
  const project = projects.find(p => p.id === parseInt(projectId));
  
  // Handle case where project is not found
  if (!project) {
    return (
      <section className="py-20 bg-slate-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Project Not Found</h2>
          <p className="text-slate-300 mb-6">Sorry, we couldn't find the project you're looking for.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (playingVideo) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setPlayingVideo(!playingVideo);
    }
  };

  const toggleVideoMute = () => {
    setMuted(!muted);
  };

  const openFullscreen = (media) => {
    setFullscreenMedia(media);
  };

  const closeFullscreen = () => {
    setFullscreenMedia(null);
    if (videoRef.current) {
      videoRef.current.pause();
      setPlayingVideo(false);
    }
  };

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={`/${project.category.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to {project.category}
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl">{project.description}</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Media */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={`relative ${project.aspectRatio} rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 group`}>
              {project.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    src={project.media}
                    muted={muted}
                    loop
                    playsInline
                  />
                  {/* Video Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <motion.button
                          onClick={toggleVideoPlay}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {playingVideo ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                        </motion.button>
                        <motion.button
                          onClick={toggleVideoMute}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        </motion.button>
                      </div>
                      <motion.button
                        onClick={() => openFullscreen(project.media)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={project.media}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <motion.button
                        onClick={() => openFullscreen(project.media)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="text-slate-300 leading-relaxed">{project.longDescription}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start a Similar Project
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Media Gallery */}
        {project.additionalMedia.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">More from this Project</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.additionalMedia.map((media, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={media}
                    alt={`${project.title} - Additional ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      onClick={() => openFullscreen(media)}
                      className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Maximize2 className="h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreenMedia && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
          >
            <motion.div
              className="relative max-w-6xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {project.type === 'video' && fullscreenMedia === project.media ? (
                <video
                  className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                  src={fullscreenMedia}
                  controls
                  autoPlay
                  muted={muted}
                />
              ) : (
                <img
                  src={fullscreenMedia}
                  alt={project.title}
                  className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                />
              )}
              <motion.button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectDetails;
