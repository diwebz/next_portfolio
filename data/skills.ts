import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    nameKey: 'skills.categories.frontend',
    skills: [
      { name: 'React', icon: 'react', level: 90, years: 4 },
      { name: 'TypeScript', icon: 'typescript', level: 85, years: 3 },
      { name: 'Next.js', icon: 'nextjs', level: 85, years: 3 },
      { name: 'Tailwind CSS', icon: 'tailwind', level: 90, years: 3 },
      { name: 'JavaScript', icon: 'javascript', level: 95, years: 6 },
      { name: 'HTML/CSS', icon: 'html', level: 95, years: 6 },
    ],
  },
  {
    id: 'backend',
    nameKey: 'skills.categories.backend',
    skills: [
      { name: 'Laravel', icon: 'laravel', level: 90, years: 5 },
      { name: 'PHP', icon: 'php', level: 90, years: 5 },
      { name: 'Node.js', icon: 'nodejs', level: 75, years: 3 },
      { name: 'Python', icon: 'python', level: 70, years: 2 },
      { name: 'Django', icon: 'django', level: 60, years: 1 },
    ],
  },
  {
    id: 'database',
    nameKey: 'skills.categories.database',
    skills: [
      { name: 'MySQL', icon: 'mysql', level: 85, years: 5 },
      { name: 'PostgreSQL', icon: 'postgresql', level: 80, years: 3 },
      { name: 'Redis', icon: 'redis', level: 70, years: 2 },
      { name: 'MongoDB', icon: 'mongodb', level: 65, years: 2 },
    ],
  },
  {
    id: 'devops',
    nameKey: 'skills.categories.devops',
    skills: [
      { name: 'Docker', icon: 'docker', level: 80, years: 3 },
      { name: 'Git', icon: 'git', level: 90, years: 6 },
      { name: 'Linux', icon: 'linux', level: 75, years: 4 },
      { name: 'AWS', icon: 'aws', level: 70, years: 2 },
      { name: 'CI/CD', icon: 'cicd', level: 75, years: 3 },
    ],
  },
];
