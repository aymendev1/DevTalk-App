import React from "react";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { Link } from "react-router-dom";
import { RiHeart2Fill, RiSendPlaneFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import CommentCard from "../Cards/CommentCard";
import { likePost, commentPost } from "../../api/PostRequest";

import "./popup.css";
function ShowPost(props) {
  const { data, userData, PublisherData } = props;
  const [isEmojieOpen, setisEmojieOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [isLiked, setLiked] = React.useState(data.likes.includes(userData._id));
  const [Likes, setLikes] = React.useState(data.likes.length);
  console.log(isLiked);
  const onEmojiClick = (emojiObject, event) => {
    setComment(comment + emojiObject.emoji);
  };
  function openEmojie() {
    isEmojieOpen ? setisEmojieOpen(false) : setisEmojieOpen(true);
  }
  function handleLikes() {
    likePost(data._id, userData._id);
    setLiked((prev) => !prev);
    isLiked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  }
  function handleComment() {
    commentPost(data._id, userData._id, comment);
  }
  return (
    <div className="ShowPostPopup">
      <div className="leftS_ShowPostPopup">
        <img src={data.image} alt="" />
      </div>
      <div className="rightS_ShowPostPopup">
        <div>
          {/* Header */}
          <div>
            <img
              src={
                PublisherData.profilePicture ? PublisherData.profilePicture : ""
              }
              alt=""
            />
            <span>{PublisherData.fullName ? PublisherData.fullName : ""}</span>
          </div>
          <Link to={PublisherData.fullName ? PublisherData.fullName : ""}>
            View profile
          </Link>
        </div>
        {/* Post Bio and comments*/}
        <div>
          <span>
            <span>@{PublisherData.username ? PublisherData.username : ""}</span>
            {data.content}
          </span>
          {data.comments
            ? data.comments.map((comment) => {
                return <CommentCard data={comment} />;
              })
            : null}
        </div>
        {/*Like , Comment , Send */}
        <div>
          <div>
            {isLiked ? (
              <RiHeart2Fill
                style={{ color: "#ff0000", cursor: "pointer" }}
                onClick={handleLikes}
              />
            ) : (
              <RiHeart2Fill
                style={{ cursor: "pointer" }}
                onClick={handleLikes}
              />
            )}

            <AiFillMessage />
            <RiSendPlaneFill />
          </div>
          <span>{Likes} likes </span>
          <span>
            {new Date(data.createdAt).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        {/*Post Comment*/}
        <div>
          <div>
            {" "}
            {isEmojieOpen ? (
              <EmojiPicker
                emojiStyle={EmojiStyle.APPLE}
                onEmojiClick={onEmojiClick}
                size={22}
                searchDisabled
                skinTonesDisabled
              />
            ) : (
              ""
            )}
            <button onClick={openEmojie}>
              <MdOutlineEmojiEmotions />
            </button>
          </div>
          <form onSubmit={handleComment}>
            <input
              type="text"
              name="comment"
              id=""
              placeholder="Write your comment here ..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShowPost;
