import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <div className="relative">
        <Header />
        <main className="px-6 sm:px-8 md:px-12 lg:px-24 xl:px-48 py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl flex flex-col gap-24">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
