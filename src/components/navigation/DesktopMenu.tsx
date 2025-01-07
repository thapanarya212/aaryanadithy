import React from 'react';
import NavLink from './NavLink';
import { navItems } from './navigationData';

const DesktopMenu = () => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-baseline space-x-8">
      {navItems.map((item) => (
        <NavLink
          key={item}
          href={`#${item.toLowerCase()}`}
          className="px-3 py-2 text-sm font-medium"
        >
          {item}
        </NavLink>
      ))}
    </div>
  </div>
);

export default DesktopMenu;