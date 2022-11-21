import react from "react";
import "./Cards.css";
import DefaultProfilePic from "../../assests/B-5285.jpg";

export default function FriendsCard(props) {
  return (
    <div className="CreatePostCard">
      <form action="" method="post">
        <div>
          <img src={DefaultProfilePic} alt="" />
          <input
            type="text"
            name="postContent"
            placeholder="Share with Us ..."
          />
        </div>
        <div>
          <input type="file" name="postImg" />
        </div>
      </form>
    </div>
  );
}
