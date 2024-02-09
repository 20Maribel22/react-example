import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./AddArticlePopup.css";
import { v4 as uuidv4 } from 'uuid';


function AddArticlePopup({ isOpen, onClose, onAddPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPost({
        id: uuidv4(),
        title,
        body,
       
    })
  };

  useEffect(() => {
   setTitle('')
   setBody('')
  }, [isOpen])

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  return (
    <PopupWithForm
      name="add"
      title="Article info"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      text="Create"
    >
      <label className="popup__field">
        <input
          
          onChange={handleChangeTitle}
          value={title}
          type="text"
          id="newname-item"
          name="newname"
          placeholder="Название"
          required
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__item"
          onChange={handleChangeBody}
          value={body}
          type="text"
          id="body-item"
          name="body"
          placeholder="Текст"
          required
        />
      </label>
    </PopupWithForm>
  );
}

export default AddArticlePopup;
