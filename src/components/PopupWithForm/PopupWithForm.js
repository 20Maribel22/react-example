import React from "react";
import "./PopupWithForm.css";

function PopupWithForm({
  onClose,
  isOpen,
  title,
  
  text,
  name,
  onSubmit,
  children,
}) {
  return (
    <div className={`popup popup_theme_${name} ${isOpen ? "open" : "close"}`}>
      <div className="popup__body">
        <div className="popup__header">
        <h3 className="popup__title">{title}</h3>
          <div className="popup__close" onClick={onClose}>
            ×
          </div>
          
        </div>

        <form title={title} className="popup__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__button-save">
            {text}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
