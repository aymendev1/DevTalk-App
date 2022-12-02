import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaUserEdit, FaUserShield } from "react-icons/fa";
import "./settings.css";
import DetailsSettings from "../../components/Inputs/DetailsSettings";
import PasswordSettings from "../../components/Inputs/PasswordSettings";
export default function SettingsView() {
  return (
    <div className="mainPanel Settings">
      <header>
        <span>Settings</span>
        <span>Here you can manage your account </span>
      </header>
      <div>
        <div className="panelSettings">
          <div>
            <FaUserEdit />
            <Link to="details">My Details</Link>
          </div>
          <div>
            <FaUserShield />
            <Link to="Password">Password</Link>
          </div>
        </div>
        <div className="panelContainer">
          <Routes>
            <Route path="/details" element={<DetailsSettings />} />
            <Route path="/Password" element={<PasswordSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
