import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    
    <div className="photo-list__item">
      
      <PhotoFavButton/>
      <img className="photo-list__image" src={props.sampleDataForPhotoListItem.imageSource} alt="Description of image" />
      
      
      
      <section className="photo-list__user-details">
      <img src={props.sampleDataForPhotoListItem.profile} alt="Description of image" className="photo-list__user-profile" />
      <div className="photo-list__user-info ">

      <p >{props.sampleDataForPhotoListItem.username}</p> 
      <div className="photo-list__user-location">
      <p >{props.sampleDataForPhotoListItem.location.city} ,{props.sampleDataForPhotoListItem.location.country}</p>
      </div>
      </div>
      </section>
      
    </div>
  );
};

export default PhotoListItem;
