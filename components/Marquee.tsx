
import React from 'react';
import { Certification } from '../types';

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
            <img
              src={item.logoUrl}
              alt={item.title}
              className="marquee-logo"
            />
            <span className="marquee-item-title">{item.title}</span>

            {/* Hover Description Tooltip */}
            <div className="marquee-tooltip">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
