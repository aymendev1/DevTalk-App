import { useState } from "react";

export default function Card(props) {
  let btnContent = "Follow";
  let btnClass = "suggestionCardBtn";
  if (props.isFollowed) {
    btnClass += " followed";
    btnContent = "Followed";
  }
  return (
    <div className="suggestionCard">
      <div>
        <img src={props.profilePicture} alt="" />
        <div>
          <span>{props.name}</span>
          <span>{"@" + props.username}</span>
        </div>
      </div>

      <div>
        <button className={btnClass} id="btnFollow">
          {btnContent}
        </button>
      </div>
    </div>
  );
}
