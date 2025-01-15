import React, { useState } from 'react';
import './Card.scss';
import defaultImage from '../../../assets/defaultImage.webp';

type CardSize = 'small' | 'medium' | 'large';
type TextAlign = 'left' | 'center' | 'right';
type BorderStyle = 'solid' | 'dashed' | 'none';
type Layout = 'row' | 'column';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  size?: CardSize;
  textAlign?: TextAlign;
  borderStyle?: BorderStyle;
  layout?: Layout;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  link,
  buttonLabel,
  onButtonClick,
  size = 'medium',
  textAlign = 'center',
  borderStyle = 'solid',
  layout = 'column',
}) => {
  const [imageSrc, setImageSrc] = useState<string>(image || defaultImage);

  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  return (
    <div className={`card ${size} ${layout} border-${borderStyle} text-${textAlign}`}>
      <div className="card-image">
        <img src={imageSrc} alt={title} onError={handleImageError} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            Learn More
          </a>
        )}

        {buttonLabel && (
          <button onClick={onButtonClick} className="card-button">
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
