import React from "react";
import Button from "react-bootstrap/Button";

function ConfirmPopupUser({ onConfirm, isOpen, onClose }) {
  return (
    <div className={`confirm__wrapper ${isOpen ? "open" : "close"}`}>
      <div className="confirm__body">
        <div className="confirm__close" onClick={onClose}>
          ×
        </div>
        <h3 className="confirm__title">
          Do you really want to delete this card?
        </h3>

        <div className="confirm__btn-container">
          <Button
            onClick={() => onConfirm(true)}
            className="confirm__btn"
            variant="primary"
            size="sm"
          >
            Yes
          </Button>
          <Button
            onClick={() => onConfirm(false)}
            className="confirm__btn"
            variant="primary"
            size="sm"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopupUser;
