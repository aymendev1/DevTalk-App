import React from "react";
import "./profile.css";
import DefaultCover from "../../assests/defaultCover.jpg";
import DefaultProfilePic from "../../assests/B-5285.jpg";
import { RiImageAddFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import FeedCard from "../../components/Cards/FeedCard";
import { useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import Popup from "../../components/Popups/popup";
import EditProfile from "../../components/Popups/EditProfile";
export default function ProfileView() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  const [buttonTrigger, setButtonTrigger] = React.useState(false);
  const [buttonTrigger2, setButtonTrigger2] = React.useState(false);
  function openPopUp() {
    buttonTrigger ? setButtonTrigger(false) : setButtonTrigger(true);
  }
  function openPopUp2() {
    buttonTrigger2 ? setButtonTrigger2(false) : setButtonTrigger2(true);
  }
  return (
    <div className="mainPanel Profile">
      <div className="profileHeader">
        {" "}
        <div>
          {/* Cover Image */}
          <img
            src={user.coverPicture ? user.coverPicture : DefaultCover}
            alt=""
          />
        </div>
        <div>
          <div>
            {/* Profile Picture Image */}
            <img
              src={
                user.profilePicture ? user.profilePicture : DefaultProfilePic
              }
              alt=""
            />

            <div>
              {/* Name */}
              <span>{user.fullName}</span>
              {/* Bio */}
              <span>{user.bio ? user.bio : "No bio yet"}</span>
            </div>
          </div>
          <div>
            <button onClick={openPopUp}>
              <MdEdit />
              Edit Details
            </button>

            <button onClick={openPopUp2}>
              <RiImageAddFill />
              Change Cover
            </button>
          </div>
        </div>
      </div>

      <div className="profileFeed">
        <span>My Feed</span>
        {loading ? (
          <div style={{ alignSelf: "center" }}>
            <TailSpin
              height="80"
              width="80"
              color="#a875fe"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="FeedContent">
            {posts
              .filter((post) => post.userID === user._id)
              .map((feed, index) => {
                return <FeedCard data={feed} userData={user} key={index} />;
              })}
          </div>
        )}
      </div>
      <Popup trigger={buttonTrigger} setButtonTrigger={setButtonTrigger}>
        <EditProfile />
      </Popup>
      <Popup trigger={buttonTrigger2} setButtonTrigger={setButtonTrigger2}>
        Testing cover
      </Popup>
    </div>
  );
}
