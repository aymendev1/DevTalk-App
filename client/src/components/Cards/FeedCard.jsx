import React from "react";
import { RiHeart2Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Popup from "../Popups/popup";
import ShowPost from "../Popups/ShowPost";
export default function FeedCard(props) {
  const data = props.data;
  const userData = props.userData;
  const [buttonTrigger, setButtonTrigger] = React.useState(false);

  function openPopUp() {
    buttonTrigger ? setButtonTrigger(false) : setButtonTrigger(true);
  }
  return (
    <div className="FeedCard">
      <div>
        <img src={data.image} alt="" />
        <div className="FeedCardImage">
          <button className="btnViewPost" onClick={openPopUp}>
            <FaEye /> View Post
          </button>
        </div>
      </div>
      <div>
        <div className="FeedPublisher">
          <img src={userData.ProfilePicture || ""} alt="" />
          <span>{userData.fullName}</span>
        </div>
        <div className="FeedStats">
          <div className="Like">
            <button className="btnLike">
              <RiHeart2Fill />
            </button>
            <span>{data.likes.length}</span>
          </div>
          <div className="Comment">
            <button className="btnComment">
              <AiFillMessage />
            </button>
            <span>{data.comments ? data.comments.length : "0"}</span>
          </div>
        </div>
      </div>
      <Popup trigger={buttonTrigger} setButtonTrigger={setButtonTrigger}>
        <ShowPost data={data} userData={userData} />
      </Popup>
    </div>
  );
}
