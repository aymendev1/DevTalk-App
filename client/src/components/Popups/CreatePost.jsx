import React from "react";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { FileUploader } from "react-drag-drop-files";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import "./popup.css";
function CreatePost() {
  const [file, setFile] = React.useState(null);
  const [postContent, setpostContent] = React.useState(null);
  const [isEmojieOpen, setisEmojieOpen] = React.useState(false);
  const [imageContent, setimageContent] = React.useState(null);
  const [preview, setPreview] = React.useState();
  const fileTypes = ["JPG", "PNG", "WEBP"];
  const handleChange = (file) => {
    setFile(file);
  };
  const onEmojiClick = (emojiObject, event) => {
    setpostContent(postContent + emojiObject.emoji);
  };
  function openEmojie() {
    isEmojieOpen ? setisEmojieOpen(false) : setisEmojieOpen(true);
  }
  function previewImage(file) {
    setimageContent(file);
  }
  function DeleteImage() {
    setPreview();
    setFile(null);
    setimageContent(null);
  }
  // create a preview as a side effect, whenever selected file is changed
  React.useEffect(() => {
    if (!imageContent) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(imageContent);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageContent]);

  return (
    <div className="CreatePostPopup">
      <div className="leftS_CreatePostPopup">
        {imageContent ? (
          <div>
            <img src={preview} alt="" />
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
            onDrop={previewImage}
            onSelect={previewImage}
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
        <form action="">
          <textarea
            name="comment"
            id=""
            placeholder="What are you thinking about ? ..."
            value={postContent}
            onChange={(e) => setpostContent(e.target.value)}
          />
          <button>
            <FiShare />
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
