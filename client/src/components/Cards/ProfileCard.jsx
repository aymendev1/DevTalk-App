import React from "react";
import "./Cards.css";
import DefaultCover from "../../assests/defaultCover.jpg";
import DefaultProfilePic from "../../assests/B-5285.jpg";
export default function ProfileCard() {
  function NumFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  return (
    <div className="ProfileCard">
      <div className="ProfileCardImages">
        <img src={DefaultCover} alt="" />
        <img src={DefaultProfilePic} alt="" />
      </div>
      <div className="ProfileCardData">
        <div className="primaryInfo">
          <span>Aymen Dev</span>
          <span>Full Stack Developer</span>
        </div>
        <div className="followingInfo">
          <div>
            <span>{NumFormatter(10283)}</span>
            <span>Followers</span>
          </div>
          <div>
            <span>{NumFormatter(102)}</span>
            <span>Following</span>
          </div>
        </div>
        <div>
          <span> My Profile</span>
        </div>
      </div>
    </div>
  );
}
