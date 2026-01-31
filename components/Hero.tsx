import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown } from 'lucide-react';
import { ACTRESS_NAME } from '../data';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Ken Burns Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1617122175988-a46757b16592?q=80&w=2070&auto=format&fit=crop")', // Placeholder for high-res portfolio shot
            backgroundPosition: 'center 20%'
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-900 via-cinema-900/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-cinema-900/80 via-transparent to-cinema-900/80 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="inline-block py-1 px-3 border border-gold-500/30 rounded-full bg-gold-500/10 text-gold-400 text-xs tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
            Film Actress &middot; Web Series Performer
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white uppercase tracking-tighter mb-4 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {ACTRESS_NAME}
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl font-serif italic text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          “From Web Series to the Silver Screen — The Next Face of Indian Cinema”
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a 
            href="#showreel" 
            onClick={(e) => handleScrollTo(e, 'showreel')}
            className="group relative px-8 py-4 bg-white text-black uppercase tracking-widest font-bold text-sm overflow-hidden hover:bg-gold-400 transition-colors duration-300 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play size={16} fill="currentColor" /> Watch Showreel
            </span>
          </a>
          
          <a 
            href="#credits" 
            onClick={(e) => handleScrollTo(e, 'credits')}
            className="px-8 py-4 border border-white/30 text-white uppercase tracking-widest font-bold text-sm hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm cursor-pointer"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;