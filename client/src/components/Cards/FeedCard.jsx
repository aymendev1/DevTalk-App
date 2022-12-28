import React from "react";
import { RiHeart2Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Popup from "../Popups/popup";
import ShowPost from "../Popups/ShowPost";
import { getUser } from "../../api/userRequest";
import { likePost } from "../../api/PostRequest";
export default function FeedCard(props) {
  const data = props.data;
  const userData = props.userData;
  const [buttonTrigger, setButtonTrigger] = React.useState(false);
  const [PublisherData, setPublisherData] = React.useState();
  const [isLiked, setLiked] = React.useState(data.likes.includes(userData._id));
  const [Likes, setLikes] = React.useState(data.likes.length);
  function openPopUp() {
    buttonTrigger ? setButtonTrigger(false) : setButtonTrigger(true);
  }
  console.log(isLiked);
  async function getPublisherData() {
    const res = await getUser(data.userID);
    setPublisherData(res.data);
  }
  function handleLikes() {
    likePost(data._id, userData._id);
    setLiked((prev) => !prev);
    isLiked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  }
  React.useEffect(() => {
    getPublisherData();
  }, []);
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
          <img src={PublisherData ? PublisherData.profilePicture : ""} alt="" />
          <span>{PublisherData ? PublisherData.fullName : ""}</span>
        </div>
        <div className="FeedStats">
          <div className="Like">
            <button className="btnLike">
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
            </button>
            <span>{Likes}</span>
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
        <ShowPost
          data={data}
          userData={userData}
          PublisherData={PublisherData}
        />
      </Popup>
    </div>
  );
}
