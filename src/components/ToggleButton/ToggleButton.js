import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import "./ToggleButton.css";

function ToggleButtons({ changeColor, handleClick }) {
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button onClick={handleClick} variant="outline-secondary">
          View
        </Button>
        <Button onClick={changeColor} variant="outline-secondary">
          Change color
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ToggleButtons;
