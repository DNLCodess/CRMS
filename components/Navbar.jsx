"use client";
import React, { useState } from "react";
import { HiHome, HiChat, HiPhone, HiViewGrid } from "react-icons/hi";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // Controls mobile sidebar state

  const menuItems = [
    { id: "home", icon: HiHome, label: "Home" },
    { id: "chat", icon: HiChat, label: "Chat" },
    { id: "phone", icon: HiPhone, label: "Phone" },
    { id: "grid", icon: HiViewGrid, label: "Dashboard" },
  ];

  return (
    <div className="relative hidden md:flex">
      {/* Sidebar for large screens */}
      <div className="hidden md:flex flex-col items-center h-screen bg-white dark:bg-gray-900 dark:text-gray-200 shadow-md text-gray-600 w-16 lg:w-20 py-4">
        <div className="flex flex-col items-start space-y-8">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <div
              key={id}
              onClick={() => setActive(id)}
              className={`cursor-pointer group ${
                active === id ? "text-purple-500" : "hover:text-purple-500"
              }`}
              aria-label={label}
              title={label}
            >
              <Icon
                className={`w-6 lg:w-8 h-6 lg:h-5 transition-all duration-300 ${
                  active === id ? "scale-110" : "scale-100"
                }`}
              />
              {/* Tooltip */}
              <span className="absolute left-20 lg:left-24 top-1/2 -translate-y-1/2 bg-gray-700 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar for mobile screens */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 bg-purple-500 text-white p-2 rounded-md z-50 shadow-lg"
        >
          ☰
        </button>
        {isOpen && (
          <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-40 flex flex-col space-y-8 p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            {menuItems.map(({ id, icon: Icon, label }) => (
              <div
                key={id}
                onClick={() => {
                  setActive(id);
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-4 p-2 rounded-lg cursor-pointer ${
                  active === id
                    ? "bg-purple-500 text-white"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
