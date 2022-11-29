import React from "react";
import DefaultCover from "../../assests/defaultCover.jpg";
import DefaultProfilePic from "../../assests/B-5285.jpg";
import { FaUserPlus } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
export default function ProfileView() {
  return (
    <div className="Profile">
      <div>
        {/* Cover Image */}
        <img src={DefaultCover} alt="" />
      </div>
      <div>
        <div>
          {/* Profile Picture Image */}
          <img src={DefaultProfilePic} alt="" />
          {/* Name */}
          <span>Aymen Dev</span>
          {/* Bio */}
          <span>Full Stack Developer.</span>
        </div>
        <div>
          <button>
            <SiGooglemessages />
            Send a message
          </button>
          <button>
            <FaUserPlus />
            Follow me
          </button>
        </div>
      </div>
    </div>
  );
}
