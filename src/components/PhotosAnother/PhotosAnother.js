import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import PhotosItem from "../PhotosItem/PhotosItem";

function PhotosAnother({ loading, photos, onPhotoClick, onDeletePhoto }) {
  const [showPhotos, setShowPhotos] = useState(2);

  const handlePhotosAdd = () => {
    setShowPhotos((prev) => prev + 2);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="small-page">
      <div className="small-page__container">
        <h1 className="small-page__title">Photo List</h1>
        <div className="small-page__mb-2">
          <Button className="small-page__btn" variant="primary" size="lg">
            <Link className="articles__btn-link" to="/photos">
              Make small cards
            </Link>
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
      <div className="small-page__btn_more">
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

export default PhotosAnother;
