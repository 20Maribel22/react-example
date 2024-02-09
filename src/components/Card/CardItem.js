import React, { useState } from "react";
import "./CardItem.css";
import ToggleButtons from "../ToggleButton/ToggleButton";
import Button from 'react-bootstrap/Button';

function CardItem({ post, onPostClick, onEditClick, onDeleteCard }) {


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
    onPostClick(post);
  };

  
  const handleClickDelete = () => {
    onDeleteCard(post.id);
  }
  
  return (
    <>
    <li className="cards__item" style={{ backgroundColor: colors[colorIndex] }}>
      <div className="cards__btn-container">
        <Button onClick={handleClickDelete} className="cards__btn" variant="primary" size="sm">
          Delete
        </Button>
      </div>
      <div
        className="cards__description ellipsis"
        style={{ color: colorsText[colorIndex] }}
      >
        <h2 className="cards__title">{post.title}</h2>
        <h3 className="cards__paragraph">{post.body}</h3>
      </div>
      <ToggleButtons
        changeColor={changeColor}
        post={post}
        handleClick={handleClick}
      />
    </li>
    </>
  );
}

export default CardItem;
