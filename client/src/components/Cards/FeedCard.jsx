import React from "react";
import { RiHeart2Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Popup from "../Popups/popup";
import ShowPost from "../Popups/ShowPost";
export default function FeedCard(props) {
  const data = props.data;
  const [buttonTrigger, setButtonTrigger] = React.useState(false);

  function openPopUp() {
    buttonTrigger ? setButtonTrigger(false) : setButtonTrigger(true);
  }
  return (
    <div className="FeedCard">
      <div>
        <img src={data.PostImage} alt="" />
        <div class="FeedCardImage">
          <button className="btnViewPost" onClick={openPopUp}>
            <FaEye /> View Post
          </button>
        </div>
      </div>
      <div>
        <div className="FeedPublisher">
          <img src={data.ProfilePicture} alt="" />
          <span>{data.Name}</span>
        </div>
        <div className="FeedStats">
          <div className="Like">
            <button className="btnLike">
              <RiHeart2Fill />
            </button>
            <span>{data.Likes}</span>
          </div>
          <div className="Comment">
            <button className="btnComment">
              <AiFillMessage />
            </button>
            <span>{data.comments.length}</span>
          </div>
        </div>
      </div>
      <Popup trigger={buttonTrigger} setButtonTrigger={setButtonTrigger}>
        <ShowPost data={data} />
      </Popup>
    </div>
  );
}
