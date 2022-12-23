import React from "react";
import { RiHeart2Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Popup from "../Popups/popup";
import ShowPost from "../Popups/ShowPost";
import { getUser } from "../../api/userRequest";
export default function FeedCard(props) {
  const data = props.data;
  const userData = props.userData;
  const [buttonTrigger, setButtonTrigger] = React.useState(false);
  const [PublisherData, setPublisherData] = React.useState();

  function openPopUp() {
    buttonTrigger ? setButtonTrigger(false) : setButtonTrigger(true);
  }

  async function getPublisherData() {
    const res = await getUser(data.userID);
    setPublisherData(res.data);
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
        <ShowPost
          data={data}
          userData={userData}
          PublisherData={PublisherData}
        />
      </Popup>
    </div>
  );
}
