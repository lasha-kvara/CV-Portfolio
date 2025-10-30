
import React, { useRef } from 'react';
import Section from './Section';
import { LinkedInIcon } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

const AnimatedWrapper: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center">
        <AnimatedWrapper index={0}>
          <p className="max-w-xl mx-auto mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
          </p>
        </AnimatedWrapper>
        <AnimatedWrapper index={1}>
          <a 
            href="mailto:Lkvara25@gmail.com" 
            className="inline-block bg-teal-400/10 text-teal-300 font-medium text-lg py-4 px-8 rounded-md border border-teal-300/20 hover:bg-teal-400/20 transition-all duration-300"
          >
            Say Hello
          </a>
        </AnimatedWrapper>
        <AnimatedWrapper index={2}>
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://www.linkedin.com/in/lasha-kvaratskhelia-28a652200/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors duration-300">
              <LinkedInIcon />
            </a>
          </div>
        </AnimatedWrapper>
      </div>
    </Section>
  );
};

export default Contact;