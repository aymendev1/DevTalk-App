import React from "react";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import DefaultCover from "../../assests/defaultCover.jpg";
import DefaultProfilePic from "../../assests/B-5285.jpg";
import { Link } from "react-router-dom";
export default function ProfileCard() {
  function NumFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }
  const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <div className="ProfileCard">
      <div className="ProfileCardImages">
        <img
          src={user.coverPicture ? user.coverPicture : DefaultCover}
          alt=""
        />
        <img
          src={user.profilePicture ? user.profilePicture : DefaultProfilePic}
          alt=""
        />
      </div>
      <div className="ProfileCardData">
        <div className="primaryInfo">
          <span>{user.fullName}</span>
          <span>{user.bio ? user.bio : "No bio yet"}</span>
        </div>
        <div className="followingInfo">
          <div>
            <span>{NumFormatter(user.followers.length)}</span>
            <span>Followers</span>
          </div>
          <div>
            <span>{NumFormatter(user.following.length)}</span>
            <span>Following</span>
          </div>
        </div>
        <div>
          <Link to={"/profile/" + user.fullName}>My profile</Link>
        </div>
      </div>
    </div>
  );
}
