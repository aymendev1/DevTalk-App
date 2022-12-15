import React from "react";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { FileUploader } from "react-drag-drop-files";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { convertToBase64 } from "../../hooks/convertToBase64";
import { uploadPost } from "../../actions/Post";
import { ThreeDots } from "react-loader-spinner";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./popup.css";
function CreatePost() {
  const [postContent, setPostContent] = React.useState(null);
  const [isEmojieOpen, setisEmojieOpen] = React.useState(false);
  const [imageContent, setImageContent] = React.useState(null);
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const uploading = useSelector((state) => state.postReducer.uploading);
  const fileTypes = ["JPG", "PNG", "WEBP"];
  const [showAlert, setshowAlert] = React.useState(false);
  const handleChange = async (file) => {
    setImageContent(await convertToBase64(file));
  };
  const onEmojiClick = (emojiObject, event) => {
    setPostContent(postContent + emojiObject.emoji);
  };
  function openEmojie() {
    isEmojieOpen ? setisEmojieOpen(false) : setisEmojieOpen(true);
  }
  function DeleteImage() {
    setImageContent(null);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userID: user._id,
      content: postContent,
      image: imageContent,
    };
    dispatch(uploadPost(newPost));
    setshowAlert(true);
    setPostContent(null);
    setImageContent(null);
    setTimeout(() => setshowAlert(false), 3000);
  };
  // create a preview as a side effect, whenever selected file is changed

  return uploading ? (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#a875fe"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  ) : (
    <div className="CreatePostPopup">
      {showAlert ? (
        <Alert
          variant="filled"
          severity="success"
          style={{
            width: "fit-content",
            left: "1%",
            position: "absolute",
            top: "2%",
          }}
        >
          Post published successfully
        </Alert>
      ) : null}
      <div className="leftS_CreatePostPopup">
        {imageContent ? (
          <div>
            <img src={imageContent} alt="" />
            <button title="Remove Picture" onClick={DeleteImage}>
              <BsFillTrashFill />
            </button>
          </div>
        ) : (
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            label=""
            hoverTitle="Drop Here"
            classes="FileUploader"
          />
        )}
      </div>
      <div className="rightS_CreatePostPopup">
        <span>Create a new post :</span>
        <div>
          {" "}
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
        </div>
        <form>
          <textarea
            name="comment"
            id=""
            placeholder="What are you thinking about ? ..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            required
          />
          <button onClick={handleSubmit}>
            <FiShare />
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
