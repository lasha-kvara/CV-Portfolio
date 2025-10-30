import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section 
      id={id}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-8 sticky top-0 bg-slate-900/75 py-4 z-10 backdrop-blur-sm -mx-6 px-6 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
