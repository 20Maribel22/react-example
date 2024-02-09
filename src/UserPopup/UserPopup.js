import React from 'react'
import "./UserPopup.css"

function UserPopup({ user, onClose }) {


    return (
      <div className={`modal__wrapper ${user.name ? "open" : "close"}`}>
        <div className="modal__body">
          <div className="modal__header">
            <h2 className="modal__name">User Info</h2>
            <div className="modal__close" onClick={onClose}>
              ×
            </div>
          </div>
  
          <span className="modal__line"></span>
  
          <div className="modal__title modal__title_user">{user.name}</div>
          <div className="modal__title modal__title_user">{user.email}</div>
          <div className="modal__title modal__title_user">{user.phone}</div>
        </div>
      </div>
    );
  }

export default UserPopup