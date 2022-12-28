import React from "react";
import { RiHeart2Line } from "react-icons/ri";
import "./Cards.css";
import { getUser } from "../../api/userRequest";
function CommentCard(props) {
  const comment = props.data;
  const [CommentPubData, setCommentData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  async function getPublisherData() {
    setLoading(true);
    const res = await getUser(comment.userID);
    setCommentData({
      ProfilePicture: res.data.profilePicture,
      username: res.data.username,
    });
    setLoading(false);
  }
  React.useEffect(() => {
    getPublisherData();
  }, []);
  return loading ? (
    ""
  ) : (
    <div className="CommentCard">
      {/* Publisher pic */}
      <div>
        <img src={CommentPubData.ProfilePicture} alt="" />
        <span>
          <span>{CommentPubData.username}</span>
          {comment.content}
        </span>
        <button>
          <RiHeart2Line />
        </button>
      </div>
      {/* Stats  */}
      <div>
        <span>{comment.date || "15 November 2022"}</span>
      </div>
    </div>
  );
}

export default CommentCard;
