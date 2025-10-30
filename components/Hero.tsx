
import React, { useState, useEffect } from 'react';
import { DownloadIcon, EmailIcon, LinkedInIcon, PhoneIcon } from '../constants';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      const headerOffset = 80; // Header height + spacing
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const one = <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-200">Lasha Kvaratskhelia</h1>;
  const two = <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">Test Automation Engineer</h2>;
  const three = <p className="mt-4 max-w-xl text-slate-400">I design and execute comprehensive testing strategies to ensure software quality and reliability. Specializing in both manual and automated testing across web and mobile platforms.</p>;
  const four = (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm font-medium">
        <a href="tel:+995555162724" className="flex items-center gap-2 text-slate-400 hover:text-teal-300 transition-colors duration-300">
          <PhoneIcon />
          <span>+995 555 16 27 24</span>
        </a>
        <a href="mailto:Lkvara25@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-teal-300 transition-colors duration-300">
          <EmailIcon />
          <span>Lkvara25@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/lasha-kvaratskhelia-28a652200/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-slate-400 hover:text-teal-300 transition-colors duration-300">
            <LinkedInIcon className="w-6 h-6" />
        </a>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="#contact" onClick={handleContactClick} className="inline-block bg-teal-400/10 text-teal-300 font-medium py-3 px-6 rounded-md border border-teal-300/20 hover:bg-teal-400/20 transition-all duration-300">
          Get In Touch
        </a>
        <a 
          href="https://drive.google.com/file/d/1Yku8pYhVu6SLznviEeZ4h9ej_jypVh7s/view?usp=sharing" 
          download="Lasha_Kvaratskhelia_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-transparent text-teal-300 font-medium py-3 px-6 rounded-md border border-teal-300/20 hover:bg-teal-400/10 transition-all duration-300"
        >
          <DownloadIcon />
          <span className="ml-2">Download CV</span>
        </a>
      </div>
    </div>
  );

  const items = [one, two, three, four];

  return (
    <section id="hero" className="min-h-[60vh] flex flex-col justify-center">
      {items.map((item, i) => (
        <div
          key={i}
          className={`transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          {item}
        </div>
      ))}
    </section>
  );
};

export default Hero;
