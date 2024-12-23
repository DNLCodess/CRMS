"use client";

import React, { useContext, useState } from "react";
import {
  HiClock,
  HiRocketLaunch,
  HiChartBar,
  HiUsers,
  HiFolder,
  HiShoppingCart,
  HiTag,
  HiMapPin,
  HiClipboardDocumentList,
} from "react-icons/hi2";
import { FaBars, FaCaretDown, FaHome, FaMoon, FaSun } from "react-icons/fa";
import { AgentSkill } from "./Dashboard";
import { ThemeContext } from "../context/ThemeContext"; // Assuming ThemeContext is in ../context

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [isAgentSkillOpen, setIsAgentSkillOpen] = useState(false); // For modal control
  const { theme, toggleTheme } = useContext(ThemeContext); // Use theme context

  const menuItems = [
    { title: "Home", icon: FaHome, link: "#" },
    { title: "Recent", icon: HiClock, link: "#", dropdown: true },
    { title: "Pinned", icon: HiMapPin, link: "#", dropdown: true },
  ];

  const sections = [
    {
      title: "My Work",
      items: [
        { title: "Sales Accelerator", icon: HiRocketLaunch, link: "#" },
        { title: "Dashboards", icon: HiChartBar, link: "#" },
        { title: "Activities", icon: HiClipboardDocumentList, link: "#" },
      ],
    },
    {
      title: "Customers",
      items: [
        { title: "Accounts", icon: HiUsers, link: "#" },
        { title: "Contacts", icon: HiUsers, link: "#" },
      ],
    },
    {
      title: "Sales",
      items: [
        { title: "Leads", icon: HiFolder, link: "#" },
        { title: "Opportunities", icon: HiFolder, link: "#" },
        { title: "Competitors", icon: HiUsers, link: "#" },
      ],
    },
    {
      title: "Collateral",
      items: [
        { title: "Quotes", icon: HiShoppingCart, link: "#" },
        { title: "Orders", icon: HiShoppingCart, link: "#" },
        { title: "Invoices", icon: HiShoppingCart, link: "#" },
        { title: "Products", icon: HiTag, link: "#" },
        { title: "Sales Literature", icon: HiTag, link: "#" },
      ],
    },
    {
      title: "Marketing",
      items: [
        { title: "Marketing Lists", icon: HiUsers, link: "#" },
        { title: "Quick Campaigns", icon: HiUsers, link: "#" },
      ],
    },
  ];

  return (
    <div
      className={`flex flex-col h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200 overflow-y-scroll overflow-x-hidden sticky top-0 transition-all duration-300 text-gray-800 border-r ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Hamburger Menu and Theme Toggle */}
      <div className="flex items-center justify-between p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-800 dark:text-gray-200 text-xl focus:outline-none"
        >
          <FaBars />
        </button>

        <button
          onClick={toggleTheme}
          className="text-gray-800 dark:text-gray-200 text-xl focus:outline-none"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="h-full">
        {/* Top Menu */}
        <ul className="p-4 space-y-2">
          {menuItems.map(({ title, icon: Icon, dropdown }, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                <Icon className="text-xl" />
                {!isCollapsed && <span>{title}</span>}
                {dropdown && !isCollapsed && (
                  <FaCaretDown className="ml-2 text-sm" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mt-6 px-4">
            {!isCollapsed && (
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {section.title}
              </h3>
            )}
            <ul className="mt-2 space-y-1">
              {section.items.map(({ title, icon: Icon, link }, idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    <Icon className="text-xl" />
                    {!isCollapsed && <span>{title}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Agent Skill Button */}
        <div className="mt-6 px-4">
          <button
            onClick={() => setIsAgentSkillOpen(true)}
            className="w-full flex items-center p-2 space-x-3 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-700 text-indigo-600 dark:text-indigo-300"
          >
            Open Agent Skill
          </button>

          {isAgentSkillOpen && (
            <AgentSkill onClose={() => setIsAgentSkillOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
