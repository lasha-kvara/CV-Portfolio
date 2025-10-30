
import React, { useRef } from 'react';
import Section from './Section';
import { useOnScreen } from '../hooks/useOnScreen';

const AnimatedParagraph: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isVisible = useOnScreen(ref);
  return (
    <p
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </p>
  );
};

const About: React.FC = () => {
  const paragraphs = [
    `Hello!`,
    `I'm Lasha, a dedicated Quality Assurance Engineer with a passion for ensuring software excellence. My career in tech began with troubleshooting and has grown into a comprehensive expertise in both manual and automated testing, backed by a degree in Computer Engineering.`,
    `I have a proven track record of working on diverse projects, from banking applications to e-commerce platforms. I thrive in collaborative environments, working alongside development teams to identify issues early, streamline processes, and deliver high-quality products. My experience spans a wide range of tools and frameworks, including Selenium, Playwright, and Specflow BDD.`,
    `My strong problem-solving skills, attention to detail, and commitment to continuous improvement allow me to tackle complex challenges effectively. I'm always eager to learn new technologies and contribute to building robust and reliable software.`,
  ];

  return (
    <Section id="about" title="About Me">
      <div className="space-y-4">
        {paragraphs.map((text, i) => (
          <AnimatedParagraph key={i} index={i}>
            {text}
          </AnimatedParagraph>
        ))}
      </div>
    </Section>
  );
};

export default About;