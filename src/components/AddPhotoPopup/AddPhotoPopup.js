import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

import { v4 as uuidv4 } from 'uuid';


function AddPhotoPopup({ isOpen, onClose, onAddPhoto }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPhoto({
        id: uuidv4(),
        title,
        url
       
    })
  };

  useEffect(() => {
  setTitle('')
  setUrl('')
  }, [isOpen])

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeUrl = (event) => {
    setUrl(event.target.value);
  };

 
  
  return (
    <PopupWithForm
      name="add"
      title="Photo info"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      text="Create"
    >
      <label className="popup__field">
        <input
          className="popup__item"
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
          onChange={handleChangeUrl}
          value={url}
          type="url"
          id="url-item"
          name="url"
          placeholder="Ссылка на картинку"
          required
        />
      </label>
    
      
     
    </PopupWithForm>
  );
}

export default AddPhotoPopup;
