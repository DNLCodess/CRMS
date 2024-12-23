"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import {
  FaEnvelope,
  FaLinkedin,
  FaPencilAlt,
  FaPlane,
  FaStar,
} from "react-icons/fa";
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";

Chart.register(...registerables);

const Modal = ({ lead, onClose }) => {
  const [activeTab, setActiveTab] = useState("Engage");

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="bg-gray-900 dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full sm:w-3/4 lg:w-[65%] max-h-screen overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center py-4 border-b border-gray-700 dark:border-gray-600">
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500 text-2xl" aria-hidden="true" />
            <h1 id="modal-title" className="ml-3 text-lg font-bold text-white">
              Engage with {lead.name}
            </h1>
          </div>
          <button
            className="text-gray-400 hover:text-gray-200 text-lg"
            aria-label="Close modal"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Lead Details */}
        <div className="flex items-center mt-4 mb-6 bg-gray-800 dark:bg-gray-700 p-3 rounded-md">
          <img
            src={lead.image}
            alt={`Profile of ${lead.name}`}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-white">{lead.name}</h2>
            <p className="text-sm text-gray-400 flex items-center">
              <FaLinkedin className="text-blue-600 mr-2" />
              {lead.position}, {lead.company}
            </p>
          </div>
        </div>

        {/* Highlighted Message */}
        <div className="bg-[#2d2d6a] dark:bg-[#2d2d6a] p-4 rounded-lg mb-4 flex">
          <h2 className="flex items-center text-purple-200 font-medium">
            <FaStar className="mr-2 text-yellow-500" />
            Jane may be interested in upgrading espresso machines for her
            in-store coffee shops.
          </h2>

          <div className="flex gap-3">
            <button className="border border-slate-600 px-3 py-2 flex items-center bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500">
              <FaPencilAlt /> Edit
            </button>
            <button className="border border-slate-600 px-3 py-2 flex items-center bg-purple-600 text-white hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-400">
              <FaPlane /> Approve Message
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <nav className="flex justify-start border-b border-gray-700 dark:border-gray-600 mb-4">
          {["Engage", "Search", "Next Steps"].map((tab) => (
            <button
              key={tab}
              className={`text-sm px-4 py-2 font-medium text-gray-400 dark:text-gray-300 ${
                activeTab === tab
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "hover:text-white dark:hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        {activeTab === "Engage" && (
          <div className="bg-[#1f1f3c] dark:bg-[#1f1f3c] flex flex-col gap-3 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-200 mb-4">
              Why I picked this lead
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 dark:text-gray-300">
              <li>
                Jane is a <strong>key decision maker</strong> and was browsing
                "espresso machines" on First Coffee's website.
              </li>
              <li>
                Multiple people at her company have reported "slowness" during
                service requests.
              </li>
              <li>
                Northwind Traders currently see <strong>$200M</strong> in
                revenue from their in-store coffee shops.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "Search" && (
          <div>
            <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-100">
              Search Insights
            </h3>
            <p className="text-sm text-gray-400 dark:text-gray-300">
              Access recent searches and engagement history here.
            </p>
          </div>
        )}

        {activeTab === "Next Steps" && (
          <div>
            <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-100">
              Recommended Actions
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 dark:text-gray-300">
              <li>Schedule a meeting with Jane.</li>
              <li>Prepare a tailored espresso machine proposal.</li>
              <li>Highlight customer success stories.</li>
            </ul>
          </div>
        )}

        {/* Footer Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-100">
            About {lead.name}
          </h3>
          <p className="text-sm text-gray-400 dark:text-gray-300">
            {lead.name}, the {lead.position} of {lead.company}, is a dynamic
            leader with a proven track record in optimizing operations and
            enhancing customer experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

const LeadsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState(null);
  const [viewMode, setViewMode] = useState("table");

  const data = [
    {
      name: "Winford Asher",
      topic: "Cafe A100 for commercial use",
      statusReason: "NEW",
      createdOn: "2024-12-20 10:30 AM",
      company: "Northwind Traders",
    },
    {
      name: "Josia Love",
      topic: "Upgrading service plan",
      statusReason: "NEW",
      createdOn: "2024-12-20 11:00 AM",
      company: "Blue Horizon Ltd.",
    },
    {
      name: "Sarah Bell",
      topic: "New roaster in distribution facility",
      statusReason: "In Progress",
      createdOn: "2024-12-19 09:15 AM",
      company: "Global Solutions Inc.",
    },
    {
      name: "James Smith",
      topic: "Product launch event planning",
      statusReason: "In Progress",
      createdOn: "2024-12-18 03:45 PM",
      company: "Tech Innovators",
    },
    {
      name: "Olivia White",
      topic: "Completed yearly service subscription",
      statusReason: "Completed",
      createdOn: "2024-12-17 02:20 PM",
      company: "Design Masters",
    },
    {
      name: "Ethan Brown",
      topic: "Marketing campaign development",
      statusReason: "In Progress",
      createdOn: "2024-12-18 01:00 PM",
      company: "AppWorks Inc.",
    },
    {
      name: "Amelia Johnson",
      topic: "System setup consultation",
      statusReason: "NEW",
      createdOn: "2024-12-20 09:50 AM",
      company: "Search Dynamics",
    },
    {
      name: "Mason Davis",
      topic: "Delivered software upgrade",
      statusReason: "Completed",
      createdOn: "2024-12-16 04:00 PM",
      company: "Social Savvy",
    },
    {
      name: "Liam Clark",
      topic: "Staff training sessions",
      statusReason: "In Progress",
      createdOn: "2024-12-19 10:40 AM",
      company: "Connect Pro",
    },
    {
      name: "Isabella Lewis",
      topic: "Initial product consultation",
      statusReason: "NEW",
      createdOn: "2024-12-20 08:30 AM",
      company: "Feedback Loop",
    },
    {
      name: "Benjamin Lee",
      topic: "Subscription renewal",
      statusReason: "Completed",
      createdOn: "2024-12-17 05:10 PM",
      company: "LaunchPad Co.",
    },
    {
      name: "Charlotte Walker",
      topic: "Onboarding process review",
      statusReason: "NEW",
      createdOn: "2024-12-20 07:45 AM",
      company: "CloudSphere",
    },
    {
      name: "Henry Scott",
      topic: "Data analysis and reporting",
      statusReason: "In Progress",
      createdOn: "2024-12-19 12:30 PM",
      company: "Insights Analytics",
    },
    {
      name: "Amelia Martinez",
      topic: "Finalized integration support",
      statusReason: "Completed",
      createdOn: "2024-12-16 11:15 AM",
      company: "CRM Builders",
    },
  ];
  const filteredData = data.filter((lead) =>
    lead.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const chartData = {
    labels: [...new Set(data.map((item) => item.statusReason))],
    datasets: [
      {
        label: "Leads by Status",
        data: [
          data.filter((lead) => lead.statusReason === "NEW").length,
          data.filter((lead) => lead.statusReason === "In Progress").length,
          data.filter((lead) => lead.statusReason === "Completed").length,
        ],
        backgroundColor: ["#36a2eb", "#ffce56", "#4caf50"],
      },
    ],
  };

  const closeModal = () => setSelectedLead(null);

  return (
    <div className="container mx-auto px-4 bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="border border-gray-800 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-white rounded-md px-3 py-2 w-1/3 focus:ring-2 focus:ring-indigo-500"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          onClick={() => setViewMode(viewMode === "table" ? "chart" : "table")}
        >
          Switch to {viewMode === "table" ? "Chart" : "Table"} View
        </button>
      </div>

      {viewMode === "table" ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Topic</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((lead, index) => (
              <TableRow
                key={index}
                className="cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white"
                onClick={() => setSelectedLead(lead)}
              >
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.topic}</TableCell>
                <TableCell>{lead.statusReason}</TableCell>
                <TableCell>{lead.createdOn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="bg-white dark:bg-slate-900 p-4 rounded-md shadow-md">
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      )}

      {selectedLead && <Modal lead={selectedLead} onClose={closeModal} />}
    </div>
  );
};

export default LeadsTable;
