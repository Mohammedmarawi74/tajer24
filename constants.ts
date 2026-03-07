
import { ThemeConfig, SlideData } from './types';

export const THEMES: ThemeConfig[] = [
  {
    id: 'dark-neon',
    name: 'نيون داكن',
    primary: '#00ffa3',
    secondary: '#111827',
    bg: 'radial-gradient(circle at center, #111827 0%, #000000 100%)',
    text: '#ffffff',
    accent: '#00ffa3',
  },
  {
    id: 'investor-blue',
    name: 'أزرق المستثمر',
    primary: '#3b82f6',
    secondary: '#1e293b',
    bg: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    text: '#ffffff',
    accent: '#60a5fa',
  },
  {
    id: 'luxury-gold',
    name: 'ذهبي فاخر',
    primary: '#fbbf24',
    secondary: '#1a1a1a',
    bg: '#1a1a1a',
    text: '#ffffff',
    accent: '#d97706',
  }
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
