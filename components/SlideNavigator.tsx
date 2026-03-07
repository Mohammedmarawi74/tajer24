
import React from 'react';
import { SlideData } from '../types';
import { Plus, ChevronRight, ChevronLeft } from 'lucide-react';

interface SlideNavigatorProps {
  slides: SlideData[];
  activeSlideId: string;
  setActiveSlideId: (id: string) => void;
  addSlide: () => void;
}

const SlideNavigator: React.FC<SlideNavigatorProps> = ({ slides, activeSlideId, setActiveSlideId, addSlide }) => {
  return (
    <div className="slide-navigator">
      <div className="slide-list">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlideId(slide.id)}
            className={`slide-thumbnail ${activeSlideId === slide.id ? 'active' : ''}`}
          >
            <span className="slide-number">{index + 1}</span>
            <div className="slide-thumbnail-label">
              {slide.title || 'بدون عنوان'}
            </div>
          </button>
        ))}

        <button
          onClick={addSlide}
          className="add-slide-btn"
        >
          <Plus size={18} className="add-slide-icon" />
          <span className="add-slide-label">إضافة</span>
        </button>
      </div>

      <div className="navigator-controls">
         <button className="nav-control-btn"><ChevronRight size={24} /></button>
         <button className="nav-control-btn"><ChevronLeft size={24} /></button>
      </div>
    </div>
  );
};

export default SlideNavigator;
