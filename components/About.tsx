import React from 'react';
import { motion } from 'framer-motion';
import { ACTRESS_NAME } from '../data';
import SectionTitle from './ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-cinema-800 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img 
                src="https://rootswear.in/Images/A2.JPG.webp" 
                alt={ACTRESS_NAME}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-900/80 to-transparent"></div>
              
              {/* Floating Quote Card */}
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 border-l-4 border-gold-500">
                <p className="font-serif italic text-slate-200 text-lg">"Acting is not just about dialogue; it's about the silence between the words."</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500/50"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500/50"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle title="The Artist" align="left" />
            
            <div className="space-y-6 text-slate-300 font-sans leading-relaxed text-lg">
              <p>
                <span className="text-gold-400 font-bold">{ACTRESS_NAME}</span> represents the new wave of Indian cinema—a talent forged in the fast-paced world of digital storytelling and refined for the grandeur of the silver screen.
              </p>
              <p>
                Starting her journey through independent short films and viral YouTube web series, Suma Sri has captivated audiences with her natural flair for emotive storytelling. She possesses a rare ability to switch effortlessly between the girl-next-door charm and intense, dramatic depth.
              </p>
              <p>
                Dedicated, expressive, and camera-confident, she is now poised to take on lead roles in feature films. For her, cinema is more than a profession; it is the ultimate medium of human connection.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-gold-400 font-display font-bold text-3xl">30+</h4>
                <p className="text-sm uppercase tracking-widest text-slate-500 mt-1">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-gold-400 font-display font-bold text-3xl">5M+</h4>
                <p className="text-sm uppercase tracking-widest text-slate-500 mt-1">Total Views</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;