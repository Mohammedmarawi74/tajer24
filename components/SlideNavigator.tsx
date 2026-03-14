
import React from 'react';
import { SlideData } from '../types';
import { Plus, ChevronRight, ChevronLeft, Layout, Shield, BarChart3, DollarSign, List } from 'lucide-react';

interface SlideNavigatorProps {
  slides: SlideData[];
  activeSlideId: string;
  setActiveSlideId: (id: string) => void;
  addSlide: () => void;
}

const SlideNavigator: React.FC<SlideNavigatorProps> = ({ slides, activeSlideId, setActiveSlideId, addSlide }) => {
  
  const getSlideTypeIcon = (type: string) => {
    switch (type) {
      case 'TITLE': return <Layout size={14} />;
      case 'CERTIFICATION': return <Shield size={14} />;
      case 'CHART': return <BarChart3 size={14} />;
      case 'PRICING': return <DollarSign size={14} />;
      case 'STEPS': return <List size={14} />;
      default: return <Layout size={14} />;
    }
  };

  return (
    <div className="slide-navigator">
      <div className="slide-list">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlideId(slide.id)}
            className={`slide-thumbnail ${activeSlideId === slide.id ? 'active' : ''}`}
            title={slide.title}
          >
            <span className="slide-number">{index + 1}</span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '4px',
              color: activeSlideId === slide.id ? '#2563EB' : '#94A3B8'
            }}>
              {getSlideTypeIcon(slide.type)}
            </div>
            <div className="slide-thumbnail-label">
              {slide.title || 'بدون عنوان'}
            </div>
          </button>
        ))}

        <button
          onClick={addSlide}
          className="add-slide-btn"
          title="إضافة شريحة جديدة"
        >
          <Plus size={18} className="add-slide-icon" />
          <span className="add-slide-label">إضافة</span>
        </button>
      </div>

      <div className="navigator-controls">
         <button className="nav-control-btn" title="التالي">
           <ChevronRight size={20} />
         </button>
         <button className="nav-control-btn" title="السابق">
           <ChevronLeft size={20} />
         </button>
      </div>
    </div>
  );
};

export default SlideNavigator;
