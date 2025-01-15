import React, { useState } from 'react';
import './ListGroup.scss';

export interface ListGroupItem {
  label: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export interface ListGroupProps {
  items: ListGroupItem[];
  flush?: boolean;
  selectable?: boolean;
  onItemSelect?: (index: number) => void;
}

export const ListGroup: React.FC<ListGroupProps> = ({
  items,
  flush = false,
  selectable = false,
  onItemSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number, item: ListGroupItem) => {
    if (item.disabled) return;

    if (selectable) {
      setActiveIndex(index);
      onItemSelect && onItemSelect(index);
    }

    item.onClick && item.onClick();
  };

  return (
    <ul className={`list-group ${flush ? 'list-group--flush' : ''}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`list-group__item ${activeIndex === index ? 'list-group__item--active' : ''} ${
            item.disabled ? 'list-group__item--disabled' : ''
          }`}
          onClick={() => handleClick(index, item)}
          role="button"
          aria-disabled={item.disabled}
          tabIndex={item.disabled ? -1 : 0}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
