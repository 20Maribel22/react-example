import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./SmallPage.css";
import CardItem from "../Card/CardItem";

import { Link } from "react-router-dom";

function SmallPage({
  loading,
  posts,
  onPostClick,
  onAddPost,
  onDeleteClick,
  onDeleteCard,
}) {
  const [showPost, setShowPost] = useState(3);

  const handlePostAdd = () => {
    console.log("click");
    setShowPost((prev) => prev + 3);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="articles">
      <div className="articles__container">
        <h1 className="articles__title">Article List</h1>
        <div className="mb-2">
          <Button className="articles__btn" variant="primary" size="lg">
            <Link className="articles__btn-link" to="/second">
              Make big cards
            </Link>
          </Button>
          <Button
            onClick={onAddPost}
            className="articles__btn"
            variant="primary"
            size="lg"
          >
            Add Article
          </Button>
        </div>
      </div>
      <div className="places">
        <ul className="cards">
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
      <div className="articles__btn_more">
        <Button
          onClick={handlePostAdd}
          style={{ display: showPost >= posts.length ? "none" : "block" }}
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

export default SmallPage;
