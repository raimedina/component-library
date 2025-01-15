import React, { useState } from 'react';
import './Accordion.scss';


interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  onToggle?: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({ items, onToggle }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    const newIndex = activeIndex === index ? null : index;
    setActiveIndex(newIndex);
    onToggle?.(index);  
  };

  return (
    <div className="accordion">
      {items.map((item: AccordionItem, index: number) => (
        <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
          <button onClick={() => toggleItem(index)} className="accordion-title">
            <span>{item.title}</span>
            <span className={`accordion-icon ${activeIndex === index ? 'rotated' : ''}`}>▼</span>
          </button>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;