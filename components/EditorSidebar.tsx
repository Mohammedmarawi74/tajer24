
import React, { useState } from 'react';
import { EditorState, SlideData, ThemeConfig } from '../types';
import { THEMES, LOGO_OPTIONS } from '../constants';
import { Layout, Palette, Code, Image as ImageIcon, Plus, Trash2, Download, X, Sparkles, Shield, BarChart3, DollarSign, List } from 'lucide-react';

interface EditorSidebarProps {
  state: EditorState;
  updateSlide: (id: string, data: Partial<SlideData>) => void;
  updateTheme: (theme: ThemeConfig) => void;
  updateCss: (css: string) => void;
  addSlide: () => void;
  onExport: () => void;
}

const EditorSidebar: React.FC<EditorSidebarProps> = ({
  state,
  updateSlide,
  updateTheme,
  updateCss,
  addSlide,
  onExport
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'theme' | 'css'>('content');
  const activeSlide = state.slides.find(s => s.id === state.activeSlideId) || state.slides[0];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'image') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateSlide(activeSlide.id, { [field]: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const getSlideTypeIcon = (type: string) => {
    switch (type) {
      case 'TITLE': return <Layout size={16} />;
      case 'CERTIFICATION': return <Shield size={16} />;
      case 'CHART': return <BarChart3 size={16} />;
      case 'PRICING': return <DollarSign size={16} />;
      case 'STEPS': return <List size={16} />;
      default: return <Layout size={16} />;
    }
  };

  const getSlideTypeLabel = (type: string) => {
    switch (type) {
      case 'TITLE': return 'الرئيسية';
      case 'CERTIFICATION': return 'الشهادات';
      case 'CHART': return 'الرسم البياني';
      case 'PRICING': return 'الأسعار';
      case 'STEPS': return 'خطوات';
      default: return type;
    }
  };

  return (
    <div className="editor-sidebar">
      {/* Tabs */}
      <div className="sidebar-tabs">
        <button
          onClick={() => setActiveTab('content')}
          className={`sidebar-tab ${activeTab === 'content' ? 'active' : ''}`}
        >
          <Layout size={18} />
          <span>المحتوى</span>
        </button>
        <button
          onClick={() => setActiveTab('theme')}
          className={`sidebar-tab ${activeTab === 'theme' ? 'active' : ''}`}
        >
          <Palette size={18} />
          <span>الثيمات</span>
        </button>
        <button
          onClick={() => setActiveTab('css')}
          className={`sidebar-tab ${activeTab === 'css' ? 'active' : ''}`}
        >
          <Code size={18} />
          <span>CSS</span>
        </button>
      </div>

      <div className="sidebar-content">
        {activeTab === 'content' && (
          <div className="animate-fade-in">
            <div className="sidebar-section">
              <label className="section-label">تخطيط الشريحة</label>
              <div className="slide-type-grid">
                {['TITLE', 'CERTIFICATION', 'CHART', 'PRICING', 'STEPS'].map((type) => (
                  <button
                    key={type}
                    onClick={() => updateSlide(activeSlide.id, { type: type as any })}
                    className={`slide-type-btn ${activeSlide.type === type ? 'active' : ''}`}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {getSlideTypeIcon(type)}
                      {getSlideTypeLabel(type)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
               <div className="form-group">
                  <label className="form-label">العنوان الرئيسي</label>
                  <textarea
                    value={activeSlide.title}
                    onChange={(e) => updateSlide(activeSlide.id, { title: e.target.value })}
                    className="form-textarea"
                    placeholder="أدخل عنوان الشريحة الرئيسي..."
                  />
               </div>
               <div className="form-group">
                  <label className="form-label">العنوان الفرعي</label>
                  <input
                    type="text"
                    value={activeSlide.subtitle}
                    onChange={(e) => updateSlide(activeSlide.id, { subtitle: e.target.value })}
                    className="form-input"
                    placeholder="أدخل الوصف الفرعي..."
                  />
               </div>
            </div>

            <div className="sidebar-section media-section">
              <label className="section-label">الشعار</label>

              {/* Logo Selection Grid */}
              <div className="logo-selection-grid">
                {LOGO_OPTIONS.map((logoOption) => (
                  <button
                    key={logoOption.id}
                    onClick={() => updateSlide(activeSlide.id, { logo: logoOption.path })}
                    className={`logo-option-btn ${activeSlide.logo === logoOption.path ? 'selected' : ''}`}
                  >
                    <img src={logoOption.path} alt={logoOption.name} className="logo-option-img" />
                    <span className="logo-option-name">{logoOption.name}</span>
                  </button>
                ))}
              </div>

              {/* Remove Logo Button */}
              {activeSlide.logo && (
                <button
                  onClick={() => updateSlide(activeSlide.id, { logo: '' })}
                  className="remove-logo-btn"
                >
                  <X size={16} />
                  <span>إزالة الشعار</span>
                </button>
              )}

              {/* Upload Custom Logo */}
              <div className="upload-divider">
                <span>أو</span>
              </div>

              <label className="media-upload">
                <div className="media-upload-box">
                  <ImageIcon className="media-upload-icon" size={20} />
                  <span className="media-upload-label">رفع شعار مخصص</span>
                  <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, 'logo')} accept="image/*" />
                </div>
              </label>

              {/* Image Upload */}
              <label className="media-upload" style={{ marginTop: '12px' }}>
                <div className="media-upload-box">
                  <ImageIcon className="media-upload-icon" size={20} />
                  <span className="media-upload-label">رفع صورة</span>
                  <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, 'image')} accept="image/*" />
                </div>
              </label>
            </div>
          </div>
        )}

        {activeTab === 'theme' && (
          <div className="theme-list animate-fade-in">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => updateTheme(theme)}
                className={`theme-item ${state.theme.id === theme.id ? 'active' : ''}`}
              >
                <div className="theme-preview" style={{ background: theme.bg }}>
                   <div className="theme-color-dot" style={{ background: theme.primary }} />
                </div>
                <div className="theme-info">
                   <h4 className="theme-name">{theme.name}</h4>
                   <p className="theme-description">الألوان الرئيسية والخطوط</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'css' && (
          <div className="css-editor-container animate-fade-in">
            <label className="section-label">محرر CSS المخصص</label>
            <textarea
              value={state.customCss}
              onChange={(e) => updateCss(e.target.value)}
              placeholder=".slide-canvas { font-family: 'Cairo'; }"
              className="css-editor"
            />
            <p className="css-hint">
              💡 استخدم هذا المحرر لتغيير خصائص التنسيق بدقة. التغييرات تظهر لحظياً في المعاينة.
            </p>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="export-section">
        <button
          onClick={onExport}
          className="export-btn"
        >
          <Download size={20} />
          <span>تصدير الصورة بدقة عالية</span>
        </button>
      </div>
    </div>
  );
};

export default EditorSidebar;
