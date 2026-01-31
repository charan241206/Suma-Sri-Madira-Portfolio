import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../data';
import SectionTitle from './ui/SectionTitle';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-cinema-800">
      <div className="container mx-auto px-6">
        <SectionTitle title="Lookbook & Stills" subtitle="Portraits, Traditional & Modern Looks" />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid"
            >
              <div className="relative group overflow-hidden rounded-sm cursor-none">
                <img 
                  src={src} 
                  alt={`Lookbook ${index + 1}`}
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-4 border-white/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;