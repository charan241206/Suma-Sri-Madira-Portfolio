import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ACTRESS_NAME } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Credits', href: '#credits' },
    { name: 'Showreel', href: '#showreel' },
    { name: 'Profile', href: '#profile' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
      <div className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-100 glass-panel border-b border-white/5' : 'opacity-0'}`}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-display font-bold tracking-widest text-slate-100 uppercase cursor-pointer"
          >
            {ACTRESS_NAME.split(' ')[0]} <span className="text-gold-500">{ACTRESS_NAME.split(' ')[1]}</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-gold-400 transition-colors duration-300 font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Nav Button */}
          <button className="md:hidden text-slate-100" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cinema-900/95 backdrop-blur-xl border-b border-white/10 py-8 animate-fade-in-down">
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest text-slate-200 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;