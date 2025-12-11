export type Language = 'en' | 'zh';

export interface LocalizedString {
  en: string;
  zh: string;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: LocalizedString;
  period: LocalizedString;
  description: LocalizedString;
}

export interface TranslationData {
  sourceLang: string;
  targetLang: string;
  sourceText: string;
  targetText: string;
}

export interface PortfolioItem {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  imageUrl: string;
  link?: string;
  translationData?: TranslationData;
}

export interface EducationItem {
  institution: LocalizedString;
  degree: LocalizedString;
  period: LocalizedString;
  details?: LocalizedString;
}

export interface AppContent {
  nav: {
    home: LocalizedString;
    portfolio: LocalizedString;
  };
  hero: {
    title: LocalizedString;
    subtitle: LocalizedString;
    location: LocalizedString;
    cta: LocalizedString;
  };
  about: {
    title: LocalizedString;
    text: LocalizedString;
    educationTitle: LocalizedString;
    skillsTitle: LocalizedString;
    skills: LocalizedString[];
  };
  experience: {
    title: LocalizedString;
  };
  portfolio: {
    title: LocalizedString;
  };
  aiDemo: {
    title: LocalizedString;
    description: LocalizedString;
    placeholder: LocalizedString;
    resultLabel: LocalizedString;
    button: LocalizedString;
  };
  footer: {
    copyright: LocalizedString;
    contactTitle: LocalizedString;
  };
}