import React from "react";
import "./rightSidebar.css";
import { RiSearch2Line } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import ProfileCard from "../Cards/ProfileCard";
import SuggestionCard from "../Cards/suggestionsCard";
import { AiOutlinePoweroff } from "react-icons/ai";
import User1 from "../../assests/face1.jpg";
import User2 from "../../assests/face2.jpg";
import User3 from "../../assests/face3.jpg";
import User4 from "../../assests/face4.jpg";
export default function RightSidebar() {
  const SuggestionsData = [
    {
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      username: "sarahtan_",
      isFollowed: false,
    },
    {
      ProfilePicture: User1,
      Name: "Arthur Shelby",
      username: "arthur.shel",
      isFollowed: true,
    },
    {
      ProfilePicture: User2,
      Name: "Mike Ross",
      username: "mike_rs",
      isFollowed: false,
    },
    {
      ProfilePicture: User3,
      Name: "Van Diesel",
      username: "van_d",
      isFollowed: false,
    },
  ];
  return (
    <div className="rightSidebar">
      <div className="headerRS">
        <form className="SearchBox">
          <RiSearch2Line />
          <input type="text" name="searchQuery" placeholder="Search" />
        </form>
        <button className="btn-rounded NotificationBtn">
          <IoNotifications />
        </button>
        <button className="btn-rounded LogoutBtn">
          <AiOutlinePoweroff />
        </button>
      </div>
      <div className="ProfileBox">
        <span>Overview</span>
        <ProfileCard />
      </div>
      <div className="suggestionBox">
        <span>Suggestions For You </span>
        <div className="suggestionBoxItems">
          {SuggestionsData.map((user, index) => {
            return (
              <SuggestionCard
                profilePicture={user.ProfilePicture}
                name={user.Name}
                username={user.username}
                isFollowed={user.isFollowed}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
