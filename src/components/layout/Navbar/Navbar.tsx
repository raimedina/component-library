import React from 'react';
import './Navbar.scss';

interface Link {
  label: string;
  href: string;
}

interface NavbarProps {
  links: Link[];
  onLinkClick?: (label: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Navbar: React.FC<NavbarProps> = ({ links, onLinkClick }) => {
  return (
    <ul className="navbar-menu">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick?.(link.label, e);
            }}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
