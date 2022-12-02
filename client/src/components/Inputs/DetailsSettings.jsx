import React from "react";
import "./inputs.css";
function DetailsSettings() {
  return (
    <div className="DetailsSettings">
      <div>
        <span>First Name :</span>
        <input type="text" placeholder="Enter your first name here ..." />
      </div>
      <div>
        <span>Last Name :</span>
        <input type="text" placeholder="Enter your last name here ..." />
      </div>
      <div>
        <span>Username :</span>
        <input type="text" placeholder="Enter your username here ..." />
      </div>
      <div>
        <span>Phone Number :</span>
        <input
          type="text"
          placeholder="Enter your Phone Number here ..."
          maxLength={15}
        />
      </div>
      <div>
        <span>Email :</span>
        <input type="email" placeholder="Enter your email here ..." />
      </div>
      <button>Save Changes</button>
    </div>
  );
}

export default DetailsSettings;
