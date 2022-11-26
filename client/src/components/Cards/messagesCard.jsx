import React from "react";
import "./Cards.css";
function messagesCard(props) {
  const Data = props.data;
  const lastMessage = Data.messages.slice(-1).pop();

  return (
    <div
      className="messagesCard"
      onClick={() => {
        props.setselectedConversation(props.data);
      }}
    >
      <img src={Data.ProfilePicture} alt="" />
      <div>
        <div>
          <span>{Data.Name}</span>
          <span>{lastMessage.time}</span>
        </div>

        <span>{lastMessage.content}</span>
      </div>
    </div>
  );
}

export default messagesCard;
