import React from 'react';
import Navbar from '../Navbar/Navbar';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Header.scss';

interface Link {
  label: string;
  href: string;
}

interface HeaderProps {
  links?: Link[];
  logo?: string;
  onLinkClick?: (label: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const defaultLinks: Link[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC<HeaderProps> = ({ links = defaultLinks, logo, onLinkClick }) => {
  const handleLinkClick = (label: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onLinkClick?.(label, event);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <a href="#home" onClick={(e) => handleLinkClick('Home', e)}>
          {logo ? <img src={logo} alt="Logo" /> : <h1>MyLogo</h1>}
        </a>
      </div>

      <nav className="desktop-menu">
        <Navbar links={links} onLinkClick={handleLinkClick} />
      </nav>

      <div className="mobile-menu">
        <HamburgerMenu links={links} onLinkClick={handleLinkClick} />
      </div>
    </header>
  );
};

export default Header;
