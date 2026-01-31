import React from 'react';
import SectionTitle from './ui/SectionTitle';

const Showreel: React.FC = () => {
  // Using the first project as the main showreel for now
  const mainShowreelId = "EMQ2LzzjrtA"; 

  return (
    <section id="showreel" className="py-24 bg-cinema-800 relative overflow-hidden scroll-mt-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Official Showreel" subtitle="Performance Highlights & Range" />

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20">
             <iframe
                src={`https://www.youtube.com/embed/${mainShowreelId}?rel=0`}
                title="Suma Sri Madira Showreel"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          </div>
          
          <div className="mt-8 text-center max-w-2xl mx-auto">
            <p className="text-slate-400 font-serif italic text-lg">
              "A glimpse of Suma Sri Madira’s screen presence, expressions, and acting range. From subtle emotions to high drama."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;