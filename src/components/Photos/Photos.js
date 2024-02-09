import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PhotosItem from "../PhotosItem/PhotosItem";

function Photos({ loading, photos, onPhotoClick, onDeletePhoto, onAddPhoto }) {
  const [showPhotos, setShowPhotos] = useState(3);

  const handlePhotosAdd = () => {
    setShowPhotos((prev) => prev + 3);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="articles">
      <div className="articles__container">
        <h1 className="articles__title">Photos List</h1>
        <div className="mb-2">
          <Button className="articles__btn" variant="primary" size="lg">
            <Link className="articles__btn-link" to="/another-photos">
              Make big cards
            </Link>
          </Button>
          <Button
            onClick={onAddPhoto}
            className="articles__btn"
            variant="primary"
            size="lg"
          >
            Add Photos
          </Button>
        </div>
      </div>
      <div className="places">
        <ul className="cards">
          {photos.slice(0, showPhotos).map((photo) => (
            <PhotosItem
              photo={photo}
              key={photo.id}
              onPhotoClick={onPhotoClick}
              onDeletePhoto={onDeletePhoto}
            />
          ))}
        </ul>
      </div>
      <div className="articles__btn_more">
        <Button
          onClick={handlePhotosAdd}
          className="btn-more"
          variant="primary"
          size="lg"
          style={{ display: showPhotos >= photos.length ? "none" : "block" }}
        >
          Show more
        </Button>
      </div>
    </div>
  );
}

export default Photos;
