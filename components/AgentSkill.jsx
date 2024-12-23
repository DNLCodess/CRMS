import React from "react";

const AgentSkill = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center dark:bg-slate-900 bg-slate-100 bg-opacity-50 z-50">
      <div className="dark:bg-gray-800 bg-slate-100 p-8 rounded-xl shadow-xl w-full max-w-lg relative">
        {/* Title */}
        <h2 className="text-2xl font-bold dark:text-white mb text-gray-900-6">
          Agent Skill
        </h2>

        {/* Description */}
        <p className="text-sm dark:text-gray-300 text-gray-900 mb-4">
          Check if on-hand inventory will allow all sales orders to ship without
          delay.
        </p>
        <p className="text-sm dark:text-gray-300 text-gray-900 leading-relaxed">
          When
          <span className="bg-gray-700 dark:text-gray-300 text-gray-900 px-2 py-1 rounded-md mx-1">
            any vendor
          </span>
          sends an email with changes to
          <span className="bg-gray-700 dark:text-gray-300 text-gray-900 px-2 py-1 rounded-md mx-1">
            confirmed purchase orders
          </span>
          , check if the resulting
          <span className="bg-gray-700 dark:text-gray-300 text-gray-900 px-2 py-1 rounded-md mx-1">
            on-hand inventory
          </span>
          will allow
          <span className="bg-gray-700 tdark:ext-gray-300  text-gray-900px-2 py-1 rounded-md mx-1">
            all sales orders
          </span>
          to
          <span className="bg-gray-700 dark:text-gray-300 text-gray-900 px-2 py-1 rounded-md mx-1">
            ship without delay
          </span>
          . If so, update the purchase order.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-5 py-2 dark:text-gray-300 text-gray-900 bg-gray-600 rounded-lg hover:bg-gray-500 transition"
          >
            Close
          </button>
          <button className="px-5 py-2 bg-indigo-600 dark:text-white ro text-gray-900unded-lg hover:bg-indigo-500 transition">
            Activate
          </button>
        </div>

        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 dark:text-gray-300 text-gray-900 dark:hover:text-white"
          aria-label="Close"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
};

export default AgentSkill;
