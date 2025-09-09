// src/components/GraphicsDesign.js
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

const GraphicsDesign = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<number>>(new Set());
  const [fullscreenMedia, setFullscreenMedia] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  
  const projects = [
    {
      id: 4,
      title: 'Brand Identity System',
      category: 'Graphics',
      description: 'Complete brand package with logo and guidelines',
      media: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['Illustrator', 'Photoshop', 'Figma'],
      type: 'image',
      aspectRatio: 'aspect-square'
    },
    {
      id: 7,
      title: 'Marketing Campaign Graphics',
      category: 'Graphics',
      description: 'Social media and print marketing materials',
      media: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['Photoshop', 'Illustrator', 'InDesign'],
      type: 'image',
      aspectRatio: 'aspect-[3/4]'
    },
    {
      id: 10,
      title: 'Logo Design Collection',
      category: 'Graphics',
      description: 'Creative logo designs for various industries',
      media: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      technologies: ['Illustrator', 'Brand Strategy', 'Typography'],
      type: 'image',
      aspectRatio: 'aspect-square'
    }
  ];

  const toggleVideoPlay = (videoId: number) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const toggleVideoMute = (videoId: number) => {
    const newMutedVideos = new Set(mutedVideos);
    if (newMutedVideos.has(videoId)) {
      newMutedVideos.delete(videoId);
    } else {
      newMutedVideos.add(videoId);
    }
    setMutedVideos(newMutedVideos);
  };

  const openFullscreen = (mediaId: number) => {
    setFullscreenMedia(mediaId);
  };

  const closeFullscreen = () => {
    setFullscreenMedia(null);
  };

  useEffect(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        if (playingVideo) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [playingVideo]);

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
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
              Graphics Design Projects
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing our finest graphic design work
          </p>
        </motion.div>

        {/* Media Gallery */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Media Container */}
              <div className={`relative ${project.aspectRatio} overflow-hidden`}>
                {project.type === 'video' ? (
                  <div className="relative w-full h-full">
                    <video
                      ref={el => videoRefs.current[project.id] = el}
                      className="w-full h-full object-cover"
                      src={project.media}
                      muted={mutedVideos.has(project.id)}
                      loop
                      playsInline
                    />
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <motion.button
                            onClick={() => toggleVideoPlay(project.id)}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {playingVideo === project.id ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4 ml-0.5" />
                            )}
                          </motion.button>
                          <motion.button
                            onClick={() => toggleVideoMute(project.id)}
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {mutedVideos.has(project.id) ? (
                              <VolumeX className="h-4 w-4" />
                            ) : (
                              <Volume2 className="h-4 w-4" />
                            )}
                          </motion.button>
                        </div>
                        <motion.button
                          onClick={() => openFullscreen(project.id)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
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
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <motion.button
                          onClick={() => openFullscreen(project.id)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Maximize2 className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
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

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-transparent">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                    Graphics Design
                  </span>
                  {project.type === 'video' && (
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Play className="h-3 w-3" />
                      <span>Video</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-slate-400 bg-slate-800/50 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium text-slate-400 bg-slate-800/50 px-2 py-1 rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

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
                {(() => {
                  const project = projects.find(p => p.id === fullscreenMedia);
                  if (!project) return null;
                  
                  return project.type === 'video' ? (
                    <video
                      className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                      src={project.media}
                      controls
                      autoPlay
                      muted={mutedVideos.has(project.id)}
                    />
                  ) : (
                    <img
                      src={project.media}
                      alt={project.title}
                      className="w-full h-full max-h-[80vh] object-contain rounded-lg"
                    />
                  );
                })()}
                
                <motion.button
                  onClick={closeFullscreen}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
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
      </div>
    </section>
  );
};

export default GraphicsDesign;