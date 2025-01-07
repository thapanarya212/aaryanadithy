import React from 'react';
import NavLink from './NavLink';
import { navItems } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
      {navItems.map((item) => (
        <NavLink
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={onClose}
          className="block px-3 py-2 text-base font-medium"
        >
          {item}
        </NavLink>
      ))}
    </div>
  </div>
);

export default MobileMenu;