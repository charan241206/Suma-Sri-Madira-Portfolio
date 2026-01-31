import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Mail, Phone, Instagram, Send } from 'lucide-react';
import { ACTRESS_NAME } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cinema-800 via-black to-black opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Casting & Enquiries" subtitle="Get in Touch" />

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <h3 className="text-3xl font-display text-white">Let's Create <br/><span className="text-gold-500">Cinematic Magic</span></h3>
            <p className="text-slate-400 leading-relaxed font-serif text-lg">
              "For film, OTT, web series, and brand collaborations, please contact directly using the details below."
            </p>

            <div className="space-y-6">
              <a href="mailto:contact@sumasrimadira.com" className="flex items-center gap-4 text-slate-300 hover:text-gold-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold-500 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">contact@sumasrimadira.com</span>
              </a>

              <div className="flex items-center gap-4 text-slate-300 hover:text-gold-400 transition-colors group cursor-pointer">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold-500 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg">+91 98765 43210</span>
              </div>

              <a href="https://www.instagram.com/sumasri_madira/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-gold-400 transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold-500 transition-colors">
                  <Instagram size={20} />
                </div>
                <span className="text-lg">@sumasri_madira</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="glass-panel p-8 rounded-sm space-y-6 border-t border-gold-500/30">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Casting Director" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500">Company</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Production House" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-500">Email</label>
              <input type="email" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="email@production.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-500">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-gold-500 focus:outline-none transition-colors" placeholder="Project details..."></textarea>
            </div>

            <button type="submit" className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2">
              Send Enquiry <Send size={16} />
            </button>
          </form>

        </div>
      </div>
      
      <div className="mt-24 border-t border-white/5 py-8 text-center">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} {ACTRESS_NAME}. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Contact;