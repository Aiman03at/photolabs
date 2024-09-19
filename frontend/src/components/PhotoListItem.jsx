import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  const isFavorited = props.favoritePhotos.some((favPhoto) => favPhoto.id === props.photo.id);

  return (
    <div className="photo-list__item"  >
      <PhotoFavButton 
        isSelected={isFavorited}
        onClick={() => props.toggleFavorite(props.photo)}
      />
      <img 
        className="photo-list__image" 
        src={props.photo.urls.regular} 
        alt="Description of image" 
        onClick={() => props.openModal(props.photo)}
      />
      <section className="photo-list__user-details">
        <img 
          src={props.photo.user.profile} 
          alt="Profile" 
          className="photo-list__user-profile" 
        />
        <div className="photo-list__user-info">
          <p>{props.photo.user.username}</p> 
          <div className="photo-list__user-location">
            <p>{props.photo.location.city}, {props.photo.location.country}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoListItem;
