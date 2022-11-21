import React from "react";
import { RiHeart2Fill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
export default function FeedCard(props) {
  return (
    <div className="FeedCard">
      <div>
        <img src={props.image} alt="" />
      </div>
      <div>
        <div className="FeedPublisher">
          <img src={props.PublisherImg} alt="" />
          <span>{props.PublisherName}</span>
        </div>
        <div className="FeedStats">
          <div className="Like">
            <button className="btnLike">
              <RiHeart2Fill />
            </button>
            <span>{props.like}</span>
          </div>
          <div className="Comment">
            <button className="btnComment">
              <AiFillMessage />
            </button>
            <span>{props.commentNum}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
