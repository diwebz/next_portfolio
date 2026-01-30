import type { Profile } from '@/types';

export const profile: Profile = {
  name: 'John Doe',
  nameJa: '山田太郎',
  email: 'hello@johndoe.dev',
  photo: '/images/profile.svg',
  location: 'Tokyo, Japan',

  resume: {
    en: '/resume-en.pdf',
    ja: '/resume-ja.pdf',
  },

  social: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    line: 'https://line.me/ti/p/~johndoe',
    twitter: 'https://twitter.com/johndoe',
  },

  availability: {
    status: 'open',
  },
};
