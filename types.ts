
export type SlideType = 'TITLE' | 'CERTIFICATION' | 'CHART' | 'PRICING' | 'STEPS';

export interface Certification {
  id: string;
  logoUrl: string;
  title: string;
  description: string;
}

export interface SlideData {
  id: string;
  type: SlideType;
  title: string;
  subtitle: string;
  content?: any;
  image?: string;
  logo?: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  bg: string;
  text: string;
  accent: string;
}

export interface EditorState {
  slides: SlideData[];
  activeSlideId: string;
  theme: ThemeConfig;
  customCss: string;
  showGrid: boolean;
}
