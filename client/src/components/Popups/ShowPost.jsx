import React from "react";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { Link } from "react-router-dom";
import { RiHeart2Fill, RiSendPlaneFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import "./popup.css";
function ShowPost(props) {
  const data = props.data;
  const [isEmojieOpen, setisEmojieOpen] = React.useState(false);
  const [chosenEmoji, setChosenEmoji] = React.useState(null);
  const [comment, setComment] = React.useState("");
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setChosenEmoji(comment + chosenEmoji.emoji);
    console.log(chosenEmoji);
  };
  console.log(comment);
  function openEmojie() {
    isEmojieOpen ? setisEmojieOpen(false) : setisEmojieOpen(true);
  }
  console.log(isEmojieOpen);
  return (
    <div className="ShowPostPopup">
      <div className="leftS_ShowPostPopup">
        <img src={data.PostImage} alt="" />
      </div>
      <div className="rightS_ShowPostPopup">
        <div>
          {/* Header */}
          <div>
            <img src={data.ProfilePicture} alt="" />
            <span>{data.Name}</span>
          </div>
          <Link to={data.name}>View profile</Link>
        </div>
        {/* Post Bio and comments*/}
        <div>
          <span>
            <span>{"@" + data.username}</span>
            {data.PostContent}
          </span>
        </div>
        {/*Like , Comment , Send */}
        <div>
          <div>
            <RiHeart2Fill />
            <AiFillMessage />
            <RiSendPlaneFill />
          </div>
          <span>{data.Likes} likes </span>
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
