
import React, { useRef, useState, useEffect } from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';
import { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Set a timer to remove the transition-delay after the entrance animation has finished.
  // This ensures the hover effect is immediate for all cards, not delayed by the initial stagger.
  useEffect(() => {
    if (isVisible && !hasAnimatedIn) {
      const timer = setTimeout(() => {
        setHasAnimatedIn(true);
      }, index * 50 + 500); // Staggered delay + animation duration
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimatedIn, index]);

  return (
    <div
      ref={ref}
      className={`group flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-teal-400/50 hover:-translate-y-1 transition-all duration-500 ease-in-out transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: hasAnimatedIn ? '0ms' : `${index * 50}ms` }}
    >
      <div className="w-12 h-12 text-slate-400 group-hover:text-teal-300 transition-all duration-300 transform group-hover:scale-110">
        {skill.icon}
      </div>
      <p className="mt-2 text-sm text-center font-medium text-slate-300 group-hover:text-teal-300 transition-colors duration-300">
        {skill.name}
      </p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {SKILLS_DATA.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
