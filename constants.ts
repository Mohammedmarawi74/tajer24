
import { ThemeConfig, SlideData } from './types';

// Al-Tajer Digital Modern Color Palette
export const COLORS = {
  // Primary Colors
  white: '#FFFFFF',
  lightGray: '#F8FAFC',
  electricBlue: '#2563EB',
  charcoalBlack: '#0F172A',
  darkGray: '#4B5563',
  
  // Accent Colors
  mintGreen: '#10B981',
  softPurple: '#8B5CF6',
  alertOrange: '#F97316',
  
  // Gradients
  blueGradient: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
  mintGradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  purpleGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
};

export const THEMES: ThemeConfig[] = [
  {
    id: 'altajer-modern',
    name: 'التاجر العصري',
    primary: COLORS.electricBlue,
    secondary: COLORS.charcoalBlack,
    bg: `linear-gradient(180deg, ${COLORS.lightGray} 0%, ${COLORS.white} 100%)`,
    text: COLORS.charcoalBlack,
    accent: COLORS.mintGreen,
  },
  {
    id: 'clean-white',
    name: 'أبيض نقي',
    primary: COLORS.electricBlue,
    secondary: COLORS.darkGray,
    bg: COLORS.white,
    text: COLORS.charcoalBlack,
    accent: COLORS.softPurple,
  },
  {
    id: 'blue-professional',
    name: 'أزرق احترافي',
    primary: COLORS.electricBlue,
    secondary: COLORS.charcoalBlack,
    bg: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)',
    text: COLORS.charcoalBlack,
    accent: COLORS.mintGreen,
  },
  {
    id: 'dark-modern',
    name: 'داكن عصري',
    primary: COLORS.electricBlue,
    secondary: COLORS.charcoalBlack,
    bg: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
    text: COLORS.white,
    accent: COLORS.mintGreen,
  },
];

export const LOGO_OPTIONS = [
  { id: 'logo-1', name: 'شعار 1', path: '/logooo/logo-1.png' },
  { id: 'logo-2', name: 'شعار 2', path: '/logooo/logo-2.png' },
  { id: 'logo-3', name: 'شعار 3', path: '/logooo/logo-3.png' },
  { id: 'logo-4', name: 'شعار 4', path: '/logooo/logo-4.png' }
];

export const INITIAL_SLIDES: SlideData[] = [
  {
    id: 'slide-1',
    type: 'TITLE',
    title: 'الركائز الاستراتيجية للتحول الرقمي',
    subtitle: 'تحليل البيانات والنمو الاقتصادي',
    logo: '/logooo/logo-1.png'
  },
  {
    id: 'slide-2',
    type: 'CERTIFICATION',
    title: 'شهادات الاعتماد والجودة',
    subtitle: 'نلتزم بأعلى المعايير العالمية في خدماتنا',
    content: {
      certs: [
        { id: '1', title: 'ISO 9001', description: 'شهادة إدارة الجودة العالمية', logoUrl: 'https://cdn-icons-png.flaticon.com/512/3233/3233215.png' },
        { id: '2', title: 'SASO', description: 'المواصفات والمقاييس السعودية', logoUrl: 'https://cdn-icons-png.flaticon.com/512/9632/9632128.png' },
        { id: '3', title: 'SOC2', description: 'أمن البيانات والخصوصية', logoUrl: 'https://cdn-icons-png.flaticon.com/512/10412/10412595.png' },
        { id: '4', title: 'ISO 27001', description: 'نظام إدارة أمن المعلومات', logoUrl: 'https://cdn-icons-png.flaticon.com/512/3233/3233156.png' }
      ]
    }
  }
];
