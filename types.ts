// Fix: Add missing import for React to resolve namespace error.
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Experience {
  duration: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
