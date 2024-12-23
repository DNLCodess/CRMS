import React from "react";
import Header from "./Header";
import LeadsTable from "./LeadsTable";

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
