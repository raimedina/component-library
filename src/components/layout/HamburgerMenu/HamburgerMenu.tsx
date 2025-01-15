import React, { useState } from 'react';
import './HamburgerMenu.scss';

interface Link {
  label: string;
  href: string;
}

interface HamburgerMenuProps {
  links?: Link[];
  onLinkClick?: (label: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const defaultLinks: Link[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links = defaultLinks, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="menuContainer">
      <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <nav className="navMenu showMenu" aria-label="Hamburger Menu">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onLinkClick?.(link.label, e);
                    toggleMenu();
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
