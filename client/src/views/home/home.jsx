import React from "react";
import FriendsCard from "../../components/Cards/FriendCard";
import FeedCard from "../../components/Cards/FeedCard";
import User1 from "../../assests/face1.jpg";
import User2 from "../../assests/face2.jpg";
import User3 from "../../assests/face3.jpg";
import User4 from "../../assests/face4.jpg";
import Post1 from "../../assests/post/post (1).jpg";
import Post2 from "../../assests/post/post (2).jpg";
import Post3 from "../../assests/post/post (3).jpg";
import Post4 from "../../assests/post/post (4).jpg";
import Post5 from "../../assests/post/post (5).jpg";
import Post6 from "../../assests/post/post (6).jpg";
import Post7 from "../../assests/post/post (7).jpg";
import Post8 from "../../assests/post/post (8).jpg";
import { MdOutlineAdd } from "react-icons/md";
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
  ];
  // Testing Feed before uploading real data from database
  const FeedTest = [
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      username: "defaultusername",
      PostContent: "Picnic Day",
      PostImage: Post1,
      Likes: 22,
      comments: [
        { Name: "Sarah Tancedi", Commentcontent: "Really Like the view" },
      ],
    },
    {
      postID: "1sdf2DA",
      ProfilePicture: User1,
      Name: "Arthur Shelby",
      PostContent: "External Hard Drive is Life",
      PostImage: Post5,
      Likes: 32,
      username: "defaultusername",
      comments: [{ Name: "Sarah Tancedi", Commentcontent: "Really Helpful" }],
    },
    {
      postID: "1212DA",
      ProfilePicture: User2,
      Name: "Mike Ross",
      PostContent: "Nature Day",
      PostImage: Post3,
      username: "defaultusername",
      Likes: 764,
      comments: [
        { Name: "Sarah Tancedi", Commentcontent: "Really Like the view" },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post1,
      Likes: 22,
      username: "defaultusername",
      comments: [
        { Name: "Sarah Tancedi", Commentcontent: "Really Like the view" },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post1,
      username: "defaultusername",
      Likes: 22,
      comments: [
        { Name: "Sarah Tancedi", Commentcontent: "Really Like the view" },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post1,
      Likes: 22,
      username: "defaultusername",
      comments: [
        { Name: "Sarah Tancedi", Commentcontent: "Really Like the view" },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post1,
      Likes: 22,
      username: "defaultusername",
      comments: [
        { Name: "Sarah Tancedi", Commentcontent: "Really Like the view" },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post1,
      Likes: 22,
      username: "defaultusername",
      comments: [
        { Name: "Sarah Tancedi", Commentcontent: "Really Like the view" },
      ],
    },
  ];
  return (
    <div className="mainPanel home">
      <header>
        <div className="headerItems">
          {FriendsData.map((friend) => {
            return (
              <FriendsCard img={friend.ProfilePicture} name={friend.Name} />
            );
          })}
        </div>
      </header>
      <section className="Feed">
        <div className="FeedHeader">
          <span>Feeds</span>
          <button>+ Create </button>
        </div>
        <div className="FeedContent">
          {FeedTest.map((feed) => {
            return <FeedCard data={feed} />;
          })}
        </div>
      </section>
    </div>
  );
}
