import React from "react";
import "./popup.css";
import { MdClose } from "react-icons/md";
function popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="btnClose"
          onClick={() => {
            props.setButtonTrigger(false);
          }}
        >
          <MdClose />
        </button>
      </div>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default popup;
