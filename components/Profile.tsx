import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE, SKILLS } from '../data';
import SectionTitle from './ui/SectionTitle';
import { User, Globe, Activity, Camera } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <section id="profile" className="py-24 bg-cinema-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionTitle title="Talent Profile" subtitle="Stats & Abilities" />

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Physical Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass-panel p-8 rounded-sm border-t border-gold-500/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="text-gold-500" />
              <h3 className="text-2xl font-display font-bold text-slate-100">Physical Stats</h3>
            </div>
            
            <div className="space-y-4">
              {Object.entries(PROFILE).map(([key, value]) => {
                if (key === 'languages') return null;
                return (
                  <div key={key} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-400 uppercase text-xs tracking-widest">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-slate-100 font-medium font-sans">{value as string}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-gold-500" />
                <h3 className="text-xl font-display font-bold text-slate-100">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PROFILE.languages.map(lang => (
                  <span key={lang} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-slate-200">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Bars */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             viewport={{ once: true }}
             className="lg:col-span-2 glass-panel p-8 rounded-sm"
          >
             <div className="flex items-center gap-3 mb-8">
              <Activity className="text-gold-500" />
              <h3 className="text-2xl font-display font-bold text-slate-100">Performance Skills</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
              {SKILLS.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                    <span className="text-gold-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="h-full bg-gold-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-black/40 p-6 rounded border border-white/5 flex gap-4 items-start">
              <Camera className="text-cyan-400 shrink-0 mt-1" />
              <div>
                <h4 className="text-slate-100 font-bold mb-2">Training & Workshops</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Extensive experience in Method Acting and Camera Techniques. 
                  Participated in multiple intensive acting workshops focusing on voice modulation, 
                  body language, and emotional recall. Proven track record in fast-paced 
                  web series environments.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Profile;