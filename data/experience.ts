import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Solutions Inc.',
    companyLogo: '/images/companies/techsolutions.png',
    positionKey: 'experience.exp1.position',
    location: 'Tokyo, Japan',
    startDate: '2022-04',
    endDate: 'present',
    descriptionKey: 'experience.exp1.description',
    achievementKeys: [
      'experience.exp1.achievement1',
      'experience.exp1.achievement2',
      'experience.exp1.achievement3',
    ],
    technologies: ['Laravel', 'React', 'AWS', 'Docker', 'PostgreSQL'],
  },
  {
    id: 'exp-2',
    company: 'Digital Agency Co.',
    companyLogo: '/images/companies/digitalagency.png',
    positionKey: 'experience.exp2.position',
    location: 'Tokyo, Japan',
    startDate: '2020-01',
    endDate: '2022-03',
    descriptionKey: 'experience.exp2.description',
    achievementKeys: [
      'experience.exp2.achievement1',
      'experience.exp2.achievement2',
      'experience.exp2.achievement3',
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
  },
  {
    id: 'exp-3',
    company: 'StartUp Labs',
    companyLogo: '/images/companies/startuplabs.png',
    positionKey: 'experience.exp3.position',
    location: 'Osaka, Japan',
    startDate: '2018-04',
    endDate: '2019-12',
    descriptionKey: 'experience.exp3.description',
    achievementKeys: [
      'experience.exp3.achievement1',
      'experience.exp3.achievement2',
      'experience.exp3.achievement3',
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Git'],
  },
];
