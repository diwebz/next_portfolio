import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'ecommerce',
    titleKey: 'projects.ecommerce.title',
    descriptionKey: 'projects.ecommerce.description',
    image: '/images/projects/ecommerce.svg',
    technologies: ['Laravel', 'React', 'MySQL', 'Stripe', 'Redis'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/johndoe/ecommerce',
    featured: true,
    year: 2024,
  },
  {
    id: 'taskmanager',
    titleKey: 'projects.taskmanager.title',
    descriptionKey: 'projects.taskmanager.description',
    image: '/images/projects/taskmanager.svg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'WebSocket'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/johndoe/taskmanager',
    featured: true,
    year: 2024,
  },
  {
    id: 'portfolio',
    titleKey: 'projects.portfolio.title',
    descriptionKey: 'projects.portfolio.description',
    image: '/images/projects/portfolio.svg',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/johndoe/portfolio',
    featured: true,
    year: 2025,
  },
  {
    id: 'api',
    titleKey: 'projects.api.title',
    descriptionKey: 'projects.api.description',
    image: '/images/projects/api.svg',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/johndoe/api-service',
    featured: false,
    year: 2023,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
