import React from "react";
import "./PostPopup.css";

function PostPopup({ post, onClose, isOpen }) {


  return (
    <div className={`modal__wrapper ${post.title ? "open" : "close"}`}>
      <div className="modal__body">
        <div className="modal__header">
          <h2 className="modal__name">Article Info</h2>
          <div className="modal__close" onClick={onClose}>
            ×
          </div>
        </div>

        <span className="modal__line"></span>

        <h2 className="modal__title">{post.title}</h2>
        <h3 className="modal__paragraph">{post.body}</h3>
      </div>
    </div>
  );
}

export default PostPopup;
