
import React, { useRef } from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

interface ExperienceCardProps {
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ index }) => {
  const item = EXPERIENCE_DATA[index];
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`group grid md:grid-cols-8 gap-4 mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <header className="md:col-span-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mt-1">
        {item.duration}
      </header>
      <div className="md:col-span-6">
        <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition-colors duration-300">{item.role} · {item.company}</h3>
        <p className="mt-2 text-slate-400">{item.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech, i) => (
            <li key={i} className="text-xs font-medium bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div>
        {EXPERIENCE_DATA.map((_, index) => (
          <ExperienceCard key={index} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
