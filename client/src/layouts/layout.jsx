import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import "./layout.css";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="parentGrid">
      <Sidebar />
      <Outlet />
    </div>
  );
}
