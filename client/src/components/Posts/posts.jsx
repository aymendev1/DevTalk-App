import React from "react";
import FeedCard from "../Cards/FeedCard";
import Popup from "../Popups/popup";
import CreatePost from "../Popups/CreatePost";
import { getTimelinePosts } from "../../actions/Feed";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
function Posts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);
  const [buttonTrigger, setButtonTrigger] = React.useState(false);
  function openPopUp() {
    buttonTrigger ? setButtonTrigger(false) : setButtonTrigger(true);
  }
  React.useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  return (
    <section className="Feed">
      <div className="FeedHeader">
        <span>Feeds</span>
        <button onClick={openPopUp}>+ Create </button>
        <Popup trigger={buttonTrigger} setButtonTrigger={setButtonTrigger}>
          <CreatePost />
        </Popup>
      </div>
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
          {posts.map((feed, index) => {
            return <FeedCard data={feed} userData={user} key={index} />;
          })}
        </div>
      )}
    </section>
  );
}

export default Posts;
