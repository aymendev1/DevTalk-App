import React from "react";
import "./messages.css";
import { FiSearch } from "react-icons/fi";
import MessagesCard from "../../components/Cards/messagesCard";
import { Messages } from "../../data";
export default function MessagesView() {
  const [selectedConversation, setselectedConversation] = React.useState(null);
  console.log(selectedConversation);
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
      <div className="conversation">
        {!selectedConversation ? (
          ""
        ) : (
          <div className="conversation_header">
            <img src={selectedConversation.ProfilePicture} alt="" />
            <div>
              <span>{selectedConversation.Name}</span>
              <span>Online</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
