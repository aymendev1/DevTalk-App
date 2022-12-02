import React from "react";
import "./profile.css";
import DefaultCover from "../../assests/defaultCover.jpg";
import DefaultProfilePic from "../../assests/B-5285.jpg";
import { RiImageAddFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import FeedCard from "../../components/Cards/FeedCard";
import { FeedTest } from "../../data";
export default function ProfileView() {
  return (
    <div className="mainPanel Profile">
      <div className="profileHeader">
        {" "}
        <div>
          {/* Cover Image */}
          <img src={DefaultCover} alt="" />
        </div>
        <div>
          <div>
            {/* Profile Picture Image */}
            <img src={DefaultProfilePic} alt="" />

            <div>
              {/* Name */}
              <span>Aymen Dev</span>
              {/* Bio */}
              <span>Full Stack Developer.</span>
            </div>
          </div>
          <div>
            <button>
              <MdEdit />
              Edit Details
            </button>
            <button>
              <RiImageAddFill />
              Change Cover
            </button>
          </div>
        </div>
      </div>
      <div className="profileFeed">
        <span>My Feed</span>
        <div className="FeedContent">
          {FeedTest.map((feed) => {
            return <FeedCard data={feed} />;
          })}
        </div>
      </div>
    </div>
  );
}
