import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

import { v4 as uuidv4 } from 'uuid';


function AddUserPopup({ isOpen, onClose, onAddUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddUser({
        id: uuidv4(),
        name,
        email,
        phone,
        username,
        website
       
    })
  };

  useEffect(() => {
   setName('')
   setEmail('')
   setPhone('')
   setUsername('')
   setWebsite('')
  }, [isOpen])

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleChangeUserName = (event) => {
    setUsername(event.target.value)
  }

  const handleChangeWebsite = (event) => {
    setWebsite(event.target.value)
  }
  return (
    <PopupWithForm
      name="add"
      title="User info"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      text="Create"
    >
      <label className="popup__field">
        <input
          className="popup__item"
          onChange={handleChangeName}
          value={name}
          type="text"
          id="newname-item"
          name="newname"
          placeholder="Name"
          required
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__item"
          onChange={handleChangeEmail}
          value={email}
          type="text"
          id="email-item"
          name="email"
          placeholder="Email"
          required
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__item"
          onChange={handleChangePhone}
          value={phone}
          type="text"
          id="phone-item"
          name="phone"
          placeholder="Phone"
          required
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__item"
          onChange={handleChangeUserName}
          value={username}
          type="text"
          id="username-item"
          name="username"
          placeholder="User-Name"
          required
        />
      </label>
      <label className="popup__field">
        <input
          className="popup__item"
          onChange={handleChangeWebsite}
          value={website}
          type="text"
          id="website-item"
          name="website"
          placeholder="Website"
          required
        />
      </label>
    </PopupWithForm>
  );
}

export default AddUserPopup;

