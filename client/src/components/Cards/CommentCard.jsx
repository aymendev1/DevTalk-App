import React from "react";
import { RiHeart2Line } from "react-icons/ri";
import "./Cards.css";
function CommentCard(props) {
  const comment = props.data;
  return (
    <div className="CommentCard">
      {/* Publisher pic */}
      <div>
        <img src={comment.ProfilePicture} alt="" />
        <span>
          <span>{comment.username}</span>
          {comment.comment}
        </span>
        <button>
          <RiHeart2Line />
        </button>
      </div>
      {/* Stats  */}
      <div>
        <span>{comment.Likes} likes</span>
        <span>{comment.date || "15 November 2022"}</span>
      </div>
    </div>
  );
}

export default CommentCard;
