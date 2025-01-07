import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ href, children, onClick, className = '' }: NavLinkProps) => (
  <a
    href={href}
    onClick={onClick}
    className={`font-serif text-gray-900 dark:text-gray-100 hover:text-gold-600 dark:hover:text-gold-600 transition-colors duration-300 ${className}`}
  >
    {children}
  </a>
);

export default NavLink;