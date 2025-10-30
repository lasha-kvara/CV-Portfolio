
import React from 'react';
import { Skill, Experience, Project } from './types';

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

export const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);

export const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

// SKILLS DATA
export const SKILLS_DATA: Skill[] = [
  { 
    name: 'C#', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 8v8M14 8v8M8 10h8M8 14h8"/>
    </svg>
  },
  { 
    name: 'Python', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 3h3a5 5 0 015 5v8a5 5 0 01-5 5H8M16 3h-3a5 5 0 00-5 5v8a5 5 0 005 5h3"/>
      <circle cx="9" cy="7" r="1" fill="currentColor"/>
      <circle cx="15" cy="17" r="1" fill="currentColor"/>
    </svg>
  },
  { 
    name: 'Java', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 17s-1 1.5-1 2.5c0 1.5 1.5 2.5 3 2.5s3-1 3-2.5c0-1-1-2.5-1-2.5"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17V8m0 0c-2-1-3-3-3-5m3 5c2-1 3-3 3-5"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12c-1.5 0-2.5 1-2.5 2s1 2 2.5 2m8 0c1.5 0 2.5-1 2.5-2s-1-2-2.5-2"/>
    </svg>
  },
  { 
    name: 'JavaScript', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 16v-4a2 2 0 00-2-2H7M14 16c0-2 1-3 3-3"/>
    </svg>
  },
  { 
    name: 'HTML/CSS', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 3l1.5 16.5L12 22l6.5-2.5L20 3z"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M8 11h8M9 15h6"/>
    </svg>
  },
  { 
    name: 'Selenium', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-6"/>
      <circle cx="12" cy="7" r="1.5" fill="currentColor"/>
    </svg>
  },
  { 
    name: 'Playwright', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l5-5 5 5M12 3v18"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 15l3 3M20 15l-3 3"/>
    </svg>
  },
  { 
    name: 'Specflow BDD', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 8h6M9 16h6"/>
      <rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6.5" cy="12" r="0.5" fill="currentColor"/>
    </svg>
  },
  { 
    name: 'API Testing', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8"/>
      <rect x="4" y="4" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="13" y="13" width="7" height="7" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 7.5h2M16.5 11v2"/>
    </svg>
  },
  { 
    name: 'SQL', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="6" rx="8" ry="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3"/>
    </svg>
  },
  { 
    name: 'NUnit', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 16V8l6 8V8"/>
    </svg>
  },
  { 
    name: 'XUnit', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6"/>
    </svg>
  },
  { 
    name: 'Git', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="18" r="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="6" r="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="12" r="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M16 12h-2"/>
    </svg>
  },
  { 
    name: 'Postman', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l-2 8-1 6 3 4 3-4-1-6-2-8z"/>
      <circle cx="12" cy="7" r="1.5" fill="currentColor"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 11l-3 3 1 1M14 11l3 3-1 1"/>
      <ellipse cx="12" cy="20" rx="2" ry="1" fill="currentColor"/>
    </svg>
  },
  { 
    name: 'Appium', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="3" width="12" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l3 3 3-3"/>
    </svg>
  },
  { 
    name: 'K6', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  },
];

// EXPERIENCE DATA
export const EXPERIENCE_DATA: Experience[] = [
  {
    duration: '2025 — PRESENT',
    company: 'Space International',
    role: 'Test Automation Engineer',
    description: 'Responsible for ensuring the quality of the Internet Banking platform. My work involves creating and executing test plans, developing automation scripts, and collaborating with developers to deliver a seamless and secure user experience for financial services. The Mobile testing framework uses Appium to perform functional and regression tests on both iOS and Android platforms, significantly reducing manual testing effort and improving release cycles',
    technologies: ['Automation Testing', 'Mobile Testing', 'Appium', 'Java', 'Javascript', 'Selenium', 'Cucumber', 'BDD', 'API Testing', 'CI/CD', 'SQL', 'Kibana'],
  },
  {
    duration: '2020 — 2025',
    company: 'Digital Area',
    role: 'Test Automation Engineer',
    description: 'Tested a variety of high-traffic web platforms including Biletebi.ge, Optimo, Area.ge and Extra.ge. Performed end-to-end manual and automated testing, identified and documented defects, and verified fixes to ensure robust performance across multiple projects.',
    technologies: ['C#', 'Playwright', 'Selenium', 'JavaScript', 'Automation Testing', 'Specflow BDD', 'K6', 'API Testing'],
  },
  {
    duration: '2019 — 2020',
    company: 'VTB Bank Georgia',
    role: 'Quality Assurance Engineer',
    description: 'Focused on the quality assurance of both Internet and Mobile Banking applications. Conducted functional, regression, and usability testing to ensure applications met strict financial industry standards and provided a reliable user experience.',
    technologies: ['Automation Testing', 'Mobile Testing', 'SQL', 'API Testing'],
  },
  {
    duration: '2018 — 2019',
    company: 'Silknet',
    role: 'Technical Troubleshooter',
    description: 'Provided technical support and troubleshooting for customers. Diagnosed and resolved a wide range of software and network issues, developing strong problem-solving skills and a deep understanding of application functions from a user perspective.',
    technologies: ['Problem Solving', 'Bug Fixing', 'Customer Support', 'Technical Analysis'],
  },
];

// PROJECTS DATA
export const PROJECTS_DATA: Project[] = [
  {
    name: 'Space Internet Bank in Uzbekistan',
    description: 'A comprehensive test automation framework developed for a complex internet banking project. The suite covers Front-end, Back-end, API, Mocking and database testing, ensuring end-to-end quality. It is designed to be scalable and maintainable, using the Page Object Model and BDD principles.',
    technologies: ['Selenium', 'Java', 'TestNG', 'CI/CD', 'Wiremock .Net', 'Cucumber', 'Postgree', 'REST-assured', 'Appium', 'Android', 'IOS'],
    liveUrl: 'https://www.spaceint.ge/',
  },
  {
    name: 'Biletebi.ge (E-commerce) • Digital Area',
    description: 'Developed a Performance and End-to-end testing framework using K6 and Playwright to analyze the scalability and reliability of a sample REST API. The project involved writing scripts for load, stress, and End-to-end testing, and integrating with CI/CD and Grafana for real-time monitoring and visualization of results.',
    technologies: ['Playwright', 'C#', 'K6', 'JavaScript', 'Grafana', 'Docker', 'REST API', 'Git', 'CI/CD', 'Selenium'],
    liveUrl: 'https://biletebi.ge',
  },
  {
    name: 'Optimo (E-commerce) • Digital Area',
    description: 'Optimo is retail business management software platform. I have developed automation test project from scratch, using Selenium C# with Nunit and Specflow BDD framework. My role included creating and executing test cases using automation frameworks, identifying and reporting software defects, collaborating with developers and QA teams to improve testing efficiency and contributing to continuous integration and delivery (CI/CD) processes.',
    technologies: ['C#', 'Java', 'Selenium', 'Playwright', 'CI/CD', 'Web', 'Android', 'iOS'],
    liveUrl: 'https://optimo.ge',
  },
  {
    name: 'Extra.ge (E-commerce) • Digital Area',
    description: 'Extra is internet market platform for various product category. I was supporting manual testers, developing test plan and test cases for mobile application and implementing microservice testing',
    technologies: ['API', 'Manual Testing', 'Jira', 'Android', 'iOS'],
    liveUrl: 'https://extra.ge',
  },
  {
    name: 'Area.ge (E-commerce) • Digital Area',
    description: 'Area is real-estate marketplace in Georgia that brings together buyers, sellers, renters, developers and financing institutions in one place. I was supporting developing test plan and test cases for Web application and implementing microservice testing',
    technologies: ['API', 'Manual Testing', 'Jira', 'Web', 'Android', 'iOS'],
    liveUrl: 'https://area.ge',
  },
  {
    name: 'VTB Bank Georgia',
    description: 'VTB Bank Georgia is online banking platform. I was developing test plan and test cases for Web and mobile application. I have developed Automation project in Java and Groovy from scratch.',
    technologies: ['Java', 'API', 'Automation Testing', 'Manual Testing', 'Jira', 'Web', 'Android', 'iOS', 'Katalon Studio', 'Postgree'],
    liveUrl: 'https://vtb.ge',
  }
];
