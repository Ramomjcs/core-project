import React from "react";
import ThemeSwitcher from "../ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
  links?: { label: string; href: string }[];
  brand?: string;
}

const Navbar: React.FC<NavbarProps> = ({ links = [] }) => {
  return (
    <nav className="flex items-center justify-between py-1 pr-6 bg-white dark:bg-gray-900 transition-all duration-300">
      <ul className="flex list-none m-0 p-0 gap-6 px-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="no-underline transition-colors duration-200 hover:text-gray-300 text-black dark:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <span className="text-black dark:text-white">Hi, Ramom</span>
      </div>
    </nav>
  );
};

export default Navbar;
