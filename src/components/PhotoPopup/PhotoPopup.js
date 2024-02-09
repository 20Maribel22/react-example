import React from 'react'
import "./PhotoPopup.css"

function PhotoPopup({ photo, onClose }) {


    return (
      <div className={`modal__wrapper ${photo.title ? "open" : "close"}`}>
        <div className="modal__body modal__body_img">
          <div className="modal__header">
            <h2 className="modal__name">Photo Info</h2>
            <div className="modal__close" onClick={onClose}>
              ×
            </div>
          </div>
  
          <span className="modal__line"></span>
  
          <div className="modal__title">{photo.title}</div>
          <img  className='modal__img' src={photo.url} alt={photo.title} />
        </div>
      </div>
    );
  }

export default PhotoPopup