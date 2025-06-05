"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSidebar } from "./SidebarContext";
import TrackChanges from '@mui/icons-material/TrackChanges'
	import AttachMoney from '@mui/icons-material/AttachMoney'

const menuItems = [
  { icon: <AttachMoney />, label: "Financial Life", link: "/financial-life" },
  { icon: <TrackChanges />, label: "Habits", link: "/" },
];

const SideMenu: React.FC = () => {
  const [menuMobileExpanded, setMenuMobileExpanded] = useState(false);
  const { expanded, setExpanded } = useSidebar();

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="relative">
      {!menuMobileExpanded && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 dark:text-white text-black"
          onClick={() => {
            const newState = !menuMobileExpanded;
            setMenuMobileExpanded(newState);
            setExpanded(newState);
          }}
        >
          {menuMobileExpanded ? <CloseIcon /> : <MenuIcon />}
        </button>
      )}

      {menuMobileExpanded && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => {
            setMenuMobileExpanded(false);
            setExpanded(false);
          }}
        ></div>
      )}

      <nav
        className={`fixed md:pt-1 left-0 h-full dark:bg-gray-900 bg-white z-40 transition-all duration-300 text-black dark:text-white
          ${
            menuMobileExpanded ? "translate-x-0 w-64" : "w-20 -translate-x-full"
          } 
          md:translate-x-0 ${expanded ? "md:w-64" : "md:w-20"}`}
      >
        <div className="flex flex-col items-center md:items-start px-6 pt-3">
          {expanded ? (
            <span className="font-black whitespace-nowrap dark:text-white text-black">
              /Life Tracker
            </span>
          ) : (
            <span className="text-center font-black">/LT</span>
          )}
        </div>

        <ul className="mt-8 space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                className="flex items-center gap-2 p-2 rounded dark:hover:bg-gray-950 hover:bg-gray-950 hover:text-white  text-gray-900 dark:text-white hover:text-whitetransition-colors"
              >
                {item.icon}
                {expanded && (
                    <span className="font-medium whitespace-nowrap">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleExpanded}
        className={`hidden md:flex items-center justify-center bg-amber-500 p-1 rounded-full z-50
          absolute top-17 transition-all duration-300 opacity-50 hover:opacity-100 hover:cursor-pointer
          ${expanded ? "left-60" : "left-16"}`}
      >
        {expanded ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </button>
    </div>
  );
};

export default SideMenu;
