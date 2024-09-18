import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  const isFavorited = props.favoritePhotos.some((favPhoto) => favPhoto.id === props.sampleDataForPhotoListItem.id);

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        isSelected={isFavorited}
        onClick={() => props.toggleFavorite(props.sampleDataForPhotoListItem)}
      />
      <img 
        className="photo-list__image" 
        src={props.sampleDataForPhotoListItem.urls.regular} 
        alt="Description of image" 
      />
      <section className="photo-list__user-details">
        <img 
          src={props.sampleDataForPhotoListItem.user.profile} 
          alt="Profile" 
          className="photo-list__user-profile" 
        />
        <div className="photo-list__user-info">
          <p>{props.sampleDataForPhotoListItem.username}</p> 
          <div className="photo-list__user-location">
            <p>{props.sampleDataForPhotoListItem.location.city}, {props.sampleDataForPhotoListItem.location.country}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoListItem;
