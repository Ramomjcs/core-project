"use client";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WorkIcon from "@mui/icons-material/Work";
import PhotoIcon from "@mui/icons-material/Photo";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSidebar } from "./SidebarContext";

const menuItems = [
  { icon: <PersonIcon />, label: "Profile" },
  { icon: <NotificationsIcon />, label: "Notifications" },
  { icon: <WorkIcon />, label: "Jobs" },
  { icon: <PhotoIcon />, label: "Images" },
  { icon: <SettingsIcon />, label: "Settings" },
];

const SideMenu: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { expanded, setExpanded } = useSidebar();

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="relative">
      <button
        className="md:hidden fixed top-2.5 left-4 z-50 text-white"
        onClick={() => {
          const newState = !mobileOpen;
          setMobileOpen(newState);
          setExpanded(newState);
        }}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          onClick={() => {
            setMobileOpen(false);
            setExpanded(false);
          }}
        ></div>
      )}

      <nav
        className={`fixed md:pt-1 left-0 h-full bg-gray-900 z-40 transition-all duration-300 text-white
          ${mobileOpen ? "translate-x-0 w-64" : "w-20 -translate-x-full"} 
          md:translate-x-0 ${expanded ? "md:w-64" : "md:w-20"}`}
      >
        <div className="flex flex-col items-center md:items-start px-6 pt-2">
          {expanded && !mobileOpen ? (
            <span className="font-black whitespace-nowrap">/Life Tracker</span>
          ) : (
            <span className="text-center">{"</>"}</span>
          )}
        </div>

        <ul className="mt-8 space-y-2 px-4">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className="flex items-center gap-2 p-2 rounded hover:bg-gray-950 transition-colors"
              >
                {item.icon}
                {expanded && (
                  <span className="font-medium text-white">{item.label}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleExpanded}
        className={`hidden md:flex items-center justify-center bg-amber-500 p-1 rounded-full z-50
          absolute top-14 transition-all duration-300 opacity-50 hover:opacity-100 hover:cursor-pointer
          ${expanded ? "left-60" : "left-16"}`}
      >
        {expanded ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </button>
    </div>
  );
};

export default SideMenu;
