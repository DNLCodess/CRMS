import React from "react";
import {
  HiOutlineChartSquareBar,
  HiOutlineViewGrid,
  HiPlus,
  HiRefresh,
  HiOutlineTrash,
} from "react-icons/hi";
import { FaCaretDown, FaTeamspeak } from "react-icons/fa";
import Image from "next/image";
import share from "@/public/share-from-square-regular.svg";

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between  bg-gray-100 dark:bg-gray-900  rounded-lg shadow-lg dark:text-gray-200 text-gray-900 px-6 py-4 border w-full mx-auto transition-colors duration-300">
      {/* Left Section */}
      <div className="flex items-center mb-4 sm:mb-0">
        <select className="border border-gray-600 rounded-lg px-3 py-2 text-sm dark:bg-gray-700 bg-gray-100 dark:text-gray-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition">
          <option>My open leads</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center space-x-4 sm:space-x-6">
        {/* Chart and View Buttons */}
        <button className="flex items-center space-x-2 text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          <HiOutlineChartSquareBar className="w-5 h-5" />
          <span>Show chart</span>
        </button>
        <button className="flex items-center space-x-2 text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          <HiOutlineViewGrid className="w-5 h-5" />
          <span>Focused view</span>
        </button>

        {/* Action Buttons */}
        <button className="flex items-center space-x-2 text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          <HiPlus className="w-5 h-5" />
          <span>New</span>
        </button>
        <button className="flex items-center space-x-2 text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          <HiRefresh className="w-5 h-5" />
          <span>Refresh</span>
        </button>
        <button className="flex items-center space-x-2 text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          <FaTeamspeak className="w-5 h-5" />
          <span>Collaborate</span>
        </button>
        <button className="flex items-center space-x-2 text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          <HiOutlineTrash className="w-5 h-5" />
          <span>Delete</span>
        </button>

        {/* Filter and Column Buttons */}
        <button className="text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          Smart data
        </button>
        <button className="text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          Edit filters
        </button>
        <button className="text-sm dark:text-gray- text-gray-900300 hover:text-indigo-500 transition">
          Edit columns
        </button>

        {/* Share Button */}
        <div className="flex items-center bg-indigo-600 dark:text-white text-gray-900 rounded-lg px-4 py-2 gap-2 hover:bg-indigo-700 transition mt-4 sm:mt-0">
          <Image src={share} width={15} height={15} alt="share-icon" />
          <FaCaretDown className="dark:text-white text-gray-900 text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Header;
