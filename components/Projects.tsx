import React, { useRef } from 'react';
import Section from './Section';
import { PROJECTS_DATA, GithubIcon, ExternalLinkIcon } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 mb-8 hover:shadow-lg hover:shadow-teal-400/10 hover:-translate-y-1 hover:scale-[1.02]">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition-colors duration-300">{project.name}</h3>
            <div className="flex items-center gap-4 mt-1 flex-shrink-0">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-slate-400 hover:text-teal-300 transition-colors duration-300">
                  <GithubIcon />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-slate-400 hover:text-teal-300 transition-colors duration-300">
                  <ExternalLinkIcon />
                </a>
              )}
            </div>
          </div>
          <p className="mt-2 text-slate-400 text-sm">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <li key={i} className="text-xs font-medium bg-teal-400/10 text-teal-300 py-1 px-3 rounded-full">{tech}</li>
            ))}
          </ul>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div>
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;