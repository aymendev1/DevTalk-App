import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import RSidebar from "../components/RightSidebar/rightSidebar";
import "./layout.css";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="parentGrid">
      <Sidebar />
      <Outlet />
      <RSidebar />
    </div>
  );
}
