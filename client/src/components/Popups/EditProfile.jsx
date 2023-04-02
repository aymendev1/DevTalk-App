import React from "react";
import "./popup.css";
import { useSelector } from "react-redux";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
export default function EditProfile(props) {
  const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <div className="editProfilePopup">
      <div className="leftS_EditProfile">
        <img src={user.profilePicture} alt="" />
        <button className="btn">
          <MdOutlineAddPhotoAlternate /> Change Profile Picture
        </button>
      </div>
      <div className="rightS_EditProfile">
        <form action="">
          <div>
            <span>Bio</span>
            <input type="text" name="" id="bio" />
          </div>
          <div>
            <span>Address</span>
            <input type="text" name="" id="address" />
          </div>
          <div>
            <span>Relationship Status</span>
            <input type="text" name="" id="relation_status" />
          </div>
        </form>
      </div>
    </div>
  );
}
