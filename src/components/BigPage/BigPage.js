import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./BigPage.css";
import CardItem from "../Card/CardItem";

import { Link } from "react-router-dom";

function BigPage({
  loading,
  posts,
  onDeleteClick,
  onPostClick,
  onDeleteCard,
}) {
  const [showPost, setShowPost] = useState(2);

  const handlePostAdd = () => {
    console.log("click");
    setShowPost((prev) => prev + 2);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="small-page">
      <div className="small-page__container">
        <h1 className="small-page__title">Article List</h1>
        <div className="small-page__mb-2">
          <Button className="small-page__btn" variant="primary" size="lg">
            <Link className="articles__btn-link" to="/">
              Make small cards
            </Link>
          </Button>
        </div>
      </div>
      <div className="places">
        <ul className="small-page__cards">
          {posts.slice(0, showPost).map((post) => (
            <CardItem
              post={post}
              key={post.id}
              onPostClick={onPostClick}
              onDeleteClick={onDeleteClick}
              onDeleteCard={onDeleteCard}
            />
          ))}
        </ul>
      </div>
      <div className="small-page__btn_more">
        <Button
          style={{ display: showPost >= posts.length ? "none" : "block" }}
          onClick={handlePostAdd}
          className="btn-more"
          variant="primary"
          size="lg"
        >
          Show more
        </Button>
      </div>
    </div>
  );
}

export default BigPage;
