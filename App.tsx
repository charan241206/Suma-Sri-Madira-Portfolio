import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Credits from './components/Credits';
import Showreel from './components/Showreel';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Credits />
        <Showreel />
        <Profile />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default App;