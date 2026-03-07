
import React, { useState, useCallback, useEffect } from 'react';
import { EditorState, SlideData, ThemeConfig, SlideType } from './types';
import { THEMES, INITIAL_SLIDES } from './constants';
import EditorSidebar from './components/EditorSidebar';
import CanvasPreview from './components/CanvasPreview';
import SlideNavigator from './components/SlideNavigator';
import { exportAsPng } from './utils/export';
import { ShieldCheck, Share2, Moon } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<EditorState>({
    slides: INITIAL_SLIDES,
    activeSlideId: INITIAL_SLIDES[0].id,
    theme: THEMES[0],
    customCss: '',
    showGrid: false,
  });

  const activeSlide = state.slides.find(s => s.id === state.activeSlideId) || state.slides[0];

  const updateSlide = (id: string, data: Partial<SlideData>) => {
    setState(prev => ({
      ...prev,
      slides: prev.slides.map(s => s.id === id ? { ...s, ...data } : s)
    }));
  };

  const updateTheme = (theme: ThemeConfig) => {
    setState(prev => ({ ...prev, theme }));
  };

  const updateCss = (customCss: string) => {
    setState(prev => ({ ...prev, customCss }));
  };

  const addSlide = () => {
    const newId = `slide-${Date.now()}`;
    const newSlide: SlideData = {
      id: newId,
      type: 'TITLE',
      title: 'شريحة جديدة',
      subtitle: 'أدخل الوصف هنا',
      logo: activeSlide.logo
    };
    setState(prev => ({
      ...prev,
      slides: [...prev.slides, newSlide],
      activeSlideId: newId
    }));
  };

  const handleExport = useCallback(() => {
    exportAsPng('slide-canvas', `carousel-slide-${activeSlide.id}`);
  }, [activeSlide.id]);

  return (
    <div className="app-container">
      {/* Navbar */}
      <header className="app-header">
        <div className="header-brand">
          <div className="brand-logo">
            <ShieldCheck className="text-black" size={24} strokeWidth={2.5} />
          </div>
          <div className="brand-text">
            <h1 className="brand-title">رادار المستثمر</h1>
            <p className="brand-subtitle">Investor Radar Builder</p>
          </div>
        </div>

        <div className="header-actions">
          <div className="vision-badge">
            <div className="vision-indicator" />
            <span className="vision-label">رؤية 2030</span>
          </div>
          <button className="icon-button">
            <Share2 size={20} />
          </button>
          <button className="icon-button">
            <Moon size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="app-main">
        {/* Editor Sidebar */}
        <EditorSidebar
          state={state}
          updateSlide={updateSlide}
          updateTheme={updateTheme}
          updateCss={updateCss}
          addSlide={addSlide}
          onExport={handleExport}
        />

        {/* Workspace */}
        <div className="workspace">
          <CanvasPreview
            slide={activeSlide}
            theme={state.theme}
            customCss={state.customCss}
          />

          <SlideNavigator
            slides={state.slides}
            activeSlideId={state.activeSlideId}
            setActiveSlideId={(id) => setState(prev => ({ ...prev, activeSlideId: id }))}
            addSlide={addSlide}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
