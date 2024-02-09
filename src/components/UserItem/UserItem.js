import React, {  useState } from "react";
import "./UserItem.css";
import ToggleButtons from "../ToggleButton/ToggleButton";
import Button from "react-bootstrap/Button";

function UserItem({ user, onUserClick, onDeleteUser }) {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "#d3d3d3",
    "#ff9999",
    "#ffff99",
    "#99ff99",
    "#66ccff",
    "#9999ff",
  ];
  const colorsText = ["#00000", "#006400", "#4b0082", "#ffffff"];
  // const randomNum =colorsText[(Math.floor( Math.random() * colorsText.length))]

  //   useEffect(() => {
  //     // setColor(Math.round(randomNum))
  //     setColor(Math.random(colors))
  // }, [])

  const changeColor = () => {
    console.log();
    const newColorIndex = colorIndex + 1;
    if (colors[newColorIndex]) setColorIndex(newColorIndex);
    else if (colorsText[newColorIndex]);
    else setColorIndex(0);
  };

  const handleClick = () => {
    onUserClick(user);
  };


  const handleClickDelete = () => {
    onDeleteUser(user.id);
  }

  return (
    <>
      <li
        className="user__item"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        <div className="user__btn-container">
          <Button onClick={handleClickDelete} className="user__btn" variant="primary" size="sm">
            Delete
          </Button>
        </div>

          <ul className="user__description ellipsis"
          style={{ color: colorsText[colorIndex] }}>
            
            <li className="user__username">{user.name}</li>
            <li className="user__username">{user.email}</li>
            <li className="user__username">{user.phone}</li>
          </ul>
        

        <ToggleButtons changeColor={changeColor} handleClick={handleClick} />
      </li>
    </>
  );
}
export default UserItem;
