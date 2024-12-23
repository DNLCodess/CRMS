"use client";
import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ThemeProvider>
      <main
        className={`grid ${
          isCollapsed ? "grid-cols-[40px,_1fr]" : "grid-cols-[220px,_1fr]"
        } lg:grid-cols-[220px,_1fr,_64px] min-h-screen overflow-hidden`}
      >
        {/* Sidebar */}
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        {/* Main Content */}
        <div className="overflow-y-auto max-h-screen ml-4 lg:ml-3">
          <Dashboard />
        </div>

        {/* Navbar */}
        <Navbar className="hidden lg:block max-h-screen overflow-y-auto" />
      </main>
    </ThemeProvider>
  );
}
