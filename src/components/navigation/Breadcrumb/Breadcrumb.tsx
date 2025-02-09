import React from 'react';
import './Breadcrumb.scss';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onClick?: (item: BreadcrumbItem, index: number) => void;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: BreadcrumbItem, index: number) => {
    e.preventDefault(); 
    onClick?.(item, index);  
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.isActive ? 'active' : ''}`}
            aria-current={item.isActive ? 'page' : undefined}
          >
            {item.isActive || !item.href ? (
              <span>{item.label}</span>
            ) : (
              <a href={item.href} onClick={(e) => handleClick(e, item, index)}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
