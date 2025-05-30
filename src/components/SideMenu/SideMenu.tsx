"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Serviços", href: "#" },
  { label: "Contato", href: "#" },
];

const SideMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 h-[100vh] w-64 text-white
          bg-gray-900 shadow-lg z-50 transform transition-transform duration-300
         md:static md:shadow-none md:w-60 md:block`}
      >
        <ul className="space-y-4 px-6">
          <li className="pt-4 px-4">{"</>"}</li>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="block py-2 px-4 rounded hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideMenu;
