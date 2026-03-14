
import React from 'react';
import { Certification } from '../types';
import { Award, Shield, CheckCircle } from 'lucide-react';

interface MarqueeProps {
  items: Certification[];
  themeColor: string;
}

const Marquee: React.FC<MarqueeProps> = ({ items, themeColor }) => {
  // Triple the items to ensure seamless loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {displayItems.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="marquee-item"
          >
            {/* Certification Badge Icon */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}CC 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 4px 12px ${themeColor}40`
            }}>
              <CheckCircle size={14} color="white" strokeWidth={3} />
            </div>
            
            <img
              src={item.logoUrl}
              alt={item.title}
              className="marquee-logo"
            />
            <span className="marquee-item-title">{item.title}</span>

            {/* Hover Description Tooltip */}
            <div className="marquee-tooltip">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <Award size={12} />
                <span style={{ fontWeight: 700 }}>شهادة معتمدة</span>
              </div>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
