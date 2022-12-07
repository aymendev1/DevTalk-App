import React from "react";

import "./inputs.css";
function PasswordSettings() {
  return (
    <div className="DetailsSettings">
      <div>
        <span>New Password :</span>
        <input type="password" placeholder="Enter your first name here ..." />
      </div>
      <div>
        <span>Repeat Password :</span>
        <input type="password" placeholder="Enter your last name here ..." />
      </div>
      <button>Update password</button>
    </div>
  );
}

export default PasswordSettings;
