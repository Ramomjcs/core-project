import React from 'react';

interface NavbarProps {
  links?: { label: string; href: string }[];
  brand?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  links = [],
  brand = '</>',
}) => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-900 text-white">
      <div className="font-bold text-xl">{brand}</div>
      <ul className="flex list-none m-0 p-0 gap-6">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-white no-underline transition-colors duration-200 hover:text-gray-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
