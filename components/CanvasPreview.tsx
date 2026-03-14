
import React from 'react';
import { SlideData, ThemeConfig } from '../types';
import Marquee from './Marquee';
import { Sparkles, TrendingUp } from 'lucide-react';

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

        {/* Decorative Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.primary}15 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.accent}10 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Header Branding */}
        <div className="canvas-header">
           {slide.logo && <img src={slide.logo} className="canvas-logo" alt="Logo" />}
           <div className="canvas-brand">
              <span className="canvas-brand-label">Al-Tajer Digital</span>
              <div className="canvas-brand-dot" style={{ backgroundColor: theme.primary }} />
           </div>
        </div>

        {/* Slide Content Rendering */}
        <div className="canvas-content">
          {slide.type === 'TITLE' && (
            <>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
                padding: '8px 16px',
                background: `linear-gradient(135deg, ${theme.primary}10 0%, ${theme.accent}10 100%)`,
                borderRadius: '9999px',
                border: `1px solid ${theme.primary}20`
              }}>
                <Sparkles size={16} style={{ color: theme.primary }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: theme.primary
                }}>رؤية استراتيجية 2030</span>
              </div>
              
              <h1 className="slide-title" style={{ color: theme.text }}>
                {slide.title}
              </h1>
              <div className="title-divider" style={{ backgroundColor: theme.primary }} />
              <p className="slide-subtitle">
                {slide.subtitle}
              </p>
              
              {/* Decorative Stats Badge */}
              <div style={{
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 24px',
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '20px',
                border: `1px solid ${theme.primary}15`,
                backdropFilter: 'blur(8px)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.accent} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <TrendingUp size={20} strokeWidth={2.5} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 500 }}>نمو متسارع</div>
                  <div style={{ fontSize: '14px', color: theme.text, fontWeight: 700 }}>+127% هذا العام</div>
                </div>
              </div>
            </>
          )}

          {slide.type === 'CERTIFICATION' && (
            <>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '12px',
                padding: '10px 20px',
                background: `linear-gradient(135deg, ${theme.primary}10 0%, ${theme.accent}10 100%)`,
                borderRadius: '9999px',
                border: `1px solid ${theme.primary}20`
              }}>
                <Sparkles size={16} style={{ color: theme.primary }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: theme.primary
                }}>شهادات معتمدة دولياً</span>
              </div>
              
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
              <span className="footer-copyright-text">© 2025 منصة التاجر الرقمية</span>
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
