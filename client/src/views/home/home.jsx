import React from "react";
import FriendsCard from "../../components/Cards/FriendCard";
import User1 from "../../assests/face1.jpg";
import User2 from "../../assests/face2.jpg";
import User3 from "../../assests/face3.jpg";
import User4 from "../../assests/face4.jpg";
import Posts from "../../components/Posts/posts";
import "./home.css";
export default function Home() {
  const FriendsData = [
    {
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
    },
    {
      ProfilePicture: User1,
      Name: "Arthur Shelby",
    },
    {
      ProfilePicture: User2,
      Name: "Mike Ross",
    },
    {
      ProfilePicture: User3,
      Name: "Van Diesel",
    },
    {
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
    },
    {
      ProfilePicture: User1,
      Name: "Arthur Shelby",
    },
    {
      ProfilePicture: User2,
      Name: "Mike Ross",
    },
    {
      ProfilePicture: User3,
      Name: "Van Diesel",
    },
    {
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
    },
    {
      ProfilePicture: User1,
      Name: "Arthur Shelby",
    },
  ];
  // Testing Feed before uploading real data from database

  const handleScroll = (event) => {
    console.log("scrollleft: ", event.currentTarget.scrollLeft);
  };

  return (
    <div className="mainPanel home">
      <header>
        <div className="headerItems" onScroll={handleScroll}>
          {FriendsData.map((friend, index) => {
            return (
              <FriendsCard
                key={index}
                img={friend.ProfilePicture}
                name={friend.Name}
              />
            );
          })}
        </div>
      </header>
      <Posts />
    </div>
  );
}
