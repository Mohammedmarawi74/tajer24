
import React from 'react';
import { SlideData, ThemeConfig } from '../types';
import Marquee from './Marquee';

interface CanvasPreviewProps {
  slide: SlideData;
  theme: ThemeConfig;
  customCss: string;
}

const CanvasPreview: React.FC<CanvasPreviewProps> = ({ slide, theme, customCss }) => {
  return (
    <div className="canvas-container">
      <div
        id="slide-canvas"
        className="slide-canvas"
        style={{
          background: theme.bg,
          color: theme.text,
          border: `1px solid ${theme.primary}20`
        }}
      >
        <style>{customCss}</style>

        {/* Global Slide Overlay Elements */}
        <div className="canvas-overlay"
             style={{ backgroundImage: `radial-gradient(${theme.primary} 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />

        {/* Header Branding */}
        <div className="canvas-header">
           {slide.logo && <img src={slide.logo} className="canvas-logo" alt="Logo" />}
           <div className="canvas-brand">
              <span className="canvas-brand-label">Investor Radar</span>
              <div className="canvas-brand-dot" style={{ backgroundColor: theme.primary }} />
           </div>
        </div>

        {/* Slide Content Rendering */}
        <div className="canvas-content">
          {slide.type === 'TITLE' && (
            <>
              <h1 className="slide-title" style={{ color: theme.text }}>
                {slide.title}
              </h1>
              <div className="title-divider" style={{ backgroundColor: theme.primary }} />
              <p className="slide-subtitle">
                {slide.subtitle}
              </p>
            </>
          )}

          {slide.type === 'CERTIFICATION' && (
            <>
              <h2 className="slide-heading">{slide.title}</h2>
              <p className="slide-description">{slide.subtitle}</p>

              <div className="w-full">
                <Marquee items={slide.content?.certs || []} themeColor={theme.primary} />
              </div>
            </>
          )}

          {/* Simple Placeholder for other types */}
          {['CHART', 'PRICING', 'STEPS'].includes(slide.type) && (
            <div className="development-placeholder">
               <h2 className="slide-heading">{slide.title}</h2>
               <p className="development-text">هذا القسم قيد التطوير...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="canvas-footer">
           <div className="footer-copyright">
              <span className="footer-copyright-text">© 2025 رادار المستثمر</span>
           </div>
           <div className="footer-trust">
             <div className="footer-avatars">
                <img src="https://picsum.photos/seed/u1/40/40" className="footer-avatar" />
                <img src="https://picsum.photos/seed/u2/40/40" className="footer-avatar" />
                <img src="https://picsum.photos/seed/u3/40/40" className="footer-avatar" />
             </div>
             <span className="footer-trust-label">يثق بنا 10,000+ مستثمر</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasPreview;
