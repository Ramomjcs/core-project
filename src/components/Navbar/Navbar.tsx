import React from "react";

interface NavbarProps {
  links?: { label: string; href: string }[];
  brand?: string;
}

const Navbar: React.FC<NavbarProps> = ({ links = [] }) => {
  return (
    <nav className="flex items-center justify-between py-3 pr-6 bg-gray-900 text-white">
      <ul className="flex list-none m-0 p-0 gap-6 px-6">
        {links.map((link) => (
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
      <div>Hi, Ramom</div>
    </nav>
  );
};

export default Navbar;
