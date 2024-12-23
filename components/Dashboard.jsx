import React from "react";
import Header from "./Header";
import LeadsTable from "./LeadsTable";

export const AgentSkill = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="dark:bg-gray-800 bg-slate-100 p-8 rounded-xl shadow-xl w-full max-w-3xl relative flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-2xl font-bold dark:text-white mb text-gray-900-6">
          Agent Skill
        </h2>
        <div className="flex flex-col gap-4 shadow-lg ">
          <div>
            <p className="text-sm dark:text-gray-300 text-gray-900 mb-4">
              Check if on-hand inventory will allow all sales orders to ship
              without delay.
            </p>
          </div>

          <div>
            {" "}
            <p className="text-sm dark:text-gray-300 text-gray-900 leading-[3] tracking-widest">
              When
              <span className="bg-blue-100 text-blue-500  px-2 py-1 rounded-md mx-1">
                any vendor
              </span>
              sends an email with changes to
              <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md mx-1">
                confirmed purchase orders
              </span>
              , check if the resulting
              <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md mx-1">
                on-hand inventory
              </span>
              will allow
              <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md mx-1">
                all sales orders
              </span>
              to
              <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded-md mx-1">
                ship without delay
              </span>
              . If so,
              <span>update the purchase order.</span>
              to reflect the change
            </p>
          </div>
        </div>
        {/* Description */}

        <div className="w-full mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-md max-w-3xl p-3">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Enable email access
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Allow the agent to access email inboxes to read mail from known
            vendors.
          </p>
          <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md p-2">
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 w-8 h-8 flex items-center justify-center rounded-full">
              <span className="material-icons">mail</span>
            </div>
            <input
              type="email"
              value="purchasing@contoso.com"
              readOnly
              className="ml-3 flex-grow text-gray-800 dark:text-gray-200 bg-transparent focus:outline-none"
            />
            <button className="text-gray-500 dark:text-gray-400 hover:text-red-600">
              <span className="material-icons">close</span>
            </button>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 py-2 rounded-md shadow-md transition-all">
            Allow access
          </button>
        </div>

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
          className="absolute top-8 right-4 dark:text-gray-300 text-gray-900 dark:hover:text-white"
          aria-label="Close"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const activities = [
    {
      title: "Cafe A100 for Woodland Bank",
      company: "Woodland Bank",
      amount: "$280,000",
      daysToClose: "8 days to close",
      task: "Review draft and reply to Chris Naido",
      logo: "https://via.placeholder.com/40",
    },
    {
      title: "Partnership opportunity for Fabrikam",
      company: "Fabrikam",
      amount: "$5,000,000",
      daysToClose: "12 days to close",
      task: "Prepare me for Fabrikam's key stakeholder meeting",
      logo: "https://via.placeholder.com/40",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen w-full px-4 sm:px-6 font-sans transition-all duration-300">
      <Header />

      <div className="flex-grow py-6">
        {/* Indigo Bordered Container */}
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 border border-indigo-500 rounded-xl shadow-lg p-6 space-y-6 transition-all duration-300">
          {/* Header Section */}
          <div className="bg-gray-50 dark:bg-gray-800 dark:text-gray-200 rounded-lg p-6 shadow-xl">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
              <h1 className="text-base sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                Hi Mona,{" "}
                <span className="text-indigo-400 font-bold">
                  68% of goal achieved
                </span>
                . Focus on 20 top leads to hit your target.
              </h1>
              <div className="flex flex-wrap lg:flex-nowrap items-center text-sm text-gray-500 gap-4">
                <p>1 month until Q4 ends</p>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span>Won $18M</span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span>Committed $8M</span>
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span>Best case $7M</span>
                </div>
              </div>
            </div>
            <h2 className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 mt-4">
              Copilot suggests focusing on 20 leads showing strong purchase
              intent and active engagement.
            </h2>
          </div>

          {/* Key Leads Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Jane Reyes
                    </h3>
                    <p className="text-sm text-gray-500">
                      COO - Northwind Traders
                    </p>
                  </div>
                  <span className="text-sm bg-green-600 text-green-100 px-3 py-1 rounded-full">
                    High Buying Intent
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Engage with Jane Reyes. She may be interested in upgrading
                  espresso machines for her in-store coffee shops.
                </p>
                <button className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-full hover:scale-105 hover:bg-indigo-700 transition-transform duration-200 flex items-center">
                  Expand Business <span className="ml-2">→</span>
                </button>
              </div>

              <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      Allan Munger
                    </h3>
                    <p className="text-sm text-gray-500">
                      Head of Real Estate - Contoso Coffee
                    </p>
                  </div>
                  <span className="text-sm bg-yellow-600 text-yellow-100 px-3 py-1 rounded-full">
                    Due Today
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Prepare for a high-buying intent meeting with Copilot
                  scheduled for 2 PM regarding upgrading the service contract.
                </p>
                <button className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-full hover:scale-105 hover:bg-indigo-700 transition-transform duration-200 flex items-center">
                  Upcoming Meeting <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Other Activities Section */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Key Activities
              </h2>
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-gray-800 border border-gray-700 dark:border-gray-700 rounded-lg flex items-start hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={activity.logo}
                    alt={`${activity.company} logo`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {activity.company} &middot; {activity.amount} &middot;{" "}
                      {activity.daysToClose}
                    </p>
                    <p className="text-sm text-indigo-400 font-medium mt-2">
                      {activity.task}
                    </p>
                  </div>
                </div>
              ))}
              <a href="#" className="text-sm text-indigo-400 hover:underline">
                Show all activities
              </a>
            </div>
          </div>
        </div>

        {/* Leads Table Section */}
        <div className="mt-8">
          <LeadsTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
