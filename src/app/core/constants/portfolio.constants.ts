import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';
import { Certification, Education } from '../models/certification.model';

export const PERSONAL_INFO = {
  name: 'Amarpal',
  role: 'Senior Angular Developer',
  tagline: 'Building scalable, data-driven enterprise web applications with modern Angular & AI productivity workflows.',
  location: 'Gurgaon, Haryana, India',
  email: 'amarpalkumar1991@gmail.com',
  phone: '+91 9971989713',
  linkedin: 'https://www.linkedin.com/in/amarpalkumar9971989713/',
  portfolio: 'https://amarpalkumarportfolio.firebaseapp.com',
  github: 'https://github.com',
  resumeUrl: 'assets/resume/amarpal-resume.pdf',
  stats: {
    itExperience: '8+ Years',
    itExperienceLabel: 'IT Experience',
    frontendExperience: '4+ Years',
    frontendExperienceLabel: 'Frontend Development',
    angularVersions: '8 → 17',
    angularVersionsLabel: 'Angular Modernization',
    enterpriseFocus: 'Enterprise',
    enterpriseFocusLabel: 'Data-Driven Apps'
  },
  bio: [
    'Senior Angular Developer focused on building scalable, maintainable, and data-driven enterprise applications.',
    'Specialized in Angular framework modernization (Angular 8 to 17), enterprise dashboard architectures, custom reusable UI component systems, and seamless REST API integrations.',
    'Adept at leveraging AI-assisted development (Claude, Claude Code) to accelerate frontend workflows, optimize refactoring, and build future-ready web solutions.'
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'purple-drone',
    company: 'Purple Drone Supply Chain Pvt. Ltd.',
    role: 'Angular Developer',
    location: 'Gurgaon, Haryana',
    period: 'March 2025 – Present',
    startDate: '2025-03',
    endDate: 'Present',
    isCurrent: true,
    responsibilities: [
      'Develop and enhance the Fulfillzy logistics platform covering vendor onboarding, order management, shipment tracking, and operational dashboards.',
      'Migrated a legacy enterprise application from Angular 12 to Angular 17, taking advantage of modern standalone components, strict typing, and improved build performance.',
      'Redesigned Vendor Onboarding, Dashboard, TrackMe, and My Orders modules using PrimeNG and responsive UI patterns.',
      'Refactored legacy codebase and systematically removed unused components to decrease technical debt.',
      'Integrated complex REST APIs for real-time logistics workflows and shipment event updates.',
      'Collaborated closely with backend developers to optimize API payload structures and minimize frontend response latencies.',
      'Developed interactive dashboards, operational charts, and data visualization screens for supply chain analytics.'
    ],
    technologies: ['Angular 12 → 17', 'TypeScript', 'RxJS', 'PrimeNG', 'REST APIs', 'SCSS', 'HTML5'],
    highlights: ['Migrated Angular 12 to 17', 'Fulfillzy Logistics Platform', 'PrimeNG UI Redesign']
  },
  {
    id: 'hostbooks',
    company: 'HostBooks Limited',
    role: 'Frontend Developer',
    location: 'Gurgaon, Haryana',
    period: 'July 2022 – January 2025',
    startDate: '2022-07',
    endDate: '2025-01',
    isCurrent: false,
    responsibilities: [
      'Developed data-driven enterprise web applications with complex user flows and multi-step business logic.',
      'Built reusable and scalable UI components across multi-product enterprise platforms.',
      'Built interactive dashboards for complex financial, accounting, and inventory workflows.',
      'Developed a data preparation and transformation tool similar to Tableau Prep Builder for processing, transforming, validating, and visualizing complex datasets.',
      'Integrated third-party platform APIs including Shopify, Canara Spring, Hotellogix, Shiprocket, and Tally.',
      'Implemented and consumed REST APIs using Django REST Framework.',
      'Executed complex frontend data transformation, schema validation, and interactive chart visualization.'
    ],
    technologies: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'Django REST Framework', 'Shopify API', 'Tally Integration'],
    highlights: ['Tableau-like Data Prep Tool', 'Third-Party Suite Integration', 'Enterprise Accounting Modules']
  },
  {
    id: 'bhel',
    company: 'ASSCP BHEL',
    role: 'IT Specialist',
    location: 'Gurgaon, Haryana',
    period: 'August 2017 – March 2022',
    startDate: '2017-08',
    endDate: '2022-03',
    isCurrent: false,
    responsibilities: [
      'Managed enterprise IT infrastructure across hardware, workstations, network systems, and server setups.',
      'Maintained network devices, security configurations, and enterprise system integrity.',
      'Provided advanced technical support and IT troubleshooting for organizational operations.',
      'Supported ERP implementation across enterprise business units.',
      'Supported backend infrastructure setup, database connectivity, and server configuration.',
      'Installed, configured, and maintained enterprise IT systems.'
    ],
    technologies: ['IT Infrastructure', 'ERP Systems', 'Network Admin', 'Server Management', 'Enterprise Troubleshooting'],
    highlights: ['Enterprise ERP Support', 'Network & Systems Admin', '5 Years Infrastructure Management']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'fulfillzy',
    name: 'Fulfillzy Logistics Platform',
    tagline: 'Enterprise Supply Chain & Fulfillment Web Application',
    description: 'Modernized a logistics management web application by migrating Angular 12 to Angular 17, redesigning UI modules with PrimeNG, implementing dashboards, REST API integrations, shipment tracking, order workflows, and performance-focused frontend refactoring.',
    featured: true,
    category: 'Logistics',
    iconName: 'truck',
    technologies: ['Angular 17', 'TypeScript', 'PrimeNG', 'RxJS', 'REST APIs', 'SCSS'],
    features: [
      'Angular 12 to 17 Framework Migration',
      'UI Modernization with PrimeNG',
      'Vendor Onboarding & Multi-Step Workflows',
      'Live TrackMe Shipment Tracking System',
      'Operational Dashboards & Logistics Charts',
      'API Payload Optimization & Refactoring'
    ],
    caseStudy: {
      overview: 'Fulfillzy is an end-to-end logistics platform designed for supply chain managers, warehouse operators, and logistics partners. The application needed a complete architectural migration from Angular 12 to Angular 17 along with a modern UI overhaul.',
      problem: 'The legacy codebase suffered from outdated Angular versions, monolithic component files, unused dead code, and inconsistent UI patterns that slowed down feature development and degraded user experience.',
      challenge: 'Migrating a live logistics application without disrupting operational workflows, while simultaneously modernizing complex vendor onboarding modules and real-time order tracking screens.',
      solution: 'Architected a modular migration strategy to Angular 17 standalone components, replaced custom ad-hoc tables with PrimeNG components, integrated unified RxJS data streams, and refactored API payload consumption.',
      technology: ['Angular 17', 'TypeScript', 'RxJS', 'PrimeNG', 'REST APIs', 'CSS Grid/Flexbox'],
      keyContributions: [
        'Migrated core modules from Angular 12 to Angular 17',
        'Redesigned Vendor Onboarding, Dashboard, TrackMe, and My Orders modules',
        'Refactored legacy code and eliminated unused components',
        'Integrated logistics REST APIs with backend teams for seamless tracking updates'
      ],
      architecture: 'Angular Standalone Component Architecture with RxJS State Management & PrimeNG UI Component Library.',
      outcome: 'A modern, clean, highly responsive logistics platform featuring streamlined vendor onboarding, real-time shipment monitoring, and significantly improved developer maintainability.'
    }
  },
  {
    id: 'data-prep-tool',
    name: 'Data Preparation Tool – HostBooks',
    tagline: 'Visual Data Transformation & Validation Application',
    description: 'Developed a data transformation and preparation application similar to Tableau Prep Builder for processing, transforming, validating, and visualizing complex enterprise datasets.',
    featured: true,
    category: 'Enterprise Tools',
    iconName: 'database',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'Data Transformation', 'REST APIs', 'Visualization'],
    features: [
      'Visual Node-Based Data Flow Pipeline',
      'Data Cleaning & Field Mapping Operations',
      'Schema Validation & Error Highlight Grid',
      'Interactive Dataset Preview & Profiling',
      'Export & Backend ETL Pipeline Integration'
    ],
    caseStudy: {
      overview: 'A specialized enterprise tool built for HostBooks that allows non-technical accounting and business users to cleanse, transform, and validate complex financial datasets visually before importing into core ledgers.',
      problem: 'Enterprise clients frequently uploaded malformed data with mismatched columns, invalid date formats, or missing attributes, causing silent backend database errors.',
      challenge: 'Building a performant, browser-based data processing workspace capable of handling large datasets without freezing the DOM thread or crashing user browsers.',
      solution: 'Engineered custom visual data grid pipelines in Angular using RxJS data streams, virtual scrolling, memoized field transformation functions, and step-by-step validation rules.',
      technology: ['Angular', 'TypeScript', 'RxJS Signals', 'Data Transformation Pipeline', 'Django REST Framework'],
      keyContributions: [
        'Architected visual data transformation workspace UI',
        'Built interactive dashboards for complex data preparation flows',
        'Implemented validation rules and visual error indicators',
        'Integrated with backend Django REST endpoints for bulk data processing'
      ],
      architecture: 'Reactive Angular Frontend with Custom RxJS Transformation Engines and Django REST API integration.',
      outcome: 'Delivered an intuitive, Tableau Prep Builder-style data preparation suite that enabled enterprise users to rapidly clean and validate thousands of records before system ingestion.'
    }
  },
  {
    id: 'integration-suite',
    name: 'Third-Party Integration Suite',
    tagline: 'E-Commerce, ERP, Hospitality & Finance Connectors',
    description: 'Worked on frontend and API integrations with Shopify, Canara Spring, Hotellogix, Shiprocket, and Tally supporting commerce, hospitality, logistics, banking/finance, and accounting workflows.',
    featured: true,
    category: 'API & Integrations',
    iconName: 'layers',
    technologies: ['Angular', 'REST APIs', 'Shopify API', 'Shiprocket API', 'Tally Integration', 'Django REST'],
    features: [
      'Shopify E-Commerce Order & Inventory Sync',
      'Shiprocket Logistics & Shipping Integration',
      'Tally Accounting Data Bridge',
      'Hotellogix Hospitality Booking Sync',
      'Canara Spring Financial Gateway Integration'
    ],
    caseStudy: {
      overview: 'A multi-vertical third-party API integration engine embedded into HostBooks enterprise web applications to streamline business data synchronization across major SaaS and ERP platforms.',
      problem: 'Enterprise clients relied on disparate software platforms (Shopify for e-commerce, Shiprocket for logistics, Tally for accounting, Hotellogix for hotel PMS) requiring unified data synchronization.',
      challenge: 'Managing diverse API schemas, authentication mechanisms, data formats (JSON, XML), and error handling strategies across five distinct enterprise systems.',
      solution: 'Created modular integration services in Angular with standard request mapping adapters, reactive status monitors, and interactive configuration drawers for end-users.',
      technology: ['Angular', 'REST APIs', 'Django REST Framework', 'JSON/XML Parsers', 'RxJS Adapters'],
      keyContributions: [
        'Designed frontend integration settings and OAuth connection flows',
        'Mapped complex third-party payload fields into standardized internal schemas',
        'Integrated sync status dashboards and error retry interfaces',
        'Worked with Django REST APIs to manage webhook signals and asynchronous jobs'
      ],
      architecture: 'Modular Adapter Pattern in Angular Services consuming Django REST API proxies for third-party systems.',
      outcome: 'Successfully unified e-commerce, hospitality, logistics, and accounting workflows under a single user-friendly enterprise UI.'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    id: 'frontend',
    description: 'Core web technologies & framework expertise',
    iconName: 'code-2',
    skills: [
      { name: 'Angular 8–17', category: 'frontend', isPrimary: true, tag: 'Core' },
      { name: 'TypeScript', category: 'frontend', isPrimary: true, tag: 'Core' },
      { name: 'JavaScript ES6+', category: 'frontend', isPrimary: true, tag: 'Core' },
      { name: 'HTML5', category: 'frontend', isPrimary: false },
      { name: 'CSS3 / SCSS', category: 'frontend', isPrimary: false },
      { name: 'Bootstrap', category: 'frontend', isPrimary: false }
    ]
  },
  {
    title: 'Angular Ecosystem',
    id: 'angular',
    description: 'Libraries, patterns & state management',
    iconName: 'box',
    skills: [
      { name: 'RxJS', category: 'angular', isPrimary: true, tag: 'Core' },
      { name: 'Angular Services', category: 'angular', isPrimary: true },
      { name: 'Dependency Injection', category: 'angular', isPrimary: true },
      { name: 'PrimeNG', category: 'angular', isPrimary: true, tag: 'Featured' },
      { name: 'Angular Material', category: 'angular', isPrimary: false },
      { name: 'NgRx (Basic)', category: 'angular', isPrimary: false }
    ]
  },
  {
    title: 'APIs & Integrations',
    id: 'apis',
    description: 'Data transport, REST protocols & DRF',
    iconName: 'workflow',
    skills: [
      { name: 'REST APIs', category: 'apis', isPrimary: true, tag: 'Core' },
      { name: 'Django REST Framework', category: 'apis', isPrimary: true },
      { name: 'JSON Parsing', category: 'apis', isPrimary: false },
      { name: 'XML Data Transport', category: 'apis', isPrimary: false },
      { name: 'Third-party API Integration', category: 'apis', isPrimary: true }
    ]
  },
  {
    title: 'Third-Party Platforms',
    id: 'platforms',
    description: 'E-commerce, logistics & ERP integrations',
    iconName: 'globe',
    skills: [
      { name: 'Shopify', category: 'platforms', isPrimary: true },
      { name: 'Shiprocket', category: 'platforms', isPrimary: true },
      { name: 'Tally Accounting', category: 'platforms', isPrimary: true },
      { name: 'Hotellogix', category: 'platforms', isPrimary: false },
      { name: 'Canara Spring', category: 'platforms', isPrimary: false }
    ]
  },
  {
    title: 'AI & Productivity',
    id: 'ai',
    description: 'AI-assisted coding & modern dev workflows',
    iconName: 'sparkles',
    skills: [
      { name: 'AI Chat Integration', category: 'ai', isPrimary: true, tag: 'AI' },
      { name: 'Claude', category: 'ai', isPrimary: true, tag: 'AI' },
      { name: 'Claude Code', category: 'ai', isPrimary: true, tag: 'AI' },
      { name: 'Claude Code Actions', category: 'ai', isPrimary: true, tag: 'AI' },
      { name: 'AI-assisted Development', category: 'ai', isPrimary: true }
    ]
  },
  {
    title: 'Testing & Quality',
    id: 'testing',
    description: 'End-to-end & component testing',
    iconName: 'check-circle-2',
    skills: [
      { name: 'Playwright', category: 'testing', isPrimary: true },
      { name: 'Unit Testing (Basic)', category: 'testing', isPrimary: false }
    ]
  },
  {
    title: 'Databases',
    id: 'databases',
    description: 'Relational & document database storage',
    iconName: 'database',
    skills: [
      { name: 'MySQL', category: 'databases', isPrimary: true },
      { name: 'MongoDB', category: 'databases', isPrimary: false }
    ]
  },
  {
    title: 'Cloud & Developer Tools',
    id: 'tools',
    description: 'Version control, cloud & IDE tools',
    iconName: 'cpu',
    skills: [
      { name: 'Git', category: 'tools', isPrimary: true },
      { name: 'GitHub', category: 'tools', isPrimary: true },
      { name: 'Bitbucket', category: 'tools', isPrimary: false },
      { name: 'Firebase Hosting', category: 'tools', isPrimary: true },
      { name: 'AWS S3', category: 'tools', isPrimary: false },
      { name: 'VS Code', category: 'tools', isPrimary: true }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'claude-101',
    name: 'Claude 101',
    issuer: 'Anthropic / AI Engineering',
    badgeText: 'AI Certified',
    iconName: 'brain',
    description: 'Foundational certification covering Claude prompt engineering, LLM architecture principles, and developer assistance techniques.'
  },
  {
    id: 'claude-code-101',
    name: 'Claude Code 101',
    issuer: 'Anthropic / AI Engineering',
    badgeText: 'AI Developer',
    iconName: 'terminal',
    description: 'Advanced CLI & agentic coding workflows using Claude Code for automated refactoring, code exploration, and test generation.'
  },
  {
    id: 'claude-code-actions',
    name: 'Claude Code Actions',
    issuer: 'Anthropic / AI Engineering',
    badgeText: 'Agentic Workflows',
    iconName: 'sparkles',
    description: 'Building autonomous actions, custom tools, and repository-level multi-file code editing pipelines.'
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Maharshi Dayanand University (MDU), Rohtak',
    location: 'Rohtak, Haryana',
    year: '2016',
    description: 'Advanced study in software engineering, database management systems, data structures & algorithms, and enterprise computing.'
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Maharshi Dayanand University (MDU), Rohtak',
    location: 'Rohtak, Haryana',
    year: '2013',
    description: 'Core computer science fundamentals, programming languages, web development, and computer architecture.'
  },
  {
    id: '12th',
    degree: 'Senior Secondary (12th Grade)',
    institution: 'Board of School Education Haryana (BSEH)',
    location: 'Haryana',
    year: '2010',
    description: 'Science & Mathematics stream.'
  },
  {
    id: '10th',
    degree: 'Secondary School (10th Grade)',
    institution: 'Board of School Education Haryana (BSEH)',
    location: 'Haryana',
    year: '2008',
    description: 'General Curriculum.'
  }
];

export const AI_WORKFLOW_NODES = [
  { id: 'exploration', title: 'Code Exploration', description: 'Rapidly parsing legacy Angular codebases & tracing API models' },
  { id: 'refactoring', title: 'Refactoring', description: 'Migrating legacy components to Angular 17 standalone syntax' },
  { id: 'debugging', title: 'Debugging', description: 'Diagnosing tricky RxJS memory leaks & async race conditions' },
  { id: 'assistance', title: 'Dev Assistance', description: 'Accelerating repetitive boilerplate creation & UI styling' },
  { id: 'productivity', title: 'Productivity', description: 'High-velocity feature delivery without compromising enterprise standards' },
  { id: 'workflow', title: 'UI Workflow', description: 'Designing accessible, modern frontend interfaces faster' }
];
