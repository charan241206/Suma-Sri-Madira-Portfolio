import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { PROJECTS } from '../data';
import SectionTitle from './ui/SectionTitle';

const Credits: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="credits" className="py-24 bg-cinema-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionTitle title="Acting Credits" subtitle="Selected Filmography & Web Series" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedVideo(project.youtubeId)}
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full overflow-hidden rounded-sm relative shadow-lg shadow-black/50 border border-white/5 transition-transform duration-500 group-hover:scale-105 group-hover:z-10 bg-slate-800">
                 <img 
                  src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                   <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/50 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
                      <Play size={20} fill="white" className="text-white ml-1" />
                   </div>
                </div>

                {/* Info Overlay (Netflix Style bottom gradient) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold font-display text-lg leading-tight">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-300">
                    <span className="text-green-400 font-semibold">{project.year}</span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    <span className="uppercase">{project.type}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1 italic">Role: {project.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl shadow-gold-900/20 border border-white/10"
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Credits;