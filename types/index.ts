// Locale types
export type Locale = 'en' | 'ja';

// Profile types
export interface SocialLinks {
  github: string;
  linkedin: string;
  line?: string;
  twitter?: string;
}

export interface Profile {
  name: string;
  nameJa?: string;
  email: string;
  photo: string;
  location: string;
  resume: {
    en: string;
    ja: string;
  };
  social: SocialLinks;
  availability: {
    status: 'open' | 'limited' | 'unavailable';
  };
}

// Skills types
export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-100
  years?: number;
}

export interface SkillCategory {
  id: string;
  nameKey: string;
  skills: Skill[];
}

// Project types
export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

// Experience types
export interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  positionKey: string;
  location: string;
  startDate: string;
  endDate: string | 'present';
  descriptionKey: string;
  achievementKeys: string[];
  technologies: string[];
}

// Chat types
export interface QuickReply {
  label: string;
  value: string;
}

export interface ChatResponse {
  message: string;
  quickReplies?: QuickReply[];
}

export interface ChatResponses {
  [key: string]: ChatResponse;
}

export interface BilingualChatResponses {
  en: ChatResponses;
  ja: ChatResponses;
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickReplies?: QuickReply[];
}

// Navigation types
export interface NavItem {
  id: string;
  labelKey: string;
  href: string;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// API types
export interface ChatApiRequest {
  message: string;
  locale: Locale;
  context?: string;
}

export interface ChatApiResponse {
  message: string;
  quickReplies?: QuickReply[];
  handoff?: {
    type: 'line';
    url: string;
  };
}

// LINE types
export interface LineWebhookEvent {
  type: string;
  replyToken?: string;
  source: {
    userId?: string;
    type: string;
  };
  message?: {
    type: string;
    text?: string;
  };
}
