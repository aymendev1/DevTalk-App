import React from "react";
import FriendsCard from "../../components/Cards/FriendCard";
import FeedCard from "../../components/Cards/FeedCard";
import Popup from "../../components/Popups/popup";
import CreatePost from "../../components/Popups/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/Post";
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
import "./home.css";
export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);

  const { posts, uploading } = useSelector((state) => state.postReducer);
  console.log(posts);
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
  const FeedTest = [
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      username: "sarahtan_",
      PostContent: "Picnic Day ",
      PostImage: Post1,
      Likes: 22,
      comments: [
        {
          username: "sarahtan_",
          ProfilePicture: User4,
          comment: "What a view 🫣!!",
          Likes: 1,
        },
      ],
    },
    {
      postID: "1sdf2DA",
      ProfilePicture: User1,
      Name: "Arthur Shelby",
      PostContent: "External Hard Drive is Life 😎",
      PostImage: Post5,
      Likes: 32,
      username: "arthur.shel",
      comments: [
        {
          username: "arthur.shel",
          ProfilePicture: User1,
          comment: "Really Helpful 👌",
          Likes: 1,
        },
      ],
    },
    {
      postID: "1212DA",
      ProfilePicture: User2,
      Name: "Mike Ross",
      PostContent: "Nature Day",
      PostImage: Post3,
      username: "mike_rs",
      Likes: 764,
      comments: [
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
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
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post2,
      username: "defaultusername",
      Likes: 22,
      comments: [
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
        {
          username: "arthur.shel",
          ProfilePicture: User1,
          comment: "Really Helpful 👌",
          Likes: 1,
        },
        {
          username: "sarahtan_",
          ProfilePicture: User4,
          comment: "What a view 🫣!!",
          Likes: 1,
        },
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
        {
          username: "arthur.shel",
          ProfilePicture: User1,
          comment: "Really Helpful 👌",
          Likes: 1,
        },
        {
          username: "sarahtan_",
          ProfilePicture: User4,
          comment: "What a view 🫣!!",
          Likes: 1,
        },
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post4,
      Likes: 22,
      username: "defaultusername",
      comments: [
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post6,
      Likes: 22,
      username: "defaultusername",
      comments: [
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User4,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post7,
      Likes: 22,
      username: "defaultusername",
      comments: [
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
      ],
    },
    {
      postID: "1762DA",
      ProfilePicture: User2,
      Name: "Sarah Tancedi",
      PostContent: "Picnic Day",
      PostImage: Post8,
      Likes: 22,
      username: "defaultusername",
      comments: [
        {
          username: "mike_rs",
          ProfilePicture: User2,
          comment: "a nice idea for a weekend ",
          Likes: 3,
        },
      ],
    },
  ];
  const [buttonTrigger, setButtonTrigger] = React.useState(false);

  function openPopUp() {
    buttonTrigger ? setButtonTrigger(false) : setButtonTrigger(true);
  }
  const handleScroll = (event) => {
    console.log("scrollleft: ", event.currentTarget.scrollLeft);
  };
  React.useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
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
      <section className="Feed">
        <div className="FeedHeader">
          <span>Feeds</span>
          <button onClick={openPopUp}>+ Create </button>
          <Popup trigger={buttonTrigger} setButtonTrigger={setButtonTrigger}>
            <CreatePost />
          </Popup>
        </div>
        <div className="FeedContent">
          {posts.map((feed, index) => {
            return <FeedCard data={feed} userData={user} key={index} />;
          })}
        </div>
      </section>
    </div>
  );
}
