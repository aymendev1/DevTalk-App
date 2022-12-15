import React from "react";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { Link } from "react-router-dom";
import { RiHeart2Fill, RiSendPlaneFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import CommentCard from "../Cards/CommentCard";
import "./popup.css";
function ShowPost(props) {
  const data = props.data;
  const userData = props.userData;
  const [isEmojieOpen, setisEmojieOpen] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const onEmojiClick = (emojiObject, event) => {
    setComment(comment + emojiObject.emoji);
  };
  function openEmojie() {
    isEmojieOpen ? setisEmojieOpen(false) : setisEmojieOpen(true);
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
            <img src={userData.ProfilePicture || ""} alt="" />
            <span>{userData.fullName}</span>
          </div>
          <Link to={userData.fullName}>View profile</Link>
        </div>
        {/* Post Bio and comments*/}
        <div>
          <span>
            <span>{"@" + data.username}</span>
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
            <RiHeart2Fill />
            <AiFillMessage />
            <RiSendPlaneFill />
          </div>
          <span>{data.likes.length} likes </span>
          <span>22 November 2022 </span>
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
          <form action="">
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
