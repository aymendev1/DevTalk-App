import React from "react";
import "./messages.css";
import { FiSearch } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import MessagesCard from "../../components/Cards/messagesCard";
import { Messages } from "../../data";
export default function MessagesView() {
  const [selectedConversation, setselectedConversation] = React.useState(null);
  const [messageContent, setMessageContent] = React.useState(null);
  const [isEmojieOpen, setisEmojieOpen] = React.useState(false);
  const messageDiv = React.useRef();
  const onEmojiClick = (emojiObject, event) => {
    setMessageContent(messageContent + emojiObject.emoji);
  };
  function openEmojie() {
    isEmojieOpen ? setisEmojieOpen(false) : setisEmojieOpen(true);
  }
  return (
    <div className="mainPanel messages">
      <div className="conversationMenu">
        <div className="searchBar_conversationMenu">
          <FiSearch />
          <input type="text" name="searchQuery" placeholder="Search " />
        </div>
        <div>
          {Messages.map((message, index) => {
            return (
              <MessagesCard
                key={index}
                data={message}
                setselectedConversation={setselectedConversation}
              />
            );
          })}
        </div>
      </div>

      {!selectedConversation ? (
        <div className="conversation" style={{ justifyContent: "center" }}>
          <span>Select a conversation and start chatting </span>
        </div>
      ) : (
        <div className="conversation">
          {" "}
          <div className="conversation_header">
            <div>
              <img src={selectedConversation.ProfilePicture} alt="" />
              <div>
                <span>{selectedConversation.Name}</span>
                <span>Online</span>
              </div>
            </div>
          </div>
          <div className="conversation_messages" id="messages" ref={messageDiv}>
            {selectedConversation.messages.map((message) => {
              if (message.type === "received") {
                return (
                  <div className="receivedM">
                    <span>{message.content}</span>
                    <span>{message.time}</span>
                  </div>
                );
              } else if (message.type === "sent") {
                return (
                  <div className="sentM">
                    <span>{message.content}</span>
                    <span>{message.time}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="conversation_chat">
            <button>
              <ImAttachment />
            </button>
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
            <input
              type="text"
              name="message"
              id=""
              placeholder="Write your message here ..."
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            />
            <button> Send </button>
          </div>
        </div>
      )}
    </div>
  );
}
